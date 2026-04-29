import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../data/products.js";

export default function FeaturedProducts({ leftText = true, onAdd }) {
  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 7, md: 10 } }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          wrap="nowrap"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, px: { xs: 0, md: 0 } }}
        >
          {/* Section intro */}
          {leftText && (
            <Grid
              size={{ xs: 12, md: "auto" }}
              sx={{
                width: { xs: "100%", md: "auto" },
                minWidth: { md: 280 },
                maxWidth: { md: 300 },
                flexShrink: 0,
                px: { xs: 0, md: 2 },
                py: { xs: 0, md: 8 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.9rem",
                  lineHeight: 1.25,
                  mb: 2.5,

                  letterSpacing: "-0.4px",
                }}
              >
                Crafted with
                <br />
                excellent material.
              </Typography>
              <Typography
                sx={{
                  color: "#888",
                  mb: 3.5,
                  lineHeight: 1.75,
                  fontSize: "0.88rem",
                }}
              >
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </Typography>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  backgroundColor: "#2f2f2f",
                  color: "#fff",
                  borderRadius: "999px",
                  px: 3.5,
                  py: 1.6,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  "&:hover": {
                    backgroundColor: "#1f1f1f",
                    boxShadow: "none",
                  },
                }}
              >
                Explore
              </Button>
            </Grid>
          )}

          {/* Product cards */}
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{ flex: 1, minWidth: { xs: "100%", sm: "45%", md: 0 } }}
            >
              <ProductCard product={product} onAdd={onAdd} />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
