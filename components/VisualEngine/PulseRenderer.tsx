"use client";

import type { Edge, Hub } from "./types";

type Props = {
  hubs: Hub[];
  edges: Edge[];
  progress: number;
  edgeIndex?: number;
};

export default function PulseRenderer({
  hubs,
  edges,
  progress,
  edgeIndex = 0,
}: Props) {
  const edge = edges[edgeIndex];

  if (!edge) {
    return null;
  }

  const from = hubs.find(
    (h) => h.id === edge.from,
  );

  const to = hubs.find(
    (h) => h.id === edge.to,
  );

  if (!from || !to) {
    return null;
  }

  const x =
    from.x +
    (to.x - from.x) * progress;

  const y =
    from.y +
    (to.y - from.y) * progress;

  return (
    <>
      <circle
        cx={x}
        cy={y}
        r={0.8}
        fill="#D9F99D"
      />

      <circle
        cx={x}
        cy={y}
        r={2.4}
        fill="#D9F99D"
        opacity={0.15}
      />
    </>
  );
}

