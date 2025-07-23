import { motion } from "framer-motion";
import {
  FaTerminal,
  FaFolder,
  FaFile,
  FaCog,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onFullscreenToggle?: () => void;
  isFullscreen?: boolean;
}

const sidebarItems = [
  { id: "terminal", label: "Terminal", icon: FaTerminal },
  { id: "explorer", label: "Explorer", icon: FaFolder },
  { id: "files", label: "Files", icon: FaFile },
  { id: "settings", label: "Settings", icon: FaCog },
];

export default function Sidebar({
  currentView,
  onViewChange,
  onFullscreenToggle,
  isFullscreen = false,
}: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-12 bg-neutral-900/95 backdrop-blur-md border-r border-neutral-700/50 flex flex-col items-center py-3 space-y-2"
    >
      {/* Main navigation items */}
      <div className="flex flex-col space-y-2">
        {sidebarItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              currentView === item.id
                ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20"
                : "text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            <item.icon className="w-4 h-4" />
          </motion.button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Fullscreen toggle */}
      {onFullscreenToggle && (
        <motion.button
          onClick={onFullscreenToggle}
          className="p-2 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/50 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <FaCompress className="w-4 h-4" />
          ) : (
            <FaExpand className="w-4 h-4" />
          )}
        </motion.button>
      )}
    </motion.div>
  );
}
