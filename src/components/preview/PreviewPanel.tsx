import { useMemo, useState } from "react";
import { skillsCatalog } from "../../assets/assets";
import type { ReadmeProfile } from "../../assets/dummyDB";
import { generateMarkdown } from "../../utils/markdown";
import TechnologyLogo from "../common/TechnologyLogo";

interface PreviewPanelProps {
  profile: ReadmeProfile;
}

type PreviewTab = "rendered" | "markdown";

const PreviewPanel = ({ profile }: PreviewPanelProps) => {
  const [activeTab, setActiveTab] = useState<PreviewTab>("rendered");

  const markdown = generateMarkdown(profile);

  const skillByName = useMemo(
    () =>
      new Map(
        skillsCatalog.flatMap((category) =>
          category.skills.map((skill) => [skill.name, skill] as const),
        ),
      ),
    [],
  );

  const tabClassName = (tab: PreviewTab) => {
    const isActive = activeTab === tab;

    return `rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-primary text-text-on-primary shadow-sm"
        : "bg-transparent text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
    }`;
  };

  return (
    <section className="flex min-h-[calc(100vh-9rem)] w-full flex-col overflow-hidden rounded-xl border border-border-default bg-bg-primary shadow-sm lg:h-[calc(100vh-8rem)] lg:min-h-0 lg:w-[58%]">
      <header className="flex h-[72px] shrink-0 items-center justify-between gap-3 border-b border-border-default bg-surface-card px-5">
        <h2 className="text-lg font-bold text-text-primary">Preview</h2>

        <div className="inline-flex h-11 items-center rounded-lg border border-border-default bg-bg-tertiary p-1">
          <button
            aria-pressed={activeTab === "rendered"}
            className={tabClassName("rendered")}
            onClick={() => setActiveTab("rendered")}
            type="button"
          >
            Rendered
          </button>

          <button
            aria-pressed={activeTab === "markdown"}
            className={tabClassName("markdown")}
            onClick={() => setActiveTab("markdown")}
            type="button"
          >
            Markdown
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-bg-secondary/40 p-4 sm:p-6">
        {activeTab === "rendered" ? (
          <article className="mx-auto w-full max-w-3xl rounded-xl border border-border-default bg-bg-primary p-5 text-text-primary shadow-sm sm:p-8">
            <h1 className="border-b border-border-default pb-2 text-2xl font-bold sm:text-3xl">
              {profile.title.trim() || "Hi there 👋"}
            </h1>

            {profile.subtitle.trim() && (
              <p className="mt-3 text-base text-text-secondary">
                {profile.subtitle}
              </p>
            )}

            <section className="mt-8">
              <h2 className="mb-4 border-b border-border-default pb-1.5 text-xl font-bold">
                About Me
              </h2>

              <ul className="space-y-2.5 text-sm sm:text-base">
                {profile.work.trim() && (
                  <li className="flex items-start gap-2">
                    <span>🔭</span>

                    <span>
                      I'm currently working on{" "}
                      {profile.url.trim() ? (
                        <a
                          className="font-semibold text-primary hover:underline"
                          href={profile.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {profile.work}
                        </a>
                      ) : (
                        <strong>{profile.work}</strong>
                      )}
                    </span>
                  </li>
                )}

                {profile.learn.trim() && (
                  <li className="flex items-start gap-2">
                    <span>🌱</span>

                    <span>
                      I'm currently learning <strong>{profile.learn}</strong>
                    </span>
                  </li>
                )}

                {profile.collab.trim() && (
                  <li className="flex items-start gap-2">
                    <span>👯</span>

                    <span>
                      I'm looking to collaborate on{" "}
                      <strong>{profile.collab}</strong>
                    </span>
                  </li>
                )}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 border-b border-border-default pb-1.5 text-xl font-bold">
                Skills &amp; Technologies
              </h2>

              <div className="flex flex-wrap gap-2">
                {profile.skills.length > 0 ? (
                  profile.skills.map((skillName) => {
                    const skill = skillByName.get(skillName);

                    return (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-md border border-border-default bg-surface-card px-3 py-1 text-xs font-semibold text-text-primary shadow-sm"
                        key={skillName}
                        title={skillName}
                      >
                        {skill ? (
                          <TechnologyLogo
                            sizeClassName="h-5 w-5"
                            skill={skill}
                          />
                        ) : (
                          <span
                            aria-label={`${skillName} logo unavailable`}
                            className="material-symbols-outlined flex h-5 w-5 items-center justify-center text-[16px] text-text-muted"
                            role="img"
                            title={skillName}
                          >
                            image_not_supported
                          </span>
                        )}

                        <span>{skillName}</span>
                      </span>
                    );
                  })
                ) : (
                  <span className="text-xs italic text-text-muted">
                    Select technologies in the editor to showcase badges.
                  </span>
                )}
              </div>
            </section>
          </article>
        ) : (
          <article className="mx-auto w-full max-w-3xl overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner">
            <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300">
              {markdown}
            </pre>
          </article>
        )}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border-default bg-bg-primary px-5 py-3.5">
        <div className="ml-auto flex w-full gap-2.5 md:w-auto">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-secondary px-4 py-2 text-sm font-semibold text-text-muted opacity-60 md:flex-none"
            disabled
            title="Not implemented yet"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              content_copy
            </span>
            Copy Markdown
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-text-on-primary opacity-60 md:flex-none"
            disabled
            title="Not implemented yet"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Download README
          </button>
        </div>
      </footer>
    </section>
  );
};

export default PreviewPanel;
