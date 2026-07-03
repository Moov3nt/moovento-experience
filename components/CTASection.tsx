"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "cta");

  return (
    <section
      id="contatti"
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            INIZIAMO
          </span>

          <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Le decisioni
            <br />
            restano
            <br />
            umane.
          </h2>

          <div className="mt-14 text-center text-xl leading-relaxed text-neutral-400">
            <p>
              Ogni organizzazione affronta sfide diverse.
              <br />
              Ogni territorio racconta una storia diversa.
            </p>

            <p className="mt-8">
              Per questo ogni percorso
              <br />
              inizia da una conversazione.
            </p>
          </div>

          <a
            href="mailto:giacinto@moovento.it"
            className="mt-20 inline-flex items-center justify-center rounded-full border border-[#A8B68A]/60 px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition-all hover:border-[#A8B68A] hover:bg-[#A8B68A]/10"
          >
            Inizia una conversazione
          </a>

        </div>
      </div>
    </section>
  );
}