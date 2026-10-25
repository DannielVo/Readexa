import { useState } from "react";
import type { ReadmeProfile } from "../../assets/dummyDB";

interface AboutMeSectionProps {
  profile: ReadmeProfile;
  onChange: (field: "work" | "url" | "learn" | "collab", value: string) => void;
}

const inputClassName =
  "mt-1 w-full rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-border-active focus:ring-2 focus:ring-primary-tint";

const AboutMeSection = ({ profile, onChange }: AboutMeSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="overflow-hidden rounded-xl border border-border-default bg-bg-primary">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between bg-surface-hover px-4 py-3.5 text-left transition hover:bg-bg-tertiary"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="flex items-center gap-2.5 font-semibold text-text-primary">
          About Me
        </span>

        <span
          className={`material-symbols-outlined text-[20px] text-text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-3.5 border-t border-border-default p-4">
            <label className="block text-sm text-text-secondary">
              Currently Working On
              <input
                className={inputClassName}
                onChange={(event) => onChange("work", event.target.value)}
                placeholder="Project name or role"
                type="text"
                value={profile.work}
              />
            </label>

            <label className="block text-sm text-text-secondary">
              <span className="flex items-center justify-between">
                Project URL
                <span className="text-xs text-text-muted">(optional)</span>
              </span>

              <input
                className={`${inputClassName} font-mono`}
                onChange={(event) => onChange("url", event.target.value)}
                placeholder="https://github.com/..."
                type="url"
                value={profile.url}
              />
            </label>

            <label className="block text-sm text-text-secondary">
              Currently Learning
              <input
                className={inputClassName}
                onChange={(event) => onChange("learn", event.target.value)}
                placeholder="e.g. Go, Rust, System Design"
                type="text"
                value={profile.learn}
              />
            </label>

            <label className="block text-sm text-text-secondary">
              Looking to Collaborate On
              <input
                className={inputClassName}
                onChange={(event) => onChange("collab", event.target.value)}
                placeholder="e.g. Developer tools, Web3, AI"
                type="text"
                value={profile.collab}
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
