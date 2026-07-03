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
          INIZIAMO
        </span>

        <h2 className="mt-10 text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-8xl">
          Le decisioni 
          <br />
          restano
          <br />
          umane.
        </h2>


        <p className="mt-12 mx-auto max-w-xl text-center text-xl leading-relaxed text-neutral-400">
        Ogni organizzazione affronta sfide diverse.
        <br />
        Ogni territorio racconta una storia diversa.
        </p>

      <p className="mt-8 mx-auto max-w-xl text-center text-lg leading-relaxed text-neutral-300">
        Per questo ogni percorso
        <br />
        inizia da una conversazione.
        </p>
        <div className="mt-24">

        <button className="mt-14 rounded-full border border-[#A8B68A]/50 px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition-all duration-300 hover:border-[#A8B68A] hover:bg-[#A8B68A]/10">
  Inizia una conversazione
</button>

        </div>
        <div className="mt-14">

        <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">

          OSSERVARE · COMPRENDERE · METTERE IN RELAZIONE ·
          SCOPRIRE · DECIDERE · INFLUENZARE

        </p>

      </div>
      </div>
    </section>
  );
}