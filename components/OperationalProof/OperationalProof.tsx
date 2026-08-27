import { OPERATIONAL_PROOF } from "./operationalProofProjection";

const titleId = "operational-proof-title";

export default function OperationalProof() {
  const proof = OPERATIONAL_PROOF;

  return (
    <section
      aria-labelledby={titleId}
      className="relative overflow-hidden py-32 font-sans text-revealue-ivory sm:py-40 lg:py-48"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 lg:col-start-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              SCENARIO ILLUSTRATIVO
            </p>
            <h2
              id={titleId}
              className="mt-9 max-w-[14ch] text-[clamp(2.75rem,5.4vw,5.4rem)] font-light leading-[0.96] tracking-[-0.05em] text-balance"
            >
              Una decisione non produce
              <span className="block">un solo effetto.</span>
            </h2>
          </div>

          <p className="max-w-md text-[clamp(1.0625rem,1.6vw,1.375rem)] font-light leading-relaxed text-revealue-mineral lg:col-span-3 lg:pb-2">
            Osservarne le relazioni permette di comprenderne il valore.
          </p>
        </header>

        <article className="mt-28 border-t border-revealue-mineral/25 sm:mt-36 lg:mt-44">
          <header className="grid gap-4 border-b border-revealue-mineral/15 py-7 text-sm text-revealue-mineral sm:grid-cols-3 sm:gap-8">
            <p className="text-revealue-ivory">{proof.scenario.name}</p>
            <p>{proof.scenario.place}</p>
            <p className="sm:text-right">{proof.scenario.date}</p>
          </header>

          <ol className="list-none">
            <li className="grid gap-10 border-b border-revealue-mineral/15 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3 lg:col-start-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-copper">
                  01 · SITUAZIONE
                </p>
                <p className="mt-6 max-w-xs text-lg font-light leading-relaxed text-revealue-mineral">
                  {proof.situation.label}
                </p>
              </div>
              <p className="text-[clamp(5rem,12vw,10rem)] font-light leading-[0.75] tracking-[-0.075em] lg:col-span-6 lg:col-start-6">
                {proof.situation.value}
              </p>
            </li>

            <li className="grid gap-12 border-b border-revealue-mineral/15 py-20 sm:py-24 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:col-start-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-copper">
                  02 · INTERVENTO
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-revealue-mineral">
                  Responsabilità
                </p>
                <p className="mt-3 text-xl font-light">
                  {proof.intervention.accountableRole}
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-6">
                <h3 className="max-w-[21ch] text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.02] tracking-[-0.045em]">
                  {proof.intervention.action}
                </h3>
                <dl className="mt-12 grid gap-8 border-t border-revealue-mineral/20 pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-revealue-mineral">
                      Esecuzione
                    </dt>
                    <dd className="mt-3 leading-relaxed">
                      {proof.intervention.accountableTeam}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-revealue-mineral">
                      Target
                    </dt>
                    <dd className="mt-3 leading-relaxed">
                      {proof.intervention.target}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>

            <li className="border-b border-revealue-mineral/15 py-20 sm:py-24">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3 lg:col-start-2">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-copper">
                    03 · EFFETTI MISURATI
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.2em] text-revealue-mineral">
                    Misurato nello scenario
                  </p>
                  <p className="mt-3 text-xl font-light">
                    {proof.measuredDimension}
                  </p>
                </div>

                <dl className="grid gap-14 lg:col-span-6 lg:col-start-6 sm:grid-cols-2 sm:gap-10">
                  {proof.measuredFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-t border-revealue-copper/60 pt-6"
                    >
                      <dt className="min-h-12 text-sm leading-relaxed text-revealue-mineral">
                        {fact.label}
                      </dt>
                      <dd className="mt-8 grid grid-cols-2 gap-5">
                        <span>
                          <span className="block text-[9px] uppercase tracking-[0.24em] text-revealue-mineral">
                            Target
                          </span>
                          <span className="mt-3 block text-[clamp(1.75rem,3vw,3rem)] font-light tracking-[-0.04em]">
                            {fact.target}
                          </span>
                        </span>
                        <span>
                          <span className="block text-[9px] uppercase tracking-[0.24em] text-revealue-mineral">
                            Registrato
                          </span>
                          <span className="mt-3 block text-[clamp(2.5rem,4.5vw,4.75rem)] font-light leading-none tracking-[-0.06em]">
                            {fact.recorded}
                          </span>
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <section
                aria-labelledby="operational-proof-relationships-title"
                className="mt-20 grid gap-12 border-t border-revealue-mineral/15 pt-10 lg:mt-28 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3 lg:col-start-2">
                  <h3
                    id="operational-proof-relationships-title"
                    className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-mineral"
                  >
                    Relazioni del sistema
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-revealue-mineral">
                    Dimensioni connesse · non misurate come KPI nello scenario
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-5">
                  <div
                    aria-hidden="true"
                    className="hidden h-px w-2/5 bg-revealue-copper/35 sm:block lg:w-1/3"
                  />
                  <ul className="sm:mt-5">
                    {proof.relationships.map((relationship, index) => (
                      <li
                        key={relationship.dimension}
                        className={
                          [
                            "relative py-6 sm:py-8 lg:mr-28",
                            "relative py-8 sm:py-11 lg:ml-24 lg:mr-10",
                            "relative py-6 sm:pb-5 sm:pt-14 lg:ml-48",
                          ][index]
                        }
                      >
                        <div className="max-w-md">
                          <p className="text-lg font-light text-revealue-ivory">
                            {relationship.dimension}
                          </p>
                          {relationship.dimension !==
                            "Conoscenza dell’evento" && (
                            <p className="mt-4 text-sm leading-relaxed text-revealue-mineral">
                              {relationship.evidence}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </li>

            <li className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:col-start-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-copper">
                  04 · EVIDENZA
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-revealue-mineral">
                  Registrata nello scenario
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <h3 className="max-w-[22ch] text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.04] tracking-[-0.045em]">
                  {proof.retainedEvidence.title}
                </h3>
                <p className="mt-10 max-w-xl text-lg font-light leading-relaxed text-revealue-mineral">
                  {proof.retainedEvidence.statement}
                </p>
              </div>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
