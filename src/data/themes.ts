export interface ThemeColors {
  id: string;
  name: string;
  description: string;
  colors: {
    background: string;      // Main background (darkest in dark mode, lightest in light mode)
    surface: string;          // Cards, elevated surfaces
    primary: string;          // Primary brand color, main interactive elements
    secondary: string;        // Secondary actions, less prominent elements
    accent: string;           // Text, borders, subtle accents
  };
}

export const themes: ThemeColors[] = [
  {
    id: "earthy-olive",
    name: "Earthy Olive",
    description: "Organic and grounded with natural warmth",
    colors: {
      background: "#1a1f12",  // Very dark forest - deep base
      surface: "#283618",     // Dark forest green - clear elevation
      primary: "#dda15e",     // Warm tan - high visibility CTA
      secondary: "#bc6c25",   // Burnt sienna - complementary
      accent: "#fefae0",      // Cream - maximum contrast text
    },
  },
  {
    id: "midnight-crimson",
    name: "Midnight Crimson",
    description: "Bold and dramatic with striking contrast",
    colors: {
      background: "#0d0f1a",  // Almost black navy - deep base
      surface: "#1a1d2e",     // Dark navy - clear card separation
      primary: "#ff2e4c",     // Bright red - pops against dark
      secondary: "#ff6b7a",   // Lighter red - visible secondary
      accent: "#f0f4f8",      // Near white - crisp text
    },
  },
  {
    id: "sage-forest",
    name: "Sage Forest",
    description: "Calming and natural with forest serenity",
    colors: {
      background: "#1a2328",  // Very dark teal - deep base
      surface: "#2f3e46",     // Dark charcoal teal - clear cards
      primary: "#a4c3b2",     // Light sage - high contrast CTA
      secondary: "#84a98c",   // Medium sage - visible secondary
      accent: "#e8f0ed",      // Very light sage - crisp text
    },
  },
  {
    id: "ocean-steel",
    name: "Ocean Steel",
    description: "Professional and clean with industrial elegance",
    colors: {
      background: "#0a1929",  // Very dark blue - deep base
      surface: "#1e3a52",     // Dark ocean blue - clear elevation
      primary: "#4fc3f7",     // Bright cyan - high visibility
      secondary: "#81d4fa",   // Light cyan - visible secondary
      accent: "#ffffff",      // Pure white - maximum contrast
    },
  },
  {
    id: "cyber-neon",
    name: "Cyber Neon",
    description: "Futuristic and vibrant with electric energy",
    colors: {
      background: "#000814",  // Almost black - deep immersive base
      surface: "#001d3d",     // Dark navy - clear layering
      primary: "#00f5ff",     // Electric cyan - neon glow
      secondary: "#ffd60a",   // Electric yellow - high contrast
      accent: "#ffffff",      // Pure white - sharp text
    },
  },
  {
    id: "sunset-ember",
    name: "Sunset Ember",
    description: "Warm and inviting with golden hour glow",
    colors: {
      background: "#0a0e14",  // Very dark blue - deep base
      surface: "#1a2332",     // Dark navy - clear cards
      primary: "#ff8c42",     // Bright orange - warm glow
      secondary: "#ffa07a",   // Light coral - visible secondary
      accent: "#fff5e6",      // Warm white - soft text
    },
  },
  {
    id: "mint-serenity",
    name: "Mint Serenity",
    description: "Fresh and peaceful with spa-like tranquility",
    colors: {
      background: "#0d1f1a",  // Very dark green - deep base
      surface: "#1a3329",     // Dark forest - clear elevation
      primary: "#7dd3c0",     // Bright mint - refreshing CTA
      secondary: "#a8e6cf",   // Light mint - gentle secondary
      accent: "#f0fff4",      // Mint white - clean text
    },
  },
  {
    id: "slate-coral",
    name: "Slate Coral",
    description: "Balanced and contemporary with warm contrast",
    colors: {
      background: "#0f1419",  // Very dark slate - deep base
      surface: "#1e2329",     // Dark slate - clear cards
      primary: "#ff6b6b",     // Bright coral - warm pop
      secondary: "#ffa07a",   // Light coral - visible secondary
      accent: "#f8f9fa",      // Off white - crisp text
    },
  },
  {
    id: "desert-warmth",
    name: "Desert Warmth",
    description: "Vibrant and earthy with sunset palette",
    colors: {
      background: "#0f1a1e",  // Very dark teal - deep base
      surface: "#1e3a3a",     // Dark teal - clear elevation
      primary: "#ffb347",     // Bright sandy orange - warm
      secondary: "#ff8c69",   // Bright terracotta - bold
      accent: "#fff8e7",      // Warm cream - readable text
    },
  },
  {
    id: "nautical-red",
    name: "Nautical Red",
    description: "Classic and trustworthy with maritime heritage",
    colors: {
      background: "#0a1628",  // Very dark navy - deep base
      surface: "#1a2f4a",     // Dark navy - clear cards
      primary: "#ff4757",     // Bright signal red - bold
      secondary: "#70a1ff",   // Bright sky blue - clear contrast
      accent: "#f1f2f6",      // Off white - nautical text
    },
  },
];

export function getThemeById(id: string): ThemeColors | undefined {
  return themes.find((theme) => theme.id === id);
}

export function getDefaultTheme(): ThemeColors {
  return themes[5]; // Sunset Ember as default
}
