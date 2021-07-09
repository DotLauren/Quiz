import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider, useDarkTheme } from "./src/contexts/ThemeContext";

import Navigator from "./src/navigation";
import { AppearanceProvider } from "react-native-appearance";

export default function App() {
  const { newTheme } = useDarkTheme();

  return (
    <AppearanceProvider>
      <ThemeProvider theme={newTheme}>
        <Navigator />
      </ThemeProvider>
    </AppearanceProvider>
  );
}
