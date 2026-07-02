"use client";

import Statement from "@/components/narrative/Statement";
import StoryLine from "@/components/narrative/StoryLine";
import Pause from "@/components/narrative/Pause";

export default function SceneTwo() {
  return (
    <section className="relative min-h-[135vh] flex items-center">

      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <Statement>

          Ci siamo trovati

          <br /><br />

          troppe volte davanti

          <br /><br />

          alla stessa situazione.

        </Statement>

        <Pause />

        <StoryLine delay={0.3}>
          Molti dati.
        </StoryLine>

        <Pause size="sm" />

        <StoryLine delay={0.8}>
          Molti strumenti.
        </StoryLine>

        <Pause size="sm" />

        <StoryLine delay={1.3}>
          Molte decisioni.
        </StoryLine>

        <Pause />

        <Statement
          delay={2}
          emphasis
        >
          Poca

          <br />

          comprensione.
        </Statement>

      </div>

    </section>
  );
}