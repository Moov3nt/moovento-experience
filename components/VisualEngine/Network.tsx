"use client";

import { COLORS, ENGINE } from "./constants";
import type { Edge, Hub } from "./Types";
import type { SceneConfig } from "./scenes";

type Props = {
  hubs: Hub[];
  edges: Edge[];
  config: SceneConfig;
};

export default function Network({
  hubs,
  edges,
  config,
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
            strokeWidth={0.08}
            strokeLinecap="round"
            opacity={config.edgeOpacity}
            style={{
              transition:
                "opacity 900ms ease-in-out",
            }}
          />
        );
      })}

      {/* GLOW */}

      {hubs.map((hub) => (
        <circle
          key={`glow-${hub.id}`}
          cx={hub.x}
          cy={hub.y}
          r={
            hub.dominant
              ? ENGINE.glowRadius
              : ENGINE.glowRadius * 0.55
          }
          fill="url(#hubGlow)"
          opacity={config.glow}
          style={{
            transition:
              "opacity 900ms ease-in-out",
          }}
        />
      ))}

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