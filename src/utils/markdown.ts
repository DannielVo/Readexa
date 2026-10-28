import { skillsCatalog, type Skill } from "../assets/assets";
import type { ReadmeProfile } from "../assets/dummyDB";

const toSingleLine = (value: string): string =>
  value.replace(/\r?\n+/g, " ").trim();

const escapeMarkdownText = (value: string): string => {
  const text = toSingleLine(value).replace(/\\/g, "\\\\");

  return text.replace(/^([#>*+-]\s|\d+\.\s)/, "\\$1");
};

const escapeMarkdownLinkLabel = (value: string): string =>
  toSingleLine(value).replace(/([\\[\]])/g, "\\$1");

const escapeHtmlAttribute = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const getValidHttpUrl = (value: string): string | null => {
  const url = value.trim();

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return null;
    }

    return parsedUrl.href;
  } catch {
    return null;
  }
};

const getSelectedSkills = (skillNames: string[]): Skill[] => {
  const skillByName = new Map(
    skillsCatalog.flatMap((category) =>
      category.skills.map((skill) => [skill.name, skill] as const),
    ),
  );

  const usedImageUrls = new Set<string>();

  return skillNames.reduce<Skill[]>((selectedSkills, skillName) => {
    const skill = skillByName.get(skillName);

    if (!skill || usedImageUrls.has(skill.image)) {
      return selectedSkills;
    }

    usedImageUrls.add(skill.image);
    selectedSkills.push(skill);

    return selectedSkills;
  }, []);
};

export const generateMarkdown = (profile: ReadmeProfile): string => {
  const sections: string[] = [];

  const title = escapeMarkdownText(profile.title);

  if (title) {
    sections.push(`# ${title}`);
  }

  const subtitle = escapeMarkdownText(profile.subtitle);

  if (subtitle) {
    sections.push(subtitle);
  }

  const aboutMeLines: string[] = [];
  const work = toSingleLine(profile.work);
  const validUrl = getValidHttpUrl(profile.url);
  const learn = escapeMarkdownText(profile.learn);
  const collab = escapeMarkdownText(profile.collab);

  if (work) {
    const workContent = validUrl
      ? `[${escapeMarkdownLinkLabel(work)}](<${validUrl}>)`
      : escapeMarkdownText(work);

    aboutMeLines.push(`- 🔭 I'm currently working on ${workContent}`);
  }

  if (learn) {
    aboutMeLines.push(`- 🌱 I'm currently learning ${learn}`);
  }

  if (collab) {
    aboutMeLines.push(`- 👯 I'm looking to collaborate on ${collab}`);
  }

  if (aboutMeLines.length > 0) {
    sections.push(`## About Me\n\n${aboutMeLines.join("\n")}`);
  }

  const selectedSkills = getSelectedSkills(profile.skills);

  if (selectedSkills.length > 0) {
    const skillLogos = selectedSkills
      .map(
        (skill) =>
          `<img src="${escapeHtmlAttribute(skill.image)}" alt="${escapeHtmlAttribute(
            skill.name,
          )}" width="40" height="40" />`,
      )
      .join("\n");

    sections.push(`## Skills & Technologies\n\n${skillLogos}`);
  }

  return sections.join("\n\n");
};
