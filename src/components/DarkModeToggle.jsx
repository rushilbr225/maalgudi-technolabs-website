import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = ({ sx = {} }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
      <IconButton
        onClick={toggleDarkMode}
        className="dark-mode-toggle"
        sx={{
          color: darkMode ? "#F4FAFF" : "#F4FAFF",
          backgroundColor: "transparent",
          borderRadius: "50%",
          width: 40,
          height: 40,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(93, 253, 203, 0.1)",
            color: "#5DFDCB",
            transform: "scale(1.1)",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "1.5rem",
            transition: "all 0.3s ease",
          },
          ...sx,
        }}
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
