import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  LinearProgress,
  Paper,
} from "@mui/material";
import {
  School,
  TrendingUp,
  Groups,
  EmojiEvents,
  Psychology,
  Engineering,
  Code,
  Business,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { theme, darkMode } = useTheme();
  const team = [
    {
      name: "Raghu Nila",
      role: "Founder",
      education: "",
      bio: "Principal Architect at General Motors with extensive experience in automotive technology and system architecture.",
      skills: [
        "System Architecture",
        "Automotive Technology",
        "Strategic Leadership",
        "Innovation",
      ],
      avatar: "/TeamPhotos/Raghu Nila.jpg",
    },
    {
      name: "Pratham G",
      role: "CEO",
      education: "BE in ECE, RVCE",
      bio: "Gold Medalist and Boeing Best Outgoing Student. Digital Engineer at Samsung with 10 months of industry experience.",
      skills: [
        "Digital Engineering",
        "Leadership",
        "Strategic Vision",
        "Innovation",
      ],
      avatar: "/TeamPhotos/Pratham.jpg",
    },
    {
      name: "Rushil B R",
      role: "CTO",
      education: "B.Tech in ISE, UVCE",
      bio: "Software Engineer at Ellucian with 7 months of professional experience in enterprise software solutions.",
      skills: [
        "Software Engineering",
        "Technology Strategy",
        "System Architecture",
        "Team Leadership",
      ],
      avatar: "/TeamPhotos/Rushil.jpg",
    },
    {
      name: "Pradyumna S Athreya",
      role: "CMO",
      education: "BE in ECE, RVCE",
      bio: "Yield Engineer at Global Foundries with 10 months of semiconductor industry experience.",
      skills: [
        "Marketing Strategy",
        "Yield Engineering",
        "Process Optimization",
        "Analytics",
      ],
      avatar: "/TeamPhotos/1RV21EC119_PRADYUMNA S ATHREYA.jpg",
    },
    {
      name: "Pavan Kumar C Banasode",
      role: "CFO",
      education: "BE in ECE, RVCE",
      bio: "Technology professional with experience at Qualcomm (6 months) and SierraEdge AI (2 months).",
      skills: [
        "Financial Strategy",
        "Technology Integration",
        "Resource Management",
        "Analytics",
      ],
      avatar: "/TeamPhotos/Pavan Kumar.jpg",
    },
    {
      name: "Adarsh G B",
      role: "Technical Specialist",
      education: "BE in ECE, RVCE",
      bio: "Technology professional with 6 months of experience at Vidarka Technologies.",
      skills: [
        "Technical Solutions",
        "Product Development",
        "Innovation",
        "Problem Solving",
      ],
      avatar: "/TeamPhotos/Adarsh.jpg",
    },
    {
      name: "Shreyas S",
      role: "Technical Specialist",
      education: "BE in ECE, RVCE",
      bio: "Professional experience at Enphase Energy with 6 months in renewable energy technology.",
      skills: [
        "Energy Systems",
        "Technical Design",
        "Innovation",
        "Sustainability",
      ],
      avatar: "/TeamPhotos/Shreyas.jpg",
    },
    {
      name: "Paavani Nayak",
      role: "Technical Specialist",
      education: "BE in ECE, RVCE",
      bio: "ECE Branch Rank 9. Technology professional at Texas Instruments with 12 months of experience.",
      skills: [
        "Semiconductor Design",
        "Technical Excellence",
        "Innovation",
        "Quality Assurance",
      ],
      avatar: "",
    },
    {
      name: "Atrinandan J",
      role: "Software Engineer",
      education: "B.Tech in ISE, UVCE",
      bio: "Software Engineer Intern at Aurigo with 3 months of experience in C# and Java Backend.",
      skills: [
        "Software Development",
        "Problem Solving",
        "Agile Methodologies",
        "Innovation",
      ],
      avatar: "",
    },
    {
      name: "Ashray A",
      role: "Software Engineer",
      education: "B.Tech in ISE, UVCE",
      bio: "SDE Intern at Aurigo (3 months), currently working full-time at SAP Labs.",
      skills: [
        "Software Development",
        "Enterprise Solutions",
        "Cloud Technologies",
        "Innovation",
      ],
      avatar: "",
    },
    {
      name: "Pavani A M",
      role: "Software Engineer",
      education: "B.Tech in ISE, BMSIT",
      bio: "Associate Software Engineer at Eurofins with expertise in quality assurance and testing.",
      skills: [
        "Software Engineering",
        "Quality Assurance",
        "Testing Automation",
        "Problem Solving",
      ],
      avatar: "",
    },
    {
      name: "Mahith R",
      role: "Software Engineer",
      education: "B.Tech in DS, SVIT",
      bio: "Gen AI Intern at Volvo, specializing in artificial intelligence and data science applications.",
      skills: [
        "Generative AI",
        "Data Science",
        "Machine Learning",
        "Innovation",
      ],
      avatar: "",
    },
  ];

  const values = [
    {
      title: "Plan",
      description:
        "Deciding in advance what to do, how to do it, when to do it, and by whom it is to be done.",
      icon: <School />,
    },
    {
      title: "Schedule",
      description:
        "Maintaining a timetable to achieve planned activities and inform all involved parties in advance.",
      icon: <Code />,
    },
    {
      title: "Commit",
      description:
        "Committing to promises, including agreed activities, meeting participation, and deadlines.",
      icon: <TrendingUp />,
    },
    {
      title: "Follow Up",
      description:
        "Following up on all committed activities, with frequencies and timings established during the commitment phase.",
      icon: <Business />,
    },
  ];

  const skills = [
    { name: "Technology Training", progress: 95 },
    { name: "Leadership Development", progress: 90 },
    { name: "Corporate Consulting", progress: 88 },
    { name: "Digital Transformation", progress: 92 },
    { name: "Project Management", progress: 85 },
    { name: "Innovation Strategy", progress: 90 },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background:
            'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(93, 253, 203, 0.85) 100%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(124, 198, 254, 0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 }, position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'inline-block',
              mb: 3,
              px: 3,
              py: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: 50,
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.9rem',
              }}
            >
              About Us
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4.5rem", xl: "5.5rem" },
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              lineHeight: 1.2,
            }}
          >
            Welcome to{" "}
            <Box
              component="span"
              sx={{
                color: "#fff",
                display: 'block',
                mt: 1,
                background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Maalgudi Technolabs
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "900px",
              mx: "auto",
              opacity: 0.95,
              lineHeight: 1.8,
              fontSize: { xs: "1.1rem", md: "1.4rem", xl: "1.6rem" },
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Pioneering excellence in technology education through comprehensive training solutions and strategic professional development initiatives.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "white", position: 'relative' }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  pl: { md: 4 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: 'linear-gradient(180deg, #1976d2 0%, #5DFDCB 100%)',
                    borderRadius: 2,
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <Box sx={{ mb: 6 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      mb: 2,
                      px: 2,
                      py: 0.5,
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#1976d2",
                        fontWeight: 700,
                        letterSpacing: 1.5,
                      }}
                    >
                      Our Purpose
                    </Typography>
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: "#333",
                      mb: 3,
                      fontSize: { xs: "2rem", md: "3rem", xl: "4rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    Our{" "}
                    <Box component="span" sx={{ color: "#1976d2" }}>
                      Mission
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#555",
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      fontWeight: 400,
                    }}
                  >
                    Empowering professionals through comprehensive development in personality, leadership, technical expertise, financial acumen, and collaborative excellence for sustained career success.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(93, 253, 203, 0.1)',
                    borderRadius: 3,
                    border: '1px solid rgba(93, 253, 203, 0.3)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#1976d2",
                      mb: 2,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Establishing global leadership in technology education through innovation-driven programs that cultivate exceptional professionals and drive technological advancement.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 200,
                    height: 200,
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(93, 253, 203, 0.1) 100%)',
                    borderRadius: '50%',
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Mission"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 3,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa", position: 'relative' }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Box
              sx={{
                display: 'inline-block',
                mb: 2,
                px: 2,
                py: 0.5,
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#1976d2",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                }}
              >
                What We Stand For
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#333",
                mb: 3,
                fontSize: { xs: "2rem", md: "3rem", xl: "4rem" },
              }}
            >
              Our Core{" "}
              <Box component="span" sx={{ color: "#1976d2" }}>
                Values
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Foundational principles driving our commitment to educational excellence and transformative professional development
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
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 280,
                  background: darkMode
                    ? "rgba(26, 27, 28, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: `1px solid ${darkMode
                    ? "rgba(124, 198, 254, 0.2)"
                    : "rgba(124, 198, 254, 0.15)"}`,
                  borderRadius: 3,
                  padding: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: darkMode
                    ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                    : "0 4px 20px rgba(124, 198, 254, 0.1)",
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    borderColor: darkMode
                      ? "rgba(124, 198, 254, 0.4)"
                      : "rgba(124, 198, 254, 0.3)",
                    boxShadow: darkMode
                      ? "0 12px 40px rgba(124, 198, 254, 0.25)"
                      : "0 12px 40px rgba(124, 198, 254, 0.2)",
                    background: darkMode
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
                  <Box
                    sx={{
                      fontSize: '3rem',
                      color: "#7CC6FE",
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {value.icon}
                  </Box>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: darkMode ? "#F4FAFF" : "#333",
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
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? "#B0B3B8" : "#666",
                    lineHeight: 1.7,
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Skills/Expertise Section - Grid Layout */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "white", position: 'relative' }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Box
              sx={{
                display: 'inline-block',
                mb: 2,
                px: 2,
                py: 0.5,
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#1976d2",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                }}
              >
                Our Capabilities
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#333",
                mb: 3,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Areas of{" "}
              <Box component="span" sx={{ color: "#1976d2" }}>
                Expertise
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Proven capabilities across diverse technology domains developed through sustained excellence and continuous innovation
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
                  {skill.name === "Technology Training" && "Specialized programs delivering cutting-edge technical competencies"}
                  {skill.name === "Leadership Development" && "Strategic executive coaching and advanced team leadership capabilities"}
                  {skill.name === "Corporate Consulting" && "Expert guidance for seamless technology integration and optimization"}
                  {skill.name === "Digital Transformation" && "Comprehensive modernization strategies and implementation excellence"}
                  {skill.name === "Project Management" && "Advanced methodologies for successful project execution and delivery"}
                  {skill.name === "Innovation Strategy" && "Forward-thinking strategic frameworks for sustained competitive advantage"}
                </Typography>
              </Box>
            ))}
          </Box>
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
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Advance Your Professional Excellence
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Strategic career development opportunities designed for ambitious technology professionals. Connect with us today.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              component="a"
              href="/contact"
              sx={{
                px: 4,
                py: 2,
                backgroundColor: "white",
                color: "#333",
                textDecoration: "none",
                borderRadius: 2,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              Get in Touch
            </Box>
            <Box
              component="a"
              href="/courses"
              sx={{
                px: 4,
                py: 2,
                border: "2px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: 2,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#333",
                },
              }}
            >
              Explore Opportunities
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
