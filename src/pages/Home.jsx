import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Avatar,
  IconButton,
  useTheme as useMuiTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  School,
  Groups,
  WorkspacePremium,
  TrendingUp,
  Code,
  Psychology,
  Engineering,
  Business,
  ContactMail,
  ArrowForward,
  Star,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme, darkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Maalgudi Technolabs",
      subtitle: "Education Technology College",
      description:
        "With Maalgudi Technolabs responsive platform, you can promote your all technology training, certification and educational services.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Contact Us", variant: "contained" },
        { text: "Read More", variant: "outlined" },
      ],
    },
    {
      title: "Modern",
      subtitle: "Learning Experience",
      description:
        "Advance your career with cutting-edge technology training and industry-recognized certifications.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Get Started", variant: "contained" },
        { text: "Learn More", variant: "outlined" },
      ],
    },
    {
      title: "Professional",
      subtitle: "Development Programs",
      description:
        "Join thousands of professionals who have transformed their careers with our expert-led training programs.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttons: [
        { text: "Enroll Now", variant: "contained" },
        { text: "View Courses", variant: "outlined" },
      ],
    },
  ];

  const stats = [
    { icon: <Groups />, number: "2000+", label: "Students Trained" },
    { icon: <School />, number: "150+", label: "Courses Delivered" },
    { icon: <WorkspacePremium />, number: "98%", label: "Success Rate" },
    { icon: <TrendingUp />, number: "5+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: <Engineering />,
      title: "Technology Workshops",
      description:
        "Comprehensive hands-on training in IoT, Cloud Computing, and emerging technologies with practical implementation.",
    },
    {
      icon: <Psychology />,
      title: "Leadership Development",
      description:
        "Professional development programs focused on leadership skills and management excellence for career advancement.",
    },
    {
      icon: <Groups />,
      title: "Corporate Training",
      description:
        "Customized training solutions for organizations with on-site delivery and certification programs.",
    },
    {
      icon: <Code />,
      title: "Technical Consulting",
      description:
        "Expert consulting services for technology implementation, system architecture, and digital transformation.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer at TechCorp",
      content:
        "Maalgudi Technolabs transformed my technical skills. The hands-on approach and expert instructors made all the difference.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Project Manager at InnovateTech",
      content:
        "The leadership development program helped me advance to a management role. Highly recommended for career growth.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Amit Patel",
      role: "Data Scientist at DataFlow",
      content:
        "Professional training with real-world applications. The curriculum is up-to-date with industry standards.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Slider Section - Maalgudi Technolabs Style */}
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        />

        {/* Content */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "right",
            width: "100%",
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Box sx={{ maxWidth: "100%", ml: "auto", color: "white" }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem", xl: "5rem" },
                lineHeight: 1.2,
              }}
            >
              <Box component="strong" sx={{ color: "#7CC6FE" }}>
                {heroSlides[currentSlide].title}
              </Box>{" "}
              {heroSlides[currentSlide].subtitle}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: "1.1rem", md: "1.3rem", xl: "1.5rem" },
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              {heroSlides[currentSlide].description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}
            >
              {heroSlides[currentSlide].buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: { xs: "1rem", xl: "1.2rem" },
                    fontWeight: 600,
                    borderRadius: 0,
                    ...(button.variant === "contained"
                      ? {
                          background:
                            "linear-gradient(45deg, #7CC6FE 0%, #5DFDCB 100%)",
                          color: "#08090A",
                          boxShadow: "0 4px 15px rgba(124, 198, 254, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #5bb1fe 0%, #3ffcc1 100%)",
                            transform: "translateY(-2px)",
                          },
                        }
                      : {
                          borderColor: "#7CC6FE",
                          color: "#7CC6FE",
                          "&:hover": {
                            background: "#7CC6FE",
                            color: "#08090A",
                          },
                        }),
                  }}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
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
            backgroundColor: "rgba(124, 198, 254, 0.8)",
            color: "white",
            "&:hover": {
              backgroundColor: "#7CC6FE",
            },
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(124, 198, 254, 0.8)",
            color: "white",
            "&:hover": {
              backgroundColor: "#7CC6FE",
            },
          }}
        >
          <ChevronRight />
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

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 6 }}
            sx={{ alignItems: "stretch" }}
          >
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index} sx={{ display: "flex" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: "#7CC6FE",
                      mb: 2,
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#333",
                      mb: 1,
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      fontWeight: 500,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: darkMode ? "#1a1b1c" : "#f0f8ff" }}>
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
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
              Our{" "}
              <Box component="span" sx={{ color: "#7CC6FE" }}>
                Services
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              Comprehensive technology training and professional development
              solutions
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 6 }}
            sx={{
              alignItems: "stretch",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    width: "100%",
                    minWidth: "100%",
                    borderRadius: 0,
                    border: "1px solid #e0e0e0",
                    backgroundColor: darkMode ? "#242526" : "#f0f8ff",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      backgroundColor: darkMode ? "#2a2d2e" : "#e6f4ff",
                      boxShadow: darkMode
                        ? "0 12px 30px rgba(255,255,255,0.15)"
                        : "0 12px 30px rgba(124, 198, 254, 0.2)",
                      "& .service-icon": {
                        backgroundColor: "#5DFDCB",
                        color: "#08090A",
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      height: "100%",
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        backgroundColor: darkMode ? "#242526" : "#f8f9fa",
                        color: "#7CC6FE",
                        p: 2,
                        borderRadius: 0,
                        display: "inline-flex",
                        mb: 3,
                        fontSize: "2rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {service.icon}
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
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.9rem", md: "1rem" },
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

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
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
              Student{" "}
              <Box component="span" sx={{ color: "#7CC6FE" }}>
                Testimonials
              </Box>
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 6 }}
            sx={{ alignItems: "stretch" }}
          >
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 0,
                    border: "1px solid #e0e0e0",
                    backgroundColor: darkMode ? "#242526" : "#fafafa",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: darkMode
                        ? "0 12px 30px rgba(255,255,255,0.15)"
                        : "0 12px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      textAlign: "center",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Top Section - Avatar and Rating */}
                    <Box sx={{ mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{
                          width: 80,
                          height: 80,
                          mx: "auto",
                          mb: 2,
                        }}
                      />

                      <Box sx={{ mb: 2 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            sx={{ color: "#5DFDCB", fontSize: "1.2rem" }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Middle Section - Testimonial Text (Flexible) */}
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#666",
                          fontStyle: "italic",
                          lineHeight: 1.7,
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                    </Box>

                    {/* Bottom Section - Name and Role */}
                    <Box sx={{ mt: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#333",
                          mb: 1,
                        }}
                      >
                        {testimonial.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#7CC6FE",
                          fontSize: "0.9rem",
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
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
          py: 10,
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Ready to Start Your Journey?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Join thousands of professionals who have transformed their careers
            with our training programs
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "linear-gradient(45deg, #7CC6FE 0%, #5DFDCB 100%)",
                color: "#08090A",
                px: 4,
                py: 2,
                fontSize: { xs: "1rem", xl: "1.2rem" },
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #5bb1fe 0%, #3ffcc1 100%)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Started Today
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ContactMail />}
              sx={{
                borderColor: "#7CC6FE",
                color: "#7CC6FE",
                px: 4,
                py: 2,
                fontSize: { xs: "1rem", xl: "1.2rem" },
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": {
                  background: "#7CC6FE",
                  color: "#08090A",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
