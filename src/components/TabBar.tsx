import { motion } from "framer-motion";
import { FaTimes, FaPlus } from "react-icons/fa";

interface Tab {
  id: string;
  title: string;
  path: string;
  isActive: boolean;
}

interface TabBarProps {
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onNewTab: () => void;
}

export default function TabBar({
  tabs,
  onTabClick,
  onTabClose,
  onNewTab,
}: TabBarProps) {
  return (
    <div className="h-10 bg-neutral-800/90 backdrop-blur-md border-b border-neutral-700/50 flex items-center px-1 flex-shrink-0">
      <div className="flex items-center overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative flex items-center min-w-0 max-w-48 h-8 ${
              tab.isActive
                ? "bg-neutral-900/95 text-emerald-400 border-b-2 border-emerald-500"
                : "bg-neutral-800/60 text-neutral-300 hover:bg-neutral-700/60"
            } transition-all duration-200 rounded-t-md mx-0.5`}
          >
            <button
              onClick={() => onTabClick(tab.id)}
              className="flex items-center px-3 py-1 text-xs truncate flex-1 min-w-0 h-full"
              title={`${tab.title} - ${tab.path}`}
            >
              <span className="truncate font-medium">{tab.title}</span>
              <span className="ml-2 text-xs text-neutral-500 hidden sm:inline">
                {tab.path.replace("/home/vasudev/", "~/")}
              </span>
            </button>
            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                className="p-1 hover:bg-neutral-600/50 rounded text-neutral-400 hover:text-neutral-200 mr-1"
                title="Close tab"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
      <motion.button
        onClick={onNewTab}
        className="p-2 text-neutral-400 hover:text-emerald-400 hover:bg-neutral-700/50 rounded transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="New tab"
      >
        <FaPlus className="w-3 h-3" />
      </motion.button>
    </div>
  );
}
