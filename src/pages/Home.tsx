import { useState } from "react";
import { defaultReadme, type ReadmeProfile } from "../assets/dummyDB";
import ResetConfirmModal from "../components/common/ResetConfirmModal";
import EditorPanel from "../components/editor/EditorPanel";
import MobileViewToggle, {
  type MobilePanel,
} from "../components/home/MobileViewToggle";
import PreviewPanel from "../components/preview/PreviewPanel";

const createDefaultProfile = (): ReadmeProfile => ({
  ...defaultReadme,
  skills: [...defaultReadme.skills],
});

const Home = () => {
  const [profile, setProfile] = useState<ReadmeProfile>(createDefaultProfile);
  const [activeMobilePanel, setActiveMobilePanel] =
    useState<MobilePanel>("editor");
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleProfileChange = (
    field: keyof Omit<ReadmeProfile, "skills">,
    value: string,
  ) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }));
  };

  const handleToggleSkill = (skillName: string) => {
    setProfile((currentProfile) => {
      const hasSkill = currentProfile.skills.includes(skillName);

      return {
        ...currentProfile,
        skills: hasSkill
          ? currentProfile.skills.filter((skill) => skill !== skillName)
          : [...currentProfile.skills, skillName],
      };
    });
  };

  const handleClearSkills = () => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      skills: [],
    }));
  };

  const handleConfirmReset = () => {
    setProfile(createDefaultProfile());
    setIsResetModalOpen(false);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-bg-tertiary pt-20">
      <MobileViewToggle
        activePanel={activeMobilePanel}
        onChange={setActiveMobilePanel}
      />

      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-6 px-4 py-4 sm:px-6 lg:min-h-[calc(100vh-8rem)] lg:flex-row lg:px-8 lg:py-6">
        <div
          className={
            activeMobilePanel === "editor"
              ? "block w-full lg:contents"
              : "hidden lg:contents"
          }
        >
          <EditorPanel
            onChange={handleProfileChange}
            onClearSkills={handleClearSkills}
            onReset={() => setIsResetModalOpen(true)}
            onToggleSkill={handleToggleSkill}
            profile={profile}
          />
        </div>

        <div
          className={
            activeMobilePanel === "preview"
              ? "block w-full lg:contents"
              : "hidden lg:contents"
          }
        >
          <PreviewPanel profile={profile} />
        </div>
      </div>

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onCancel={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />
    </div>
  );
};

export default Home;
