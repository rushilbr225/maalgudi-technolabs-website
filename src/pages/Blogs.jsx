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
} from "@mui/material";
import {
    CalendarToday,
    AccessTime,
    ArrowForward,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const Blogs = () => {
    const { mode } = useTheme();
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
        <Box>
            {/* HERO */}
            <Box
                sx={{
                    py: { xs: 12, md: 18 },
                    textAlign: "center",
                    color: "white",
                    background:
                        "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(255,140,0,0.9))",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.6rem", md: "4.8rem" },
                            lineHeight: 1.15,
                            mb: 3,
                            textShadow: "0 4px 20px rgba(0,0,0,0.35)",
                        }}
                    >
                        Insights & Technology Trends
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 800,
                            mx: "auto",
                            opacity: 0.95,
                            lineHeight: 1.8,
                        }}
                    >
                        Expert perspectives on software development, cloud, IoT, and career growth
                    </Typography>
                </Container>
            </Box>

            {/* CATEGORY FILTER */}
            <Box sx={{ py: 4, backgroundColor: "#000000" }}>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                sx={{
                                    px: 2.5,
                                    py: 1,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    background:
                                        selectedCategory === category
                                            ? "linear-gradient(135deg, #2563EB, #FF8C00)"
                                            : "rgba(37,99,235,0.15)",
                                    color: selectedCategory === category ? "#fff" : "#B0B3B8",
                                    border: "1px solid rgba(255,140,0,0.4)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* FEATURED */}
            {featuredPost && selectedCategory === "All" && (
                <Box sx={{ py: 8, backgroundColor: "#000" }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h3"
                            sx={{ color: "#F4FAFF", mb: 4, textAlign: "center", fontWeight: 700 }}
                        >
                            Featured <span style={{ color: "#FF8C00" }}>Article</span>
                        </Typography>

                        <Card
                            sx={{
                                background: "rgba(10,10,10,0.95)",
                                borderRadius: 3,
                                overflow: "hidden",
                                border: "1px solid rgba(255,140,0,0.4)",
                                transition: "all 0.4s ease",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 20px 50px rgba(255,140,0,0.35)",
                                },
                            }}
                        >
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={featuredPost.image} height="100%" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardContent sx={{ p: 5 }}>
                                        <Chip
                                            label={featuredPost.category}
                                            sx={{
                                                mb: 2,
                                                backgroundColor: "rgba(255,140,0,0.2)",
                                                color: "#FF8C00",
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography variant="h4" sx={{ color: "#F4FAFF", fontWeight: 700 }}>
                                            {featuredPost.title}
                                        </Typography>
                                        <Typography sx={{ color: "#B0B3B8", my: 3 }}>
                                            {featuredPost.excerpt}
                                        </Typography>

                                        <Box sx={{ display: "flex", gap: 2, mb: 3, alignItems: "center" }}>
                                            <Avatar src={featuredPost.authorAvatar} />
                                            <Typography sx={{ color: "#B0B3B8" }}>
                                                {featuredPost.author}
                                            </Typography>
                                            <CalendarToday sx={{ fontSize: 16, color: "#FF8C00" }} />
                                            <Typography sx={{ color: "#B0B3B8" }}>
                                                {featuredPost.date}
                                            </Typography>
                                        </Box>

                                        <Button
                                            variant="contained"
                                            endIcon={<ArrowForward />}
                                            sx={{
                                                background:
                                                    "linear-gradient(45deg, #2563EB, #FF8C00)",
                                                px: 4,
                                                py: 1.5,
                                                "&:hover": {
                                                    transform: "translateY(-3px)",
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
            <Box sx={{ py: 8, backgroundColor: "#0A0A0A" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {regularPosts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        background: "rgba(10,10,10,0.95)",
                                        borderRadius: 3,
                                        border: "1px solid rgba(37,99,235,0.3)",
                                        transition: "all 0.4s ease",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow: "0 16px 40px rgba(255,140,0,0.35)",
                                        },
                                    }}
                                >
                                    <CardMedia component="img" height="220" image={post.image} />
                                    <CardContent>
                                        <Chip
                                            label={post.category}
                                            sx={{
                                                mb: 2,
                                                backgroundColor: "rgba(37,99,235,0.2)",
                                                color: "#2563EB",
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ color: "#F4FAFF", mb: 1 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography sx={{ color: "#B0B3B8", mb: 2 }}>
                                            {post.excerpt}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                                <Avatar src={post.authorAvatar} sx={{ width: 24, height: 24 }} />
                                                <Typography sx={{ color: "#B0B3B8", fontSize: 13 }}>
                                                    {post.author}
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ color: "#B0B3B8", fontSize: 13 }}>
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
                    py: 10,
                    textAlign: "center",
                    background: "linear-gradient(135deg, #2563EB, #FF8C00)",
                    color: "white",
                }}
            >
                <Container>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                        Stay Updated
                    </Typography>
                    <Typography sx={{ mb: 4, opacity: 0.95 }}>
                        Subscribe for the latest tech insights and tutorials
                    </Typography>
                    <Button
                        size="large"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#2563EB",
                            px: 5,
                            py: 1.5,
                            fontWeight: 600,
                            "&:hover": {
                                transform: "translateY(-4px)",
                            },
                        }}
                    >
                        Subscribe Now
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Blogs;
