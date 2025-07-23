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
    <div className="h-full bg-neutral-900/95 backdrop-blur-xl border-r border-neutral-700">
      {/* Header */}
      <div className="p-4 border-b border-neutral-700">
        <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
          ⚙️ Terminal Settings
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Customize your terminal experience
        </p>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto h-full">
        {/* Theme Settings */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-200 mb-3 flex items-center gap-2">
            🎨 Theme Selection
          </h4>
          <div className="space-y-2">
            {Object.entries(themes).map(([themeKey, theme]) => (
              <motion.button
                key={themeKey}
                onClick={() => onThemeChange(themeKey)}
                className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                  currentTheme === themeKey
                    ? "border-emerald-500 bg-emerald-500/20 shadow-lg shadow-emerald-500/20"
                    : "border-neutral-600 bg-neutral-800/50 hover:border-emerald-400 hover:bg-neutral-700/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-neutral-200 font-medium">
                    {theme.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    {currentTheme === themeKey && (
                      <span className="text-emerald-400 text-xs">✓</span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Layout Settings */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-200 mb-3 flex items-center gap-2">
            🔧 Layout Options
          </h4>
          <div className="space-y-2">
            {Object.entries(layouts).map(([layoutKey, layoutName]) => (
              <motion.button
                key={layoutKey}
                onClick={() => onLayoutChange(layoutKey)}
                className={`w-full p-3 rounded-lg border text-left transition-all duration-200 ${
                  currentLayout === layoutKey
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20"
                    : "border-neutral-600 bg-neutral-800/50 hover:border-emerald-400 hover:bg-neutral-700/50 text-neutral-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{layoutName}</span>
                  {currentLayout === layoutKey && (
                    <span className="text-emerald-400 text-xs">✓ Active</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Terminal Features */}
        <div className="pt-2 border-t border-neutral-700">
          <h4 className="text-sm font-semibold text-neutral-200 mb-3 flex items-center gap-2">
            💡 Terminal Features
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-emerald-400">✓</span>
              <span className="text-neutral-300">
                Command history with arrow navigation
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-emerald-400">✓</span>
              <span className="text-neutral-300">
                Interactive file system exploration
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-emerald-400">✓</span>
              <span className="text-neutral-300">
                Rich command output formatting
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-yellow-400">○</span>
              <span className="text-neutral-400">
                Auto-completion (coming soon)
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-yellow-400">○</span>
              <span className="text-neutral-400">
                Custom commands (coming soon)
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/30">
              <span className="text-yellow-400">○</span>
              <span className="text-neutral-400">
                Export session (coming soon)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="pt-2 border-t border-neutral-700">
          <h4 className="text-sm font-semibold text-neutral-200 mb-3 flex items-center gap-2">
            📊 Terminal Stats
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2 rounded-lg bg-neutral-800/50 text-center">
              <div className="text-emerald-400 font-bold">16</div>
              <div className="text-neutral-400">Commands</div>
            </div>
            <div className="p-2 rounded-lg bg-neutral-800/50 text-center">
              <div className="text-emerald-400 font-bold">4</div>
              <div className="text-neutral-400">Themes</div>
            </div>
            <div className="p-2 rounded-lg bg-neutral-800/50 text-center">
              <div className="text-emerald-400 font-bold">4</div>
              <div className="text-neutral-400">Layouts</div>
            </div>
            <div className="p-2 rounded-lg bg-neutral-800/50 text-center">
              <div className="text-emerald-400 font-bold">∞</div>
              <div className="text-neutral-400">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
