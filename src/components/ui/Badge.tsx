type Props = {
  children: React.ReactNode;
  color?: "violet" | "cyan" | "green" | "coral" | "muted";
};

/* All warm accents → orange. All cool/muted → navy-blue. */
const colorMap = {
  violet: { bg: "rgba(252,163,17,0.12)", color: "#fca311",  border: "rgba(252,163,17,0.30)" },
  coral:  { bg: "rgba(252,163,17,0.12)", color: "#fca311",  border: "rgba(252,163,17,0.30)" },
  green:  { bg: "rgba(252,163,17,0.10)", color: "#fca311",  border: "rgba(252,163,17,0.25)" },
  cyan:   { bg: "rgba(90,126,179,0.14)", color: "#7a9ccc",  border: "rgba(90,126,179,0.30)" },
  muted:  { bg: "rgba(20,33,61,0.60)",   color: "#8a9ab8",  border: "rgba(30,48,96,0.50)"   },
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
