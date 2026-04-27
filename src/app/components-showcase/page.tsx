"use client";

import { motion } from "framer-motion";
import {
  GitBranch, FileEdit, LayoutGrid, FormInput,
  ScanFace, EyeOff, Bell, FileText,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { reusableComponents } from "@/data/resume";

const iconMap: Record<string, React.ReactNode> = {
  GitBranch:     <GitBranch size={22} />,
  FileSignature: <FileEdit size={22} />,
  LayoutGrid:    <LayoutGrid size={22} />,
  FormInput:     <FormInput size={22} />,
  ScanFace:      <ScanFace size={22} />,
  EyeOff:        <EyeOff size={22} />,
  Bell:          <Bell size={22} />,
  FileEdit:      <FileText size={22} />,
};

const badgeColors = ["violet", "cyan", "violet", "cyan", "violet", "cyan", "violet", "cyan"] as const;

export default function ComponentsShowcasePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        <SectionHeader
          eyebrow="Open Libraries"
          title="Component Arsenal"
          subtitle="Independent microservices and utility platforms built to solve real enterprise problems — reused across multiple products."
        />

        {/* Philosophy */}
        <div className="rounded-2xl p-6 mb-12"
          style={{
            backgroundColor: "#14213d",
            border: "1px solid var(--border)",
            borderLeft: "3px solid #fca311",
          }}
        >
          <p className="text-xs font-mono-custom mb-3 flex items-center gap-2" style={{ color: "#fca311" }}>
            <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
            // philosophy
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#e5e5e5" }}>
            Every component here was extracted from a real production problem. The Rule Engine started
            because teams kept hardcoding business logic. The JSON Form Builder emerged from maintaining
            30+ near-identical form components. The result: a personal toolkit that accelerates delivery
            timelines across products and reduces onboarding friction for new developers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reusableComponents.map((comp, idx) => {
            const isOrange = idx % 2 === 0;
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="rounded-2xl p-6 card-glow flex flex-col"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: isOrange ? "rgba(252,163,17,0.10)" : "rgba(90,126,179,0.12)",
                    color: isOrange ? "#fca311" : "#7a9ccc",
                  }}
                >
                  {iconMap[comp.icon] ?? <LayoutGrid size={22} />}
                </div>

                <h3 className="font-display font-bold text-base mb-2" style={{ color: "#ffffff" }}>
                  {comp.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#e5e5e5" }}>
                  {comp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {comp.tags.map((tag) => (
                    <Badge key={tag} color={badgeColors[idx % badgeColors.length]}>{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "8+",   label: "Components Built"  },
            { value: "3+",   label: "Products Using Them" },
            { value: "~40%", label: "Dev Time Saved"    },
            { value: "0",    label: "Rewrites Needed"   },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-xl p-5 text-center"
              style={{
                backgroundColor: "#14213d",
                border: "1px solid var(--border)",
                borderTop: "2px solid #fca311",
              }}
            >
              <p className="font-display font-bold text-3xl mb-1" style={{ color: "#fca311" }}>{item.value}</p>
              <p className="text-xs font-mono-custom" style={{ color: "#e5e5e5" }}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
