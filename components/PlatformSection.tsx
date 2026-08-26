"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "action");

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center py-24 pb-32 text-white md:py-32 md:pb-40"
    >
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
              IL METODO MOOVENTO
            </span>

            <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
              Osservare. Comprendere.
              <br />
              Decidere. Valutare. Evolvere.
            </h2>

            <p className="mt-14 max-w-xl text-xl leading-relaxed text-neutral-400">
              Moovento collega ciò che accade durante un evento alle
              decisioni adottate e agli effetti che ne derivano. Ogni
              passaggio conserva il proprio significato e contribuisce a
              costruire esperienza per gli eventi successivi.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="space-y-8">
              {[
                "Osservare",
                "Comprendere",
                "Decidere",
                "Agire",
                "Valutare",
                "Evolvere",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5"
                >
                  <div className="h-2 w-2 rounded-full bg-[#C4D39A]" />

                  <span className="text-2xl text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 md:mt-20">
          <p className="max-w-3xl text-3xl leading-relaxed text-neutral-300">
            Ogni evento può così lasciare l&apos;organizzazione più
            preparata del precedente.
          </p>
        </div>
      </div>
    </section>
  );
}
