import React, { useState, useEffect } from "react";
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
      title: "Java Programming",
      description:
        "Master Java fundamentals, object-oriented programming concepts, and build robust applications with industry-standard best practices.",
    },
    {
      icon: Memory,
      title: "DSA in Java",
      description:
        "Deep dive into Data Structures and Algorithms using Java. Learn arrays, linked lists, trees, graphs, sorting, and searching techniques.",
    },
    {
      icon: Cloud,
      title: "Java Backend Development",
      description:
        "Build scalable backend systems with Spring Boot, REST APIs, microservices architecture, and database integration using Java.",
    },
    {
      icon: School,
      title: "IoT & AWS Services",
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
          backgroundImage: `linear-gradient(rgba(8, 9, 10, 0.6), rgba(8, 9, 10, 0.6)), url(${currentHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(93, 253, 203, 0.2)",
            color: "#5DFDCB",
            "&:hover": {
              backgroundColor: "rgba(93, 253, 203, 0.4)",
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
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(93, 253, 203, 0.2)",
            color: "#5DFDCB",
            "&:hover": {
              backgroundColor: "rgba(93, 253, 203, 0.4)",
            },
            zIndex: 2,
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        <Container maxWidth="lg" sx={{ textAlign: "center", zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#F4FAFF",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            {currentHero.title}
          </Typography>
          {currentHero.subtitle && (
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "#5DFDCB",
                mb: 3,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              {currentHero.subtitle}
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{
              color: "#F4FAFF",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            {currentHero.description}
          </Typography>
        </Container>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 2,
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  currentSlide === index
                    ? "#5DFDCB"
                    : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor:
                    currentSlide === index
                      ? "#5DFDCB"
                      : "rgba(255, 255, 255, 0.8)",
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
          backgroundColor: mode === "dark" ? "#08090A" : "#F4FAFF",
          color: mode === "dark" ? "#F4FAFF" : "#08090A",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: mode === "dark" ? "#F4FAFF" : "#333",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our{" "}
              <Box component="span" sx={{ color: "#5DFDCB" }}>
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
                    ? "rgba(26, 27, 28, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: `1px solid ${mode === "dark"
                    ? "rgba(93, 253, 203, 0.2)"
                    : "rgba(93, 253, 203, 0.15)"}`,
                  borderRadius: 3,
                  padding: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: mode === "dark"
                    ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                    : "0 4px 20px rgba(93, 253, 203, 0.1)",
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    borderColor: mode === "dark"
                      ? "rgba(93, 253, 203, 0.4)"
                      : "rgba(93, 253, 203, 0.3)",
                    boxShadow: mode === "dark"
                      ? "0 12px 40px rgba(93, 253, 203, 0.25)"
                      : "0 12px 40px rgba(93, 253, 203, 0.2)",
                    background: mode === "dark"
                      ? "rgba(26, 27, 28, 1)"
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
                      color: "#5DFDCB",
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
          backgroundColor: mode === "dark" ? "#0D0E0F" : "#F9FCFF",
          color: mode === "dark" ? "#F4FAFF" : "#08090A",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#5DFDCB",
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
                color: mode === "dark" ? "#F4FAFF" : "#333",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Upcoming{" "}
              <Box component="span" sx={{ color: "#5DFDCB" }}>
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
              Join us for workshops, seminars, and networking opportunities
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {[
              {
                title: "IoT Workshop with AWS Integration",
                date: "March 15, 2025",
                time: "10:00 AM - 4:00 PM",
                location: "DSATM Campus, Bangalore",
                description:
                  "Hands-on workshop covering IoT fundamentals, sensor integration, and AWS IoT Core services.",
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                status: "Registrations Open",
                color: "#1976d2",
              },
              {
                title: "Java Backend Development Bootcamp",
                date: "March 22, 2025",
                time: "9:00 AM - 5:00 PM",
                location: "RVCE Campus, Bangalore",
                description:
                  "Intensive bootcamp on Spring Boot, REST APIs, microservices architecture, and database integration.",
                image:
                  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                status: "Few Seats Left",
                color: "#2e7d32",
              },
              {
                title: "Data Structures & Algorithms Masterclass",
                date: "March 29, 2025",
                time: "2:00 PM - 6:00 PM",
                location: "UVCE Campus, Bangalore",
                description:
                  "Deep dive into DSA concepts with practical problem-solving sessions for technical interviews.",
                image:
                  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                status: "Coming Soon",
                color: "#d32f2f",
              },
            ].map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    minHeight: 580,
                    display: "flex",
                    flexDirection: "column",
                    background:
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(26, 27, 28, 0.98) 0%, rgba(18, 19, 20, 0.95) 100%)"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 252, 255, 0.95) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `2px solid ${mode === "dark"
                      ? "rgba(93, 253, 203, 0.15)"
                      : "rgba(93, 253, 203, 0.2)"
                      }`,
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow:
                      mode === "dark"
                        ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(93, 253, 203, 0.1)"
                        : "0 8px 32px rgba(93, 253, 203, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${event.color}, #5DFDCB)`,
                      opacity: 0.8,
                    },
                    "&:hover": {
                      transform: "translateY(-16px)",
                      borderColor:
                        mode === "dark"
                          ? "rgba(93, 253, 203, 0.5)"
                          : "rgba(93, 253, 203, 0.5)",
                      boxShadow:
                        mode === "dark"
                          ? "0 20px 60px rgba(93, 253, 203, 0.25), 0 8px 16px rgba(0, 0, 0, 0.3)"
                          : "0 20px 60px rgba(93, 253, 203, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)",
                      "& .event-image": {
                        transform: "scale(1.08)",
                      },
                      "& .status-badge": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  {/* Event Image */}
                  <Box
                    sx={{
                      height: 220,
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: mode === "dark" ? "#0D0E0F" : "#E8F5FE",
                    }}
                  >
                    <Box
                      className="event-image"
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundImage: `linear-gradient(135deg, rgba(8, 9, 10, 0.4), rgba(8, 9, 10, 0.6)), url(${event.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    <Box
                      className="status-badge"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: `linear-gradient(135deg, ${event.color}, ${event.color}dd)`,
                        color: "#FFF",
                        px: 2.5,
                        py: 1,
                        borderRadius: 3,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {event.status}
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: mode === "dark" ? "#F4FAFF" : "#08090A",
                          mb: 2.5,
                          lineHeight: 1.4,
                          minHeight: "3.5em",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1.15rem",
                        }}
                      >
                        {event.title}
                      </Typography>

                      <Box
                        sx={{
                          mb: 2.5,
                          p: 2,
                          borderRadius: 2,
                          backgroundColor:
                            mode === "dark"
                              ? "rgba(93, 253, 203, 0.05)"
                              : "rgba(93, 253, 203, 0.08)",
                          border: `1px solid ${mode === "dark"
                            ? "rgba(93, 253, 203, 0.1)"
                            : "rgba(93, 253, 203, 0.15)"
                            }`,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1.5,
                            }}
                          >
                            📅
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#5DFDCB",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                            }}
                          >
                            {event.date}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1.5,
                            }}
                          >
                            🕐
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: mode === "dark" ? "#B0B3B8" : "#555",
                              fontWeight: 500,
                              fontSize: "0.9rem",
                            }}
                          >
                            {event.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1.5,
                            }}
                          >
                            📍
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: mode === "dark" ? "#B0B3B8" : "#555",
                              fontWeight: 500,
                              fontSize: "0.9rem",
                            }}
                          >
                            {event.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: mode === "dark" ? "#B0B3B8" : "#666",
                          lineHeight: 1.8,
                          mb: 2.5,
                          minHeight: "4.5em",
                          fontSize: "0.95rem",
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleRegisterClick(event.title)}
                      sx={{
                        background: "linear-gradient(135deg, #5DFDCB 0%, #4AE3B2 100%)",
                        color: "#08090A",
                        fontWeight: 700,
                        py: 1.5,
                        fontSize: "0.95rem",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        borderRadius: 2,
                        boxShadow: "0 4px 14px rgba(93, 253, 203, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #4AE3B2 0%, #5DFDCB 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(93, 253, 203, 0.4)",
                        },
                      }}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#08090A", // Always dark background
          color: "#F4FAFF", // Always light text
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              mb: 4,
              color: "#5DFDCB", // Always mint green text
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
              color: "#F4FAFF", // Always light text
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
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                backgroundColor: "#5DFDCB", // Always mint green button
                color: "#08090A", // Always dark text on button
                "&:hover": {
                  backgroundColor: "#4AE3B2",
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
