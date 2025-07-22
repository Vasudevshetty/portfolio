import { motion } from "framer-motion";
import { FaFolder, FaFile, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

interface FileExplorerProps {
  onFileClick: (file: string, content: string) => void;
}

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: string;
}

const fileStructure: FileNode[] = [
  {
    name: "portfolio",
    type: "folder",
    children: [
      { name: "about.txt", type: "file", content: "about" },
      { name: "experience.json", type: "file", content: "experience" },
      { name: "projects.md", type: "file", content: "projects" },
      { name: "skills.yaml", type: "file", content: "skills" },
      { name: "education.txt", type: "file", content: "education" },
      { name: "contact.vcf", type: "file", content: "contact" },
    ],
  },
  {
    name: "projects",
    type: "folder",
    children: [
      { name: "deployio", type: "folder", children: [] },
      { name: "voxalize", type: "folder", children: [] },
      { name: "anandbrothers", type: "folder", children: [] },
      { name: "studysyncs", type: "folder", children: [] },
    ],
  },
];

export default function FileExplorer({ onFileClick }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["portfolio"])
  );

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const handleFileClick = (fileName: string, content: string) => {
    onFileClick(fileName, content);
  };

  const renderFileNode = (node: FileNode, depth = 0) => {
    const isExpanded = expandedFolders.has(node.name);
    const paddingLeft = depth * 16;

    return (
      <div key={node.name}>
        <motion.div
          className={`flex items-center py-1 px-2 hover:bg-neutral-700/50 cursor-pointer text-sm ${
            node.type === "file" ? "text-neutral-300" : "text-emerald-400"
          }`}
          style={{ paddingLeft }}
          onClick={() => {
            if (node.type === "folder") {
              toggleFolder(node.name);
            } else if (node.content) {
              handleFileClick(node.name, node.content);
            }
          }}
          whileHover={{ backgroundColor: "rgba(64, 64, 64, 0.3)" }}
        >
          {node.type === "folder" && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="mr-1"
            >
              <FaChevronRight className="w-3 h-3" />
            </motion.div>
          )}
          {node.type === "folder" ? (
            <FaFolder className="w-4 h-4 mr-2" />
          ) : (
            <FaFile className="w-4 h-4 mr-2 ml-4" />
          )}
          <span>{node.name}</span>
        </motion.div>

        {node.type === "folder" && isExpanded && node.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children.map((child) => renderFileNode(child, depth + 1))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full bg-neutral-800/80 backdrop-blur-md border-r border-neutral-700/50">
      <div className="p-3 border-b border-neutral-700/50">
        <h3 className="text-sm font-semibold text-emerald-400">EXPLORER</h3>
      </div>
      <div className="p-2 space-y-1">
        {fileStructure.map((node) => renderFileNode(node))}
      </div>
    </div>
  );
}
