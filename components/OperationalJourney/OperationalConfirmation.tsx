import { useEffect, useRef } from "react";

type OperationalConfirmationProps = {
  title: string;
  description: string;
  pending: boolean;
  trigger: HTMLButtonElement | null;
  restoreFocusOnClose?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const focusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function OperationalConfirmation({
  title,
  description,
  pending,
  trigger,
  restoreFocusOnClose = true,
  onCancel,
  onConfirm,
}: OperationalConfirmationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelRef.current?.focus();

    return () => {
      if (restoreFocusOnClose) {
        trigger?.focus();
      }
    };
  }, [restoreFocusOnClose, trigger]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && !pending) {
      event.preventDefault();
      onCancel();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
    );

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && event.target === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && event.target === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8"
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="operational-confirmation-title"
        aria-describedby="operational-confirmation-description"
        onKeyDown={handleKeyDown}
        className="w-full max-w-lg rounded-[28px] border border-white/10 bg-[#0A0A0A] p-6 text-white shadow-2xl md:p-8"
      >
        <h3
          id="operational-confirmation-title"
          className="text-2xl font-light tracking-[-0.03em] md:text-3xl"
        >
          {title}
        </h3>

        <p
          id="operational-confirmation-description"
          className="mt-5 leading-relaxed text-neutral-300"
        >
          {description}
        </p>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            ref={cancelRef}
            type="button"
            disabled={pending}
            onClick={onCancel}
            className="min-h-11 rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-neutral-200 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4D39A] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
          >
            Annulla
          </button>

          <button
            type="button"
            disabled={pending}
            onClick={onConfirm}
            className="min-h-11 rounded-full border border-[#A8B68A]/60 bg-[#A8B68A]/10 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:border-[#A8B68A] hover:bg-[#A8B68A]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4D39A] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
          >
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
}
