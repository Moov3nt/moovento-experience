"use client";

import Statement from "@/components/narrative/Statement";
import Reveal from "@/components/Reveal";

export default function SceneThree() {
  return (
    <section className="min-h-[120vh] flex items-center">

      <div className="mx-auto max-w-5xl px-8 lg:px-16">

        <Reveal>

          <p className="max-w-3xl text-2xl leading-relaxed text-neutral-400">

            È stato lì che abbiamo capito
            che il problema non era raccogliere
            nuove informazioni.

          </p>

        </Reveal>

        <div className="mt-40">

          <Statement delay={0.6}>

            Era
            <br />
            comprenderle.

          </Statement>

        </div>

      </div>

    </section>
  );
}