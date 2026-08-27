import Link from "next/link";

type RelationalAnnotationProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

function RelationalAnnotation({
  label,
  children,
  className = "",
}: RelationalAnnotationProps) {
  return (
    <aside
      className={`border-l border-revealue-copper/40 pl-5 text-revealue-mineral ${className}`}
      aria-label={`Annotazione: ${label}`}
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-copper">
        {label}
      </p>
      <p className="mt-3 max-w-[17rem] text-[15px] leading-relaxed sm:text-base">
        {children}
      </p>
    </aside>
  );
}

function RelationalThread() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-[23rem] hidden h-[66rem] w-full text-revealue-copper lg:block"
      viewBox="0 0 1200 1056"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M176 64 C374 64 338 286 548 286 C752 286 704 586 948 586 C1056 586 1044 824 846 824"
        stroke="currentColor"
        strokeOpacity="0.20"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const movementLabelClass =
  "text-[10px] font-medium uppercase tracking-[0.32em] text-revealue-mineral";

export default function VisionEssay() {
  return (
    <div className="relative overflow-hidden bg-[#080a0b]/80 text-revealue-ivory">
      <article
        className="relative mx-auto max-w-[90rem] px-6 pb-28 pt-40 sm:px-10 sm:pb-36 sm:pt-48 lg:px-16 lg:pb-48 lg:pt-56"
        aria-labelledby="visione-title"
      >
        <RelationalThread />

        <header className="relative grid gap-y-12 lg:grid-cols-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-revealue-copper lg:col-span-2">
            Visione
          </p>

          <div className="lg:col-span-8 lg:col-start-4">
            <p className={movementLabelClass}>Ciò che appare separato</p>
            <h1
              id="visione-title"
              className="mt-7 max-w-[13ch] text-[clamp(3.25rem,7.4vw,7.25rem)] font-light leading-[0.94] tracking-[-0.055em]"
            >
              Un evento non è la somma di ciò che accade.
            </h1>

            <p className="mt-12 max-w-[38rem] text-[clamp(1.2rem,2vw,1.65rem)] font-light leading-[1.55] text-revealue-mineral">
              Segnali, persone, servizi e decisioni acquistano significato
              nelle relazioni che li uniscono.
            </p>
          </div>
        </header>

        <div className="relative mt-36 grid gap-y-12 sm:mt-48 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 lg:col-start-2">
            <h2 className={movementLabelClass}>
              Il significato è nella relazione
            </h2>
            <p className="mt-8 max-w-[13ch] text-[clamp(2.5rem,5vw,5.25rem)] font-light leading-[1.02] tracking-[-0.045em]">
              La complessità non è il problema.
            </p>
            <p className="mt-5 max-w-[15ch] text-[clamp(2.5rem,5vw,5.25rem)] font-light leading-[1.02] tracking-[-0.045em] text-revealue-mineral">
              Lo diventa quando viene letta per parti isolate.
            </p>
          </div>

          <RelationalAnnotation
            label="Relazione"
            className="mt-4 lg:col-span-3 lg:col-start-9 lg:mt-32"
          >
            Il contesto modifica il significato di ciò che osserviamo.
          </RelationalAnnotation>
        </div>

        <div className="relative mt-40 grid gap-y-12 sm:mt-56 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:col-start-5 lg:row-start-1">
            <h2 className={movementLabelClass}>Un sistema cambia nel tempo</h2>
            <p className="mt-8 max-w-[16ch] text-[clamp(2.75rem,5.4vw,5.75rem)] font-light leading-[1] tracking-[-0.05em]">
              Un sistema cambia nel tempo.
            </p>
            <p className="mt-10 max-w-[35rem] text-lg leading-[1.7] text-revealue-mineral sm:text-xl">
              Con il suo evolvere cambiano la rilevanza di un segnale, le
              possibilità d’intervento e gli effetti di una decisione.
            </p>
          </div>

          <RelationalAnnotation
            label="Dipendenza"
            className="lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:mt-28"
          >
            Un cambiamento locale può modificare le condizioni che emergono
            altrove.
          </RelationalAnnotation>

          <RelationalAnnotation
            label="Tempo"
            className="lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mt-80"
          >
            Conseguenze e continuità diventano leggibili lungo l’evoluzione
            del sistema.
          </RelationalAnnotation>
        </div>

        <div className="relative mt-40 grid gap-y-12 border-t border-white/10 pt-16 sm:mt-56 sm:pt-20 lg:grid-cols-12">
          <h2 className={`${movementLabelClass} lg:col-span-2`}>
            Vedere il sistema
          </h2>

          <div className="lg:col-span-7 lg:col-start-4">
            <p className="max-w-[18ch] text-[clamp(2.75rem,5.2vw,5.5rem)] font-light leading-[1] tracking-[-0.05em]">
              Vedere le relazioni cambia ciò che possiamo comprendere.
            </p>

            <p className="mt-12 max-w-[38rem] text-lg leading-[1.7] text-revealue-mineral sm:text-xl">
              REVEALUE è un sistema di event intelligence che legge
              l’evoluzione di contesti, interventi, effetti ed evidenze per
              sostenere decisioni più fondate.
            </p>

            <Link
              href="/ambiti"
              className="group mt-16 inline-flex min-h-12 items-center gap-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-revealue-ivory outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-revealue-copper focus-visible:ring-offset-4 focus-visible:ring-offset-[#080a0b] motion-reduce:transition-none"
            >
              <span className="border-b border-white/35 pb-1 transition-colors duration-300 group-hover:border-revealue-copper group-focus-visible:border-revealue-copper motion-reduce:transition-none">
                Esplora gli ambiti
              </span>
              <span
                className="h-px w-12 bg-revealue-copper/70"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
