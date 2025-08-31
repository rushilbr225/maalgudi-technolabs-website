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
  const stats = [
    { icon: <School />, number: "2000+", label: "Students Trained" },
    { icon: <Groups />, number: "150+", label: "Courses Delivered" },
    { icon: <EmojiEvents />, number: "98%", label: "Success Rate" },
    { icon: <TrendingUp />, number: "5+", label: "Years Experience" },
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Chief Technology Officer",
      bio: "With over 15 years of experience in technology training and corporate development, Dr. Kumar leads our vision for excellence in education.",
      skills: [
        "IoT Development",
        "Cloud Computing",
        "Leadership",
        "Strategic Planning",
      ],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Head of Training & Development",
      bio: "A passionate educator with expertise in curriculum design and professional development programs for corporate clients.",
      skills: [
        "Curriculum Design",
        "Corporate Training",
        "Team Management",
        "Quality Assurance",
      ],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Amit Patel",
      role: "Senior Technical Consultant",
      bio: "Technology expert specializing in system architecture and implementation with a focus on emerging technologies.",
      skills: [
        "System Architecture",
        "Technical Consulting",
        "Implementation",
        "Innovation",
      ],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sarah Williams",
      role: "Business Development Manager",
      bio: "Strategic business leader focused on expanding our reach and building partnerships with leading organizations.",
      skills: [
        "Business Strategy",
        "Partnership Development",
        "Market Analysis",
        "Client Relations",
      ],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We are committed to delivering the highest quality training programs with industry-relevant curriculum and expert instructors.",
      icon: <School />,
    },
    {
      title: "Innovation & Technology",
      description:
        "We stay at the forefront of technological advancement, incorporating the latest tools and methodologies in our training.",
      icon: <Code />,
    },
    {
      title: "Professional Growth",
      description:
        "Our focus is on empowering professionals to advance their careers and achieve their full potential in the technology sector.",
      icon: <TrendingUp />,
    },
    {
      title: "Industry Partnerships",
      description:
        "We collaborate with leading organizations to ensure our training programs meet real-world industry demands and standards.",
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
            Leading the future of technology education with innovative training
            programs and professional development solutions that transform
            careers and organizations.
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
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
                    border: "3px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#7CC6FE",
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
                To empower professionals and organizations with cutting-edge
                technology skills and leadership capabilities that drive
                innovation and success in the digital age.
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
                To be the global leader in technology education, fostering a
                community of skilled professionals who shape the future of
                technology and business innovation.
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
              The principles that guide our commitment to excellence in
              education and professional development
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
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
                      "& .value-icon": {
                        backgroundColor: "#7CC6FE",
                        color: "white",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="value-icon"
                      sx={{
                        backgroundColor: "#f8f9fa",
                        color: "#7CC6FE",
                        p: 2,
                        borderRadius: 0,
                        display: "inline-flex",
                        mb: 3,
                        fontSize: "2rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {value.icon}
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
                      {value.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        lineHeight: 1.8,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Expertise"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 0,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Our{" "}
                <Box component="span" sx={{ color: "#7CC6FE" }}>
                  Expertise
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Years of experience and continuous learning have shaped our
                expertise across multiple domains of technology and professional
                development.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#333" }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#7CC6FE", fontWeight: 600 }}
                      >
                        {skill.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.progress}
                      sx={{
                        height: 8,
                        borderRadius: 0,
                        backgroundColor: "#f0f0f0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#7CC6FE",
                          borderRadius: 0,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
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
              Passionate educators and industry experts dedicated to your
              success
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 80,
                          height: 80,
                          mr: 3,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#333",
                            mb: 1,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#7CC6FE",
                            fontWeight: 500,
                          }}
                        >
                          {member.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {member.bio}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {member.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: "#5DFDCB",
                            color: "#08090A",
                            fontWeight: 500,
                            "&:hover": {
                              backgroundColor: "#3ffcc1",
                            },
                          }}
                        />
                      ))}
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
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Join Our Learning Community
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Ready to take the next step in your professional journey? Connect
            with us today.
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
