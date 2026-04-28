type Props = {
  children: React.ReactNode;
  color?: "violet" | "cyan" | "green" | "coral" | "muted";
};

/* All warm accents → orange. Cyan → bright blue. Muted → brighter gray-blue. */
const colorMap = {
  violet: { bg: "rgba(252,163,17,0.12)", color: "#fca311",  border: "rgba(252,163,17,0.30)" },
  coral:  { bg: "rgba(252,163,17,0.12)", color: "#fca311",  border: "rgba(252,163,17,0.30)" },
  green:  { bg: "rgba(252,163,17,0.10)", color: "#fca311",  border: "rgba(252,163,17,0.25)" },
  cyan:   { bg: "rgba(79,195,247,0.12)", color: "#4fc3f7",  border: "rgba(79,195,247,0.30)" },
  muted:  { bg: "rgba(255,255,255,0.08)", color: "#b8c5d6", border: "rgba(255,255,255,0.15)" },
};

export default function Badge({ children, color = "muted" }: Props) {
  const c = colorMap[color];
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium font-mono-custom"
      style={{ backgroundColor: c.bg, color: c.color, border: `1px solid ${c.border}` }}
    >
      {children}
    </span>
  );
}
