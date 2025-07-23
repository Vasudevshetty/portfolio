"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { portfolioData, terminalCommands } from "@/data/portfolio";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    setHistory([
      {
        command: "",
        output: (
          <div className="text-green-400">
            <div className="mb-2">
              Welcome to Vasudev D M&apos;s Portfolio Terminal
            </div>
            <div className="mb-2">
              Type &apos;help&apos; to see available commands
            </div>
            <div className="text-neutral-400">
              Version 2.0.1 - Terminal Portfolio System
            </div>
          </div>
        ),
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ");
    const baseCmd = args[0];

    let output: React.ReactNode;

    switch (baseCmd) {
      case "help":
        output = (
          <div className="space-y-1">
            {Object.entries(terminalCommands).map(([cmd, desc]) => (
              <div key={cmd} className="flex">
                <span className="text-yellow-400 w-16">{cmd}</span>
                <span className="text-neutral-300">{desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "whoami":
        output = (
          <div>
            <div className="text-cyan-400 text-lg mb-2">
              {portfolioData.personal.name}
            </div>
            <div className="text-yellow-400 mb-2">
              {portfolioData.personal.title}
            </div>
            <div className="text-neutral-300 mb-3">
              {portfolioData.personal.bio}
            </div>
            <div className="text-green-400">
              📍 {portfolioData.personal.location}
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-4">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category}>
                <div className="text-yellow-400 font-semibold mb-2">
                  {category}:
                </div>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between">
                      <span className="text-green-400">{skill.name}</span>
                      <span className="text-cyan-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-4">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-4">
                <div className="text-cyan-400 text-lg">{project.name}</div>
                <div className="text-yellow-400">{project.description}</div>
                <div className="text-green-400 text-sm mb-2">
                  Status: {project.status}
                </div>
                <div className="text-neutral-300 text-sm mb-2">
                  Tech: {project.tech.join(", ")}
                </div>
                <div className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-neutral-400 text-sm">
                      • {highlight}
                    </div>
                  ))}
                </div>
                <div className="mt-2 space-x-4 text-sm">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    🌐 Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    📂 GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-4">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-yellow-400 pl-4">
                <div className="text-cyan-400 text-lg">{exp.position}</div>
                <div className="text-yellow-400">{exp.company}</div>
                <div className="text-green-400 text-sm">
                  {exp.duration} • {exp.location}
                </div>
                {exp.type && (
                  <div className="text-purple-400 text-sm">{exp.type}</div>
                )}
                <div className="mt-2 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="text-neutral-300 text-sm">
                      • {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-4">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-4">
                <div className="text-cyan-400 text-lg">{edu.institution}</div>
                <div className="text-yellow-400">{edu.degree}</div>
                <div className="text-green-400 text-sm">
                  {edu.duration} • {edu.location}
                </div>
                {edu.cgpa && (
                  <div className="text-purple-400 text-sm">
                    CGPA: {edu.cgpa}
                  </div>
                )}
                {edu.percentage && (
                  <div className="text-purple-400 text-sm">
                    Percentage: {edu.percentage}
                  </div>
                )}
                {edu.kcet && (
                  <div className="text-blue-400 text-sm">
                    KCET Rank: {edu.kcet}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-2">
            <div className="text-cyan-400 text-lg mb-3">
              Contact Information
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">📧</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-blue-400 hover:underline"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🐙</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">💼</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">💻</span>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LeetCode
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🌐</span>
              <a
                href={portfolioData.personal.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>
        );
        break;

      case "achievements":
        output = (
          <div className="space-y-2">
            <div className="text-cyan-400 text-lg mb-3">Achievements</div>
            {portfolioData.achievements.map((achievement, index) => (
              <div key={index} className="text-green-400">
                🏆 {achievement}
              </div>
            ))}
          </div>
        );
        break;

      case "languages":
        output = (
          <div className="space-y-2">
            <div className="text-cyan-400 text-lg mb-3">Languages</div>
            {portfolioData.languages.map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-green-400">{lang.name}</span>
                <span className="text-yellow-400">{lang.level}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "pwd":
        output = <div className="text-green-400">/home/vasudev/portfolio</div>;
        break;

      case "ls":
        output = (
          <div className="grid grid-cols-2 gap-2">
            <div className="text-blue-400">📁 projects/</div>
            <div className="text-blue-400">📁 experience/</div>
            <div className="text-green-400">📄 about.txt</div>
            <div className="text-green-400">📄 skills.json</div>
            <div className="text-green-400">📄 contact.md</div>
            <div className="text-green-400">📄 resume.pdf</div>
          </div>
        );
        break;

      case "neofetch":
        output = (
          <div className="font-mono">
            <div className="text-cyan-400">
              {`                 ..                      ${portfolioData.personal.name}`}
            </div>
            <div className="text-cyan-400">
              {`               .PGGB:.                   ------------------------`}
            </div>
            <div className="text-cyan-400">
              {`             ~P5YGP5GG57^                OS: ${portfolioData.personal.title}`}
            </div>
            <div className="text-cyan-400">
              {`           .75BB&@@@@@&BB5Y.             Host: ${portfolioData.personal.location}`}
            </div>
            <div className="text-cyan-400">
              {`          7G#@@@@@@@@@@@@@#G7            Kernel: Full Stack Developer`}
            </div>
            <div className="text-cyan-400">
              {`         Y&@@@@@@@@@@@@@@@@@&Y           Shell: Terminal Portfolio`}
            </div>
            <div className="text-cyan-400">
              {`        5@@@@@@@@@@@@@@@@@@@@@5          Theme: Matrix Green`}
            </div>
            <div className="text-cyan-400">
              {`       P@@@@@@@@@@@@@@@@@@@@@@@P         CPU: JavaScript Engine`}
            </div>
            <div className="text-cyan-400">
              {`      Y@@@@@@@@@@@@@@@@@@@@@@@@@Y        Memory: TypeScript Stack`}
            </div>
          </div>
        );
        break;

      case "cat":
        if (args[1] === "resume" || args[1] === "resume.pdf") {
          output = (
            <div>
              <div className="text-yellow-400 mb-2">📄 Resume downloaded!</div>
              <div className="text-neutral-300">
                Opening resume in new tab...
              </div>
            </div>
          );
          // Simulate resume download
          window.open("/vasudev_resume.pdf", "_blank");
        } else {
          output = (
            <div className="text-red-400">
              cat: {args[1]}: No such file or directory
            </div>
          );
        }
        break;

      default:
        output = (
          <div className="text-red-400">
            Command &apos;{baseCmd}&apos; not found. Type &apos;help&apos; for
            available commands.
          </div>
        );
    }

    const newEntry: CommandHistory = {
      command: cmd,
      output,
      timestamp: new Date(),
    };

    setHistory((prev) => [...prev, newEntry]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      executeCommand(command);
      setCommand("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (
          newIndex === commandHistory.length - 1 &&
          historyIndex === commandHistory.length - 1
        ) {
          setHistoryIndex(-1);
          setCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  if (isMinimized) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 left-4 bg-neutral-800 border border-green-500 rounded-lg p-4 cursor-pointer z-50"
        onClick={() => setIsMinimized(false)}
      >
        <div className="text-green-400 flex items-center space-x-2">
          <FiMaximize2 />
          <span>Terminal - Vasudev Portfolio</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto bg-neutral-900 border border-green-500 rounded-lg overflow-hidden shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-green-500">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-green-400 font-semibold">
            Terminal - Vasudev D M Portfolio
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-green-400 hover:text-green-300 transition-colors"
            title="Minimize Terminal"
            aria-label="Minimize Terminal"
          >
            <FiMinimize2 />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="h-96 overflow-y-auto p-4 bg-black text-green-400 font-mono text-sm scrollbar-thin"
      >
        <AnimatePresence>
          {history.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4"
            >
              {entry.command && (
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-cyan-400">vasudev@portfolio</span>
                  <span className="text-yellow-400">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-green-400">$</span>
                  <span className="text-white">{entry.command}</span>
                </div>
              )}
              <div className="ml-0">{entry.output}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <span className="text-cyan-400">vasudev@portfolio</span>
          <span className="text-yellow-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none caret-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
            placeholder="Type a command..."
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Terminal;
