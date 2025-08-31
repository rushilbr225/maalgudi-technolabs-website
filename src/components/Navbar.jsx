import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
  Container,
  Stack,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, darkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/newabout" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        width: { xs: 250, sm: 280 },
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/maalgudi.jpeg"
            alt="Maalgudi Technolabs"
            sx={{
              height: "30px",
              width: "auto",
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#7CC6FE",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            Maalgudi Technolabs
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#333" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ px: { xs: 1, sm: 2 } }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              mb: 1,
              textDecoration: "none",
              color: "#333",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "rgba(124, 198, 254, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: isActive(item.path) ? 600 : 400,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  color: isActive(item.path) ? "#7CC6FE" : "#333",
                },
              }}
            />
          </ListItem>
        ))}
        
        {/* Dark Mode Toggle in Mobile Drawer */}
        <ListItem sx={{ justifyContent: "center", mt: 2 }}>
          <DarkModeToggle 
            sx={{ 
              color: "#333",
              "&:hover": {
                backgroundColor: "rgba(124, 198, 254, 0.1)",
                color: "#7CC6FE",
              },
            }} 
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(8, 9, 10, 0.98)" : "#08090A",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: "1px solid rgba(124, 198, 254, 0.3)",
          transition: "all 0.3s ease",
          boxShadow: scrolled
            ? "0 2px 10px rgba(0,0,0,0.3)"
            : "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0, py: 1, justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src="/maalgudi.jpeg"
                alt="Maalgudi Technolabs"
                sx={{
                  height: { xs: "35px", md: "40px", xl: "45px" },
                  width: "auto",
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#F4FAFF",
                  ml: 2,
                  fontSize: { xs: "1.1rem", md: "1.3rem", xl: "1.5rem" },
                  transition: "all 0.3s ease",
                }}
              >
                Maalgudi Technolabs
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Stack direction="row" spacing={0} alignItems="center">
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive(item.path) ? "#5DFDCB" : "#F4FAFF",
                      fontWeight: isActive(item.path) ? 600 : 400,
                      px: 3,
                      py: 2,
                      borderRadius: 0,
                      textTransform: "none",
                      fontSize: { xs: "1rem", xl: "1.1rem" },
                      position: "relative",
                      "&:hover": {
                        color: "#5DFDCB",
                        backgroundColor: "rgba(93, 253, 203, 0.1)",
                      },
                      "&::after": isActive(item.path)
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%",
                            height: "3px",
                            background: "linear-gradient(45deg, #7CC6FE 0%, #5DFDCB 100%)",
                          }
                        : {},
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                {/* Dark Mode Toggle */}
                <DarkModeToggle sx={{ ml: 2 }} />
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Stack direction="row" spacing={1} alignItems="center">
                <DarkModeToggle />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: "#e0e0e0",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(93, 253, 203, 0.1)",
                      color: "#5DFDCB",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: 250, sm: 280 },
            backgroundColor: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
