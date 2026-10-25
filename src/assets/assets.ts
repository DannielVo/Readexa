import main_logo from "./6.png";

export const assets = {
  main_logo,
};

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const createSkill = (name: string, icon: string): Skill => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  icon,
});

export const skillsCatalog: SkillCategory[] = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    skills: [
      createSkill("JavaScript", "javascript"),
      createSkill("TypeScript", "typescript"),
      createSkill("Python", "python"),
      createSkill("Java", "java"),
      createSkill("C++", "cplusplus"),
      createSkill("C#", "csharp"),
      createSkill("Go", "go"),
      createSkill("PHP", "php"),
    ],
  },
  {
    id: "frontend-frameworks-libraries",
    name: "Frontend Frameworks & Libraries",
    skills: [
      createSkill("React", "react"),
      createSkill("Vue.js", "vuedotjs"),
      createSkill("Angular", "angular"),
      createSkill("Next.js", "nextdotjs"),
      createSkill("Tailwind CSS", "tailwindcss"),
      createSkill("Bootstrap", "bootstrap"),
    ],
  },
  {
    id: "backend-frameworks",
    name: "Backend Frameworks",
    skills: [
      createSkill("Node.js", "nodedotjs"),
      createSkill("Express.js", "express"),
      createSkill("NestJS", "nestjs"),
      createSkill("Django", "django"),
      createSkill("FastAPI", "fastapi"),
      createSkill("Spring Boot", "springboot"),
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: [
      createSkill("PostgreSQL", "postgresql"),
      createSkill("MySQL", "mysql"),
      createSkill("MongoDB", "mongodb"),
      createSkill("Redis", "redis"),
      createSkill("SQLite", "sqlite"),
    ],
  },
  {
    id: "devops-tools",
    name: "DevOps & Tools",
    skills: [
      createSkill("Docker", "docker"),
      createSkill("Git", "git"),
      createSkill("GitHub", "github"),
      createSkill("Kubernetes", "kubernetes"),
      createSkill("AWS", "amazonwebservices"),
      createSkill("GitHub Actions", "githubactions"),
      createSkill("Postman", "postman"),
      createSkill("Figma", "figma"),
    ],
  },
  {
    id: "others",
    name: "Others",
    skills: [
      createSkill("Firebase", "firebase"),
      createSkill("Supabase", "supabase"),
      createSkill("Linux", "linux"),
      createSkill("Flutter", "flutter"),
    ],
  },
];
