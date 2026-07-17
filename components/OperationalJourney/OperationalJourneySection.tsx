import OperationalDashboard from "./OperationalDashboard";

const headingId = "operational-journey-title";
const purposeId = "operational-journey-purpose";

export default function OperationalJourneySection() {
  return (
    <section aria-labelledby={headingId} aria-describedby={purposeId} className="relative py-32 text-white md:py-40">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">Scenario interattivo illustrativo</p>
          <h2 id={headingId} className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Dall&apos;opportunità<br />all&apos;esito.
          </h2>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Che cosa accade quando un&apos;opportunità entra in un percorso governato?
          </p>
          <p id={purposeId} className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Un solo percorso operativo illustrativo. Ogni passaggio è intenzionalmente deterministico: serve a comprendere come evidenza, scelta e azione restano collegate, non a simulare un sistema reale.
          </p>
        </div>
        <div className="mt-20"><OperationalDashboard labelledBy={headingId} /></div>
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Quando viene registrato, l&apos;Outcome diventa nuova evidenza che sostiene la comprensione delle evoluzioni operative future.
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400">
            Lo stesso principio di governance può collegare evidenze, responsabilità, azioni ed esiti ben oltre questo singolo scenario di mobilità.
          </p>
        </div>
      </div>
    </section>
  );
}
