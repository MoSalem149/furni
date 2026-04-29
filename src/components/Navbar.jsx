import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
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
import { NavLink } from "react-router";
import { navLinks } from "../data/navLinks";

export default function Navbar({ totalCount = 0 }) {
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
            {/* Brand logo */}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                Furni
                <Box component="span" sx={{ color: "#899e96" }}>
                  .
                </Box>
              </Typography>
            </NavLink>

            {/* Desktop navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <Button
                      sx={{
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "0.88rem",
                        textTransform: "none",
                        borderRadius: 0,
                        px: 1.5,
                        pb: "6px",
                        borderBottom: isActive
                          ? "4px solid #F0A500"
                          : "2px solid transparent",
                        "&:hover": {
                          color: "#ffffff",
                          background: "transparent",
                          borderBottom: "4px solid rgba(240,165,0,0.5)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  )}
                </NavLink>
              ))}
            </Box>

            {/* Action icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <img src={userIcon} alt="user" width={17} />
              </IconButton>
              <NavLink to="/cart">
                <IconButton>
                  <Badge
                    badgeContent={totalCount}
                    color="warning"
                    overlap="circular"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: "10px",
                        height: "14px",
                        minWidth: "14px",
                        padding: "0 4px",
                      },
                    }}
                  >
                    <img src={cartIcon} alt="cart" width={18} />
                  </Badge>
                </IconButton>
              </NavLink>
              {/* Mobile menu toggle */}
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

      {/* Mobile drawer menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <NavLink
                  to={link.path}
                  end
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                >
                  <ListItemButton onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", gap: 1, px: 2, pt: 2 }}>
            <IconButton>
              <img src={userIcon} alt="user" width={17} />
            </IconButton>
            <NavLink to="/cart">
              <IconButton>
                <Badge
                  badgeContent={totalCount}
                  color="warning"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "10px",
                      height: "14px",
                      minWidth: "14px",
                      padding: "0 4px",
                    },
                  }}
                >
                  <img src={cartIcon} alt="cart" width={18} />
                </Badge>
              </IconButton>
            </NavLink>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
