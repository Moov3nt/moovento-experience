import assert from "node:assert/strict";
import { test } from "node:test";

import { resolveSceneObservationTransition } from "./sceneObservation.ts";

test("ignores an initial callback below the threshold", () => {
  assert.equal(resolveSceneObservationTransition(false, false), null);
});

test("reports one enter and one reverse exit per cycle", () => {
  const thresholds = [true, true, false, false, true];
  const transitions = [];
  let wasWithinThreshold = false;

  for (const isWithinThreshold of thresholds) {
    transitions.push(
      resolveSceneObservationTransition(
        wasWithinThreshold,
        isWithinThreshold,
      ),
    );
    wasWithinThreshold = isWithinThreshold;
  }

  assert.deepEqual(transitions, ["enter", null, "exit", null, "enter"]);
});
