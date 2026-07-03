"use client";

import Statement from "@/components/narrative/Statement";
import Pause from "@/components/narrative/Pause";
import Reveal from "@/components/Reveal";

export default function SceneFive() {
  return (
    <section className="relative min-h-[125vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <div className="max-w-5xl">
          <Statement>
            La complessità
            <br />
            non sparirà.
          </Statement>
        </div>

        <Pause size="md" />

        <Reveal delay={0.4}>
          <p className="text-2xl leading-[1.55] text-neutral-400 md:text-3xl">
            Ed è giusto così.
          </p>
        </Reveal>

        <Pause />

        <div className="max-w-6xl">
          <Statement emphasis delay={0.8}>
            Possiamo però
            <br />
            comprenderla.
          </Statement>
        </div>

      </div>
    </section>
  );
}