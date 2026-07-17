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
  id: "EVT-ROMA-SUMMER-LIVE-2026",
  name: "Roma Summer Live",
  place: "Foro Italico, Roma",
  window: "18 luglio 2026, 18:00–23:30",
};

const situation: Situation = {
  id: "SIT-PARKING-PRESSURE-001",
  title: "Pressione prevista sui parcheggi primari",
  observedAt: "2026-07-18T16:40:00+02:00",
  summary:
    "Gli arrivi previsti superano la capacità utile dell’area primaria e si concentrano prima dell’apertura dei cancelli.",
  evidence: [
    { label: "Arrivi previsti entro le 20:30", value: "6.800 veicoli" },
    { label: "Posti disponibili nell’area primaria", value: "4.900" },
    { label: "Occupazione prevista alle 20:00", value: "96%" },
    { label: "Area secondaria disponibile", value: "1.450 posti" },
    {
      label: "Pressione identificata",
      value: "Accessi concentrati su due varchi",
    },
  ],
};

const plannedMission: Mission = {
  id: "MIS-PARKING-GUIDANCE-001",
  title: "Attivare l’indirizzamento verso il parcheggio secondario",
  status: "planned",
  statusLabel: "Pianificata",
  accountableTeam: "Squadra Mobilità Nord",
  target:
    "Portare almeno 900 veicoli verso l’area secondaria entro le 20:30",
  scheduledWindow: "18 luglio 2026, 17:30–20:30",
};

const startedMission: Mission = {
  ...plannedMission,
  status: "started",
  statusLabel: "Avviata",
  progressCopy: "Indirizzamento operativo in corso.",
};

const achievedMission: Mission = {
  ...plannedMission,
  status: "achieved",
  statusLabel: "Raggiunta",
  achievementValues: [
    { label: "Veicoli indirizzati", value: "1.040" },
    { label: "Occupazione massima area primaria", value: "87%" },
    { label: "Target Missione", value: "≥ 900 veicoli" },
  ],
};

const outcome: Outcome = {
  id: "OUT-PARKING-GUIDANCE-001",
  recordedAt: "2026-07-18T20:45:00+02:00",
  summary:
    "La distribuzione degli arrivi ha mantenuto l’area primaria sotto la soglia prevista e ha ridotto la concentrazione ai varchi.",
  measures: [
    {
      label: "Veicoli verso area secondaria",
      planned: "≥ 900",
      recorded: "1.040",
    },
    {
      label: "Occupazione area primaria",
      planned: "< 90%",
      recorded: "87%",
    },
    {
      label: "Varchi in pressione elevata",
      planned: "≤ 1",
      recorded: "1",
    },
  ],
};

const evolutionFact: EvolutionFact = {
  id: "EVO-PARKING-OUTCOME-001",
  occurredAt: "2026-07-18T20:45:00+02:00",
  title: "L’indirizzamento anticipato riduce la pressione primaria",
  statement:
    "L’esito registrato entra nel contesto dell’evento come nuova evidenza per successive valutazioni.",
};

export const ROMA_SUMMER_LIVE_STAGES: readonly StageSnapshot[] = immutable([
  {
    id: "STAGE-01-IDENTIFIED",
    key: "identified",
    position: 1,
    timestamp: "2026-07-18T16:40:00+02:00",
    eventContext,
    situation,
    opportunity: {
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "identified",
      statusLabel: "Identificata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "accepted",
      statusLabel: "Accettata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "La pressione è rilevante e richiede una verifica coordinata prima di qualsiasi azione.",
    },
    governance: {
      currentStep: "Opportunità accettata",
      accountableRole: "Responsabile operativo evento",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "reviewed",
      statusLabel: "Revisionata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "L’area secondaria può assorbire parte degli arrivi; segnaletica e presidio risultano disponibili.",
    },
    governance: {
      currentStep: "Opportunità revisionata",
      accountableRole: "Coordinamento mobilità",
      recordedAt: "2026-07-18T17:02:00+02:00",
      statement:
        "Capacità, accessi e responsabilità operative sono stati verificati.",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "L’area secondaria può assorbire parte degli arrivi; segnaletica e presidio risultano disponibili.",
    },
    governance: {
      currentStep: "Opportunità approvata e Missione pianificata",
      accountableRole: "Direzione operativa",
      recordedAt: "2026-07-18T17:15:00+02:00",
      statement:
        "La direzione approva l’intervento e assegna la Missione.",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "L’area secondaria può assorbire parte degli arrivi; segnaletica e presidio risultano disponibili.",
    },
    governance: {
      currentStep: "Missione avviata",
      accountableRole: "Caposquadra Mobilità Nord",
      recordedAt: "2026-07-18T17:30:00+02:00",
      statement:
        "Segnaletica dinamica e presidio del percorso secondario sono attivi.",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "L’area secondaria può assorbire parte degli arrivi; segnaletica e presidio risultano disponibili.",
    },
    governance: {
      currentStep: "Missione raggiunta",
      accountableRole: "Caposquadra Mobilità Nord",
      recordedAt: "2026-07-18T20:32:00+02:00",
      statement:
        "Il target operativo è stato raggiunto e la Missione può essere verificata.",
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
      id: "OPP-PARKING-DISTRIBUTION-001",
      title: "Distribuire gli arrivi verso l’area secondaria",
      status: "approved",
      statusLabel: "Approvata",
      rationale:
        "Un indirizzamento anticipato può ridurre la concentrazione ai varchi senza modificare l’autorità decisionale degli operatori.",
      owner: "Unità Mobilità Evento",
      decisionNote:
        "L’area secondaria può assorbire parte degli arrivi; segnaletica e presidio risultano disponibili.",
    },
    governance: {
      currentStep: "Esito registrato",
      accountableRole: "Direzione operativa",
      recordedAt: "2026-07-18T20:45:00+02:00",
      statement:
        "L’esito della Missione è registrato come nuova evidenza dell’evento.",
    },
    mission: achievedMission,
    outcome,
    evolutionFact,
    terminalStatus: "Percorso completato",
  },
]);
