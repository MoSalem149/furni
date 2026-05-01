import { Box, Container, Typography } from "@mui/material";
import whyImg from "../assets/images/why-choose-us-img.jpg";
import dotsYellow from "../assets/icons/dots-yellow.svg";
import { benefits } from "../data/benefits";

export default function WhyChooseUs({ rightSide = true, headerText = true }) {
  return (
    <Box sx={{ py: { xs: 5, md: 12 } }}>
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 3, md: 10 } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Benefits content */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {headerText && (
              <>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "2.2rem",
                    mb: 2,
                    color: "#222",
                  }}
                >
                  Why Choose Us
                </Typography>

                <Typography
                  sx={{
                    color: "#777",
                    mb: 5,
                    lineHeight: 1.8,
                    fontSize: "0.9rem",
                    maxWidth: 420,
                  }}
                >
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </Typography>
              </>
            )}

            {/* Benefits grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: "36px 32px",
              }}
            >
              {benefits.map((f) => (
                <Box key={f.title}>
                  {/* Benefit icon */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 52,
                      height: 52,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 4,
                        right: 4,
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        backgroundColor: "#c0d0cb",
                        opacity: 0.7,
                      }}
                    />
                    <Box
                      component="img"
                      src={f.icon}
                      alt=""
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: 36,
                        height: 36,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#222",
                      mb: 0.7,
                    }}
                  >
                    {f.title}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "0.8rem", color: "#777", lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Feature image */}
          {rightSide && (
            <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
              {/* Decorative dots */}
              <Box
                component="img"
                src={dotsYellow}
                alt=""
                sx={{
                  position: "absolute",
                  top: { xs: -20, md: -26 },
                  left: { xs: -20, md: -80 },
                  width: { xs: 130, md: 200 },
                  opacity: 0.9,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Main image */}
              <Box
                component="img"
                src={whyImg}
                alt="Why choose us"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  maxWidth: { xs: "100%", sm: 500, md: "100%" },
                  mx: "auto",
                  display: "block",
                  borderRadius: "22px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow:
                    "0 28px 48px -16px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.02)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 32px 56px -12px rgba(0,0,0,0.25)",
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
