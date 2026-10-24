import { createTheme } from "@mui/material/styles";

// Maalgudi Technolabs theme with modern black, blue, and orange color scheme
// Primary: #2563EB (Royal Blue), Secondary: #FF8C00 (Dark Orange)
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
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "2.75rem",
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      "@media (min-width:960px)": {
        fontSize: "3.75rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "2.25rem",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.015em",
      "@media (min-width:960px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3.5rem",
      },
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      "@media (min-width:960px)": {
        fontSize: "2.2rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "2.6rem",
      },
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1.35,
      "@media (min-width:960px)": {
        fontSize: "1.75rem",
      },
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "1.2rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontSize: "1.05rem",
      fontWeight: 600,
      lineHeight: 1.45,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#CBD5E1",
    },
    body2: {
      fontSize: "0.925rem",
      lineHeight: 1.65,
      color: "#94A3B8",
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#2563EB", // Royal blue
      light: "#60A5FA",
      dark: "#1D4ED8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF8C00", // Dark orange
      light: "#FFA500",
      dark: "#EA580C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#08090A",
      paper: "#11141C",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    accent: {
      main: "#FF8C00",
      light: "#FFA500",
      dark: "#EA580C",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
          padding: "10px 24px",
          fontSize: "0.95rem",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
          color: "#FFFFFF",
          boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(255, 140, 0, 0.45)",
          },
        },
        outlined: {
          border: "1.5px solid rgba(255, 255, 255, 0.2)",
          color: "#F8FAFC",
          backdropFilter: "blur(8px)",
          "&:hover": {
            border: "1.5px solid #FF8C00",
            background: "rgba(255, 140, 0, 0.08)",
            color: "#FF8C00",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#11141C",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(255, 140, 0, 0.4)",
            boxShadow: "0 20px 40px -15px rgba(255, 140, 0, 0.25)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(8, 9, 10, 0.85)",
          backdropFilter: "blur(16px)",
          color: "#F8FAFC",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
});

export default theme;
