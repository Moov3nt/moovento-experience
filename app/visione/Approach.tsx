"use client";

export default function Approach() {
  return (
    <section className="relative py-40 text-white">

      <div className="mx-auto max-w-6xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          IL NOSTRO APPROCCIO
        </span>

        <h2 className="mt-8 text-[56px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Moovento nasce
          <br />
          da questa
          <br />
          convinzione.
        </h2>
        
        <>
  <p className="mt-12 max-w-3xl text-xl leading-relaxed text-neutral-300">
    Il principio è semplice.
  </p>

  <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-500">
    Un sistema non si comprende osservando i suoi elementi,
    ma leggendo le relazioni che li uniscono.
  </p>
</>

        <div className="mt-28 space-y-10">

          {[
            "Osservare",
            "Comprendere",
            "Mettere in relazione",
            "Scoprire",
            "Supportare",
            "Generare valore",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-8"
            >

              <span className="w-10 text-[#A8B68A] text-lg">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <div className="h-px w-16 bg-white/10" />

              <span className="text-3xl font-light">
                {step}
              </span>

            </div>

          ))}

        </div>

        <p className="mt-24 max-w-3xl text-xl leading-relaxed text-neutral-500">
          Ogni passaggio rende il sistema più comprensibile.
          Ogni decisione diventa più consapevole.
        </p>

      </div>

    </section>
  );
}