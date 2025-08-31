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
        "Started with a vision to bridge the gap between education and industry",
    },
    {
      year: "2019",
      title: "First 100 Students",
      description:
        "Successfully trained our first batch of technology enthusiasts",
    },
    {
      year: "2020",
      title: "Expanded to IoT & Cloud",
      description: "Added cutting-edge technology workshops to our curriculum",
    },
    {
      year: "2021",
      title: "Leadership Training",
      description:
        "Introduced comprehensive leadership and personality development programs",
    },
    {
      year: "2022",
      title: "1000+ Graduates",
      description: "Reached the milestone of training over 1000 professionals",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received awards for excellence in technical education and training",
    },
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      expertise: "IoT, Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Head of Training",
      expertise: "Leadership, Public Speaking",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      expertise: "Software Development, AI",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly evolving with the latest technology trends",
      color: "primary",
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality training and education",
      color: "secondary",
    },
    {
      title: "Integrity",
      description: "Building trust through transparent and honest practices",
      color: "success",
    },
    {
      title: "Empowerment",
      description: "Enabling individuals to reach their full potential",
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
            Building the future of technology education
          </Typography>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          From humble beginnings to industry leadership
        </Typography>

        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{ p: 3, borderRadius: 2, height: "100%" }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  {achievement.year}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {achievement.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            fontWeight="bold"
          >
            Our Core Values
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            The principles that guide everything we do
          </Typography>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Chip
                    label={value.title}
                    color={value.color}
                    variant="outlined"
                    sx={{ mb: 2, fontWeight: "bold", fontSize: "1rem", py: 2 }}
                  />
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
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
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      border: "4px solid",
                      borderColor: "primary.main",
                    }}
                  />
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
