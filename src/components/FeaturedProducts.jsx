import { Box, Container, Typography, Button, Grid } from "@mui/material";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Nordic Chair", price: "$50.00", image: product1 },
  { id: 2, name: "Kruzo Aero Chair", price: "$78.00", image: product2 },
  { id: 3, name: "Ergonomic Chair", price: "$43.00", image: product3 },
];

export default function FeaturedProducts() {
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
          {/* Left Text */}
          <Grid
            item
            sx={{
              width: { xs: "100%", md: "auto" },
              minWidth: { md: 280 },
              maxWidth: { md: 300 },
              flexShrink: 0,
              px: { xs: 0, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.9rem",
                lineHeight: 1.25,
                mb: 2.5,
                fontFamily: "Inter",
                color: "#1a1a1a",
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
                fontFamily: "Inter",
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
                fontFamily: "Inter",
                "&:hover": {
                  backgroundColor: "#1f1f1f",
                  boxShadow: "none",
                },
              }}
            >
              Explore
            </Button>
          </Grid>

          {/* Product Cards */}
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              sx={{ flex: 1, minWidth: 0, px: { xs: 0, md: 2 } }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
