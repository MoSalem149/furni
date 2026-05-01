import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router";
import BlogCard from "./BlogCard";
import { posts } from "../data/posts.js";

export default function BlogPreview() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        {/* Section header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            Recent Blog
          </Typography>
          <Link to="/blog">
            <Button
              sx={{
                fontWeight: 500,
                color: "#2f2f2f",
                textTransform: "none",
                fontSize: "0.9rem",
                textDecoration: "underline",
                "&:hover": { background: "transparent", color: "#3d6b4f" },
              }}
            >
              View All Posts
            </Button>
          </Link>
        </Box>

        {/* Blog cards */}
        <Grid
          container
          spacing={4}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
          }}
        >
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
