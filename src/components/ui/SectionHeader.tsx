"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, gradient = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-px" style={{ backgroundColor: "#fca311" }} />
          <p className="text-xs font-semibold uppercase tracking-widest font-mono-custom" style={{ color: "#fca311" }}>
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl mb-4 ${gradient ? "gradient-text" : ""}`}
        style={gradient ? {} : { color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
