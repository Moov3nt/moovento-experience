import assert from "node:assert/strict";
import { test } from "node:test";

import {
  applyHubArrival,
  createHubEnergy,
} from "./useHubEnergy.ts";

test("initializes every hub with zero energy", () => {
  assert.deepEqual(createHubEnergy(3), [0, 0, 0]);
});

test("decays energy, floors at zero, and assigns the active hub", () => {
  const next = applyHubArrival(
    [0.01, 0.5, 0],
    { activeHub: 2, hubCount: 3 },
  );

  assert.deepEqual(next, [0, 0.48, 1]);
});

test("preserves repeated-arrival ordering and bounds", () => {
  const first = applyHubArrival(
    createHubEnergy(2),
    { activeHub: 0, hubCount: 2 },
  );
  const repeated = applyHubArrival(
    first,
    { activeHub: 0, hubCount: 2 },
  );
  const invalid = applyHubArrival(
    repeated,
    { activeHub: 2, hubCount: 2 },
  );

  assert.deepEqual(first, [1, 0]);
  assert.deepEqual(repeated, [1, 0]);
  assert.deepEqual(invalid, [0.98, 0]);
  assert.equal(invalid.length, 2);
});
