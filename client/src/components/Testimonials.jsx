import { Box, Container, Typography, Avatar, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import personImg from "../assets/images/person-1.png";

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1.8rem",
            textAlign: "center",
            mb: 6,
          }}
        >
          Testimonials
        </Typography>

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            px: { xs: 6, md: 10 },
          }}
        >
          {/* Previous control */}
          <IconButton
            sx={{
              position: "absolute",
              left: { xs: -4, md: -60 },
              top: "40%",
              transform: "translateY(-50%)",
              border: "1px solid #ddd",
              backgroundColor: "#e8e8e8",
              width: 52,
              height: 52,
              "&:hover": { backgroundColor: "#3d6b4f", color: "#fff" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          </IconButton>

          {/* Testimonial text */}
          <Typography
            sx={{
              fontStyle: "italic",
              color: "#555",
              lineHeight: 1.9,
              mb: 4,
              fontSize: { xs: "0.88rem", md: "1rem" },
            }}
          >
            "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Integer convallis volutpat dui quis scelerisque."
          </Typography>

          {/* Author info */}
          <Avatar
            src={personImg}
            alt="Maria Jones"
            sx={{
              width: 72,
              height: 72,
              mx: "auto",
              mb: 1.5,
              border: "3px solid #e8a598",
            }}
          />
          <Typography sx={{ fontWeight: 700 }}>Maria Jones</Typography>
          <Typography
            sx={{
              color: "#6c757d",
              fontSize: "0.85rem",
            }}
          >
            CEO, Co-Founder, XYZ Inc.
          </Typography>

          {/* Slide indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.8,
              mt: 3,
            }}
          >
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: i === 2 ? "#2d2d2d" : "#ccc",
                }}
              />
            ))}
          </Box>

          {/* Next control */}
          <IconButton
            sx={{
              position: "absolute",
              right: { xs: -4, md: -60 },
              top: "40%",
              transform: "translateY(-50%)",
              border: "1px solid #ddd",
              backgroundColor: "#e8e8e8",
              width: 52,
              height: 52,
              "&:hover": { backgroundColor: "#3d6b4f", color: "#fff" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
