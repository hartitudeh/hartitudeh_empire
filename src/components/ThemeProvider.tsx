import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, type ComponentProps } from "react";

function MobileThemeEnforcer() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.colorScheme = "dark";
    }
  }, [isMobile]);

  return null;
}

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <MobileThemeEnforcer />
      {children}
    </NextThemesProvider>
  );
}
