export interface ReadmeProfile {
  title: string;
  subtitle: string;
  work: string;
  url: string;
  learn: string;
  collab: string;
  skills: string[];
}

export const defaultReadme: ReadmeProfile = {
  title: "Hi, I'm Alex 👋",
  subtitle: "A passionate software developer",
  work: "Readexa — GitHub README Generator",
  url: "https://github.com/username/readexa",
  learn: "TypeScript and Next.js",
  collab: "Open-source projects",
  skills: ["JavaScript", "TypeScript", "Python"],
};
