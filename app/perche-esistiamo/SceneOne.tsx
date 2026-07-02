"use client";

import Reveal from "@/components/Reveal";
import Statement from "@/components/narrative/Statement";

export default function SceneOne() {
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">

        <Reveal>

          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            PERCHÉ ESISTIAMO
          </span>

        </Reveal>

        <div className="mt-52">

          <Statement delay={0.3}>

            Perché abbiamo creato

            <br />

            Moovento?

          </Statement>

        </div>

      </div>

    </section>
  );
}