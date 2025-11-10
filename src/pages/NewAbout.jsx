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

const NewAbout = () => {
  const achievements = [
    {
      year: "2018",
      title: "Founded Maalgudi Technolabs",
      description:
        "Established to deliver industry-aligned education and accelerate professional development",
    },
    {
      year: "2019",
      title: "First 100 Students",
      description:
        "Successfully delivered transformative training programs to inaugural cohort of technology professionals",
    },
    {
      year: "2020",
      title: "Expanded to IoT & Cloud",
      description: "Integrated advanced technology specializations into comprehensive curriculum framework",
    },
    {
      year: "2021",
      title: "Leadership Training",
      description:
        "Launched strategic leadership and executive development program suite",
    },
    {
      year: "2022",
      title: "1000+ Graduates",
      description: "Achieved significant milestone in professional training and career transformation impact",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Awarded for sustained excellence and innovation in technical education delivery",
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
      description: "Comprehensive Python programming workshop conducted at DSATM in collaboration with their Maker's Space, empowering students with practical coding skills and real-world applications.",
      photos: [
        "/workshop-photos/DSATM/1.jpg",
        "/workshop-photos/DSATM/2.jpg",
        "/workshop-photos/DSATM/3.jpg",
        "/workshop-photos/DSATM/4.jpg",
      ],
      color: "#1976d2",
    },
    {
      institution: "RVCE",
      fullName: "RV College of Engineering",
      location: "Bengaluru",
      topic: "IOT + AWS Workshop",
      description: "Intensive Internet of Things workshop at RVCE, providing hands-on experience with IoT devices, sensor integration, and real-world IoT project implementations.",
      photos: [
        "/workshop-photos/RVCE/1.jpg",
        "/workshop-photos/RVCE/2.jpg",
        "/workshop-photos/RVCE/3.jpg",
        "/workshop-photos/RVCE/4.jpg",
        "/workshop-photos/RVCE/5.jpg",
        "/workshop-photos/RVCE/6.jpg",
      ],
      color: "#2e7d32",
    },
    {
      institution: "UVCE",
      fullName: "University Visvesvaraya College of Engineering",
      location: "Bengaluru",
      topic: "IOT + AWS Workshop",
      description: "Advanced IoT workshop at UVCE focusing on embedded systems, wireless communication, and practical IoT solutions for modern engineering challenges.",
      photos: [
        "/workshop-photos/UVCE/1.jpg",
      ],
      color: "#d32f2f",
    },
  ];

  const team = [
    {
      name: "Raghu Nila",
      role: "Founder",
      expertise: "System Architecture, Automotive Technology",
      image: "/TeamPhotos/Raghu Nila.jpg",
    },
    {
      name: "Pratham G",
      role: "CEO",
      expertise: "Digital Engineering, Leadership",
      image: "/TeamPhotos/Pratham.jpg",
    },
    {
      name: "Rushil B R",
      role: "CTO",
      expertise: "Software Engineering, System Architecture",
      image: "/TeamPhotos/Rushil.jpg",
    },
    {
      name: "Pradyumna S Athreya",
      role: "CMO",
      expertise: "Marketing Strategy, Yield Engineering",
      image: "/TeamPhotos/1RV21EC119_PRADYUMNA S ATHREYA.jpg",
    },
    {
      name: "Pavan Kumar C Banasode",
      role: "CFO",
      expertise: "Financial Strategy, Technology Integration",
      image: "/TeamPhotos/Pavan Kumar.jpg",
    },
    {
      name: "Adarsh G B",
      role: "Technical Specialist",
      expertise: "Technical Solutions, Product Development",
      image: "/TeamPhotos/Adarsh.jpg",
    },
    {
      name: "Shreyas S",
      role: "Technical Specialist",
      expertise: "Energy Systems, Technical Design",
      image: "/TeamPhotos/Shreyas.jpg",
    },
    {
      name: "Paavani Nayak",
      role: "Technical Specialist",
      expertise: "Semiconductor Design, Technical Excellence",
      image: "",
    },
    {
      name: "Atrinandan J",
      role: "Software Engineer",
      expertise: "Software Development, Problem Solving",
      image: "",
    },
    {
      name: "Ashray A",
      role: "Software Engineer",
      expertise: "Enterprise Solutions, Cloud Technologies",
      image: "",
    },
    {
      name: "Pavani A M",
      role: "Software Engineer",
      expertise: "Quality Assurance, Testing Automation",
      image: "",
    },
    {
      name: "Mahith R",
      role: "Software Engineer",
      expertise: "Generative AI, Data Science",
      image: "",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuous advancement through emerging technology integration and progressive methodologies",
      color: "primary",
    },
    {
      title: "Excellence",
      description: "Unwavering commitment to superior training quality and measurable learning outcomes",
      color: "secondary",
    },
    {
      title: "Integrity",
      description: "Establishing trust through transparent operations and principled professional conduct",
      color: "success",
    },
    {
      title: "Empowerment",
      description: "Catalyzing professional growth and maximizing individual career potential",
      color: "warning",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
          >
            Our Journey
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ opacity: 0.9 }}>
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
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Story
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Progressive milestones defining our path to educational excellence
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 3,
            maxWidth: '1600px',
            margin: '0 auto',
            px: { xs: 2, md: 0 },
          }}
        >
          {achievements.map((achievement, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 240,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: "1px solid rgba(25, 118, 210, 0.15)",
                borderRadius: 3,
                padding: 3,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: "0 4px 20px rgba(25, 118, 210, 0.1)",
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  borderColor: "rgba(25, 118, 210, 0.3)",
                  boxShadow: "0 12px 40px rgba(25, 118, 210, 0.2)",
                  background: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: '1.5rem',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                {achievement.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: '1.2rem',
                  minHeight: '2.4em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {achievement.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.7,
                  textAlign: 'center',
                  fontSize: '0.95rem',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {achievement.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Workshop Gallery Section */}
      <Box sx={{ bgcolor: "grey.50", py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Previous{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Works
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "900px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              We have conducted comprehensive technical workshops at premier educational institutions across Bengaluru,
              collaborating with their Maker's Spaces to deliver hands-on training in Python programming and IoT technologies.
            </Typography>
          </Box>

          {/* Individual College Workshop Sections */}
          {workshops.map((workshop, workshopIndex) => (
            <Box
              key={workshopIndex}
              sx={{
                mb: 10,
                '&:last-child': { mb: 0 },
              }}
            >
              {/* Workshop Header */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${workshop.color}f5 0%, ${workshop.color}dd 100%)`,
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 5,
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
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
                          textTransform: 'uppercase',
                          height: 32,
                          borderRadius: 2,
                          backdropFilter: "blur(10px)",
                          border: '1px solid rgba(255, 255, 255, 0.4)',
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
                        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'flex-start', md: 'center' },
                      p: { xs: 4, md: 4 },
                      pt: { xs: 0, md: 4 },
                      minWidth: { md: '220px' },
                      background: {
                        xs: 'transparent',
                        md: 'rgba(0, 0, 0, 0.1)'
                      },
                      borderLeft: {
                        xs: 'none',
                        md: '1px solid rgba(255, 255, 255, 0.2)'
                      },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(15px)",
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        minWidth: { xs: 'auto', md: '140px' },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                          display: 'block',
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
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 16px 48px ${workshop.color}50`,
                        '& img': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        paddingTop: '50%', // 2:1 aspect ratio for single photo
                        overflow: 'hidden',
                        bgcolor: 'grey.100',
                      }}
                    >
                      <Box
                        component="img"
                        src={workshop.photos[0]}
                        alt={`${workshop.institution} Workshop`}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {/* Overlay gradient for better text visibility */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                          p: 4,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
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
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, 1fr)',
                      md: workshop.photos.length >= 4 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                      lg: workshop.photos.length >= 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
                    },
                    gap: 3,
                    px: { xs: 0, md: 2 },
                  }}
                >
                  {workshop.photos.map((photo, photoIndex) => (
                    <Box
                      key={photoIndex}
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        bgcolor: 'white',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: `0 12px 40px ${workshop.color}40`,
                          '& .photo-number': {
                            opacity: 0,
                          },
                          '& img': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          paddingTop: '75%',
                          overflow: 'hidden',
                          bgcolor: 'grey.100',
                        }}
                      >
                        <Box
                          component="img"
                          src={photo}
                          alt={`${workshop.institution} Workshop ${photoIndex + 1}`}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <Box
                          className="photo-number"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            backgroundColor: workshop.color,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            opacity: 1,
                            transition: 'opacity 0.3s ease',
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
          <Box sx={{ textAlign: "center", mt: 10, pt: 6, borderTop: '2px solid rgba(0,0,0,0.08)' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Empowering Future Innovators
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Through our partnerships with leading educational institutions and their Maker's Spaces,
              we continue to foster innovation and deliver hands-on learning experiences for the next generation of technology professionals.
            </Typography>
          </Box>
        </Container>
      </Box>      {/* Values Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Core{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Values
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Core principles driving our educational excellence and professional impact
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
                  minHeight: 240,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: 3,
                  padding: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                    background: "rgba(255, 255, 255, 1)",
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
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
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

      {/* Team Section */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Meet Our{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Team
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                fontSize: "1.05rem",
              }}
            >
              Expert professionals driving innovation and excellence in technology education
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: 3,
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid rgba(25, 118, 210, 0.1)",
                    overflow: 'visible',
                    position: 'relative',
                    '&:hover': {
                      transform: "translateY(-12px)",
                      boxShadow: "0 16px 48px rgba(25, 118, 210, 0.2)",
                      borderColor: "rgba(25, 118, 210, 0.3)",
                      '& .member-avatar': {
                        transform: 'scale(1.08)',
                        boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, pt: 5 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                        mb: 3,
                      }}
                    >
                      <Avatar
                        className="member-avatar"
                        src={member.image || undefined}
                        alt={member.name}
                        sx={{
                          width: 150,
                          height: 150,
                          mx: "auto",
                          border: "5px solid",
                          borderColor: "primary.main",
                          backgroundColor: member.image ? 'transparent' : 'primary.main',
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: '#fff',
                          boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                          transition: 'all 0.4s ease',
                        }}
                      >
                        {!member.image && member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      {/* Decorative ring */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -6,
                          left: -6,
                          right: -6,
                          bottom: -6,
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: 'primary.light',
                          opacity: 0.3,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: '1.2rem',
                        color: 'text.primary',
                      }}
                    >
                      {member.name}
                    </Typography>

                    <Chip
                      label={member.role}
                      color="primary"
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        mb: 2,
                        height: 28,
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                      }}
                    >
                      {member.expertise}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: "grey.900", color: "white", py: 6 }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mb: 3,
                flexWrap: "wrap",
              }}
            >
              {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  component="a"
                  href="#"
                  sx={{
                    color: "grey.300",
                    textDecoration: "none",
                    "&:hover": { color: "white" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="grey.400">
              © 2023 Maalgudi Technolabs. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewAbout;
