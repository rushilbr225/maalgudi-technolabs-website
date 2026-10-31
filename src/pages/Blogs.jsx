import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  ArrowForward,
} from "@mui/icons-material";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technical", "Tutorial", "News", "Career"];

  const blogPosts = [
    {
      id: 1,
      title: "Mastering Java Backend Development in 2025",
      excerpt:
        "Explore the latest trends and best practices in Java backend development, including Spring Boot 3.0, microservices architecture, and cloud-native applications.",
      category: "Technical",
      author: "Pratham G",
      authorAvatar: "/TeamPhotos/Pratham.jpg",
      date: "December 10, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "IoT Integration with AWS: Complete Guide",
      excerpt:
        "Learn how to build scalable IoT solutions using AWS IoT Core, Lambda functions, and real-time data pipelines.",
      category: "Tutorial",
      author: "Rushil B R",
      authorAvatar: "/TeamPhotos/Rushil.jpg",
      date: "December 8, 2025",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "DSA Interview Preparation Guide",
      excerpt:
        "Essential data structures and algorithms every developer should master for technical interviews.",
      category: "Career",
      author: "Adarsh G B",
      authorAvatar: "/TeamPhotos/Adarsh.jpg",
      date: "December 5, 2025",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* HERO */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          textAlign: "center",
          color: "white",
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
              Knowledge Hub
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.15,
              mb: 2.5,
              color: "#F8FAFC",
              letterSpacing: "-0.02em",
            }}
          >
            Insights & Technology Trends
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: "#CBD5E1",
              lineHeight: 1.8,
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              fontWeight: 400,
            }}
          >
            Expert perspectives on software development, cloud, IoT, and career growth
          </Typography>
        </Container>
      </Box>

      {/* CATEGORY FILTER */}
      <Box sx={{ py: 3, backgroundColor: "#08090A", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap" }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  px: 2,
                  py: 1,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  background:
                    selectedCategory === category
                      ? "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)"
                      : "rgba(255, 255, 255, 0.04)",
                  color: selectedCategory === category ? "#FFFFFF" : "#94A3B8",
                  border:
                    selectedCategory === category
                      ? "1px solid rgba(255, 140, 0, 0.5)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: "rgba(255, 140, 0, 0.4)",
                    color: "#FFFFFF",
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* FEATURED */}
      {featuredPost && selectedCategory === "All" && (
        <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#08090A" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{ color: "#F8FAFC", mb: 4, textAlign: "center", fontWeight: 800, fontSize: { xs: "2rem", md: "2.6rem" } }}
            >
              Featured{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Article
              </Box>
            </Typography>

            <Card
              sx={{
                background: "rgba(17, 20, 28, 0.85)",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(255, 140, 0, 0.4)",
                  boxShadow: "0 25px 60px -15px rgba(255, 140, 0, 0.25)",
                },
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <CardMedia component="img" image={featuredPost.image} sx={{ height: "100%", minHeight: 320, objectFit: "cover" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent sx={{ p: { xs: 3.5, md: 5 } }}>
                    <Chip
                      label={featuredPost.category}
                      sx={{
                        mb: 2,
                        backgroundColor: "rgba(255, 140, 0, 0.15)",
                        color: "#FFA500",
                        fontWeight: 700,
                        border: "1px solid rgba(255, 140, 0, 0.3)",
                      }}
                    />
                    <Typography variant="h4" sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2 }}>
                      {featuredPost.title}
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", lineHeight: 1.7, mb: 3 }}>
                      {featuredPost.excerpt}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, mb: 3.5, alignItems: "center", flexWrap: "wrap" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Avatar src={featuredPost.authorAvatar} sx={{ width: 28, height: 28 }} />
                        <Typography sx={{ color: "#CBD5E1", fontSize: "0.9rem" }}>
                          {featuredPost.author}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                        <CalendarToday sx={{ fontSize: 16, color: "#FF8C00" }} />
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                          {featuredPost.date}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      sx={{
                        background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                        px: 3.5,
                        py: 1.3,
                        borderRadius: "10px",
                        fontWeight: 600,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(255, 140, 0, 0.4)",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </Box>
      )}

      {/* BLOG GRID */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#0B0E17" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3.5}>
            {regularPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(17, 20, 28, 0.8)",
                    borderRadius: "18px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "rgba(255, 140, 0, 0.4)",
                      boxShadow: "0 20px 45px -15px rgba(255, 140, 0, 0.25)",
                    },
                  }}
                >
                  <CardMedia component="img" height="220" image={post.image} sx={{ objectFit: "cover" }} />
                  <CardContent sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 1.5 }}>
                      <Chip
                        label={post.category}
                        sx={{
                          backgroundColor: "rgba(37, 99, 235, 0.15)",
                          color: "#60A5FA",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          border: "1px solid rgba(37, 99, 235, 0.3)",
                        }}
                      />
                    </Box>
                    <Typography variant="h6" sx={{ color: "#F8FAFC", mb: 1.5, fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.35 }}>
                      {post.title}
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", mb: 2.5, lineHeight: 1.6, fontSize: "0.92rem", flex: 1 }}>
                      {post.excerpt}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        pt: 2,
                        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Avatar src={post.authorAvatar} sx={{ width: 24, height: 24 }} />
                        <Typography sx={{ color: "#CBD5E1", fontSize: 13 }}>
                          {post.author}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#94A3B8", fontSize: 13 }}>
                        {post.readTime}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: "#08090A",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(255, 140, 0, 0.15) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              p: { xs: 4, sm: 6 },
              textAlign: "center",
              boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.8)",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, color: "#FF8C00", fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
              Stay Updated
            </Typography>
            <Typography sx={{ mb: 4, color: "#CBD5E1", fontSize: "1.05rem" }}>
              Subscribe for the latest tech insights and tutorials
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
                color: "#FFFFFF",
                px: 5,
                py: 1.5,
                borderRadius: "10px",
                fontWeight: 600,
                boxShadow: "0 6px 20px rgba(255, 140, 0, 0.35)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255, 140, 0, 0.5)",
                },
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
