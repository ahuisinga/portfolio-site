"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  keyStrokeDelay: number;
  cursor?: boolean;
  className?: string;
  initialDelay?: number;
  stopCursor?: boolean;
}

export default function TypewriterText({
  text,
  keyStrokeDelay,
  cursor = true,
  className,
  initialDelay = 0,
  stopCursor = false,
}: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(cursor);
  const [useInitialDelay, setUseIntialDelay] = useState(initialDelay);

  // show the cursor only if set and after initial delay
  const cursorClass = showCursor && useInitialDelay == 0 ? "show-cursor" : "";

  useEffect(() => {
    if (useInitialDelay > 0) {
      const timeout = setTimeout(() => {
        setUseIntialDelay(0);
      }, useInitialDelay);

      return () => clearTimeout(timeout);
    } else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, keyStrokeDelay);

        return () => clearTimeout(timeout);
      } else {
        // stop cursor after typing is finished if needed
        if (showCursor && stopCursor) {
          const timeout = setTimeout(() => {
            setShowCursor(false);
          }, 500);

          return () => clearTimeout(timeout);
        }
      }
    }
  }, [
    currentIndex,
    keyStrokeDelay,
    text,
    showCursor,
    stopCursor,
    useInitialDelay,
  ]);
  return (
    <span className={`${className} ${cursorClass} whitespace-pre-line`}>
      {currentText}
    </span>
  );
}
