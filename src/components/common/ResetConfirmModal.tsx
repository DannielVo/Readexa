import { useEffect } from "react";

interface ResetConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ResetConfirmModal = ({
  isOpen,
  onCancel,
  onConfirm,
}: ResetConfirmModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
    >
      <div className="w-sm md:w-lg shrink-0 rounded-xl border border-border-default bg-bg-primary p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-error">
            <span className="material-symbols-outlined text-[24px]">
              warning
            </span>
          </div>

          <button
            type="button"
            aria-label="Close reset dialog"
            onClick={onCancel}
            className="rounded-lg p-1 text-text-muted transition hover:text-text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Title */}
        <h2
          id="reset-modal-title"
          className="mb-2 text-lg font-bold text-text-primary"
        >
          Reset README?
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-text-secondary">
          This will remove your current changes and reset the editor to its
          default state. This action cannot be undone.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-border-default px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-bg-secondary"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center gap-1.5 rounded-lg bg-error px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <span>Reset README</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetConfirmModal;
