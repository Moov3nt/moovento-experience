"use client";

import { COLORS, ENGINE } from "./constants";
import type { Edge, Hub } from "./types";
import type { SceneConfig } from "./scenes";

type Props = {
  hubs: Hub[];
  edges: Edge[];
  config: SceneConfig;
  energy: number[];
  breath: number;
};

export default function Network({
  hubs,
  edges,
  config,
  energy,
  breath,
}: Props) {
  
  const hubMap = new Map(
    hubs.map((hub) => [hub.id, hub]),
  );

  return (
    <>
      <defs>
        <radialGradient id="hubGlow">
          <stop
            offset="0%"
            stopColor={COLORS.glow}
            stopOpacity={0.22 * config.glow}
          />

          <stop
            offset="45%"
            stopColor={COLORS.glow}
            stopOpacity={0.05 * config.glow}
          />

          <stop
            offset="100%"
            stopColor={COLORS.glow}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* CONNECTIONS */}

      {edges.map((edge) => {
        const from = hubMap.get(edge.from);
        const to = hubMap.get(edge.to);

        if (!from || !to) return null;

        return (
          <line
            key={`${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={COLORS.edge}
            strokeWidth={
                edge.primary
                  ? 0.16
                  : 0.10
            }
            strokeLinecap="round"
            opacity={
                  edge.primary
                  ? 0.20
                  : 0.12
            }
            style={{
              transition:
                "opacity 900ms ease-in-out",
            }}
          />
        );
      })}

     {/* GLOW */}

{hubs.map((hub) => {
  const e = energy[hub.id] ?? 0;

  const base =
    hub.dominant
      ? ENGINE.glowRadius
      : ENGINE.glowRadius * 0.55;

  return (
    <g key={`glow-${hub.id}`}>
      <circle
        cx={hub.x}
        cy={hub.y}
        r={base * (1.8 + e * 0.6)}
        fill={COLORS.glow}
        opacity={0.015 + breath * 0.015 + e * 0.03}
      />

      <circle
        cx={hub.x}
        cy={hub.y}
        r={base * (1.15 + e * 0.35)}
        fill={COLORS.glow}
        opacity={0.045 + breath * 0.025 + e * 0.06}
      />
    </g>
  );
})}

      {/* HUBS */}

      {hubs.map((hub) => (
        <circle
          key={hub.id}
          cx={hub.x}
          cy={hub.y}
          r={hub.radius}
          fill={COLORS.hub}
        />
      ))}
    </>
  );
}