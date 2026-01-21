import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Badge,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  Divider,
  Avatar,
  Container
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { SearchContext } from "../Context/SearchContext";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {

  const { setSearchText } = useContext(SearchContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { token, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        sx={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(15px)",
          color: "#111827",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(99,102,241,0.1)",
          paddingY: { xs: 0.75, md: 1.25 },
          position: "sticky",
          top: 0,
          zIndex: 1100,
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ gap: { xs: 1, md: 3 } }}>

            {/* Mobile Menu */}
            <IconButton
              sx={{
                display: { xs: "block", md: "none" },
                color: "#6366f1",
                transition: ".3s",
                "&:hover": { background: "rgba(99,102,241,0.1)", transform: "scale(1.1)" }
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: ".5px",
                flexGrow: { xs: 1, md: 0 },
                fontSize: { xs: "20px", md: "28px" },
                background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)" },
                transition: ".3s",
              }}
            >
              MyStore
            </Typography>

            {/* Search Desktop */}
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: { xs: 220, sm: 450, md: 550 },
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                background: "rgba(243,244,246,0.8)",
                padding: { xs: "6px 12px", md: "8px 16px" },
                borderRadius: "50px",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                transition: ".3s",
                "&:focus-within": {
                  borderColor: "#6366f1",
                  boxShadow: "0px 0px 12px rgba(99,102,241,0.4)",
                  background: "rgba(255,255,255,0.9)",
                },
              }}
            >
              <SearchIcon sx={{ color: "#6b7280", transition: ".3s" }} />
              <InputBase
                placeholder="Search premium products..."
                sx={{
                  ml: 1.5,
                  flex: 1,
                  fontSize: { xs: "14px", md: "16px" },
                  "& input::placeholder": { color: "#9ca3af" },
                }}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Box>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {["Home", "Categories", "Products", "Contact"].map((text, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                  sx={{
                    color: "#374151",
                    fontSize: "15px",
                    fontWeight: 600,
                    textTransform: "none",
                    position: "relative",
                    px: 2,
                    py: 1,
                    borderRadius: "25px",
                    transition: ".3s",
                    "&:hover": {
                      color: "#6366f1",
                      background: "rgba(99,102,241,0.1)",
                      transform: "translateY(-2px)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "3px",
                      background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                      left: "50%",
                      bottom: 0,
                      borderRadius: "2px",
                      transition: "0.3s",
                      transform: "translateX(-50%)",
                    },
                    "&:hover::after": {
                      width: "80%",
                    },
                  }}
                >
                  {text}
                </Button>
              ))}
            </Box>

            {/* Auth */}
            {token ? (
              <Button
                variant="outlined"
                onClick={logout}
                sx={{
                  borderRadius: "50px",
                  textTransform: "none",
                  borderColor: "#6366f1",
                  color: "#6366f1",
                  fontWeight: 600,
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  transition: ".3s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    color: "white",
                    borderColor: "#6366f1",
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(99,102,241,0.3)",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" style={{ color: "inherit" }}>
                <Avatar
                  sx={{
                    width: { xs: 32, md: 40 },
                    height: { xs: 32, md: 40 },
                    bgcolor: "rgba(99,102,241,0.1)",
                    color: "#6366f1",
                    transition: ".3s",
                    "&:hover": {
                      bgcolor: "#6366f1",
                      color: "white",
                      transform: "scale(1.1)",
                      boxShadow: "0px 6px 15px rgba(99,102,241,0.3)",
                    },
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                </Avatar>
              </Link>
            )}

            {/* Wishlist */}
            <Link to="/wishlist" style={{ color: "inherit", marginLeft: { xs: 0.5, md: 1 } }}>
              <Badge
                badgeContent={wishlist?.length || 0}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    background: "linear-gradient(45deg, #ec4899, #f97316)",
                    color: "white",
                  },
                }}
                showZero
              >
                <FavoriteBorderIcon
                  sx={{
                    fontSize: { xs: 24, md: 28 },
                    color: "#6b7280",
                    transition: ".3s",
                    "&:hover": {
                      color: "#ec4899",
                      transform: "scale(1.15)",
                      filter: "drop-shadow(0px 4px 8px rgba(236,72,153,0.3))",
                    },
                  }}
                />
              </Badge>
            </Link>

            {/* Cart */}
            <Link to="/cart" style={{ color: "inherit" }}>
              <Badge
                badgeContent={cart?.length || 0}
                color="error"
                sx={{
                  ml: { xs: 0.5, md: 1 },
                  "& .MuiBadge-badge": {
                    background: "linear-gradient(45deg, #10b981, #06b6d4)",
                    color: "white",
                  },
                }}
                showZero
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: { xs: 24, md: 28 },
                    color: "#6b7280",
                    transition: ".3s",
                    "&:hover": {
                      color: "#10b981",
                      transform: "scale(1.15)",
                      filter: "drop-shadow(0px 4px 8px rgba(16,185,129,0.3))",
                    },
                  }}
                />
              </Badge>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 280, sm: 320 },
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            borderRadius: "0px 20px 20px 0px",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "22px",
              mb: 2,
              background: "linear-gradient(90deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MyStore
          </Typography>

          {/* Mobile Search */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "rgba(243,244,246,0.8)",
                padding: "10px 14px",
                borderRadius: "50px",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                transition: ".3s",
                "&:focus-within": {
                  borderColor: "#6366f1",
                  boxShadow: "0px 0px 12px rgba(99,102,241,0.4)",
                },
              }}
            >
              <SearchIcon sx={{ color: "#6b7280" }} />
              <InputBase
                placeholder="Search..."
                sx={{ ml: 1.5, flex: 1 }}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List>
            {["Home", "Categories", "Products", "Contact"].map((text, index) => (
              <ListItem disablePadding key={index} sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    transition: ".3s",
                    "&:hover": {
                      background: "rgba(99,102,241,0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={text}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        color: "#374151",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}