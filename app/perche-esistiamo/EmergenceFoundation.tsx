import Link from "next/link";

const movementLabelClass =
  "text-[10px] font-medium uppercase tracking-[0.32em] text-revealue-mineral";

const ecosystemFragments = [
  {
    label: "Segnali",
    position: "sm:left-[3%] sm:top-[12%]",
    line: "w-16",
  },
  {
    label: "Persone",
    position: "sm:left-[39%] sm:top-0",
    line: "w-24",
  },
  {
    label: "Servizi",
    position: "sm:right-[7%] sm:top-[23%]",
    line: "w-12",
  },
  {
    label: "Flussi",
    position: "sm:left-[16%] sm:top-[58%]",
    line: "w-28",
  },
  {
    label: "Decisioni",
    position: "sm:left-[54%] sm:top-[49%]",
    line: "w-16",
  },
  {
    label: "Effetti",
    position: "sm:bottom-[3%] sm:right-[15%]",
    line: "w-20",
  },
] as const;

function EcosystemFragments() {
  return (
    <ul
      className="relative mt-20 flex flex-col gap-9 pl-3 sm:block sm:min-h-[28rem] sm:pl-0 lg:mt-28 lg:min-h-[32rem]"
      aria-label="Realtà che coesistono in un evento"
    >
      {ecosystemFragments.map((fragment, index) => (
        <li
          key={fragment.label}
          className={`relative flex w-fit items-center gap-4 text-base font-light tracking-[0.04em] text-revealue-mineral sm:absolute sm:text-lg ${fragment.position} ${
            index % 2 === 0 ? "ml-0" : "ml-12 sm:ml-0"
          }`}
        >
          <span
            className={`h-px ${fragment.line} bg-revealue-mineral/25`}
            aria-hidden="true"
          />
          {fragment.label}
        </li>
      ))}
    </ul>
  );
}

function FragmentedConditions() {
  return (
    <div
      className="mt-20 grid gap-y-12 text-[clamp(1.25rem,2.4vw,2rem)] font-light text-revealue-mineral sm:mt-28 lg:grid-cols-12"
      aria-label="Condizioni osservate separatamente"
    >
      <p className="border-t border-revealue-mineral/20 pt-5 lg:col-span-3 lg:col-start-2">
        Contesto
      </p>
      <p className="border-t border-revealue-mineral/20 pt-5 lg:col-span-3 lg:col-start-6 lg:mt-20">
        Responsabilità
      </p>
      <p className="border-t border-revealue-mineral/20 pt-5 lg:col-span-2 lg:col-start-11 lg:mt-40">
        Effetti
      </p>
    </div>
  );
}

function EmergingEvidence() {
  return (
    <div className="relative mt-16 max-w-[46rem] pl-8 sm:mt-20 sm:pl-10">
      <span
        className="absolute bottom-1 left-0 top-1 w-px bg-revealue-copper/55"
        aria-hidden="true"
      />
      <div className="space-y-14 sm:space-y-16">
        <p className="max-w-[27ch] text-[clamp(1.75rem,3.4vw,3.25rem)] font-light leading-[1.15] tracking-[-0.035em] text-revealue-ivory">
          Ciò che diventa leggibile può diventare evidenza.
        </p>
        <p className="max-w-[27ch] text-[clamp(1.75rem,3.4vw,3.25rem)] font-light leading-[1.15] tracking-[-0.035em] text-revealue-ivory">
          Ciò che resta come evidenza può sostenere decisioni più fondate.
        </p>
      </div>
    </div>
  );
}

export default function EmergenceFoundation() {
  return (
    <div className="relative overflow-hidden bg-[#080a0b] text-revealue-ivory">
      <article
        className="mx-auto max-w-[90rem] px-6 pb-28 pt-40 sm:px-10 sm:pb-36 sm:pt-48 lg:px-16 lg:pb-48 lg:pt-56"
        aria-labelledby="why-title"
      >
        <header className="grid gap-y-12 lg:grid-cols-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-revealue-mineral lg:col-span-2">
            Perché esistiamo
          </p>

          <div className="lg:col-span-8 lg:col-start-4">
            <p className={movementLabelClass}>Un ecosistema pieno</p>
            <h1
              id="why-title"
              className="mt-8 max-w-[14ch] text-[clamp(3.25rem,7.2vw,7rem)] font-light leading-[0.95] tracking-[-0.055em]"
            >
              Un evento produce più di ciò che riusciamo a osservare.
            </h1>
          </div>
        </header>

        <EcosystemFragments />

        <div className="mt-32 border-t border-white/10 pt-16 sm:mt-44 sm:pt-20 lg:mt-52">
          <div className="grid gap-y-10 lg:grid-cols-12">
            <h2 className={`${movementLabelClass} lg:col-span-3`}>
              Ciò che resta separato
            </h2>

            <div className="lg:col-span-7 lg:col-start-5">
              <p className="max-w-[15ch] text-[clamp(2.75rem,5.6vw,5.75rem)] font-light leading-[1] tracking-[-0.05em]">
                Dati, strumenti e decisioni non mancano.
              </p>
              <p className="mt-10 max-w-[38rem] text-lg leading-[1.7] text-revealue-mineral sm:text-xl">
                Spesso restano separati dal contesto, dalle responsabilità e
                dagli effetti che permetterebbero di comprenderli.
              </p>
            </div>
          </div>

          <FragmentedConditions />
        </div>

        <div className="mt-40 sm:mt-56 lg:mt-64">
          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 className={`${movementLabelClass} lg:col-span-3`}>
              Ciò che non emerge
            </h2>

            <div className="lg:contents">
              <p className="max-w-[19ch] text-[clamp(2.5rem,5vw,5.25rem)] font-light leading-[1.04] tracking-[-0.045em] lg:col-span-8 lg:col-start-4 lg:row-start-1">
                Quando le relazioni non diventano struttura, le conseguenze si
                frammentano.
              </p>
              <p className="ml-auto mt-20 max-w-[12ch] text-[clamp(2.25rem,4.6vw,4.75rem)] font-light leading-[1.02] tracking-[-0.045em] text-revealue-mineral sm:mt-28 lg:col-span-4 lg:col-start-8 lg:row-start-2 lg:ml-0 lg:mt-12">
                L’evidenza si disperde.
              </p>
              <p className="mt-20 max-w-[18ch] text-[clamp(2.5rem,5.2vw,5.5rem)] font-light leading-[1.02] tracking-[-0.05em] sm:mt-28 lg:col-span-7 lg:col-start-3 lg:row-start-3 lg:mt-16">
                Una parte del valore dell’evento resta invisibile.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-40 border-t border-revealue-mineral/20 pt-16 sm:mt-56 sm:pt-20 lg:mt-64">
          <div className="pointer-events-none absolute right-[7%] top-28 hidden h-px w-24 bg-revealue-mineral/15 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute right-[20%] top-52 hidden h-px w-12 bg-revealue-mineral/15 lg:block" aria-hidden="true" />

          <div className="grid gap-y-12 lg:grid-cols-12">
            <h2 className={`${movementLabelClass} lg:col-span-3`}>
              Far emergere ciò che conta
            </h2>

            <div className="lg:col-span-7 lg:col-start-4">
              <EmergingEvidence />

              <p className="mt-24 max-w-[38rem] text-xl font-light leading-[1.65] text-revealue-mineral sm:mt-32 sm:text-2xl">
                REVEALUE esiste per far emergere ciò che conta nella
                complessità di un evento e conservarne il significato nel
                tempo.
              </p>

              <Link
                href="/#metodo"
                className="group mt-16 inline-flex min-h-12 items-center gap-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-revealue-ivory outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-revealue-copper focus-visible:ring-offset-4 focus-visible:ring-offset-[#080a0b] motion-reduce:transition-none"
              >
                <span className="border-b border-white/35 pb-1 transition-colors duration-300 group-hover:border-revealue-ivory group-focus-visible:border-revealue-ivory motion-reduce:transition-none">
                  Osserva il metodo
                </span>
                <span
                  className="h-px w-12 bg-revealue-mineral/60"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
