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
      className={`rounded-2xl p-6 card-glow relative overflow-hidden ${featured ? "card-featured" : ""} ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,140,66,0.08) 0%, rgba(20,33,61,0.2) 100%)",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        ...style,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-dot-bg opacity-10" />
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(255,140,66,0.12) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(20,33,61,0.15) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
