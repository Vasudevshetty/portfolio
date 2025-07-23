import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { executeCommand } from "@/utils/terminalCommands";

interface Command {
  command: string;
  output: string;
  timestamp: string;
}

interface TerminalProps {
  isActive: boolean;
}

export default function Terminal({ isActive }: TerminalProps) {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentPath, setCurrentPath] = useState("/home/vasudev/portfolio");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const timestamp = new Date().toLocaleTimeString();
    const output = executeCommand(cmd, currentPath);

    const newCommand: Command = {
      command: cmd,
      output,
      timestamp,
    };

    setCommands((prev) => [...prev, newCommand]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Handle special commands
    if (cmd.toLowerCase() === "clear") {
      setCommands([]);
    } else if (cmd.startsWith("cd ")) {
      handleCdCommand(cmd);
    }
  };

  const handleCdCommand = (cmd: string) => {
    const path = cmd.split(" ")[1];
    if (path === "..") {
      const pathParts = currentPath.split("/").filter(Boolean);
      pathParts.pop();
      setCurrentPath("/" + pathParts.join("/"));
    } else if (path === "/") {
      setCurrentPath("/");
    } else if (path === "~" || path === "/home/vasudev") {
      setCurrentPath("/home/vasudev");
    } else if (path === "portfolio") {
      setCurrentPath("/home/vasudev/portfolio");
    } else if (path === "projects") {
      setCurrentPath("/home/vasudev/projects");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand);
      setCurrentCommand("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (
        commandHistory.length > 0 &&
        historyIndex < commandHistory.length - 1
      ) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand("");
      }
    }
  };

  const getPrompt = () => {
    const user = "vasudev";
    const host = "portfolio";
    const path = currentPath.replace("/home/vasudev", "~");
    return `${user}@${host}:${path}$`;
  };

  return (
    <div className="h-full bg-neutral-900/90 backdrop-blur-md flex flex-col">
      {/* Terminal Header */}
      <div className="h-8 bg-neutral-800/80 border-b border-neutral-700/50 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-neutral-400">
          vasudev@portfolio: {currentPath}
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-2 min-h-0"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#404040 transparent",
        }}
      >
        {/* Welcome Message */}
        {commands.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 mb-6"
          >
            <div className="text-lg font-bold mb-2 neon-glow">
              Welcome to Vasudev&apos;s Portfolio Terminal
            </div>
            <div className="text-neutral-300 text-sm">
              Type &apos;help&apos; to see available commands or
              &apos;portfolio&apos; for an overview.
            </div>
          </motion.div>
        )}

        {/* Command History */}
        <AnimatePresence>
          {commands.map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-1"
            >
              <div className="text-emerald-400 flex items-center">
                <span className="text-neutral-500 mr-2 font-medium">
                  {getPrompt()}
                </span>
                <span className="terminal-command">{cmd.command}</span>
              </div>
              <div className="terminal-output whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-neutral-700/30 ml-2">
                {cmd.output}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current Input */}
        <div className="flex items-center text-emerald-400 sticky bottom-0 bg-neutral-900/95 py-2 mt-4">
          <span className="text-neutral-500 mr-2 font-medium">
            {getPrompt()}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-emerald-400 caret-emerald-400 focus-ring"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-cursor text-emerald-400 ml-1">█</span>
        </div>
      </div>
    </div>
  );
}
