import { useCallback, useEffect, useRef, useState } from 'react';

/** C major pentatonic across two octaves — any random ordering of these stays consonant. */
const SCALE_HZ = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

const SCHEDULE_INTERVAL_MS = 200;
const LOOKAHEAD_SECONDS = 1.2;
const MIN_NOTE_GAP = 1.8;
const MAX_NOTE_GAP = 3.6;
const FADE_IN_SECONDS = 2.5;
const FADE_OUT_SECONDS = 1.2;
const MASTER_VOLUME = 0.5;

function createAudioContext(): AudioContext {
  const AudioContextCtor: typeof AudioContext =
    window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  return new AudioContextCtor();
}

/** A short synthesized decay used as a convolution impulse response — a reverb tail with no audio asset. */
function createReverbImpulse(context: AudioContext, duration = 2.6, decay = 3): AudioBuffer {
  const rate = context.sampleRate;
  const length = Math.floor(rate * duration);
  const impulse = context.createBuffer(2, length, rate);
  for (let channel = 0; channel < 2; channel++) {
    const data = impulse.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

/** Plays one soft, piano-like note (sine + triangle overtone through a lowpass) with a slow release. */
function playNote(context: AudioContext, destination: AudioNode, frequency: number, time: number, volume: number) {
  const fundamental = context.createOscillator();
  fundamental.type = 'sine';
  fundamental.frequency.value = frequency;

  const overtone = context.createOscillator();
  overtone.type = 'triangle';
  overtone.frequency.value = frequency * 2;

  const overtoneGain = context.createGain();
  overtoneGain.gain.value = 0.18;

  const filter = context.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 2200;
  filter.Q.value = 0.7;

  const gain = context.createGain();
  const attack = 0.02;
  const decay = 0.6;
  const release = 3.2;
  const sustainLevel = Math.max(volume * 0.35, 0.0001);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(volume, time + attack);
  gain.gain.exponentialRampToValueAtTime(sustainLevel, time + attack + decay);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + attack + decay + release);

  fundamental.connect(filter);
  overtone.connect(overtoneGain);
  overtoneGain.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  const stopTime = time + attack + decay + release + 0.1;
  fundamental.start(time);
  overtone.start(time);
  fundamental.stop(stopTime);
  overtone.stop(stopTime);
}

interface AmbientPianoNodes {
  context: AudioContext;
  masterGain: GainNode;
  dryGain: GainNode;
  reverbGain: GainNode;
}

/**
 * A tiny generative ambient-piano player: original, royalty-free audio synthesized
 * entirely in the browser (no bundled audio file) — a slow random walk over a
 * pentatonic scale, each note voiced with a soft piano-like envelope and a
 * synthesized reverb tail.
 */
export function useAmbientPiano() {
  const [playing, setPlaying] = useState(false);
  const nodesRef = useRef<AmbientPianoNodes | null>(null);
  const nextNoteTimeRef = useRef(0);
  const schedulerIdRef = useRef<number | null>(null);

  const scheduleLoop = useCallback(() => {
    const nodes = nodesRef.current;
    if (!nodes) return;
    const { context, dryGain, reverbGain } = nodes;
    while (nextNoteTimeRef.current < context.currentTime + LOOKAHEAD_SECONDS) {
      const frequency = SCALE_HZ[Math.floor(Math.random() * SCALE_HZ.length)];
      const volume = 0.12 + Math.random() * 0.06;
      playNote(context, dryGain, frequency, nextNoteTimeRef.current, volume);
      playNote(context, reverbGain, frequency, nextNoteTimeRef.current, volume);
      nextNoteTimeRef.current += MIN_NOTE_GAP + Math.random() * (MAX_NOTE_GAP - MIN_NOTE_GAP);
    }
  }, []);

  const stop = useCallback(() => {
    if (schedulerIdRef.current !== null) {
      window.clearInterval(schedulerIdRef.current);
      schedulerIdRef.current = null;
    }
    const nodes = nodesRef.current;
    if (nodes) {
      const { context, masterGain } = nodes;
      const now = context.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(masterGain.gain.value, now);
      masterGain.gain.linearRampToValueAtTime(0, now + FADE_OUT_SECONDS);
      window.setTimeout(() => {
        context.close().catch(() => undefined);
      }, FADE_OUT_SECONDS * 1000 + 100);
      nodesRef.current = null;
    }
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    if (nodesRef.current) return;
    const context = createAudioContext();

    const masterGain = context.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(context.destination);

    const dryGain = context.createGain();
    dryGain.gain.value = 0.7;
    dryGain.connect(masterGain);

    const convolver = context.createConvolver();
    convolver.buffer = createReverbImpulse(context);
    const reverbGain = context.createGain();
    reverbGain.gain.value = 0.55;
    reverbGain.connect(convolver);
    convolver.connect(masterGain);

    nodesRef.current = { context, masterGain, dryGain, reverbGain };
    nextNoteTimeRef.current = context.currentTime + 0.1;

    const now = context.currentTime;
    masterGain.gain.linearRampToValueAtTime(MASTER_VOLUME, now + FADE_IN_SECONDS);

    scheduleLoop();
    schedulerIdRef.current = window.setInterval(scheduleLoop, SCHEDULE_INTERVAL_MS);
    setPlaying(true);
  }, [scheduleLoop]);

  const toggle = useCallback(() => {
    if (nodesRef.current) {
      stop();
    } else {
      start();
    }
  }, [start, stop]);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  return { playing, toggle };
}
