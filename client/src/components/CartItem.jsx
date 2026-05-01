import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router";

const headings = ["Image", "Product", "Price", "Quantity", "Total", "Remove"];

const darkPillButtonSx = {
  backgroundColor: "#1a1a1a",
  color: "#fff",
  borderRadius: "999px",
  px: 4,
  py: 1.5,
  fontWeight: 700,
  fontSize: "0.95rem",
  textTransform: "none",
  "&:hover": { backgroundColor: "#333" },
};

const couponInputSx = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#ddd" },
  },
};

export default function CartItem({
  items = [],
  handleInc,
  handleDec,
  handleDelete,
  handleReset,
}) {
  const [coupon, setCoupon] = useState("");
  const subtotal = items.reduce((sum, i) => sum + i.price * i.count, 0);

  return (
    <>
      <Box sx={{ backgroundColor: "#f5f5f5", py: { xs: 5, md: 10 } }}>
        <Container maxWidth="lg">
          {items.length === 0 ? (
            <Box sx={{ py: 8, textAlign: "center" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", mb: 1 }}>
                Cart is empty
              </Typography>
              <Typography sx={{ color: "#666" }}>
                Add products from the shop to see them here.
              </Typography>
            </Box>
          ) : (
            <>
              {/* Cart table header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 2fr 1.5fr 2fr 1.5fr 1fr",
                  pb: 2,
                  mb: 1,
                }}
              >
                {headings.map((h) => (
                  <Typography
                    key={h}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#1a1a1a",
                      textAlign: "center",
                    }}
                  >
                    {h}
                  </Typography>
                ))}
              </Box>
              <Divider sx={{ borderColor: "#1a1a1a", mb: 2 }} />

              {/* Cart item rows */}
              {items.map((item) => (
                <Box key={item.id}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1.5fr 2fr 1.5fr 2fr 1.5fr 1fr",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    {/* Product image */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{ width: 100, objectFit: "contain" }}
                      />
                    </Box>

                    {/* Product name */}
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </Typography>

                    {/* Unit price */}
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "0.95rem",
                        color: "#444",
                        textAlign: "center",
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </Typography>

                    {/* Quantity control */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        onClick={() => handleDec(item.id)}
                        sx={{ cursor: "pointer", fontSize: "1.2rem", px: 1 }}
                      >
                        −
                      </Typography>
                      <Box
                        sx={{
                          width: 48,
                          height: 40,
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          backgroundColor: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "Inter", fontWeight: 600 }}
                        >
                          {item.count}
                        </Typography>
                      </Box>
                      <Typography
                        onClick={() => handleInc(item.id)}
                        sx={{ cursor: "pointer", fontSize: "1.2rem", px: 1 }}
                      >
                        +
                      </Typography>
                    </Box>

                    {/* Row total */}
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "0.95rem",
                        color: "#444",
                        textAlign: "center",
                      }}
                    >
                      ${(item.price * item.count).toFixed(2)}
                    </Typography>

                    {/* Remove action */}
                    <Typography
                      onClick={() => handleDelete(item.id)}
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#1a1a1a",
                        "&:hover": { color: "red" },
                      }}
                    >
                      ✕
                    </Typography>
                  </Box>
                  <Divider sx={{ borderColor: "#ddd" }} />
                </Box>
              ))}
            </>
          )}

          {/* Cart actions */}
          <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              disableElevation
              sx={darkPillButtonSx}
              onClick={handleReset}
            >
              Reset Cart
            </Button>
            <Link to="/shop">
              <Button
                variant="contained"
                disableElevation
                sx={darkPillButtonSx}
              >
                Continue Shopping
              </Button>
            </Link>
          </Box>

          {/* Coupon and totals */}
          <Box
            sx={{
              display: "flex",
              gap: 6,
              mt: 6,
              flexWrap: { xs: "wrap", md: "nowrap" },
              alignItems: "flex-start",
            }}
          >
            {/* Coupon input */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  mb: 2,
                }}
              >
                Coupon
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "0.9rem",
                  color: "#666",
                  mb: 2,
                }}
              >
                Enter your coupon code if you have one.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <TextField
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  size="small"
                  sx={couponInputSx}
                />
                <Button
                  variant="contained"
                  disableElevation
                  sx={darkPillButtonSx}
                >
                  Apply Coupon
                </Button>
              </Box>
            </Box>

            {/* Order summary */}
            <Box sx={{ width: { xs: "100%", md: 320 } }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  mb: 3,
                }}
              >
                CART TOTALS
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1.5,
                }}
              >
                <Typography sx={{ fontFamily: "Inter", color: "#555" }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700 }}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography sx={{ fontFamily: "Inter", color: "#555" }}>
                  Total
                </Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700 }}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  ...darkPillButtonSx,
                  borderRadius: "999px",
                  width: "100%",
                }}
              >
                Proceed To Checkout
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
