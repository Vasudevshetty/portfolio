"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "@/data/portfolio";

type ThemeType = keyof typeof themes;

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themeData: (typeof themes)[ThemeType];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("terminal");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem("portfolio-theme", theme);

    // Apply theme to document root
    const root = document.documentElement;
    const themeData = themes[theme];

    root.style.setProperty("--primary-color", themeData.primary);
    root.style.setProperty("--secondary-color", themeData.secondary);
  };

  useEffect(() => {
    // Apply theme on change
    const themeData = themes[currentTheme];
    const root = document.documentElement;

    root.style.setProperty("--primary-color", themeData.primary);
    root.style.setProperty("--secondary-color", themeData.secondary);

    // Update body classes
    document.body.className = `${themeData.background} ${themeData.text} font-mono antialiased transition-colors duration-300`;
  }, [currentTheme]);

  const themeData = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeData }}>
      <div
        className={`min-h-screen ${themeData.background} ${themeData.text} transition-colors duration-300`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
