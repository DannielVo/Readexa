export type MobilePanel = "editor" | "preview";

interface MobileViewToggleProps {
  activePanel: MobilePanel;
  onChange: (panel: MobilePanel) => void;
}

const MobileViewToggle = ({ activePanel, onChange }: MobileViewToggleProps) => {
  const buttonClassName = (panel: MobilePanel) =>
    `flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold transition ${
      activePanel === panel
        ? "bg-bg-primary text-primary shadow-sm"
        : "text-text-muted hover:text-text-primary"
    }`;

  return (
    <div className="sticky top-20 z-30 border-b border-border-default bg-bg-primary px-4 pb-2 pt-3 lg:hidden">
      <div className="mx-auto inline-flex w-full rounded-lg bg-bg-tertiary p-1 shadow-inner">
        <button
          className={buttonClassName("editor")}
          onClick={() => onChange("editor")}
          type="button"
        >
          Editor
        </button>

        <button
          className={buttonClassName("preview")}
          onClick={() => onChange("preview")}
          type="button"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default MobileViewToggle;
