import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Create theme context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

// Dark theme configuration
const getTheme = () =>
  createTheme({
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
      mode: "dark",
      primary: {
        main: "#ff9800", // Orange
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "#F4FAFF",
      },
      secondary: {
        main: "#ffa726", // Amber
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "#F4FAFF",
      },
      background: {
        default: "#0a0b0c",
        paper: "#1a1b1c",
      },
      text: {
        primary: "#F4FAFF",
        secondary: "#b0b3b8",
      },
      accent: {
        main: "#ff9800", // Orange accent
        light: "#ffb74d",
        dark: "#3ffcc1",
      },
      dark: {
        main: "#F4FAFF",
        light: "#ffffff",
        dark: "#e0e0e0",
        contrastText: "#08090A",
      },
      // Custom colors for dark mode
      surface: {
        main: "#242526",
        light: "#3a3b3c",
        dark: "#18191a",
      },
    },
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#0a0b0c",
            color: "#F4FAFF",
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
            background: "linear-gradient(45deg, #2563EB 0%, #FF8C00 100%)",
            color: "#F4FAFF",
            boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
            "&:hover": {
              background: "linear-gradient(45deg, #1E40AF 0%, #FF6500 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(255, 140, 0, 0.4)",
            },
          },
          outlined: {
            border: "2px solid #2563EB",
            color: "#2563EB",
            "&:hover": {
              background: "#2563EB",
              color: "#F4FAFF",
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "&.MuiContainer-maxWidthLg": {
              maxWidth: "1200px",
            },
            "&.MuiContainer-maxWidthXl": {
              maxWidth: "1536px",
            },
            "@media (min-width:1920px)": {
              "&.MuiContainer-maxWidthLg": {
                maxWidth: "1600px",
              },
              "&.MuiContainer-maxWidthXl": {
                maxWidth: "1800px",
              },
            },
            // Full width containers
            "&.MuiContainer-maxWidthFalse": {
              maxWidth: "none",
              width: "100%",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            backgroundColor: "#1a1b1c",
            boxShadow: "0 2px 10px rgba(255,255,255,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 8px 25px rgba(255,255,255,0.1)",
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
            backgroundColor: "#1a1b1c",
            transition: "background-color 0.3s ease",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#242526",
              "& fieldset": {
                borderColor: "#3a3b3c",
              },
              "&:hover fieldset": {
                borderColor: "#2563EB",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#2563EB",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#b0b3b8",
              "&.Mui-focused": {
                color: "#2563EB",
              },
            },
          },
        },
      },
    },
  });

// Theme Context Provider Component
export const ThemeContextProvider = ({ children }) => {
  const theme = getTheme();

  // Apply dark theme to document body
  React.useEffect(() => {
    document.body.style.backgroundColor = "#08090A";
    document.body.style.color = "#F4FAFF";
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const value = {
    darkMode: true,
    mode: "dark",
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
