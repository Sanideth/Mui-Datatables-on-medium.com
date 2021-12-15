import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
