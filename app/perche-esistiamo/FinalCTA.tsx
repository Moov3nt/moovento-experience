"use client";

import Statement from "@/components/narrative/Statement";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="mx-auto max-w-4xl px-8 text-center">

        <Statement>

          Ogni sistema
          <br />
          ha una storia.

        </Statement>

        <div className="mt-16">

          <Reveal delay={0.5}>

            <p className="text-2xl text-neutral-400">
              Raccontaci la tua.
            </p>

          </Reveal>

        </div>

        <Reveal delay={1}>

          <button
            className="
              mt-20
              rounded-full
              border
              border-[#A8B68A]
              px-10
              py-5
              uppercase
              tracking-[0.35em]
              transition-all
              duration-500
              hover:bg-[#A8B68A]
              hover:text-black
            "
          >
            INIZIAMO
          </button>

        </Reveal>

      </div>

    </section>
  );
}