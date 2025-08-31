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
  useTheme,
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

const Home = () => {
  const theme = useTheme();
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
    <Box>
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
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, textAlign: "right" }}
        >
          <Box sx={{ maxWidth: "600px", ml: "auto", color: "white" }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem", xl: "5rem" },
                lineHeight: 1.2,
              }}
            >
              <Box component="strong" sx={{ color: "#eea412" }}>
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
                            "linear-gradient(45deg, #eea412 0%, #f5c842 100%)",
                          color: "#fff",
                          boxShadow: "0 4px 15px rgba(238, 164, 18, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #d89e0b 0%, #eea412 100%)",
                            transform: "translateY(-2px)",
                          },
                        }
                      : {
                          borderColor: "#eea412",
                          color: "#eea412",
                          "&:hover": {
                            background: "#eea412",
                            color: "#fff",
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
            backgroundColor: "rgba(238, 164, 18, 0.8)",
            color: "white",
            "&:hover": {
              backgroundColor: "#eea412",
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
            backgroundColor: "rgba(238, 164, 18, 0.8)",
            color: "white",
            "&:hover": {
              backgroundColor: "#eea412",
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
                  index === currentSlide ? "#eea412" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: "#eea412",
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
      <Box sx={{ py: 10, backgroundColor: "white" }}>
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
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              Comprehensive technology training and professional development
              solutions
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
                      className="service-icon"
                      sx={{
                        backgroundColor: "#f8f9fa",
                        color: "#eea412",
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
              Student{" "}
              <Box component="span" sx={{ color: "#eea412" }}>
                Testimonials
              </Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 0,
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 3,
                      }}
                    />

                    <Box sx={{ mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{ color: "#eea412", fontSize: "1.2rem" }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        mb: 3,
                        fontStyle: "italic",
                        lineHeight: 1.7,
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

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
                        color: "#eea412",
                        fontSize: "0.9rem",
                      }}
                    >
                      {testimonial.role}
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
          py: 10,
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
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
                background: "linear-gradient(45deg, #eea412 0%, #f5c842 100%)",
                color: "#fff",
                px: 4,
                py: 2,
                fontSize: { xs: "1rem", xl: "1.2rem" },
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #d89e0b 0%, #eea412 100%)",
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
                borderColor: "#eea412",
                color: "#eea412",
                px: 4,
                py: 2,
                fontSize: { xs: "1rem", xl: "1.2rem" },
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": {
                  background: "#eea412",
                  color: "#fff",
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
