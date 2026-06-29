"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "manifesto");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          MANIFESTO
        </span>

        <h2 className="mt-8 max-w-5xl text-[54px] leading-[1.02] tracking-[-0.04em] font-light md:text-[88px]">
          Ogni territorio è una rete
          <br />
          di relazioni che produce
          <br />
          valore, ogni giorno.
        </h2>

        <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-400">
          Persone, luoghi, servizi, eventi e mobilità non
          sono elementi isolati. È il modo in cui si
          connettono che genera opportunità, criticità
          e nuove possibilità.
        </p>

      </div>
    </section>
  );
}