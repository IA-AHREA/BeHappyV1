import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import type { FlipEvent } from 'react-pageflip';
import type { BookPage } from '../data/pages';
import Controls from './Controls';
import Page from './Page';

interface BookProps {
  pages: BookPage[];
  /** Called with a page id whenever the reader reaches that page's spread. */
  onPageRead?: (id: string) => void;
  /** When true, art pages show a panel to replace their illustration with a custom photo, and
   * text pages show a panel to edit their phrase or delete the page. */
  devMode?: boolean;
  /** Saved custom images, keyed by page id. */
  customImages?: Record<string, string>;
  onSaveImage?: (id: string, dataUrl: string) => Promise<void>;
  onRemoveImage?: (id: string) => Promise<void>;
  onEditPhrase?: (id: string, phrase: string) => Promise<void>;
  onDeletePage?: (id: string) => Promise<void>;
}

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
export default function Book({
  pages,
  onPageRead,
  devMode,
  customImages,
  onSaveImage,
  onRemoveImage,
  onEditPhrase,
  onDeletePage,
}: BookProps) {
  const bookRef = useRef<HTMLFlipBook>(null);
  const [leafIndex, setLeafIndex] = useState(0);

  const totalSpreads = pages.length;
  // Most pages contribute 2 leaves (text + art); a `textOnly` page (e.g. a closing note with no
  // photo) contributes just 1, so a reader never has to flip past an empty art side to finish the
  // book. This map turns a physical leaf index into "which page is this?", handling that mix.
  const leafPageMap = useMemo(() => {
    const map: number[] = [];
    pages.forEach((page, pageIndex) => {
      map.push(pageIndex);
      if (!page.textOnly) map.push(pageIndex);
    });
    return map;
  }, [pages]);
  const lastLeafIndex = leafPageMap.length - 1;
  const spread = leafPageMap[Math.min(leafIndex, lastLeafIndex)] ?? 0;
  const atStart = leafIndex <= 0;
  const atEnd = leafIndex >= lastLeafIndex;

  useEffect(() => {
    if (totalSpreads === 0) return;
    onPageRead?.(pages[spread].id);
    if (spread === totalSpreads - 1) {
      onPageRead?.('completo');
    }
  }, [spread, totalSpreads, onPageRead, pages]);

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

  if (totalSpreads === 0) {
    return (
      <p className="max-w-sm px-6 text-center font-sans text-sm text-[#cbb9a0]/80">
        No quedan páginas en el libro. Agregá una desde el modo desarrollador (⚙️).
      </p>
    );
  }

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
          {pages.flatMap((page, i) => {
            const leaves = [
              <Leaf key={`text-${page.id}`}>
                <Page
                  side="text"
                  index={i}
                  phrase={page.phrase}
                  devMode={devMode}
                  onEditPhrase={(phrase) => onEditPhrase?.(page.id, phrase) ?? Promise.resolve()}
                  onDeletePage={() => onDeletePage?.(page.id) ?? Promise.resolve()}
                />
              </Leaf>,
            ];
            if (!page.textOnly) {
              leaves.push(
                <Leaf key={`art-${page.id}`}>
                  <Page
                    side="art"
                    index={i}
                    Illustration={page.Illustration}
                    customImage={customImages?.[page.id]}
                    devMode={devMode}
                    onSaveImage={(dataUrl) => onSaveImage?.(page.id, dataUrl) ?? Promise.resolve()}
                    onRemoveImage={() => onRemoveImage?.(page.id) ?? Promise.resolve()}
                  />
                </Leaf>,
              );
            }
            return leaves;
          })}
        </HTMLFlipBook>
      </div>

      <Controls spread={spread} total={totalSpreads} atStart={atStart} atEnd={atEnd} onPrev={goPrev} onNext={goNext} />
    </div>
  );
}
