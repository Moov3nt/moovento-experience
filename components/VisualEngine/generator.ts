import { ENGINE, DEPTH } from "./constants";
import { hash, lerp } from "./math";
import { buildGraph } from "./graph";
import { createNavigator } from "./navigator";

import type {
  Star,
  Hub,
  VisualScene,
} from "./Types";
import { buildAdjacency } from "./graphData";

type Cluster = {
  x: number;
  y: number;
};

const CLUSTERS: Cluster[] = [
  { x: 26, y: 28 }, // dominante
  { x: 42, y: 66 },
  { x: 58, y: 40 },
  { x: 74, y: 64 },
  { x: 82, y: 28 },
  { x: 66, y: 76 },
];

function randomDepth(index: number): "far" | "mid" | "near" {
  const r = hash(ENGINE.seed, index);

  if (r < 0.70) return "far";
  if (r < 0.93) return "mid";

  return "near";
}

function createHubs(multiplier: number): Hub[] {
  const hubs: Hub[] = [];

  let id = 0;

  CLUSTERS.forEach((cluster, clusterIndex) => {
    const count = Math.max(
      1,
      Math.round(multiplier)
    );

    for (let i = 0; i < count; i++) {
      const angle =
        hash(ENGINE.seed, id * 13) *
        Math.PI *
        2;

      const distance =
        hash(ENGINE.seed, id * 17) *
        2.5;

      hubs.push({
        id,

        x:
          cluster.x +
          Math.cos(angle) * distance,

        y:
          cluster.y +
          Math.sin(angle) * distance,

        radius:
          clusterIndex === 0 && i === 0
            ? 1.35
            : 0.65,

        dominant:
          clusterIndex === 0 && i === 0,
      });

      id++;
    }
  });

  return hubs;
}

function createStars(starCount: number): Star[] {
  const stars: Star[] = [];

  for (let i = 0; i < starCount; i++) {
    const cluster =
      CLUSTERS[
        Math.floor(
          hash(ENGINE.seed, i * 9) *
            CLUSTERS.length
        )
      ];

    const depth = randomDepth(i);

    const cfg = DEPTH[depth];

    const spread =
      depth === "far"
        ? 16
        : depth === "mid"
        ? 10
        : 6;

    const angle =
      hash(ENGINE.seed, i * 13) *
      Math.PI *
      2;

    const radius =
      hash(ENGINE.seed, i * 17) *
      spread;

    stars.push({
      id: i,

      x:
        cluster.x +
        Math.cos(angle) * radius,

      y:
        cluster.y +
        Math.sin(angle) * radius,

      radius: lerp(
        cfg.radius[0],
        cfg.radius[1],
        hash(ENGINE.seed, i * 5)
      ),

      opacity: lerp(
        cfg.opacity[0],
        cfg.opacity[1],
        hash(ENGINE.seed, i * 7)
      ),

      depth,
    });
  }

  return stars;
}

export function generateScene(
  multiplier = 1
): VisualScene {
  const hubs = createHubs(multiplier);

  const stars = createStars(
    Math.round(
      ENGINE.starCount * multiplier
    )
  );

  const edges = buildGraph(hubs);
  const adjacency = buildAdjacency(edges);
  const navigator = createNavigator(edges);
  return {
    hubs,
    stars,
    edges,
    navigator,
    adjacency,
  };
}