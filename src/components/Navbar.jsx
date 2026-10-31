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
import { Menu as MenuIcon, Close as CloseIcon, ArrowForward, Phone, Email } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      const isScrolled = window.scrollY > 20;
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
        width: { xs: "85vw", sm: 320 },
        maxWidth: 340,
        height: "100%",
        backgroundColor: "#0B0E17",
        backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.15), transparent 70%)",
        color: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2.5,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            component="img"
            src="/maalgudi.png"
            alt="Maalgudi Technolabs"
            sx={{
              height: 32,
              width: 32,
              borderRadius: "6px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: "1.05rem",
              background: "linear-gradient(135deg, #FFFFFF 60%, #FF8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.01em",
            }}
          >
            Maalgudi Technolabs
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "#94A3B8",
            "&:hover": { color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.08)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Menu Items */}
      <List sx={{ py: 3, flex: 1 }}>
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem
              key={item.name}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                mb: 1.5,
                borderRadius: "10px",
                px: 2,
                py: 1.25,
                backgroundColor: active ? "rgba(255, 140, 0, 0.12)" : "transparent",
                border: active ? "1px solid rgba(255, 140, 0, 0.3)" : "1px solid transparent",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: active ? 700 : 500,
                    fontSize: "1.05rem",
                    color: active ? "#FF8C00" : "#F8FAFC",
                  },
                }}
              />
              {active && (
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#FF8C00",
                    boxShadow: "0 0 10px #FF8C00",
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>

      {/* Drawer Contact Info */}
      <Box
        sx={{
          pt: 3,
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Button
          component={Link}
          to="/contact"
          onClick={handleDrawerToggle}
          variant="contained"
          fullWidth
          sx={{
            py: 1.4,
            fontSize: "0.95rem",
            mb: 2,
            boxShadow: "0 4px 16px rgba(255, 140, 0, 0.3)",
          }}
        >
          Get in Touch
        </Button>
        <Typography
          variant="caption"
          sx={{ color: "#64748B", display: "block", textAlign: "center" }}
        >
          admin@malguditechnolabs.com
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(8, 9, 10, 0.88)"
            : "rgba(8, 9, 10, 0.7)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.04)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.8)"
            : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: "64px", md: "72px" },
              px: { xs: 2, sm: 1, md: 0 },
            }}
          >
            {/* Logo + Brand Name */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: 1.5,
                transition: "transform 0.25s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                component="img"
                src="/maalgudi.png"
                alt="Maalgudi Technolabs"
                sx={{
                  height: { xs: 34, sm: 38, md: 42 },
                  width: { xs: 34, sm: 38, md: 42 },
                  filter: "drop-shadow(0 2px 8px rgba(37, 99, 235, 0.3))",
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#FFFFFF",
                    fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.3rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Maalgudi{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Technolabs
                  </Box>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: { xs: "none", sm: "block" },
                    lineHeight: 1,
                  }}
                >
                  Innovate • Educate • Elevate
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links + CTA */}
            {!isMobile && (
              <Stack direction="row" spacing={1} alignItems="center">
                {menuItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: active ? "#FF8C00" : "#E2E8F0",
                        fontWeight: active ? 700 : 500,
                        px: 2.2,
                        py: 0.9,
                        borderRadius: "8px",
                        fontSize: "0.95rem",
                        backgroundColor: active
                          ? "rgba(255, 140, 0, 0.1)"
                          : "transparent",
                        border: active
                          ? "1px solid rgba(255, 140, 0, 0.3)"
                          : "1px solid transparent",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          color: "#FF8C00",
                          backgroundColor: "rgba(255, 140, 0, 0.08)",
                          borderColor: "rgba(255, 140, 0, 0.2)",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{
                    ml: 1.5,
                    px: 2.5,
                    py: 0.9,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                    boxShadow: "0 4px 15px rgba(255, 140, 0, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
                      boxShadow: "0 6px 20px rgba(255, 140, 0, 0.5)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#F8FAFC",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255, 140, 0, 0.15)",
                    borderColor: "rgba(255, 140, 0, 0.4)",
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
            width: { xs: "85vw", sm: 320 },
            maxWidth: 340,
            backgroundColor: "#0B0E17",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: { xs: "64px", md: "72px" } }} />
    </>
  );
};

export default Navbar;
