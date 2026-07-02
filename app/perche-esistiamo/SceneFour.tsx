"use client";

import Statement from "@/components/narrative/Statement";
import Reveal from "@/components/Reveal";

export default function SceneFour() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="mx-auto max-w-5xl px-8 lg:px-16">

        <Reveal>

          <p className="text-xl uppercase tracking-[0.35em] text-[#A8B68A]">
            DA QUELLA DOMANDA
          </p>

        </Reveal>

        <div className="mt-16">

          <Statement delay={0.3}>

            È nato
            <br />
            un metodo.

          </Statement>

        </div>

        <div className="mt-32">

          <Statement delay={0.8}>

            Da quel metodo
            <br />
            è nata
            <br />
            Moovento.

          </Statement>

        </div>

      </div>

    </section>
  );
}