"use client";

import Statement from "@/components/narrative/Statement";
import Pause from "@/components/narrative/Pause";
import Reveal from "@/components/Reveal";

export default function SceneFour() {
  return (
    <section className="relative min-h-[135vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            DA QUELLA COMPRENSIONE
          </p>
        </Reveal>

        <div className="mt-16 max-w-5xl">
          <Statement delay={0.25}>
            È nato
            <br />
            un modo diverso
            <br />
            di osservare.
          </Statement>
        </div>

        <Pause size="md" />

        <Reveal delay={0.65}>
          <p className="max-w-3xl text-2xl leading-[1.55] text-neutral-400 md:text-3xl">
            Un modo per comprendere relazioni,
            <br />
            dipendenze e influenze nel tempo.
          </p>
        </Reveal>

        <Pause />

        <div className="max-w-5xl">
          <Statement delay={1}>
            Da quella visione
            <br />
            è nata Moovento.
            <br />
            Non per semplificare,
            <br />
            ma per agire con responsabilità.
          </Statement>
        </div>

      </div>
    </section>
  );
}
