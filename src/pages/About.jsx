import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import {
  School,
  TrendingUp,
  Business,
  Code,
  ArrowForward,
  Visibility,
  Flag,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      step: "01",
      title: "Plan",
      description:
        "Deciding in advance what to do, how to do it, when to do it, and by whom it is to be done.",
      icon: <School sx={{ fontSize: 28 }} />,
    },
    {
      step: "02",
      title: "Schedule",
      description:
        "Maintaining a timetable to achieve planned activities and inform all involved parties in advance.",
      icon: <Code sx={{ fontSize: 28 }} />,
    },
    {
      step: "03",
      title: "Commit",
      description:
        "Committing to promises, including agreed activities, meeting participation, and deadlines.",
      icon: <TrendingUp sx={{ fontSize: 28 }} />,
    },
    {
      step: "04",
      title: "Follow Up",
      description:
        "Following up on all committed activities, with frequencies and timings established during the commitment phase.",
      icon: <Business sx={{ fontSize: 28 }} />,
    },
  ];

  const skills = [
    {
      name: "Technology Training",
      progress: 95,
      description: "Specialized programs delivering cutting-edge technical competencies",
    },
    {
      name: "Leadership Development",
      progress: 90,
      description: "Strategic executive coaching and advanced team leadership capabilities",
    },
    {
      name: "Corporate Consulting",
      progress: 88,
      description: "Expert guidance for seamless technology integration and optimization",
    },
    {
      name: "Digital Transformation",
      progress: 92,
      description: "Comprehensive modernization strategies and implementation excellence",
    },
    {
      name: "Project Management",
      progress: 85,
      description: "Advanced methodologies for successful project execution and delivery",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background:
            'linear-gradient(180deg, rgba(8, 9, 10, 0.78) 0%, rgba(8, 9, 10, 0.92) 100%), radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.2) 0%, transparent 60%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 10, md: 16 },
          textAlign: "center",
          overflow: "hidden",
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
              About Us
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "1.95rem", sm: "3rem", md: "4.5rem" },
              lineHeight: 1.15,
              color: "#F8FAFC",
              letterSpacing: "-0.02em",
              px: { xs: 1, sm: 0 },
            }}
          >
            Welcome to{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Maalgudi Technolabs
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "850px",
              mx: "auto",
              color: "#CBD5E1",
              lineHeight: { xs: 1.65, md: 1.8 },
              fontSize: { xs: "0.95rem", sm: "1.15rem", md: "1.25rem" },
              px: { xs: 1, sm: 0 },
            }}
          >
            Pioneering excellence in technology education through comprehensive
            training solutions and strategic professional development initiatives.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: "#08090A",
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            {/* Mission Card */}
            <Box
              sx={{
                height: "100%",
                p: { xs: 4, sm: 5 },
                background: "rgba(17, 20, 28, 0.8)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(37, 99, 235, 0.25)",
                borderRadius: "20px",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.35s ease",
                display: "flex",
                flexDirection: "column",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #2563EB, #60A5FA)",
                },
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(37, 99, 235, 0.5)",
                  boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.3)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "12px",
                    backgroundColor: "rgba(37, 99, 235, 0.15)",
                    border: "1px solid rgba(37, 99, 235, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3B82F6",
                  }}
                >
                  <Flag sx={{ fontSize: 26 }} />
                </Box>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    backgroundColor: "rgba(37, 99, 235, 0.15)",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "#60A5FA", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    Our Purpose
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#F8FAFC",
                  mb: 2.5,
                  fontSize: { xs: "1.8rem", sm: "2.3rem" },
                }}
              >
                Our{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Mission
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#94A3B8",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  flex: 1,
                }}
              >
                Empowering professionals through comprehensive development in
                personality, leadership, technical expertise, financial acumen,
                and collaborative excellence for sustained career success.
              </Typography>
            </Box>

            {/* Vision Card */}
            <Box
              sx={{
                height: "100%",
                p: { xs: 4, sm: 5 },
                background: "rgba(17, 20, 28, 0.8)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 140, 0, 0.25)",
                borderRadius: "20px",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.35s ease",
                display: "flex",
                flexDirection: "column",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #FF8C00, #FFA500)",
                },
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(255, 140, 0, 0.5)",
                  boxShadow: "0 20px 40px -15px rgba(255, 140, 0, 0.3)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 140, 0, 0.15)",
                    border: "1px solid rgba(255, 140, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFA500",
                  }}
                >
                  <Visibility sx={{ fontSize: 26 }} />
                </Box>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 140, 0, 0.15)",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "#FFA500", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    Our Direction
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#F8FAFC",
                  mb: 2.5,
                  fontSize: { xs: "1.8rem", sm: "2.3rem" },
                }}
              >
                Our{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vision
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#94A3B8",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  flex: 1,
                }}
              >
                Establishing global leadership in technology education through
                innovation-driven programs that cultivate exceptional
                professionals and drive technological advancement.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: "#0B0E17",
          position: "relative",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(255, 140, 0, 0.08), transparent 70%)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
              WHAT WE STAND FOR
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
              Our Core{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Values
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
              Foundational principles driving our commitment to educational
              excellence and transformative professional development
            </Typography>
          </Box>

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
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 260,
                  background: "rgba(17, 20, 28, 0.8)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  p: { xs: 3, sm: 3.5 },
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
                    background: "linear-gradient(90deg, #2563EB, #FF8C00)",
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
                    "& .value-icon": {
                      transform: "scale(1.1)",
                      color: "#FF8C00",
                      borderColor: "rgba(255, 140, 0, 0.4)",
                      backgroundColor: "rgba(255, 140, 0, 0.12)",
                    },
                  },
                }}
              >
                {/* Header with Icon + Step */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    className="value-icon"
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      backgroundColor: "rgba(37, 99, 235, 0.12)",
                      border: "1px solid rgba(37, 99, 235, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#3B82F6",
                      transition: "all 0.35s ease",
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "rgba(255, 255, 255, 0.2)",
                      fontFamily: "monospace",
                    }}
                  >
                    {value.step}
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#F8FAFC",
                    fontSize: "1.25rem",
                    mb: 1.5,
                  }}
                >
                  {value.title}
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
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Skills/Expertise Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: "#08090A",
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
              OUR CAPABILITIES
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
              Areas of{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Expertise
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
              Proven capabilities across diverse technology domains developed
              through sustained excellence and continuous innovation
            </Typography>
          </Box>

          <Box className="about-expertise-grid">
            {skills.map((skill, index) => (
              <Box key={index} className="about-expertise-item">
                <Box className="expertise-skill-name">
                  <span>{skill.name}</span>
                  <span className="expertise-progress">{skill.progress}%</span>
                </Box>
                <Box className="expertise-bar">
                  <Box
                    className="expertise-fill"
                    sx={{
                      width: `${skill.progress}%`,
                    }}
                  />
                </Box>
                <Typography className="expertise-description">
                  {skill.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: "#0B0E17",
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
              Advance Your Professional Excellence
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
              Strategic career development opportunities designed for ambitious
              technology professionals. Connect with us today.
            </Typography>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
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
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
