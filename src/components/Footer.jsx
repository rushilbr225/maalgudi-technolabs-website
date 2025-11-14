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
        "Java Programming",
        "DSA in Java",
        "Backend Development",
        "IoT & AWS Services",
        "Cloud Computing",
        "Technical Training",
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
                        ? "linear-gradient(180deg, #08090A 0%, #0D0E0F 100%)"
                        : "linear-gradient(180deg, #1a1b1c 0%, #08090A 100%)",
                color: "#F4FAFF",
                pt: 8,
                pb: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, #5DFDCB, transparent)",
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box
                                    component="img"
                                    src="/maalgudi.png"
                                    alt="Maalgudi Technolabs"
                                    sx={{
                                        height: "40px",
                                        width: "auto",
                                        mr: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        background: "linear-gradient(135deg, #7CC6FE 0%, #5DFDCB 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
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
                                }}
                            >
                                Delivering excellence in technology training and professional development.
                                Empowering the next generation of tech leaders through industry-aligned
                                curriculum and expert mentorship.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: "rgba(93, 253, 203, 0.1)",
                                            color: "#5DFDCB",
                                            border: "1px solid rgba(93, 253, 203, 0.2)",
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
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#5DFDCB",
                                mb: 3,
                                fontSize: "1.1rem",
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
                                            color: "#5DFDCB",
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
                                color: "#5DFDCB",
                                mb: 3,
                                fontSize: "1.1rem",
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
                                            color: "#5DFDCB",
                                        },
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            backgroundColor: "#5DFDCB",
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
                                color: "#5DFDCB",
                                mb: 3,
                                fontSize: "1.1rem",
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                                <LocationOn
                                    sx={{
                                        color: "#5DFDCB",
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
                                        color: "#5DFDCB",
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
                                        color: "#5DFDCB",
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
                        borderColor: "rgba(93, 253, 203, 0.1)",
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
                        }}
                    >
                        <Link
                            href="#"
                            sx={{
                                color: "#B0B3B8",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#5DFDCB",
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
                                fontSize: "0.9rem",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#5DFDCB",
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
                                fontSize: "0.9rem",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#5DFDCB",
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
                        "radial-gradient(circle, rgba(93, 253, 203, 0.08) 0%, transparent 70%)",
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
                        "radial-gradient(circle, rgba(124, 198, 254, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
};

export default Footer;
