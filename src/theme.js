import { createTheme } from "@mui/material/styles";

// Maalgudi Technolabs theme with modern black, blue, and orange color scheme
// Primary: #2563EB (Royal Blue), Secondary: #FF8C00 (Dark Orange),
// Background: #000000 (Black), Text: #FFFFFF (White)
const theme = createTheme({
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
    primary: {
      main: "#2563EB", // Royal blue
      light: "#60A5FA",
      dark: "#1E40AF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF8C00", // Dark orange
      light: "#FFA500",
      dark: "#FF6500",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#000000", // Black
      paper: "#0A0A0A",
    },
    text: {
      primary: "#FFFFFF", // White
      secondary: "#A0AEC0",
    },
    accent: {
      main: "#FF8C00", // Orange accent
      light: "#FFA500",
      dark: "#FF6500",
    },
    dark: {
      main: "#000000", // Black for dark elements
      light: "#1A1A1A",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 0, // Maalgudi Technolabs uses sharp corners mostly
  },
  components: {
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
          background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
          color: "#FFFFFF",
          boxShadow: "0 4px 15px rgba(255, 140, 0, 0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #1E40AF 0%, #FF6500 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(255, 140, 0, 0.6)",
          },
        },
        outlined: {
          border: "2px solid #2563EB",
          color: "#2563EB",
          "&:hover": {
            background: "#2563EB",
            color: "#FFFFFF",
            transform: "translateY(-2px)",
            borderColor: "#2563EB",
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
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(37, 99, 235, 0.3)",
        },
      },
    },
  },
});

export default theme;
