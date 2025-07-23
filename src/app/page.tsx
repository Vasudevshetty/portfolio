"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Terminal from "@/components/Terminal";
import FileExplorer from "@/components/FileExplorer";
import FileViewer from "@/components/FileViewer";
import Settings from "@/components/Settings";

interface Tab {
  id: string;
  title: string;
  path: string;
  isActive: boolean;
  type: "terminal" | "file" | "settings";
  content?: string;
}

export default function PortfolioTerminal() {
  const [currentView, setCurrentView] = useState("terminal");
  const [currentTheme, setCurrentTheme] = useState("terminal");
  const [currentLayout, setCurrentLayout] = useState("vscode");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "terminal-1",
      title: "Terminal",
      path: "~/portfolio",
      isActive: true,
      type: "terminal",
    },
  ]);

  const createNewTab = () => {
    const newTab: Tab = {
      id: `terminal-${Date.now()}`,
      title: "Terminal",
      path: "~/portfolio",
      isActive: false,
      type: "terminal",
    };
    setTabs((prev) => [...prev, newTab]);
    setActiveTab(newTab.id);
  };

  const setActiveTab = (tabId: string) => {
    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: tab.id === tabId }))
    );
  };

  const closeTab = (tabId: string) => {
    if (tabs.length <= 1) return;

    setTabs((prev) => {
      const filtered = prev.filter((tab) => tab.id !== tabId);
      const closingTab = prev.find((tab) => tab.id === tabId);

      if (closingTab?.isActive && filtered.length > 0) {
        filtered[0].isActive = true;
      }

      return filtered;
    });
  };

  const handleFileClick = (fileName: string, content: string) => {
    const existingTab = tabs.find((tab) => tab.title === fileName);

    if (existingTab) {
      setActiveTab(existingTab.id);
    } else {
      const newTab: Tab = {
        id: `file-${Date.now()}`,
        title: fileName,
        path: `~/portfolio/${fileName}`,
        isActive: false,
        type: "file",
        content: content,
      };

      setTabs((prev) => [...prev, newTab]);
      setActiveTab(newTab.id);
    }
  };

  const activeTab = tabs.find((tab) => tab.isActive);

  const renderMainContent = () => {
    if (currentView === "settings") {
      return (
        <Settings
          currentTheme={currentTheme}
          currentLayout={currentLayout}
          onThemeChange={setCurrentTheme}
          onLayoutChange={setCurrentLayout}
        />
      );
    }

    if (!activeTab) return null;

    switch (activeTab.type) {
      case "terminal":
        return <Terminal isActive={activeTab.isActive} />;
      case "file":
        return (
          <FileViewer
            fileName={activeTab.title}
            content={activeTab.content || ""}
            onClose={() => closeTab(activeTab.id)}
          />
        );
      default:
        return <Terminal isActive={activeTab.isActive} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-neutral-900 text-neutral-100 overflow-hidden font-mono flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 flex min-h-0"
      >
        {/* Sidebar */}
        {!isFullscreen && (
          <Sidebar
            currentView={currentView}
            onViewChange={setCurrentView}
            onFullscreenToggle={() => setIsFullscreen(!isFullscreen)}
            isFullscreen={isFullscreen}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex min-h-0">
          {/* Explorer Panel */}
          <AnimatePresence>
            {currentView === "explorer" && !isFullscreen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-r border-neutral-700/50"
              >
                <FileExplorer onFileClick={handleFileClick} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Terminal/Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Tab Bar */}
            {currentView !== "settings" && (
              <TabBar
                tabs={tabs}
                onTabClick={setActiveTab}
                onTabClose={closeTab}
                onNewTab={createNewTab}
              />
            )}

            {/* Main Content */}
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView + (activeTab?.id || "none")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {renderMainContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Status Bar */}
      {!isFullscreen && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="h-6 bg-neutral-800/90 backdrop-blur-md border-t border-neutral-700/50 flex items-center justify-between px-4 text-xs flex-shrink-0"
        >
          <div className="flex items-center space-x-4">
            <span className="text-emerald-400 font-medium">
              ● vasudev@portfolio
            </span>
            <span className="text-neutral-400">~/portfolio</span>
            <span className="text-neutral-500">Theme: {currentTheme}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-neutral-400">Layout: {currentLayout}</span>
            <span className="text-neutral-500">Next.js 15</span>
            <a
              href="https://vasudevshetty.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              vasudevshetty.xyz
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
