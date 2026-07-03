"use client";

import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            IL PROSSIMO PASSO
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <h2 className="mt-16 max-w-4xl text-[52px] font-light leading-[1.02] tracking-[-0.05em] text-white md:text-[84px]">
            Iniziamo
            <br />
            dal tuo sistema.
          </h2>
        </Reveal>

        <Reveal delay={0.55}>
          <p className="mt-16 max-w-2xl text-xl leading-[1.6] text-neutral-400 md:text-2xl">
            Osserviamo ciò che accade.
            <br />
            Comprendiamo ciò che lo influenza.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <a
            href="/contatti"
            className="
              mt-20
              inline-flex
              items-center
              gap-5
              border-b
              border-[#A8B68A]/60
              pb-3
              text-sm
              uppercase
              tracking-[0.32em]
              text-white
              transition-all
              duration-500
              hover:border-[#A8B68A]
              hover:text-[#A8B68A]
            "
          >
            Parliamone
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}