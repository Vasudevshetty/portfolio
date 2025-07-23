"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSettings, FiCheck } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { themes } from "@/data/portfolio";

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full border border-green-500 bg-neutral-800 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Change Theme"
      >
        <FiSettings size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute top-16 right-0 bg-neutral-800 border border-green-500 rounded-lg p-4 min-w-[200px] shadow-2xl"
          >
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Choose Theme
            </h3>
            <div className="space-y-2">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setTheme(key as keyof typeof themes);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                    currentTheme === key
                      ? "bg-green-500/20 border-green-400 text-green-400"
                      : "border-neutral-600 text-neutral-300 hover:border-green-400"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-current border-2 border-current opacity-50" />
                    <span className="text-sm font-medium">{theme.name}</span>
                  </div>
                  {currentTheme === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-400"
                    >
                      <FiCheck size={16} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
