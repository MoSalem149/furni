import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { contactInfo } from "../data/contactInfo.js";

const iconMap = {
  location: <LocationOnIcon />,
  email: <EmailIcon />,
  phone: <PhoneIcon />,
};

const contactFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#ddd" },
    "&:hover fieldset": { borderColor: "#bbb" },
    "&.Mui-focused fieldset": { borderColor: "#3b5d50" },
  },
};

export default function ContactForm() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Contact details */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {contactInfo.map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    backgroundColor: "#3b5d50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#fff",
                  }}
                >
                  {iconMap[item.icon]}
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#444",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Contact form */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Name fields */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>
                First name
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="John"
                sx={contactFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>
                Last name
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Doe"
                sx={contactFieldSx}
              />
            </Grid>
          </Grid>

          {/* Email field */}
          <Box>
            <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>
              Email address
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="info@yourdomain.com"
              sx={contactFieldSx}
            />
          </Box>

          {/* Message field */}
          <Box>
            <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>Message</Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Write your message here..."
              sx={contactFieldSx}
            />
          </Box>

          {/* Submit action */}
          <Box>
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                borderRadius: "999px",
                px: 5,
                py: 1.8,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
