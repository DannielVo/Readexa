import main_logo from "./6.png";

export const assets = {
  main_logo,
};

export interface Skill {
  id: string;
  name: string;
  image: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const createSkill = (name: string, image: string): Skill => ({
  id: name
    .toLowerCase()
    .replace(/\+\+/g, "-plus-plus")
    .replace(/#/g, "-sharp")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  name,
  image,
});

export const skillsCatalog: SkillCategory[] = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    skills: [
      createSkill(
        "C",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ),
      createSkill(
        "C++",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      ),
      createSkill(
        "C#",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      ),
      createSkill(
        "Java",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      ),
      createSkill(
        "Python",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      ),
      createSkill(
        "JavaScript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ),
      createSkill(
        "TypeScript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      ),
      createSkill(
        "Ruby",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      ),
      createSkill(
        "PHP",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      ),
      createSkill(
        "Go",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      ),
      createSkill(
        "Kotlin",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      ),
      createSkill(
        "Dart",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      ),
      createSkill(
        "Swift",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      ),
    ],
  },
  {
    id: "frontend-development",
    name: "Frontend Development",
    skills: [
      createSkill(
        "HTML5",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      ),
      createSkill(
        "CSS3",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      ),
      createSkill(
        "Bootstrap",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      ),
      createSkill(
        "Tailwind CSS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      ),
      createSkill(
        "Sass",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      ),
      createSkill(
        "Vite",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/vite/vite-original.svg",
      ),
      createSkill(
        "Redux",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      ),
      createSkill(
        "React",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      ),
      createSkill(
        "Angular",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      ),
      createSkill(
        "Vue.js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      ),
      createSkill(
        "Next.js",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/nextjs/nextjs-plain.svg",
      ),
    ],
  },
  {
    id: "backend-development",
    name: "Backend Development",
    skills: [
      createSkill(
        "Spring Boot",
        "https://img.icons8.com/color/240/spring-logo.png",
      ),
      createSkill(
        ".NET Core",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/dotnetcore/dotnetcore-original.svg",
      ),
      createSkill(
        "Node.js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      ),
      createSkill(
        "Express.js",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/express/express-original.svg",
      ),
      createSkill(
        "NestJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      ),
      createSkill(
        "Laravel",
        "https://raw.githubusercontent.com/laravel/art/d5f5e725c27f877ed032225fe0b00afee9337d0f/laravel-logo.svg",
      ),
      createSkill(
        "FastAPI",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/fastapi/fastapi-plain.svg",
      ),
      createSkill(
        "Django",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/django/django-plain.svg",
      ),
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: [
      createSkill(
        "PostgreSQL",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      ),
      createSkill(
        "MongoDB",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      ),
      createSkill(
        "SQL Server",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      ),
      createSkill(
        "MySQL",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      ),
      createSkill(
        "SQLite",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      ),
      createSkill(
        "Redis",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      ),
    ],
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    skills: [
      createSkill(
        "AWS",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Z_-H8p4Me5_aLRJb6zKJbwlDbWnbRwZu9B-seAiyhySpqOyufJZB0Mc&s=10",
      ),
      createSkill(
        "Ansible",
        "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/ansible.svg",
      ),
      createSkill(
        "Docker",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      ),
      createSkill(
        "Git",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      ),
      createSkill(
        "GitHub Actions",
        "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/github-actions.svg",
      ),
      createSkill(
        "Kubernetes",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      ),
      createSkill(
        "Jenkins",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      ),
      createSkill(
        "Prometheus",
        "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/prometheus.svg",
      ),
      createSkill(
        "Nginx",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      ),
    ],
  },
  {
    id: "backend-as-a-service",
    name: "Backend as a Service (BaaS)",
    skills: [
      createSkill(
        "Firebase",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      ),
      createSkill(
        "Supabase",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      ),
    ],
  },
  {
    id: "hosting-deployment",
    name: "Hosting & Deployment",
    skills: [
      createSkill(
        "Vercel",
        "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/vercel-icon.svg",
      ),
      createSkill(
        "Netlify",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      ),
    ],
  },
  {
    id: "design-tools",
    name: "Design Tools",
    skills: [
      createSkill(
        "Figma",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      ),
      createSkill(
        "Adobe Illustrator",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      ),
      createSkill(
        "Photoshop",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      ),
      createSkill(
        "Framer",
        "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
      ),
    ],
  },
  {
    id: "api-development-testing",
    name: "API Development & Testing",
    skills: [
      createSkill(
        "Swagger",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/swagger/swagger-original.svg",
      ),
      createSkill(
        "Postman",
        "https://raw.githubusercontent.com/devicons/devicon/ff435a0fff0391aefbf70d63a3fe7cfe64f82df0/icons/postman/postman-plain.svg",
      ),
    ],
  },
];
