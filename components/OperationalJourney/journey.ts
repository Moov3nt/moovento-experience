import { ROMA_SUMMER_LIVE_STAGES } from "./scenario";
import type { JourneyAction, StageSnapshot } from "./types";

const transitions: Readonly<
  Record<
    JourneyAction,
    Readonly<{ from: StageSnapshot["key"]; toPosition: number }>
  >
> = Object.freeze({
  "accept-opportunity": { from: "identified", toPosition: 2 },
  "record-review": { from: "accepted", toPosition: 3 },
  "approve-and-plan-mission": { from: "reviewed", toPosition: 4 },
  "start-mission": { from: "approved", toPosition: 5 },
  "record-mission-achieved": { from: "started", toPosition: 6 },
  "record-outcome": { from: "achieved", toPosition: 7 },
});

export function initialStage(): StageSnapshot {
  return ROMA_SUMMER_LIVE_STAGES[0];
}

export function currentStage(position: number): StageSnapshot | undefined {
  return ROMA_SUMMER_LIVE_STAGES[position - 1];
}

export function availableAction(stage: StageSnapshot): JourneyAction | undefined {
  for (const [action, transition] of Object.entries(transitions)) {
    if (transition.from === stage.key) {
      return action as JourneyAction;
    }
  }

  return undefined;
}

export function advance(
  stage: StageSnapshot,
  action: JourneyAction,
): StageSnapshot {
  const transition = transitions[action];

  if (transition.from !== stage.key) {
    return stage;
  }

  return currentStage(transition.toPosition) ?? stage;
}

export function reset(): StageSnapshot {
  return initialStage();
}
