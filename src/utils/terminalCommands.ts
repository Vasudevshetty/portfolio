import { portfolioData } from "@/data/portfolio";

export const executeCommand = (
  command: string,
  currentPath: string
): string => {
  const [cmd, ...args] = command.trim().split(" ");

  switch (cmd.toLowerCase()) {
    case "help":
      return `Available commands:
╭─────────────────────────────────────────────────╮
│ help          Show this help message             │
│ ls            List files and directories         │
│ cat <file>    Display file contents              │
│ pwd           Show current directory             │
│ whoami        Display user information           │
│ skills        Show technical skills              │
│ projects      List featured projects             │
│ experience    Show work experience               │
│ education     Display education details          │
│ contact       Show contact information           │
│ tree          Show directory structure           │
│ clear         Clear terminal screen              │
│ theme         Change terminal theme              │
│ layout        Switch terminal layout             │
│ neofetch      Display system information         │
│ portfolio     Open portfolio overview            │
╰─────────────────────────────────────────────────╯`;

    case "pwd":
      return currentPath;

    case "whoami":
      return `${portfolioData.personal.name}
Role: ${portfolioData.personal.title}
Location: ${portfolioData.personal.location}
Email: ${portfolioData.personal.email}
Portfolio: ${portfolioData.personal.portfolio}`;

    case "ls":
      if (currentPath === "/home/vasudev/portfolio") {
        return `about.txt  experience.json  projects.md  skills.yaml  education.txt  contact.vcf  achievements.log`;
      } else if (currentPath === "/home/vasudev/projects") {
        return `deployio/  voxalize/  anandbrothers/  studysyncs/`;
      } else if (currentPath === "/home/vasudev") {
        return `portfolio/  projects/`;
      } else {
        return `home/  etc/`;
      }

    case "cat":
      if (!args[0]) return "cat: missing file operand";
      return getCatOutput(args[0]);

    case "skills":
      return formatSkills();

    case "projects":
      return formatProjects();

    case "experience":
      return formatExperience();

    case "education":
      return formatEducation();

    case "contact":
      return formatContact();

    case "tree":
      return `portfolio/
├── home/
│   └── vasudev/
│       ├── portfolio/
│       │   ├── about.txt
│       │   ├── experience.json
│       │   ├── projects.md
│       │   ├── skills.yaml
│       │   ├── education.txt
│       │   ├── contact.vcf
│       │   └── achievements.log
│       └── projects/
│           ├── deployio/
│           ├── voxalize/
│           ├── anandbrothers/
│           └── studysyncs/
└── etc/
    ├── themes.conf
    └── layouts.conf`;

    case "neofetch":
      return `
    ╭─────────────────────────╮
    │     Vasudev D M         │
    ├─────────────────────────┤
    │ OS: Portfolio Terminal  │
    │ Host: vasudevshetty.xyz │
    │ Kernel: Next.js 15      │
    │ Uptime: ${portfolioData.experience[0].duration} │
    │ Shell: zsh              │
    │ Resolution: ∞x∞         │
    │ Theme: Terminal Green   │
    │ Icons: React Icons      │
    │ CPU: Brain.exe          │
    │ Memory: Unlimited       │
    ╰─────────────────────────╯`;

    case "portfolio":
      return `Welcome to Vasudev D M's Portfolio Terminal!

🚀 Featured Projects:
${portfolioData.projects
  .map((p) => `   • ${p.name} - ${p.description} (${p.url})`)
  .join("\n")}

💼 Current Role: ${portfolioData.experience[0].position} at ${
        portfolioData.experience[0].company
      }

🎯 Key Achievements:
${portfolioData.achievements
  .slice(0, 3)
  .map((a) => `   • ${a}`)
  .join("\n")}

Type 'help' for available commands or explore with 'ls' and 'cat'!`;

    case "theme":
      return `Available themes:
• terminal  - Classic green terminal theme
• matrix    - Matrix-style green on black
• cyberpunk - Neon pink and purple
• ocean     - Cool blue ocean theme

Usage: theme <name> (feature coming soon!)`;

    case "layout":
      return `Available layouts:
• vscode   - VS Code-style interface
• terminal - Full terminal experience
• split    - Split view layout
• minimal  - Minimal clean layout

Usage: layout <name> (feature coming soon!)`;

    default:
      return `Command not found: ${cmd}. Type 'help' for available commands.`;
  }
};

const getCatOutput = (filename: string): string => {
  switch (filename) {
    case "about.txt":
      return `${portfolioData.personal.name}
═══════════════════════════════════════

${portfolioData.personal.bio}

Currently serving as ${portfolioData.experience[0].position} at ${portfolioData.experience[0].company}, 
leading a team of 5 developers in building scalable solutions.

🎓 Education: Computer Science Engineering at JSS Science and Technology University
📍 Location: ${portfolioData.personal.location}
🏆 Recent Achievement: Winner of Hackfest 2025 National Hackathon`;

    case "experience.json":
      return JSON.stringify(portfolioData.experience, null, 2);

    case "projects.md":
      return portfolioData.projects
        .map(
          (project) => `
# ${project.name}
**${project.description}** | *${project.status}*

🔗 **Live:** ${project.url}
${project.github ? `📱 **Code:** ${project.github}` : ""}

**Tech Stack:** ${project.tech.join(", ")}

**Highlights:**
${project.highlights.map((h) => `• ${h}`).join("\n")}
`
        )
        .join("\n---\n");

    case "skills.yaml":
      return Object.entries(portfolioData.skills)
        .map(
          ([category, skills]) => `
${category}:
${skills
  .map(
    (skill) => `  - name: "${skill.name}"
    proficiency: ${skill.proficiency}%`
  )
  .join("\n")}`
        )
        .join("\n");

    case "education.txt":
      return portfolioData.education
        .map(
          (edu) => `
${edu.institution}
${edu.degree} | ${edu.duration}
${edu.location}
${edu.cgpa ? `CGPA: ${edu.cgpa}` : ""}
${edu.percentage ? `Percentage: ${edu.percentage}` : ""}
${edu.kcet ? `KCET Rank: ${edu.kcet}` : ""}
`
        )
        .join("\n" + "─".repeat(50) + "\n");

    case "contact.vcf":
      return `BEGIN:VCARD
VERSION:3.0
FN:${portfolioData.personal.name}
EMAIL:${portfolioData.personal.email}
URL:${portfolioData.personal.portfolio}
URL:${portfolioData.personal.github}
URL:${portfolioData.personal.linkedin}
URL:${portfolioData.personal.leetcode}
TITLE:${portfolioData.personal.title}
ORG:Fauxigent Innovations
END:VCARD`;

    case "achievements.log":
      return portfolioData.achievements
        .map(
          (achievement, index) =>
            `[${new Date().getFullYear() - index}] ${achievement}`
        )
        .join("\n");

    default:
      return `cat: ${filename}: No such file or directory`;
  }
};

const formatSkills = (): string => {
  return Object.entries(portfolioData.skills)
    .map(
      ([category, skills]) => `
${category}:
${"═".repeat(category.length + 1)}
${skills
  .map(
    (skill) =>
      `${skill.name.padEnd(15)} ${"█".repeat(
        Math.floor(skill.proficiency / 10)
      )}${"░".repeat(10 - Math.floor(skill.proficiency / 10))} ${
        skill.proficiency
      }%`
  )
  .join("\n")}
`
    )
    .join("\n");
};

const formatProjects = (): string => {
  return portfolioData.projects
    .map(
      (project, index) => `
${index + 1}. ${project.name} - ${project.description}
   Status: ${project.status}
   URL: ${project.url}
   Tech: ${project.tech.join(", ")}
`
    )
    .join("\n");
};

const formatExperience = (): string => {
  return portfolioData.experience
    .map(
      (exp) => `
${exp.position} @ ${exp.company}
${exp.duration} | ${exp.location}
${exp.type ? `Type: ${exp.type}` : ""}

Key Achievements:
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`
    )
    .join("\n" + "─".repeat(60) + "\n");
};

const formatEducation = (): string => {
  return portfolioData.education
    .map(
      (edu) => `
${edu.institution}
${edu.degree}
${edu.duration} | ${edu.location}
${edu.cgpa ? `CGPA: ${edu.cgpa}` : ""}
${edu.percentage ? `Percentage: ${edu.percentage}` : ""}
${edu.kcet ? `KCET Rank: ${edu.kcet}` : ""}
`
    )
    .join("\n" + "─".repeat(50) + "\n");
};

const formatContact = (): string => {
  return `
Contact Information:
═══════════════════
📧 Email: ${portfolioData.personal.email}
🌐 Portfolio: ${portfolioData.personal.portfolio}
💼 GitHub: ${portfolioData.personal.github}
🔗 LinkedIn: ${portfolioData.personal.linkedin}
🏆 LeetCode: ${portfolioData.personal.leetcode}
📍 Location: ${portfolioData.personal.location}

Languages:
${portfolioData.languages
  .map((lang) => `• ${lang.name} (${lang.level})`)
  .join("\n")}
`;
};
