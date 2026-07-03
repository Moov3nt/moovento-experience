"use client";

import RelationGraph from "./RelationGraph";

type Props = {
  title: string;
  description: string;
  implication: string;

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
  implication,
  graph,
}: Props) {
  return (
    <div
      className="
        group
        flex
        h-full
        flex-col
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

      <div className="mt-auto pt-10">
        <div className="border-t border-white/10 pt-8">
          <p className="text-lg leading-relaxed text-neutral-300">
            {implication}
          </p>
        </div>
      </div>
    </div>
  );
}