declare module 'react-pageflip' {
  import { Component, CSSProperties, ReactNode } from 'react';

  export interface FlipEvent {
    data: number;
  }

  export interface OrientationEvent {
    data: 'portrait' | 'landscape';
  }

  export interface StateEvent {
    data: 'user_fold' | 'fold_corner' | 'flipping' | 'read';
  }

  export interface HTMLFlipBookProps {
    width: number;
    height: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    swipeDistance?: number;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    renderOnlyPageLengthChange?: boolean;
    startPage?: number;
    disableFlipByClick?: boolean;
    showPageCorners?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    onFlip?: (event: FlipEvent) => void;
    onChangeOrientation?: (event: OrientationEvent) => void;
    onChangeState?: (event: StateEvent) => void;
    onInit?: (event: { data: unknown }) => void;
    onUpdate?: (event: { data: unknown }) => void;
  }

  export interface PageFlip {
    flipNext(corner?: 'top' | 'bottom'): void;
    flipPrev(corner?: 'top' | 'bottom'): void;
    flip(page: number, corner?: 'top' | 'bottom'): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
  }

  export default class HTMLFlipBook extends Component<HTMLFlipBookProps> {
    pageFlip(): PageFlip;
  }
}
