import { motion } from "framer-motion";
import { executeCommand } from "@/utils/terminalCommands";

interface FileViewerProps {
  fileName: string;
  content: string;
  onClose: () => void;
}

export default function FileViewer({ fileName, onClose }: FileViewerProps) {
  const fileContent = executeCommand(
    `cat ${fileName}`,
    "/home/vasudev/portfolio"
  );

  const getLanguage = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "json":
        return "json";
      case "md":
        return "markdown";
      case "yaml":
      case "yml":
        return "yaml";
      case "vcf":
        return "vcard";
      case "log":
        return "log";
      default:
        return "text";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full bg-neutral-900/90 backdrop-blur-md flex flex-col"
    >
      {/* File Header */}
      <div className="h-10 bg-neutral-800/80 border-b border-neutral-700/50 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400 text-sm font-medium">
            {fileName}
          </span>
          <span className="text-neutral-500 text-xs">
            ({getLanguage(fileName)})
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-neutral-200 transition-colors"
          title="Close file"
        >
          ✕
        </button>
      </div>

      {/* File Content */}
      <div className="flex-1 p-4 overflow-auto font-mono text-sm">
        <pre className="text-neutral-300 whitespace-pre-wrap leading-relaxed">
          {fileContent}
        </pre>
      </div>
    </motion.div>
  );
}
