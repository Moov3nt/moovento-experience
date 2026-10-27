import type {
  EventContext,
  EvolutionFact,
  Mission,
  Outcome,
  Situation,
  StageSnapshot,
} from "./types";

function immutable<T>(value: T): Readonly<T> {
  if (value !== null && typeof value === "object" && !Object.isFrozen(value)) {
    for (const nestedValue of Object.values(value)) {
      immutable(nestedValue);
    }

    Object.freeze(value);
  }

  return value;
}

const eventContext: EventContext = {
  id: "EVT-RV03-CONTROLLED",
  name: "RV-03 · Mobilità di un grande evento",
  place: "Scenario sintetico controllato",
  window: "Finestra temporale modellata",
};

const situation: Situation = {
  id: "SIT-RV03-MOBILITY-001",
  title: "Condizioni iniziali modellate",
  observedAt: "2026-07-18T16:40:00+02:00",
  summary:
    "Gli input appartengono a una dimostrazione controllata e non sono misure raccolte sul campo.",
  evidence: [
    { label: "Occupazione parcheggi iniziale · MODELLED", value: "96%" },
    { label: "Rapporto velocità relativa iniziale · MODELLED", value: "0,40" },
    { label: "Azioni candidate", value: "2" },
    { label: "Impatto reale", value: "UNKNOWN" },
  ],
};

const plannedMission: Mission = {
  id: "MIS-RV03-001",
  title: "Private-Vehicle Arrival Window Staggering",
  status: "planned",
  statusLabel: "Pianificata",
  accountableTeam: "Ruolo non specificato nei materiali RV-03",
  target:
    "Target operativo non specificato nei materiali RV-03",
  scheduledWindow: "Finestra modellata · dettaglio non disponibile",
};

const startedMission: Mission = {
  ...plannedMission,
  status: "started",
  statusLabel: "Transizione simulata",
  progressCopy: "Passaggio dimostrativo; non attesta un’esecuzione sul campo.",
};

const achievedMission: Mission = {
  ...plannedMission,
  status: "achieved",
  statusLabel: "Output derivato",
  achievementValues: [
    { label: "Occupazione parcheggi finale · DERIVED", value: "98%" },
    { label: "Rapporto velocità relativa finale · DERIVED", value: "0,60" },
    { label: "Risultati KPI proiettati, sola lettura", value: "4" },
  ],
};

const outcome: Outcome = {
  id: "OUT-RV03-DERIVED-001",
  recordedAt: "2026-07-18T20:45:00+02:00",
  summary:
    "Gli output sono derivati dal sistema nello scenario controllato; l’impatto reale resta sconosciuto.",
  measures: [
    {
      label: "Occupazione parcheggi",
      planned: "96% · MODELLED",
      recorded: "98% · DERIVED",
    },
    {
      label: "Rapporto velocità relativa traffico",
      planned: "0,40 · MODELLED",
      recorded: "0,60 · DERIVED",
    },
    {
      label: "Risultati KPI proiettati, sola lettura",
      planned: "4",
      recorded: "Etichette non disponibili",
    },
  ],
};

const evolutionFact: EvolutionFact = {
  id: "EVO-RV03-BOUNDARY-001",
  occurredAt: "2026-07-18T20:45:00+02:00",
  title: "L’impatto reale resta sconosciuto",
  statement:
    "Gli output derivati non costituiscono prova causale, beneficio verificato o Learning automatico.",
};

export const RV03_CONTROLLED_STAGES: readonly StageSnapshot[] = immutable([
  {
    id: "STAGE-01-IDENTIFIED",
    key: "identified",
    position: 1,
    timestamp: "2026-07-18T16:40:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "identified",
      statusLabel: "Identificata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
    },
  },
  {
    id: "STAGE-02-ACCEPTED",
    key: "accepted",
    position: 2,
    timestamp: "2026-07-18T16:48:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "accepted",
      statusLabel: "Accettata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Passaggio dimostrativo; non attesta una valutazione operativa reale.",
    },
    governance: {
      currentStep: "Opportunità accettata",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T16:48:00+02:00",
      statement:
        "L’opportunità entra nel percorso di governance per una valutazione operativa.",
    },
  },
  {
    id: "STAGE-03-REVIEWED",
    key: "reviewed",
    position: 3,
    timestamp: "2026-07-18T17:02:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "reviewed",
      statusLabel: "Revisionata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Revisione simulata; dettagli operativi non disponibili nei materiali RV-03.",
    },
    governance: {
      currentStep: "Opportunità revisionata",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T17:02:00+02:00",
      statement:
        "La revisione è rappresentata nel percorso controllato; verifiche reali non eseguite.",
    },
  },
  {
    id: "STAGE-04-APPROVED",
    key: "approved",
    position: 4,
    timestamp: "2026-07-18T17:15:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Decisione governata dimostrata nel solo scenario controllato.",
    },
    governance: {
      currentStep: "Opportunità approvata e Missione pianificata",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T17:15:00+02:00",
      statement:
        "Lo scenario rappresenta una Decisione governata collegata a una Missione.",
    },
    mission: plannedMission,
  },
  {
    id: "STAGE-05-STARTED",
    key: "started",
    position: 5,
    timestamp: "2026-07-18T17:30:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Transizione simulata; non attesta un avvio operativo reale.",
    },
    governance: {
      currentStep: "Missione avviata",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T17:30:00+02:00",
      statement:
        "La transizione di Missione è simulata; nessun intervento reale è attivo.",
    },
    mission: startedMission,
  },
  {
    id: "STAGE-06-ACHIEVED",
    key: "achieved",
    position: 6,
    timestamp: "2026-07-18T20:32:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Output derivato; non attesta il raggiungimento di un obiettivo reale.",
    },
    governance: {
      currentStep: "Output derivato",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T20:32:00+02:00",
      statement:
        "Il sistema ha prodotto output derivati; l’esecuzione reale non è verificata.",
    },
    mission: achievedMission,
  },
  {
    id: "STAGE-07-RECORDED",
    key: "recorded",
    position: 7,
    timestamp: "2026-07-18T20:45:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-RV03-SELECTED",
      title: "Private-Vehicle Arrival Window Staggering",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Azione selezionata nello scenario controllato; efficacia reale e causalità non stabilite.",
      owner: "Ruolo simulato non specificato",
      decisionNote:
        "Chiusura dimostrativa; nessuna ricevuta durevole di esecuzione è disponibile.",
    },
    governance: {
      currentStep: "Output derivato",
      accountableRole: "Ruolo simulato non specificato",
      recordedAt: "2026-07-18T20:45:00+02:00",
      statement:
        "L’output resta una proiezione controllata e non costituisce Learning automatico.",
    },
    mission: achievedMission,
    outcome,
    evolutionFact,
    terminalStatus: "Percorso dimostrativo completato",
  },
]);
