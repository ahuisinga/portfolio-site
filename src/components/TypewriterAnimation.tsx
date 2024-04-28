"use client";
import TypewriterText from "./TypewriterText";

export default function TypewriterAnimation() {
  return (
    <div className="flex flex-col">
      <TypewriterText
        text="DEVELOPER."
        keyStrokeDelay={100}
        cursor={true}
        stopCursor={true}
        className="text-3xl font-bold text-red-300 xl:text-4xl"
      />
      <TypewriterText
        text="WOMAN IN TECH."
        keyStrokeDelay={100}
        cursor={true}
        stopCursor={true}
        initialDelay={1000}
        className="text-3xl font-bold text-amber-300 xl:text-4xl"
      />
      <TypewriterText
        text="LIFE-LONG SPORTS FAN."
        keyStrokeDelay={100}
        cursor={true}
        stopCursor={true}
        initialDelay={2400}
        className="text-3xl font-bold text-emerald-500 xl:text-4xl"
      />
      <TypewriterText
        text="LOVER OF PASTA AND CHEESE."
        keyStrokeDelay={100}
        cursor={true}
        initialDelay={4500}
        className="text-3xl font-bold text-cyan-400 xl:text-4xl"
      />
    </div>
  );
}
