"use client";

export default function ImpactSection() {
  const impacts = [
    {
      number: "01",
      title: "Efficienza operativa",
      description:
        "Comprendere se il coordinamento delle azioni migliora l'uso delle risorse e riduce gli sprechi.",
    },
    {
      number: "02",
      title: "Decisioni più consapevoli",
      description:
        "Collegare le evidenze alle scelte, alle responsabilità e ai risultati che ne derivano.",
    },
    {
      number: "03",
      title: "Sostenibilità",
      description:
        "Valutare nel tempo come mobilità, servizi e territorio contribuiscono al valore per comunità e ambiente.",
    },
    {
      number: "04",
      title: "Reputazione",
      description:
        "Rendere comprensibili le decisioni e osservare come i loro esiti influenzano fiducia ed esperienza.",
    },
  ];

  return (
    <section className="relative py-40 text-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          L'IMPATTO
        </span>

        <h2 className="mt-8 max-w-5xl text-[56px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Comprendere un sistema
          <br />
          significa poterlo
          <br />
          migliorare.
        </h2>

        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-neutral-400">
          Contesti diversi pongono la stessa domanda:
          che cosa cambia quando una decisione diventa azione?
          Gli esiti mostrano il valore generato e ciò che va compreso meglio.
        </p>

        <div className="mt-24 border-t border-white/10">

          {impacts.map((item) => (

            <div
              key={item.number}
              className="grid grid-cols-12 gap-8 border-b border-white/10 py-12 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="col-span-2">

                <div className="text-5xl font-light text-white/10">
                  {item.number}
                </div>

              </div>

              <div className="col-span-10 lg:col-span-4">

                <h3 className="text-3xl font-light">
                  {item.title}
                </h3>

              </div>

              <div className="col-span-12 lg:col-span-6">

                <p className="max-w-xl leading-8 text-neutral-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-24 max-w-4xl">

          <p className="text-3xl font-light leading-relaxed text-neutral-300">
            Il valore emerge quando ogni risultato
            <br />
            torna ad alimentare la comprensione.
          </p>

        </div>

      </div>
    </section>
  );
}
