import assert from "node:assert/strict";
import { test } from "node:test";

import { ROMA_SUMMER_LIVE_STAGES } from "./scenario";

test("defines the exact deterministic initial snapshot", () => {
  assert.deepEqual(ROMA_SUMMER_LIVE_STAGES[0], {
    id: "STAGE-01-IDENTIFIED",
    key: "identified",
    position: 1,
    timestamp: "2026-07-18T16:40:00+02:00",
    eventContext: {
      id: "EVT-ROMA-SUMMER-LIVE-2026",
      name: "Roma Summer Live",
      place: "Foro Italico, Roma",
      window: "18 luglio 2026, 18:00–23:30",
    },
    situation: {
      id: "SIT-PARKING-PRESSURE-001",
      title: "Pressione prevista sui parcheggi primari",
      observedAt: "2026-07-18T16:40:00+02:00",
      summary:
        "Gli arrivi previsti superano la capacità utile dell’area primaria e si concentrano prima dell’apertura dei cancelli.",
      evidence: [
        { label: "Arrivi previsti entro le 20:30", value: "6.800 veicoli" },
        { label: "Posti disponibili nell’area primaria", value: "4.900" },
        { label: "Occupazione prevista alle 20:00", value: "96%" },
        { label: "Area secondaria disponibile", value: "1.450 posti" },
        {
          label: "Pressione identificata",
          value: "Accessi concentrati su due varchi",
        },
      ],
    },
    opportunity: {
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "identified",
      statusLabel: "Identificata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
    },
  });
});

test("keeps exact stage ordering, identifiers, and timestamps", () => {
  assert.deepEqual(
    ROMA_SUMMER_LIVE_STAGES.map(({ id, key, position, timestamp }) => ({
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

  assertDeeplyFrozen(ROMA_SUMMER_LIVE_STAGES);
});
