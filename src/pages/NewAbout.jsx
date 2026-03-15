import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import {
  Rocket,
  TrendingUp,
  School,
  Engineering,
  Psychology,
  Groups,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const NewAbout = () => {
  const { mode } = useTheme();

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
    // {
    //   name: "Pratham G",
    //   role: "CEO",
    //   image: "/TeamPhotos/Pratham_Gowtham.jpg",
    // },
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
    // {
    //   name: "Jayanth C",
    //   role: "Software Engineer",
    //   image: "/TeamPhotos/Jayanth.jpeg",
    //   photoPosition: "center 10%",
    // },
    // {
    //   name: "Atrinandan J",
    //   role: "Software Engineer",

    //   image: "/TeamPhotos/Atrinandan.jpg",
    // },
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
      color: "primary",
    },
    {
      title: "Excellence",
      description:
        "Unwavering commitment to superior training quality and measurable learning outcomes",
      color: "secondary",
    },
    {
      title: "Integrity",
      description:
        "Establishing trust through transparent operations and principled professional conduct",
      color: "success",
    },
    {
      title: "Empowerment",
      description:
        "Catalyzing professional growth and maximizing individual career potential",
      color: "warning",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          color: "white",
          py: 8,
          background:
            mode === "dark"
              ? "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(37, 99, 235, 0.2) 100%)"
              : "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#F4FAFF" }}
          >
            Our Journey
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              opacity: 0.9,
              color: "#F4FAFF",
            }}
          >
            Strategic evolution in technology education excellence
          </Typography>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: mode === "dark" ? "#FFFFFF" : "#000000",
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "#FF8C00" }}>
              Story
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
              color: mode === "dark" ? "#B0B3B8" : "#666",
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
            maxWidth: "1600px",
            margin: "0 auto",
            px: { xs: 2, md: 0 },
          }}
        >
          {achievements.map((achievement, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 240,
                background:
                  mode === "dark"
                    ? "rgba(10, 10, 10, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: `1px solid ${
                  mode === "dark"
                    ? "rgba(37, 99, 235, 0.3)"
                    : "rgba(37, 99, 235, 0.2)"
                }`,
                borderRadius: 3,
                padding: 3,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  mode === "dark"
                    ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                    : "0 4px 20px rgba(37, 99, 235, 0.15)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  borderColor:
                    mode === "dark"
                      ? "rgba(255, 140, 0, 0.6)"
                      : "rgba(255, 140, 0, 0.4)",
                  boxShadow:
                    mode === "dark"
                      ? "0 12px 40px rgba(255, 140, 0, 0.3)"
                      : "0 12px 40px rgba(255, 140, 0, 0.25)",
                  background:
                    mode === "dark"
                      ? "rgba(10, 10, 10, 1)"
                      : "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "#2563EB",
                  fontSize: "1.5rem",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                {achievement.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "1.2rem",
                  minHeight: "2.4em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: 1.3,
                  color: mode === "dark" ? "#F4FAFF" : "#08090A",
                }}
              >
                {achievement.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.7,
                  textAlign: "center",
                  fontSize: "0.95rem",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: mode === "dark" ? "#B0B3B8" : "#666",
                }}
              >
                {achievement.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Workshop Gallery Section */}
      <Box sx={{ bgcolor: mode === "dark" ? "#0A0A0A" : "#F8F9FA", py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: mode === "dark" ? "#FFFFFF" : "#000000",
              }}
            >
              Our Previous{" "}
              <Box component="span" sx={{ color: "#FF8C00" }}>
                Works
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "900px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                color: mode === "dark" ? "#B0B3B8" : "#666",
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
                mb: 10,
                "&:last-child": { mb: 0 },
              }}
            >
              {/* Workshop Header */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${workshop.color}f5 0%, ${workshop.color}dd 100%)`,
                  borderRadius: 4,
                  overflow: "hidden",
                  mb: 5,
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                  }}
                >
                  {/* Left Section - Main Content */}
                  <Box sx={{ flex: 1, p: { xs: 4, md: 5 }, pr: { md: 4 } }}>
                    {/* Workshop Topic Badge */}
                    <Box sx={{ mb: 3 }}>
                      <Chip
                        label={workshop.topic}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.25)",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: 1.2,
                          textTransform: "uppercase",
                          height: 32,
                          borderRadius: 2,
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.4)",
                          px: 2,
                        }}
                      />
                    </Box>

                    {/* Institution Name */}
                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        fontWeight: 800,
                        mb: 1.5,
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        lineHeight: 1.2,
                        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      {workshop.institution}
                    </Typography>

                    {/* Full Institution Name */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgba(255, 255, 255, 0.95)",
                        fontWeight: 500,
                        mb: 3,
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                        lineHeight: 1.4,
                        letterSpacing: 0.5,
                      }}
                    >
                      {workshop.fullName}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.92)",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        fontWeight: 400,
                      }}
                    >
                      {workshop.description}
                    </Typography>
                  </Box>

                  {/* Right Section - Location Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "flex-start", md: "center" },
                      p: { xs: 4, md: 4 },
                      pt: { xs: 0, md: 4 },
                      minWidth: { md: "220px" },
                      background: {
                        xs: "transparent",
                        md: "rgba(0, 0, 0, 0.1)",
                      },
                      borderLeft: {
                        xs: "none",
                        md: "1px solid rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(15px)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        minWidth: { xs: "auto", md: "140px" },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          display: "block",
                          mb: 1,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {workshop.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Photo Gallery Grid */}
              {workshop.photos.length === 1 ? (
                // Special layout for single photo (UVCE)
                <Box
                  sx={{
                    px: { xs: 0, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      bgcolor: mode === "dark" ? "#000000" : "white",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 16px 48px ${workshop.color}50`,
                        "& img": {
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "50%",
                        overflow: "hidden",
                        bgcolor: mode === "dark" ? "#0A0A0A" : "grey.100",
                      }}
                    >
                      <Box
                        component="img"
                        src={workshop.photos[0]}
                        alt={`${workshop.institution} Workshop`}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      {/* Overlay gradient for better text visibility */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                          p: 4,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "white",
                            fontWeight: 700,
                            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                          }}
                        >
                          {workshop.topic} at {workshop.institution}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : (
                // Grid layout for multiple photos
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                      md:
                        workshop.photos.length >= 4
                          ? "repeat(3, 1fr)"
                          : "repeat(2, 1fr)",
                      lg:
                        workshop.photos.length >= 4
                          ? "repeat(4, 1fr)"
                          : "repeat(3, 1fr)",
                    },
                    gap: 3,
                    px: { xs: 0, md: 2 },
                  }}
                >
                  {workshop.photos.map((photo, photoIndex) => (
                    <Box
                      key={photoIndex}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 2,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        bgcolor: mode === "dark" ? "#000000" : "white",
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.02)",
                          boxShadow: `0 12px 40px ${workshop.color}40`,
                          "& .photo-number": {
                            opacity: 0,
                          },
                          "& img": {
                            transform: "scale(1.1)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          paddingTop: "75%",
                          overflow: "hidden",
                          bgcolor: mode === "dark" ? "#0A0A0A" : "grey.100",
                        }}
                      >
                        <Box
                          component="img"
                          src={photo}
                          alt={`${workshop.institution} Workshop ${
                            photoIndex + 1
                          }`}
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <Box
                          className="photo-number"
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: workshop.color,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            opacity: 1,
                            transition: "opacity 0.3s ease",
                          }}
                        >
                          {photoIndex + 1}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}

              {/* Divider between workshops */}
              {workshopIndex < workshops.length - 1 && (
                <Box
                  sx={{
                    mt: 8,
                    height: 2,
                    background: `linear-gradient(to right, transparent 0%, ${workshop.color}40 50%, transparent 100%)`,
                  }}
                />
              )}
            </Box>
          ))}

          {/* Footer Message */}
          <Box
            sx={{
              textAlign: "center",
              mt: 10,
              pt: 6,
              borderTop: `2px solid ${
                mode === "dark" ? "rgba(37, 99, 235, 0.2)" : "rgba(0,0,0,0.08)"
              }`,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: mode === "dark" ? "#F4FAFF" : "#000000",
                fontWeight: 600,
                mb: 2,
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
                fontSize: "1.05rem",
                color: mode === "dark" ? "#B0B3B8" : "#666",
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
      <Box sx={{ bgcolor: mode === "dark" ? "#000000" : "#FFFFFF", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: mode === "dark" ? "#FFFFFF" : "#000000",
              }}
            >
              Our Core{" "}
              <Box component="span" sx={{ color: "#FF8C00" }}>
                Values
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                color: mode === "dark" ? "#B0B3B8" : "#666",
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
              maxWidth: "1600px",
              margin: "0 auto",
              px: { xs: 2, md: 0 },
            }}
          >
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 240,
                  background:
                    mode === "dark"
                      ? "rgba(10, 10, 10, 0.95)"
                      : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  border: `1px solid ${
                    mode === "dark"
                      ? "rgba(37, 99, 235, 0.3)"
                      : "rgba(37, 99, 235, 0.2)"
                  }`,
                  borderRadius: 3,
                  padding: 3,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow:
                    mode === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                      : "0 4px 20px rgba(37, 99, 235, 0.15)",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    borderColor:
                      mode === "dark"
                        ? "rgba(255, 140, 0, 0.6)"
                        : "rgba(255, 140, 0, 0.4)",
                    boxShadow:
                      mode === "dark"
                        ? "0 12px 40px rgba(255, 140, 0, 0.3)"
                        : "0 12px 40px rgba(255, 140, 0, 0.25)",
                    background:
                      mode === "dark"
                        ? "rgba(10, 10, 10, 1)"
                        : "rgba(255, 255, 255, 1)",
                  },
                }}
              >
                <Chip
                  label={value.title}
                  color={value.color}
                  variant="outlined"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    py: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: mode === "dark" ? "#B0B3B8" : "#666",
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
      <Box sx={{ bgcolor: mode === "dark" ? "#0A0A0A" : "#FFFFFF", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: mode === "dark" ? "#FFFFFF" : "#000000",
              }}
            >
              Meet Our{" "}
              <Box component="span" sx={{ color: "#FF8C00" }}>
                Team
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                fontSize: "1.05rem",
                color: mode === "dark" ? "#B0B3B8" : "#666",
              }}
            >
              Expert professionals driving innovation and excellence in
              technology education
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid
                item
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: 300,
                    height: 280,
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    background:
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(20,20,30,0.95) 100%)"
                        : "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.95) 100%)",
                    border: `2px solid ${
                      mode === "dark"
                        ? "rgba(37,99,235,0.25)"
                        : "rgba(37,99,235,0.12)"
                    }`,
                    boxShadow:
                      mode === "dark"
                        ? "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
                        : "0 8px 32px rgba(37,99,235,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #2563EB 0%, #FF8C00 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.03)",
                      borderColor: "#FF8C00",
                      boxShadow:
                        mode === "dark"
                          ? "0 24px 64px rgba(255,140,0,0.4), 0 0 0 1px rgba(255,140,0,0.2)"
                          : "0 24px 64px rgba(255,140,0,0.3), 0 0 0 1px rgba(255,140,0,0.15)",
                      "&::before": {
                        opacity: 1,
                      },
                      "& .avatar-ring": {
                        transform: "rotate(180deg) scale(1.1)",
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      height: "100%",
                      display: "grid",
                      gridTemplateRows: "auto 50px 1fr auto",
                      alignItems: "center",
                      textAlign: "center",
                      px: 2,
                      py: 2.5,
                    }}
                  >
                    {/* Avatar with animated ring */}
                    <Box sx={{ position: "relative", mx: "auto" }}>
                      <Box
                        className="avatar-ring"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 110,
                          height: 110,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                          opacity: 0.15,
                          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 100,
                          height: 100,
                          position: "relative",
                          border: "4px solid",
                          borderColor: mode === "dark" ? "#FF8C00" : "#2563EB",
                          boxShadow:
                            mode === "dark"
                              ? "0 12px 32px rgba(255,140,0,0.4), 0 0 0 8px rgba(255,140,0,0.1)"
                              : "0 12px 32px rgba(37,99,235,0.3), 0 0 0 8px rgba(37,99,235,0.08)",
                          transition: "all 0.4s ease",
                          "& img": {
                            objectFit: "cover",
                            objectPosition:
                              member.photoPosition || "center top",
                          },
                        }}
                      />
                    </Box>

                    {/* Name */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.3,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 1,
                        background:
                          mode === "dark"
                            ? "linear-gradient(135deg, #F4FAFF 0%, #E0E7FF 100%)"
                            : "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {member.name}
                    </Typography>

                    {/* Spacer */}
                    <Box />

                    {/* Role Badge */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 0.5,
                      }}
                    >
                      <Chip
                        label={member.role}
                        sx={{
                          background:
                            "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          height: 30,
                          px: 2,
                          borderRadius: 2,
                          boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          letterSpacing: "0.5px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 8px 24px rgba(37,99,235,0.45)",
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#000000", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}></Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewAbout;
