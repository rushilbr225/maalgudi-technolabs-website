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
    Twitter,
    Facebook,
    Instagram,
    Email,
    Phone,
    LocationOn,
    ArrowForward,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
    const { mode } = useTheme();

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
        { icon: <LinkedIn />, name: "LinkedIn", url: "#", color: "#0077b5" },
        { icon: <Twitter />, name: "Twitter", url: "#", color: "#1da1f2" },
        { icon: <Facebook />, name: "Facebook", url: "#", color: "#1877f2" },
        { icon: <Instagram />, name: "Instagram", url: "#", color: "#e4405f" },
    ];

    return (
        <Box
            component="footer"
            sx={{
                background:
                    mode === "dark"
                        ? "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)"
                        : "linear-gradient(180deg, #1A1A1A 0%, #000000 100%)",
                color: "#FFFFFF",
                pt: 8,
                pb: 3,
                position: "relative",
                overflow: "hidden",
                px: { xs: 2, sm: 3, md: 0 },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, #FF8C00, transparent)",
                },
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 3 } }}>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {/* Company Info */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2, flexWrap: "wrap" }}>
                                <Box
                                    component="img"
                                    src="/maalgudi.png"
                                    alt="Maalgudi Technolabs"
                                    sx={{
                                        height: { xs: "20px", sm: "30px", md: "40px" },
                                        width: { xs: "20px", sm: "30px", md: "40px" },
                                        mr: { xs: 1, sm: 2 },
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        fontSize: { xs: "0.85rem", sm: "1.05rem", md: "1.25rem" },
                                    }}
                                >
                                    Maalgudi Technolabs
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#B0B3B8",
                                    lineHeight: 1.8,
                                    mb: 3,
                                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                                }}
                            >
                                Delivering excellence in technology training and professional development.
                                Empowering the next generation of tech leaders through industry-aligned
                                curriculum and expert mentorship.
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                                {socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: "rgba(255, 140, 0, 0.1)",
                                            color: "#FF8C00",
                                            border: "1px solid rgba(255, 140, 0, 0.2)",
                                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            "&:hover": {
                                                backgroundColor: social.color,
                                                borderColor: social.color,
                                                color: "#FFF",
                                                transform: "translateY(-4px)",
                                                boxShadow: `0 8px 20px ${social.color}40`,
                                            },
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#FF8C00",
                                mb: 3,
                                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                                mt: { xs: 2, md: 0 },
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
                                        color: "#B0B3B8",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        transition: "all 0.3s ease",
                                        fontSize: "0.95rem",
                                        "&:hover": {
                                            color: "#FF8C00",
                                            transform: "translateX(5px)",
                                            "& .arrow-icon": {
                                                opacity: 1,
                                                transform: "translateX(3px)",
                                            },
                                        },
                                    }}
                                >
                                    <ArrowForward
                                        className="arrow-icon"
                                        sx={{
                                            fontSize: "1rem",
                                            mr: 1,
                                            opacity: 0,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Services */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#FF8C00",
                                mb: 3,
                                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                                mt: { xs: 2, md: 0 },
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
                                        color: "#B0B3B8",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "0.95rem",
                                        "&:hover": {
                                            color: "#FF8C00",
                                        },
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
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#FF8C00",
                                mb: 3,
                                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                                mt: { xs: 2, md: 0 },
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                                <LocationOn
                                    sx={{
                                        color: "#FF8C00",
                                        fontSize: "1.2rem",
                                        mr: 1.5,
                                        mt: 0.3,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#B0B3B8",
                                        lineHeight: 1.7,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Maalgudi Technolabs
                                    <br />
                                    Bangalore, Karnataka
                                    <br />
                                    India
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Phone
                                    sx={{
                                        color: "#FF8C00",
                                        fontSize: "1.2rem",
                                        mr: 1.5,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#B0B3B8",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    +91 9876543210
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Email
                                    sx={{
                                        color: "#FF8C00",
                                        fontSize: "1.2rem",
                                        mr: 1.5,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#B0B3B8",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    info@maalgudi.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        borderColor: "rgba(255, 140, 0, 0.1)",
                        mb: 3,
                    }}
                />

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
                            color: "#B0B3B8",
                            textAlign: { xs: "center", md: "left" },
                            fontSize: "0.9rem",
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
                            gap: { xs: 1, sm: 0 },
                        }}
                    >
                        <Link
                            href="#"
                            sx={{
                                color: "#B0B3B8",
                                textDecoration: "none",
                                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#FF8C00",
                                },
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                color: "#B0B3B8",
                                textDecoration: "none",
                                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#FF8C00",
                                },
                            }}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                color: "#B0B3B8",
                                textDecoration: "none",
                                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#FF8C00",
                                },
                            }}
                        >
                            Cookie Policy
                        </Link>
                    </Stack>
                </Box>
            </Container>

            {/* Decorative Elements */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "300px",
                    height: "300px",
                    background:
                        "radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: "200px",
                    height: "200px",
                    background:
                        "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
};

export default Footer;
