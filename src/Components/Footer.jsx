import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0e7ff 100%)",
        color: "#111827",
        pt: 10,
        pb: 6,
        borderTop: "1px solid rgba(99,102,241,0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"rgba(99,102,241,0.03)\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"rgba(99,102,241,0.03)\"/><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"rgba(99,102,241,0.03)\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
          opacity: 0.5,
          zIndex: 0,
        },
      }}
    >
      {/* Floating premium elements */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 25,
          height: 25,
          background: "linear-gradient(45deg, #6366f1, #a78bfa)",
          borderRadius: "50%",
          opacity: 0.7,
          animation: "floatPremium 6s ease-in-out infinite",
          zIndex: 1,
          "@keyframes floatPremium": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-15px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "12%",
          width: 20,
          height: 20,
          background: "linear-gradient(45deg, #f59e0b, #ec4899)",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "floatPremium 8s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          sx={{
            textAlign: { xs: "center", sm: "center", md: "left" },
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* BRAND */}
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: 28, md: 32 },
                mb: 2,
                background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: ".5px",
              }}
            >
              MyStore
            </Typography>
            <Typography
              sx={{
                color: "#4b5563",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: 300,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Premium products. Secure shopping. Smooth experience. Discover elegance in every purchase.
            </Typography>
          </Grid>

          {/* SHOP */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <FooterTitle>Shop</FooterTitle>
            <Stack spacing={1.5} alignItems={{ xs: "center", sm: "flex-start" }}>
              <FooterLink>All Products</FooterLink>
              <FooterLink>Categories</FooterLink>
              <FooterLink>New Arrivals</FooterLink>
              <FooterLink>Best Sellers</FooterLink>
            </Stack>
          </Grid>

          {/* SUPPORT */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <FooterTitle>Support</FooterTitle>
            <Stack spacing={1.5} alignItems={{ xs: "center", sm: "flex-start" }}>
              <FooterLink>Help Center</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms & Conditions</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </Stack>
          </Grid>

          {/* NEWSLETTER */}
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <FooterTitle>Stay Updated</FooterTitle>
            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "15px",
                mb: 3,
                lineHeight: 1.5,
              }}
            >
              Subscribe to get exclusive offers, updates, and insider deals.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <TextField
                placeholder="Enter your email"
                fullWidth
                sx={{
                  background: "white",
                  borderRadius: "50px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    "& fieldset": { borderColor: "rgba(99,102,241,0.2)" },
                    "&:hover fieldset": { borderColor: "#6366f1" },
                    "&.Mui-focused fieldset": { borderColor: "#6366f1" },
                  },
                }}
                variant="outlined"
              />

              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                  textTransform: "none",
                  px: { xs: 4, sm: 3 },
                  py: 1.5,
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                    transform: "translateY(-2px) scale(1.05)",
                    boxShadow: "0 15px 35px rgba(99,102,241,0.4)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(99,102,241,0.1)" }} />

        <Typography
          sx={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          © {new Date().getFullYear()} MyStore — All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

function FooterLink({ children }) {
  return (
    <MuiLink
      underline="none"
      sx={{
        color: "#4b5563",
        fontSize: "15px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          color: "#6366f1",
          transform: "translateX(5px)",
        },
      }}
    >
      {children}
    </MuiLink>
  );
}

function FooterTitle({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: 800,
        mb: 3,
        fontSize: "18px",
        color: "#111827",
        letterSpacing: ".5px",
      }}
    >
      {children}
    </Typography>
  );
}