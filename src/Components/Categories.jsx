import React, { useEffect, useState } from "react";
import { Box, Typography, Card, Button, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

import cat1 from '../Assets/images/electonics_category.webp';
import cat2 from '../Assets/images/jewelery_category.webp';
import cat3 from '../Assets/images/mens_clothing.webp';
import cat4 from '../Assets/images/womens_category_img.jpg';

export default function Categories() {

  const categoryImages = {
    "electronics": cat1,
    "jewelery": cat2,
    "men's clothing": cat3,
    "women's clothing": cat4,
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(result => setCategories(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 4, md: 8 },
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
      {/* Floating premium elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
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
          bottom: "15%",
          right: "8%",
          width: 20,
          height: 20,
          background: "linear-gradient(45deg, #f59e0b, #ec4899)",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "floatPremium 8s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 8, position: "relative", zIndex: 2 }}>
        <Typography
          data-aos="fade-up"
          sx={{
            color: "#6366f1",
            fontWeight: 700,
            fontSize: { xs: "12px", sm: "14px" },
            letterSpacing: 3,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Discover Excellence
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          variant="h3"
          sx={{
            fontWeight: 900,
            color: "#0f172a",
            mt: 1,
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
            lineHeight: 1.2,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Shop by Premium Categories
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{
            color: "#4b5563",
            fontSize: { xs: "15px", md: "18px" },
            mt: 2,
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Immerse yourself in curated collections designed for sophistication and style.
          Find your perfect match in our exclusive range.
        </Typography>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr"
          },
          gap: { xs: 4, md: 6 },
          maxWidth: "1300px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {categories.map((cat, i) => (
          <Card
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 250}
            sx={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              height: { xs: 280, sm: 380, md: 450 },
              border: "none",
              transition: "0.6s ease",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              background: "#000",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 35px 70px rgba(0,0,0,0.25)",
              },

              "&:hover .category-img": {
                transform: "scale(1.15)",
                filter: "brightness(1.1) contrast(1.05) saturate(1.1)", // Enhanced image on hover for premium feel
              },

              "&:hover .cta-btn": {
                opacity: 1,
                transform: "translateY(0) scale(1.05)",
              },
            }}
          >

            <Box
              className="category-img"
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${categoryImages[cat]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "1.2s ease",
                filter: "brightness(0.95) contrast(1.02) saturate(1.05)", // Subtle filter for premium image quality

                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 80%)",
                },
              }}
            />

            <CardContent
              sx={{
                position: "absolute",
                bottom: 40,
                textAlign: "center",
                width: "100%",
                zIndex: 2,
                px: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 900,
                  textTransform: "capitalize",
                  mb: 3,
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  letterSpacing: ".7px",
                  textShadow: "0 3px 6px rgba(0,0,0,0.5)",
                }}
              >
                {cat}
              </Typography>

              <Button
                component={Link}
                to={`/category/${cat}`}
                className="cta-btn"
                variant="contained"
                sx={{
                  opacity: 0,
                  transform: "translateY(15px)",
                  transition: "all .5s ease",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  color: "#000",
                  fontWeight: 800,
                  borderRadius: "50px",
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.5, md: 1.8 },
                  textTransform: "none",
                  boxShadow: "0 10px 25px rgba(255,255,255,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)",

                  "&:hover": {
                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                    boxShadow: "0 15px 35px rgba(255,255,255,0.4)",
                  },
                }}
              >
                Explore Now
              </Button>
            </CardContent>

          </Card>
        ))}
      </Box>
    </Box>
  );
}