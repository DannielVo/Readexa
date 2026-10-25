import { useState } from "react";
import { skillsCatalog } from "../../assets/assets";

interface SkillsSectionProps {
  selectedSkills: string[];
  onClear: () => void;
  onToggle: (skillName: string) => void;
}

const SkillsSection = ({
  selectedSkills,
  onClear,
  onToggle,
}: SkillsSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleCategories = skillsCatalog
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(normalizedQuery),
      ),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <section className="overflow-hidden rounded-xl border border-border-default bg-bg-primary">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between bg-surface-hover px-4 py-3.5 text-left transition hover:bg-bg-tertiary"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="flex items-center gap-2.5 font-semibold text-text-primary">
          <span>Skills &amp; Technologies</span>

          <span className="rounded-full bg-primary-tint px-2 py-0.5 text-xs font-bold text-primary-dark">
            {selectedSkills.length}
          </span>
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
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-4 border-t border-border-default p-4">
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-text-muted">
                search
              </span>

              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search technologies (e.g., Python, React)..."
                className="w-full rounded-lg border border-border-default bg-bg-primary py-2 pl-10 pr-9 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-border-active focus:ring-2 focus:ring-primary-tint"
              />

              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-text-muted transition hover:text-text-primary"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    close
                  </span>
                </button>
              )}
            </div>

            <div className="rounded-lg border border-border-default/70 bg-bg-secondary p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-text-primary">
                  Selected Skills ({selectedSkills.length})
                </span>

                <button
                  className="text-xs font-medium text-text-muted transition hover:text-error"
                  onClick={onClear}
                  type="button"
                >
                  Clear all
                </button>
              </div>

              <div className="flex min-h-7 flex-wrap items-center gap-1.5">
                {selectedSkills.length > 0 ? (
                  selectedSkills.map((skillName) => (
                    <span
                      className="inline-flex items-center gap-1 rounded-md border border-border-active/40 bg-surface-selected px-2.5 py-1 text-xs font-medium text-primary-dark"
                      key={skillName}
                    >
                      {skillName}

                      <button
                        aria-label={`Remove ${skillName}`}
                        className="text-base leading-none text-primary transition hover:text-error"
                        onClick={() => onToggle(skillName)}
                        type="button"
                      >
                        ×
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="text-xs italic text-text-muted">
                    No skills selected yet. Click cards below to add.
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-8 pt-1">
              {visibleCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {category.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkills.includes(skill.name);

                      return (
                        <button
                          aria-pressed={isSelected}
                          className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-medium transition ${
                            isSelected
                              ? "border-border-active bg-surface-selected text-primary-dark ring-1 ring-primary/20"
                              : "border-border-default bg-bg-primary text-text-secondary hover:border-border-hover"
                          }`}
                          key={skill.id}
                          onClick={() => onToggle(skill.name)}
                          type="button"
                        >
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full ${
                              isSelected ? "bg-primary" : "bg-border-hover"
                            }`}
                          />

                          <span className="truncate">{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
