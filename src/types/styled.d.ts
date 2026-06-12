import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      popover: string;
      popoverForeground: string;
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      muted: string;
      mutedForeground: string;
      accent: string;
      accentForeground: string;
      destructive: string;
      destructiveForeground: string;
      border: string;
      input: string;
      ring: string;
      gold: string;
      goldLight: string;
      goldDark: string;
      obsidian: string;
      obsidianLight: string;
      cream: string;
      creamMuted: string;
    };
    fonts: {
      display: string;
      sans: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    gradients: {
      gold: string;
      dark: string;
      hero: string;
    };
    shadows: {
      gold: string;
      card: string;
      hover: string;
    };
  }
}
