"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "cta");

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center text-[#ECE7DF]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(135,153,106,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8 text-center">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#87996A]">
          IL PROSSIMO PASSO
        </span>

        <h2 className="mt-10 text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-8xl">
          Ogni territorio
          <br />
          possiede già
          <br />
          le proprie relazioni.
        </h2>

        <p className="mx-auto mt-12 max-w-2xl text-xl leading-9 text-white/45">
          Non aggiungiamo complessità.
          <br />
          Rendiamo leggibile quella che esiste già.
        </p>

        <div className="mt-24">

          <button
            className="
              rounded-full
              border
              border-[#87996A]
              px-10
              py-5
              text-sm
              uppercase
              tracking-[0.35em]
              transition-all
              duration-500
              hover:bg-[#87996A]
              hover:text-black
            "
          >
            Inizia una conversazione
          </button>

        </div>

      </div>
    </section>
  );
}