import { createContext, useContext, useState } from "react";

// Step 1 create context
const ThemeContext = createContext();

// Step 2 create provider
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3 create costum hook for easy access
function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
