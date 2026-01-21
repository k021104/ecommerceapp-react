import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { SearchContext } from "../Context/SearchContext";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

export default function Products() {

  const { addToCart } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);

  const { searchText } = useContext(SearchContext);
  const [data, setData] = useState([]);

  const filteredProducts = data.filter(item =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(result => setData(result))
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
          top: "12%",
          left: "8%",
          width: 30,
          height: 30,
          background: "linear-gradient(45deg, #6366f1, #a78bfa)",
          borderRadius: "50%",
          opacity: 0.7,
          animation: "floatPremium 5s ease-in-out infinite",
          zIndex: 1,
          "@keyframes floatPremium": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-20px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          right: "10%",
          width: 25,
          height: 25,
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
          top: "60%",
          right: "5%",
          width: 20,
          height: 20,
          background: "linear-gradient(45deg, #10b981, #06b6d4)",
          borderRadius: "50%",
          opacity: 0.5,
          animation: "floatPremium 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Header */}
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
          Exclusive Collection
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
          Discover Premium Products
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{
            color: "#4b5563",
            fontSize: { xs: "15px", md: "18px" },
            mt: 2,
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Explore our handpicked selection of high-quality items, crafted for elegance and performance.
          Find the perfect addition to your lifestyle.
        </Typography>
      </Box>

      {/* Products Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 4, md: 6 },
          maxWidth: "1400px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {filteredProducts.length === 0 ? (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mt: 10,
              color: "#6b7280",
              gridColumn: "1 / -1",
              fontWeight: 600,
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            No products found matching your search.
          </Typography>
        ) : (
          filteredProducts.map((item, i) => (
            <Card
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              sx={{
                borderRadius: "24px",
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: "all .5s ease",
                border: "1px solid rgba(99,102,241,0.1)",
                display: "flex",
                flexDirection: "column",
                height: "100%", // Ensures cards are equal height
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                },
                "&:hover .overlay": {
                  opacity: 1,
                },
                "&:hover .product-img": {
                  transform: "scale(1.1)",
                  filter: "brightness(1.05) contrast(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  height: 250,
                  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Product Image */}
                <CardMedia
                  className="product-img"
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    transition: "transform .6s ease, filter .6s ease",
                    filter: "brightness(0.98) contrast(1.02)",
                  }}
                />

                {/* OVERLAY ICONS */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    opacity: 0,
                    transition: "all .5s ease",
                  }}
                >
                  <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.9)",
                        color: "#111827",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "0.3s ease",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.1)",
                          background: "#ffffff",
                          color: "#6366f1",
                          boxShadow: "0 12px 30px rgba(99,102,241,0.4)",
                        },
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: 24 }} />
                    </Box>
                  </Link>

                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      color: "#111827",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "0.3s ease",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      "&:hover": {
                        transform: "translateY(-4px) scale(1.1)",
                        background: "#ffffff",
                        color: "#ec4899",
                        boxShadow: "0 12px 30px rgba(236,72,153,0.4)",
                      },
                    }}
                    onClick={() => addToWishlist(item)}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.9)",
                        color: "#111827",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "0.3s ease",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.1)",
                          background: "#ffffff",
                          color: "#ec4899",
                          boxShadow: "0 12px 30px rgba(236,72,153,0.4)",
                        },
                      }}
                      onClick={() => addToWishlist(item)}
                    >
                      <FavoriteBorderIcon sx={{ fontSize: 24 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <CardContent
                sx={{
                  textAlign: "center",
                  px: 3,
                  py: 3,
                  flexGrow: 1, // Allows content to expand
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Pushes button to bottom
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#111827",
                      minHeight: 45,
                      lineHeight: 1.4,
                      textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    {item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6366f1",
                      fontWeight: 800,
                      mt: 1.5,
                      fontSize: "20px",
                      textShadow: "0 1px 2px rgba(99,102,241,0.2)",
                    }}
                  >
                    ${item.price}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#6b7280",
                      mt: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    ⭐ {item.rating.rate} ({item.rating.count} reviews)
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                    color: "#fff",
                    borderRadius: "50px",
                    px: 5,
                    py: 1.5,
                    textTransform: "none",
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
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
}
