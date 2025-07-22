import { motion } from "framer-motion";
import { themes, layouts } from "@/data/portfolio";

interface SettingsProps {
  currentTheme: string;
  currentLayout: string;
  onThemeChange: (theme: string) => void;
  onLayoutChange: (layout: string) => void;
}

export default function Settings({
  currentTheme,
  currentLayout,
  onThemeChange,
  onLayoutChange,
}: SettingsProps) {
  return (
    <div className="h-full bg-neutral-800/80 backdrop-blur-md p-4 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">
          Terminal Settings
        </h3>

        {/* Theme Settings */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-neutral-300 mb-3">Theme</h4>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(themes).map(([themeKey, theme]) => (
              <motion.button
                key={themeKey}
                onClick={() => onThemeChange(themeKey)}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  currentTheme === themeKey
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-neutral-600 bg-neutral-700/50 hover:border-neutral-500"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-neutral-200">{theme.name}</span>
                  <div className="w-4 h-4 rounded-full bg-emerald-500" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Layout Settings */}
        <div>
          <h4 className="text-sm font-medium text-neutral-300 mb-3">Layout</h4>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(layouts).map(([layoutKey, layoutName]) => (
              <motion.button
                key={layoutKey}
                onClick={() => onLayoutChange(layoutKey)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                  currentLayout === layoutKey
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                    : "border-neutral-600 bg-neutral-700/50 hover:border-neutral-500 text-neutral-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {layoutName}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional Settings */}
        <div className="pt-6 border-t border-neutral-700">
          <h4 className="text-sm font-medium text-neutral-300 mb-3">
            Features
          </h4>
          <div className="space-y-2 text-sm text-neutral-400">
            <div>• Command history with arrow key navigation</div>
            <div>• Auto-completion (coming soon)</div>
            <div>• Custom commands (coming soon)</div>
            <div>• Export terminal session (coming soon)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
