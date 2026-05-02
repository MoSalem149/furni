import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 6;

export default function FeaturedProducts({ leftText = true, onAdd }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data);
        const uniqueCategories = Array.from(
          new Set(res.data.map((p) => p.category)),
        );
        setCategories(["All", ...uniqueCategories]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 7, md: 10 } }}
      >
        {/* Home page */}
        {leftText &&
          (loading ? (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography sx={{ color: "#aaa", fontSize: "1rem" }}>
                Loading...
              </Typography>
            </Box>
          ) : (
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, mb: 6 }}
            >
              <Grid
                size={{ xs: 12, md: "auto" }}
                sx={{
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
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </Typography>
                <Link to="/shop">
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
                </Link>
              </Grid>
              {products.slice(0, 3).map((product) => (
                <Box
                  key={product.id}
                  sx={{ flex: 1, minWidth: { xs: "100%", sm: "45%", md: 0 } }}
                >
                  <ProductCard product={product} onAdd={onAdd} />
                </Box>
              ))}
            </Grid>
          ))}

        {/* Shop page */}
        {!leftText &&
          (loading ? (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography sx={{ color: "#aaa", fontSize: "1rem" }}>
                Loading...
              </Typography>
            </Box>
          ) : (
            <>
              {/* Search — centered */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <TextField
                  placeholder="Search products…"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  size="small"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "#3b5d50", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    width: { xs: "100%", sm: 420 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "999px",
                      backgroundColor: "#fff",
                      fontSize: "0.9rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      "& fieldset": { borderColor: "#ddd" },
                      "&:hover fieldset": { borderColor: "#3b5d50" },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3b5d50",
                        borderWidth: "2px",
                      },
                    },
                    "& input": {
                      py: 1.3,
                      color: "#222",
                      "&::placeholder": { color: "#bbb", opacity: 1 },
                    },
                  }}
                />
              </Box>

              {/* Filter pills — centered */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  flexWrap: "wrap",
                  mb: 5,
                }}
              >
                {categories.map((cat) => (
                  <Box
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setPage(1);
                    }}
                    sx={{
                      px: 2.4,
                      py: 0.8,
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: activeCategory === cat ? 700 : 500,
                      fontFamily: "Inter, sans-serif",
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "all 0.2s ease",
                      backgroundColor:
                        activeCategory === cat ? "#3b5d50" : "transparent",
                      color: activeCategory === cat ? "#fff" : "#666",
                      border: `1.5px solid ${activeCategory === cat ? "#3b5d50" : "#d0d0d0"}`,
                      "&:hover": {
                        backgroundColor:
                          activeCategory === cat ? "#2e4a3f" : "#eef3f1",
                        borderColor: "#3b5d50",
                        color: activeCategory === cat ? "#fff" : "#3b5d50",
                      },
                    }}
                  >
                    {cat}
                  </Box>
                ))}
              </Box>

              {/* Product grid */}
              {paginated.length > 0 ? (
                <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6 }}>
                  {paginated.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      <ProductCard product={product} onAdd={onAdd} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Box sx={{ textAlign: "center", py: 10 }}>
                  <Typography sx={{ color: "#aaa", fontSize: "1rem" }}>
                    No products found.
                  </Typography>
                </Box>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(_, val) => {
                      setPage(val);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    shape="rounded"
                    sx={{
                      "& .MuiPaginationItem-root": {
                        fontWeight: 600,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                        color: "#555",
                        border: "1.5px solid #e0e0e0",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#f0f5f4",
                          borderColor: "#3b5d50",
                          color: "#3b5d50",
                        },
                      },
                      "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "#3b5d50",
                        borderColor: "#3b5d50",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#2e4a3f" },
                      },
                    }}
                  />
                </Box>
              )}
            </>
          ))}
      </Container>
    </Box>
  );
}
