"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, ChevronDown } from "lucide-react";

const WORDS = ["architect", "engineer", "lead", "build"];

function AnimatedRole() {
  const ref = useRef<HTMLSpanElement>(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let charIdx = 0;
    let deleting = false;
    let word = WORDS[idx.current];
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      if (!deleting) {
        charIdx++;
        el!.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIdx--;
        el!.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          idx.current = (idx.current + 1) % WORDS.length;
          word = WORDS[idx.current];
          timer = setTimeout(tick, 300);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 55 : 95);
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-block">
      <span
        ref={ref}
        className="gradient-text"
        style={{ minWidth: "8ch", display: "inline-block" }}
      />
      <span
        className="inline-block w-0.5 h-[0.85em] ml-0.5 align-middle"
        style={{
          backgroundColor: "var(--accent-violet)",
          animation: "blink 1s step-start infinite",
          verticalAlign: "middle",
        }}
      />
    </span>
  );
}

const floatingStats = [
  { value: "7+", label: "Years", color: "var(--accent-violet)", delay: 0.8 },
  { value: "10+", label: "Projects", color: "var(--accent-cyan)", delay: 1.0 },
  { value: "100%", label: "On-time", color: "var(--accent-green)", delay: 1.2 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* ── Mesh / noise background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Primary radial glow */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(124,111,255,0.18) 0%, rgba(0,217,255,0.06) 40%, transparent 70%)",
          }}
        />
        {/* Secondary accent blob */}
        <div
          className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vh]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 80%, rgba(0,217,255,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 grid-dot-bg opacity-60"
        />
        {/* Horizontal scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124,111,255,0.3), rgba(0,217,255,0.2), transparent)",
            top: "35%",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Floating stat pills ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {floatingStats.map((s, i) => (
          <motion.div
            key={s.label}
            className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              border: `1px solid ${s.color}30`,
              backgroundColor: `${s.color}0C`,
              top: `${28 + i * 16}%`,
              right: i % 2 === 0 ? "6%" : "4%",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { delay: s.delay, duration: 0.6 },
              x: { delay: s.delay, duration: 0.6 },
              y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
            }}
          >
            <span className="font-display font-bold text-sm" style={{ color: s.color }}>
              {s.value}
            </span>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {s.label}
            </span>
          </motion.div>
        ))}

        {/* Left floating tag */}
        <motion.div
          className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            border: "1px solid rgba(0,255,148,0.2)",
            backgroundColor: "rgba(0,255,148,0.06)",
            bottom: "28%",
            left: "5%",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.6 },
            x: { delay: 1.4, duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent-green)" }}
          />
          <span className="text-xs font-mono-custom" style={{ color: "var(--accent-green)" }}>
            available for opportunities
          </span>
        </motion.div>

        {/* Stack badge */}
        <motion.div
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            border: "1px solid rgba(124,111,255,0.15)",
            backgroundColor: "rgba(124,111,255,0.06)",
            top: "22%",
            left: "4%",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: 1.6, duration: 0.5 },
            x: { delay: 1.6, duration: 0.5 },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <span className="text-xs font-mono-custom" style={{ color: "var(--accent-violet)" }}>
            Next.js · React · Node.js
          </span>
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Location */}
        <motion.div
          className="inline-flex items-center gap-1.5 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <MapPin size={12} style={{ color: "var(--text-muted)" }} />
          <span className="text-xs font-mono-custom tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Mumbai, India
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2"
        >
          <h1 className="font-display font-bold leading-tight tracking-tight">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ color: "var(--text-primary)" }}
            >
              Abhishek
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text mt-1"
            >
              Jaiswar
            </span>
          </h1>
        </motion.div>

        {/* Dynamic role line */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, transparent, var(--border-hover))" }} />
          <p className="text-base md:text-lg font-medium" style={{ color: "var(--text-secondary)" }}>
            I{" "}
            <AnimatedRole />
            {" "}enterprise software
          </p>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(270deg, transparent, var(--border-hover))" }} />
        </motion.div>

        {/* Brand statement */}
        <motion.p
          className="text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          7 years turning enterprise complexity into{" "}
          <span style={{ color: "var(--text-primary)" }}>clean, performant interfaces</span> —
          from AI-first ECM platforms to cross-platform mobile apps.
          Always on time. Always production-ready.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7C6FFF, #00D9FF)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(124,111,255,0.25)",
            }}
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href="mailto:jaiswarabhishek2@gmail.com"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              border: "1px solid var(--border-hover)",
              color: "var(--text-secondary)",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <Link
            href="/about"
            className="hidden sm:flex items-center gap-1.5 text-sm transition-colors hover:text-white"
            style={{ color: "var(--text-muted)" }}
          >
            About me <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Tech strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {["Next.js", "React.js", "React Native", "Node.js", "TypeScript", "Python", "Laravel"].map((tech, i) => (
            <span
              key={tech}
              className="text-xs font-mono-custom"
              style={{ color: i % 2 === 0 ? "var(--text-muted)" : "var(--text-secondary)" }}
            >
              {tech}
              {i < 6 && <span style={{ color: "var(--border-hover)", marginLeft: "6px" }}>·</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-xs font-mono-custom tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
