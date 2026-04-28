"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, MapPin, Send, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:jaiswarabhishek2@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Hi Abhishek,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`)}`;
    window.open(mailto, "_blank");
    setSent(true);
  };

  const inputStyle = {
    backgroundColor: "#000000",
    border: "1px solid var(--border)",
    color: "#ffffff",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Talk"
          subtitle="Open to full-time roles, freelance projects, and interesting technical conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {[
              {
                icon: <Mail size={18} style={{ color: "#fca311" }} />,
                label: "Email",
                content: <a href="mailto:jaiswarabhishek2@gmail.com" className="text-sm transition-colors hover:text-white"
                  style={{ color: "#e5e5e5" }}>jaiswarabhishek2@gmail.com</a>,
              },
              {
                icon: <ExternalLink size={18} style={{ color: "#4fc3f7" }} />,
                label: "LinkedIn",
                content: <a href="https://linkedin.com/in/abhishek-jaiswar" target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white" style={{ color: "#e5e5e5" }}>Abhishek Jaiswar</a>,
              },
              {
                icon: <MapPin size={18} style={{ color: "#fca311" }} />,
                label: "Location",
                content: (
                  <div>
                    <p className="text-sm" style={{ color: "#e5e5e5" }}>Mumbai, India</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Open to remote & relocation</p>
                  </div>
                ),
              },
              {
                icon: <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "#fca311" }} />,
                label: "Status",
                content: (
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#fca311" }}>Available for opportunities</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Typical response within 24h</p>
                  </div>
                ),
              },
            ].map((item) => (
              <BentoCard key={item.label} delay={0.1}>
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <p className="text-xs font-semibold uppercase tracking-wider font-mono-custom" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </p>
                </div>
                {item.content}
              </BentoCard>
            ))}
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,140,66,0.08) 0%, rgba(20,33,61,0.2) 100%)",
                border: "1px solid var(--border)", 
                borderTop: "3px solid #fca311" 
              }}>
              {/* Animated background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 grid-dot-bg opacity-10" />
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(255,140,66,0.12) 0%, transparent 70%)" }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(20,33,61,0.15) 0%, transparent 70%)" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
              
              <div className="relative z-10">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(252,163,17,0.12)" }}>
                      <CheckCircle size={28} style={{ color: "#fca311" }} />
                    </div>
                    <h3 className="font-display font-bold text-xl" style={{ color: "#ffffff" }}>
                      Email client is open!
                    </h3>
                    <p className="text-sm" style={{ color: "#e5e5e5" }}>
                      Send the pre-filled email to reach Abhishek directly.
                    </p>
                    <button onClick={() => setSent(false)} className="text-xs underline mt-2" style={{ color: "var(--text-muted)" }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <p className="text-xs font-mono-custom mb-2 flex items-center gap-2" style={{ color: "#fca311" }}>
                      <span className="w-4 h-px inline-block" style={{ backgroundColor: "#fca311" }} />
                      // send_message.ts
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(["name", "email"] as const).map((field) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold uppercase tracking-wider mb-2 font-mono-custom"
                            style={{ color: "var(--text-muted)" }}>
                            {field}
                          </label>
                          <input
                            type={field === "email" ? "email" : "text"}
                            required
                            value={form[field]}
                            onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "#fca311")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                            placeholder={field === "name" ? "Your name" : "your@email.com"}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 font-mono-custom"
                        style={{ color: "var(--text-muted)" }}>Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#fca311")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        placeholder="e.g. Full-time opportunity at Acme Corp"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 font-mono-custom"
                        style={{ color: "var(--text-muted)" }}>Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#fca311")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        placeholder="Tell me about the project or opportunity..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-85"
                      style={{ backgroundColor: "#fca311", color: "#000000" }}
                    >
                      <Send size={16} /> Open Email Client
                    </button>

                    <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                      Opens your default email app with the message pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
