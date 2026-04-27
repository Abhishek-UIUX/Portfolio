"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";
import { experience, education, techStack } from "@/data/resume";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        <SectionHeader
          eyebrow="About"
          title="Abhishek Jaiswar"
          subtitle="Full Stack Developer & Team Lead based in Mumbai. 7+ years building enterprise systems that last."
        />

        {/* Bio block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <BentoCard className="sm:col-span-2" delay={0.1}>
            <p className="text-xs font-mono-custom mb-4 flex items-center gap-2" style={{ color: "#fca311" }}>
              <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
              // profile
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#e5e5e5" }}>
              I&apos;m a Full Stack Developer with over 7 years of experience specializing in
              front-end-focused enterprise applications. I work across the full stack — from Next.js
              SSR architecture and React Native mobile apps to Laravel APIs and Python microservices.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#e5e5e5" }}>
              What sets me apart is a proven track record of leading cross-functional teams while
              staying deeply technical. I&apos;ve architected reusable component systems — Rule Builder,
              E-Sign PDF, DynoGrid, JSON Form Builder — that are now used across multiple enterprise
              products, accelerating delivery timelines team-wide.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I care about code that doesn&apos;t rot: clear architecture, maintainable patterns, and
              systems that future engineers can extend without fear.
            </p>
          </BentoCard>

          <div className="flex flex-col gap-4">
            <BentoCard delay={0.15}>
              <p className="text-xs font-mono-custom mb-2" style={{ color: "#fca311" }}>location</p>
              <div className="flex items-center gap-2">
                <MapPin size={16} style={{ color: "#fca311" }} />
                <span className="text-sm font-semibold" style={{ color: "#ffffff" }}>Mumbai, India</span>
              </div>
            </BentoCard>

            <BentoCard delay={0.2}>
              <p className="text-xs font-mono-custom mb-2" style={{ color: "#fca311" }}>status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#fca311" }} />
                <span className="text-sm font-semibold" style={{ color: "#fca311" }}>Available</span>
              </div>
            </BentoCard>

            <BentoCard delay={0.25}>
              <p className="text-xs font-mono-custom mb-3" style={{ color: "#fca311" }}>languages</p>
              <div className="flex gap-2">
                <Badge color="violet">English</Badge>
                <Badge color="muted">Hindi</Badge>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(252,163,17,0.10)" }}>
              <Briefcase size={16} style={{ color: "#fca311" }} />
            </div>
            <h2 className="font-display font-bold text-2xl" style={{ color: "#ffffff" }}>
              Work Experience
            </h2>
          </div>

          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-6 mb-6"
              style={{ borderLeft: "2px solid #fca311" }}
            >
              <div
                className="absolute left-[-5px] top-5 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#fca311", boxShadow: "0 0 8px rgba(252,163,17,0.5)" }}
              />
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-base" style={{ color: "#ffffff" }}>
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold" style={{ color: "#fca311" }}>{job.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono-custom px-3 py-1 rounded-full"
                    style={{ color: "var(--text-muted)", backgroundColor: "#000000", border: "1px solid var(--border)" }}>
                    <Calendar size={11} />
                    {job.period}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "var(--text-muted)" }}>
                  <MapPin size={11} />
                  {job.location}
                  <Badge color="muted">{job.duration}</Badge>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm" style={{ color: "#e5e5e5" }}>
                      <span style={{ color: "#fca311" }} className="mt-0.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(90,126,179,0.12)" }}>
              <GraduationCap size={16} style={{ color: "#7a9ccc" }} />
            </div>
            <h2 className="font-display font-bold text-2xl" style={{ color: "#ffffff" }}>
              Education
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <BentoCard key={edu.degree} delay={idx * 0.1}>
                <p className="font-display font-bold text-base mb-1" style={{ color: "#ffffff" }}>{edu.degree}</p>
                <p className="text-sm mb-3" style={{ color: "#e5e5e5" }}>{edu.institution}</p>
                <Badge color="cyan">{edu.year}</Badge>
              </BentoCard>
            ))}
          </div>
        </div>

        {/* Full tech stack */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ backgroundColor: "#fca311" }} />
            <h2 className="font-display font-bold text-2xl" style={{ color: "#ffffff" }}>Full Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(
              [
                { label: "Frontend",     items: techStack.frontend,     color: "violet" as const },
                { label: "Backend",      items: techStack.backend,      color: "cyan"   as const },
                { label: "Mobile",       items: techStack.mobile,       color: "violet" as const },
                { label: "Architecture", items: techStack.architecture, color: "cyan"   as const },
                { label: "Auth",         items: techStack.auth,         color: "muted"  as const },
                { label: "Tools",        items: techStack.tools,        color: "muted"  as const },
              ] as const
            ).map(({ label, items, color }, idx) => (
              <BentoCard key={label} delay={idx * 0.06}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3 font-mono-custom" style={{ color: color === "cyan" ? "#7a9ccc" : color === "muted" ? "var(--text-muted)" : "#fca311" }}>
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((t) => <Badge key={t} color={color}>{t}</Badge>)}
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
