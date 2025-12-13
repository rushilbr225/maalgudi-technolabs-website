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

const Home = () => {
  const theme = useMuiTheme();
  const { darkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Empowering Future",
      subtitle: "Tech Leaders",
      description:
        "Comprehensive training programs in emerging technologies. From cloud computing to IoT development, we shape the next generation of technology professionals.",
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
        "To provide Personality development, professional exposure, technology upgrade, achieving leadership, management techniques, Financial Management, public speaking, team work and skills required to become highly qualified professionals.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Contact Us", variant: "contained" },
        { text: "Read More", variant: "outlined" },
      ],
    },
    {
      title: "Modern Learning Experience",
      subtitle: "",
      description:
        "Advance your career with cutting-edge technology training and industry-recognized certifications.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Start Learning", variant: "contained" },
        { text: "Explore Courses", variant: "outlined" },
      ],
    },
    {
      title: "Innovative Tech Solutions",
      subtitle: "",
      description:
        "Discover the latest in IoT, cloud computing, and digital transformation with our hands-on workshop programs.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "View Programs", variant: "contained" },
        { text: "Schedule Demo", variant: "outlined" },
      ],
    },
  ];

  const services = [
    {
      icon: Engineering,
      title: "Engineering Excellence",
      description:
        "Comprehensive engineering training programs covering software development, system design, and technical leadership skills.",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Master cloud technologies including AWS, Azure, and Google Cloud with hands-on projects and real-world applications.",
    },
    {
      icon: Memory,
      title: "Data Science & AI",
      description:
        "Dive deep into machine learning, artificial intelligence, and data analytics with industry-standard tools and frameworks.",
    },
    {
      icon: School,
      title: "Professional Development",
      description:
        "Build essential soft skills, leadership capabilities, and professional communication for career advancement.",
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
            backgroundColor: "rgba(255, 140, 0, 0.2)",
            color: "#FF8C00",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.4)",
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
            backgroundColor: "rgba(255, 140, 0, 0.2)",
            color: "#FF8C00",
            "&:hover": {
              backgroundColor: "rgba(255, 140, 0, 0.4)",
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
                color: "#FF8C00",
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
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {currentHero.buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  ...(button.variant === "contained" && {
                    backgroundColor: "#FF8C00",
                    color: "#F4FAFF",
                    "&:hover": {
                      backgroundColor: "#FF6500",
                    },
                  }),
                  ...(button.variant === "outlined" && {
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                    "&:hover": {
                      backgroundColor: "rgba(255, 140, 0, 0.1)",
                      borderColor: "#FF6500",
                    },
                  }),
                }}
              >
                {button.text}
              </Button>
            ))}
          </Box>
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
                    ? "#FF8C00"
                    : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor:
                    currentSlide === index
                      ? "#FF8C00"
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
          backgroundColor: darkMode ? "#08090A" : "#F4FAFF",
          color: darkMode ? "#F4FAFF" : "#08090A",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              mb: 6,
              color: "#FF8C00",
              fontWeight: "bold",
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: 220,
                    backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
                    color: darkMode ? "#F4FAFF" : "#08090A",
                    border: `1px solid ${darkMode ? "#333" : "#E0E0E0"}`,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 8px 25px ${darkMode
                          ? "rgba(255, 140, 0, 0.2)"
                          : "rgba(0, 0, 0, 0.15)"
                        }`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <service.icon
                      sx={{
                        fontSize: 48,
                        color: "#FF8C00",
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: "bold",
                        color: darkMode ? "#F4FAFF" : "#08090A",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: darkMode ? "#B0B0B0" : "#555555",
                        lineHeight: 1.5,
                      }}
                    >
                      {service.description}
                    </Typography>
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
              color: "#FF8C00", // Always orange text
              fontWeight: "bold",
            }}
          >
            Ready to Transform Your Career?
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
            Join thousands of professionals who have advanced their careers with
            our comprehensive training programs.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                backgroundColor: "#FF8C00", // Always orange button
                color: "#F4FAFF", // Always light text on button
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
    </Box>
  );
};

export default Home;
