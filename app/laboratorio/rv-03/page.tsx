import type { Metadata } from "next";
import Link from "next/link";

import {
  OPERATIONAL_PROOF,
  type ProjectedKpi,
} from "@/components/OperationalProof/operationalProofProjection";

export const metadata: Metadata = {
  title: "RV-03 · Mobilità di un grande evento",
  description:
    "Dimostrazione sperimentale REVEALUE su uno scenario sintetico controllato di mobilità per grandi eventi: input modellati, output derivati e impatto reale sconosciuto.",
  alternates: {
    canonical: "/laboratorio/rv-03",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    url: "/laboratorio/rv-03",
    siteName: "REVEALUE",
    title: "RV-03 · Mobilità di un grande evento",
    description:
      "Scenario sintetico controllato: input modellati, output derivati e impatto reale sconosciuto.",
    images: [
      {
        url: "/revealue-social.png",
        width: 1200,
        height: 630,
        alt: "REVEALUE — Event Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV-03 · Mobilità di un grande evento",
    description:
      "Scenario sintetico controllato: input modellati, output derivati e impatto reale sconosciuto.",
    images: {
      url: "/revealue-social.png",
      alt: "REVEALUE — Event Intelligence",
    },
  },
};

const sectionLabelClass =
  "text-xs font-medium uppercase tracking-[0.24em] text-revealue-copper";
const sectionClass =
  "grid gap-10 border-t border-revealue-mineral/20 py-20 sm:py-24 lg:grid-cols-12";

function formatProjectedKpiResult(kpi: ProjectedKpi): string {
  if (kpi.id === "parking-change") {
    return "+0,02 ratio · equivalente a +2 punti percentuali";
  }

  if (kpi.id === "traffic-change") {
    return "+0,20 ratio";
  }

  return kpi.result;
}

export default function Rv03CasePage() {
  const caseStudy = OPERATIONAL_PROOF;

  return (
    <div className="relative overflow-hidden bg-[#080a0b]/90 font-sans text-revealue-ivory">
      <article
        className="mx-auto max-w-[90rem] px-6 pb-28 pt-40 sm:px-10 sm:pb-36 sm:pt-48 lg:px-16 lg:pb-44 lg:pt-52"
        aria-labelledby="rv03-title"
      >
        <header className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <p className={sectionLabelClass}>Laboratorio REVEALUE</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-4">
            <p className="text-sm uppercase tracking-[0.2em] text-revealue-mineral">
              {caseStudy.classification}
            </p>
            <h1
              id="rv03-title"
              className="mt-8 max-w-[15ch] text-[clamp(3.25rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.055em]"
            >
              {caseStudy.id} · {caseStudy.title}
            </h1>
            <p className="mt-12 max-w-[42rem] text-[clamp(1.2rem,2vw,1.6rem)] font-light leading-[1.6] text-revealue-mineral">
              Un caso sperimentale per osservare come alternative, governance,
              Missione e output restano collegati. Non è un caso cliente né una
              prova di efficacia sul campo.
            </p>
          </div>
        </header>

        <section className={`${sectionClass} mt-28 sm:mt-36`} aria-labelledby="rv03-problem-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>A · Il problema</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <h2
              id="rv03-problem-title"
              className="max-w-[18ch] text-[clamp(2.25rem,4.5vw,4.75rem)] font-light leading-[1.03] tracking-[-0.045em]"
            >
              Una scelta di mobilità produce effetti che possono divergere.
            </h2>
            <p className="mt-10 max-w-[42rem] text-lg leading-relaxed text-revealue-mineral sm:text-xl">
              {caseStudy.problem}
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Dimensioni del contesto di mobilità">
              {caseStudy.contextDimensions.map((dimension) => (
                <li
                  key={dimension}
                  className="border-b border-revealue-mineral/25 pb-2 text-sm text-revealue-mineral"
                >
                  {dimension}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-boundary-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>B · Perimetro dell’evidenza</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <h2 id="rv03-boundary-title" className="text-3xl font-light tracking-[-0.035em] sm:text-4xl">
              Leggere ogni informazione per il suo stato.
            </h2>
            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              {caseStudy.evidenceBoundary.map((boundary) => (
                <div key={boundary.state} className="border-t border-revealue-copper/55 pt-5">
                  <dt className="text-sm font-medium tracking-[0.16em] text-revealue-copper">
                    {boundary.state}
                  </dt>
                  <dd className="mt-4 text-base leading-relaxed text-revealue-ivory/70">
                    <span className="block text-revealue-ivory">{boundary.label}</span>
                    <span className="mt-2 block">{boundary.description}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-alternatives-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>C · Alternative e Decisione</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <h2
              id="rv03-alternatives-title"
              className="max-w-[18ch] text-[clamp(2.25rem,4.5vw,4.75rem)] font-light leading-[1.03] tracking-[-0.045em]"
            >
              Due azioni candidate. Una Decisione governata.
            </h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2">
              {caseStudy.candidateActions.map((candidate, index) => (
                <li
                  key={candidate.id}
                  className={`border-t pt-6 ${
                    candidate.selected
                      ? "border-revealue-copper"
                      : "border-revealue-mineral/25"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-revealue-mineral">
                    Azione candidata 0{index + 1}
                  </p>
                  <p className="mt-4 text-xl font-light leading-relaxed">
                    {candidate.title ?? "Denominazione non disponibile nei materiali forniti"}
                  </p>
                  <p className="mt-5 text-sm text-revealue-mineral">
                    {candidate.selected
                      ? "Selezionata dalla Decisione governata"
                      : "Non selezionata nello scenario controllato"}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-trace-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>D · Tracciabilità</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-4">
            <h2 id="rv03-trace-title" className="sr-only">
              Tracciabilità tra Decisione e Missione
            </h2>
            <ol className="grid gap-6 md:grid-cols-3">
              <li className="border-t border-revealue-copper/55 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-revealue-mineral">01 · Decisione</p>
                <p className="mt-4 text-xl font-light">{caseStudy.decision.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-revealue-mineral">
                  Seleziona {caseStudy.decision.selectedAction}.
                </p>
              </li>
              <li className="border-t border-revealue-copper/55 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-revealue-mineral">02 · Missione</p>
                <p className="mt-4 text-xl font-light">{caseStudy.mission.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-revealue-mineral">
                  {caseStudy.mission.specification}
                </p>
              </li>
              <li className="border-t border-revealue-mineral/25 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-revealue-mineral">03 · Esecuzione</p>
                <p className="mt-4 text-xl font-light">
                  {caseStudy.mission.executionEvidenceCount} evidenze software
                </p>
                <p className="mt-4 text-sm leading-relaxed text-revealue-mineral">
                  {caseStudy.mission.executionStatus}
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-outcomes-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>E · Output derivati</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-4">
            <h2
              id="rv03-outcomes-title"
              className="max-w-[19ch] text-[clamp(2.25rem,4.5vw,4.75rem)] font-light leading-[1.03] tracking-[-0.045em]"
            >
              Un esito avverso e uno favorevole, nello stesso scenario.
            </h2>
            <div className="mt-14 grid min-w-0 gap-10 xl:grid-cols-2">
              {caseStudy.outcomes.map((outcome) => (
                <article key={outcome.id} className="min-w-0 border-t border-revealue-copper/55 pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-revealue-copper">
                    MODELLED · {outcome.label}
                  </p>
                  <h3 className="mt-4 text-xl font-light">{outcome.measure}</h3>
                  <p className="mt-9 grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-baseline gap-2 text-[clamp(2.5rem,4.2vw,4.75rem)] font-light leading-none tracking-[-0.055em] sm:gap-3">
                    <span className="min-w-0 whitespace-nowrap text-right">
                      {outcome.initial}
                    </span>
                    <span className="text-revealue-copper" aria-hidden="true">→</span>
                    <span className="sr-only">a</span>
                    <span className="min-w-0 whitespace-nowrap">
                      {outcome.final}
                    </span>
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-revealue-ivory/70">
                    {outcome.delta} · DERIVED: {outcome.directionLabel}.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-kpi-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>F · KPI proiettati</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <h2 id="rv03-kpi-title" className="text-3xl font-light tracking-[-0.035em] sm:text-4xl">
              Quattro risultati in sola lettura.
            </h2>
            <p className="mt-8 max-w-[42rem] text-lg leading-relaxed text-revealue-mineral">
              La proiezione in sola lettura restituisce due risultati per il
              parcheggio e due per il traffico. Il conteggio delle ricevute KPI
              persistite è {caseStudy.durableKpiExecutionReceipts}.
            </p>
            <dl className="mt-12 grid gap-8 sm:grid-cols-2">
              {caseStudy.projectedKpis.results.map((kpi) => (
                <div key={kpi.id} className="border-t border-revealue-copper/55 pt-5">
                  <dt className="text-sm font-medium uppercase tracking-[0.16em] text-revealue-copper">
                    DERIVED · {kpi.dimension}
                  </dt>
                  <dd className="mt-4">
                    <p className="text-xl font-light">{kpi.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-revealue-ivory/70">
                      {kpi.definition}
                    </p>
                    <p className="mt-4 text-base text-revealue-ivory">
                      Esito:{" "}
                      <span className="font-mono text-sm">
                        {formatProjectedKpiResult(kpi)}
                      </span>
                    </p>
                    <p className="mt-3 break-all font-mono text-xs leading-relaxed text-revealue-mineral">
                      {kpi.definitionIdentity}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
            <details className="mt-10 border-t border-revealue-mineral/20 pt-6 text-sm text-revealue-mineral">
              <summary className="cursor-pointer text-revealue-ivory">
                Riferimenti di evidenza
              </summary>
              <div className="mt-5 space-y-5 leading-relaxed">
                <p>{caseStudy.sourceNote}</p>
                <p className="break-all font-mono text-xs">
                  Mission: {caseStudy.mission.identity}
                </p>
                {caseStudy.projectedKpis.results.map((kpi) => (
                  <p key={`${kpi.id}-evidence`} className="break-all font-mono text-xs">
                    {kpi.id}: {kpi.expectedEffectId} · {kpi.observedEffectId}
                  </p>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="rv03-limits-title">
          <div className="lg:col-span-3">
            <p className={sectionLabelClass}>G · Portata e limiti</p>
          </div>
          <div className="grid gap-12 lg:col-span-8 lg:col-start-4 md:grid-cols-2">
            <div>
              <h2 id="rv03-limits-title" className="text-2xl font-light">Cosa dimostra</h2>
              <ul className="mt-8 space-y-5 text-base leading-relaxed text-revealue-mineral">
                {caseStudy.demonstrates.map((item) => (
                  <li key={item} className="border-t border-revealue-copper/35 pt-4">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-light">Cosa non dimostra</h2>
              <ul className="mt-8 space-y-5 text-base leading-relaxed text-revealue-mineral">
                {caseStudy.doesNotDemonstrate.map((item) => (
                  <li key={item} className="border-t border-revealue-mineral/25 pt-4">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 pt-20 sm:pt-24" aria-labelledby="rv03-cta-title">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:col-start-4">
              <p className={sectionLabelClass}>Un pilot con dati reali</p>
              <h2
                id="rv03-cta-title"
                className="mt-8 max-w-[14ch] text-[clamp(2.75rem,5.4vw,5.5rem)] font-light leading-[0.98] tracking-[-0.05em]"
              >
                Verifichiamo il metodo nel tuo contesto.
              </h2>
              <p className="mt-10 max-w-[38rem] text-lg leading-relaxed text-revealue-mineral">
                Un pilot parte da fonti, responsabilità, criteri di osservazione
                e limiti condivisi. I risultati non sono anticipati.
              </p>
              <div className="mt-12 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
                <a
                  href="mailto:giacinto@revealue.it?subject=Pilot%20REVEALUE%20con%20dati%20reali"
                  className="inline-flex min-h-12 items-center gap-4 border-b border-revealue-copper/70 py-2 text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:border-revealue-ivory focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper motion-reduce:transition-none"
                >
                  Discutiamo un pilot
                  <span aria-hidden="true">→</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center text-sm text-revealue-mineral underline decoration-revealue-mineral/50 underline-offset-4 hover:text-revealue-ivory focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper"
                >
                  Torna alla homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
