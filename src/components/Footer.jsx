import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import {
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/newabout" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Software Development",
    "IoT",
    "Electronics & Embedded Systems",
    "AWS Services",
  ];

  const socialLinks = [
    {
      icon: <LinkedIn sx={{ fontSize: 20 }} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/maalgudi-technolabs-llp/",
      color: "#0A66C2",
    },
    {
      icon: <Instagram sx={{ fontSize: 20 }} />,
      name: "Instagram",
      url: "https://www.instagram.com/maalgudi_technolabs?igsh=MTlxdGkyNjI2b2xicw==",
      color: "#E4405F",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#050608",
        color: "#F8FAFC",
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #2563EB 30%, #FF8C00 70%, transparent 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 4 }} sx={{ mb: 6 }}>
          {/* Company Brand Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2.5,
              }}
            >
              <Box
                component="img"
                src="/maalgudi.png"
                alt="Maalgudi Technolabs"
                sx={{
                  height: 38,
                  width: 38,
                  borderRadius: "8px",
                  filter: "drop-shadow(0 2px 8px rgba(37, 99, 235, 0.3))",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.01em",
                }}
              >
                Maalgudi Technolabs
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#94A3B8",
                lineHeight: 1.75,
                mb: 3,
                fontSize: "0.92rem",
                maxWidth: "360px",
              }}
            >
              Delivering excellence in technology training and professional
              development. Empowering the next generation of tech leaders through
              industry-aligned curriculum and expert mentorship.
            </Typography>

            {/* Social Links */}
            <Stack direction="row" spacing={1.5}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    color: "#94A3B8",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: social.color,
                      borderColor: social.color,
                      color: "#FFFFFF",
                      transform: "translateY(-3px)",
                      boxShadow: `0 6px 16px ${social.color}40`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4} md={2.5}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#FF8C00",
                mb: 2.5,
                fontSize: "1.05rem",
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: "#94A3B8",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontSize: "0.92rem",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: "#FF8C00",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <ArrowForward sx={{ fontSize: "0.85rem", opacity: 0.7 }} />
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={4} md={2.5}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#FF8C00",
                mb: 2.5,
                fontSize: "1.05rem",
              }}
            >
              Our Services
            </Typography>
            <Stack spacing={1.5}>
              {services.map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: "#94A3B8",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.92rem",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#FF8C00",
                      mr: 1.5,
                      display: "inline-block",
                    }}
                  />
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#FF8C00",
                mb: 2.5,
                fontSize: "1.05rem",
              }}
            >
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOn sx={{ color: "#FF8C00", fontSize: 20, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, fontSize: "0.92rem" }}>
                  Maalgudi Technolabs
                  <br />
                  Bangalore, Karnataka
                  <br />
                  India
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Phone sx={{ color: "#FF8C00", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8", fontSize: "0.92rem" }}>
                  +91 99453 46124
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Email sx={{ color: "#FF8C00", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8", fontSize: "0.92rem" }}>
                  admin@malguditechnolabs.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)", mb: 3.5 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#64748B",
              textAlign: { xs: "center", md: "left" },
              fontSize: "0.88rem",
            }}
          >
            © {new Date().getFullYear()} Maalgudi Technolabs. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              sx={{
                color: "#64748B",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s ease",
                "&:hover": { color: "#FF8C00" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "#64748B",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s ease",
                "&:hover": { color: "#FF8C00" },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: "#64748B",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s ease",
                "&:hover": { color: "#FF8C00" },
              }}
            >
              Cookie Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
