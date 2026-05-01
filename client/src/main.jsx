import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    background: {
      default: "#eff2f1",
    },
    text: {
      primary: "#2f2f2f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
