import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  Stack,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { Link } from "react-router";
import Hero from "../components/Hero";

const ITEMS_PER_PAGE = 8;

const CATEGORY_COLORS = {
  Chairs: { bg: "#eef3f1", color: "#3b5d50" },
  Sofas: { bg: "#fef3e2", color: "#b97a00" },
  Tables: { bg: "#e8eaf6", color: "#3949ab" },
  Lighting: { bg: "#fce4ec", color: "#c2185b" },
};

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data);
        const unique = Array.from(new Set(res.data.map((p) => p.category)));
        setCategories(["All", ...unique]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
    setPage(1);
  };

  return (
    <>
      <Hero
        title={<>Admin Panel</>}
        description=""
        showButtons={false}
        showImage={false}
        showDot={false}
      />

      <Box
        sx={{
          py: { xs: 5, md: 8 },
          backgroundColor: "#f9f9f9",
          minHeight: "60vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Header row */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            mb={4}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "#1a1a1a",
                  mb: 0.5,
                }}
              >
                Products
              </Typography>
              <Typography sx={{ color: "#888", fontSize: "0.88rem" }}>
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel
                  sx={{
                    fontSize: "0.85rem",
                    color: "#3b5d50",
                    "&.Mui-focused": { color: "#3b5d50" },
                  }}
                >
                  Category
                </InputLabel>
                <Select
                  value={activeCategory}
                  label="Category"
                  onChange={handleCategoryChange}
                  sx={{
                    borderRadius: "10px",
                    fontSize: "0.85rem",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ddd",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3b5d50",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3b5d50",
                    },
                  }}
                >
                  {categories.map((cat) => (
                    <MenuItem
                      key={cat}
                      value={cat}
                      sx={{ fontSize: "0.85rem" }}
                    >
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Link to="/admin/add" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  disableElevation
                  sx={{
                    backgroundColor: "#3b5d50",
                    color: "#fff",
                    borderRadius: "10px",
                    px: 2.5,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    "&:hover": { backgroundColor: "#2e4a3f" },
                  }}
                >
                  Add New Product
                </Button>
              </Link>
            </Stack>
          </Stack>

          {loading ? (
            <Typography sx={{ color: "#aaa", textAlign: "center", py: 10 }}>
              Loading...
            </Typography>
          ) : (
            <>
              <TableContainer
                component={Paper}
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  border: "1px solid #ececec",
                  overflow: "hidden",
                  mb: 4,
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                      {[
                        "#",
                        "Image",
                        "Name",
                        "Price",
                        "Category",
                        "Actions",
                      ].map((col) => (
                        <TableCell
                          key={col}
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            color: "#888",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderBottom: "1px solid #ececec",
                            py: 1.8,
                          }}
                        >
                          {col}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginated.length > 0 ? (
                      paginated.map((product, idx) => (
                        <TableRow
                          key={product.id}
                          sx={{
                            "&:hover": { backgroundColor: "#fafafa" },
                            "&:last-child td": { borderBottom: 0 },
                            transition: "background 0.15s ease",
                          }}
                        >
                          <TableCell
                            sx={{ color: "#bbb", fontSize: "0.82rem", py: 2 }}
                          >
                            {start + idx + 1}
                          </TableCell>

                          <TableCell sx={{ py: 2 }}>
                            <Avatar
                              src={product.image}
                              alt={product.name}
                              variant="rounded"
                              sx={{
                                width: 52,
                                height: 52,
                                backgroundColor: "#eef3f1",
                                "& img": { objectFit: "contain", p: "6px" },
                              }}
                            />
                          </TableCell>

                          <TableCell
                            sx={{
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              color: "#1a1a1a",
                              py: 2,
                            }}
                          >
                            {product.name}
                          </TableCell>

                          <TableCell
                            sx={{
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              color: "#3b5d50",
                              py: 2,
                            }}
                          >
                            {product.price}
                          </TableCell>

                          <TableCell sx={{ py: 2 }}>
                            <Chip
                              label={product.category}
                              size="small"
                              sx={{
                                backgroundColor:
                                  CATEGORY_COLORS[product.category]?.bg ||
                                  "#f5f5f5",
                                color:
                                  CATEGORY_COLORS[product.category]?.color ||
                                  "#555",
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                borderRadius: "8px",
                                height: 26,
                              }}
                            />
                          </TableCell>

                          <TableCell sx={{ py: 2 }}>
                            <Stack direction="row" spacing={1}>
                              <Button
                                size="small"
                                startIcon={
                                  <EditIcon
                                    sx={{ fontSize: "14px !important" }}
                                  />
                                }
                                sx={{
                                  textTransform: "none",
                                  fontWeight: 600,
                                  fontSize: "0.78rem",
                                  color: "#3949ab",
                                  backgroundColor: "#e8eaf6",
                                  borderRadius: "8px",
                                  px: 1.5,
                                  py: 0.6,
                                  "&:hover": { backgroundColor: "#c5cae9" },
                                }}
                              >
                                Update
                              </Button>
                              <Button
                                size="small"
                                startIcon={
                                  <DeleteIcon
                                    sx={{ fontSize: "14px !important" }}
                                  />
                                }
                                sx={{
                                  textTransform: "none",
                                  fontWeight: 600,
                                  fontSize: "0.78rem",
                                  color: "#c2185b",
                                  backgroundColor: "#fce4ec",
                                  borderRadius: "8px",
                                  px: 1.5,
                                  py: 0.6,
                                  "&:hover": { backgroundColor: "#f8bbd9" },
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          sx={{ textAlign: "center", py: 6, color: "#aaa" }}
                        >
                          No products found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination */}
              {totalPages > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          )}
        </Container>
      </Box>
    </>
  );
}
