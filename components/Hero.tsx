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

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-10">
          <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            MAKING THE INVISIBLE VALUABLE
          </p>

          <h1 className="max-w-5xl text-[72px] font-light leading-[0.95] tracking-[-0.05em] md:text-[118px]">
            Rendere visibile
            <br />
            il valore invisibile.
          </h1>

          <p className="mt-12 max-w-md text-lg leading-relaxed text-neutral-400">
            Comprendiamo le relazioni
            <br />
            che muovono un sistema.
          </p>

          <a
            href="#manifesto"
            className="mt-16 flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] transition-all hover:gap-5"
          >
            Scopri come
            <span>→</span>
          </a>
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