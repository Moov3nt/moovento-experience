import Link from "next/link";

import { OPERATIONAL_PROOF } from "./operationalProofProjection";

const titleId = "operational-proof-title";

export default function OperationalProof() {
  const proof = OPERATIONAL_PROOF;

  return (
    <section
      aria-labelledby={titleId}
      className="relative overflow-hidden py-24 font-sans text-revealue-ivory sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 lg:col-start-2">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-revealue-copper">
              Laboratorio REVEALUE
            </p>
            <h2
              id={titleId}
              className="mt-8 max-w-[15ch] text-[clamp(2.75rem,5.4vw,5.4rem)] font-light leading-[0.96] tracking-[-0.05em] text-balance"
            >
              {proof.id} · {proof.title}
            </h2>
          </div>

          <div className="max-w-md lg:col-span-3 lg:pb-2">
            <p className="text-sm uppercase tracking-[0.2em] text-revealue-mineral">
              {proof.classification}
            </p>
            <p className="mt-5 text-lg font-light leading-relaxed text-revealue-mineral">
              Input modellati, risultati derivati, impatto reale sconosciuto.
            </p>
          </div>
        </header>

        <dl className="mt-20 grid border-y border-revealue-mineral/20 sm:grid-cols-3 lg:mt-24">
          {proof.evidenceBoundary.map((boundary) => (
            <div
              key={boundary.state}
              className="border-b border-revealue-mineral/15 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <dt className="text-xs font-medium tracking-[0.18em] text-revealue-copper">
                {boundary.state}
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-revealue-ivory/70">
                {boundary.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-3 lg:col-start-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-revealue-mineral">
              Tracciabilità dimostrata
            </p>
            <dl className="mt-8 space-y-5 text-lg font-light">
              <div className="flex items-baseline justify-between gap-5 border-t border-revealue-mineral/20 pt-4">
                <dt>Azioni candidate</dt>
                <dd>2</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-t border-revealue-mineral/20 pt-4">
                <dt>Decisione governata</dt>
                <dd>1</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-t border-revealue-mineral/20 pt-4">
                <dt>Missione</dt>
                <dd>1</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-t border-revealue-mineral/20 pt-4">
                <dt>KPI proiettati, sola lettura</dt>
                <dd>4</dd>
              </div>
            </dl>
          </div>

          <div className="grid min-w-0 gap-8 lg:col-span-6 lg:col-start-6 xl:grid-cols-2">
            {proof.outcomes.map((outcome) => (
              <article
                key={outcome.id}
                className="min-w-0 border-t border-revealue-copper/55 pt-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-revealue-mineral">
                  MODELLED · {outcome.label}
                </p>
                <h3 className="mt-4 text-xl font-light">{outcome.measure}</h3>
                <p className="mt-8 grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-baseline gap-2 text-[clamp(2.25rem,3.5vw,4rem)] font-light leading-none tracking-[-0.05em] sm:gap-3">
                  <span className="min-w-0 whitespace-nowrap text-right">
                    {outcome.initial}
                  </span>
                  <span className="text-revealue-copper" aria-hidden="true">
                    →
                  </span>
                  <span className="sr-only">a</span>
                  <span className="min-w-0 whitespace-nowrap">
                    {outcome.final}
                  </span>
                </p>
                <p className="mt-6 text-base leading-relaxed text-revealue-ivory/70">
                  {outcome.delta} · DERIVED: {outcome.directionLabel}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-revealue-mineral/20 pt-10 lg:grid-cols-12">
          <p className="max-w-xl text-lg font-light leading-relaxed text-revealue-mineral lg:col-span-6 lg:col-start-2">
            La dimostrazione rende leggibile un percorso tra alternative,
            Decisione e Missione. Non dimostra efficacia sul campo, causalità,
            beneficio economico, risultato ESG o Learning automatico.
          </p>
          <div className="flex flex-col items-start gap-6 lg:col-span-3 lg:col-start-9">
            <Link
              href="/laboratorio/rv-03"
              className="group inline-flex min-h-12 items-center gap-4 border-b-2 border-revealue-copper py-3 text-sm font-medium uppercase tracking-[0.2em] text-revealue-ivory transition-colors hover:border-revealue-ivory hover:text-white focus-visible:rounded-sm focus-visible:border-revealue-ivory focus-visible:bg-revealue-copper/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper motion-reduce:transition-none"
            >
              Esplora il caso RV-03
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-revealue-mineral">
              Nessuna ricevuta durevole di esecuzione KPI è disponibile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
