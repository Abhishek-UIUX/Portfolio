"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Zap, Code2, Layers, Smartphone,
  Server, GitBranch, ExternalLink, Mail, MapPin, Download,
} from "lucide-react";
import { 
  SiNextdotjs, SiReact, SiNodedotjs, 
  SiTypescript, SiPython, SiJavascript,
  SiTailwindcss, SiPhp, SiAngular, SiIonic
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
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
      <section className="relative flex items-center overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient orbs */}
          <motion.div 
            className="absolute top-[-20%] right-[-10%] w-[60vw] h-[70vh] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(255,140,66,0.15) 0%, rgba(255,140,66,0.05) 40%, transparent 70%)" }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vh] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(20,33,61,0.2) 0%, transparent 70%)" }}
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Animated grid */}
          <div className="absolute inset-0 grid-dot-bg opacity-40" />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                backgroundColor: "var(--accent-main)",
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Status + location with enhanced styling */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-xs shadow-lg"
                  style={{ 
                    backgroundColor: "var(--accent-main)", 
                    color: "var(--bg-base)",
                    boxShadow: "0 0 20px rgba(255,140,66,0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,140,66,0.5)" }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--bg-base)" }} />
                  Available for Opportunities
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid var(--border)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <MapPin size={14} style={{ color: "var(--accent-main)" }} />
                  <span className="text-xs font-mono-custom" style={{ color: "var(--text-secondary)" }}>Mumbai, India</span>
                </motion.div>
              </div>

              {/* Title section - compact */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <p className="text-xs font-mono-custom tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: "var(--accent-main)" }}>
                  <span className="w-6 h-px inline-block" style={{ backgroundColor: "var(--accent-main)" }} />
                  Full Stack Developer · Team Lead · 7+ Years
                </p>
                
                {/* Name - compact sizing */}
                <h1 className="font-display font-bold leading-tight tracking-tight mb-2">
                  <span className="block text-4xl sm:text-5xl md:text-6xl" style={{ color: "var(--text-primary)" }}>
                    Abhishek
                  </span>
                  <span className="block text-4xl sm:text-5xl md:text-6xl" style={{ color: "var(--accent-main)" }}>
                    Jaiswar
                  </span>
                </h1>
              </motion.div>

              {/* Statement - compact */}
              <motion.div
                className="mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-base font-semibold leading-relaxed max-w-lg mb-2" style={{ color: "var(--text-primary)" }}>
                  I don&apos;t just ship features —{" "}
                  <span style={{ color: "var(--accent-main)" }}>I architect systems that scale</span>
                </p>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-secondary)" }}>
                  Enterprise ECM • Mobile apps • Component libraries • Always on time.
                </p>
              </motion.div>

              {/* CTAs - compact */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--accent-main)", color: "var(--bg-base)" }}
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:jaiswarabhishek2@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{ border: "1px solid var(--border-hover)", color: "var(--text-primary)", backgroundColor: "var(--bg-card)" }}
                >
                  <Mail size={16} /> Get in Touch
                </a>
                <a
                  href="/Abhishek_Jaiswar_Full_Stack_Developer_Team_Lead_27_02_2026.pdf"
                  download
                  className="flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Download size={14} /> Resume
                </a>
              </motion.div>

              {/* Tech stack - compact */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                {[
                  { name: "Next.js", icon: <SiNextdotjs size={14} /> },
                  { name: "React.js", icon: <SiReact size={14} /> },
                  { name: "React Native", icon: <TbBrandReactNative size={16} /> },
                  { name: "Angular", icon: <SiAngular size={14} /> },
                  { name: "Ionic", icon: <SiIonic size={14} /> },
                  { name: "Node.js", icon: <SiNodedotjs size={14} /> },
                  { name: "JavaScript", icon: <SiJavascript size={14} /> },
                  { name: "TypeScript", icon: <SiTypescript size={14} /> },
                  { name: "Tailwind", icon: <SiTailwindcss size={14} /> },
                  { name: "Python", icon: <SiPython size={14} /> },
                  { name: "PHP", icon: <SiPhp size={14} /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-custom font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tech.icon}
                    {tech.name}
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
                  background: "radial-gradient(ellipse, rgba(255,140,66,0.15) 0%, rgba(20,33,61,0.3) 50%, transparent 80%)",
                  transform: "scale(1.15)",
                  zIndex: -1,
                }}
              />
              <Terminal />
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-2 rounded-full text-xs font-mono-custom font-bold hidden sm:flex items-center gap-2"
                style={{ backgroundColor: "var(--accent-main)", color: "var(--bg-base)" }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--bg-base)" }} />
                live
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
                { icon: <Server size={16} style={{ color: "#4fc3f7" }} />, label: "Backend", items: [...techStack.backend, ...techStack.auth], color: "cyan" as const },
                { icon: <Smartphone size={16} style={{ color: "#fca311" }} />, label: "Mobile", items: techStack.mobile },
              ].map(({ icon, label, items, color = "violet" as const }, i) => (
                <BentoCard key={label} delay={0.15 + i * 0.05}>
                  <div className="flex items-center gap-2 mb-3">
                    {icon}
                    <p className="text-xs font-semibold uppercase tracking-wider font-mono-custom"
                      style={{ color: color === "cyan" ? "#4fc3f7" : "#fca311" }}>
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

        {/* Enhanced CTA Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,140,66,0.1) 0%, rgba(20,33,61,0.3) 100%)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 grid-dot-bg opacity-20" />
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(255,140,66,0.15) 0%, transparent 70%)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(20,33,61,0.2) 0%, transparent 70%)" }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            <div className="relative z-10 p-6 md:p-12">
              <div className="max-w-4xl mx-auto">
                {/* Header section - compact */}
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{ backgroundColor: "var(--accent-main)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <Zap size={24} color="var(--bg-base)" />
                  </motion.div>
                  
                  <motion.h2 
                    className="font-display font-bold text-2xl md:text-4xl mb-3"
                    style={{ color: "var(--text-primary)" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Let&apos;s Build Something{" "}
                    <span style={{ color: "var(--accent-main)" }}>Exceptional</span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-sm md:text-base max-w-2xl mx-auto"
                    style={{ color: "var(--text-secondary)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Open to full-time roles, freelance contracts, and technical challenges.
                  </motion.p>
                </div>

                {/* CTA buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="mailto:jaiswarabhishek2@gmail.com"
                    className="group flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm w-full sm:w-auto justify-center transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: "var(--accent-main)", 
                      color: "var(--bg-base)"
                    }}
                  >
                    <Mail size={16} />
                    Email Me
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm w-full sm:w-auto transition-all duration-200 hover:scale-105"
                    style={{ 
                      border: "1px solid var(--border)", 
                      color: "var(--text-primary)",
                      backgroundColor: "rgba(255,255,255,0.03)"
                    }}
                  >
                    Contact Form
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
