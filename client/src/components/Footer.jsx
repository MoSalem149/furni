import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import sofaIcon from "../assets/images/sofa.png";
import { footerColumns } from "../data/footerColumns.js";

const newsletterInputSx = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#d0d0d0" },
    "&:hover fieldset": { borderColor: "#b0b0b0" },
  },
  "& input::placeholder": {
    fontSize: "0.85rem",
    color: "#aaa",
  },
};

export default function Footer() {
  return (
    <Box sx={{ mt: 12, backgroundColor: "#fff" }}>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 4 }}>
        {/* Newsletter signup section */}
        <Grid container alignItems="center" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <EmailOutlinedIcon sx={{ color: "lightgray", fontSize: 28 }} />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#3d6b4f",
                }}
              >
                Subscribe to Newsletter
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <TextField
                placeholder="Enter your name"
                size="small"
                sx={newsletterInputSx}
              />
              <TextField
                placeholder="Enter your email"
                size="small"
                sx={newsletterInputSx}
              />
              <Button
                variant="contained"
                sx={{
                  minWidth: 56,
                  width: 56,
                  height: 50,
                  borderRadius: "10px",
                  backgroundColor: "#2d4f3c",
                  flexShrink: 0,
                  padding: 0,
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#1e3829", boxShadow: "none" },
                }}
              >
                <TelegramIcon sx={{ fontSize: 20, color: "#fff" }} />
              </Button>
            </Box>
          </Grid>

          {/* Decorative product image */}
          <Grid
            size={{ md: 5 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src={sofaIcon}
              alt="Featured Chair"
              sx={{
                width: 420,
                maxWidth: "none",
                objectFit: "contain",
                mt: -24,
                mb: -4,
                overflow: "visible",
              }}
            />
          </Grid>
        </Grid>

        {/* Brand info and navigation links */}
        <Grid container spacing={2} alignItems="flex-start">
          {/* Brand introduction and socials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "2.2rem",
                color: "#3d6b4f",
                mb: 2,
                lineHeight: 1,
              }}
            >
              Furni.
            </Typography>
            <Typography
              sx={{
                color: "#777",
                fontSize: "0.875rem",
                lineHeight: 1.9,
                mb: 3,
                maxWidth: 320,
              }}
            >
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    size="small"
                    sx={{
                      color: "#3d6b4f",
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "#e8f0eb",
                      "&:hover": {
                        backgroundColor: "#3d6b4f",
                        color: "#fff",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                ),
              )}
            </Box>
          </Grid>

          {/* Footer link columns */}
          {footerColumns.map((col, idx) => (
            <Grid key={idx} size={{ xs: 6, sm: 3, md: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  pt: { xs: 3, md: 0 },
                  ml: { xs: 0, md: 4 },
                }}
              >
                {/* Column heading */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mb: 1,
                  }}
                >
                  {col.title}
                </Typography>

                {/* Column links */}
                {col.links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      color: "#555",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1,
                      "&:hover": { color: "#3d6b4f" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Legal and policy links */}
        <Divider sx={{ borderColor: "#e0e0e0", my: 4 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography sx={{ color: "#777", fontSize: "0.85rem" }}>
            Copyright ©{new Date().getFullYear()}. All Rights Reserved. —
            Designed with love by{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Untree.co
            </Box>{" "}
            Distributed By ThemeWagon
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Terms & Conditions", "Privacy Policy"].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#1a1a1a",
                  "&:hover": { color: "#3d6b4f" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
