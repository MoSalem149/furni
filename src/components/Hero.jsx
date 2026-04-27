import { Box, Container, Typography, Button } from "@mui/material";
import couchImg from "../assets/images/couch.png";
import dotsLight from "../assets/icons/dots-light.svg";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Dots decoration */}
      <Box
        component="img"
        src={dotsLight}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          width: { xs: 60, md: 80 },
          opacity: 0.5,
        }}
      />

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
          {/* Left Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#fff",
                lineHeight: 1.2,
                fontFamily: "Inter",
                mb: 2,
              }}
            >
              Modern Interior <br /> Design Studio
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
                fontFamily: "Inter",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              {/* Shop Now */}
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#F0A500",
                  color: "#1a1a1a",
                  fontWeight: 700,
                  borderRadius: "999px",
                  px: 3.5,
                  py: 1.2,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "Inter",
                  "&:hover": { backgroundColor: "#d4920a" },
                }}
              >
                Shop Now
              </Button>

              {/* Explore */}
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
                  fontFamily: "Inter",
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
          </Box>

          {/* Right Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
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
        </Box>
      </Container>
    </Box>
  );
}
