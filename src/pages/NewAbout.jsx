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

  const workshopGallery = [
    {
      title: "Python Workshop @ DSATM, Bengaluru",
      image: "/workshop-photos/workshop1.jpg",
      description: "Comprehensive Python programming workshop at DSATM",
    },
    {
      title: "IoT Workshop @ RVCE, Bengaluru",
      image: "/workshop-photos/workshop2.jpg",
      description: "Internet of Things hands-on workshop at RV College of Engineering",
    },
    {
      title: "IoT Workshop @ UVCE, Bengaluru",
      image: "/workshop-photos/workshop3.jpg",
      description: "IoT training session at University Visvesvaraya College of Engineering",
    },
    {
      title: "Hands-on Training Session",
      image: "/workshop-photos/workshop4.jpg",
      description: "Students engaging with practical IoT implementations",
    },
    {
      title: "Technical Workshop Activity",
      image: "/workshop-photos/workshop5.jpg",
      description: "Interactive learning and project development",
    },
    {
      title: "Maker's Space Collaboration",
      image: "/workshop-photos/workshop6.jpg",
      description: "Collaborative workshop at institutional Maker's Space",
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
      image: "/TeamPhotos/Ruhsil B R.jpg",
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
      role: "AI Specialist",
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
      <Box sx={{ bgcolor: "white", py: 10 }}>
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
              Our Previous{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Works
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              Our team has conducted comprehensive Python and IoT workshops at premier institutions including 
              DSATM (Dayananda Sagar Academy of Technology and Management) in Bengaluru. 
              These hands-on workshops, held in collaboration with the institutions' Maker's Spaces, 
              empowered students with practical skills in embedded systems, IoT, and emerging technologies.
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
              gap: 4,
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, md: 0 },
            }}
          >
            {workshopGallery.map((photo, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: "0 12px 40px rgba(25, 118, 210, 0.3)",
                    '& .photo-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={photo.image}
                  alt={photo.title}
                  sx={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <Box
                  sx={{
                    display: 'none',
                    width: '100%',
                    height: 280,
                    backgroundColor: 'primary.main',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </Box>
                <Box
                  className="photo-overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    padding: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {photo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {photo.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontStyle: 'italic',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Through our partnerships with leading educational institutions and their Maker's Spaces, 
              we continue to foster innovation and hands-on learning experiences for the next generation of technology professionals.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          The experts behind our success
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                elevation={6}
                sx={{
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    src={member.image || undefined}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      border: "4px solid",
                      borderColor: "primary.main",
                      backgroundColor: member.image ? 'transparent' : 'primary.main',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#fff',
                    }}
                  >
                    {!member.image && member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.expertise}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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
