import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Avatar,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  LocationOn,
} from "@mui/icons-material";

const NewAbout = () => {
  const achievements = [
    {
      year: "2021",
      title: "Founded Maalgudi Technolabs",
      description:
        "Established to deliver industry-aligned education and accelerate professional development",
    },
    {
      year: "2022",
      title: "First 10 Students",
      description:
        "Successfully delivered transformative training programs to inaugural cohort of technology professionals",
    },
    {
      year: "2023",
      title: "Expanded to IoT & Cloud",
      description:
        "Integrated advanced technology specializations into comprehensive curriculum framework",
    },
    {
      year: "2023",
      title: "Leadership Training",
      description:
        "Launched strategic leadership and executive development program suite",
    },
    {
      year: "2024",
      title: "Professional Milestone",
      description:
        "Achieved significant milestone in professional training and career transformation impact",
    },
    {
      year: "2024",
      title: "Workshop Series Launch",
      description:
        "Conducted comprehensive Python and IoT workshops at premier institutions including DSATM, RVCE, and UVCE in Bengaluru",
    },
  ];

  const workshops = [
    {
      institution: "DSATM",
      fullName: "Dayananda Sagar Academy of Technology and Management",
      location: "Bengaluru",
      topic: "IOT + AWS Workshop",
      description:
        "Comprehensive Python programming workshop conducted at DSATM in collaboration with their Maker's Space, empowering students with practical coding skills and real-world applications.",
      photos: [
        "/workshop-photos/DSATM/d5.jpg",
        "/workshop-photos/DSATM/d6.jpg",
        "/workshop-photos/DSATM/d2.jpg",
        "/workshop-photos/DSATM/d4.jpg",
      ],
      color: "#2563EB",
    },
    {
      institution: "RVCE",
      fullName: "RV College of Engineering",
      location: "Bengaluru",
      topic: "IOT + AWS Workshop",
      description:
        "Intensive Internet of Things workshop at RVCE, providing hands-on experience with IoT devices, sensor integration, and real-world IoT project implementations.",
      photos: [
        "/workshop-photos/RVCE/r1.jpg",
        "/workshop-photos/RVCE/r2.jpg",
        "/workshop-photos/RVCE/r3.jpg",
        "/workshop-photos/RVCE/r4.jpg",
      ],
      color: "#FF8C00",
    },
    {
      institution: "UVCE",
      fullName: "University Visvesvaraya College of Engineering",
      location: "Bengaluru",
      topic: "IOT + AWS Workshop",
      description:
        "Advanced IoT workshop at UVCE focusing on embedded systems, wireless communication, and practical IoT solutions for modern engineering challenges.",
      photos: ["/workshop-photos/UVCE/u1.jpg"],
      color: "#2563EB",
    },
  ];

  const team = [
    {
      name: "Raghu Nila",
      role: "Founder",
      image: "/TeamPhotos/Raghu_Nila.jpg",
    },
    {
      name: "Pradyumna S Athreya",
      role: "CMO",
      image: "/TeamPhotos/Pradyumna.png",
    },
    {
      name: "Rushil B R",
      role: "CTO",
      image: "/TeamPhotos/Rushil.jpg",
    },
    {
      name: "Adarsh G B",
      role: "CFO",
      image: "/TeamPhotos/Adarsh.jpg",
    },
    {
      name: "Pavan Kumar C Banasode",
      role: "Technical Specialist",
      image: "/TeamPhotos/Pavan_Kumar.jpg",
    },
    {
      name: "Shreyas S",
      role: "Technical Specialist",
      image: "/TeamPhotos/Shreyas.jpg",
    },
    {
      name: "Paavani Nayak",
      role: "Technical Specialist",
      image: "/TeamPhotos/PavaniNayak.png",
    },
    {
      name: "Ashray A",
      role: "Software Engineer",
      image: "/TeamPhotos/Ashray.jpeg",
    },
    {
      name: "Pavani A M",
      role: "Software Engineer",
      image: "/TeamPhotos/Pavani.jpeg",
    },
    {
      name: "Mahith R",
      role: "Software Engineer",
      image: "/TeamPhotos/Mahith.jpeg",
      photoPosition: "center 20%",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Continuous advancement through emerging technology integration and progressive methodologies",
      color: "#3B82F6",
    },
    {
      title: "Excellence",
      description:
        "Unwavering commitment to superior training quality and measurable learning outcomes",
      color: "#FF8C00",
    },
    {
      title: "Integrity",
      description:
        "Establishing trust through transparent operations and principled professional conduct",
      color: "#10B981",
    },
    {
      title: "Empowerment",
      description:
        "Catalyzing professional growth and maximizing individual career potential",
      color: "#F59E0B",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          textAlign: "center",
          background:
            'linear-gradient(180deg, rgba(8, 9, 10, 0.8) 0%, rgba(8, 9, 10, 0.95) 100%), radial-gradient(ellipse at 50% 20%, rgba(37, 99, 235, 0.22) 0%, transparent 70%)',
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
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
              Our History & Culture
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              color: "#F8FAFC",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              letterSpacing: "-0.02em",
              mb: 2.5,
            }}
          >
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#CBD5E1",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Strategic evolution in technology education excellence
          </Typography>
        </Container>
      </Box>

      {/* Timeline / Achievements Section */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#08090A" }}>
        <Container maxWidth="lg">
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
              MILESTONES
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
              Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Story
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
              Progressive milestones defining our path to educational excellence
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {achievements.map((achievement, index) => (
              <Box
                key={index}
                sx={{
                  background: "rgba(17, 20, 28, 0.8)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 3.5 },
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
                    transform: "translateY(-6px)",
                    borderColor: "rgba(255, 140, 0, 0.4)",
                    boxShadow: "0 20px 45px -15px rgba(255, 140, 0, 0.25)",
                    background: "rgba(22, 27, 38, 0.95)",
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Year Badge */}
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={achievement.year}
                    sx={{
                      backgroundColor: "rgba(37, 99, 235, 0.15)",
                      color: "#60A5FA",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      border: "1px solid rgba(37, 99, 235, 0.3)",
                      px: 1,
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#F8FAFC",
                    fontSize: "1.2rem",
                    mb: 1.5,
                    lineHeight: 1.35,
                  }}
                >
                  {achievement.title}
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
                  {achievement.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Workshop Gallery Section */}
      <Box sx={{ backgroundColor: "#0B0E17", py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
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
              ACADEMIC COLLABORATIONS
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
              Our Previous{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Works
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "850px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                color: "#94A3B8",
              }}
            >
              We have conducted comprehensive technical workshops at premier
              educational institutions across Bengaluru, collaborating with
              their Maker's Spaces to deliver hands-on training in Python
              programming and IoT technologies.
            </Typography>
          </Box>

          {/* Individual College Workshop Sections */}
          {workshops.map((workshop, workshopIndex) => (
            <Box
              key={workshopIndex}
              sx={{
                mb: { xs: 8, md: 10 },
                "&:last-child": { mb: 0 },
              }}
            >
              {/* Workshop Header Card */}
              <Box
                sx={{
                  background: "rgba(17, 20, 28, 0.85)",
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${workshop.color}40`,
                  borderRadius: "20px",
                  p: { xs: 3.5, md: 5 },
                  mb: 4,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${workshop.color}, #FF8C00)`,
                  },
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 2, flexWrap: "wrap" }}>
                      <Chip
                        label={workshop.topic}
                        sx={{
                          backgroundColor: `${workshop.color}25`,
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          border: `1px solid ${workshop.color}50`,
                        }}
                      />
                      <Chip
                        icon={<LocationOn sx={{ fontSize: "1rem !important", color: "#FF8C00" }} />}
                        label={workshop.location}
                        sx={{
                          backgroundColor: "rgba(255, 140, 0, 0.12)",
                          color: "#FFA500",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          border: "1px solid rgba(255, 140, 0, 0.25)",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        color: "#F8FAFC",
                        fontWeight: 800,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        mb: 1,
                      }}
                    >
                      {workshop.institution}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "#94A3B8",
                        fontWeight: 500,
                        fontSize: { xs: "1rem", md: "1.15rem" },
                        mb: 2,
                      }}
                    >
                      {workshop.fullName}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#CBD5E1",
                        lineHeight: 1.75,
                        fontSize: "0.98rem",
                      }}
                    >
                      {workshop.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" }, mt: { xs: 1, md: 0 } }}>
                    <Box
                      sx={{
                        display: { xs: "block", md: "inline-block" },
                        p: { xs: 2, sm: 2.5 },
                        borderRadius: "14px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="caption" sx={{ color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Host Campus
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#F8FAFC", fontWeight: 700, mt: 0.5, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                        {workshop.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#FF8C00", fontWeight: 600 }}>
                        {workshop.location}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Photo Gallery Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: workshop.photos.length === 1 ? "1fr" : "repeat(2, 1fr)",
                    md: workshop.photos.length === 1 ? "1fr" : "repeat(4, 1fr)",
                  },
                  gap: 2.5,
                }}
              >
                {workshop.photos.map((photo, photoIndex) => (
                  <Box
                    key={photoIndex}
                    sx={{
                      position: "relative",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                      aspectRatio: workshop.photos.length === 1 ? "16/9" : "4/3",
                      maxHeight: workshop.photos.length === 1 ? "480px" : "280px",
                      backgroundColor: "#11141C",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                        borderColor: workshop.color,
                        boxShadow: `0 15px 35px -5px ${workshop.color}40`,
                        "& img": {
                          transform: "scale(1.06)",
                        },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={photo}
                      alt={`${workshop.institution} Workshop ${photoIndex + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "rgba(17, 20, 28, 0.8)",
                        backdropFilter: "blur(6px)",
                        border: `1px solid ${workshop.color}`,
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    >
                      {photoIndex + 1}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          {/* Footer Message */}
          <Box
            sx={{
              textAlign: "center",
              mt: 8,
              pt: 6,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#F8FAFC",
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              Empowering Future Innovators
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: "1.02rem",
                color: "#94A3B8",
              }}
            >
              Through our partnerships with leading educational institutions and
              their Maker's Spaces, we continue to foster innovation and deliver
              hands-on learning experiences for the next generation of
              technology professionals.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ backgroundColor: "#08090A", py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
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
              GUIDING PRINCIPLES
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
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#94A3B8",
              }}
            >
              Core principles driving our educational excellence and
              professional impact
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
                  minHeight: 220,
                  background: "rgba(17, 20, 28, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 3.5 },
                  transition: "all 0.35s ease",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: value.color,
                    boxShadow: `0 18px 40px -12px ${value.color}35`,
                  },
                }}
              >
                <Chip
                  label={value.title}
                  sx={{
                    mb: 2.5,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    py: 2,
                    px: 1,
                    backgroundColor: `${value.color}15`,
                    color: value.color,
                    border: `1.5px solid ${value.color}40`,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.7,
                    fontSize: "0.92rem",
                    color: "#94A3B8",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ backgroundColor: "#0B0E17", py: { xs: 10, md: 14 } }}>
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
              LEADERSHIP & EXPERTISE
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
              Meet Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Team
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#94A3B8",
              }}
            >
              Expert professionals driving innovation and excellence in
              technology education
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: { xs: 1.5, sm: 2.5, md: 3 },
              maxWidth: "1480px",
              mx: "auto",
            }}
          >
            {team.map((member, index) => (
              <Card
                key={index}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 230, sm: 290 },
                  borderRadius: { xs: "14px", sm: "18px" },
                  background: "rgba(17, 20, 28, 0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #2563EB 0%, #FF8C00 100%)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(255, 140, 0, 0.4)",
                    boxShadow: "0 20px 45px -15px rgba(255, 140, 0, 0.25)",
                    "&::before": {
                      opacity: 1,
                    },
                    "& .team-avatar": {
                      borderColor: "#FF8C00",
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 1.5, sm: 3 },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  {/* Avatar */}
                  <Box sx={{ position: "relative", mb: { xs: 1.5, sm: 2 } }}>
                    <Avatar
                      className="team-avatar"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: { xs: 72, sm: 96 },
                        height: { xs: 72, sm: 96 },
                        border: "3px solid #2563EB",
                        boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)",
                        transition: "all 0.35s ease",
                        "& img": {
                          objectFit: "cover",
                          objectPosition: member.photoPosition || "center top",
                        },
                      }}
                    />
                  </Box>

                  {/* Member Name with strictly fixed uniform container height */}
                  <Box
                    sx={{
                      height: { xs: 44, sm: 50 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      px: 0.5,
                      mb: { xs: 1, sm: 1.5 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "0.82rem", sm: "0.96rem" },
                        color: "#F8FAFC",
                        lineHeight: 1.25,
                        textAlign: "center",
                      }}
                    >
                      {member.name}
                    </Typography>
                  </Box>

                  {/* Member Role Badge */}
                  <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Chip
                      label={member.role}
                      sx={{
                        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: { xs: "0.68rem", sm: "0.78rem" },
                        height: { xs: 24, sm: 28 },
                        px: { xs: 1, sm: 1.5 },
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                        whiteSpace: "nowrap",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewAbout;
