import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const DarkModeToggle = ({ sx = {} }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    // Add a subtle animation class to body during transition
    document.body.style.transition = "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    toggleDarkMode();
  };

  return (
    <Tooltip
      title={`Switch to ${darkMode ? "light" : "dark"} mode`}
      arrow
      placement="bottom"
    >
      <IconButton
        onClick={handleToggle}
        className="dark-mode-toggle"
        sx={{
          color: darkMode ? "#F4FAFF" : "#F4FAFF",
          backgroundColor: "transparent",
          borderRadius: "50%",
          width: 40,
          height: 40,
          position: "relative",
          overflow: "visible",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(93, 253, 203, 0.2)",
            opacity: 0,
            transition: "all 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "rgba(93, 253, 203, 0.15)",
            color: "#5DFDCB",
            transform: "scale(1.15) rotate(15deg)",
            "&::before": {
              opacity: 1,
              transform: "translate(-50%, -50%) scale(1.4)",
            },
          },
          "&:active": {
            transform: "scale(0.95)",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "1.5rem",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: darkMode
              ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
              : "drop-shadow(0 0 8px rgba(93, 253, 203, 0.3))",
          },
          ...sx,
        }}
        aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      >
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
