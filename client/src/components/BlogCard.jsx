import { Box, Typography } from "@mui/material";

export default function BlogCard({ post }) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover img": { transform: "scale(1.03)" },
      }}
    >
      {/* Post image */}
      <Box
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: "100%",
            height: { xs: 200, sm: 240, md: 280 },
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>

      {/* Post title */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1rem",
          mb: 0.8,
          lineHeight: 1.4,
        }}
      >
        {post.title}
      </Typography>

      <Typography
        sx={{
          color: "#6c757d",
          fontSize: "0.85rem",
        }}
      >
        by{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          {post.author}
        </Box>{" "}
        on{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          {post.date}
        </Box>
      </Typography>
    </Box>
  );
}
