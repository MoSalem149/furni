import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Paper,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router";
import Hero from "../components/Hero";

const CATEGORIES = ["Chairs", "Sofas", "Tables", "Lighting"];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    fontSize: "0.9rem",
    "& fieldset": { borderColor: "#ddd" },
    "&:hover fieldset": { borderColor: "#3b5d50" },
    "&.Mui-focused fieldset": { borderColor: "#3b5d50", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#3b5d50" },
};

export default function AddProduct() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.price.trim()) e.price = "Price is required";
    if (!form.image.trim()) e.image = "Image URL is required";
    if (!form.category) e.category = "Category is required";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    // Reflect data in the URL as query params
    const params = new URLSearchParams({
      name: form.name,
      price: form.price,
      image: form.image,
      category: form.category,
    });
    navigate(`/admin/add?${params.toString()}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: "", price: "", image: "", category: "" });
    setErrors({});
    setSubmitted(false);
    navigate("/admin/add");
  };

  return (
    <>
      <Hero
        title={<>Add New Product</>}
        description=""
        showButtons={false}
        showImage={false}
        showDot={false}
      />

      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: "#f9f9f9", minHeight: "60vh" }}>
        <Container maxWidth="sm">
          {/* Back button */}
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                color: "#3b5d50",
                fontWeight: 600,
                fontSize: "0.88rem",
                mb: 3,
                px: 0,
                "&:hover": { background: "transparent", textDecoration: "underline" },
              }}
            >
              Back to Admin
            </Button>
          </Link>

          <Paper
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid #ececec",
              p: { xs: 3, sm: 4 },
              backgroundColor: "#fff",
            }}
          >
            <Typography
              sx={{ fontWeight: 800, fontSize: "1.4rem", color: "#1a1a1a", mb: 0.5 }}
            >
              New Product
            </Typography>
            <Typography sx={{ color: "#aaa", fontSize: "0.85rem", mb: 4 }}>
              Fill in the details below. Data will appear in the URL on submit.
            </Typography>

            {submitted && (
              <Alert
                severity="success"
                sx={{ mb: 3, borderRadius: "10px", fontSize: "0.85rem" }}
              >
                Product data captured in URL successfully!
              </Alert>
            )}

            <Stack spacing={2.5}>
              {/* Name */}
              <TextField
                label="Product Name"
                placeholder="e.g. Nordic Chair"
                value={form.name}
                onChange={handleChange("name")}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                sx={inputSx}
              />

              {/* Price */}
              <TextField
                label="Price"
                placeholder="e.g. $50.00"
                value={form.price}
                onChange={handleChange("price")}
                error={!!errors.price}
                helperText={errors.price}
                fullWidth
                sx={inputSx}
              />

              {/* Image URL */}
              <TextField
                label="Image URL"
                placeholder="e.g. https://..."
                value={form.image}
                onChange={handleChange("image")}
                error={!!errors.image}
                helperText={errors.image}
                fullWidth
                sx={inputSx}
              />

              {/* Category dropdown */}
              <FormControl fullWidth error={!!errors.category} sx={inputSx}>
                <InputLabel sx={{ fontSize: "0.9rem" }}>Category</InputLabel>
                <Select
                  value={form.category}
                  label="Category"
                  onChange={handleChange("category")}
                  sx={{ borderRadius: "10px", fontSize: "0.9rem" }}
                >
                  {CATEGORIES.map((cat) => (
                    <MenuItem key={cat} value={cat} sx={{ fontSize: "0.88rem" }}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && (
                  <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 0.5, ml: 1.5 }}>
                    {errors.category}
                  </Typography>
                )}
              </FormControl>

              {/* Buttons */}
              <Stack direction="row" spacing={2} pt={1}>
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#3b5d50",
                    color: "#fff",
                    borderRadius: "10px",
                    py: 1.3,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    "&:hover": { backgroundColor: "#2e4a3f" },
                  }}
                >
                  Submit
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  disableElevation
                  onClick={handleReset}
                  sx={{
                    borderColor: "#ddd",
                    color: "#888",
                    borderRadius: "10px",
                    py: 1.3,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    "&:hover": { borderColor: "#3b5d50", color: "#3b5d50", backgroundColor: "transparent" },
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
