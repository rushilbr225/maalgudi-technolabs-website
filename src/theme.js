import { createTheme } from "@mui/material/styles";

// Maalgudi Technolabs theme with modern blue-mint color scheme
// Primary: #7CC6FE (Light Blue), Secondary: #5DFDCB (Mint Green), 
// Background: #F4FAFF (Light Blue/White), Text: #08090A (Near Black)
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
      main: "#7CC6FE", // Light blue
      light: "#a3d5fe",
      dark: "#5bb1fe",
      contrastText: "#08090A",
    },
    secondary: {
      main: "#5DFDCB", // Bright mint green
      light: "#7ffdd5",
      dark: "#3ffcc1",
      contrastText: "#08090A",
    },
    background: {
      default: "#F4FAFF", // Very light blue/white
      paper: "#ffffff",
    },
    text: {
      primary: "#08090A", // Near black
      secondary: "#4a5568",
    },
    accent: {
      main: "#5DFDCB", // Mint green accent
      light: "#7ffdd5",
      dark: "#3ffcc1",
    },
    dark: {
      main: "#08090A", // Near black for dark elements
      light: "#2d3748",
      dark: "#000000",
      contrastText: "#F4FAFF",
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
          backgroundColor: "#08090A",
          color: "#F4FAFF",
          boxShadow: "0 2px 10px rgba(8, 9, 10, 0.3)",
        },
      },
    },
  },
});

export default theme;
