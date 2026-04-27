"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Palette, Lock, Unlock, Sun, Moon } from "lucide-react";

export default function ThemesShowcase() {
  const { currentTheme, setTheme, allThemes, mode, toggleMode, isThemeLocked, toggleThemeLock } = useTheme();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette size={40} style={{ color: "var(--accent-main)" }} />
            <h1
              className="text-4xl md:text-5xl font-display font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Theme Gallery
            </h1>
          </div>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore 10 professionally crafted color themes. Click any theme to apply it instantly.
          </p>

          {/* Current Theme Info */}
          <motion.div
            className="mt-8 inline-flex items-center gap-4 px-6 py-4 rounded-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-0.5">
              <div className="w-5 h-12 rounded-l" style={{ backgroundColor: currentTheme.colors.background }} />
              <div className="w-5 h-12" style={{ backgroundColor: currentTheme.colors.surface }} />
              <div className="w-6 h-12" style={{ backgroundColor: currentTheme.colors.primary }} />
              <div className="w-5 h-12" style={{ backgroundColor: currentTheme.colors.secondary }} />
              <div className="w-5 h-12 rounded-r" style={{ backgroundColor: currentTheme.colors.accent }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: "var(--accent-main)" }}>
                Current Theme
              </p>
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {currentTheme.name}
              </p>
              <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                {currentTheme.description}
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={toggleMode}
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--accent-main)15",
                  border: "1px solid var(--accent-main)33",
                }}
                whileTap={{ scale: 0.9 }}
                title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {mode === "dark" ? (
                  <Moon size={18} style={{ color: "var(--accent-main)" }} />
                ) : (
                  <Sun size={18} style={{ color: "var(--accent-main)" }} />
                )}
              </motion.button>
              <motion.button
                onClick={toggleThemeLock}
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: isThemeLocked ? "var(--accent-main)20" : "var(--accent-main)15",
                  border: "1px solid var(--accent-main)33",
                }}
                whileTap={{ scale: 0.9 }}
                title={isThemeLocked ? "Unlock theme" : "Lock theme"}
              >
                {isThemeLocked ? (
                  <Lock size={18} style={{ color: "var(--accent-main)" }} />
                ) : (
                  <Unlock size={18} style={{ color: "var(--accent-main)" }} />
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allThemes.map((theme, index) => {
            const isActive = theme.id === currentTheme.id;
            return (
              <motion.button
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => !isThemeLocked && setTheme(theme.id)}
                disabled={isThemeLocked}
                className="relative p-6 rounded-2xl text-left transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: isActive
                    ? "2px solid var(--accent-main)"
                    : "1px solid var(--border)",
                  boxShadow: isActive
                    ? `0 0 0 4px color-mix(in srgb, var(--accent-main) 20%, transparent)`
                    : "none",
                }}
                whileHover={!isThemeLocked ? { scale: 1.03, y: -4 } : {}}
                whileTap={!isThemeLocked ? { scale: 0.98 } : {}}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--accent-main)" }}
                  />
                )}

                {/* Theme Name */}
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    color: isActive ? "var(--accent-main)" : "var(--text-primary)",
                  }}
                >
                  {theme.name}
                </h3>

                {/* Color Palette with Semantic Labels */}
                <div className="space-y-2 mb-4">
                  {[
                    { key: "background", label: "Background", color: theme.colors.background },
                    { key: "surface", label: "Surface", color: theme.colors.surface },
                    { key: "primary", label: "Primary", color: theme.colors.primary },
                    { key: "secondary", label: "Secondary", color: theme.colors.secondary },
                    { key: "accent", label: "Accent/Text", color: theme.colors.accent },
                  ].map(({ key, label, color }) => (
                    <div key={key} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border"
                        style={{
                          backgroundColor: color,
                          borderColor: "var(--border)",
                        }}
                      />
                      <div className="flex-1">
                        <p
                          className="text-xs font-semibold"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-xs font-mono"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {color}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="text-xs italic mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {theme.description}
                </p>

                {/* Color Strip */}
                <div className="flex gap-1 rounded-lg overflow-hidden">
                  {Object.values(theme.colors).map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 h-3"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Apply Button */}
                {!isActive && !isThemeLocked && (
                  <motion.div
                    className="mt-4 py-2 px-4 rounded-lg text-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--accent-main)15",
                      color: "var(--accent-main)",
                    }}
                    whileHover={{ backgroundColor: "var(--accent-main)25" }}
                  >
                    Apply Theme
                  </motion.div>
                )}

                {isActive && (
                  <div
                    className="mt-4 py-2 px-4 rounded-lg text-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--accent-main)",
                      color: theme.colors.primary,
                    }}
                  >
                    Active Theme
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Lock Warning */}
        {isThemeLocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 rounded-xl text-center"
            style={{
              backgroundColor: "var(--accent-main)15",
              border: "1px solid var(--accent-main)33",
            }}
          >
            <Lock size={24} style={{ color: "var(--accent-main)", margin: "0 auto 8px" }} />
            <p className="font-semibold" style={{ color: "var(--accent-main)" }}>
              Theme is Locked
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
              Click the lock icon above to unlock and change themes
            </p>
          </motion.div>
        )}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Palette,
              title: "10 Themes",
              description: "Professionally crafted color palettes",
            },
            {
              icon: Lock,
              title: "Theme Lock",
              description: "Lock your favorite theme to prevent changes",
            },
            {
              icon: Sun,
              title: "Dark/Light Mode",
              description: "Each theme supports both modes",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <feature.icon
                size={32}
                style={{ color: "var(--accent-main)", margin: "0 auto 12px" }}
              />
              <h4 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {feature.title}
              </h4>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
