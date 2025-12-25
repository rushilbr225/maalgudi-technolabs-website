import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
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
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { mode } = useTheme();
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
      icon: LocationOn,
      title: "Visit Our Campus",
      details: ["Maalgudi Technolabs", "Bangalore, Karnataka ", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99453 46124"],
    },
    {
      icon: Email,
      title: "Email Us",
      details: ["admin@malguditechnolabs.com"],
    },
    {
      icon: AccessTime,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: LinkedIn, name: "LinkedIn", url: "#", color: "#0077b5" },
    { icon: Twitter, name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: Facebook, name: "Facebook", url: "#", color: "#1877f2" },
    { icon: Instagram, name: "Instagram", url: "#", color: "#e4405f" },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#FF8C00",
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
              background: "linear-gradient(135deg, #FFFFFF 0%, #FF8C00 100%)",
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
            Connect with our expert team to explore strategic pathways for
            accelerating your technology career and professional growth.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Grid */}
      <Box
        sx={{
          py: 10,
          background:
            mode === "dark"
              ? "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)"
              : "linear-gradient(180deg, #F9FCFF 0%, #FFFFFF 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#FF8C00",
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
                color: mode === "dark" ? "#FFFFFF" : "#000000",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Get in{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #FF8C00 0%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Touch
              </Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      borderRadius: 3,
                      background:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.95)"
                          : "rgba(255, 255, 255, 0.95)",
                      border: `2px solid ${
                        mode === "dark"
                          ? "rgba(37, 99, 235, 0.2)"
                          : "rgba(37, 99, 235, 0.25)"
                      }`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: "rgba(255, 140, 0, 0.5)",
                        boxShadow: "0 12px 40px rgba(255, 140, 0, 0.2)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          backgroundColor:
                            mode === "dark"
                              ? "rgba(255, 140, 0, 0.1)"
                              : "rgba(255, 140, 0, 0.15)",
                          color: "#FF8C00",
                          p: 2.5,
                          borderRadius: 3,
                          display: "inline-flex",
                          mb: 3,
                          fontSize: "2.5rem",
                          transition: "all 0.4s ease",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 40 }} />
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: mode === "dark" ? "#FFFFFF" : "#000000",
                          mb: 2,
                        }}
                      >
                        {info.title}
                      </Typography>

                      {info.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body1"
                          sx={{
                            color: mode === "dark" ? "#B0B3B8" : "#555",
                            mb: 0.5,
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: mode === "dark" ? "#000000" : "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: mode === "dark" ? "#FFFFFF" : "#000000",
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              textAlign: "center",
            }}
          >
            Send Us a{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #FF8C00 0%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Message
            </Box>
          </Typography>

          {showSuccess && (
            <Alert
              severity="success"
              sx={{ mb: 3, maxWidth: 900, mx: "auto" }}
              icon={<CheckCircle />}
            >
              Thank you for your message! We'll get back to you within 24 hours.
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 900, mx: "auto" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.4)"
                          : "rgba(255, 255, 255, 0.8)",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 140, 0, 0.3)"
                            : "rgba(255, 140, 0, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF8C00",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF8C00",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#666",
                      "&.Mui-focused": {
                        color: "#FF8C00",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.4)"
                          : "rgba(255, 255, 255, 0.8)",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 140, 0, 0.3)"
                            : "rgba(255, 140, 0, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF8C00",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF8C00",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#666",
                      "&.Mui-focused": {
                        color: "#FF8C00",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.4)"
                          : "rgba(255, 255, 255, 0.8)",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 140, 0, 0.3)"
                            : "rgba(255, 140, 0, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF8C00",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF8C00",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#666",
                      "&.Mui-focused": {
                        color: "#FF8C00",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.4)"
                          : "rgba(255, 255, 255, 0.8)",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 140, 0, 0.3)"
                            : "rgba(255, 140, 0, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF8C00",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF8C00",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#666",
                      "&.Mui-focused": {
                        color: "#FF8C00",
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
                  placeholder="Enter your message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(10, 10, 10, 0.4)"
                          : "rgba(255, 255, 255, 0.8)",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 140, 0, 0.3)"
                            : "rgba(255, 140, 0, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF8C00",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF8C00",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#666",
                      "&.Mui-focused": {
                        color: "#FF8C00",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      background:
                        "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                      color: "#FFFFFF",
                      px: 6,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: "0 8px 30px rgba(255, 140, 0, 0.4)",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #1E40AF 0%, #FF6500 100%)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 40px rgba(255, 140, 0, 0.6)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Social Links Section */}
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: mode === "dark" ? "#FFFFFF" : "#000000",
                mb: 3,
              }}
            ></Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
