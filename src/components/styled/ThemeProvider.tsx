import React from 'react';
import { ThemeProvider as SCThemeProvider, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: 'hsl(var(--card))',
    cardForeground: 'hsl(var(--card-foreground))',
    popover: 'hsl(var(--popover))',
    popoverForeground: 'hsl(var(--popover-foreground))',
    primary: 'hsl(var(--primary))',
    primaryForeground: 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    secondaryForeground: 'hsl(var(--secondary-foreground))',
    muted: 'hsl(var(--muted))',
    mutedForeground: 'hsl(var(--muted-foreground))',
    accent: 'hsl(var(--accent))',
    accentForeground: 'hsl(var(--accent-foreground))',
    destructive: 'hsl(var(--destructive))',
    destructiveForeground: 'hsl(var(--destructive-foreground))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    gold: 'hsl(var(--gold))',
    goldLight: 'hsl(var(--gold-light))',
    goldDark: 'hsl(var(--gold-dark))',
    obsidian: 'hsl(var(--obsidian))',
    obsidianLight: 'hsl(var(--obsidian-light))',
    cream: 'hsl(var(--cream))',
    creamMuted: 'hsl(var(--cream-muted))',
  },
  fonts: {
    display: '"Playfair Display", serif',
    sans: '"DM Sans", sans-serif',
  },
  borderRadius: {
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
  },
  gradients: {
    gold: 'var(--gradient-gold)',
    dark: 'var(--gradient-dark)',
    hero: 'var(--gradient-hero)',
  },
  shadows: {
    gold: 'var(--shadow-gold)',
    card: 'var(--shadow-card)',
    hover: 'var(--shadow-hover)',
  },
};

export function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <SCThemeProvider theme={theme}>
      {children}
    </SCThemeProvider>
  );
}
