import { Box, Container, Typography, Grid } from "@mui/material";
import { team } from "../data/team";

export default function OurTeam() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section title */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            mb: { xs: 4, md: 6 },
          }}
        >
          Our Team
        </Typography>

        {/* Team grid */}
        <Grid container spacing={4}>
          {team.map((member) => (
            <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
              {/* Member photo */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  display: "block",
                  mb: 2,
                }}
              />

              {/* Member name */}
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  borderBottom: "2px solid #1a1a1a",
                  display: "inline-block",
                  mb: 0.5,
                }}
              >
                {member.name}
              </Typography>

              {/* Member role */}
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#555",
                  mb: 1.5,
                }}
              >
                {member.role}
              </Typography>

              {/* Member bio */}
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#444",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {member.description}
              </Typography>

              {/* Profile link */}
              <Typography
                component="a"
                href="#"
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#2f2f2f",
                  textDecoration: "underline",
                  cursor: "pointer",
                  "&:hover": { color: "#3b5d50" },
                }}
              >
                Learn More
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
