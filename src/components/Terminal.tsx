"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Line = {
  type: "command" | "output" | "blank";
  text: string;
  color?: string;
};

const terminalScript: Line[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "abhishek-jaiswar", color: "#fca311" },
  { type: "blank", text: "" },
  { type: "command", text: "cat profile.json" },
  { type: "output", text: "{",                                                          color: "#5a6a90" },
  { type: "output", text: '  "role":       "Full Stack Developer & Team Lead",',        color: "#e5e5e5" },
  { type: "output", text: '  "experience": "7+ years",',                               color: "#e5e5e5" },
  { type: "output", text: '  "location":   "Mumbai, India",',                          color: "#e5e5e5" },
  { type: "output", text: '  "stack":      ["Next.js","React","Node.js","Python"],',   color: "#e5e5e5" },
  { type: "output", text: '  "status":     "available"',                              color: "#fca311" },
  { type: "output", text: "}",                                                          color: "#5a6a90" },
  { type: "blank", text: "" },
  { type: "command", text: "ls projects/" },
  { type: "output", text: "sharedocs-enterpriser  ckyc-revamp  dms-mobile-app",   color: "#7a9ccc" },
  { type: "output", text: "aadhar-masking-tool    cpapp-mobile  asset-management", color: "#7a9ccc" },
  { type: "blank", text: "" },
  { type: "command", text: "git log --oneline -3" },
  { type: "output", text: "a3f1c2e feat: 3x perf boost on CKYC platform",      color: "#5a6a90" },
  { type: "output", text: "9b2e5d1 feat: AI-first ECM architecture",           color: "#5a6a90" },
  { type: "output", text: "d4a8f3c feat: enterprise mobile workflow app",      color: "#5a6a90" },
];

const CHAR_DELAY = 28;
const LINE_DELAY = 60;

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<{ line: Line; text: string }[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      for (let i = 0; i < terminalScript.length; i++) {
        if (cancelled) return;
        const line = terminalScript[i];

        if (line.type === "blank") {
          await delay(LINE_DELAY);
          setVisibleLines((prev) => [...prev, { line, text: "" }]);
          continue;
        }

        setVisibleLines((prev) => [...prev, { line, text: "" }]);

        for (let c = 0; c <= line.text.length; c++) {
          if (cancelled) return;
          await delay(line.type === "command" ? CHAR_DELAY : 6);
          setVisibleLines((prev) => {
            const next = [...prev];
            next[next.length - 1] = { line, text: line.text.slice(0, c) };
            return next;
          });
        }

        await delay(LINE_DELAY);
      }
      if (!cancelled) setDone(true);
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl overflow-hidden w-full"
      style={{
        border: "1px solid var(--border)",
        backgroundColor: "#000000",
        boxShadow: "0 0 0 1px rgba(252,163,17,0.08), 0 20px 60px rgba(0,0,0,0.6)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid var(--border)", backgroundColor: "#080d1a" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28ca41" }} />
        <span className="ml-4 text-xs font-mono-custom" style={{ color: "#5a6a90" }}>
          abhishek@portfolio — zsh
        </span>
        <span className="ml-auto text-xs font-mono-custom" style={{ color: "#fca311" }}>●</span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 font-mono-custom text-xs sm:text-sm leading-relaxed min-h-[240px] sm:min-h-[320px] overflow-x-auto">
        {visibleLines.map((item, idx) => (
          <div key={idx} className="flex min-w-0">
            {item.line.type === "command" && (
              <span style={{ color: "#fca311" }} className="mr-2 select-none">❯</span>
            )}
            <span
              className="whitespace-pre break-all sm:break-normal"
              style={{
                color: item.line.type === "command"
                  ? "#ffffff"
                  : (item.line.color || "#e5e5e5"),
              }}
            >
              {item.text}
              {idx === visibleLines.length - 1 && !done && item.line.type !== "blank" && (
                <span className="terminal-cursor" />
              )}
            </span>
          </div>
        ))}
        {done && (
          <div className="flex">
            <span style={{ color: "#fca311" }} className="mr-2">❯</span>
            <span className="terminal-cursor" style={{ color: "#ffffff" }} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
