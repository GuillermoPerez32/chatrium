import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button variant="ghost" onClick={toggleTheme} className="relative">
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-muted-foreground" />
      ) : (
        <Moon className="w-6 h-6 text-muted-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;
