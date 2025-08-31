import { createTheme } from "@mui/material/styles";

// Maalgudi Technolabs inspired theme with orange/yellow color scheme
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
      main: "#eea412", // Maalgudi Technolabs orange/yellow
      light: "#f5c842",
      dark: "#d89e0b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1f1f1f", // Dark text color from Maalgudi Technolabs
      light: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333", // Maalgudi Technolabs text color
      secondary: "#666666",
    },
    accent: {
      main: "#f8f9fa",
      light: "#ffffff",
      dark: "#e9ecef",
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
          background: "linear-gradient(45deg, #eea412 0%, #f5c842 100%)",
          color: "#fff",
          boxShadow: "0 4px 15px rgba(238, 164, 18, 0.3)",
          "&:hover": {
            background: "linear-gradient(45deg, #d89e0b 0%, #eea412 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(238, 164, 18, 0.4)",
          },
        },
        outlined: {
          border: "2px solid #eea412",
          color: "#eea412",
          "&:hover": {
            background: "#eea412",
            color: "#fff",
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
          backgroundColor: "#ffffff",
          color: "#333333",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export default theme;
