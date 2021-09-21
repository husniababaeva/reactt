import React from 'react';
import Dashboard from './containers/Dashboard';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/global";
import { lightTheme, darkTheme } from "./style/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
