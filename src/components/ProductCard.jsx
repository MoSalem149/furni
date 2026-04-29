import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ProductCard({ product, onAdd }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
        "&:hover .card-bg": { opacity: 1 },
        "&:hover .add-btn": { opacity: 1, transform: "translateY(0)" },
        "&:hover .product-img": { transform: "translateY(-12px)" },
      }}
    >
      {/* Hover background */}
      <Box
        className="card-bg"
        sx={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          height: "65%",
          backgroundColor: "#d8eae6",
          borderRadius: 3,
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Product image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: { xs: 200, sm: 280 },
          mb: 0,
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          className="product-img"
          sx={{
            maxHeight: { xs: 180, sm: 260 },
            width: "100%",
            objectFit: "contain",
            transition: "transform 0.3s ease",
            filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.10))",
          }}
        />
      </Box>

      {/* Add to cart action */}
      <Box
        className="add-btn"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          mt: "-18px",
          mb: 1.5,
          opacity: 0,
          transform: "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
            onAdd?.(product);
          }}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": { backgroundColor: "#3b5d50" },
            transition: "background-color 0.2s ease",
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: 20 }} />
        </Box>
      </Box>

      {/* Product name */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.95rem",
          mb: 0.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        {product.name}
      </Typography>

      {/* Product price */}
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "1.1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {product.price}
      </Typography>
    </Box>
  );
}
