import { useEffect, useState, createContext, useContext } from "react";

const DarkModeContext = createContext();
export const DarkModeContextProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.cookie = `theme=${!theme}; path=/; max-age=31536000`;

  };

  const data = { theme,setTheme,handleThemeSwitch };
  return <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
};

export const UseCustomProvider = () => useContext(DarkModeContext);
