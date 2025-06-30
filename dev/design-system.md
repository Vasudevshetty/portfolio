# 🎨 Design System - Digital Shadows Theme

## 🎯 Design Philosophy
The "Digital Shadows" theme embodies modern minimalism with high-tech aesthetics, creating depth through strategic use of shadows, glows, and subtle animations while maintaining exceptional readability and accessibility.

## 🌈 Color System

### Primary Palette
```css
/* Background Colors */
--bg-primary: #0D1117;      /* Main background - Deep space black */
--bg-secondary: #161B22;    /* Card backgrounds - Slightly lighter */
--bg-tertiary: #21262D;     /* Elevated elements - Button hover states */
--bg-quaternary: #30363D;   /* Input fields and borders */

/* Accent Colors */
--accent-primary: #58A6FF;    /* Electric blue - Primary actions */
--accent-secondary: #7C3AED;  /* Neon purple - Secondary highlights */
--accent-success: #3FB950;    /* Success green - Positive feedback */
--accent-warning: #FFA657;    /* Warning orange - Caution states */
--accent-error: #F85149;      /* Error red - Negative feedback */

/* Text Colors */
--text-primary: #FFFFFF;      /* Headings and important text */
--text-secondary: #F0F6FC;    /* Body text and descriptions */
--text-tertiary: #C9D1D9;     /* Secondary information */
--text-muted: #8B949E;        /* Placeholder and disabled text */
--text-accent: #58A6FF;       /* Links and interactive text */

/* Border Colors */
--border-primary: #30363D;    /* Default borders */
--border-secondary: #21262D;  /* Subtle dividers */
--border-accent: #58A6FF;     /* Active/focus borders */
--border-muted: #21262D;      /* Inactive borders */
```

### Gradient Definitions
```css
/* Background Gradients */
--gradient-primary: linear-gradient(135deg, #0D1117 0%, #161B22 100%);
--gradient-card: linear-gradient(145deg, #161B22 0%, #21262D 100%);
--gradient-button: linear-gradient(135deg, #58A6FF 0%, #7C3AED 100%);

/* Glow Effects */
--glow-blue: 0 0 20px rgba(88, 166, 255, 0.3);
--glow-purple: 0 0 20px rgba(124, 58, 237, 0.3);
--glow-green: 0 0 20px rgba(63, 185, 80, 0.3);
--glow-subtle: 0 0 10px rgba(88, 166, 255, 0.1);

/* Shadow System */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
```

## 🔤 Typography System

### Font Families
```css
/* Primary Font Stack */
--font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace Font Stack */
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;

/* Display Font Stack (for logos/headlines) */
--font-display: 'Inter Tight', 'SF Pro Display', sans-serif;
```

### Type Scale
```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px - Small captions */
--text-sm: 0.875rem;   /* 14px - Meta information */
--text-base: 1rem;     /* 16px - Body text */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Small headings */
--text-2xl: 1.5rem;    /* 24px - Section titles */
--text-3xl: 1.875rem;  /* 30px - Page headings */
--text-4xl: 2.25rem;   /* 36px - Hero titles */
--text-5xl: 3rem;      /* 48px - Display */
--text-6xl: 3.75rem;   /* 60px - Large display */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Font Weights */
--font-thin: 100;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Typography Classes
```css
/* Heading Styles */
.heading-display {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

.heading-hero {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

.heading-section {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

/* Body Text Styles */
.body-large {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

.body-normal {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

.body-small {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--text-tertiary);
}

/* Code Styles */
.code-inline {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--bg-tertiary);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  color: var(--accent-primary);
}

.code-block {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  color: var(--text-secondary);
}
```

## 📏 Spacing System

### Spacing Scale
```css
/* Spacing Variables */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
--space-48: 12rem;    /* 192px */
```

### Component Spacing Guidelines
```css
/* Section Spacing */
.section-padding {
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);
}

.container-padding {
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

/* Card Spacing */
.card-padding {
  padding: var(--space-6);
}

.card-gap {
  gap: var(--space-4);
}

/* Button Spacing */
.button-padding {
  padding: var(--space-3) var(--space-6);
}

.button-gap {
  gap: var(--space-2);
}
```

## 🎭 Animation Principles

### Timing Functions
```css
/* Easing Curves */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Duration Scale */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
--duration-slowest: 750ms;
```

### Animation Patterns
```css
/* Hover Transitions */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-glow {
  transition: box-shadow var(--duration-normal) var(--ease-out);
}
.hover-glow:hover {
  box-shadow: var(--glow-blue);
}

.hover-scale {
  transition: transform var(--duration-fast) var(--ease-out);
}
.hover-scale:hover {
  transform: scale(1.05);
}

/* Focus States */
.focus-ring {
  transition: box-shadow var(--duration-fast) var(--ease-out);
}
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-primary);
}
```

## 🧩 Component Design Patterns

### Card Components
```css
.card-primary {
  background: var(--gradient-card);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-out);
}

.card-primary:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-lg), var(--glow-subtle);
  transform: translateY(-2px);
}

.card-glass {
  background: rgba(22, 27, 34, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(88, 166, 255, 0.1);
  border-radius: 16px;
}
```

### Button Components
```css
.button-primary {
  background: var(--gradient-button);
  color: var(--text-primary);
  border: none;
  border-radius: 8px;
  padding: var(--button-padding);
  font-weight: var(--font-medium);
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.button-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg), var(--glow-blue);
}

.button-secondary {
  background: transparent;
  color: var(--text-accent);
  border: 1px solid var(--border-accent);
  border-radius: 8px;
  padding: var(--button-padding);
  transition: all var(--duration-normal) var(--ease-out);
}

.button-secondary:hover {
  background: rgba(88, 166, 255, 0.1);
  border-color: var(--accent-primary);
  box-shadow: var(--glow-subtle);
}
```

### Input Components
```css
.input-primary {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: var(--space-3) var(--space-4);
  color: var(--text-secondary);
  font-family: var(--font-primary);
  transition: all var(--duration-normal) var(--ease-out);
}

.input-primary:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
  background: var(--bg-secondary);
}

.input-primary::placeholder {
  color: var(--text-muted);
}
```

## 📱 Responsive Design Tokens

### Breakpoint-Specific Spacing
```css
/* Mobile Spacing */
@media (max-width: 768px) {
  .section-padding {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
  
  .container-padding {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }
}

/* Desktop Spacing */
@media (min-width: 1024px) {
  .section-padding {
    padding-top: var(--space-32);
    padding-bottom: var(--space-32);
  }
  
  .container-padding {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

### Typography Responsive Scale
```css
/* Responsive Typography */
@media (max-width: 768px) {
  .heading-display {
    font-size: var(--text-4xl);
  }
  
  .heading-hero {
    font-size: var(--text-3xl);
  }
  
  .heading-section {
    font-size: var(--text-xl);
  }
}

@media (min-width: 1024px) {
  .heading-display {
    font-size: var(--text-6xl);
  }
  
  .heading-hero {
    font-size: var(--text-5xl);
  }
  
  .heading-section {
    font-size: var(--text-3xl);
  }
}
```

## ♿ Accessibility Guidelines

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 contrast ratio)
- Interactive elements should have clear focus indicators
- Error states should not rely solely on color

### Motion & Animation
- Respect `prefers-reduced-motion` media query
- Provide pause/stop controls for continuous animations
- Keep animations under 5 seconds for attention compliance

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus indicators should be clearly visible
- Tab order should be logical and intuitive

This design system provides the foundation for creating a cohesive, modern, and accessible portfolio website that stands out while maintaining excellent usability.
