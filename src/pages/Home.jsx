import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  useTheme as useMuiTheme,
} from "@mui/material";
import {
  Engineering,
  Cloud,
  Memory,
  School,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";
import EventRegistrationForm from "../components/EventRegistrationForm";

const Home = () => {
  const theme = useMuiTheme();
  const { mode } = useTheme();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setRegistrationOpen(false);
    setSelectedEvent(null);
  };

  const heroSlides = [
    {
      title: "Transform Your Career in Technology",

      description:
        "Specialized training programs designed to elevate your skills and accelerate your professional growth in today's competitive technology landscape.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Get Started", variant: "contained" },
        { text: "Learn More", variant: "outlined" },
      ],
    },
    {
      title: "Our Mission",
      subtitle: "",
      description:
        "Delivering excellence in personality development, leadership training, technical expertise, and professional skills to create industry-ready technology professionals.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Contact Us", variant: "contained" },
        { text: "Read More", variant: "outlined" },
      ],
    },
    {
      title: "Excellence in Technical Education",
      subtitle: "",
      description:
        "Industry-aligned curriculum and expert mentorship designed to advance your technical capabilities and career trajectory.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Start Learning", variant: "contained" },
        { text: "Explore Courses", variant: "outlined" },
      ],
    },
    {
      title: "Innovation-Driven Learning",
      subtitle: "",
      description:
        "Hands-on practical training in cutting-edge technologies including IoT, cloud computing, and modern software development practices.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "View Programs", variant: "contained" },
        { text: "Schedule Demo", variant: "outlined" },
      ],
    },
  ];

  const services = [
    {
      icon: Engineering,
      title: "Software Development",
      description:
        "Master Java fundamentals, object-oriented programming concepts, Deep dive into Data Structures and Algorithms and build robust applications with industry-standard best practices.",
    },
    {
      icon: Memory,
      title: "IoT",
      description:
        "Explore IoT development with AWS IoT Core, device connectivity, real-time data processing, and cloud-based IoT solutions.",
    },
    {
      icon: Cloud,
      title: "Electronics & Embedded Systems",
      description:
        "Designing reliable hardware and intelligent embedded solutions that seamlessly integrate electronics with real-time software for efficient, scalable applications.",
    },
    {
      icon: School,
      title: "AWS Services",
      description:
        "Explore IoT development with AWS IoT Core, device connectivity, real-time data processing, and cloud-based IoT solutions.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section with Background Image */}
      <Box
        className="hero-section"
        sx={{
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          margin: "0 calc(-50vw + 50%)",
          left: "50%",
          right: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background Images with Crossfade */}
        {heroSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 0,
            }}
          />
        ))}
        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: { xs: 8, sm: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(37, 99, 235, 0.4)",
            color: "#2563EB",
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            backdropFilter: "blur(10px)",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.5)",
              color: "#FF8C00",
            },
            zIndex: 2,
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: { xs: 8, sm: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(37, 99, 235, 0.4)",
            color: "#2563EB",
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            backdropFilter: "blur(10px)",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.5)",
              color: "#FF8C00",
            },
            zIndex: 2,
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#F4FAFF",
              fontWeight: "bold",
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "4rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
              px: { xs: 2, sm: 0 },
            }}
          >
            {currentHero.title}
          </Typography>
          {currentHero.subtitle && (
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "#FF8C00",
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "1.25rem", sm: "1.8rem", md: "2.5rem" },
                lineHeight: { xs: 1.3, md: 1.2 },
                px: { xs: 2, sm: 0 },
              }}
            >
              {currentHero.subtitle}
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{
              color: "#F4FAFF",
              mb: { xs: 3, md: 4 },
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              lineHeight: { xs: 1.6, md: 1.8 },
              px: { xs: 3, sm: 2, md: 0 },
            }}
          >
            {currentHero.description}
          </Typography>
        </Container>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 30 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: { xs: 1.5, sm: 1 },
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            padding: { xs: "8px 16px", sm: "6px 12px" },
            borderRadius: 3,
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: { xs: 10, sm: 12 },
                height: { xs: 10, sm: 12 },
                borderRadius: "50%",
                backgroundColor:
                  currentSlide === index
                    ? "#FF8C00"
                    : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor:
                    currentSlide === index
                      ? "#FF8C00"
                      : "rgba(255, 255, 255, 0.8)",
                  transform: "scale(1.2)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: mode === "dark" ? "#000000" : "#FFFFFF",
          color: mode === "dark" ? "#FFFFFF" : "#000000",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: mode === "dark" ? "#FFFFFF" : "#000000",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our{" "}
              <Box component="span" sx={{ color: "#FF8C00" }}>
                Services
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: mode === "dark" ? "#B0B3B8" : "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Comprehensive training and development solutions tailored to your success
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 3,
              maxWidth: '1600px',
              margin: '0 auto',
              px: { xs: 2, md: 0 },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 280,
                  background: mode === "dark"
                    ? "rgba(10, 10, 10, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: `1px solid ${mode === "dark"
                    ? "rgba(37, 99, 235, 0.3)"
                    : "rgba(37, 99, 235, 0.2)"}`,
                  borderRadius: 3,
                  padding: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: mode === "dark"
                    ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                    : "0 4px 20px rgba(37, 99, 235, 0.15)",
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    borderColor: mode === "dark"
                      ? "rgba(255, 140, 0, 0.6)"
                      : "rgba(255, 140, 0, 0.4)",
                    boxShadow: mode === "dark"
                      ? "0 12px 40px rgba(255, 140, 0, 0.3)"
                      : "0 12px 40px rgba(255, 140, 0, 0.25)",
                    background: mode === "dark"
                      ? "rgba(10, 10, 10, 1)"
                      : "rgba(255, 255, 255, 1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <service.icon
                    sx={{
                      fontSize: 48,
                      color: "#FF8C00",
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: mode === "dark" ? "#F4FAFF" : "#08090A",
                    fontSize: '1.2rem',
                    minHeight: '2.4em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    mb: 2,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: mode === "dark" ? "#B0B3B8" : "#666",
                    lineHeight: 1.7,
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Events Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: mode === "dark" ? "#0A0A0A" : "#F8F9FA",
          color: mode === "dark" ? "#FFFFFF" : "#000000",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#FF8C00",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block",
              }}
            >
              WHAT'S HAPPENING
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: mode === "dark" ? "#FFFFFF" : "#000000",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Upcoming{" "}
              <Box component="span" sx={{ color: "#FF8C00" }}>
                Events
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: mode === "dark" ? "#B0B3B8" : "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              We will update soon with exciting workshops and training programs
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              py: 8,
              minHeight: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: mode === "dark" ? "#FF8C00" : "#2563EB",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Coming Soon
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: mode === "dark" ? "#B0B3B8" : "#666",
                maxWidth: "600px",
                fontSize: "1.1rem",
              }}
            >
              Stay tuned for our upcoming workshops, bootcamps, and technical training sessions.
              Subscribe to our newsletter or contact us to get notified about future events.
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#000000", // Always dark background
          color: "#FFFFFF", // Always light text
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              mb: 4,
              color: "#FF8C00", // Orange text
              fontWeight: "bold",
            }}
          >
            Elevate Your Professional Journey
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              mb: 4,
              color: "#FFFFFF", // Always light text
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Strategic learning pathways designed to accelerate your career growth and technical excellence.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                backgroundColor: "#FF8C00", // Orange button
                color: "#FFFFFF", // White text on button
                "&:hover": {
                  backgroundColor: "#FF6500",
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Event Registration Form */}
      <EventRegistrationForm
        open={registrationOpen}
        onClose={handleCloseRegistration}
        eventTitle={selectedEvent || ""}
      />
    </Box>
  );
};

export default Home;
