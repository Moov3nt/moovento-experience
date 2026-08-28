import { OPERATIONAL_PROOF } from "@/components/OperationalProof/operationalProofProjection";

export type ProductMaturity =
  | "demonstrable-now"
  | "architecturally-supported"
  | "conceptually-extensible"
  | "future";

export type EvidenceKind =
  | "measured"
  | "supported-relationship"
  | "retained-evidence"
  | "architecture"
  | "extension"
  | "future";

export type OperationalTerritory = Readonly<{
  id: "mobility" | "access" | "coordination" | "knowledge";
  label: string;
  maturity: ProductMaturity;
  evidenceKind: EvidenceKind;
  statusLabel: string;
  evidence?: string;
}>;

type MaturityLevel = Readonly<{
  maturity: ProductMaturity;
  label: string;
  evidenceKind: EvidenceKind;
  statement: string;
}>;

function requireRelationship(dimension: string) {
  const relationship = OPERATIONAL_PROOF.relationships.find(
    (candidate) => candidate.dimension === dimension,
  );

  if (!relationship) {
    throw new Error(
      `Ambiti requires the “${dimension}” operational relationship.`,
    );
  }

  return relationship;
}

const access = requireRelationship("Flussi di accesso");
const coordination = requireRelationship("Coordinamento operativo");
const knowledge = requireRelationship("Conoscenza dell’evento");

export const AMBITI_MODEL = Object.freeze({
  scenario: OPERATIONAL_PROOF.scenario,
  origin: {
    condition: OPERATIONAL_PROOF.situation,
    intervention: OPERATIONAL_PROOF.intervention.action,
  },
  measuredFacts: OPERATIONAL_PROOF.measuredFacts,
  territories: [
    {
      id: "mobility",
      label: OPERATIONAL_PROOF.measuredDimension,
      maturity: "demonstrable-now",
      evidenceKind: "measured",
      statusLabel: "Misurato nello scenario",
    },
    {
      id: "access",
      label: access.dimension,
      maturity: "demonstrable-now",
      evidenceKind: "supported-relationship",
      statusLabel: "Relazione supportata · non misurata come KPI",
      evidence: access.evidence,
    },
    {
      id: "coordination",
      label: coordination.dimension,
      maturity: "demonstrable-now",
      evidenceKind: "supported-relationship",
      statusLabel: "Relazione supportata · non misurata come KPI",
      evidence: coordination.evidence,
    },
    {
      id: "knowledge",
      label: knowledge.dimension,
      maturity: "demonstrable-now",
      evidenceKind: "retained-evidence",
      statusLabel: "Evidenza registrata nello scenario",
      evidence: OPERATIONAL_PROOF.retainedEvidence.statement,
    },
  ] satisfies readonly OperationalTerritory[],
  maturityLevels: [
    {
      maturity: "demonstrable-now",
      label: "Dimostrabile ora",
      evidenceKind: "measured",
      statement:
        "Misure registrate nella mobilità; relazioni supportate negli accessi, nel coordinamento e nella conoscenza dell’evento.",
    },
    {
      maturity: "architecturally-supported",
      label: "Architetturalmente supportato",
      evidenceKind: "architecture",
      statement:
        "Situazione, responsabilità, intervento, esito ed evidenza possono restare nello stesso percorso operativo.",
    },
    {
      maturity: "conceptually-extensible",
      label: "Concettualmente estensibile",
      evidenceKind: "extension",
      statement:
        "Nuove dimensioni richiedono fonti, responsabilità e criteri di evidenza propri.",
    },
    {
      maturity: "future",
      label: "Futuro",
      evidenceKind: "future",
      statement:
        "Contesti non ancora qualificati restano possibilità, non capacità dichiarate.",
    },
  ] satisfies readonly MaturityLevel[],
});
