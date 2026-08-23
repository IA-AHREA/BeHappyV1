import type { ComponentType } from 'react';
import DevImagePanel from '../dev/DevImagePanel';
import DevTextPanel from '../dev/DevTextPanel';

interface TextPageProps {
  side: 'text';
  index: number;
  phrase: string;
  devMode?: boolean;
  onEditPhrase?: (phrase: string) => Promise<void>;
  onDeletePage?: () => Promise<void>;
}

interface ArtPageProps {
  side: 'art';
  index: number;
  Illustration?: ComponentType;
  customImage?: string;
  devMode?: boolean;
  onSaveImage?: (dataUrl: string) => Promise<void>;
  onRemoveImage?: () => Promise<void>;
}

type PageProps = TextPageProps | ArtPageProps;

/** Most phrases are 2-4 words and read well huge; longer ones (a dedication, an edited phrase) need to shrink to fit the fixed-size page instead of overflowing it. */
function textSizeClass(phrase: string): string {
  if (phrase.length <= 40) return 'text-[clamp(22px,4.6vw,34px)]';
  if (phrase.length <= 90) return 'text-[clamp(17px,3.6vw,26px)]';
  return 'text-[clamp(13px,2.8vw,20px)]';
}

/** A single leaf of the book: either a handwritten phrase or its animated illustration (or a custom photo). */
export default function Page(props: PageProps) {
  const folio = String(props.index + 1).padStart(2, '0');

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-paper">
      {props.side === 'text' ? (
        <>
          <p
            className={`whitespace-pre-line px-[10%] text-center font-caveat ${textSizeClass(props.phrase)} font-semibold leading-tight text-ink`}
          >
            {props.phrase}
            <span className="text-accent">.</span>
          </p>
          {props.devMode && props.onEditPhrase && props.onDeletePage && (
            <DevTextPanel phrase={props.phrase} onSave={props.onEditPhrase} onDelete={props.onDeletePage} />
          )}
        </>
      ) : (
        <>
          <div className="flex h-full w-full items-center justify-center p-[7%]">
            {props.customImage ? (
              <img src={props.customImage} alt="" className="h-full w-full object-contain" />
            ) : props.Illustration ? (
              <props.Illustration />
            ) : (
              <p className="px-[10%] text-center font-sans text-xs text-ink-soft/50">
                Sin imagen todavía
              </p>
            )}
          </div>
          {props.devMode && (
            <DevImagePanel
              hasCustomImage={Boolean(props.customImage)}
              onSave={props.onSaveImage}
              onRemove={props.onRemoveImage}
            />
          )}
        </>
      )}
      <div className="absolute bottom-[5%] left-0 right-0 text-center font-sans text-[10px] tracking-[0.2em] text-ink-soft/60">
        {folio}
      </div>
    </div>
  );
}
