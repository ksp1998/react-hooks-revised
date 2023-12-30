import { useContext } from "react";
import { ThemeContext } from "../usecontext/themeContext";

// Custom hook  that uses the ThemeProvide Context API
const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme };
