import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HoveredNavLinkProvider } from "./components/ui/HoveredNavLinkContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <HoveredNavLinkProvider>
          <App />
        </HoveredNavLinkProvider>
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
