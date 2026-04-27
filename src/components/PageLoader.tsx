"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LINES = [
  "initializing portfolio...",
  "loading projects...",
  "compiling components...",
  "ready.",
];

const BG = "#000000";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = [
      { pct: 35,  delay: 0,    duration: 350 },
      { pct: 65,  delay: 350,  duration: 400 },
      { pct: 88,  delay: 750,  duration: 450 },
      { pct: 100, delay: 1200, duration: 200 },
    ];

    let prev = 0;
    schedule.forEach(({ pct, delay, duration }) => {
      const steps = pct - prev;
      const step = duration / steps;
      for (let i = 1; i <= steps; i++) {
        const t = setTimeout(() => setProgress(pct - steps + i), delay + i * step);
        timers.push(t);
      }
      prev = pct;
    });

    BOOT_LINES.forEach((_, i) => {
      const t = setTimeout(() => setLineIdx(i), 200 + i * 360);
      timers.push(t);
    });

    const revealT = setTimeout(() => setRevealing(true), 1550);
    timers.push(revealT);

    const doneT = setTimeout(() => onComplete(), 2350);
    timers.push(doneT);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: BG }}
      animate={revealing ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Grid dots */}
      <div className="absolute inset-0 grid-dot-bg opacity-30 pointer-events-none" />

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(252,163,17,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(20,33,61,0.60) 0%, transparent 65%)",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute rounded-full"
            style={{ width: 88, height: 88, border: "1px solid rgba(252,163,17,0.4)" }}
            animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 88, height: 88, border: "1px solid rgba(252,163,17,0.2)" }}
            animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #fca311 0%, #14213d 100%)",
              boxShadow: "0 0 50px rgba(252,163,17,0.45), 0 0 20px rgba(20,33,61,0.6)",
            }}
          >
            <span className="font-display font-bold text-2xl tracking-tight text-white">AJ</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col items-center gap-1"
        >
          <p
            className="font-display font-bold text-lg tracking-wide"
            style={{
              background: "linear-gradient(135deg, #fca311, #ffdd77)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abhishek Jaiswar
          </p>
          <p className="text-xs font-mono-custom tracking-widest uppercase" style={{ color: "#3a4a6a" }}>
            Full Stack Developer
          </p>
        </motion.div>
      </div>

      {/* Bottom progress bar */}
      <motion.div
        className="absolute bottom-10 left-1/2 w-64 sm:w-80"
        style={{ transform: "translateX(-50%)" }}
        animate={revealing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono-custom" style={{ color: "#3a4a6a" }}>
            {BOOT_LINES[lineIdx]}
          </span>
          <span className="text-xs font-mono-custom tabular-nums font-bold" style={{ color: "#fca311" }}>
            {String(progress).padStart(3, " ")}%
          </span>
        </div>
        <div className="h-px w-full overflow-hidden rounded-full" style={{ backgroundColor: "#14213d" }}>
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #14213d, #fca311, #ffdd77)",
              boxShadow: "0 0 12px rgba(252,163,17,0.7)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
