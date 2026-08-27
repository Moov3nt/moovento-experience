import { ROMA_SUMMER_LIVE_STAGES } from "../OperationalJourney/scenario";
import type { StageSnapshot } from "../OperationalJourney/types";

type MeasuredFact = Readonly<{
  status: "measured";
  label: string;
  target: string;
  recorded: string;
}>;

type SystemRelationship = Readonly<{
  status: "relationship";
  dimension: string;
  evidence: string;
}>;

export type OperationalProofProjection = Readonly<{
  scenario: Readonly<{
    name: string;
    place: string;
    date: string;
  }>;
  situation: Readonly<{
    label: string;
    value: string;
  }>;
  intervention: Readonly<{
    accountableRole: string;
    action: string;
    accountableTeam: string;
    target: string;
  }>;
  measuredDimension: string;
  measuredFacts: readonly MeasuredFact[];
  relationships: readonly SystemRelationship[];
  retainedEvidence: Readonly<{
    title: string;
    statement: string;
  }>;
}>;

function requireStage(key: StageSnapshot["key"]): StageSnapshot {
  const stage = ROMA_SUMMER_LIVE_STAGES.find((candidate) => candidate.key === key);

  if (!stage) {
    throw new Error(`Operational proof requires the ${key} scenario stage.`);
  }

  return stage;
}

function requireItem<T extends Readonly<{ label: string }>>(
  items: readonly T[],
  label: string,
): T {
  const item = items.find((candidate) => candidate.label === label);

  if (!item) {
    throw new Error(`Operational proof requires the “${label}” scenario fact.`);
  }

  return item;
}

function requireValue<T>(value: T | undefined, name: string): T {
  if (value === undefined) {
    throw new Error(`Operational proof requires ${name}.`);
  }

  return value;
}

const identifiedStage = requireStage("identified");
const reviewedStage = requireStage("reviewed");
const approvedStage = requireStage("approved");
const recordedStage = requireStage("recorded");

const mission = requireValue(approvedStage.mission, "the approved mission");
const governance = requireValue(
  approvedStage.governance,
  "the approving governance record",
);
const reviewGovernance = requireValue(
  reviewedStage.governance,
  "the operational review record",
);
const outcome = requireValue(recordedStage.outcome, "the recorded outcome");
const evolutionFact = requireValue(
  recordedStage.evolutionFact,
  "the retained evolution fact",
);

const occupancyForecast = requireItem(
  identifiedStage.situation.evidence,
  "Occupazione prevista alle 20:00",
);
const accessPressure = requireItem(
  identifiedStage.situation.evidence,
  "Pressione identificata",
);
const redirectedVehicles = requireItem(
  outcome.measures,
  "Veicoli verso area secondaria",
);
const primaryOccupancy = requireItem(
  outcome.measures,
  "Occupazione area primaria",
);

export const OPERATIONAL_PROOF = Object.freeze({
  scenario: {
    name: identifiedStage.eventContext.name,
    place: identifiedStage.eventContext.place,
    date: identifiedStage.eventContext.window.split(",")[0],
  },
  situation: {
    label: "Occupazione prevista area primaria",
    value: occupancyForecast.value,
  },
  intervention: {
    accountableRole: governance.accountableRole,
    action: mission.title,
    accountableTeam: mission.accountableTeam,
    target: mission.target,
  },
  measuredDimension: "Mobilità e parcheggi",
  measuredFacts: [
    {
      status: "measured",
      label: redirectedVehicles.label,
      target: redirectedVehicles.planned,
      recorded: redirectedVehicles.recorded,
    },
    {
      status: "measured",
      label: primaryOccupancy.label,
      target: primaryOccupancy.planned,
      recorded: primaryOccupancy.recorded,
    },
  ],
  relationships: [
    {
      status: "relationship",
      dimension: "Flussi di accesso",
      evidence: accessPressure.value,
    },
    {
      status: "relationship",
      dimension: "Coordinamento operativo",
      evidence: reviewGovernance.statement,
    },
    {
      status: "relationship",
      dimension: "Conoscenza dell’evento",
      evidence: evolutionFact.statement,
    },
  ],
  retainedEvidence: {
    title: evolutionFact.title,
    statement: evolutionFact.statement,
  },
} satisfies OperationalProofProjection);
