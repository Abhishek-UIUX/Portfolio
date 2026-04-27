import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/resume";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const starConfig = [
    { key: "situation", label: "Situation", color: "var(--text-muted)" },
    { key: "task",      label: "Task",      color: "#e5e5e5"           },
    { key: "action",    label: "Action",    color: "#fca311"           },
    { key: "result",    label: "Result",    color: "#fca311"           },
  ] as const;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-white px-4 py-2 rounded-lg"
          style={{ color: "#e5e5e5", backgroundColor: "#14213d", border: "1px solid var(--border)" }}
        >
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono-custom uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: "#fca311", border: "1px solid rgba(252,163,17,0.3)", backgroundColor: "rgba(252,163,17,0.08)" }}>
              {project.role}
            </span>
            <span className="text-xs px-3 py-1 rounded-full capitalize"
              style={{ backgroundColor: "#14213d", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs px-3 py-1 rounded-full font-bold"
                style={{ backgroundColor: "#fca311", color: "#000000" }}>
                Featured
              </span>
            )}
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-3 gradient-text">{project.title}</h1>
          <p className="text-base" style={{ color: "#e5e5e5" }}>{project.tagline}</p>
        </div>

        {/* STAR */}
        <div className="rounded-2xl p-6 mb-8"
          style={{ backgroundColor: "#14213d", border: "1px solid var(--border)", borderTop: "3px solid #fca311" }}>
          <h2 className="font-display font-bold text-xs uppercase tracking-widest mb-6 font-mono-custom flex items-center gap-2"
            style={{ color: "#fca311" }}>
            <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
            STAR Breakdown
          </h2>
          <div className="space-y-6">
            {starConfig.map(({ key, label, color }) => (
              <div key={key} className="flex gap-4">
                <div className="w-1 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: color, minHeight: "20px" }} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono-custom" style={{ color }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#e5e5e5" }}>
                    {project.star[key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl p-5 text-center"
                style={{ backgroundColor: "#14213d", border: "1px solid var(--border)", borderTop: "2px solid #fca311" }}>
                <p className="font-bold text-2xl mb-1" style={{ color: "#fca311" }}>{m.value}</p>
                <p className="text-xs" style={{ color: "#e5e5e5" }}>{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Trade-off */}
        <div className="rounded-xl p-5 mb-8"
          style={{ backgroundColor: "rgba(20,33,61,0.8)", border: "1px solid rgba(90,126,179,0.2)", borderLeft: "3px solid #7a9ccc" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 font-mono-custom" style={{ color: "#7a9ccc" }}>
            ⚖ Architectural Trade-off
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#e5e5e5" }}>
            {project.tradeoffs}
          </p>
        </div>

        {/* Stack */}
        <div className="rounded-xl p-5"
          style={{ backgroundColor: "#14213d", border: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 font-mono-custom" style={{ color: "var(--text-muted)" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => <Badge key={t} color="violet">{t}</Badge>)}
          </div>
        </div>

      </div>
    </div>
  );
}
