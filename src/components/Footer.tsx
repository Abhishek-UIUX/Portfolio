import Link from "next/link";
import { Globe, ExternalLink, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="border-t py-14 mt-6 relative overflow-hidden"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-base)" }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-dot-bg opacity-20" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,140,66,0.08) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(20,33,61,0.15) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm"
                style={{ backgroundColor: "#fca311", color: "#000000" }}>
                AJ
              </div>
              <p className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>
                Abhishek Jaiswar
              </p>
            </div>
            <p className="text-sm mb-4" style={{ color: "#e5e5e5" }}>
              Full Stack Developer & Team Lead
            </p>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              <MapPin size={12} />
              Mumbai, India
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "#fca311" }}>
              <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/",                    label: "Home"       },
                { href: "/about",               label: "About"      },
                { href: "/projects",            label: "Projects"   },
                { href: "/components-showcase", label: "Components" },
                { href: "/contact",             label: "Contact"    },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white w-fit"
                  style={{ color: "#e5e5e5" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "#fca311" }}>
              <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/abhishek-jaiswar" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white w-fit"
                style={{ color: "#e5e5e5" }}>
                <ExternalLink size={14} style={{ color: "#fca311" }} /> LinkedIn
              </a>
              <a href="mailto:jaiswarabhishek2@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white w-fit"
                style={{ color: "#e5e5e5" }}>
                <Mail size={14} style={{ color: "#fca311" }} /> jaiswarabhishek2@gmail.com
              </a>
              <a href="https://github.com/abhishekjaiswar" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white w-fit"
                style={{ color: "#e5e5e5" }}>
                <Globe size={14} style={{ color: "#fca311" }} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <span>© 2026 Abhishek Jaiswar. Built with Next.js & Tailwind CSS.</span>
          <span className="flex items-center gap-1.5 font-mono-custom font-semibold" style={{ color: "#fca311" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            available for opportunities
          </span>
        </div>
      </div>
    </footer>
  );
}
