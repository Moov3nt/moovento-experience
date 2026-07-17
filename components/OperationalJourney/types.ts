export type EventContext = {
  readonly id: string;
  readonly name: string;
  readonly place: string;
  readonly window: string;
};

export type EvidenceItem = {
  readonly label: string;
  readonly value: string;
};

export type Situation = {
  readonly id: string;
  readonly title: string;
  readonly observedAt: string;
  readonly summary: string;
  readonly evidence: readonly EvidenceItem[];
};

export type OpportunityStatus =
  | "identified"
  | "accepted"
  | "reviewed"
  | "approved";

export type Opportunity = {
  readonly id: string;
  readonly title: string;
  readonly status: OpportunityStatus;
  readonly statusLabel: string;
  readonly rationale: string;
  readonly owner?: string;
  readonly decisionNote?: string;
};

export type Governance = {
  readonly currentStep: string;
  readonly accountableRole: string;
  readonly recordedAt: string;
  readonly statement: string;
};

export type MissionStatus = "planned" | "started" | "achieved";

export type Mission = {
  readonly id: string;
  readonly title: string;
  readonly status: MissionStatus;
  readonly statusLabel: string;
  readonly accountableTeam: string;
  readonly target: string;
  readonly scheduledWindow: string;
  readonly progressCopy?: string;
  readonly achievementValues?: readonly EvidenceItem[];
};

export type OutcomeMeasure = {
  readonly label: string;
  readonly planned: string;
  readonly recorded: string;
};

export type Outcome = {
  readonly id: string;
  readonly recordedAt: string;
  readonly summary: string;
  readonly measures: readonly OutcomeMeasure[];
};

export type EvolutionFact = {
  readonly id: string;
  readonly occurredAt: string;
  readonly title: string;
  readonly statement: string;
};

export type StageKey =
  | "identified"
  | "accepted"
  | "reviewed"
  | "approved"
  | "started"
  | "achieved"
  | "recorded";

export type JourneyAction =
  | "accept-opportunity"
  | "record-review"
  | "approve-and-plan-mission"
  | "start-mission"
  | "record-mission-achieved"
  | "record-outcome";

export type StageSnapshot = {
  readonly id: string;
  readonly key: StageKey;
  readonly position: number;
  readonly timestamp: string;
  readonly eventContext: EventContext;
  readonly situation: Situation;
  readonly opportunity: Opportunity;
  readonly governance?: Governance;
  readonly mission?: Mission;
  readonly outcome?: Outcome;
  readonly evolutionFact?: EvolutionFact;
  readonly terminalStatus?: string;
};
