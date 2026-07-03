"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function InsightSection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "insight");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-24 px-8 lg:grid-cols-2 lg:px-16">
        {/* LEFT */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            DA COMPRENSIONE A DECISIONE
          </span>

          <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Ciò che comprendiamo
            <br />
            cambia ciò che
            <br />
            possiamo decidere.
          </h2>

          <div className="mt-12 space-y-3 text-xl leading-relaxed text-neutral-400 md:text-2xl">
            <p>Anticipare un impatto.</p>
            <p>Leggere un flusso.</p>
            <p>Valutare uno scenario.</p>
          </div>

          <p className="mt-10 max-w-md text-xl leading-relaxed text-neutral-300">
            La comprensione diventa capacità di agire.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Scenario
                </div>

                <h3 className="mt-3 text-5xl font-light">
                  Festival del Lago
                </h3>
              </div>

              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Impatto
                </div>

                <div className="rounded-full bg-[#C4D39A]/10 px-5 py-2 text-xl text-[#C4D39A]">
                  +24%
                </div>
              </div>
            </div>

            <div className="mt-14 space-y-8">
              {[
                ["Capacità della rete", 84],
                ["Distribuzione dei flussi", 67],
                ["Impatto sul territorio", 91],
              ].map(([label, value]) => (
                <div key={String(label)}>
                  <div className="mb-3 flex justify-between text-neutral-400">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="h-[3px] rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#C4D39A]"
                      style={{
                        width: `${value}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}