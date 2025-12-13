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
    { name: "Blogs", path: "/blogs" },
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
            src="/maalgudi.png"
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
              color: "#2563EB",
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
                backgroundColor: "rgba(37, 99, 235, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: isActive(item.path) ? 600 : 400,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  color: isActive(item.path) ? "#2563EB" : "#333",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(8, 9, 10, 0.95)"
            : "rgba(8, 9, 10, 0.98)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
          borderBottom: scrolled
            ? "1px solid rgba(93, 253, 203, 0.2)"
            : "1px solid rgba(124, 198, 254, 0.15)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(93, 253, 203, 0.1)"
            : "0 4px 16px rgba(0, 0, 0, 0.3)",
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
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "drop-shadow(0 0 8px rgba(93, 253, 203, 0.6))",
                  "& img": {
                    filter: "brightness(1.2)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src="/maalgudi.png"
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
                  color: "#FFFFFF",
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
                      color: isActive(item.path) ? "#FF8C00" : "#FFFFFF",
                      fontWeight: isActive(item.path) ? 600 : 400,
                      px: 3,
                      py: 2,
                      borderRadius: 0,
                      textTransform: "none",
                      fontSize: { xs: "1rem", xl: "1.1rem" },
                      position: "relative",
                      "&:hover": {
                        color: "#FF8C00",
                        backgroundColor: "rgba(255, 140, 0, 0.1)",
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
                          background:
                            "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                        }
                        : {},
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#e0e0e0",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 140, 0, 0.15)",
                    color: "#FF8C00",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
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
