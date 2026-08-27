import assert from "node:assert/strict";
import { test } from "node:test";

import {
  CLOSING_TRANSITION_DURATION_MS,
  resolveVisualPresentation,
} from "./resolvePresentation.ts";

const fieldPresentation = {
  fieldOpacity: 0.28,
  starOpacity: 0.72,
  nodeOpacity: 0.46,
  edgeOpacity: 0.1,
  hubIntensity: 0.5,
  pulseEnabled: false,
  flashEnabled: false,
  transitionDurationMs: 1400,
  relevantNodeIds: [],
  relevantEdgeKeys: [],
  actionNodeId: null,
};

test("preserves ordinary FIELD presentation timing and targets", () => {
  const resolved = resolveVisualPresentation(
    fieldPresentation,
    { visualState: "field", transitionIntent: "default" },
    false,
  );

  assert.equal(resolved.transitionDurationMs, 1400);
  assert.equal(resolved.hubIntensityTransitionDurationMs, 0);
  assert.equal(resolved.hubIntensity, 0.5);
  assert.deepEqual(resolved.relevantNodeIds, []);
  assert.deepEqual(resolved.relevantEdgeKeys, []);
  assert.equal(resolved.actionNodeId, null);
});

test("preserves default SYSTEM, RELEVANCE, and ACTION timing", () => {
  for (const [visualState, transitionDurationMs] of [
    ["system", 1400],
    ["relevance", 2200],
    ["action", 1600],
  ]) {
    const resolved = resolveVisualPresentation(
      { ...fieldPresentation, transitionDurationMs },
      { visualState, transitionIntent: "default" },
      false,
    );

    assert.equal(resolved.transitionDurationMs, transitionDurationMs);
    assert.equal(resolved.hubIntensityTransitionDurationMs, 0);
  }
});

test("resolves closing FIELD without changing its destination targets", () => {
  const resolved = resolveVisualPresentation(
    fieldPresentation,
    { visualState: "field", transitionIntent: "closing" },
    false,
  );

  assert.equal(
    resolved.transitionDurationMs,
    CLOSING_TRANSITION_DURATION_MS,
  );
  assert.equal(resolved.hubIntensityTransitionDurationMs, 2200);
  assert.equal(resolved.fieldOpacity, fieldPresentation.fieldOpacity);
  assert.equal(resolved.starOpacity, fieldPresentation.starOpacity);
  assert.equal(resolved.nodeOpacity, fieldPresentation.nodeOpacity);
  assert.equal(resolved.edgeOpacity, fieldPresentation.edgeOpacity);
  assert.equal(resolved.hubIntensity, fieldPresentation.hubIntensity);
  assert.equal(resolved.pulseEnabled, false);
  assert.equal(resolved.flashEnabled, false);
});

test("settles closing FIELD immediately for reduced motion", () => {
  const resolved = resolveVisualPresentation(
    fieldPresentation,
    { visualState: "field", transitionIntent: "closing" },
    true,
  );

  assert.equal(resolved.transitionDurationMs, 0);
  assert.equal(resolved.hubIntensityTransitionDurationMs, 0);
  assert.equal(resolved.hubIntensity, 0.5);
});
