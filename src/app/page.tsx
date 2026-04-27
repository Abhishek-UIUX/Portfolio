"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Zap, Code2, Layers, Smartphone,
  Server, GitBranch, ExternalLink, Mail, MapPin, Download,
} from "lucide-react";
import Terminal from "@/components/Terminal";
import BentoCard from "@/components/ui/BentoCard";
import Badge from "@/components/ui/Badge";
import { stats, techStack, reusableComponents, projects } from "@/data/resume";

export default function HomePage() {
  const featured = projects.find((p) => p.id === "sharedocs-enterpriser")!;
  const pair     = projects.filter((p) => ["ckyc-revamp", "dms-mobile-app"].includes(p.id));
  const small    = projects.find((p) => p.id === "aadhar-masking-tool")!;

  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-dot-bg opacity-50" />
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[70vh] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(20,33,61,0.9) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vh]"
            style={{ background: "radial-gradient(ellipse, rgba(252,163,17,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Status + location */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <motion.div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs"
                  style={{ backgroundColor: "#fca311", color: "#000000" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  Available for Opportunities
                </motion.div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs font-mono-custom" style={{ color: "var(--text-muted)" }}>Mumbai, India</span>
                </div>
              </div>

              {/* Name */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <p className="text-xs font-mono-custom tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: "#fca311" }}>
                  <span className="w-6 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
                  Full Stack Developer · Team Lead · 7+ Years
                </p>
                <h1 className="font-display font-bold leading-[0.95] tracking-tight">
                  <span className="block text-5xl md:text-6xl xl:text-7xl" style={{ color: "#ffffff" }}>
                    Abhishek
                  </span>
                  <span className="block text-5xl md:text-6xl xl:text-7xl gradient-text">
                    Jaiswar
                  </span>
                </h1>
              </motion.div>

              {/* Statement */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-lg font-medium leading-relaxed max-w-lg" style={{ color: "#e5e5e5" }}>
                  I don&apos;t just ship features —{" "}
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>I architect systems that scale.</span>
                </p>
                <p className="text-sm leading-relaxed max-w-lg mt-3" style={{ color: "var(--text-muted)" }}>
                  Enterprise ECM platforms, cross-platform mobile apps, reusable component libraries.
                  Always on time. Always production-ready.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
                  style={{ backgroundColor: "#fca311", color: "#000000" }}
                >
                  View Projects
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="mailto:jaiswarabhishek2@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:border-white/40"
                  style={{ border: "1px solid var(--border)", color: "var(--text-secondary)", backgroundColor: "var(--bg-card)" }}
                >
                  <Mail size={15} /> Get in Touch
                </a>
                <a
                  href="/Abhishek_Jaiswar_Full_Stack_Developer_Team_Lead_27_02_2026.pdf"
                  download
                  className="flex items-center justify-center gap-1.5 text-xs transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Download size={13} /> Resume
                </a>
              </motion.div>

              {/* Tech strip */}
              <motion.div
                className="flex flex-wrap gap-x-5 gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                {["Next.js", "React.js", "React Native", "Node.js", "TypeScript", "Python"].map((t, i) => (
                  <span key={t} className="text-xs font-mono-custom" style={{ color: i % 2 === 0 ? "var(--text-muted)" : "#e5e5e5" }}>
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full relative"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(252,163,17,0.12) 0%, rgba(20,33,61,0.3) 50%, transparent 80%)",
                  transform: "scale(1.15)",
                  zIndex: -1,
                }}
              />
              <Terminal />
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-mono-custom font-bold hidden sm:flex items-center gap-1.5"
                style={{ backgroundColor: "#fca311", color: "#000000" }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                live
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        {/* STATS */}
        <section className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <BentoCard key={stat.label} delay={idx * 0.08} className="text-center">
                <p className="font-display font-bold text-4xl mb-1" style={{ color: "#fca311" }}>
                  {stat.value}
                </p>
                <p className="text-xs font-mono-custom uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECT + TECH STACK */}
        <section className="mb-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Featured card */}
            <BentoCard className="col-span-12 md:col-span-7 lg:col-span-8 relative overflow-hidden" featured delay={0.1}>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-xs font-mono-custom mb-2 flex items-center gap-2" style={{ color: "#fca311" }}>
                      <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
                      ★ Featured Project
                    </p>
                    <h3 className="font-display font-bold text-2xl" style={{ color: "#ffffff" }}>
                      {featured.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "#e5e5e5" }}>{featured.tagline}</p>
                  </div>
                  <Link href={`/projects/${featured.id}`}>
                    <ExternalLink size={18} style={{ color: "var(--text-muted)" }} className="hover:text-orange-400 transition-colors" />
                  </Link>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {featured.star.action}
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="px-4 py-2.5 rounded-xl text-center"
                      style={{ backgroundColor: "rgba(252,163,17,0.08)", border: "1px solid rgba(252,163,17,0.20)" }}>
                      <p className="font-bold text-xl" style={{ color: "#fca311" }}>{m.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.stack.map((t) => <Badge key={t} color="violet">{t}</Badge>)}
                  <Badge color="muted">{featured.role}</Badge>
                </div>
              </div>
            </BentoCard>

            {/* Tech stack */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4">
              {[
                { icon: <Code2 size={16} style={{ color: "#fca311" }} />, label: "Frontend", items: techStack.frontend },
                { icon: <Server size={16} style={{ color: "#7a9ccc" }} />, label: "Backend", items: [...techStack.backend, ...techStack.auth], color: "cyan" as const },
                { icon: <Smartphone size={16} style={{ color: "#fca311" }} />, label: "Mobile", items: techStack.mobile },
              ].map(({ icon, label, items, color = "violet" as const }, i) => (
                <BentoCard key={label} delay={0.15 + i * 0.05}>
                  <div className="flex items-center gap-2 mb-3">
                    {icon}
                    <p className="text-xs font-semibold uppercase tracking-wider font-mono-custom"
                      style={{ color: color === "cyan" ? "#7a9ccc" : "#fca311" }}>
                      {label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((t) => <Badge key={t} color={color}>{t}</Badge>)}
                  </div>
                </BentoCard>
              ))}
            </div>
          </div>
        </section>

        {/* MORE PROJECTS */}
        <section className="mb-6">
          <div className="grid grid-cols-12 gap-4">
            {pair.map((p, idx) => (
              <BentoCard key={p.id} className="col-span-12 md:col-span-6" delay={0.1 + idx * 0.05}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-mono-custom mb-1" style={{ color: "#fca311" }}>{p.tagline}</p>
                    <h3 className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>{p.title}</h3>
                  </div>
                  <Link href={`/projects/${p.id}`}>
                    <ExternalLink size={16} style={{ color: "var(--text-muted)" }} />
                  </Link>
                </div>
                <p className="text-sm mb-4" style={{ color: "#e5e5e5" }}>{p.star.result}</p>
                <div className="flex items-center gap-5 mb-4 flex-wrap">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-bold text-2xl" style={{ color: "#fca311" }}>{m.value}</p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => <Badge key={t} color="violet">{t}</Badge>)}
                </div>
              </BentoCard>
            ))}

            {/* Small card */}
            <BentoCard className="col-span-12 sm:col-span-5 md:col-span-4" delay={0.2}>
              <p className="text-xs font-mono-custom mb-1" style={{ color: "#fca311" }}>{small.tagline}</p>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: "#ffffff" }}>{small.title}</h3>
              <p className="text-xs mb-4" style={{ color: "#e5e5e5" }}>{small.star.result}</p>
              {small.metrics[0] && (
                <>
                  <p className="font-bold text-2xl mb-0.5" style={{ color: "#fca311" }}>{small.metrics[0].value}</p>
                  <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{small.metrics[0].label}</p>
                </>
              )}
              <div className="flex flex-wrap gap-1.5">
                {small.stack.map((t) => <Badge key={t} color="violet">{t}</Badge>)}
              </div>
            </BentoCard>

            {/* What I Build */}
            <BentoCard className="col-span-12 sm:col-span-7 md:col-span-8" delay={0.25}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "#fca311" }}>
                <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
                What I Build
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { icon: <Layers size={20} />, title: "Enterprise Web Apps", desc: "Scalable Next.js/React platforms with SSR, SEO, and role-based workflows." },
                  { icon: <Smartphone size={20} />, title: "Cross-Platform Mobile", desc: "React Native apps for iOS & Android with offline-first architecture." },
                  { icon: <GitBranch size={20} />, title: "Reusable Components", desc: "Microservice-ready UI libs: Rule Engines, Form Builders, Grid Systems." },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(252,163,17,0.10)", color: "#fca311" }}>
                      {item.icon}
                    </div>
                    <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </section>

        {/* COMPONENTS STRIP */}
        <section className="mb-6">
          <BentoCard>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-mono-custom mb-1 flex items-center gap-2" style={{ color: "#fca311" }}>
                  <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
                  Internal Libraries
                </p>
                <h3 className="font-display font-bold text-xl" style={{ color: "#ffffff" }}>
                  Reusable Component Arsenal
                </h3>
              </div>
              <Link href="/components-showcase" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#fca311" }}>
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {reusableComponents.slice(0, 4).map((comp, idx) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "#000000", border: "1px solid var(--border)" }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: "#ffffff" }}>{comp.title}</p>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#e5e5e5" }}>{comp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {comp.tags.slice(0, 2).map((t) => <Badge key={t} color="muted">{t}</Badge>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        </section>

        {/* CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              backgroundColor: "#14213d",
              border: "1px solid var(--border)",
              borderTop: "3px solid #fca311",
            }}
          >
            <div className="absolute inset-0 grid-dot-bg opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#fca311" }}>
                <Zap size={22} color="#000000" />
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 gradient-text">
                Let&apos;s build something great
              </h2>
              <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#e5e5e5" }}>
                Open to full-time roles, freelance contracts, and interesting technical challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:jaiswarabhishek2@gmail.com"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm hover:opacity-85 transition-opacity w-full sm:w-auto justify-center"
                  style={{ backgroundColor: "#fca311", color: "#000000" }}
                >
                  <Mail size={16} /> Email Me
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm w-full sm:w-auto"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#e5e5e5" }}
                >
                  Contact Form <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
