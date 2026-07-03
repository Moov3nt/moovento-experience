import type { Hub } from "./types";
import { distance } from "./math";

type Point = {
  x: number;
  y: number;
};

export function fieldInfluence(
  point: Point,
  hubs: Hub[],
) {
  let total = 0;

  for (const hub of hubs) {
    const d = Math.max(
      distance(point, hub),
      0.001,
    );

    const power =
      hub.dominant ? 2.2 : 1;

    total += power / (d * d);
  }

  return total;
}

export function nearestHub(
  point: Point,
  hubs: Hub[],
) {
  let nearest = hubs[0];

  let nearestDistance = Infinity;

  for (const hub of hubs) {
    const d = distance(point, hub);

    if (d < nearestDistance) {
      nearestDistance = d;
      nearest = hub;
    }
  }

  return nearest;
}

export function moveTowardsHub(
  point: Point,
  hub: Hub,
  strength: number,
) {
  return {
    x: point.x + (hub.x - point.x) * strength,
    y: point.y + (hub.y - point.y) * strength,
  };
}

