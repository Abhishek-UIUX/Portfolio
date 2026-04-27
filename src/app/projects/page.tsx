"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/resume";

const filters = ["all", "web", "mobile", "tool"] as const;
type Filter = (typeof filters)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Enterprise-grade systems built under real constraints — deadlines, compliance requirements, cross-functional teams."
        />

        {/* Filters */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
              style={active === f
                ? { backgroundColor: "#fca311", color: "#000000" }
                : { backgroundColor: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }
              }
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl p-6 card-glow flex flex-col"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderTop: project.featured ? "3px solid #fca311" : "1px solid var(--border)",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono-custom" style={{ color: "#fca311" }}>
                        {project.role}
                      </span>
                      {project.featured && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                          style={{ backgroundColor: "#fca311", color: "#000000" }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>
                      {project.title}
                    </h2>
                    <p className="text-xs mt-0.5" style={{ color: "#e5e5e5" }}>{project.tagline}</p>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <ExternalLink size={16} style={{ color: "var(--text-muted)" }} />
                  </Link>
                </div>

                {/* STAR */}
                <div className="space-y-2.5 mb-5 flex-1">
                  {(["situation", "task", "action", "result"] as const).map((key) => (
                    <div key={key} className="flex gap-2">
                      <span
                        className="text-xs font-bold uppercase tracking-widest font-mono-custom flex-shrink-0 w-5"
                        style={{ color: key === "result" || key === "action" ? "#fca311" : "var(--text-muted)" }}
                      >
                        {key[0].toUpperCase()}
                      </span>
                      <span className="text-xs leading-relaxed" style={{ color: "#e5e5e5" }}>
                        {project.star[key]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="px-3 py-2 rounded-lg text-center"
                        style={{ backgroundColor: "rgba(252,163,17,0.08)", border: "1px solid rgba(252,163,17,0.18)" }}>
                        <p className="font-bold text-sm" style={{ color: "#fca311" }}>{m.value}</p>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Trade-off */}
                <div className="p-3 rounded-lg mb-4 text-xs"
                  style={{ backgroundColor: "rgba(20,33,61,0.8)", border: "1px solid rgba(90,126,179,0.2)", color: "#e5e5e5" }}>
                  <span style={{ color: "#7a9ccc" }}>⚖ Trade-off: </span>
                  {project.tradeoffs}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => <Badge key={t} color="violet">{t}</Badge>)}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* All projects CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-85"
            style={{ backgroundColor: "#fca311", color: "#000000" }}
          >
            Discuss a Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
