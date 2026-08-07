import OperationalDashboard from "./OperationalDashboard";

const headingId = "operational-journey-title";
const purposeId = "operational-journey-purpose";

export default function OperationalJourneySection() {
  return (
    <section aria-labelledby={headingId} aria-describedby={purposeId} className="relative py-32 text-white md:py-40">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">Scenario operativo illustrativo</p>
          <h2 id={headingId} className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Dalla decisione<br />all&apos;esito.
          </h2>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Come si trasforma un&apos;evidenza in un&apos;azione governata, mantenendo collegate responsabilità, decisioni ed effetti?
          </p>
          <p id={purposeId} className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Il percorso è intenzionalmente semplificato e deterministico. Mostra il metodo operativo di Moovento; non rappresenta una simulazione di un evento reale.
          </p>
        </div>
        <div className="mt-20"><OperationalDashboard labelledBy={headingId} /></div>
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Quando l&apos;esito viene valutato, l&apos;esperienza non si disperde: diventa nuova conoscenza per le decisioni future.
          </p>
        </div>
      </div>
    </section>
  );
}
