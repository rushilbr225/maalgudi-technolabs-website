import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Divider,
  IconButton,
  Chip,
  Alert,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Send,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
  ContactMail,
  Business,
  School,
  Support,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme, darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: "Visit Our Campus",
      details: ["Maalgudi Technolabs", "Bangalore, Karnataka 560001", "India"],
      color: "#eea412",
    },
    {
      icon: <Phone />,
      title: "Call Us",
      details: [
        "+91 9876543210",
        "+91 8765432109",
        "Mon-Fri 9:00 AM - 6:00 PM",
      ],
      color: "#eea412",
    },
    {
      icon: <Email />,
      title: "Email Us",
      details: [
        "info@Maalgudi Technolabs.com",
        "admissions@Maalgudi Technolabs.com",
        "support@Maalgudi Technolabs.com",
      ],
      color: "#eea412",
    },
    {
      icon: <AccessTime />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      color: "#eea412",
    },
  ];

  const services = [
    {
      icon: <School />,
      title: "Training Programs",
      description:
        "Specialized technology training with industry-recognized certification pathways",
      contact: "training@Maalgudi Technolabs.com",
    },
    {
      icon: <Business />,
      title: "Corporate Solutions",
      description: "Enterprise-level training programs tailored to organizational objectives",
      contact: "corporate@Maalgudi Technolabs.com",
    },
    {
      icon: <ContactMail />,
      title: "Consultation",
      description: "Strategic guidance for optimal technology adoption and implementation",
      contact: "consulting@Maalgudi Technolabs.com",
    },
    {
      icon: <Support />,
      title: "Technical Support",
      description: "Continuous support services ensuring seamless learning experiences",
      contact: "support@Maalgudi Technolabs.com",
    },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, name: "LinkedIn", url: "#", color: "#0077b5" },
    { icon: <Twitter />, name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: <Facebook />, name: "Facebook", url: "#", color: "#1877f2" },
    { icon: <Instagram />, name: "Instagram", url: "#", color: "#e4405f" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            'linear-gradient(135deg, rgba(8, 9, 10, 0.85) 0%, rgba(13, 14, 15, 0.9) 100%), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(93, 253, 203, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(124, 198, 254, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#5DFDCB",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: 3,
              mb: 2,
              display: "block",
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4rem" },
              background: "linear-gradient(135deg, #F4FAFF 0%, #5DFDCB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: "#B0B3B8",
              lineHeight: 1.8,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 400,
            }}
          >
            Connect with our expert team to explore strategic pathways for accelerating your technology career and professional growth.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Grid */}
      <Box
        sx={{
          py: 10,
          background:
            darkMode
              ? "linear-gradient(180deg, #08090A 0%, #0D0E0F 100%)"
              : "linear-gradient(180deg, #F9FCFF 0%, #F4FAFF 100%)",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#5DFDCB",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              CONTACT INFORMATION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: darkMode ? "#F4FAFF" : "#08090A",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Get in{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Touch
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? "#B0B3B8" : "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Expert support for advancing your technology capabilities and professional objectives
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index} sx={{ display: 'flex' }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    background: darkMode
                      ? "rgba(26, 27, 28, 0.6)"
                      : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `2px solid ${darkMode
                      ? "rgba(93, 253, 203, 0.15)"
                      : "rgba(93, 253, 203, 0.2)"}`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "rgba(93, 253, 203, 0.5)",
                      boxShadow: "0 12px 40px rgba(93, 253, 203, 0.2)",
                      "& .contact-icon": {
                        background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                        color: "#08090A",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="contact-icon"
                      sx={{
                        backgroundColor: darkMode
                          ? "rgba(93, 253, 203, 0.1)"
                          : "rgba(93, 253, 203, 0.15)",
                        color: "#5DFDCB",
                        p: 2.5,
                        borderRadius: 3,
                        display: "inline-flex",
                        mb: 3,
                        fontSize: "2.5rem",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        border: "2px solid rgba(93, 253, 203, 0.2)",
                      }}
                    >
                      {info.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: darkMode ? "#F4FAFF" : "#08090A",
                        mb: 2,
                        fontSize: { xs: "1.3rem", md: "1.4rem" },
                      }}
                    >
                      {info.title}
                    </Typography>

                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        sx={{
                          color: darkMode ? "#B0B3B8" : "#555",
                          mb: 0.5,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          fontWeight: 500,
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form & Map Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: darkMode ? "#08090A" : "white",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: darkMode ? "#F4FAFF" : "#08090A",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  textAlign: 'center',
                }}
              >
                Send Us a{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Message
                </Box>
              </Typography>

              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }} icon={<CheckCircle />}>
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, maxWidth: '900px', mx: 'auto' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          color: darkMode ? "#F4FAFF" : "#08090A",
                          "& fieldset": {
                            borderColor: darkMode
                              ? "rgba(93, 253, 203, 0.3)"
                              : "rgba(93, 253, 203, 0.4)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5DFDCB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5DFDCB",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: darkMode ? "#B0B3B8" : "#666",
                          "&.Mui-focused": {
                            color: "#5DFDCB",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          color: darkMode ? "#F4FAFF" : "#08090A",
                          "& fieldset": {
                            borderColor: darkMode
                              ? "rgba(93, 253, 203, 0.3)"
                              : "rgba(93, 253, 203, 0.4)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5DFDCB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5DFDCB",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: darkMode ? "#B0B3B8" : "#666",
                          "&.Mui-focused": {
                            color: "#5DFDCB",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          color: darkMode ? "#F4FAFF" : "#08090A",
                          "& fieldset": {
                            borderColor: darkMode
                              ? "rgba(93, 253, 203, 0.3)"
                              : "rgba(93, 253, 203, 0.4)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5DFDCB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5DFDCB",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: darkMode ? "#B0B3B8" : "#666",
                          "&.Mui-focused": {
                            color: "#5DFDCB",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          color: darkMode ? "#F4FAFF" : "#08090A",
                          "& fieldset": {
                            borderColor: darkMode
                              ? "rgba(93, 253, 203, 0.3)"
                              : "rgba(93, 253, 203, 0.4)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5DFDCB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5DFDCB",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: darkMode ? "#B0B3B8" : "#666",
                          "&.Mui-focused": {
                            color: "#5DFDCB",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          color: darkMode ? "#F4FAFF" : "#08090A",
                          "& fieldset": {
                            borderColor: darkMode
                              ? "rgba(93, 253, 203, 0.3)"
                              : "rgba(93, 253, 203, 0.4)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5DFDCB",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5DFDCB",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: darkMode ? "#B0B3B8" : "#666",
                          "&.Mui-focused": {
                            color: "#5DFDCB",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          background:
                            "linear-gradient(45deg, #7CC6FE 0%, #5DFDCB 100%)",
                          color: "#08090A",
                          px: 6,
                          py: 2.5,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          borderRadius: 3,
                          boxShadow: "0 8px 30px rgba(93, 253, 203, 0.3)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #5bb1fe 0%, #3ffcc1 100%)",
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 40px rgba(93, 253, 203, 0.4)",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Map/Location Info */}
            <Grid item xs={12}>
              <Box sx={{ maxWidth: '900px', mx: 'auto', mt: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: darkMode ? "#F4FAFF" : "#08090A",
                    mb: 3,
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    textAlign: 'center',
                  }}
                >
                  Visit Our{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Campus
                  </Box>
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    height: 400,
                    background:
                      "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#08090A",
                    borderRadius: 3,
                    mb: 3,
                    border: "3px solid rgba(255, 255, 255, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                    },
                  }}
                >
                  <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <LocationOn sx={{ fontSize: "4.5rem", mb: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      Interactive Map
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Bangalore, Karnataka, India
                    </Typography>
                  </Box>
                </Paper>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: darkMode ? "#F4FAFF" : "#08090A",
                      mb: 2,
                    }}
                  >
                    Connect With Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mb: 3, justifyContent: 'center' }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        sx={{
                          backgroundColor: darkMode
                            ? "rgba(93, 253, 203, 0.1)"
                            : "rgba(93, 253, 203, 0.15)",
                          color: social.color,
                          borderRadius: 2,
                          border: `2px solid ${social.color}40`,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            backgroundColor: social.color,
                            color: "white",
                            transform: "translateY(-4px) rotate(5deg)",
                            boxShadow: `0 8px 20px ${social.color}50`,
                            borderColor: social.color,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#B0B3B8" : "#666",
                      lineHeight: 1.8,
                      textAlign: 'center',
                    }}
                  >
                    Stay connected for expert insights, industry updates, and success stories from our professional learning community.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 10,
          background: darkMode
            ? "linear-gradient(180deg, #0D0E0F 0%, #08090A 100%)"
            : "linear-gradient(180deg, #F4FAFF 0%, #F9FCFF 100%)",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#5DFDCB",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              WHAT WE OFFER
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: darkMode ? "#F4FAFF" : "#08090A",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? "#B0B3B8" : "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Comprehensive solutions addressing diverse technology training and professional development requirements
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    background: darkMode
                      ? "rgba(26, 27, 28, 0.6)"
                      : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `2px solid ${darkMode
                      ? "rgba(93, 253, 203, 0.15)"
                      : "rgba(93, 253, 203, 0.2)"}`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "rgba(93, 253, 203, 0.5)",
                      boxShadow: "0 12px 40px rgba(93, 253, 203, 0.2)",
                      "& .service-icon": {
                        background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                        color: "#08090A",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                    >
                      <Box
                        className="service-icon"
                        sx={{
                          backgroundColor: darkMode
                            ? "rgba(93, 253, 203, 0.1)"
                            : "rgba(93, 253, 203, 0.15)",
                          color: "#5DFDCB",
                          p: 2,
                          borderRadius: 2,
                          mr: 3,
                          fontSize: "2rem",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          border: "2px solid rgba(93, 253, 203, 0.2)",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: darkMode ? "#F4FAFF" : "#08090A",
                            mb: 1,
                            fontSize: { xs: "1.3rem", md: "1.4rem" },
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: darkMode ? "#B0B3B8" : "#555",
                            lineHeight: 1.8,
                            mb: 2,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Chip
                          icon={<Email />}
                          label={service.contact}
                          size="small"
                          sx={{
                            background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                            color: "#08090A",
                            fontWeight: 600,
                            border: "none",
                            "&:hover": {
                              background: "linear-gradient(135deg, #4AE3B2 0%, #5bb1fe 100%)",
                              transform: "scale(1.05)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ or Additional Info Section */}
      <Box
        sx={{
          py: 12,
          background: darkMode
            ? "linear-gradient(135deg, #08090A 0%, #0D0E0F 100%)"
            : "linear-gradient(135deg, #F4FAFF 0%, #FFF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#5DFDCB",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              JOIN US TODAY
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: darkMode ? "#F4FAFF" : "#08090A",
                mb: 3,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Ready to Get{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Started?
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? "#B0B3B8" : "#666",
                mb: 5,
                lineHeight: 1.8,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Join thousands of professionals who have transformed their careers
              with Maalgudi Technolabs. Take the first step towards your
              technology goals today.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #5DFDCB 0%, #7CC6FE 100%)",
                color: "#08090A",
                px: 7,
                py: 2.5,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: 3,
                textTransform: "uppercase",
                letterSpacing: 1,
                boxShadow: "0 8px 30px rgba(93, 253, 203, 0.3)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #4AE3B2 0%, #5bb1fe 100%)",
                  transform: "translateY(-4px) scale(1.05)",
                  boxShadow: "0 12px 40px rgba(93, 253, 203, 0.4)",
                },
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Container>

        {/* Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(93, 253, 203, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(124, 198, 254, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
