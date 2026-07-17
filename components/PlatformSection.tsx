"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "platform");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
              COME FUNZIONA
            </span>

            <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
              Comprendere significa
              <br />
              mettere
              <br />
              in relazione.
            </h2>

            <p className="mt-14 max-w-xl text-xl leading-relaxed text-neutral-400">
              Moovento connette ciò che normalmente viene osservato
              separatamente. Persone, servizi, infrastrutture, mobilità
              ed eventi diventano parte di una visione che segue come
              relazioni, dipendenze e opportunità evolvono nel tempo.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="space-y-8">
              {[
                "Persone",
                "Servizi",
                "Infrastrutture",
                "Mobilità",
                "Eventi",
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

        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="max-w-3xl text-3xl leading-relaxed text-neutral-300">
            Quando seguiamo le connessioni nel tempo,
            emerge ciò che richiede una scelta.
          </p>
        </div>
      </div>
    </section>
  );
}
