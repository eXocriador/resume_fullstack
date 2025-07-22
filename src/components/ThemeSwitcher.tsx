import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleSetTheme = (newTheme: string) => {
    document.documentElement.classList.remove(
      "theme-teal",
      "theme-amber",
      "theme-sage"
    );
    if (newTheme !== "light" && newTheme !== "dark" && newTheme !== "system") {
      document.documentElement.classList.add(`theme-${newTheme}`);
      // Preserve dark/light mode preference when changing color
      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme(newTheme);
    }
  };

  const toggleDarkMode = () => {
    // We only toggle between light and dark, preserving the color theme
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-4 bg-background border-t">
      <h3 className="text-sm font-semibold mb-3 text-center text-muted-foreground">
        Color Palette
      </h3>
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSetTheme("light")}
          className="border-blue-500 text-blue-500"
        >
          Default
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSetTheme("teal")}
          className="border-teal-500 text-teal-500"
        >
          Teal
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSetTheme("amber")}
          className="border-amber-500 text-amber-500"
        >
          Amber
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSetTheme("sage")}
          className="border-green-700 text-green-700"
        >
          Sage
        </Button>
      </div>
      <div className="flex items-center justify-center mt-3">
        <span className="text-sm text-muted-foreground mr-2">Light</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="h-8 w-8"
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
        <span className="text-sm text-muted-foreground ml-2">Dark</span>
      </div>
    </div>
  );
};
