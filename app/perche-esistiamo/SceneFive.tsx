"use client";

import Statement from "@/components/narrative/Statement";
import Pause from "@/components/narrative/Pause";
import Reveal from "@/components/Reveal";

export default function SceneFive() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Statement>
          La complessità
          <br />
          non sparirà.
        </Statement>

        <Pause />

        <Reveal delay={0.5}>
          <p className="text-3xl text-neutral-500">
            Ed è giusto così.
          </p>
        </Reveal>

        <Pause />

        <Statement emphasis delay={1}>
          Possiamo però
          <br />
          comprenderla.
        </Statement>

      </div>
    </section>
  );
}