"use client";
import RelationGraph from "./RelationGraph";
type Props = {
  title: string;
  description: string;
  observe: string;
  understand: string;
  impact: string;

  graph: {
    center: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
    };
};

export default function ApplicationCard({
  title,
  description,
  observe,
  understand,
  impact,
  graph, 
}: Props) {
  return (
    <div
      className="
        group
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        transition-all
        duration-500
        hover:border-[#A8B68A]/40
        hover:bg-white/[0.05]
      "
    >
      <h3 className="text-3xl font-light">
        {title}
      </h3>

      <p className="mt-6 leading-relaxed text-neutral-400">
        {description}
      </p>

      <RelationGraph {...graph} />


      <div className="mt-10 space-y-8">

        <div>
          <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
            OSSERVIAMO
          </div>

          <p className="mt-2 text-neutral-300">
            {observe}
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
            COMPRENDIAMO
          </div>

          <p className="mt-2 text-neutral-300">
            {understand}
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
            GENERIAMO
          </div>

          <p className="mt-2 text-white">
            {impact}
          </p>
        </div>

      </div>

    </div>
  );
}