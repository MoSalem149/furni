import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";

const navLinks = ["Home", "Shop", "About us", "Services", "Blog", "Contact us"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#3b5d50",
          boxShadow: "none",
          borderBottom: "none",
          "& .MuiToolbar-root": { borderBottom: "none" },
        }}
      >
        <Container maxWidth="lg" disableGutters={false}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: "56px", md: "84px" },
            }}
          >
            {/* Logo */}
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                fontFamily: "Inter",
                color: "#fff",
              }}
            >
              Furni
              <Box component="span" sx={{ color: "#899e96" }}>
                .
              </Box>
            </Typography>

            {/* Desktop Nav Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navLinks.map((link, i) => (
                <Button
                  key={link}
                  sx={{
                    color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.65)",
                    fontWeight: i === 0 ? 700 : 500,
                    fontSize: "0.88rem",
                    fontFamily: "Inter",
                    textTransform: "none",
                    borderRadius: 0,
                    px: 1.5,
                    pb: "6px",
                    // active Home
                    borderBottom:
                      i === 0 ? "4px solid #F0A500" : "2px solid transparent",
                    "&:hover": {
                      color: "#ffffff",
                      background: "transparent",
                      borderBottom: "4px solid rgba(240,165,0,0.5)",
                    },
                  }}
                >
                  {link}
                </Button>
              ))}
            </Box>

            {/* Icons + Hamburger */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <img src={cartIcon} alt="cart" width={22} />
              </IconButton>
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <img src={userIcon} alt="user" width={22} />
              </IconButton>
              {/* Hamburger - mobile only */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" }, color: "#899e96" }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240, pt: 2 }}>
          <List>
            {navLinks.map((link, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={link} sx={{ fontFamily: "Inter" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", gap: 1, px: 2, pt: 2 }}>
            <IconButton>
              <img src={cartIcon} alt="cart" width={22} />
            </IconButton>
            <IconButton>
              <img src={userIcon} alt="user" width={22} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
