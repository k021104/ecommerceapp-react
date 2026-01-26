import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,              // keep old values
      [e.target.name]: e.target.value, // update specific field
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // if no errors → valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    if (validateForm()) {
      console.log("Submitted Data:", formData); // 👈 console log

      alert("Form submitted successfully ✅");

      // reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 8 },
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        maxWidth="lg"
        sx={{
          margin: "auto",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(0,0,0,0.15), 0 15px 35px rgba(0,0,0,0.1)",
          border: "1px solid rgba(99,102,241,0.1)",
          px: 0,
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Contact Form */}
        <Grid item xs={12} md={8} sx={{ margin: "auto", px: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            data-aos="fade-up"
            variant="overline"
            sx={{
              color: "#6366f1",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Reach Out
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            variant="h3"
            sx={{
              fontWeight: 900,
              color: "#0f172a",
              mt: 1,
              mb: 3,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
              lineHeight: 1.2,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{
              color: "#4b5563",
              mb: 6,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will respond promptly.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              data-aos="fade-up"
              data-aos-delay="500"
              label="Full Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
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

            <TextField
              data-aos="fade-up"
              data-aos-delay="600"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              type="email"
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

            <TextField
              data-aos="fade-up"
              data-aos-delay="700"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              multiline
              rows={5}
              fullWidth
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

            <Box
              data-aos="fade-up"
              data-aos-delay="800"
              sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                  color: "#fff",
                  px: 6,
                  py: 2,
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "16px",
                  textTransform: "none",
                  boxShadow: "0 15px 35px rgba(99,102,241,0.3)",
                  transition: ".3s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                    transform: "translateY(-3px) scale(1.02)",
                    boxShadow: "0 20px 45px rgba(99,102,241,0.4)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}