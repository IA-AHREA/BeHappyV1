import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import type { FlipEvent } from 'react-pageflip';
import { pages } from '../data/pages';
import Controls from './Controls';
import Page from './Page';

const TOTAL_SPREADS = pages.length;
const LAST_LEAF_INDEX = TOTAL_SPREADS * 2 - 2;

interface LeafProps {
  children: ReactNode;
}

/** A single physical leaf react-pageflip can measure and flip; content lives in Page. */
const Leaf = forwardRef<HTMLDivElement, LeafProps>(function Leaf({ children }, ref) {
  return (
    <div ref={ref} className="bg-paper">
      {children}
    </div>
  );
});

/** The interactive flip-book: wires react-pageflip to our pages, keyboard nav, and controls. */
export default function Book() {
  const bookRef = useRef<HTMLFlipBook>(null);
  const [leafIndex, setLeafIndex] = useState(0);

  const spread = Math.floor(leafIndex / 2);
  const atStart = leafIndex <= 0;
  const atEnd = leafIndex >= LAST_LEAF_INDEX;

  const goPrev = useCallback(() => {
    bookRef.current?.pageFlip().flipPrev();
  }, []);

  const goNext = useCallback(() => {
    bookRef.current?.pageFlip().flipNext();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev]);

  const handleFlip = useCallback((event: FlipEvent) => {
    setLeafIndex(event.data);
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="w-full max-w-3xl px-2">
        <HTMLFlipBook
          ref={bookRef}
          width={360}
          height={480}
          size="stretch"
          minWidth={260}
          maxWidth={520}
          minHeight={340}
          maxHeight={680}
          maxShadowOpacity={0.4}
          showCover={false}
          usePortrait
          mobileScrollSupport={false}
          swipeDistance={20}
          flippingTime={850}
          drawShadow
          className="mx-auto"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.45))' }}
          onFlip={handleFlip}
        >
          {pages.flatMap((page, i) => [
            <Leaf key={`text-${page.id}`}>
              <Page side="text" index={i} phrase={page.phrase} />
            </Leaf>,
            <Leaf key={`art-${page.id}`}>
              <Page side="art" index={i} Illustration={page.Illustration} />
            </Leaf>,
          ])}
        </HTMLFlipBook>
      </div>

      <Controls spread={spread} total={TOTAL_SPREADS} atStart={atStart} atEnd={atEnd} onPrev={goPrev} onNext={goNext} />
    </div>
  );
}
