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
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  // AWS API Gateway endpoint URL
  const API_ENDPOINT =
    "https://7zmrj9690j.execute-api.eu-north-1.amazonaws.com/prod/send-email";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setLoading(false);
    }
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

          <Grid container spacing={3} justifyContent="center">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{ display: "flex" }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "100%",
                      minHeight: 240,
                      display: "flex",
                      flexDirection: "column",
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
                    <CardContent
                      sx={{
                        p: 3,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor:
                            mode === "dark"
                              ? "rgba(255, 140, 0, 0.1)"
                              : "rgba(255, 140, 0, 0.15)",
                          color: "#FF8C00",
                          width: 80,
                          height: 80,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 2,
                          mb: 2,
                          transition: "all 0.4s ease",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 36 }} />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: mode === "dark" ? "#FFFFFF" : "#000000",
                          mb: 1.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {info.title}
                      </Typography>

                      {info.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: mode === "dark" ? "#B0B3B8" : "#555",
                            mb: 0.5,
                            fontSize: "0.9rem",
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

          {showError && (
            <Alert severity="error" sx={{ mb: 3, maxWidth: 900, mx: "auto" }}>
              Failed to send message. Please try again or contact us directly.
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 1000, mx: "auto" }}
          >
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "#FFFFFF",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "#BDBDBD",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: mode === "dark" ? "#FF8C00" : "#000000",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#757575",
                      "&.Mui-focused": {
                        color: mode === "dark" ? "#FF8C00" : "#000000",
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
                  label="Email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "#FFFFFF",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "#BDBDBD",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: mode === "dark" ? "#FF8C00" : "#000000",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#757575",
                      "&.Mui-focused": {
                        color: mode === "dark" ? "#FF8C00" : "#000000",
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
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "#FFFFFF",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "#BDBDBD",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: mode === "dark" ? "#FF8C00" : "#000000",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#757575",
                      "&.Mui-focused": {
                        color: mode === "dark" ? "#FF8C00" : "#000000",
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
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "#FFFFFF",
                      color: mode === "dark" ? "#FFFFFF" : "#000000",
                      "& fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "#BDBDBD",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: mode === "dark" ? "#FF8C00" : "#000000",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: mode === "dark" ? "#B0B3B8" : "#757575",
                      "&.Mui-focused": {
                        color: mode === "dark" ? "#FF8C00" : "#000000",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    background: mode === "dark" ? "#FFFFFF" : "#000000",
                    color: mode === "dark" ? "#000000" : "#FFFFFF",
                    py: 1.75,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    borderRadius: 0,
                    textTransform: "none",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: mode === "dark" ? "#F0F0F0" : "#1A1A1A",
                      boxShadow: "none",
                    },
                    "&:disabled": {
                      background: "rgba(128, 128, 128, 0.3)",
                      color: "rgba(255, 255, 255, 0.5)",
                    },
                  }}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
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
