"use client";

import { COLORS } from "./constants";
import type { Hub } from "./types";

type Props = {
  hubs: Hub[];
  activeHub: number;
};

export default function NodeFlash({
  hubs,
  activeHub,
}: Props) {
  const hub = hubs.find(
    (h) => h.id === activeHub,
  );

  if (!hub) return null;

  return (
    <circle
      cx={hub.x}
      cy={hub.y}
      r={hub.radius * 2.4}
      fill={COLORS.glow}
      opacity={0.18}
    />
  );
}