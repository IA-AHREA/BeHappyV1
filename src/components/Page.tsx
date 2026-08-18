import type { ComponentType } from 'react';
import DevImagePanel from '../dev/DevImagePanel';

interface TextPageProps {
  side: 'text';
  index: number;
  phrase: string;
}

interface ArtPageProps {
  side: 'art';
  index: number;
  Illustration: ComponentType;
  customImage?: string;
  devMode?: boolean;
  onSaveImage?: (dataUrl: string) => void;
  onRemoveImage?: () => void;
}

type PageProps = TextPageProps | ArtPageProps;

/** A single leaf of the book: either a handwritten phrase or its animated illustration (or a custom photo). */
export default function Page(props: PageProps) {
  const folio = String(props.index + 1).padStart(2, '0');

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-paper">
      {props.side === 'text' ? (
        <p className="whitespace-pre-line px-[10%] text-center font-caveat text-[clamp(22px,4.6vw,34px)] font-semibold leading-tight text-ink">
          {props.phrase}
          <span className="text-accent">.</span>
        </p>
      ) : (
        <>
          <div className="flex h-full w-full items-center justify-center p-[7%]">
            {props.customImage ? (
              <img src={props.customImage} alt="" className="h-full w-full object-contain" />
            ) : (
              <props.Illustration />
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
