"use client";

import Reveal from "@/components/Reveal";
import Statement from "@/components/narrative/Statement";
import Pause from "@/components/narrative/Pause";

export default function SceneThree() {
  return (
    <section className="relative min-h-[120vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Reveal>
          <p className="max-w-3xl text-2xl leading-[1.55] text-neutral-400 md:text-3xl">
            Abbiamo capito che il problema
            <br />
            non era avere più informazioni.
          </p>
        </Reveal>

        <Pause />

        <div className="max-w-5xl">
          <Statement delay={0.45}>
            Era
            <br />
            comprenderle.
          </Statement>
        </div>

      </div>
    </section>
  );
}