import { Box, Container, Typography, Button } from "@mui/material";
import couchImg from "../assets/images/couch.png";
import dotsLight from "../assets/icons/dots-light.svg";
import { Link } from "react-router";

export default function Hero({
  title,
  description,
  showButtons = true,
  showImage = true,
  showDot = true,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background dots */}
      {showDot && (
        <Box
          component="img"
          src={dotsLight}
          sx={{
            position: "absolute",
            top: 44,
            right: 124,
            width: { xs: 60, md: 240 },
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Hero text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#fff",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              {description}
            </Typography>

            {showButtons && (
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                {/* Primary action */}
                <Link to="/shop">
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#F0A500",
                      fontWeight: 700,
                      borderRadius: "999px",
                      px: 3.5,
                      py: 1.2,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#d4920a" },
                    }}
                  >
                    Shop Now
                  </Button>
                </Link>

                {/* Secondary action */}
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{
                    borderColor: "rgba(255,255,255,0.55)",
                    borderWidth: "1.5px",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "999px",
                    px: 3.5,
                    py: 1.15,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#fff",
                      borderWidth: "1.5px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  Explore
                </Button>
              </Box>
            )}
          </Box>

          {/* Hero image */}
          {showImage && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={couchImg}
                alt="Couch"
                sx={{
                  width: { xs: "85%", md: "100%" },
                  maxWidth: 500,
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
