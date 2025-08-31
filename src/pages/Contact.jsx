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

const Contact = () => {
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
        "Comprehensive technology training and certification courses",
      contact: "training@Maalgudi Technolabs.com",
    },
    {
      icon: <Business />,
      title: "Corporate Solutions",
      description: "Customized training solutions for organizations",
      contact: "corporate@Maalgudi Technolabs.com",
    },
    {
      icon: <ContactMail />,
      title: "Consultation",
      description: "Expert consultation for technology implementation",
      contact: "consulting@Maalgudi Technolabs.com",
    },
    {
      icon: <Support />,
      title: "Technical Support",
      description: "24/7 support for our students and clients",
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
            'linear-gradient(135deg, rgba(238, 164, 18, 0.9) 0%, rgba(245, 200, 66, 0.9) 100%), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: 15,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4rem", xl: "5rem" },
            }}
          >
            Contact{" "}
            <Box component="span" sx={{ color: "#fff" }}>
              Maalgudi Technolabs
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.95,
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.3rem", xl: "1.5rem" },
            }}
          >
            Ready to transform your career? Get in touch with our team and
            discover how we can help you achieve your technology goals.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Grid */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem", xl: "4rem" },
              }}
            >
              Get in{" "}
              <Box component="span" sx={{ color: "#eea412" }}>
                Touch
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              We're here to help you take the next step in your technology
              journey
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 0,
                    border: "1px solid #eee",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      "& .contact-icon": {
                        backgroundColor: "#eea412",
                        color: "white",
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="contact-icon"
                      sx={{
                        backgroundColor: "#f8f9fa",
                        color: info.color,
                        p: 2,
                        borderRadius: 0,
                        display: "inline-flex",
                        mb: 3,
                        fontSize: "2rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {info.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: "#333",
                        mb: 2,
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      {info.title}
                    </Typography>

                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        sx={{
                          color: "#666",
                          mb: 0.5,
                          fontSize: { xs: "0.9rem", md: "1rem" },
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
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Send Us a{" "}
                <Box component="span" sx={{ color: "#eea412" }}>
                  Message
                </Box>
              </Typography>

              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }} icon={<CheckCircle />}>
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                          borderRadius: 0,
                          "&:hover fieldset": {
                            borderColor: "#eea412",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#eea412",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#eea412",
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
                          borderRadius: 0,
                          "&:hover fieldset": {
                            borderColor: "#eea412",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#eea412",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#eea412",
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
                          borderRadius: 0,
                          "&:hover fieldset": {
                            borderColor: "#eea412",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#eea412",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#eea412",
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
                          borderRadius: 0,
                          "&:hover fieldset": {
                            borderColor: "#eea412",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#eea412",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#eea412",
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
                          borderRadius: 0,
                          "&:hover fieldset": {
                            borderColor: "#eea412",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#eea412",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#eea412",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        background:
                          "linear-gradient(45deg, #eea412 0%, #f5c842 100%)",
                        color: "#fff",
                        px: 4,
                        py: 2,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderRadius: 0,
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #d89e0b 0%, #eea412 100%)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Map/Location Info */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Visit Our{" "}
                <Box component="span" sx={{ color: "#eea412" }}>
                  Campus
                </Box>
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  height: 400,
                  background:
                    "linear-gradient(135deg, #eea412 0%, #f5c842 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  borderRadius: 0,
                  mb: 3,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <LocationOn sx={{ fontSize: "4rem", mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Interactive Map
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    Bangalore, Karnataka, India
                  </Typography>
                </Box>
              </Paper>

              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#333",
                    mb: 2,
                  }}
                >
                  Connect With Us
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        backgroundColor: social.color,
                        color: "white",
                        borderRadius: 0,
                        "&:hover": {
                          backgroundColor: social.color,
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 12px ${social.color}40`,
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
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  Follow us on social media for the latest updates, industry
                  insights, and success stories from our learning community.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Our{" "}
              <Box component="span" sx={{ color: "#eea412" }}>
                Services
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Specialized support for all your technology training and
              development needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 0,
                    border: "1px solid #eee",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      "& .service-icon": {
                        backgroundColor: "#eea412",
                        color: "white",
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
                          backgroundColor: "#f8f9fa",
                          color: "#eea412",
                          p: 2,
                          borderRadius: 0,
                          mr: 3,
                          fontSize: "2rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#333",
                            mb: 1,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#666",
                            lineHeight: 1.7,
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
                            backgroundColor: "#eea412",
                            color: "white",
                            fontWeight: 500,
                            "&:hover": {
                              backgroundColor: "#d89e0b",
                            },
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
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 3,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                mb: 4,
                lineHeight: 1.6,
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
                background: "linear-gradient(45deg, #eea412 0%, #f5c842 100%)",
                color: "#fff",
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #d89e0b 0%, #eea412 100%)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
