import { useState } from "react";
import type { ReadmeProfile } from "../../assets/dummyDB";

interface PreviewPanelProps {
  profile: ReadmeProfile;
}

type PreviewTab = "rendered" | "markdown";

const mockMarkdown = `# Hi, I'm Alex 👋

A passionate software developer

## About Me

- 🔭 I'm currently working on Readexa — GitHub README Generator
- 🌱 I'm currently learning TypeScript and Next.js
- 👯 I'm looking to collaborate on Open-source projects

## Skills & Technologies

JavaScript · TypeScript · React · Node.js`;

const PreviewPanel = ({ profile }: PreviewPanelProps) => {
  const [activeTab, setActiveTab] = useState<PreviewTab>("rendered");

  const tabClassName = (tab: "rendered" | "markdown") => {
    const isActive = activeTab === tab;

    return `
    rounded-md px-4 py-2
    text-sm font-medium
    transition-colors duration-200
    ${
      isActive
        ? "bg-primary text-text-on-primary shadow-sm"
        : "bg-transparent text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
    }
  `;
  };

  return (
    <section className="flex min-h-[calc(100vh-9rem)] w-full flex-col overflow-hidden rounded-xl border border-border-default bg-bg-primary shadow-sm lg:h-[calc(100vh-8rem)] lg:min-h-0 lg:w-[58%]">
      <header className="flex h-[72px] shrink-0 items-center justify-between gap-3 border-b border-border-default bg-surface-card px-5">
        <h2 className="text-lg font-bold text-text-primary">Preview</h2>

        <div className="inline-flex h-11 items-center rounded-lg border border-border-default bg-bg-tertiary p-1">
          <button
            type="button"
            className={tabClassName("rendered")}
            onClick={() => setActiveTab("rendered")}
            aria-pressed={activeTab === "rendered"}
          >
            Rendered
          </button>

          <button
            type="button"
            className={tabClassName("markdown")}
            onClick={() => setActiveTab("markdown")}
            aria-pressed={activeTab === "markdown"}
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
                  profile.skills.map((skill) => (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-md border border-border-default bg-surface-card px-3 py-1 text-xs font-semibold text-text-primary shadow-sm"
                      key={skill}
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-xs italic text-text-muted">
                    Select technologies in the editor to showcase badges.
                  </span>
                )}
              </div>
            </section>

            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border-default pt-6 text-xs text-text-muted sm:flex-row sm:items-center">
              <span>
                README Generator Output Stats • {profile.skills.length} badges
                rendered
              </span>

              <span className="font-mono text-primary">
                Activity Index: ╱╲╱╲
              </span>
            </div>
          </article>
        ) : (
          <article className="mx-auto w-full max-w-3xl overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner">
            <div className="mb-3 flex items-center justify-between border-b border-slate-700/60 pb-3 text-xs text-slate-400">
              <span>
                <span className="mr-1 text-rose-500">●</span>
                <span className="mr-1 text-amber-400">●</span>
                <span className="mr-3 text-emerald-400">●</span>
                README.md
              </span>

              <span className="uppercase tracking-wider">Mock Markdown</span>
            </div>

            <p className="mb-4 rounded-md border border-amber-400/30 bg-amber-400/10 p-3 font-sans text-xs text-amber-200">
              Markdown generation is intentionally not implemented yet.
            </p>

            <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300">
              {mockMarkdown}
            </pre>
          </article>
        )}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border-default bg-bg-primary px-5 py-3.5">
        <span className="hidden text-xs text-text-muted md:block">
          Instantly updates with every keystroke
        </span>

        <div className="ml-auto flex w-full gap-2.5 md:w-auto">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-secondary px-4 py-2 text-sm font-semibold text-text-muted opacity-60 md:flex-none"
            disabled
            title="Not implemented yet"
            type="button"
          >
            ⧉ Copy Markdown
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-text-on-primary opacity-60 md:flex-none"
            disabled
            title="Not implemented yet"
            type="button"
          >
            ↓ Download README
          </button>
        </div>
      </footer>
    </section>
  );
};

export default PreviewPanel;
