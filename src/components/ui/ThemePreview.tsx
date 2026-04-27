"use client";

import { motion } from "framer-motion";
import type { ThemeColors } from "@/data/themes";

interface ThemePreviewProps {
  theme: ThemeColors;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ThemePreview({
  theme,
  isActive = false,
  onClick,
  disabled = false,
}: ThemePreviewProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="relative w-full p-4 rounded-xl text-left transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
      style={{
        backgroundColor: theme.colors.background,
        border: isActive ? `2px solid ${theme.colors.primary}` : "1px solid transparent",
      }}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {/* Surface Layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundColor: theme.colors.surface }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
          />
        )}

        {/* Theme Name */}
        <h4
          className="text-sm font-bold mb-1"
          style={{ color: theme.colors.accent }}
        >
          {theme.name}
        </h4>

        {/* Description */}
        <p
          className="text-xs mb-3 opacity-80"
          style={{ color: theme.colors.accent }}
        >
          {theme.description}
        </p>

        {/* Color Swatches - Semantic Order */}
        <div className="flex gap-0.5 mb-2">
          <div
            className="flex-1 h-6 rounded-l"
            style={{ backgroundColor: theme.colors.background }}
            title="Background"
          />
          <div
            className="flex-1 h-6"
            style={{ backgroundColor: theme.colors.surface }}
            title="Surface"
          />
          <div
            className="flex-1 h-6"
            style={{ backgroundColor: theme.colors.primary }}
            title="Primary"
          />
          <div
            className="flex-1 h-6"
            style={{ backgroundColor: theme.colors.secondary }}
            title="Secondary"
          />
          <div
            className="flex-1 h-6 rounded-r"
            style={{ backgroundColor: theme.colors.accent }}
            title="Accent"
          />
        </div>

        {/* Color Role Labels */}
        <div className="flex justify-between text-[10px]" style={{ color: theme.colors.accent, opacity: 0.6 }}>
          <span>BG</span>
          <span>Surface</span>
          <span>Primary</span>
          <span>2nd</span>
          <span>Text</span>
        </div>
      </div>
    </motion.button>
  );
}
