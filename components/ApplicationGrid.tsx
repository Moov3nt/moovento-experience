"use client";

import ApplicationCard from "./ApplicationCard";

const applications = [
  {
    title: "Turismo e Destinazioni",
    description:
      "Leggere i movimenti significa comprendere come una destinazione cambia nel tempo.",
    implication:
      "Rivelare come presenze, servizi ed esperienze trasformano il territorio nel tempo.",
    graph: {
      center: "Destinazione",
      top: "Visitatori",
      left: "Servizi",
      right: "Territorio",
      bottom: "Esperienze",
    },
  },
  {
    title: "Governance Territoriale",
    description:
      "Ogni decisione modifica relazioni, priorità ed equilibri nel territorio.",
    implication:
      "Rendere visibili dipendenze e conseguenze prima che diventino criticità.",
    graph: {
      center: "Territorio",
      top: "Cittadini",
      left: "Servizi",
      right: "Imprese",
      bottom: "Infrastrutture",
    },
  },
  {
    title: "Mobilità e Trasporto",
    description:
      "I flussi cambiano continuamente il modo in cui persone, reti e servizi si incontrano.",
    implication:
      "Comprendere dove la rete perde equilibrio e come i flussi si redistribuiscono.",
    graph: {
      center: "Mobilità",
      top: "Persone",
      left: "Servizi",
      right: "Territorio",
      bottom: "Trasporto",
    },
  },
  {
    title: "Eventi e Grandi Flussi",
    description:
      "Ogni evento modifica temporaneamente l’equilibrio di un territorio.",
    implication:
      "Anticipare come una concentrazione temporanea modifica il sistema intorno a sé.",
    graph: {
      center: "Evento",
      top: "Visitatori",
      left: "Mobilità",
      right: "Servizi",
      bottom: "Attività",
    },
  },
  {
    title: "Infrastrutture e Servizi",
    description:
      "Ogni infrastruttura è parte di una rete più ampia di utilizzi, servizi e dipendenze.",
    implication:
      "Riconoscere come utilizzo, servizi e infrastrutture si influenzano prima che una fragilità diventi interruzione.",
    graph: {
      center: "Rete",
      top: "Servizi",
      left: "Utenti",
      right: "Territorio",
      bottom: "Infrastrutture",
    },
  },
];

export default function ApplicationGrid() {
  return (
    <section className="relative py-40  pt-20 text-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          DOVE OPERIAMO
        </span>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {applications.map((item, index) => (
            <div
              key={item.title}
              className={
                index === applications.length - 1
                  ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1.25rem)]"
                  : ""
              }
            >
              <ApplicationCard {...item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}