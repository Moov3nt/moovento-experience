export type EvidenceState = "MODELLED" | "DERIVED" | "UNKNOWN";

export type EvidenceBoundary = Readonly<{
  state: EvidenceState;
  label: string;
  description: string;
}>;

export type CandidateAction = Readonly<{
  id: string;
  title: string | null;
  selected: boolean;
  sourceAvailable: boolean;
}>;

export type DerivedOutcome = Readonly<{
  id: "parking" | "traffic";
  label: string;
  measure: string;
  initial: string;
  final: string;
  delta: string;
  direction: "adverse" | "favorable";
  directionLabel: string;
}>;

export type ProjectedKpi = Readonly<{
  id: string;
  dimension: "Parcheggi" | "Traffico";
  label: string;
  definitionIdentity: string;
  definition: string;
  result: string;
  expectedEffectId: string;
  observedEffectId: string;
}>;

export type OperationalProofProjection = Readonly<{
  id: "RV-03";
  title: string;
  classification: string;
  sourceNote: string;
  evidenceBoundary: readonly EvidenceBoundary[];
  problem: string;
  contextDimensions: readonly string[];
  candidateActions: readonly CandidateAction[];
  decision: Readonly<{
    count: 1;
    label: string;
    selectedAction: string;
  }>;
  mission: Readonly<{
    count: 1;
    label: string;
    identity: string;
    specification: string;
    executionEvidenceCount: 2;
    executionStatus: string;
    sourceAvailable: true;
  }>;
  outcomes: readonly DerivedOutcome[];
  projectedKpis: Readonly<{
    count: 4;
    mode: "read-only";
    results: readonly ProjectedKpi[];
  }>;
  durableKpiExecutionReceipts: 0;
  demonstrates: readonly string[];
  doesNotDemonstrate: readonly string[];
}>;

export const OPERATIONAL_PROOF = Object.freeze({
  id: "RV-03",
  title: "Mobilità di un grande evento",
  classification: "Dimostrazione sperimentale · scenario sintetico controllato",
  sourceNote:
    "Sintesi RV-03 verificata contro i registri sperimentali RV-02: evidence-register, operational-walkthrough, kpi-and-value e relativi estratti machine-readable.",
  evidenceBoundary: [
    {
      state: "MODELLED",
      label: "Input di scenario",
      description: "Dati sintetici forniti al sistema per la dimostrazione.",
    },
    {
      state: "DERIVED",
      label: "Output di sistema",
      description: "Risultati prodotti nel perimetro dello scenario controllato.",
    },
    {
      state: "UNKNOWN",
      label: "Impatto reale",
      description: "Effetti sul campo e benefici per un organizzatore non stabiliti.",
    },
  ],
  problem:
    "Valutare una scelta di mobilità considerando insieme parcheggi e condizioni del traffico, senza confondere una proiezione controllata con un risultato operativo reale.",
  contextDimensions: [
    "Arrivi",
    "Parcheggi",
    "Traffico",
    "Accessibilità",
    "Accessi alla venue",
    "Esperienza degli spettatori",
  ],
  candidateActions: [
    {
      id: "candidate-selected",
      title: "Private-Vehicle Arrival Window Staggering",
      selected: true,
      sourceAvailable: true,
    },
    {
      id: "candidate-demand-coordination",
      title: "Private-Vehicle Arrival Demand Coordination",
      selected: false,
      sourceAvailable: true,
    },
  ],
  decision: {
    count: 1,
    label: "Decisione governata",
    selectedAction: "Private-Vehicle Arrival Window Staggering",
  },
  mission: {
    count: 1,
    label: "Missione operativa collegata",
    identity:
      "operational-mission-v1|214:operational-decision-v1|28:parking-pilot-flagship-event|96:system-selection-recommendation:49ac95060eaf9b3a3b600778d87c16239decc8e48f914456504577675a9dc0de|43:governed-system-selection-recommendation/v1|9:policy-v1|39:event-arrival-system-mission-generation|9:policy-v1",
    specification:
      "Due finestre di arrivo con copertura pianificata MODELLED pari a 0,75.",
    executionEvidenceCount: 2,
    executionStatus:
      "Due conferme MODELLED conservate come evidenze software; non provano un’esecuzione reale.",
    sourceAvailable: true,
  },
  outcomes: [
    {
      id: "parking",
      label: "Parcheggi",
      measure: "Occupazione",
      initial: "96%",
      final: "98%",
      delta: "+2 punti percentuali",
      direction: "adverse",
      directionLabel: "Direzione attesa non realizzata",
    },
    {
      id: "traffic",
      label: "Traffico",
      measure: "Rapporto di velocità relativa",
      initial: "0,40",
      final: "0,60",
      delta: "+0,20",
      direction: "favorable",
      directionLabel: "Direzione attesa realizzata",
    },
  ],
  projectedKpis: {
    count: 4,
    mode: "read-only",
    results: [
      {
        id: "parking-direction",
        dimension: "Parcheggi",
        label: "Realizzazione della direzione attesa",
        definitionIdentity: "expected-direction-realization/definition-v1",
        definition:
          "Classifica se l’output derivato segue la direzione attesa per l’effetto sul parcheggio.",
        result: "direction-not-realized",
        expectedEffectId:
          "expected-effect:423ad2d9c166b98d9600527a2a10d2bf10aaa137e28b39f01bef47c1795c72ab",
        observedEffectId:
          "system-observed-effect:16018e28ee44729e581cfdaf70b3c28603441e9ad0f8e9595383a18f948424cf",
      },
      {
        id: "parking-change",
        dimension: "Parcheggi",
        label: "Variazione dell’effetto osservato",
        definitionIdentity: "observed-effect-change/definition-v1",
        definition:
          "Calcola la variazione descrittiva tra occupazione iniziale e finale.",
        result: "+0,020000000000000018 ratio",
        expectedEffectId:
          "expected-effect:423ad2d9c166b98d9600527a2a10d2bf10aaa137e28b39f01bef47c1795c72ab",
        observedEffectId:
          "system-observed-effect:16018e28ee44729e581cfdaf70b3c28603441e9ad0f8e9595383a18f948424cf",
      },
      {
        id: "traffic-direction",
        dimension: "Traffico",
        label: "Realizzazione della direzione attesa",
        definitionIdentity: "expected-direction-realization/definition-v1",
        definition:
          "Classifica se l’output derivato segue la direzione attesa per l’effetto sul traffico.",
        result: "direction-realized",
        expectedEffectId:
          "expected-effect:5d09f86b2383d6f4370513b0bec0ad8e309a42d2a2601d40afae236559dbf133",
        observedEffectId:
          "system-observed-effect:45c8fcec6e162ec57b41e1bb7fa7acbfbd5f55e6af5c74aefd04838d419e5d91",
      },
      {
        id: "traffic-change",
        dimension: "Traffico",
        label: "Variazione dell’effetto osservato",
        definitionIdentity: "observed-effect-change/definition-v1",
        definition:
          "Calcola la variazione descrittiva tra rapporto di velocità iniziale e finale.",
        result: "+0,19999999999999996 ratio",
        expectedEffectId:
          "expected-effect:5d09f86b2383d6f4370513b0bec0ad8e309a42d2a2601d40afae236559dbf133",
        observedEffectId:
          "system-observed-effect:45c8fcec6e162ec57b41e1bb7fa7acbfbd5f55e6af5c74aefd04838d419e5d91",
      },
    ],
  },
  durableKpiExecutionReceipts: 0,
  demonstrates: [
    "Due azioni candidate possono essere considerate prima di una Decisione governata.",
    "La Decisione selezionata può restare collegata a una Missione e a output derivati.",
    "Esiti di direzione diversa possono essere letti insieme senza ridurli a un unico risultato positivo.",
  ],
  doesNotDemonstrate: [
    "Un impiego operativo presso un organizzatore reale.",
    "Un nesso causale verificato tra Decisione, Missione ed effetti.",
    "Benefici economici, ROI o risultati ESG verificati.",
    "Ricevute durevoli di esecuzione KPI o Learning automatico.",
    "Prontezza operativa per un ambiente di produzione.",
  ],
} satisfies OperationalProofProjection);
