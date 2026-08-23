import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Plays the book's uploaded background song. The <audio> element is created once (not per-url)
 * so that `play()` can be called synchronously from within a real user click (e.g. the "Continuar"
 * button on the password gate) without losing the browser's autoplay-with-sound permission —
 * creating a fresh Audio object at that point, or awaiting anything first, can lose that.
 */
export function useBackgroundMusic(url: string | null) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.addEventListener('pause', () => setPlaying(false));
    audio.addEventListener('play', () => setPlaying(true));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !url) return;
    const wasPlaying = !audio.paused;
    audio.src = url;
    if (wasPlaying) audio.play().catch(() => {});
  }, [url]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  return { playing, play, toggle, hasMusic: Boolean(url) };
}
