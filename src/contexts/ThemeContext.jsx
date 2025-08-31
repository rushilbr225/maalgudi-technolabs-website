import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create theme context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

// Light and Dark theme configurations
const getTheme = (darkMode) => createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Rubik", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (min-width:1920px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
      lineHeight: 1.2,
      "@media (min-width:1920px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (min-width:1920px)": {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
      "@media (min-width:1920px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
      "@media (min-width:1920px)": {
        fontSize: "1.6rem",
      },
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 500,
      lineHeight: 1.4,
      "@media (min-width:1920px)": {
        fontSize: "1.4rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      "@media (min-width:1920px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.7,
      "@media (min-width:1920px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: "#7CC6FE", // Light blue
      light: "#a3d5fe",
      dark: "#5bb1fe",
      contrastText: darkMode ? "#F4FAFF" : "#08090A",
    },
    secondary: {
      main: "#5DFDCB", // Bright mint green
      light: "#7ffdd5",
      dark: "#3ffcc1",
      contrastText: darkMode ? "#F4FAFF" : "#08090A",
    },
    background: {
      default: darkMode ? "#0a0b0c" : "#F4FAFF", // Very dark vs very light blue/white
      paper: darkMode ? "#1a1b1c" : "#ffffff",
    },
    text: {
      primary: darkMode ? "#F4FAFF" : "#08090A", // Light text in dark mode, dark text in light mode
      secondary: darkMode ? "#b0b3b8" : "#4a5568",
    },
    accent: {
      main: "#5DFDCB", // Mint green accent
      light: "#7ffdd5",
      dark: "#3ffcc1",
    },
    dark: {
      main: darkMode ? "#F4FAFF" : "#08090A", // Inverted for dark mode
      light: darkMode ? "#ffffff" : "#2d3748",
      dark: darkMode ? "#e0e0e0" : "#000000",
      contrastText: darkMode ? "#08090A" : "#F4FAFF",
    },
    // Custom colors for different modes
    surface: {
      main: darkMode ? "#242526" : "#ffffff",
      light: darkMode ? "#3a3b3c" : "#f8f9fa",
      dark: darkMode ? "#18191a" : "#e9ecef",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: darkMode ? "#0a0b0c" : "#F4FAFF",
          color: darkMode ? "#F4FAFF" : "#08090A",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 0,
          padding: "12px 30px",
          fontSize: "1rem",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "@media (min-width:1920px)": {
            padding: "16px 40px",
            fontSize: "1.2rem",
          },
        },
        contained: {
          background: "linear-gradient(45deg, #7CC6FE 0%, #5DFDCB 100%)",
          color: "#08090A",
          boxShadow: "0 4px 15px rgba(124, 198, 254, 0.3)",
          "&:hover": {
            background: "linear-gradient(45deg, #5bb1fe 0%, #3ffcc1 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(93, 253, 203, 0.4)",
          },
        },
        outlined: {
          border: "2px solid #7CC6FE",
          color: "#7CC6FE",
          "&:hover": {
            background: "#7CC6FE",
            color: "#08090A",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:1920px)": {
            maxWidth: "1800px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: darkMode ? "#1a1b1c" : "#ffffff",
          boxShadow: darkMode 
            ? "0 2px 10px rgba(255,255,255,0.05)" 
            : "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: darkMode 
              ? "0 8px 25px rgba(255,255,255,0.1)" 
              : "0 8px 25px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#08090A",
          color: "#F4FAFF",
          boxShadow: "0 2px 10px rgba(8, 9, 10, 0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? "#1a1b1c" : "#ffffff",
          transition: "background-color 0.3s ease",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: darkMode ? "#242526" : "#ffffff",
            "& fieldset": {
              borderColor: darkMode ? "#3a3b3c" : "#e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#7CC6FE",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7CC6FE",
            },
          },
          "& .MuiInputLabel-root": {
            color: darkMode ? "#b0b3b8" : "#4a5568",
            "&.Mui-focused": {
              color: "#7CC6FE",
            },
          },
        },
      },
    },
  },
});

// Theme Context Provider Component
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('maalgudi-dark-mode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('maalgudi-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = getTheme(darkMode);

  const value = {
    darkMode,
    toggleDarkMode,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
