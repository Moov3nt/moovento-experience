"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "hero");

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-8">
        <span className="text-xl font-semibold tracking-tight">
          moovento
        </span>

        <button className="text-xs uppercase tracking-[0.35em] text-neutral-400 transition-colors hover:text-white">
          Contatti
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-10">
          <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            MAKING THE INVISIBLE VALUABLE
          </p>

          <h1 className="max-w-3xl text-[72px] font-light leading-[0.95] tracking-[-0.05em] md:text-[118px]">
            Rendere
            <br />
            visibile
            <br />
            il valore
            <br />
            invisibile.
          </h1>

          <p className="mt-12 max-w-md text-lg leading-relaxed text-neutral-400">
            Osserviamo le relazioni che rendono possibile il movimento.
          </p>

          <button className="mt-16 flex items-center gap-3 text-lg font-medium transition-all hover:gap-5">
            Inizia il percorso
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-10 text-[11px] uppercase tracking-[0.5em] text-neutral-500">
        Scroll
      </div>

      <div className="absolute bottom-10 right-10 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
        V0.2
      </div>
    </section>
  );
}