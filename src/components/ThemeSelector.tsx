"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, ChevronDown, Lock, Unlock } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeSelector() {
  const { currentTheme, setTheme, allThemes, isThemeLocked, toggleThemeLock } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleThemeSelect = (themeId: string) => {
    if (!isThemeLocked) {
      setTheme(themeId);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme"
        className="relative h-9 px-3 rounded-lg flex items-center gap-2 transition-colors duration-200"
        style={{
          backgroundColor: "var(--accent-main, #fca311)15",
          border: "1px solid var(--accent-main, #fca311)33",
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        <Palette size={15} style={{ color: "var(--accent-main, #fca311)" }} />
        <span
          className="text-xs font-medium hidden sm:inline"
          style={{ color: "var(--text-primary)" }}
        >
          {currentTheme.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} style={{ color: "var(--accent-main, #fca311)" }} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Header with Lock Toggle */}
            <div
              className="px-4 py-3 flex items-center justify-between border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Select Theme
              </span>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleThemeLock();
                }}
                className="p-1.5 rounded-md transition-colors"
                style={{
                  backgroundColor: isThemeLocked
                    ? "var(--accent-main, #fca311)20"
                    : "transparent",
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                title={isThemeLocked ? "Unlock theme" : "Lock theme"}
              >
                {isThemeLocked ? (
                  <Lock size={14} style={{ color: "var(--accent-main, #fca311)" }} />
                ) : (
                  <Unlock size={14} style={{ color: "var(--text-muted)" }} />
                )}
              </motion.button>
            </div>

            {/* Theme List */}
            <div className="max-h-80 overflow-y-auto py-2">
              {allThemes.map((theme) => {
                const isSelected = theme.id === currentTheme.id;
                return (
                  <motion.button
                    key={theme.id}
                    onClick={() => handleThemeSelect(theme.id)}
                    disabled={isThemeLocked}
                    className="w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: isSelected
                        ? "var(--accent-main, #fca311)15"
                        : "transparent",
                    }}
                    whileHover={
                      !isThemeLocked
                        ? {
                            backgroundColor: "var(--accent-main, #fca311)10",
                            x: 4,
                          }
                        : {}
                    }
                    whileTap={!isThemeLocked ? { scale: 0.98 } : {}}
                  >
                    {/* Color Palette Preview - Semantic Order */}
                    <div className="flex gap-0.5 flex-shrink-0">
                      <div
                        className="w-3 h-10 rounded-l"
                        style={{ backgroundColor: theme.colors.background }}
                        title="Background"
                      />
                      <div
                        className="w-3 h-10"
                        style={{ backgroundColor: theme.colors.surface }}
                        title="Surface"
                      />
                      <div
                        className="w-4 h-10"
                        style={{ backgroundColor: theme.colors.primary }}
                        title="Primary"
                      />
                      <div
                        className="w-3 h-10"
                        style={{ backgroundColor: theme.colors.secondary }}
                        title="Secondary"
                      />
                      <div
                        className="w-3 h-10 rounded-r"
                        style={{ backgroundColor: theme.colors.accent }}
                        title="Accent"
                      />
                    </div>

                    {/* Theme Info */}
                    <div className="flex-1 text-left min-w-0">
                      <p
                        className="text-sm font-semibold truncate"
                        style={{
                          color: isSelected
                            ? "var(--accent-main, #fca311)"
                            : "var(--text-primary)",
                        }}
                      >
                        {theme.name}
                      </p>
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {theme.description}
                      </p>
                    </div>

                    {/* Selected Indicator */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--accent-main, #fca311)" }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer Info */}
            {isThemeLocked && (
              <div
                className="px-4 py-2 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Theme is locked. Click the lock icon to unlock.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
