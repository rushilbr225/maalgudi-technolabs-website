import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import {
  Engineering,
  Cloud,
  Memory,
  School,
  ChevronLeft,
  ChevronRight,
  ArrowForward,
} from "@mui/icons-material";
import EventRegistrationForm from "../components/EventRegistrationForm";

const Home = () => {
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
      subtitle: "",
      description:
        "Specialized training programs designed to elevate your skills and accelerate your professional growth in today's competitive technology landscape.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      primaryBtn: { text: "Get Started", action: () => navigate("/contact") },
      secondaryBtn: { text: "Learn More", action: () => navigate("/about") },
    },
    {
      title: "Our Mission",
      subtitle: "",
      description:
        "Delivering excellence in personality development, leadership training, technical expertise, and professional skills to create industry-ready technology professionals.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      primaryBtn: { text: "Contact Us", action: () => navigate("/contact") },
      secondaryBtn: { text: "Read More", action: () => navigate("/about") },
    },
    {
      title: "Excellence in Technical Education",
      subtitle: "",
      description:
        "Industry-aligned curriculum and expert mentorship designed to advance your technical capabilities and career trajectory.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      primaryBtn: { text: "Start Learning", action: () => navigate("/contact") },
      secondaryBtn: { text: "Explore Courses", action: () => navigate("/about") },
    },
    {
      title: "Innovation-Driven Learning",
      subtitle: "",
      description:
        "Hands-on practical training in cutting-edge technologies including IoT, cloud computing, and modern software development practices.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      primaryBtn: { text: "View Programs", action: () => navigate("/newabout") },
      secondaryBtn: { text: "Schedule Demo", action: () => navigate("/contact") },
    },
  ];

  const services = [
    {
      icon: Engineering,
      title: "Software Development",
      description:
        "Master Java fundamentals, object-oriented programming concepts, Deep dive into Data Structures and Algorithms and build robust applications with industry-standard best practices.",
      accent: "#2563EB",
    },
    {
      icon: Memory,
      title: "IoT",
      description:
        "Explore IoT development with AWS IoT Core, device connectivity, real-time data processing, and cloud-based IoT solutions.",
      accent: "#FF8C00",
    },
    {
      icon: Cloud,
      title: "Electronics & Embedded Systems",
      description:
        "Designing reliable hardware and intelligent embedded solutions that seamlessly integrate electronics with real-time software for efficient, scalable applications.",
      accent: "#3B82F6",
    },
    {
      icon: School,
      title: "AWS Services",
      description:
        "Explore IoT development with AWS IoT Core, device connectivity, real-time data processing, and cloud-based IoT solutions.",
      accent: "#F97316",
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section with Crossfading Backgrounds */}
      <Box
        sx={{
          minHeight: { xs: "86vh", md: "92vh" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Images with Crossfade and Ambient Gradient */}
        {heroSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(180deg, rgba(8, 9, 10, 0.72) 0%, rgba(8, 9, 10, 0.88) 100%), radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, rgba(8, 9, 10, 0.85) 75%), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? "scale(1)" : "scale(1.05)",
              transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.2, 0, 0.2, 1)",
              zIndex: 0,
            }}
          />
        ))}

        {/* Ambient Top & Bottom Vignettes */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(8, 9, 10, 0.5) 0%, transparent 20%, transparent 80%, rgba(8, 9, 10, 1) 100%)",
            zIndex: 1,
          }}
        />

        {/* Navigation Arrows - Hidden on mobile to prevent overlapping text */}
        <IconButton
          onClick={prevSlide}
          aria-label="Previous Slide"
          sx={{
            position: "absolute",
            left: { xs: 12, sm: 28, md: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(17, 20, 28, 0.65)",
            color: "#F8FAFC",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            width: { xs: 42, sm: 50 },
            height: { xs: 42, sm: 50 },
            backdropFilter: "blur(12px)",
            display: { xs: "none", md: "flex" },
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.25)",
              borderColor: "#FF8C00",
              color: "#FF8C00",
              transform: "translateY(-50%) scale(1.08)",
            },
            zIndex: 3,
          }}
        >
          <ChevronLeft fontSize="medium" />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          aria-label="Next Slide"
          sx={{
            position: "absolute",
            right: { xs: 12, sm: 28, md: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(17, 20, 28, 0.65)",
            color: "#F8FAFC",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            width: { xs: 42, sm: 50 },
            height: { xs: 42, sm: 50 },
            backdropFilter: "blur(12px)",
            display: { xs: "none", md: "flex" },
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.25)",
              borderColor: "#FF8C00",
              color: "#FF8C00",
              transform: "translateY(-50%) scale(1.08)",
            },
            zIndex: 3,
          }}
        >
          <ChevronRight fontSize="medium" />
        </IconButton>

        {/* Hero Content Container */}
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            zIndex: 2,
            position: "relative",
            py: { xs: 8, md: 12 },
          }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.2,
              py: 0.8,
              mb: { xs: 2.5, md: 3.5 },
              borderRadius: "50px",
              backgroundColor: "rgba(255, 140, 0, 0.12)",
              border: "1px solid rgba(255, 140, 0, 0.35)",
              backdropFilter: "blur(12px)",
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
              variant="caption"
              sx={{
                color: "#FFA500",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
              }}
            >
              Industry-Grade Education & Consulting
            </Typography>
          </Box>

          {/* Main Title */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "#F8FAFC",
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "1.85rem", sm: "2.8rem", md: "4.2rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
              maxWidth: "1000px",
              mx: "auto",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              px: { xs: 1, sm: 0 },
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
                fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
                fontWeight: 700,
              }}
            >
              {currentHero.subtitle}
            </Typography>
          )}

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#CBD5E1",
              mb: { xs: 3.5, md: 5 },
              maxWidth: "760px",
              mx: "auto",
              fontSize: { xs: "0.95rem", sm: "1.08rem", md: "1.25rem" },
              lineHeight: { xs: 1.6, md: 1.7 },
              px: { xs: 1.5, sm: 0 },
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            {currentHero.description}
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "auto" }, maxWidth: "400px", mx: "auto" }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={currentHero.primaryBtn.action}
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 4,
                py: { xs: 1.3, sm: 1.5 },
                fontSize: "1rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                boxShadow: "0 8px 25px rgba(255, 140, 0, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
                  boxShadow: "0 10px 30px rgba(255, 140, 0, 0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {currentHero.primaryBtn.text}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={currentHero.secondaryBtn.action}
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 4,
                py: { xs: 1.3, sm: 1.5 },
                fontSize: "1rem",
                borderRadius: "10px",
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#F8FAFC",
                backgroundColor: "rgba(17, 20, 28, 0.4)",
                backdropFilter: "blur(8px)",
                "&:hover": {
                  borderColor: "#FF8C00",
                  backgroundColor: "rgba(255, 140, 0, 0.12)",
                  color: "#FF8C00",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {currentHero.secondaryBtn.text}
            </Button>
          </Stack>
        </Container>

        {/* Modern Pill Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 32 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1.2,
            zIndex: 3,
            backgroundColor: "rgba(17, 20, 28, 0.7)",
            backdropFilter: "blur(12px)",
            padding: "8px 16px",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: currentSlide === index ? 28 : 10,
                height: 8,
                borderRadius: "50px",
                backgroundColor:
                  currentSlide === index
                    ? "#FF8C00"
                    : "rgba(255, 255, 255, 0.3)",
                boxShadow:
                  currentSlide === index ? "0 0 10px #FF8C00" : "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor:
                    currentSlide === index
                      ? "#FF8C00"
                      : "rgba(255, 255, 255, 0.6)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          position: "relative",
          backgroundColor: "#08090A",
        }}
      >
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
              WHAT WE OFFER
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "#F8FAFC",
                mb: 2,
                fontSize: { xs: "2.2rem", md: "3rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94A3B8",
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Comprehensive training and development solutions tailored to your success
            </Typography>
          </Box>

          {/* Services Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  background: "rgba(17, 20, 28, 0.8)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 3.5 },
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${service.accent}, #FF8C00)`,
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "rgba(255, 140, 0, 0.4)",
                    boxShadow: "0 20px 45px -15px rgba(255, 140, 0, 0.25)",
                    background: "rgba(22, 27, 38, 0.95)",
                    "&::before": {
                      opacity: 1,
                    },
                    "& .service-icon-box": {
                      transform: "scale(1.1) rotate(5deg)",
                      backgroundColor: "rgba(255, 140, 0, 0.15)",
                      borderColor: "rgba(255, 140, 0, 0.4)",
                      color: "#FF8C00",
                    },
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  className="service-icon-box"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "14px",
                    backgroundColor: "rgba(37, 99, 235, 0.12)",
                    border: "1px solid rgba(37, 99, 235, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.accent,
                    mb: 3,
                    transition: "all 0.35s ease",
                  }}
                >
                  <service.icon sx={{ fontSize: 32 }} />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#F8FAFC",
                    fontSize: "1.15rem",
                    mb: 1.5,
                    lineHeight: 1.35,
                    minHeight: { md: "2.7em" },
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#94A3B8",
                    lineHeight: 1.7,
                    fontSize: "0.92rem",
                    flex: 1,
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
          py: { xs: 10, md: 14 },
          backgroundColor: "#0B0E17",
          position: "relative",
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.08), transparent 70%)",
        }}
      >
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
              WHAT'S HAPPENING
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "#F8FAFC",
                mb: 2,
                fontSize: { xs: "2.2rem", md: "3rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Upcoming{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Events
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94A3B8",
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              We will update soon with exciting workshops and training programs
            </Typography>
          </Box>

          {/* Elevated Announcement Card */}
          <Box
            sx={{
              maxWidth: "800px",
              mx: "auto",
              background: "rgba(17, 20, 28, 0.85)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 140, 0, 0.25)",
              borderRadius: "20px",
              p: { xs: 4, sm: 6 },
              textAlign: "center",
              boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(255, 140, 0, 0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient corner light */}
            <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 140, 0, 0.2), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Radar Pulse Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.2,
                py: 0.8,
                mb: 3,
                borderRadius: "50px",
                backgroundColor: "rgba(255, 140, 0, 0.1)",
                border: "1px solid rgba(255, 140, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#FF8C00",
                  boxShadow: "0 0 12px #FF8C00",
                  animation: "pulse-subtle 2s infinite ease-in-out",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#FF8C00",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                Upcoming Announcement
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                color: "#F8FAFC",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", sm: "2.4rem" },
                mb: 2,
              }}
            >
              Coming Soon
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#94A3B8",
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Stay tuned for our upcoming workshops, bootcamps, and technical training sessions.
              Subscribe to our newsletter or contact us to get notified about future events.
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                px: 4,
                py: 1.3,
                fontSize: "0.95rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                boxShadow: "0 6px 20px rgba(255, 140, 0, 0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
                  boxShadow: "0 8px 25px rgba(255, 140, 0, 0.45)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Notify Me / Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: "#08090A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(255, 140, 0, 0.15) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              p: { xs: 5, md: 8 },
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 60px -20px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Ambient background decoration */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #FF8C00, transparent)",
              }}
            />

            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2.5,
                color: "#FF8C00",
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Elevate Your Professional Journey
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4.5,
                color: "#E2E8F0",
                maxWidth: "650px",
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.15rem" },
                lineHeight: 1.75,
              }}
            >
              Strategic learning pathways designed to accelerate your career growth and technical excellence.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 1.6,
                fontSize: "1.05rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #FF8C00 0%, #EA580C 100%)",
                color: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(255, 140, 0, 0.45)",
                "&:hover": {
                  background: "linear-gradient(135deg, #FF6500 0%, #C2410C 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(255, 140, 0, 0.6)",
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
