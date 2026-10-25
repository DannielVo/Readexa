import type { ReadmeProfile } from "../../assets/dummyDB";

interface ProfileFieldsProps {
  profile: ReadmeProfile;
  onChange: (field: "title" | "subtitle", value: string) => void;
}

const inputClassName =
  "w-full rounded-lg border border-border-default bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-border-active focus:ring-2 focus:ring-primary-tint";

const ProfileFields = ({ profile, onChange }: ProfileFieldsProps) => {
  return (
    <section className="space-y-4 rounded-lg border border-border-default/60 bg-bg-secondary p-4">
      <label className="block text-sm font-medium text-text-primary">
        Profile Title
        <div className="relative mt-1.5">
          <input
            className={inputClassName}
            onChange={(event) => onChange("title", event.target.value)}
            placeholder="e.g. Hi, I'm Alex 👋"
            type="text"
            value={profile.title}
          />

          <span className="absolute right-3 top-2.5 font-mono text-xs text-text-muted">
            H1
          </span>
        </div>
      </label>

      <label className="block text-sm font-medium text-text-primary">
        <span className="flex items-center justify-between">
          Subtitle
          <span className="text-xs font-normal text-text-muted">
            (optional)
          </span>
        </span>

        <input
          className={`${inputClassName} mt-1.5`}
          onChange={(event) => onChange("subtitle", event.target.value)}
          placeholder="e.g. A passionate full-stack developer"
          type="text"
          value={profile.subtitle}
        />
      </label>
    </section>
  );
};

export default ProfileFields;
