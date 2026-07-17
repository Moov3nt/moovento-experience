"use client";

import { useEffect, useRef, useState, useTransition } from "react";

import {
  advance,
  availableAction,
  initialStage,
  reset,
} from "./journey";
import OperationalConfirmation from "./OperationalConfirmation";
import OperationalStageView from "./OperationalStageView";
import type { JourneyAction, StageSnapshot } from "./types";

const actionPresentation: Readonly<
  Record<JourneyAction, Readonly<{ label: string; confirmationTitle: string }>>
> = {
  "accept-opportunity": {
    label: "Accetta opportunità",
    confirmationTitle: "Accettare l’opportunità?",
  },
  "record-review": {
    label: "Registra revisione",
    confirmationTitle: "Registrare la revisione?",
  },
  "approve-and-plan-mission": {
    label: "Approva e pianifica Missione",
    confirmationTitle: "Approvare e pianificare la Missione?",
  },
  "start-mission": {
    label: "Avvia Missione",
    confirmationTitle: "Avviare la Missione?",
  },
  "record-mission-achieved": {
    label: "Registra Missione raggiunta",
    confirmationTitle: "Registrare la Missione come raggiunta?",
  },
  "record-outcome": {
    label: "Registra esito",
    confirmationTitle: "Registrare l’esito?",
  },
};

type ConfirmationIntent =
  | Readonly<{
      kind: "lifecycle";
      action: JourneyAction;
      sourceStage: StageSnapshot;
      trigger: HTMLButtonElement;
    }>
  | Readonly<{
      kind: "reset";
      trigger: HTMLButtonElement;
    }>;

const illustrativeConsequence =
  "Questa azione aggiorna soltanto lo scenario illustrativo.";

type OperationalDashboardProps = {
  labelledBy?: string;
};

export default function OperationalDashboard({
  labelledBy,
}: OperationalDashboardProps) {
  const [committedStage, setCommittedStage] = useState(initialStage);
  const [confirmation, setConfirmation] =
    useState<ConfirmationIntent | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [isPending, startTransition] = useTransition();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const focusHeadingAfterReset = useRef(false);

  const action = availableAction(committedStage);

  useEffect(() => {
    if (!isPending && focusHeadingAfterReset.current) {
      focusHeadingAfterReset.current = false;
      headingRef.current?.focus();
    }
  }, [isPending]);

  function requestLifecycleAction(
    requestedAction: JourneyAction,
    trigger: HTMLButtonElement,
  ) {
    if (isPending || confirmation || requestedAction !== action) return;

    setConfirmation({
      kind: "lifecycle",
      action: requestedAction,
      sourceStage: committedStage,
      trigger,
    });
  }

  function requestReset(trigger: HTMLButtonElement) {
    if (isPending || confirmation) return;
    setConfirmation({ kind: "reset", trigger });
  }

  function cancelConfirmation() {
    if (!isPending) setConfirmation(null);
  }

  function confirmIntent() {
    if (!confirmation || isPending) return;

    if (confirmation.kind === "reset") {
      focusHeadingAfterReset.current = true;
      setAnnouncement("Aggiornamento dello scenario");
      startTransition(() => {
        setCommittedStage(reset());
        setConfirmation(null);
        setAnnouncement("La fase iniziale è stata ripristinata.");
      });
      return;
    }

    const intent = confirmation;
    const nextStage = advance(intent.sourceStage, intent.action);

    setAnnouncement("Aggiornamento dello scenario");
    startTransition(() => {
      setCommittedStage((current) => {
        if (current !== intent.sourceStage) return current;
        return nextStage;
      });
      setConfirmation(null);
      setAnnouncement(
        nextStage === intent.sourceStage
          ? "La fase operativa non è cambiata."
          : `${nextStage.opportunity.statusLabel}. Fase ${nextStage.position} di 7.`,
      );
    });
  }

  const confirmationTitle =
    confirmation?.kind === "reset"
      ? "Ricominciare lo scenario?"
      : confirmation
        ? actionPresentation[confirmation.action].confirmationTitle
        : "";
  const confirmationDescription =
    confirmation?.kind === "reset"
      ? "Tornare alla situazione iniziale?"
      : illustrativeConsequence;

  return (
    <section
      aria-labelledby={labelledBy ?? "operational-dashboard-title"}
      className="w-full overflow-x-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-6 text-white backdrop-blur-xl md:p-10 lg:p-12"
    >
      <header className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            ref={headingRef}
            id="operational-dashboard-title"
            tabIndex={-1}
            className="text-3xl font-light tracking-[-0.035em] outline-none focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4D39A] md:text-5xl"
          >
            Percorso operativo
          </h2>
        </div>

        <p className="text-sm text-neutral-400">
          Fase {committedStage.position} di 7
        </p>
      </header>

      <OperationalStageView stage={committedStage} />

      {committedStage.key === "recorded" && (
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A8B68A]">
            {committedStage.terminalStatus}
          </p>
          <p className="mt-4 max-w-3xl text-xl font-light leading-relaxed text-white">
            Lesito registrato diventa nuova evidenza per comprendere levoluzione
            dellevento.
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        {action ? (
          <button
            type="button"
            disabled={isPending}
            onClick={(event) =>
              requestLifecycleAction(action, event.currentTarget)
            }
            className="min-h-11 rounded-full border border-[#A8B68A]/60 bg-[#A8B68A]/10 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:border-[#A8B68A] hover:bg-[#A8B68A]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4D39A] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
          >
            {actionPresentation[action].label}
          </button>
        ) : (
          <span />
        )}

        <button
          type="button"
          disabled={isPending}
          onClick={(event) => requestReset(event.currentTarget)}
          className="min-h-11 rounded-full border border-white/20 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4D39A] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
        >
          Ricomincia lo scenario
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {isPending ? "Aggiornamento dello scenario" : announcement}
      </p>

      {confirmation && (
        <OperationalConfirmation
          title={confirmationTitle}
          description={confirmationDescription}
          pending={isPending}
          trigger={confirmation.trigger}
          restoreFocusOnClose={confirmation.kind !== "reset"}
          onCancel={cancelConfirmation}
          onConfirm={confirmIntent}
        />
      )}
    </section>
  );
}
