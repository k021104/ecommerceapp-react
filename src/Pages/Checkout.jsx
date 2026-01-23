import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Box, TextField, Typography, Button, Divider } from "@mui/material";

export default function Checkout() {
  const { getSubtotal, getTotal } = useContext(CartContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    temp.name = user.name ? "" : "Name is required";
    temp.email = /^\S+@\S+\.\S+$/.test(user.email) ? "" : "Valid email required";
    temp.phone = user.phone.length === 10 ? "" : "Phone must be 10 digits";
    temp.address = user.address ? "" : "Address required";
    temp.city = user.city ? "" : "City required";
    temp.pincode = user.pincode.length === 6 ? "" : "Pincode must be 6 digits";

    setErrors(temp);

    return Object.values(temp).every(x => x === "");
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    alert("Order Placed Successfully 🎉");
  };

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
          top: "10%",
          left: "8%",
          width: { xs: 20, md: 30 },
          height: { xs: 20, md: 30 },
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
          bottom: "15%",
          right: "10%",
          width: { xs: 18, md: 25 },
          height: { xs: 18, md: 25 },
          background: "linear-gradient(45deg, #f59e0b, #ec4899)",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "floatPremium 8s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "5%",
          width: { xs: 15, md: 20 },
          height: { xs: 15, md: 20 },
          background: "linear-gradient(45deg, #10b981, #06b6d4)",
          borderRadius: "50%",
          opacity: 0.5,
          animation: "floatPremium 7s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Header - responsive */}
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
          Secure Checkout
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
          Complete Your Purchase
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
          Fill in your details below and confirm your order. Your information is secure and protected.
        </Typography>
      </Box>

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

        {/* ---------- LEFT : Billing ---------- */}
        <Box
          data-aos="fade-right"
          data-aos-delay="300"
          sx={{
            flex: 2,
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
            }}
          >
            Billing Details
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />

          <TextField
            fullWidth
            label="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />

          <TextField
            fullWidth
            label="City"
            name="city"
            value={user.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />

          <TextField
            fullWidth
            label="Pincode"
            name="pincode"
            value={user.pincode}
            onChange={handleChange}
            error={!!errors.pincode}
            helperText={errors.pincode}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#f5f5ff",
                transition: ".3s",
                "&:hover fieldset": { borderColor: "#6366f1" },
                "&.Mui-focused": {
                  borderColor: "#6366f1",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": { fontWeight: 600, color: "#6b7280" },
            }}
          />
        </Box>

        {/* ---------- RIGHT : Summary ---------- */}
        <Box
          data-aos="fade-left"
          data-aos-delay="500"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "400px" },
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            p: { xs: 3, sm: 4 },
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            border: "1px solid rgba(99,102,241,0.1)",
            height: "fit-content",
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
            Subtotal: <span style={{ fontWeight: 800, color: "#6366f1" }}>${getSubtotal().toFixed(2)}</span>
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
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
