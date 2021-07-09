import React, { useState } from "react";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../theme";

const ThemeContext = React.createContext({
  newTheme: "light",

  toggleTheme: () => {},
});
export default ThemeContext;

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  const newTheme = theme === "light" ? lightTheme.palette : darkTheme.palette;

  return (
    <ThemeContext.Provider value={{ toggleTheme, newTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function useDarkTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useReminder must be used within a ReminderProvider");
  }
  return context;
}
export { useDarkTheme, ThemeProvider };
