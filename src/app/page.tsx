"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaTerminal,
  FaFolder,
  FaFile,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaCog,
  FaUser,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaTools
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiAmazonaws, 
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiRedis,
  SiC,
  SiCplusplus,
  SiJava,
  SiGit,
  SiLinux
} from "react-icons/si";

interface Command {
  command: string;
  output: string;
  timestamp: string;
}

interface FileStructure {
  name: string;
  type: 'file' | 'folder';
  children?: FileStructure[];
  content?: string;
}

export default function Home() {
  const [currentPath, setCurrentPath] = useState('~/vasudev');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('terminal');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fileStructure: FileStructure = {
    name: 'vasudev',
    type: 'folder',
    children: [
      {
        name: 'about.md',
        type: 'file',
        content: `# Vasudev D M
## Full Stack Developer & Technology Officer

🎓 **Computer Science Engineering Student** at JSS Science and Technology University
📍 **Location:** Mysuru, Karnataka
📊 **CGPA:** 9.22/10 (Current)
🎯 **Focus:** Full Stack Development, DevOps, AI/ML

### Quick Facts
- Leading technology initiatives at Fauxigent Innovations
- Active in developer communities (DSC Web Dev Lead)
- Winner of Hackfest 2025 National Hackathon
- Passionate about scalable systems and automation`
      },
      {
        name: 'experience',
        type: 'folder',
        children: [
          {
            name: 'fauxigent.md',
            type: 'file',
            content: `# Technology Officer - Fauxigent Innovations
**Duration:** Sept 2024 - Present
**Location:** Mysuru

## About Company
12 employee venture-backed consumer AI SaaS startup

## Key Responsibilities
- Designed scalable system architecture for end-to-end project solutions
- Leading a team of 5 in building and deploying full-stack applications
- Managing hosting, deployment, and production for multiple projects
- Implementing CI/CD pipelines with GitHub Actions and Docker

## Major Projects
### Anandbrothers
- E-commerce app for textiles
- AI chatbot for clothing suggestions
- Fashion analyzer with image recognition

### SmartHRPro
- Software solution for auditors
- Automated payroll processing
- Client management tools`
          },
          {
            name: 'dsc_lead.md',
            type: 'file',
            content: `# Developer Student Club - Web Dev Lead
**Duration:** Oct 2024 - Present
**Location:** Mysuru

## Achievements
- Organized 5+ technical events
- Led Hackelite 2k24 (National-level hackathon)
- Conducted Docker workshops (Dockops)
- Managed Capture the Flag competitions
- Developed club websites and platforms`
          }
        ]
      },
      {
        name: 'projects',
        type: 'folder',
        children: [
          {
            name: 'deployio.md',
            type: 'file',
            content: `# DeployIO - Intelligent Project Deployment Platform

## Tech Stack
- Backend: Express.js, MongoDB, Redis
- AI Services: Stack detection, Dockerfile generation
- Frontend: React with modern UI/UX
- DevOps: Full CI/CD pipeline automation

## Status: 95% Complete
- Production-ready scalability
- Enterprise-optimized architecture
- Automated deployment agents`
          },
          {
            name: 'voxalize.md',
            type: 'file',
            content: `# Voxalize - Voice Driven SQL Chat Platform
🏆 **Winner - Hackfest 2025, Nitte NMAM Institute**

## Features
- Voice/text SQL database queries
- Natural language responses
- Real-time result tables
- Speech-to-text integration

## Tech Stack
- Frontend: React 19, Vite, TailwindCSS, Redux Toolkit, Framer Motion
- Backend: Node.js, Express, FastAPI
- AI: LangChain, ChatGroq, SQLAlchemy
- Database: PostgreSQL, MySQL
- Auth: JWT-based authentication`
          },
          {
            name: 'studysyncs.md',
            type: 'file',
            content: `# StudySync - AI Powered Learning Platform

## Features
- Personalized Q&A system
- Career guidance AI
- PDF-based RAG (Retrieval Augmented Generation)
- YouTube transcript querying
- Revision tools and assessments

## Tech Stack
- Frontend: React, TailwindCSS
- Backend: Node.js, Express
- AI Services: FastAPI, LangChain, Groq, FAISS
- Database: MongoDB
- ML Libraries: Hugging Face transformers`
          }
        ]
      },
      {
        name: 'skills.json',
        type: 'file',
        content: `{
  "programming_languages": [
    "JavaScript", "TypeScript", "Python", "Java", "C", "C++"
  ],
  "web_development": [
    "React.js", "Next.js", "Express.js", "Node.js", "FastAPI", 
    "HTML", "CSS", "Sass", "Tailwind CSS", "Vite"
  ],
  "databases": [
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis"
  ],
  "cloud_platforms": [
    "AWS (EC2, S3, ECR, Lambda)", "Hostinger", "Netlify", 
    "Render", "Vercel", "DigitalOcean"
  ],
  "devops": [
    "Docker", "Kubernetes", "Jenkins", "GitHub Actions", 
    "Terraform", "Traefik"
  ],
  "ai_ml": [
    "NumPy", "Pandas", "Matplotlib", "Seaborn", 
    "Hugging Face", "LangChain", "OpenAI API"
  ]
}`
      },
      {
        name: 'education.md',
        type: 'file',
        content: `# Education

## JSS Science and Technology University (Formerly SJCE)
**Degree:** Bachelor of Engineering, Computer Science
**Duration:** Aug 2022 - Aug 2026
**CGPA:** 9.22/10 (as of 5th Semester)
**Location:** Mysuru

## Sri Sathya Sai Loka Seva Pre University College
**Stream:** PCMB (Physics, Chemistry, Mathematics, Biology)
**Percentage:** 96.83%
**KCET Rank:** 2935
**Duration:** 2020 - 2022
**Location:** Alike

## Sri Sathya Sai Vidya Kendra
**Board:** SSLC (Secondary School Leaving Certificate)
**Percentage:** 96.64%
**Year:** 2020
**Location:** Chokkady`
      }
    ]
  };

  const commands = {
    help: `Available commands:
  help          - Show this help message
  ls            - List files and directories
  cat <file>    - Display file contents
  cd <dir>      - Change directory
  pwd           - Show current directory
  clear         - Clear terminal
  whoami        - Display user information
  skills        - Show technical skills
  projects      - List all projects
  experience    - Show work experience
  education     - Display education details
  contact       - Show contact information
  tree          - Show directory tree`,
    
    whoami: `vasudev@portfolio:~$ whoami
Vasudev D M - Full Stack Developer & Technology Officer

Current Role: Technology Officer at Fauxigent Innovations
Education: Computer Science Engineering (CGPA: 9.22/10)
Location: Mysuru, Karnataka

"Building scalable solutions and leading teams to create impactful technology"`,

    pwd: currentPath,
    
    clear: '',
  };

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: SiJava, color: "#ED8B00" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Git", icon: SiGit, color: "#F05032" }
      ]
    }
  ];

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  useEffect(() => {
    const welcomeCommand: Command = {
      command: 'welcome',
      output: `
╭─────────────────────────────────────────────────────────────╮
│                                                             │
│  ██╗   ██╗ █████╗ ███████╗██╗   ██╗██████╗ ███████╗██╗   ██╗│
│  ██║   ██║██╔══██╗██╔════╝██║   ██║██╔══██╗██╔════╝██║   ██║│
│  ██║   ██║███████║███████╗██║   ██║██║  ██║█████╗  ██║   ██║│
│  ╚██╗ ██╔╝██╔══██║╚════██║██║   ██║██║  ██║██╔══╝  ╚██╗ ██╔╝│
│   ╚████╔╝ ██║  ██║███████║╚██████╔╝██████╔╝███████╗ ╚████╔╝ │
│    ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝  ╚═══╝  │
│                                                             │
│             Full Stack Developer & Technology Officer        │
│                                                             │
╰─────────────────────────────────────────────────────────────╯

Welcome to Vasudev's interactive portfolio terminal!
Type 'help' to see available commands.
`,
      timestamp: new Date().toLocaleTimeString()
    };
    setCommandHistory([welcomeCommand]);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    let output = '';

    switch (command) {
      case 'help':
        output = commands.help;
        break;
      case 'whoami':
        output = commands.whoami;
        break;
      case 'pwd':
        output = currentPath;
        break;
      case 'clear':
        setCommandHistory([]);
        return;
      case 'ls':
        output = generateLsOutput(currentPath);
        break;
      case 'cat':
        if (args.length === 0) {
          output = 'cat: missing file operand';
        } else {
          output = handleCatCommand(args[0]);
        }
        break;
      case 'skills':
        output = generateSkillsOutput();
        break;
      case 'projects':
        output = generateProjectsOutput();
        break;
      case 'experience':
        output = generateExperienceOutput();
        break;
      case 'education':
        output = generateEducationOutput();
        break;
      case 'contact':
        output = generateContactOutput();
        break;
      case 'tree':
        output = generateTreeOutput();
        break;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    const newCommand: Command = {
      command: cmd,
      output,
      timestamp: new Date().toLocaleTimeString()
    };

    setCommandHistory(prev => [...prev, newCommand]);
  };

  const generateLsOutput = (path: string) => {
    return `
📁 experience/     📁 projects/      📄 about.md
📄 skills.json    📄 education.md   📄 contact.txt

Use 'cat <filename>' to read files or 'cd <directory>' to navigate.
`;
  };

  const handleCatCommand = (filename: string) => {
    const findFile = (structure: FileStructure, name: string): string | null => {
      if (structure.name === name && structure.type === 'file') {
        return structure.content || '';
      }
      if (structure.children) {
        for (const child of structure.children) {
          const result = findFile(child, name);
          if (result !== null) return result;
        }
      }
      return null;
    };

    const content = findFile(fileStructure, filename);
    return content || `cat: ${filename}: No such file or directory`;
  };

  const generateSkillsOutput = () => {
    return `
┌─ TECHNICAL SKILLS ─────────────────────────────────────────┐
│                                                           │
│ 💻 Programming Languages                                   │
│    JavaScript, TypeScript, Python, Java, C, C++          │
│                                                           │
│ 🌐 Web Development                                         │
│    React.js, Next.js, Express.js, Node.js, FastAPI       │
│    HTML, CSS, Sass, Tailwind CSS, Vite                   │
│                                                           │
│ 🗄️  Databases                                              │
│    MongoDB, MySQL, PostgreSQL, SQLite, Redis             │
│                                                           │
│ ☁️  Cloud Platforms                                        │
│    AWS (EC2, S3, ECR, Lambda), Hostinger, Netlify        │
│    Render, Vercel, DigitalOcean                          │
│                                                           │
│ 🔧 DevOps                                                  │
│    Docker, Kubernetes, Jenkins, GitHub Actions           │
│    Terraform, Traefik                                    │
│                                                           │
│ 🤖 AI/ML & GenAI                                          │
│    NumPy, Pandas, LangChain, Hugging Face, OpenAI API    │
│                                                           │
└───────────────────────────────────────────────────────────┘
`;
  };

  const generateProjectsOutput = () => {
    return `
┌─ FEATURED PROJECTS ────────────────────────────────────────┐
│                                                           │
│ 🚀 DeployIO - Intelligent Project Deployment Platform     │
│    • Express.js, MongoDB, Redis backend                  │
│    • AI-powered stack detection & Dockerfile generation  │
│    • Full CI/CD pipeline automation                      │
│    • Status: 95% Complete                                │
│                                                           │
│ 🎤 Voxalize - Voice Driven SQL Chat Platform             │
│    🏆 Winner - Hackfest 2025 National Hackathon          │
│    • React 19, Vite, TailwindCSS, Framer Motion         │
│    • LangChain, ChatGroq, SQLAlchemy integration        │
│    • Voice/text SQL queries with natural language       │
│                                                           │
│ 📚 StudySync - AI Powered Learning Platform              │
│    • React, Node.js, MongoDB, FastAPI                   │
│    • LangChain, Groq, FAISS, Hugging Face              │
│    • PDF-based RAG, YouTube transcript querying        │
│                                                           │
└───────────────────────────────────────────────────────────┘

Use 'cat projects/<project>.md' for detailed information.
`;
  };

  const generateExperienceOutput = () => {
    return `
┌─ PROFESSIONAL EXPERIENCE ──────────────────────────────────┐
│                                                           │
│ 🏢 Technology Officer - Fauxigent Innovations             │
│    📅 Sept 2024 - Present | 📍 Mysuru                     │
│    • Leading team of 5 developers                        │
│    • Scalable system architecture design                 │
│    • CI/CD pipelines with GitHub Actions & Docker        │
│    • Key Projects: Anandbrothers, SmartHRPro            │
│                                                           │
│ 👥 Developer Student Club - Web Dev Lead                  │
│    📅 Oct 2024 - Present | 📍 Mysuru                      │
│    • Organized 5+ technical events                       │
│    • Led Hackelite 2k24 (National hackathon)            │
│    • Docker workshops and CTF competitions               │
│                                                           │
│ 💻 Programming Community - Technical Team Member          │
│    📅 Jan 2024 - Present | 📍 Mysuru                      │
│    • DSA sessions and coding challenges                  │
│    • Mentoring junior developers                         │
│                                                           │
└───────────────────────────────────────────────────────────┘
`;
  };

  const generateEducationOutput = () => {
    return `
┌─ EDUCATION ────────────────────────────────────────────────┐
│                                                           │
│ 🎓 JSS Science and Technology University                  │
│    Bachelor of Engineering, Computer Science             │
│    📅 Aug 2022 - Aug 2026 | 📍 Mysuru                     │
│    🎯 CGPA: 9.22/10 (as of 5th Semester)                 │
│                                                           │
│ 📚 Sri Sathya Sai Loka Seva Pre University College        │
│    PCMB Stream                                           │
│    📅 2020 - 2022 | 📍 Alike                              │
│    🎯 96.83% | KCET Rank: 2935                           │
│                                                           │
│ 🏫 Sri Sathya Sai Vidya Kendra                           │
│    SSLC (10th Grade)                                     │
│    📅 2020 | 📍 Chokkady                                   │
│    🎯 96.64%                                              │
│                                                           │
└───────────────────────────────────────────────────────────┘
`;
  };

  const generateContactOutput = () => {
    return `
┌─ CONTACT INFORMATION ──────────────────────────────────────┐
│                                                           │
│ 📧 Email: vasudeepu2815@gmail.com                         │
│ 🐙 GitHub: github.com/vasudevshetty                       │
│ 💼 LinkedIn: linkedin.com/in/vasudevshetty                │
│ 🏆 LeetCode: leetcode.com/vasudevshetty                   │
│ 📍 Location: Mysuru, Karnataka, India                     │
│                                                           │
│ 🌐 Languages:                                              │
│    • English (Professional)                              │
│    • Kannada (Native)                                    │
│    • Tamil, Telugu (Native)                              │
│    • Hindi (Limited)                                     │
│                                                           │
└───────────────────────────────────────────────────────────┘
`;
  };

  const generateTreeOutput = () => {
    return `
📁 vasudev/
├── 📄 about.md
├── 📄 education.md
├── 📄 skills.json
├── 📁 experience/
│   ├── 📄 fauxigent.md
│   └── 📄 dsc_lead.md
└── 📁 projects/
    ├── 📄 deployio.md
    ├── 📄 voxalize.md
    └── 📄 studysyncs.md
`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentCommand.trim()) {
        handleCommand(currentCommand);
        setCurrentCommand('');
      }
    }
  };

  const tabs = [
    { id: 'terminal', label: 'Terminal', icon: FaTerminal },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCog },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-green-400 font-mono">
      {/* VS Code-like Interface */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div 
          className={`bg-neutral-800/90 backdrop-blur-md border-r border-neutral-700/50 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-12'}`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
        >
          <div className="p-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-green-400 hover:text-green-300 mb-4"
            >
              <FaFolder size={20} />
            </button>
            
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-2"
              >
                <div className="text-green-300 text-sm mb-3">VASUDEV'S PORTFOLIO</div>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 w-full p-2 rounded text-sm transition-all ${
                      activeTab === tab.id 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'text-neutral-400 hover:text-green-400 hover:bg-neutral-700/50'
                    }`}
                  >
                    <tab.icon />
                    <span>{tab.label}</span>
                  </button>
                ))}
                
                <div className="mt-6 space-y-1">
                  <div className="text-xs text-neutral-500 mb-2">QUICK LINKS</div>
                  <a href="https://github.com/vasudevshetty" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 text-xs text-neutral-400 hover:text-green-400 p-1">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/vasudevshetty" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 text-xs text-neutral-400 hover:text-green-400 p-1">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:vasudeepu2815@gmail.com"
                     className="flex items-center space-x-2 text-xs text-neutral-400 hover:text-green-400 p-1">
                    <FaEnvelope />
                    <span>Email</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-neutral-800/90 backdrop-blur-md border-b border-neutral-700/50 px-4 py-2">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-t text-sm transition-all ${
                    activeTab === tab.id 
                      ? 'bg-neutral-900 text-green-400 border-t-2 border-green-500' 
                      : 'text-neutral-400 hover:text-green-400'
                  }`}
                >
                  <tab.icon />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-neutral-900/95 backdrop-blur-md">
            <AnimatePresence mode="wait">
              {activeTab === 'terminal' && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col"
                >
                  {/* Terminal Header */}
                  <div className="bg-neutral-800/90 backdrop-blur-md border-b border-neutral-700/50 px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-neutral-400 text-sm ml-4">vasudev@portfolio: ~</span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="flex-1 p-4 overflow-auto" ref={terminalRef}>
                    {commandHistory.map((cmd, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4"
                      >
                        {cmd.command !== 'welcome' && (
                          <div className="flex items-center text-green-400 mb-1">
                            <span className="text-blue-400">vasudev@portfolio</span>
                            <span className="text-neutral-400">:</span>
                            <span className="text-purple-400">{currentPath}</span>
                            <span className="text-neutral-400">$ </span>
                            <span className="text-green-400">{cmd.command}</span>
                          </div>
                        )}
                        <pre className="text-green-300 whitespace-pre-wrap text-sm leading-relaxed">
                          {cmd.output}
                        </pre>
                      </motion.div>
                    ))}

                    {/* Current Input Line */}
                    <div className="flex items-center text-green-400">
                      <span className="text-blue-400">vasudev@portfolio</span>
                      <span className="text-neutral-400">:</span>
                      <span className="text-purple-400">{currentPath}</span>
                      <span className="text-neutral-400">$ </span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={currentCommand}
                        onChange={(e) => setCurrentCommand(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="bg-transparent outline-none flex-1 text-green-400 ml-1"
                        autoFocus
                        spellCheck={false}
                      />
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-green-400"
                      >
                        ▊
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 max-w-4xl mx-auto"
                >
                  <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6 mb-6">
                    <h1 className="text-3xl font-bold text-green-400 mb-4">Vasudev D M</h1>
                    <p className="text-xl text-green-300 mb-6">Full Stack Developer & Technology Officer</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-green-400 font-semibold mb-3">Current Role</h3>
                        <p className="text-neutral-300">Technology Officer at Fauxigent Innovations, leading a team of 5 developers in building scalable full-stack applications.</p>
                      </div>
                      <div>
                        <h3 className="text-green-400 font-semibold mb-3">Education</h3>
                        <p className="text-neutral-300">Computer Science Engineering student at JSS Science and Technology University with a CGPA of 9.22/10.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/30 rounded-lg p-4">
                      <FaAward className="text-green-400 text-2xl mb-3" />
                      <h3 className="text-green-400 font-semibold mb-2">Achievements</h3>
                      <p className="text-neutral-300 text-sm">Winner of Hackfest 2025 National Hackathon</p>
                    </div>
                    <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/30 rounded-lg p-4">
                      <FaBriefcase className="text-green-400 text-2xl mb-3" />
                      <h3 className="text-green-400 font-semibold mb-2">Experience</h3>
                      <p className="text-neutral-300 text-sm">Leading technology initiatives and organizing tech events</p>
                    </div>
                    <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/30 rounded-lg p-4">
                      <FaCode className="text-green-400 text-2xl mb-3" />
                      <h3 className="text-green-400 font-semibold mb-2">Focus</h3>
                      <p className="text-neutral-300 text-sm">Full Stack Development, DevOps, and AI/ML integration</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8"
                >
                  <h2 className="text-2xl font-bold text-green-400 mb-8">Technical Skills</h2>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6"
                      >
                        <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                          {category.name === "Programming Languages" && <FaCode className="mr-2" />}
                          {category.name === "Web Development" && <FaLaptopCode className="mr-2" />}
                          {category.name === "Databases" && <FaDatabase className="mr-2" />}
                          {category.name === "Cloud & DevOps" && <FaCloud className="mr-2" />}
                          {category.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {category.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="flex items-center space-x-2 p-2 bg-neutral-700/30 rounded border border-neutral-600/30 hover:border-green-500/50 transition-all"
                            >
                              <skill.icon style={{ color: skill.color }} />
                              <span className="text-neutral-300 text-sm">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8"
                >
                  <h2 className="text-2xl font-bold text-green-400 mb-8">Featured Projects</h2>
                  
                  <div className="grid gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-green-400">DeployIO</h3>
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">95% Complete</span>
                      </div>
                      <p className="text-green-300 mb-3">Intelligent Project Deployment Platform</p>
                      <p className="text-neutral-300 mb-4">
                        Built with Express.js, MongoDB, and Redis. Features AI-powered stack detection, 
                        Dockerfile generation, and automated CI/CD pipeline creation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Express.js', 'MongoDB', 'Redis', 'AI/ML', 'Docker', 'CI/CD'].map((tech) => (
                          <span key={tech} className="bg-neutral-700/50 text-green-400 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-green-400">Voxalize</h3>
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">🏆 Winner</span>
                      </div>
                      <p className="text-green-300 mb-3">Voice Driven SQL Chat Platform</p>
                      <p className="text-neutral-300 mb-4">
                        Winner of Hackfest 2025. Features voice/text SQL queries, natural language responses, 
                        and real-time result tables using LangChain and ChatGroq.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['React 19', 'FastAPI', 'LangChain', 'ChatGroq', 'PostgreSQL', 'Framer Motion'].map((tech) => (
                          <span key={tech} className="bg-neutral-700/50 text-green-400 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-green-400">StudySync</h3>
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">AI Platform</span>
                      </div>
                      <p className="text-green-300 mb-3">AI Powered Learning Platform</p>
                      <p className="text-neutral-300 mb-4">
                        Intelligent learning platform with personalized Q&A, career guidance, PDF-based RAG, 
                        and YouTube transcript querying using advanced LLM integration.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'MongoDB', 'FastAPI', 'LangChain', 'FAISS', 'Hugging Face'].map((tech) => (
                          <span key={tech} className="bg-neutral-700/50 text-green-400 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
