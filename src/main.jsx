import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

// Initialize dark theme before rendering
document.documentElement.setAttribute('data-theme', 'dark');
document.body.style.backgroundColor = "#08090A";
document.body.style.color = "#F8FAFC";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
