"use client";

import { COLORS, ENGINE } from "./constants";
import type { Edge, Hub } from "./types";
import type { VisualPresentation } from "./scenes";

type Props = {
  hubs: Hub[];
  edges: Edge[];
  presentation: VisualPresentation;
  energy: number[];
  breath: number;
};

export default function Network({
  hubs,
  edges,
  presentation,
  energy,
  breath,
}: Props) {
  
  const hubMap = new Map(
    hubs.map((hub) => [hub.id, hub]),
  );
  const selectedNodeIds = new Set(presentation.selectedNodeIds);
  const selectedEdgeKeys = new Set(presentation.selectedEdgeKeys);

  return (
    <>
      {/* CONNECTIONS */}

      {edges.map((edge) => {
        const from = hubMap.get(edge.from);
        const to = hubMap.get(edge.to);

        if (!from || !to) return null;

        const selected = selectedEdgeKeys.has(`${edge.from}-${edge.to}`);

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
            opacity={selected ? 1 : presentation.edgeOpacity}
            style={{
              transition: `opacity ${presentation.transitionDurationMs}ms ease-in-out`,
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
        opacity={(0.015 + breath * 0.03 + e * 0.03) * presentation.hubIntensity}
      />

      <circle
        cx={hub.x}
        cy={hub.y}
        r={base * (1.15 + e * 0.35)}
        fill={COLORS.glow}
        opacity={(0.045 + breath * 0.05 + e * 0.06) * presentation.hubIntensity}
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
          opacity={selectedNodeIds.has(hub.id) ? 1 : presentation.nodeOpacity}
          style={{
            transition: `opacity ${presentation.transitionDurationMs}ms ease-in-out`,
          }}
        />
      ))}
    </>
  );
}

