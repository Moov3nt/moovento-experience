import type { StageSnapshot } from "./types";

type OperationalStageViewProps = {
  stage: StageSnapshot;
};

type DetailProps = {
  label: string;
  value: string;
};

function Detail({ label, value }: DetailProps) {
  return (
    <div className="border-t border-white/10 pt-4">
      <dt className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </dt>
      <dd className="mt-2 leading-relaxed text-neutral-200">{value}</dd>
    </div>
  );
}

export default function OperationalStageView({
  stage,
}: OperationalStageViewProps) {
  const {
    eventContext,
    situation,
    opportunity,
    governance,
    mission,
    outcome,
    evolutionFact,
  } = stage;

  return (
    <article aria-label={`Fase ${stage.position} di 7: ${stage.key}`}>
      <header className="grid gap-6 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Evento
          </p>
          <p className="mt-3 text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
            {eventContext.name}
          </p>
        </div>

        <dl className="grid gap-4 text-sm md:text-right">
          <div>
            <dt className="sr-only">Luogo</dt>
            <dd className="text-neutral-300">{eventContext.place}</dd>
          </div>
          <div>
            <dt className="sr-only">Finestra evento</dt>
            <dd className="text-neutral-400">{eventContext.window}</dd>
          </div>
        </dl>
      </header>

      <div className="grid gap-10 py-8 lg:grid-cols-2">
        <section aria-labelledby="operational-situation-title">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8B68A]">
            Situazione
          </p>
          <h3
            id="operational-situation-title"
            className="mt-3 text-2xl font-light tracking-[-0.025em] text-white"
          >
            {situation.title}
          </h3>
          <p className="mt-3 text-sm text-neutral-500">
            Osservata: {situation.observedAt}
          </p>
          <p className="mt-5 leading-relaxed text-neutral-300">
            {situation.summary}
          </p>

          <dl className="mt-7 grid gap-5">
            {situation.evidence.map((item) => (
              <Detail key={item.label} label={item.label} value={item.value} />
            ))}
          </dl>
        </section>

        <section aria-labelledby="operational-opportunity-title">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8B68A]">
            Opportunità
          </p>
          <h3
            id="operational-opportunity-title"
            className="mt-3 text-2xl font-light tracking-[-0.025em] text-white"
          >
            {opportunity.title}
          </h3>
          <p className="mt-4 inline-flex rounded-full border border-[#A8B68A]/30 bg-[#A8B68A]/10 px-4 py-2 text-sm text-[#C4D39A]">
            Stato: {opportunity.statusLabel}
          </p>
          <p className="mt-5 leading-relaxed text-neutral-300">
            {opportunity.rationale}
          </p>

          {(opportunity.owner || opportunity.decisionNote) && (
            <dl className="mt-7 grid gap-5">
              {opportunity.owner && (
                <Detail label="Responsabile" value={opportunity.owner} />
              )}
              {opportunity.decisionNote && (
                <Detail
                  label="Nota decisionale"
                  value={opportunity.decisionNote}
                />
              )}
            </dl>
          )}
        </section>
      </div>

      {governance && (
        <section
          aria-labelledby="operational-governance-title"
          className="border-t border-white/10 py-8"
        >
          <h3
            id="operational-governance-title"
            className="text-xl font-light text-white"
          >
            Governance
          </h3>
          <dl className="mt-6 grid gap-5 md:grid-cols-3">
            <Detail label="Fase corrente" value={governance.currentStep} />
            <Detail
              label="Ruolo responsabile"
              value={governance.accountableRole}
            />
            <Detail label="Registrata" value={governance.recordedAt} />
          </dl>
          <p className="mt-6 leading-relaxed text-neutral-300">
            {governance.statement}
          </p>
        </section>
      )}

      {mission && (
        <section
          aria-labelledby="operational-mission-title"
          className="border-t border-white/10 py-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8B68A]">
            Missione
          </p>
          <h3
            id="operational-mission-title"
            className="mt-3 text-2xl font-light tracking-[-0.025em] text-white"
          >
            {mission.title}
          </h3>
          <p className="mt-4 text-[#C4D39A]">
            Stato: {mission.statusLabel}
          </p>
          <dl className="mt-6 grid gap-5 md:grid-cols-3">
            <Detail
              label="Squadra responsabile"
              value={mission.accountableTeam}
            />
            <Detail label="Obiettivo" value={mission.target} />
            <Detail
              label="Finestra pianificata"
              value={mission.scheduledWindow}
            />
          </dl>
          {mission.progressCopy && (
            <p className="mt-6 leading-relaxed text-neutral-300">
              {mission.progressCopy}
            </p>
          )}
          {mission.achievementValues && (
            <dl className="mt-6 grid gap-5 md:grid-cols-3">
              {mission.achievementValues.map((item) => (
                <Detail key={item.label} label={item.label} value={item.value} />
              ))}
            </dl>
          )}
        </section>
      )}

      {outcome && (
        <section
          aria-labelledby="operational-outcome-title"
          className="border-t border-white/10 py-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8B68A]">
            Esito
          </p>
          <h3
            id="operational-outcome-title"
            className="mt-3 text-2xl font-light tracking-[-0.025em] text-white"
          >
            Outcome registrato
          </h3>
          <p className="mt-3 text-sm text-neutral-500">
            Registrato: {outcome.recordedAt}
          </p>
          <p className="mt-5 leading-relaxed text-neutral-300">
            {outcome.summary}
          </p>
          <dl className="mt-7 grid gap-5 md:grid-cols-3">
            {outcome.measures.map((measure) => (
              <div key={measure.label} className="border-t border-white/10 pt-4">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  {measure.label}
                </dt>
                <dd className="mt-3 grid gap-1 text-sm text-neutral-300">
                  <span>Pianificato: {measure.planned}</span>
                  <span className="text-white">Registrato: {measure.recorded}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {evolutionFact && (
        <section
          aria-labelledby="operational-evolution-title"
          className="border-t border-white/10 pt-8"
        >
          <h3
            id="operational-evolution-title"
            className="text-xl font-light text-white"
          >
            Evoluzione
          </h3>
          <ol className="mt-6 border-l border-[#A8B68A]/40 pl-6">
            <li>
              <p className="text-sm text-neutral-500">
                {evolutionFact.occurredAt}
              </p>
              <p className="mt-2 text-lg text-white">{evolutionFact.title}</p>
              <p className="mt-3 leading-relaxed text-neutral-300">
                {evolutionFact.statement}
              </p>
            </li>
          </ol>
        </section>
      )}
    </article>
  );
}
