"use client";

import type { Star } from "./Types";

type Props = {
  stars: Star[];
};

export default function Stars({ stars }: Props) {
  return (
    <>
      {stars.map((star) => (
        <circle
          key={star.id}
          cx={star.x}
          cy={star.y}
          r={star.radius}
          fill="white"
          opacity={star.opacity}
        />
      ))}
    </>
  );
}