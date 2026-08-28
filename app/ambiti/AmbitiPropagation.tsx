import { AMBITI_MODEL, type OperationalTerritory } from "./ambitiModel";

const movementLabelClass =
  "text-[10px] font-medium uppercase tracking-[0.32em] text-revealue-mineral";

const territoryPositions = [
  "lg:col-span-6 lg:col-start-1",
  "lg:col-span-5 lg:col-start-7 lg:mt-16",
  "lg:col-span-7 lg:col-start-3 lg:mt-8",
  "lg:col-span-6 lg:col-start-6 lg:mt-20",
] as const;

const maturityPositions = [
  "max-w-[42rem] border-t border-revealue-mineral/15 pb-5 pt-9 lg:ml-0",
  "mt-12 max-w-[36rem] border-t border-revealue-mineral/15 pb-4 pt-8 lg:ml-[12%] lg:mt-16",
  "mt-16 max-w-[31rem] border-t border-revealue-mineral/15 pb-3 pt-7 lg:ml-[25%] lg:mt-24",
  "mt-20 max-w-[25rem] border-t border-revealue-mineral/15 pb-2 pt-6 lg:ml-[40%] lg:mt-32",
] as const;

function TerritoryStatus({ territory }: { territory: OperationalTerritory }) {
  return (
    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-revealue-mineral">
      {territory.statusLabel}
    </span>
  );
}

function PropagationCrossing() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full text-revealue-copper lg:block"
      viewBox="0 0 1000 720"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="470"
        y1="105"
        x2="735"
        y2="625"
        stroke="currentColor"
        strokeOpacity="0.34"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function MeasuredTerritory() {
  return (
    <dl className="mt-12 grid gap-10 sm:grid-cols-2">
      {AMBITI_MODEL.measuredFacts.map((fact) => (
        <div key={fact.label} className="border-t border-revealue-copper/55 pt-5">
          <dt className="min-h-11 text-sm leading-relaxed text-revealue-mineral">
            {fact.label}
          </dt>
          <dd className="mt-7 grid grid-cols-2 gap-5">
            <span>
              <span className="block text-[9px] uppercase tracking-[0.22em] text-revealue-mineral">
                Target
              </span>
              <span className="mt-2 block text-2xl font-light">
                {fact.target}
              </span>
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.22em] text-revealue-mineral">
                Registrato
              </span>
              <span className="mt-2 block text-[clamp(2.5rem,4.5vw,4rem)] font-light leading-none tracking-[-0.05em] text-revealue-ivory">
                {fact.recorded}
              </span>
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function AmbitiPropagation() {
  const mobility = AMBITI_MODEL.territories[0];
  const relatedTerritories = AMBITI_MODEL.territories.slice(1);

  return (
    <div className="relative overflow-hidden bg-[#080a0b] text-revealue-ivory">
      <article
        className="mx-auto max-w-[90rem] px-6 pb-28 pt-40 sm:px-10 sm:pb-36 sm:pt-48 lg:px-16 lg:pb-48 lg:pt-56"
        aria-labelledby="ambiti-title"
      >
        <header className="grid gap-y-12 lg:grid-cols-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-revealue-mineral lg:col-span-2">
            Ambiti
          </p>
          <div className="lg:col-span-8 lg:col-start-4">
            <p className={movementLabelClass}>
              01 · L’evento ha più dimensioni
            </p>
            <h1
              id="ambiti-title"
              className="mt-8 max-w-[15ch] text-[clamp(3.25rem,7.2vw,7rem)] font-light leading-[0.95] tracking-[-0.055em]"
            >
              Un evento prende forma in dimensioni che coesistono.
            </h1>
            <p className="mt-12 max-w-[38rem] text-[clamp(1.2rem,2vw,1.6rem)] font-light leading-[1.6] text-revealue-mineral">
              Mobilità, accessi, coordinamento e conoscenza dell’evento non
              sono piani isolati.
            </p>
          </div>
        </header>

        <ul className="mt-28 grid gap-y-10 lg:grid-cols-12" aria-label="Dimensioni operative dello scenario">
          {AMBITI_MODEL.territories.map((territory, index) => (
            <li
              key={territory.id}
              className={`border-t border-revealue-mineral/20 pt-5 ${territoryPositions[index]}`}
            >
              <TerritoryStatus territory={territory} />
              <p className="mt-4 text-[clamp(1.5rem,2.8vw,2.75rem)] font-light tracking-[-0.035em]">
                {territory.label}
              </p>
            </li>
          ))}
        </ul>

        <section
          className="mt-40 border-t border-white/10 pt-16 sm:mt-56 sm:pt-20 lg:mt-64"
          aria-labelledby="ambiti-origin-title"
        >
          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 id="ambiti-origin-title" className={`${movementLabelClass} lg:col-span-3`}>
              02 · Un intervento ha un’origine
            </h2>
            <div className="lg:col-span-7 lg:col-start-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-revealue-copper">
                Scenario illustrativo · {AMBITI_MODEL.scenario.name}
              </p>
              <p className="mt-9 max-w-[22ch] text-xl font-light leading-relaxed text-revealue-mineral sm:text-2xl">
                {AMBITI_MODEL.origin.condition.label}
              </p>
              <p className="mt-3 text-[clamp(5rem,10vw,9rem)] font-light leading-none tracking-[-0.075em]">
                {AMBITI_MODEL.origin.condition.value}
              </p>
              <p className="mt-16 max-w-[22ch] text-[clamp(2.25rem,4.5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.045em]">
                {AMBITI_MODEL.origin.intervention}
              </p>
            </div>
          </div>
        </section>

        <section
          className="mt-40 sm:mt-56 lg:mt-64"
          aria-labelledby="ambiti-propagation-title"
        >
          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 id="ambiti-propagation-title" className={`${movementLabelClass} lg:col-span-3`}>
              03 · Le conseguenze attraversano i territori
            </h2>
            <p className="max-w-[18ch] text-[clamp(2.75rem,5.2vw,5.5rem)] font-light leading-[1.02] tracking-[-0.05em] lg:col-span-7 lg:col-start-5">
              L’effetto misurato non esaurisce ciò che cambia.
            </p>
          </div>

          <div className="relative mt-24 lg:mt-32">
            <PropagationCrossing />
            <ol className="relative grid gap-y-12 lg:grid-cols-12">
              <li className="border-t border-revealue-copper/55 py-10 lg:col-span-7 lg:col-start-1 lg:pr-12">
                <TerritoryStatus territory={mobility} />
                <h3 className="mt-4 text-3xl font-light tracking-[-0.035em]">
                  {mobility.label}
                </h3>
                <MeasuredTerritory />
              </li>

              {relatedTerritories.map((territory, index) => (
                <li
                  key={territory.id}
                  className={`border-t border-revealue-mineral/20 py-9 lg:col-span-6 ${
                    [
                      "lg:col-start-7 lg:mt-20",
                      "lg:col-start-3 lg:mt-8",
                      "lg:col-start-6 lg:mt-16",
                    ][index]
                  }`}
                >
                  <TerritoryStatus territory={territory} />
                  <h3 className="mt-4 text-2xl font-light tracking-[-0.03em]">
                    {territory.label}
                  </h3>
                  {territory.evidence && (
                    <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-revealue-mineral">
                      {territory.evidence}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="mt-40 border-t border-revealue-mineral/20 pt-16 sm:mt-56 sm:pt-20 lg:mt-64"
          aria-labelledby="ambiti-evidence-title"
        >
          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 id="ambiti-evidence-title" className={`${movementLabelClass} lg:col-span-3`}>
              04 · Non ogni relazione è evidenza
            </h2>
            <div className="lg:col-span-8 lg:col-start-4">
              <p className="max-w-[18ch] text-[clamp(2.5rem,4.8vw,5rem)] font-light leading-[1.04] tracking-[-0.045em]">
                La possibilità non ha lo stesso peso di ciò che è stato
                osservato.
              </p>
              <ol className="mt-24">
                {AMBITI_MODEL.maturityLevels.map((level, index) => (
                  <li
                    key={level.maturity}
                    className={maturityPositions[index]}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-revealue-mineral">
                      {level.label}
                    </p>
                    <p className="mt-4 text-lg font-light leading-relaxed text-revealue-ivory">
                      {level.statement}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="mt-40 border-t border-white/10 pt-16 sm:mt-56 sm:pt-20 lg:mt-64"
          aria-labelledby="ambiti-contexts-title"
        >
          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 id="ambiti-contexts-title" className={`${movementLabelClass} lg:col-span-3`}>
              05 · Da una profondità ad altri contesti
            </h2>
            <div className="lg:col-span-7 lg:col-start-5">
              <p className="max-w-[18ch] text-[clamp(2.75rem,5.2vw,5.5rem)] font-light leading-[1.02] tracking-[-0.05em]">
                La prima profondità non definisce l’intero sistema.
              </p>
              <p className="mt-12 max-w-[38rem] text-xl font-light leading-[1.65] text-revealue-mineral sm:text-2xl">
                Mobilità e parcheggi mostrano ciò che oggi è dimostrabile.
                Altre dimensioni diventano credibili solo quando relazioni ed
                evidenze possono essere qualificate.
              </p>
              <a
                href="mailto:giacinto@revealue.it"
                className="group mt-16 inline-flex min-h-12 items-center gap-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-revealue-ivory outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-revealue-copper focus-visible:ring-offset-4 focus-visible:ring-offset-[#080a0b] motion-reduce:transition-none"
              >
                <span className="border-b border-white/35 pb-1 transition-colors duration-300 group-hover:border-revealue-ivory group-focus-visible:border-revealue-ivory motion-reduce:transition-none">
                  Parliamo del tuo prossimo evento
                </span>
                <span
                  className="h-px w-12 bg-revealue-mineral/60"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
