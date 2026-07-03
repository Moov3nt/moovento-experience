"use client";

export default function MethodSection() {
  return (
    <section className="relative py-40 text-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          IL PRINCIPIO
        </span>

        <h2 className="mt-8 max-w-5xl text-[56px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Moovento non analizza
          <br />
          elementi isolati.
          <br />
          Osserva le relazioni
          <br />
          che li collegano.
        </h2>

        <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-400">
          Ogni sistema evolve continuamente. Leggere
          come un cambiamento si propaga significa
          comprendere ciò che accade oggi e valutare
          con maggiore consapevolezza ciò che può 
          accadere domani.
        </p>

        <div className="mt-32">

          <div className="grid gap-16 lg:grid-cols-3">

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                OSSERVA
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Persone, luoghi,
                servizi, eventi
                e mobilità.
              </p>

            </div>

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                COMPRENDE
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Le relazioni che
                influenzano il
                comportamento
                del sistema.
              </p>

            </div>

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                SUPPORTA
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Decisioni più
                consapevoli,
                sostenibili
                e resilienti.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-32 border-t border-white/10 pt-16">

          <p className="max-w-4xl text-3xl font-light leading-relaxed text-neutral-300">
            Ogni sistema è unico.
            <br />
            Il metodo per comprenderlo può essere lo stesso.
          </p>

        </div>

      </div>
    </section>
  );
}