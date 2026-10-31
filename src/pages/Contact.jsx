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
  IconButton,
  Stack,
  CircularProgress,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Send,
  LinkedIn,
  Instagram,
  CheckCircle,
} from "@mui/icons-material";

const Contact = () => {
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

      await response.json();
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
      details: ["Maalgudi Technolabs", "Bangalore, Karnataka", "India"],
      accent: "#2563EB",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99453 46124"],
      accent: "#FF8C00",
    },
    {
      icon: Email,
      title: "Email Us",
      details: ["admin@malguditechnolabs.com"],
      accent: "#3B82F6",
    },
    {
      icon: AccessTime,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM"],
      accent: "#FFA500",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/maalgudi-technolabs-llp/",
      color: "#0A66C2",
    },
    {
      icon: <Instagram />,
      name: "Instagram",
      url: "https://www.instagram.com/maalgudi_technolabs?igsh=MTlxdGkyNjI2b2xicw==",
      color: "#E4405F",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            'linear-gradient(180deg, rgba(8, 9, 10, 0.8) 0%, rgba(8, 9, 10, 0.95) 100%), radial-gradient(ellipse at 50% 20%, rgba(37, 99, 235, 0.22) 0%, transparent 70%), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 10, md: 16 },
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
              px: 2.2,
              py: 0.8,
              backgroundColor: "rgba(255, 140, 0, 0.12)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px",
              border: "1px solid rgba(255, 140, 0, 0.35)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#FF8C00",
                boxShadow: "0 0 10px #FF8C00",
              }}
            />
            <Typography
              variant="overline"
              sx={{
                color: "#FFA500",
                fontWeight: 700,
                letterSpacing: "0.15em",
                fontSize: "0.82rem",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "2rem", sm: "3.2rem", md: "4.5rem" },
              letterSpacing: "-0.02em",
              color: "#F8FAFC",
            }}
          >
            Let's{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "750px",
              mx: "auto",
              color: "#CBD5E1",
              lineHeight: 1.8,
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
            }}
          >
            Connect with our expert team to explore strategic pathways for
            accelerating your technology career and professional growth.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#08090A" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#FF8C00",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                display: "block",
                mb: 1.5,
              }}
            >
              CONTACT INFORMATION
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "#F8FAFC",
                fontSize: { xs: "2rem", md: "2.8rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Get in{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
                <Grid item key={index} xs={12} sm={6} md={3} sx={{ display: "flex" }}>
                  <Card
                    elevation={0}
                    sx={{
                      width: "100%",
                      minHeight: 240,
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      borderRadius: "18px",
                      background: "rgba(17, 20, 28, 0.8)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      p: 3,
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${info.accent}, #FF8C00)`,
                        opacity: 0,
                        transition: "opacity 0.35s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(255, 140, 0, 0.4)",
                        boxShadow: "0 18px 40px -12px rgba(255, 140, 0, 0.25)",
                        "&::before": {
                          opacity: 1,
                        },
                        "& .contact-icon": {
                          transform: "scale(1.1)",
                          borderColor: "#FF8C00",
                          backgroundColor: "rgba(255, 140, 0, 0.15)",
                          color: "#FF8C00",
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 0,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        className="contact-icon"
                        sx={{
                          width: 62,
                          height: 62,
                          borderRadius: "14px",
                          backgroundColor: "rgba(37, 99, 235, 0.12)",
                          border: "1px solid rgba(37, 99, 235, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: info.accent,
                          mb: 2.5,
                          transition: "all 0.35s ease",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#F8FAFC",
                          fontSize: "1.1rem",
                          mb: 1.5,
                        }}
                      >
                        {info.title}
                      </Typography>

                      {info.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: "#94A3B8",
                            lineHeight: 1.6,
                            fontSize: "0.92rem",
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
          py: { xs: 8, md: 12 },
          backgroundColor: "#0B0E17",
          position: "relative",
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.08), transparent 70%)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#F8FAFC",
                mb: 1.5,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                letterSpacing: "-0.015em",
              }}
            >
              Send Us a{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Message
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: "#94A3B8" }}>
              Fill in the form below and we will get back to you shortly.
            </Typography>
          </Box>

          {showSuccess && (
            <Alert
              severity="success"
              sx={{
                mb: 3,
                borderRadius: "12px",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#34D399",
                border: "1px solid rgba(16, 185, 129, 0.3)",
              }}
              icon={<CheckCircle sx={{ color: "#34D399" }} />}
            >
              Thank you for your message! We'll get back to you within 24 hours.
            </Alert>
          )}

          {showError && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                borderRadius: "12px",
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                color: "#F87171",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              Failed to send message. Please try again or contact us directly.
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              background: "rgba(17, 20, 28, 0.8)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "20px",
              p: { xs: 3.5, sm: 5 },
              boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  placeholder="How can we help you?"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  endIcon={!loading && <Send />}
                  sx={{
                    py: 1.6,
                    fontSize: "1.05rem",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                    boxShadow: "0 6px 20px rgba(255, 140, 0, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
                      boxShadow: "0 8px 25px rgba(255, 140, 0, 0.5)",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: "#FFFFFF" }} />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Social Links Section */}
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#FF8C00",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                display: "block",
                mb: 2,
              }}
            >
              CONNECT ACROSS PLATFORMS
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#CBD5E1",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: social.color,
                      borderColor: social.color,
                      color: "#FFFFFF",
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
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
