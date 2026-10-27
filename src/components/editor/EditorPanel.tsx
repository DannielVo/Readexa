import type { ReadmeProfile } from "../../assets/dummyDB";
import AboutMeSection from "./AboutMeSection";
import ProfileFields from "./ProfileFields";
import SkillsSection from "./SkillsSection";

interface EditorPanelProps {
  profile: ReadmeProfile;
  onChange: (field: keyof Omit<ReadmeProfile, "skills">, value: string) => void;
  onReset: () => void;
  onToggleSkill: (skillName: string) => void;
  onClearSkills: () => void;
}

const EditorPanel = ({
  profile,
  onChange,
  onReset,
  onToggleSkill,
  onClearSkills,
}: EditorPanelProps) => {
  return (
    <section className="flex min-h-[calc(100vh-9rem)] w-full flex-col overflow-hidden rounded-xl border border-border-default bg-bg-primary shadow-sm lg:h-[calc(100vh-8rem)] lg:min-h-0 lg:w-[42%]">
      <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-border-default bg-surface-card px-5">
        <h1 className="text-lg font-bold text-text-primary">Editor</h1>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border-default bg-bg-primary px-3 text-sm font-medium text-text-secondary transition-colors hover:border-error/30 hover:bg-red-50 hover:text-error"
        >
          <span>↻</span>
          <span>Reset</span>
        </button>
      </header>

      <div className="flex-1 space-y-6 overflow-y-auto p-5">
        <ProfileFields profile={profile} onChange={onChange} />

        <AboutMeSection profile={profile} onChange={onChange} />

        <SkillsSection
          onClear={onClearSkills}
          onToggle={onToggleSkill}
          selectedSkills={profile.skills}
        />
      </div>
    </section>
  );
};

export default EditorPanel;
