import { useToast, type ToastType } from "../../context/ToastContext";

const toastStyles: Record<ToastType, string> = {
  success: "bg-success text-text-on-primary",
  error: "bg-error text-text-on-primary",
  warning: "bg-warning text-text-on-primary",
  info: "bg-info text-text-on-primary",
};

const toastIcons: Record<ToastType, string> = {
  success: "check_circle",
  error: "error",
  warning: "warning",
  info: "info",
};

const ToastContainer = () => {
  const { removeToast, toasts } = useToast();

  return (
    <div className="pointer-events-none fixed top-4 right-4 z-70 w-[min(280px,calc(100vw-2rem))] space-y-3 sm:w-80">
      {toasts.map((toast) => {
        const role =
          toast.type === "error" || toast.type === "warning"
            ? "alert"
            : "status";

        return (
          <div
            className={`pointer-events-auto animate-slideIn flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg ${toastStyles[toast.type]}`}
            key={toast.id}
            role={role}
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined shrink-0 text-[22px]"
            >
              {toastIcons[toast.type]}
            </span>

            <p className="min-w-0 flex-1 text-sm font-medium leading-5">
              {toast.message}
            </p>

            <button
              aria-label="Dismiss notification"
              className="material-symbols-outlined flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[20px] transition hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white/70"
              onClick={() => removeToast(toast.id)}
              type="button"
            >
              close
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
