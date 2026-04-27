# Multi-Theme System Documentation

## Overview

This portfolio now features a professional multi-theme system with **10 carefully curated color themes** and a theme lock feature. Each theme has been designed with professional UI/UX principles in mind.

## Features

### 🎨 10 Professional Themes

1. **Earthy Olive** - Natural, warm earth tones
2. **Midnight Crimson** - Bold, dramatic contrast
3. **Sage Forest** - Calming, nature-inspired greens
4. **Ocean Steel** - Professional, corporate blues
5. **Cyber Neon** - Modern, tech-forward palette
6. **Sunset Ember** - Warm, inviting oranges
7. **Mint Serenity** - Fresh, peaceful pastels
8. **Slate Coral** - Balanced, contemporary design
9. **Desert Warmth** - Vibrant, energetic tones
10. **Nautical Red** - Classic, maritime-inspired

### 🔒 Theme Lock Feature

- Lock your favorite theme to prevent accidental changes
- Visual indicator when theme is locked
- Easy toggle with lock/unlock icon

### 🌓 Dark/Light Mode

- Each theme supports both dark and light modes
- Smooth transitions between modes
- Independent from theme selection

### 💾 Persistence

- Selected theme is saved to localStorage
- Theme lock state is persisted
- Dark/Light mode preference is saved
- Settings persist across browser sessions

## Usage

### Theme Selector

The theme selector is located in the navigation bar:

1. **Click the palette icon** to open the theme dropdown
2. **Browse themes** - each shows a color preview
3. **Click a theme** to apply it instantly
4. **Lock icon** - click to lock/unlock the current theme

### Keyboard Navigation

- Theme selector is fully keyboard accessible
- Use Tab to navigate, Enter to select
- Escape to close the dropdown

### Mobile Support

- Fully responsive design
- Touch-friendly interface
- Optimized for small screens

## Technical Details

### File Structure

```
src/
├── data/
│   └── themes.ts              # Theme definitions and utilities
├── components/
│   ├── ThemeProvider.tsx      # Theme context and state management
│   ├── ThemeSelector.tsx      # Theme picker UI component
│   └── ThemeToggle.tsx        # Dark/Light mode toggle
└── app/
    └── globals.css            # CSS variables and theme styles
```

### Theme Configuration

Each theme consists of 5 colors:

```typescript
{
  id: string;           // Unique identifier
  name: string;         // Display name
  colors: {
    primary: string;    // Main background/primary color
    secondary: string;  // Secondary elements
    accent: string;     // Text and accents
    highlight: string;  // Interactive elements
    base: string;       // Base/foundation color
  }
}
```

### CSS Variables

The theme system uses CSS custom properties:

- `--theme-primary` through `--theme-base` - Raw theme colors
- `--bg-base`, `--bg-surface`, `--bg-card` - Background layers
- `--text-primary`, `--text-secondary`, `--text-muted` - Text colors
- `--accent-main` - Primary accent color
- `--border`, `--border-hover` - Border colors

### Adding New Themes

To add a new theme, edit `src/data/themes.ts`:

```typescript
{
  id: "my-theme",
  name: "My Theme",
  colors: {
    primary: "#000000",
    secondary: "#111111",
    accent: "#ffffff",
    highlight: "#ff0000",
    base: "#222222",
  },
}
```

## Best Practices

### Color Selection

Each theme follows these principles:

1. **Contrast** - Sufficient contrast for accessibility (WCAG AA)
2. **Harmony** - Colors work well together
3. **Purpose** - Each color has a specific role
4. **Flexibility** - Works in both dark and light modes

### Performance

- Themes use CSS variables for instant switching
- No page reload required
- Minimal JavaScript overhead
- Smooth transitions with CSS

### Accessibility

- High contrast ratios maintained
- Color-blind friendly palettes
- Keyboard navigation support
- Screen reader compatible

## API Reference

### useTheme Hook

```typescript
const {
  mode,              // "dark" | "light"
  toggleMode,        // () => void
  currentTheme,      // ThemeColors
  setTheme,          // (themeId: string) => void
  allThemes,         // ThemeColors[]
  isThemeLocked,     // boolean
  toggleThemeLock,   // () => void
} = useTheme();
```

### Theme Utilities

```typescript
import { getThemeById, getDefaultTheme, themes } from "@/data/themes";

// Get a specific theme
const theme = getThemeById("earthy-olive");

// Get the default theme
const defaultTheme = getDefaultTheme();

// Get all themes
const allThemes = themes;
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements:

- [ ] Custom theme creator
- [ ] Import/export themes
- [ ] Theme preview mode
- [ ] Scheduled theme switching
- [ ] System theme sync option
- [ ] Theme animations/transitions
- [ ] Color accessibility checker

## Credits

Color palettes inspired by professional design systems and carefully selected for optimal user experience.
