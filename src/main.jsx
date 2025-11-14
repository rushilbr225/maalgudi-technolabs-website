import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

// Initialize theme before rendering
const savedTheme = localStorage.getItem("maalgudi-dark-mode");
const isDark = savedTheme ? JSON.parse(savedTheme) : false;
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
document.body.style.backgroundColor = isDark ? "#08090A" : "#F4FAFF";
document.body.style.color = isDark ? "#F4FAFF" : "#08090A";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
