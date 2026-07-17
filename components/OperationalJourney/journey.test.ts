import assert from "node:assert/strict";
import { test } from "node:test";

import {
  advance,
  availableAction,
  currentStage,
  initialStage,
  reset,
} from "./journey";
import type { JourneyAction } from "./types";

const progression: readonly JourneyAction[] = [
  "accept-opportunity",
  "record-review",
  "approve-and-plan-mission",
  "start-mission",
  "record-mission-achieved",
  "record-outcome",
];

test("returns the canonical initial stage", () => {
  assert.equal(initialStage().id, "STAGE-01-IDENTIFIED");
  assert.strictEqual(initialStage(), currentStage(1));
});

test("advances through every exact transition", () => {
  let stage = initialStage();

  progression.forEach((action, index) => {
    assert.equal(availableAction(stage), action);
    stage = advance(stage, action);
    assert.equal(stage.position, index + 2);
  });

  assert.equal(stage.id, "STAGE-07-RECORDED");
  assert.equal(availableAction(stage), undefined);
});

test("returns the unchanged stage for an invalid transition", () => {
  const stage = initialStage();
  assert.strictEqual(advance(stage, "record-review"), stage);
});

test("returns the unchanged stage for a duplicate transition", () => {
  const accepted = advance(initialStage(), "accept-opportunity");
  assert.strictEqual(advance(accepted, "accept-opportunity"), accepted);
});

test("reset restores the original immutable snapshot", () => {
  const advanced = advance(initialStage(), "accept-opportunity");
  assert.notStrictEqual(advanced, initialStage());
  assert.strictEqual(reset(), initialStage());
  assert.equal(Object.isFrozen(reset()), true);
});

test("never mutates an input stage", () => {
  const stage = initialStage();
  const before = structuredClone(stage);

  advance(stage, "accept-opportunity");

  assert.deepEqual(stage, before);
  assert.strictEqual(stage, initialStage());
});

test("produces the same ordered references for repeated journeys", () => {
  const runJourney = () => {
    const stages = [initialStage()];

    for (const action of progression) {
      stages.push(advance(stages.at(-1)!, action));
    }

    return stages;
  };

  const first = runJourney();
  const second = runJourney();

  assert.deepEqual(first.map(({ id }) => id), second.map(({ id }) => id));
  first.forEach((stage, index) => assert.strictEqual(stage, second[index]));
});
