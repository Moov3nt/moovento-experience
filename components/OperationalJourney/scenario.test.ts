import assert from "node:assert/strict";
import { test } from "node:test";

import { RV03_CONTROLLED_STAGES } from "./scenario";

test("defines the exact deterministic initial snapshot", () => {
  assert.deepEqual(RV03_CONTROLLED_STAGES[0], {
    id: "STAGE-01-IDENTIFIED",
    key: "identified",
    position: 1,
    timestamp: "2026-07-18T16:40:00+02:00",
    eventContext: {
      id: "EVT-RV03-CONTROLLED",
      name: "RV-03 · Mobilità di un grande evento",
      place: "Scenario sintetico controllato",
      window: "Finestra temporale modellata",
    },
    situation: {
      id: "SIT-RV03-MOBILITY-001",
      title: "Condizioni iniziali modellate",
      observedAt: "2026-07-18T16:40:00+02:00",
      summary:
        "Gli input appartengono a una dimostrazione controllata e non sono misure raccolte sul campo.",
      evidence: [
        { label: "Occupazione parcheggi iniziale · MODELLED", value: "96%" },
        { label: "Rapporto velocità relativa iniziale · MODELLED", value: "0,40" },
        { label: "Azioni candidate", value: "2" },
        { label: "Impatto reale", value: "UNKNOWN" },
      ],
    },
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "identified",
      statusLabel: "Identificata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
    },
  });
});

test("keeps exact stage ordering, identifiers, and timestamps", () => {
  assert.deepEqual(
    RV03_CONTROLLED_STAGES.map(({ id, key, position, timestamp }) => ({
      id,
      key,
      position,
      timestamp,
    })),
    [
      { id: "STAGE-01-IDENTIFIED", key: "identified", position: 1, timestamp: "2026-07-18T16:40:00+02:00" },
      { id: "STAGE-02-ACCEPTED", key: "accepted", position: 2, timestamp: "2026-07-18T16:48:00+02:00" },
      { id: "STAGE-03-REVIEWED", key: "reviewed", position: 3, timestamp: "2026-07-18T17:02:00+02:00" },
      { id: "STAGE-04-APPROVED", key: "approved", position: 4, timestamp: "2026-07-18T17:15:00+02:00" },
      { id: "STAGE-05-STARTED", key: "started", position: 5, timestamp: "2026-07-18T17:30:00+02:00" },
      { id: "STAGE-06-ACHIEVED", key: "achieved", position: 6, timestamp: "2026-07-18T20:32:00+02:00" },
      { id: "STAGE-07-RECORDED", key: "recorded", position: 7, timestamp: "2026-07-18T20:45:00+02:00" },
    ],
  );
});

test("deep-freezes every scenario snapshot", () => {
  const assertDeeplyFrozen = (value: unknown): void => {
    if (value === null || typeof value !== "object") return;

    assert.equal(Object.isFrozen(value), true);
    Object.values(value).forEach(assertDeeplyFrozen);
  };

  assertDeeplyFrozen(RV03_CONTROLLED_STAGES);
});
