import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getSubtotal,
    getTotal,
  } = useContext(CartContext);

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4, lg: 8 },
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0e7ff 100%)",
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
      {/* Floating premium elements - responsive sizes */}
      <Box
        sx={{
          position: "absolute",
          top: "12%",
          left: "8%",
          width: { xs: 20, md: 30 },
          height: { xs: 20, md: 30 },
          background: "linear-gradient(45deg, #6366f1, #a78bfa)",
          borderRadius: "50%",
          opacity: 0.7,
          animation: "floatPremium 5s ease-in-out infinite",
          zIndex: 1,
          "@keyframes floatPremium": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-18px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          right: "10%",
          width: { xs: 18, md: 25 },
          height: { xs: 18, md: 25 },
          background: "linear-gradient(45deg, #f59e0b, #ec4899)",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "floatPremium 7s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          right: "6%",
          width: { xs: 15, md: 20 },
          height: { xs: 15, md: 20 },
          background: "linear-gradient(45deg, #10b981, #06b6d4)",
          borderRadius: "50%",
          opacity: 0.5,
          animation: "floatPremium 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Header - responsive font sizes */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, position: "relative", zIndex: 2 }}>
        <Typography
          data-aos="fade-up"
          sx={{
            color: "#6366f1",
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            letterSpacing: 3,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Your Selections
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          variant="h3"
          sx={{
            fontWeight: 900,
            color: "#0f172a",
            mt: 1,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.5rem" },
            lineHeight: 1.2,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Shopping Cart
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{
            color: "#4b5563",
            fontSize: { xs: "14px", sm: "15px", md: "18px" },
            mt: 2,
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Review your items, adjust quantities, and proceed to checkout for a seamless experience.
        </Typography>
      </Box>

      {cart.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: 10,
            color: "#6b7280",
            fontWeight: 600,
            fontSize: { xs: "14px", md: "18px" },
            position: "relative",
            zIndex: 2,
          }}
        >
          Your cart is empty 😔 Start shopping now!
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            maxWidth: "1400px",
            margin: "auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ---------------- LEFT SIDE : CART ITEMS ---------------- */}
          <Box sx={{ flex: 2, display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 } }}>
            {cart.map((item, i) => (
              <Box
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  p: { xs: 2, sm: 3 },
                  borderRadius: "24px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(99,102,241,0.1)",
                  gap: { xs: 2, sm: 3 },
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {/* Product Image - responsive size */}
                <Box
                  sx={{
                    width: { xs: "80px", sm: "90px", md: "100px" },
                    height: { xs: 80, sm: 90, md: 100 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                    borderRadius: "16px",
                    p: 1,
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "brightness(1.02) contrast(1.05)",
                    }}
                  />
                </Box>

                {/* Title - responsive font */}
                <Typography
                  sx={{
                    flex: 1,
                    fontWeight: 700,
                    textAlign: { xs: "center", sm: "left" },
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "#111827",
                    lineHeight: 1.4,
                    minHeight: { xs: 40, sm: 0 }, // Prevent layout shift on mobile
                  }}
                >
                  {item.title.length > 50
                    ? item.title.slice(0, 50) + "..."
                    : item.title}
                </Typography>

                {/* Price - responsive */}
                <Typography
                  sx={{
                    fontWeight: 800,
                    minWidth: { xs: 60, sm: 70, md: 80 },
                    textAlign: "center",
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "#6366f1",
                    textShadow: "0 1px 2px rgba(99,102,241,0.2)",
                  }}
                >
                  ${item.price}
                </Typography>

                {/* Quantity Controls - responsive buttons */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    background: "rgba(99,102,241,0.1)",
                    p: { xs: "6px 8px", sm: "8px 12px" },
                    borderRadius: "20px",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => decreaseQty(item.id)}
                    sx={{
                      minWidth: { xs: 25, sm: 30 },
                      height: { xs: 25, sm: 30 },
                      borderRadius: "50%",
                      borderColor: "#6366f1",
                      color: "#6366f1",
                      "&:hover": {
                        background: "#6366f1",
                        color: "white",
                      },
                    }}
                  >
                    -
                  </Button>

                  <Typography sx={{ fontWeight: 700, fontSize: { xs: "14px", sm: "16px" }, minWidth: { xs: 20, sm: 30 }, textAlign: "center" }}>
                    {item.quantity}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => increaseQty(item.id)}
                    sx={{
                      minWidth: { xs: 25, sm: 30 },
                      height: { xs: 25, sm: 30 },
                      borderRadius: "50%",
                      borderColor: "#6366f1",
                      color: "#6366f1",
                      "&:hover": {
                        background: "#6366f1",
                        color: "white",
                      },
                    }}
                  >
                    +
                  </Button>
                </Box>

                {/* Remove Button - responsive */}
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    minWidth: { xs: 80, sm: 90, md: 100 },
                    borderRadius: "20px",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: { xs: "12px", sm: "14px" },
                    background: "linear-gradient(135deg, #ef4444, #dc2626)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                      transform: "translateY(-2px)",
                    },
                    transition: ".3s",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </Box>

          {/* ---------------- RIGHT SIDE : TOTAL BOX ---------------- */}
          <Box
            data-aos="fade-left"
            data-aos-delay="300"
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "400px" },
              height: "fit-content",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              p: { xs: 3, sm: 4 },
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              border: "1px solid rgba(99,102,241,0.1)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 24 },
                fontWeight: 900,
                mb: 3,
                color: "#0f172a",
                textAlign: "center",
              }}
            >
              Order Summary
            </Typography>

            <Divider sx={{ mb: 3, borderColor: "rgba(99,102,241,0.2)" }} />

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                mb: 2,
                color: "#374151",
              }}
            >
              Subtotal:{" "}
              <span style={{ fontWeight: 800, color: "#6366f1" }}>
                ${getSubtotal().toFixed(2)}
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                mb: 2,
                color: "#374151",
              }}
            >
              Shipping: <span style={{ fontWeight: 800, color: "#10b981" }}>$0.00</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                mb: 3,
                color: "#374151",
              }}
            >
              Tax: <span style={{ fontWeight: 800, color: "#10b981" }}>$0.00</span>
            </Typography>

            <Divider sx={{ my: 3, borderColor: "rgba(99,102,241,0.2)" }} />

            <Typography
              sx={{
                fontSize: { xs: 18, sm: 22 },
                fontWeight: 900,
                mb: 4,
                color: "#0f172a",
                textAlign: "center",
              }}
            >
              Grand Total: <span style={{ color: "#6366f1" }}>${getTotal().toFixed(2)}</span>
            </Typography>

            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              sx={{
                width: "100%",
                py: { xs: 1.5, sm: 2 },
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: { xs: "14px", sm: "16px" },
                textTransform: "none",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                boxShadow: "0 15px 35px rgba(99,102,241,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: "0 20px 45px rgba(99,102,241,0.4)",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}