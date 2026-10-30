import { useMemo, useState } from "react";
import { skillsCatalog } from "../../assets/assets";
import TechnologyLogo from "../common/TechnologyLogo";

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

  const skillByName = useMemo(
    () =>
      new Map(
        skillsCatalog.flatMap((category) =>
          category.skills.map((skill) => [skill.name, skill] as const),
        ),
      ),
    [],
  );

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
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-4 border-t border-border-default p-4">
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-text-muted">
                search
              </span>

              <input
                className="w-full rounded-lg border border-border-default bg-bg-primary py-2 pl-10 pr-9 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-border-active focus:ring-2 focus:ring-primary-tint"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search technologies (e.g., Python, React)..."
                type="text"
                value={searchQuery}
              />

              {searchQuery && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-text-muted transition hover:text-text-primary"
                  onClick={() => setSearchQuery("")}
                  type="button"
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

              <div className="flex min-h-9 flex-wrap items-center gap-2">
                {selectedSkills.length > 0 ? (
                  selectedSkills.map((skillName) => {
                    const skill = skillByName.get(skillName);

                    return (
                      <span
                        className="inline-flex h-10 items-center gap-1 rounded-md border border-border-active/40 bg-surface-selected px-1.5 text-primary-dark"
                        key={skillName}
                        title={skillName}
                      >
                        {skill ? (
                          <TechnologyLogo
                            sizeClassName="h-7 w-7"
                            skill={skill}
                          />
                        ) : (
                          <span
                            aria-label={`${skillName} logo unavailable`}
                            className="material-symbols-outlined flex h-7 w-7 items-center justify-center text-text-muted"
                            role="img"
                            title={skillName}
                          >
                            image_not_supported
                          </span>
                        )}

                        <button
                          aria-label={`Remove ${skillName}`}
                          className="material-symbols-outlined flex h-6 w-6 items-center justify-center rounded text-[16px] text-primary transition hover:text-error"
                          onClick={() => onToggle(skillName)}
                          title={`Remove ${skillName}`}
                          type="button"
                        >
                          close
                        </button>
                      </span>
                    );
                  })
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

                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkills.includes(skill.name);

                      return (
                        <button
                          aria-label={`${isSelected ? "Deselect" : "Select"} ${
                            skill.name
                          }`}
                          aria-pressed={isSelected}
                          className={`flex aspect-square items-center justify-center rounded-lg border p-2 transition ${
                            isSelected
                              ? "border-border-active bg-surface-selected text-primary-dark ring-1 ring-primary/20"
                              : "border-border-default bg-bg-primary text-text-secondary hover:border-border-hover"
                          }`}
                          key={skill.id}
                          onClick={() => onToggle(skill.name)}
                          title={skill.name}
                          type="button"
                        >
                          <TechnologyLogo
                            sizeClassName="h-8 w-8"
                            skill={skill}
                          />
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
