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
    <Box sx={{ position: "relative" }}>
      {/* Hero Section - Back to relative positioning */}
      <Box
        className="hero-section"
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          left: "50%",
          right: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(8, 9, 10, 0.7), rgba(8, 9, 10, 0.7)), url(${currentHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            textAlign: "center",
            px: { xs: 1, sm: 2, md: 3 }, // Responsive container padding
            maxWidth: { xs: "100%", sm: "90%", md: "80%" }, // Responsive max width
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
                xl: "4.5rem",
              }, // More responsive font sizes
              fontWeight: "bold",
              mb: { xs: 1, sm: 2, md: 2 }, // Responsive margins
              color: "#5DFDCB",
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }, // Responsive line height
            }}
          >
            {currentHero.title}
          </Typography>
          {currentHero.subtitle && (
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                  xl: "3rem",
                }, // More responsive subtitle sizes
                fontWeight: "light",
                mb: { xs: 2, sm: 3, md: 3 }, // Responsive margins
                color: "#7CC6FE",
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
              }}
            >
              {currentHero.subtitle}
            </Typography>
          )}
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: { xs: 3, sm: 4, md: 4 }, // Responsive margins
              maxWidth: { xs: "100%", sm: "90%", md: "800px" }, // Responsive max width
              mx: "auto",
              lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 }, // Responsive line height
              fontSize: {
                xs: "0.9rem",
                sm: "1.1rem",
                md: "1.25rem",
                lg: "1.4rem",
              }, // Responsive description font size
              px: { xs: 1, sm: 2, md: 0 }, // Extra padding on small screens
            }}
          >
            {currentHero.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 2 }, // Responsive button gaps
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" }, // Stack buttons on mobile
              alignItems: "center",
              px: { xs: 2, sm: 0 }, // Extra padding on mobile
            }}
          >
            {currentHero.buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="large"
                sx={{
                  px: { xs: 3, sm: 4, md: 4 }, // Responsive padding
                  py: { xs: 1.2, sm: 1.5, md: 1.5 }, // Responsive padding
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                  width: { xs: "100%", sm: "auto" }, // Full width on mobile
                  maxWidth: { xs: "280px", sm: "none" }, // Max width on mobile
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
            left: { xs: 10, sm: 15, md: 20 }, // Responsive positioning
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(93, 253, 203, 0.8)",
            color: "#08090A",
            zIndex: 10,
            width: { xs: 40, sm: 48, md: 56 }, // Responsive size
            height: { xs: 40, sm: 48, md: 56 }, // Responsive size
            display: { xs: "none", sm: "flex" }, // Hide on very small screens
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
            right: { xs: 10, sm: 15, md: 20 }, // Responsive positioning
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(93, 253, 203, 0.8)",
            color: "#08090A",
            zIndex: 10,
            width: { xs: 40, sm: 48, md: 56 }, // Responsive size
            height: { xs: 40, sm: 48, md: 56 }, // Responsive size
            display: { xs: "none", sm: "flex" }, // Hide on very small screens
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
            bottom: { xs: 20, sm: 25, md: 30 }, // Responsive bottom position
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 1 }, // Responsive gap
            zIndex: 10,
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: { xs: 8, sm: 10, md: 12 }, // Responsive size
                height: { xs: 8, sm: 10, md: 12 }, // Responsive size
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