import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import heroimg from "../Assets/images/hero_image.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Fixed height to ensure full viewport coverage without vh-related mobile issues
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(241, 245, 249, 0.7) 100%), url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Centers the content vertically and horizontally within the fixed height
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(99,102,241,0.05) 0%, transparent 70%)",
          zIndex: 1,
        },
      }}
    >
      {/* Floating premium elements - kept refined */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "8%", sm: "12%", md: "15%" },
          left: { xs: "4%", sm: "7%", md: "10%" },
          width: { xs: 18, sm: 24, md: 30 },
          height: { xs: 18, sm: 24, md: 30 },
          background: "linear-gradient(45deg, #a78bfa, #c4b5fd)",
          borderRadius: "50%",
          opacity: { xs: 0.6, sm: 0.7, md: 0.8 },
          animation: "floatPremium 5s ease-in-out infinite",
          zIndex: 2,
          "@keyframes floatPremium": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-12px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "12%", sm: "16%", md: "20%" },
          right: { xs: "6%", sm: "9%", md: "12%" },
          width: { xs: 16, sm: 20, md: 25 },
          height: { xs: 16, sm: 20, md: 25 },
          background: "linear-gradient(45deg, #fbbf24, #fde68a)",
          borderRadius: "50%",
          opacity: { xs: 0.5, sm: 0.6, md: 0.7 },
          animation: "floatPremium 6s ease-in-out infinite reverse",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", sm: "45%", md: "50%" },
          right: { xs: "2%", sm: "4%", md: "5%" },
          width: { xs: 12, sm: 16, md: 20 },
          height: { xs: 12, sm: 16, md: 20 },
          background: "linear-gradient(45deg, #34d399, #6ee7b7)",
          borderRadius: "50%",
          opacity: { xs: 0.4, sm: 0.5, md: 0.6 },
          animation: "floatPremium 7s ease-in-out infinite",
          zIndex: 2,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 }, // Added padding inside the container for controlled spacing around content
        }}
      >
        {/* Premium Badge */}
        <Typography
          data-aos="fade-down"
          data-aos-delay="200"
          sx={{
            color: "#6366f1",
            fontWeight: 600,
            letterSpacing: "2px",
            mb: { xs: 1, sm: 1.5, md: 2 },
            fontSize: { xs: "10px", sm: "11px", md: "12px", lg: "14px", xl: "16px" },
            textTransform: "uppercase",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Exclusive Premium Collection 2026
        </Typography>

        {/* Main Heading */}
        <Typography
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{
            fontWeight: 900,
            color: "#1e293b",
            fontSize: { xs: "24px", sm: "32px", md: "42px", lg: "52px", xl: "60px" },
            lineHeight: { xs: 1.1, sm: 1.15 },
            mb: { xs: 1.5, sm: 2, md: 3 },
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            background: "linear-gradient(90deg, #1e293b 0%, #475569 50%, #64748b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Redefine Luxury <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in Every Detail
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          data-aos="fade-up"
          data-aos-delay="600"
          sx={{
            color: "#475569",
            fontSize: { xs: "13px", sm: "15px", md: "17px", lg: "19px", xl: "20px" },
            lineHeight: 1.6,
            maxWidth: { xs: "95%", sm: "85%", md: "75%", lg: "700px" },
            mx: "auto",
            mb: { xs: 2.5, sm: 3, md: 4 },
            textShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          Indulge in unparalleled craftsmanship and timeless designs that elevate your everyday. 
          Experience the pinnacle of style with our curated selection, delivered with elegance and precision.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
              px: { xs: 5, sm: 6, md: 7, lg: 8 },
              py: { xs: 1.2, sm: 1.5, md: 1.8, lg: 2 },
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: { xs: "13px", sm: "15px", md: "16px", lg: "18px" },
              boxShadow: "0 15px 30px rgba(99,102,241,0.3)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                transform: "translateY(-3px) scale(1.02)",
                boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Discover Now
          </Button>

          <Button
            variant="outlined"
            sx={{
              px: { xs: 5, sm: 6, md: 7, lg: 8 },
              py: { xs: 1.2, sm: 1.5, md: 1.8, lg: 2 },
              borderRadius: "50px",
              borderColor: "#6366f1",
              color: "#6366f1",
              fontWeight: 700,
              fontSize: { xs: "13px", sm: "15px", md: "16px", lg: "18px" },
              textTransform: "none",
              "&:hover": {
                borderColor: "#4f46e5",
                color: "#4f46e5",
                background: "rgba(99,102,241,0.1)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(99,102,241,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View Gallery
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}