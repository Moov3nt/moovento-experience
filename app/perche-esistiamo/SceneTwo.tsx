"use client";

import Statement from "@/components/narrative/Statement";
import StoryLine from "@/components/narrative/StoryLine";
import Pause from "@/components/narrative/Pause";

export default function SceneTwo() {
  return (
    <section className="relative min-h-[145vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Statement>
          Ci siamo trovati
          <br />
          troppe volte davanti
          <br />
          alla stessa situazione.
        </Statement>

        <div className="mt-28 space-y-5">
          <StoryLine delay={0.25}>
            Molti dati.
          </StoryLine>

          <StoryLine delay={0.55}>
            Molti strumenti.
          </StoryLine>

          <StoryLine delay={0.85}>
            Molte decisioni.
          </StoryLine>
        </div>

        <Pause />

        <div className="mt-20">
          <Statement delay={1.25} emphasis>
            Poca
            <br />
            comprensione.
          </Statement>
        </div>

      </div>
    </section>
  );
}