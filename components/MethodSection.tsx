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
          riconoscere ciò che richiede attenzione,
          decidere come agire e comprendere gli esiti.
        </p>

        <div className="mt-32">

          <div className="grid gap-16 lg:grid-cols-3">

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                COMPRENDE
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Come persone, luoghi,
                servizi, eventi e mobilità
                evolvono insieme.
              </p>

            </div>

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                GOVERNA
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Le opportunità che
                richiedono decisioni,
                responsabilità
                e azioni coordinate.
              </p>

            </div>

            <div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
                IMPARA
              </span>

              <p className="mt-6 text-2xl font-light leading-relaxed">
                Dagli esiti osservati,
                per rendere più
                consapevoli
                le scelte successive.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-32 border-t border-white/10 pt-16">

          <p className="max-w-4xl text-3xl font-light leading-relaxed text-neutral-300">
            Ogni contesto è unico.
            <br />
            Il percorso dalla comprensione all&apos;azione resta coerente.
          </p>

        </div>

      </div>
    </section>
  );
}
