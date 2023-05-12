import { useEffect, useState, createContext, useContext } from "react";

const DarkModeContext = createContext();
export const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "light"
  );

  // useEffect(()=>{
  //   setTheme(localStorage.getItem("dark"))
  // })

  useEffect(() => {
    // if (theme === "dark") {
    //   localStorage.setItem("dark",theme)
    // }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const data = { theme, setTheme, handleThemeSwitch };
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export const UseCustomProvider = () => useContext(DarkModeContext);
