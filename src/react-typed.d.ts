declare module "react-typed" {
  import React from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    shuffle?: boolean;
    loop?: boolean;
    loopCount?: number;
    showCursor?: boolean;
    cursorChar?: string;
    contentType?: string;
    onComplete?: () => void;
    onStringTyped?: (arrayPos: number) => void;
    onLastStringBackspaced?: () => void;
    onTypingPaused?: (arrayPos: number) => void;
    onTypingResumed?: (arrayPos: number) => void;
    onReset?: () => void;
    preStringTyped?: (arrayPos: number) => void;
  }

  const Typed: React.FC<TypedProps>;
  export default Typed;
}
