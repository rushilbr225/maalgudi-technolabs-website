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
      avatar: "/TeamPhotos/Ruhsil B R.jpg",
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
      role: "AI Specialist",
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
      title: "Excellence in Education",
      description:
        "Delivering superior quality training through industry-aligned curriculum and expert-led instruction for measurable results.",
      icon: <School />,
    },
    {
      title: "Innovation & Technology",
      description:
        "Integrating cutting-edge technologies and modern methodologies to maintain leadership in technical education excellence.",
      icon: <Code />,
    },
    {
      title: "Professional Growth",
      description:
        "Accelerating career advancement through targeted skill development and strategic professional capabilities enhancement.",
      icon: <TrendingUp />,
    },
    {
      title: "Industry Partnerships",
      description:
        "Strategic collaborations ensuring training programs align with current industry requirements and emerging market demands.",
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
          background:
            'linear-gradient(135deg, rgba(124, 198, 254, 0.95) 0%, rgba(93, 253, 203, 0.95) 100%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: 15,
          textAlign: "center",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4rem", xl: "5rem" },
            }}
          >
            About{" "}
            <Box component="span" sx={{ color: "#1a1a1a" }}>
              Maalgudi Technolabs
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "100%",
              mx: "auto",
              opacity: 0.95,
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.3rem", xl: "1.5rem" },
            }}
          >
            Pioneering excellence in technology education through comprehensive training solutions and strategic professional development initiatives.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3rem", xl: "4rem" },
                }}
              >
                Our{" "}
                <Box component="span" sx={{ color: "#7CC6FE" }}>
                  Mission
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#666",
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                Empowering professionals through comprehensive development in personality, leadership, technical expertise, financial acumen, and collaborative excellence for sustained career success.
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "#7CC6FE",
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Establishing global leadership in technology education through innovation-driven programs that cultivate exceptional professionals and drive technological advancement.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 0,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
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
                Values
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
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
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Our{" "}
              <Box component="span" sx={{ color: "#7CC6FE" }}>
                Expertise
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
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

      {/* Team Section */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
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
              Meet Our{" "}
              <Box component="span" sx={{ color: "#7CC6FE" }}>
                Team
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Expert professionals committed to delivering exceptional learning experiences and measurable career outcomes
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: 3,
              maxWidth: '1800px',
              margin: '0 auto',
              px: { xs: 2, md: 0 },
            }}
          >
            {team.map((member, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 420,
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
                  alignItems: 'center',
                  textAlign: 'center',
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
                <Avatar
                  src={member.avatar || undefined}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    border: '3px solid #7CC6FE',
                    transition: 'all 0.3s ease',
                    backgroundColor: member.avatar ? 'transparent' : '#7CC6FE',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {!member.avatar && member.name.split(' ').map(n => n[0]).join('')}
                </Avatar>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: darkMode ? "#F4FAFF" : "#333",
                    fontSize: '1.3rem',
                    mb: 0.5,
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#7CC6FE",
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 1,
                  }}
                >
                  {member.role}
                </Typography>

                {member.education && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#B0B3B8" : "#666",
                      fontSize: '0.85rem',
                      mb: 2,
                      fontStyle: 'italic',
                    }}
                  >
                    {member.education}
                  </Typography>
                )}

                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? "#B0B3B8" : "#666",
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                    mb: 3,
                    flex: 1,
                  }}
                >
                  {member.bio}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center',
                  }}
                >
                  {member.skills.map((skill, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        backgroundColor: '#5DFDCB',
                        color: '#08090A',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundColor: '#3ffcc1',
                        },
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ color: "#7CC6FE" }} />
              <Typography>info@Maalgudi Technolabs.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ color: "#7CC6FE" }} />
              <Typography>+91 9876543210</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkedIn sx={{ color: "#7CC6FE" }} />
              <Typography>Follow us on LinkedIn</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
