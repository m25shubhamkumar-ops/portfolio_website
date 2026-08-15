export type Project = {
  id: string;
  title: string;
  tagline: string[] | string;
  tech: string[];
  category: "Frontend" | "JavaScript" | "Backend" | "Full Stack";
  image?: string; // place screenshot in public/images/
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "codepulse",
    title: "CodePulse",
    tagline: "GitHub Live Search Dashboard with responsive UI and async REST calls.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "JavaScript",
    image: "/images/codepulse.svg",
    github: "https://github.com/shubhamrai9122-creator/github_profile_finder",
    demo: "#"
  },
  {
    id: "gradia",
    title: "Gradia",
    tagline: "Interactive CSS gradient generator with live preview and copy-to-clipboard.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image: "/images/gradia.svg",
    github: "https://github.com/shubhamrai9122-creator/webDaily",
    demo: "#"
  },
  {
    id: "weather-app",
    title: "Weather Application",
    tagline: "Responsive weather UI built with REST API fetches and robust error handling.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "Frontend",
    image: "/images/weather.svg",
    github: "https://github.com/shubhamrai9122-creator/weather_app",
    demo: "#"
  },
  {
    id: "crud-backend",
    title: "CRUD Application — Backend Module",
    tagline: "Express + MongoDB backend for create/read/update/delete flows.",
    tech: ["Express.js", "MongoDB"],
    category: "Backend",
    image: "/images/crud.svg",
    github: "https://github.com/shubhamrai9122-creator/hypercode",
    demo: "#"
  }
];
