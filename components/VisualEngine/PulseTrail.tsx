"use client";

import { COLORS } from "./constants";
import type { Edge, Hub } from "./types";

type Props = {
  hubs: Hub[];
  edges: Edge[];
  edgeIndex: number;
  progress: number;
};

export default function PulseTrail({
  hubs,
  edges,
  edgeIndex,
  progress,
}: Props) {
  const edge = edges[edgeIndex];

  if (!edge) return null;

  const from = hubs.find((h) => h.id === edge.from);
  const to = hubs.find((h) => h.id === edge.to);

  if (!from || !to) return null;

  const x2 =
    from.x +
    (to.x - from.x) * progress;

  const y2 =
    from.y +
    (to.y - from.y) * progress;

    return (
        <>
          <defs>
            <linearGradient
              id="pulseTrail"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor={COLORS.glow}
                stopOpacity="0.65"
              />
      
              <stop
                offset="70%"
                stopColor={COLORS.glow}
                stopOpacity="0.28"
              />
      
              <stop
                offset="100%"
                stopColor={COLORS.glow}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
      
          <line
            x1={from.x}
            y1={from.y}
            x2={x2}
            y2={y2}
            stroke="url(#pulseTrail)"
            strokeWidth={0.18}
            strokeLinecap="round"
            opacity={0.55}
          />
        </>
      );
}

