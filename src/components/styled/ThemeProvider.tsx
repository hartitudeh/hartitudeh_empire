import React from 'react';
import { ThemeProvider as SCThemeProvider, DefaultTheme } from 'styled-components';

export const parentTheme: DefaultTheme = {
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

export const realEstateTheme: DefaultTheme = {
  ...parentTheme,
  colors: {
    ...parentTheme.colors,
    primary: 'hsl(var(--emerald))',
    accent: 'hsl(var(--emerald))',
    gold: 'hsl(var(--emerald))',
    goldLight: 'hsl(142 70% 55%)',
    goldDark: 'hsl(142 85% 35%)',
  },
  gradients: {
    ...parentTheme.gradients,
    gold: 'linear-gradient(135deg, hsl(142 70% 50%) 0%, hsl(142 85% 35%) 100%)',
  },
};

export const cryptoTheme: DefaultTheme = {
  ...parentTheme,
  colors: {
    ...parentTheme.colors,
    primary: 'hsl(var(--bronze))',
    accent: 'hsl(var(--bronze))',
    gold: 'hsl(var(--bronze))',
    goldLight: 'hsl(30 75% 60%)',
    goldDark: 'hsl(30 85% 40%)',
  },
  gradients: {
    ...parentTheme.gradients,
    gold: 'linear-gradient(135deg, hsl(30 75% 55%) 0%, hsl(30 85% 40%) 100%)',
  },
};

export const techTheme: DefaultTheme = {
  ...parentTheme,
  colors: {
    ...parentTheme.colors,
    primary: 'hsl(var(--cobalt))',
    accent: 'hsl(var(--cobalt))',
    gold: 'hsl(var(--cobalt))',
    goldLight: 'hsl(195 80% 55%)',
    goldDark: 'hsl(195 90% 35%)',
  },
  gradients: {
    ...parentTheme.gradients,
    gold: 'linear-gradient(135deg, hsl(195 80% 50%) 0%, hsl(195 90% 35%) 100%)',
  },
};

export function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <SCThemeProvider theme={parentTheme}>
      {children}
    </SCThemeProvider>
  );
}

export function BrandThemeProvider({ 
  children, 
  brand 
}: { 
  children: React.ReactNode; 
  brand: 'real-estate' | 'crypto' | 'tech' | 'parent';
}) {
  const selectedTheme = 
    brand === 'real-estate' ? realEstateTheme :
    brand === 'crypto' ? cryptoTheme :
    brand === 'tech' ? techTheme :
    parentTheme;
    
  return (
    <SCThemeProvider theme={selectedTheme}>
      {children}
    </SCThemeProvider>
  );
}
