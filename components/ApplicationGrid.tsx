"use client";

import ApplicationCard from "./ApplicationCard";

const applications = [
  {
    title: "Mobilità e Trasporto",
    description:
      "Comprendere i flussi significa migliorare l’esperienza delle persone e l’efficienza dei servizi.",
    observe: "Flussi, reti, servizi e domanda.",
    understand: "Le relazioni che influenzano il sistema.",
    impact: "Efficienza",
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
    observe: "Persone, mobilità e servizi.",
    understand: "Come cambia il sistema.",
    impact: "Coordinamento",
    graph: {
      center: "Evento",
      top: "Visitatori",
      left: "Mobilità",
      right: "Servizi",
      bottom: "Attività",
    },
  },
  {
    title: "Turismo e Destinazioni",
    description:
      "Leggere i movimenti significa valorizzare il territorio nel tempo.",
    observe: "Visitatori, attrazioni e servizi.",
    understand: "La distribuzione dei flussi.",
    impact: "Sostenibilità",
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
      "Decisioni migliori nascono da una visione condivisa.",
    observe: "Attori, dati e infrastrutture.",
    understand: "Le interdipendenze del sistema.",
    impact: "Decisioni",
    graph: {
      center: "Territorio",
      top: "Cittadini",
      left: "Servizi",
      right: "Imprese",
      bottom: "Infrastrutture",
    },
  },
  {
    title: "Infrastrutture e Servizi",
    description:
      "Ogni infrastruttura è parte di una rete più ampia.",
    observe: "Servizi, reti e utilizzo.",
    understand: "Come ogni elemento influenza gli altri.",
    impact: "Resilienza",
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
    <section className="relative py-40 text-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          DOVE OPERIAMO
        </span>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {applications.map((item) => (
            <ApplicationCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}