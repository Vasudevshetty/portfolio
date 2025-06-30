// Central data export file
export { personalInfo, socialLinks } from "./personal.js";
export { experience, education, certifications } from "./experience.js";
export { projects, projectCategories, featuredProjects } from "./projects.js";
export { contactInfo, services, testimonials, faq } from "./contact.js";

// Additional utility exports
export const siteConfig = {
  title: "Vasudev Shetty - Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer specializing in AI-powered web applications, DevOps automation, and scalable cloud infrastructure. Expert in MERN stack, GenAI, and LangChain.",
  keywords:
    "Full Stack Developer, AI Engineer, React, Node.js, MERN Stack, GenAI, LangChain, DevOps, Cloud, Kubernetes, Docker",
  author: "Vasudev Shetty",
  siteUrl: "https://vasudevshetty.dev", // Update with actual URL when deployed
  image: "/og-image.jpg", // Add Open Graph image
  favicon: "/favicon.ico",
};

// Navigation menu items
export const navigation = [
  { name: "Home", href: "#home", icon: "FiHome" },
  { name: "About", href: "#about", icon: "FiUser" },
  { name: "Skills", href: "#skills", icon: "FiCode" },
  { name: "Experience", href: "#experience", icon: "FiBriefcase" },
  { name: "Projects", href: "#projects", icon: "FiFolder" },
  { name: "Services", href: "#services", icon: "FiSettings" },
  { name: "Contact", href: "#contact", icon: "FiMail" },
];

// Quick stats for about section
export const stats = [
  { label: "Live Platforms", value: "5+", icon: "FiGlobe" },
  { label: "Projects Built", value: "20+", icon: "FiCheckCircle" },
  { label: "AI Integrations", value: "10+", icon: "FiCpu" },
  { label: "GitHub Repos", value: "50+", icon: "FiGithub" },
];

// Technologies I work with (for about section)
export const technologies = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 92 },
  { name: "Next.js", category: "Frontend", level: 88 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 95 },
  { name: "HTML5", category: "Frontend", level: 95 },
  { name: "CSS3", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 92 },
  { name: "Sass", category: "Frontend", level: 85 },

  // Backend
  { name: "Node.js", category: "Backend", level: 90 },
  { name: "Express.js", category: "Backend", level: 88 },
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "Python", category: "Backend", level: 88 },

  // Databases
  { name: "MongoDB", category: "Database", level: 88 },
  { name: "PostgreSQL", category: "Database", level: 82 },
  { name: "MySQL", category: "Database", level: 80 },
  { name: "Redis", category: "Database", level: 78 },

  // AI/ML & GenAI
  { name: "LangChain", category: "AI/ML", level: 85 },
  { name: "OpenAI APIs", category: "AI/ML", level: 88 },
  { name: "HuggingFace", category: "AI/ML", level: 80 },
  { name: "Groq", category: "AI/ML", level: 82 },

  // DevOps & Cloud
  { name: "Docker", category: "DevOps", level: 85 },
  { name: "Kubernetes", category: "DevOps", level: 80 },
  { name: "Jenkins", category: "DevOps", level: 78 },
  { name: "GitHub Actions", category: "DevOps", level: 85 },
  { name: "Terraform", category: "DevOps", level: 75 },
  { name: "AWS", category: "Cloud", level: 82 },
  { name: "Netlify", category: "Cloud", level: 88 },
  { name: "Vercel", category: "Cloud", level: 90 },
  { name: "DigitalOcean", category: "Cloud", level: 85 },

  // Programming Languages
  { name: "JavaScript", category: "Language", level: 95 },
  { name: "TypeScript", category: "Language", level: 85 },
  { name: "Python", category: "Language", level: 88 },
  { name: "Java", category: "Language", level: 78 },
  { name: "C++", category: "Language", level: 75 },

  // Tools
  { name: "Git", category: "Tools", level: 92 },
  { name: "VS Code", category: "Tools", level: 95 },
  { name: "Vite", category: "Tools", level: 90 },
  { name: "Webpack", category: "Tools", level: 80 },
];

export default {
  siteConfig,
  navigation,
  stats,
  technologies,
};
