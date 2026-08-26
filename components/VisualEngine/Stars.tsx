"use client";

import type { Star } from "./types";

type Props = {
  stars: Star[];
  opacity: number;
  transitionDurationMs: number;
};

export default function Stars({
  stars,
  opacity,
  transitionDurationMs,
}: Props) {
  return (
    <>
      {stars.map((star) => (
        <circle
          key={star.id}
          cx={star.x}
          cy={star.y}
          r={star.radius}
          fill="white"
          opacity={star.opacity * opacity}
          style={{
            transition: `opacity ${transitionDurationMs}ms ease-in-out`,
          }}
        />
      ))}
    </>
  );
}

