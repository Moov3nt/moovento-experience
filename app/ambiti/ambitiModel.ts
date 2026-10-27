import { OPERATIONAL_PROOF } from "@/components/OperationalProof/operationalProofProjection";

export type ProductMaturity =
  | "demonstrable-now"
  | "architecturally-supported"
  | "unknown"
  | "future";

export type EvidenceKind =
  | "modelled"
  | "derived"
  | "unknown"
  | "architecture"
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

export const AMBITI_MODEL = Object.freeze({
  scenario: {
    name: `${OPERATIONAL_PROOF.id} · ${OPERATIONAL_PROOF.title}`,
    classification: OPERATIONAL_PROOF.classification,
  },
  origin: {
    condition: {
      label: "Occupazione parcheggi iniziale · MODELLED",
      value: OPERATIONAL_PROOF.outcomes[0].initial,
    },
    intervention: OPERATIONAL_PROOF.decision.selectedAction,
  },
  derivedOutcomes: OPERATIONAL_PROOF.outcomes,
  territories: [
    {
      id: "mobility",
      label: "Mobilità: parcheggi e traffico",
      maturity: "demonstrable-now",
      evidenceKind: "derived",
      statusLabel: "Output derivati · scenario modellato",
    },
    {
      id: "access",
      label: "Accessibilità e accessi alla venue",
      maturity: "unknown",
      evidenceKind: "unknown",
      statusLabel: "Dimensione di valutazione · impatto reale sconosciuto",
      evidence:
        "La dimensione appartiene al contesto di mobilità, ma RV-03 non stabilisce un effetto reale su accessibilità o accessi.",
    },
    {
      id: "coordination",
      label: "Coordinamento operativo",
      maturity: "architecturally-supported",
      evidenceKind: "architecture",
      statusLabel: "Tracciabilità dimostrata nello scenario controllato",
      evidence:
        "Due azioni candidate conducono a una Decisione governata e a una Missione; non è dimostrata un’esecuzione sul campo.",
    },
    {
      id: "knowledge",
      label: "Conoscenza dell’evento",
      maturity: "unknown",
      evidenceKind: "unknown",
      statusLabel: "Learning non stabilito",
      evidence:
        "Senza osservazioni reali e ricevute durevoli di esecuzione, non può essere dichiarato un apprendimento operativo.",
    },
  ] satisfies readonly OperationalTerritory[],
  maturityLevels: [
    {
      maturity: "demonstrable-now",
      label: "Dimostrato nello scenario controllato",
      evidenceKind: "derived",
      statement:
        "Input modellati, due alternative, una Decisione governata, una Missione e output derivati con esiti di direzione diversa.",
    },
    {
      maturity: "architecturally-supported",
      label: "Architetturalmente supportato",
      evidenceKind: "architecture",
      statement:
        "Evidenze, interpretazione, Decisione, Missione ed effetti possono restare nello stesso percorso tracciabile.",
    },
    {
      maturity: "unknown",
      label: "Sconosciuto nel mondo reale",
      evidenceKind: "unknown",
      statement:
        "Impatto operativo, causalità, valore economico, risultato ESG e Learning richiedono dati reali e valutazione successiva.",
    },
    {
      maturity: "future",
      label: "Altri contesti",
      evidenceKind: "future",
      statement:
        "L’estensione ad altri sistemi resta una possibilità da qualificare con fonti, responsabilità e criteri propri.",
    },
  ] satisfies readonly MaturityLevel[],
});
