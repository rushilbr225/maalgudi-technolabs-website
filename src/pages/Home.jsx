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
  const { mode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Empowering Future Tech Leaders",

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
      title: "Professional Development Programs",

      description:
        "Join thousands of professionals who have transformed their careers with our expert-led training programs.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Enroll Now", variant: "contained" },
        { text: "Learn More", variant: "outlined" },
      ],
    },
  ];

  const services = [
    {
      icon: <Engineering />,
      title: "Software Development & Testing",
      description:
        "Comprehensive training in modern software development methodologies, testing frameworks, and quality assurance practices.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Computing & DevOps",
      description:
        "Master cloud platforms like AWS, Azure, and GCP. Learn DevOps practices, containerization, and infrastructure automation.",
    },
    {
      icon: <Memory />,
      title: "IoT & Embedded Systems",
      description:
        "Hands-on training in Internet of Things development, sensor integration, and embedded systems programming.",
    },
    {
      icon: <School />,
      title: "Professional Development",
      description:
        "Personality development, leadership skills, financial management, and communication training for career advancement.",
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
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(8, 9, 10, 0.7), rgba(8, 9, 10, 0.7)), url(${currentHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth={false} sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
              color: "#5DFDCB",
            }}
          >
            {currentHero.title}
          </Typography>
          {currentHero.subtitle && (
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: "light",
                mb: 3,
                color: "#7CC6FE",
              }}
            >
              {currentHero.subtitle}
            </Typography>
          )}
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {currentHero.description}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
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
                    backgroundColor: "#5DFDCB",
                    color: "#08090A",
                    "&:hover": {
                      backgroundColor: "#4AE3B2",
                    },
                  }),
                  ...(button.variant === "outlined" && {
                    borderColor: "#7CC6FE",
                    color: "#7CC6FE",
                    "&:hover": {
                      borderColor: "#63B4FB",
                      backgroundColor: "rgba(124, 198, 254, 0.1)",
                    },
                  }),
                }}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Container>

        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(93, 253, 203, 0.8)",
            color: "#08090A",
            zIndex: 10,
            "&:hover": {
              backgroundColor: "rgba(93, 253, 203, 1)",
            },
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
            backgroundColor: "rgba(93, 253, 203, 0.8)",
            color: "#08090A",
            zIndex: 10,
            "&:hover": {
              backgroundColor: "rgba(93, 253, 203, 1)",
            },
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 10,
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
                  index === currentSlide ? "#5DFDCB" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Services Section */}
      <Container maxWidth={false} sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{
            mb: 6,
            color: mode === "dark" ? "#5DFDCB" : "#08090A",
            fontWeight: "bold",
          }}
        >
          Our Services
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  height: 220, // Reduced height for more compact cards
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  backgroundColor: mode === "dark" ? "#1a1a1a" : "#7CC6FE",
                  color: mode === "dark" ? "#F4FAFF" : "#08090A",
                  boxShadow:
                    mode === "dark"
                      ? "0 4px 20px rgba(93, 253, 203, 0.1)"
                      : "0 4px 20px rgba(8, 9, 10, 0.1)",
                  border:
                    mode === "dark"
                      ? "1px solid rgba(93, 253, 203, 0.3)"
                      : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      mode === "dark"
                        ? "0 8px 40px rgba(93, 253, 203, 0.2)"
                        : "0 8px 40px rgba(8, 9, 10, 0.15)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    p: 2, // Reduced padding from 3 to 2
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly", // Distribute space evenly
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      mb: 0.5, // Reduced margin
                      display: "flex",
                      justifyContent: "center",
                      "& svg": {
                        fontSize: 48, // Reduced icon size from 60 to 48
                        color: mode === "dark" ? "#5DFDCB" : "#08090A",
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 0.5, // Reduced margin
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1.1rem", // Reduced font size
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.3, // Reduced line height
                      textAlign: "center",
                      fontSize: "0.8rem", // Reduced font size
                      flex: 1, // Take remaining space
                      display: "flex",
                      alignItems: "center",
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

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: "#08090A", // Always black background
          py: 8,
        }}
      >
        <Container maxWidth={false}>
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
                backgroundColor: "#5DFDCB", // Always mint green button
                color: "#08090A", // Always dark text on button
                "&:hover": {
                  backgroundColor: "#4AE3B2", // Slightly darker mint on hover
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
