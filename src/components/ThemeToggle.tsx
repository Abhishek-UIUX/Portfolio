"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";

  return (
    <motion.button
      onClick={toggleMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
      style={{
        backgroundColor: "var(--accent-main, #fca311)15",
        border: "1px solid var(--accent-main, #fca311)33",
      }}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={15} style={{ color: "var(--accent-main, #fca311)" }} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 30, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -30, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={15} style={{ color: "var(--accent-main, #fca311)" }} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
