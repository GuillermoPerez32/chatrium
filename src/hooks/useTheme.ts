import { ThemeProviderContext } from "@/theme/ThemeProviderContext";
import { ThemeProviderState } from "@/theme/types";
import { useContext } from "react";

const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export default useTheme;
