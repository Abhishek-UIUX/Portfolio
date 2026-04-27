"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "green" | "coral";
  style?: React.CSSProperties;
  delay?: number;
  featured?: boolean;
};

export default function BentoCard({
  children,
  className = "",
  style,
  delay = 0,
  featured = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`rounded-2xl p-6 card-glow ${featured ? "card-featured" : ""} ${className}`}
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
