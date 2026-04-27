"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { themes, getThemeById, getDefaultTheme, type ThemeColors } from "@/data/themes";

type Mode = "dark" | "light";

interface ThemeContextType {
  mode: Mode;
  toggleMode: () => void;
  currentTheme: ThemeColors;
  setTheme: (themeId: string) => void;
  allThemes: ThemeColors[];
  isThemeLocked: boolean;
  toggleThemeLock: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleMode: () => {},
  currentTheme: getDefaultTheme(),
  setTheme: () => {},
  allThemes: themes,
  isThemeLocked: false,
  toggleThemeLock: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyThemeColors(theme: ThemeColors, mode: Mode) {
  const root = document.documentElement;
  const isDark = mode === "dark";

  // Apply raw theme colors
  root.style.setProperty("--theme-background", theme.colors.background);
  root.style.setProperty("--theme-surface", theme.colors.surface);
  root.style.setProperty("--theme-primary", theme.colors.primary);
  root.style.setProperty("--theme-secondary", theme.colors.secondary);
  root.style.setProperty("--theme-accent", theme.colors.accent);

  // Apply semantic colors based on mode
  if (isDark) {
    // Dark mode: use colors as designed
    root.style.setProperty("--bg-base", theme.colors.background);
    root.style.setProperty("--bg-surface", theme.colors.surface);
    root.style.setProperty("--bg-card", theme.colors.surface);
    root.style.setProperty("--border", `color-mix(in srgb, ${theme.colors.accent} 15%, transparent)`);
    root.style.setProperty("--border-hover", theme.colors.primary);
    root.style.setProperty("--accent-main", theme.colors.primary);
    root.style.setProperty("--text-primary", theme.colors.accent);
    root.style.setProperty("--text-secondary", `color-mix(in srgb, ${theme.colors.accent} 80%, transparent)`);
    root.style.setProperty("--text-muted", `color-mix(in srgb, ${theme.colors.accent} 50%, transparent)`);
    root.style.setProperty("--nav-bg", `color-mix(in srgb, ${theme.colors.background} 95%, transparent)`);
  } else {
    // Light mode: invert the hierarchy
    root.style.setProperty("--bg-base", theme.colors.accent);
    root.style.setProperty("--bg-surface", `color-mix(in srgb, ${theme.colors.accent} 95%, ${theme.colors.secondary})`);
    root.style.setProperty("--bg-card", "#ffffff");
    root.style.setProperty("--border", `color-mix(in srgb, ${theme.colors.background} 20%, transparent)`);
    root.style.setProperty("--border-hover", theme.colors.primary);
    root.style.setProperty("--accent-main", theme.colors.primary);
    root.style.setProperty("--text-primary", theme.colors.background);
    root.style.setProperty("--text-secondary", `color-mix(in srgb, ${theme.colors.background} 80%, transparent)`);
    root.style.setProperty("--text-muted", `color-mix(in srgb, ${theme.colors.background} 60%, transparent)`);
    root.style.setProperty("--nav-bg", `color-mix(in srgb, ${theme.colors.accent} 98%, transparent)`);
  }

  root.setAttribute("data-mode", mode);
  root.setAttribute("data-theme", theme.id);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("dark");
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(getDefaultTheme());
  const [isThemeLocked, setIsThemeLocked] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("portfolio-mode") as Mode | null;
    const storedThemeId = localStorage.getItem("portfolio-theme-id");
    const storedLock = localStorage.getItem("portfolio-theme-locked") === "true";

    const resolvedMode = storedMode === "light" ? "light" : "dark";
    const resolvedTheme = storedThemeId ? getThemeById(storedThemeId) || getDefaultTheme() : getDefaultTheme();

    setMode(resolvedMode);
    setCurrentTheme(resolvedTheme);
    setIsThemeLocked(storedLock);
    applyThemeColors(resolvedTheme, resolvedMode);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-mode", next);
      applyThemeColors(currentTheme, next);
      return next;
    });
  }, [currentTheme]);

  const setTheme = useCallback((themeId: string) => {
    const theme = getThemeById(themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("portfolio-theme-id", themeId);
      applyThemeColors(theme, mode);
    }
  }, [mode]);

  const toggleThemeLock = useCallback(() => {
    setIsThemeLocked((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio-theme-locked", String(next));
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
        currentTheme,
        setTheme,
        allThemes: themes,
        isThemeLocked,
        toggleThemeLock,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
