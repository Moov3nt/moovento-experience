"use client";

export default function Background() {
  return (
    <>
      <defs>
        <radialGradient
          id="backgroundGlow"
          cx="70%"
          cy="35%"
          r="70%"
        >
          <stop
            offset="0%"
            stopColor="#87996A"
            stopOpacity="0.03"
          />

          <stop
            offset="45%"
            stopColor="#5D6752"
            stopOpacity="0.015"
          />

          <stop
            offset="100%"
            stopColor="#050505"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <rect
        width="100"
        height="100"
        fill="url(#backgroundGlow)"
      />
    </>
  );
}