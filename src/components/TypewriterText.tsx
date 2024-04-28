"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  delay: number;
  cursor?: boolean;
  className?: string;
}

export default function TypewriterText({
  text,
  delay,
  cursor = true,
  className,
}: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(cursor);

  const cursorClass = showCursor ? "show-cursor" : "";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // show cursor blink only briefly after typing is finished
      if (showCursor) {
        const timeout = setTimeout(() => {
          setShowCursor(false);
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, delay, text, showCursor]);
  return <span className={`${className} ${cursorClass}`}>{currentText}</span>;
}
