import type { Hub, Edge } from "./types";
import { distance } from "./math";

export function buildGraph(hubs: Hub[]): Edge[] {
  const edges: Edge[] = [];

  const linked = new Set<string>();

  function connect(a: number, b: number) {
    const key =
      a < b ? `${a}-${b}` : `${b}-${a}`;

    if (linked.has(key)) return;

    linked.add(key);

    edges.push({
      from: a,
      to: b,
      primary: false,
    });
  }

  // ogni hub si collega ai due piÃ¹ vicini

  hubs.forEach((hub) => {

    const nearest = hubs
      .filter(h => h.id !== hub.id)
      .map(other => ({
        id: other.id,
        d: distance(hub, other),
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);

    nearest.forEach(n => connect(hub.id, n.id));

  });

  // una sola connessione lunga

  let maxDistance = 0;

  let pair = [0, 1];

  for (let i = 0; i < hubs.length; i++) {

    for (let j = i + 1; j < hubs.length; j++) {

      const d = distance(hubs[i], hubs[j]);

      if (d > maxDistance) {

        maxDistance = d;

        pair = [
          hubs[i].id,
          hubs[j].id,
        ];
      }

    }

  }

  connect(pair[0], pair[1]);
  // evidenzia le connessioni lunghe

edges.forEach((edge) => {
  const from = hubs.find(
    (h) => h.id === edge.from,
  );

  const to = hubs.find(
    (h) => h.id === edge.to,
  );

  if (!from || !to) return;

  const d = distance(from, to);

  if (d > 22) {
    edge.primary = true;
  }
});
  return edges;
}

