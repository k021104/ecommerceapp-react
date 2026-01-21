import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { SearchContext } from "../Context/SearchContext";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

export default function CategoryProducts() {

  const { searchText } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const { name } = useParams();

  const { addToCart } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);

  const filteredProducts = data.filter(item =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then(res => res.json())
      .then(result => setData(result));
  }, [name]);

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, backgroundColor: "#fcfcfc" }}>

      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          data-aos="fade-up"
          variant="overline"
          sx={{ color: "#6b7280", fontWeight: 600, letterSpacing: 2 }}
        >
          Category
        </Typography>

        <Typography
          data-aos="fade-up"
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#111827",
            mt: 1,
            fontSize: { xs: "2rem", md: "3rem" },
            textTransform: "capitalize",
          }}
        >
          {name} Products
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
          gap: 4,
        }}
      >
        {filteredProducts.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 10, color: "#6b7280", gridColumn: "1 / -1" }}
          >
            No products found
          </Typography>
        ) : (
          filteredProducts.map((item, i) => (
            <Card
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "all .4s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
                "&:hover .overlay": {
                  opacity: 1
                },
              }}
            >
              <Box
                sx={{
                  height: 230,
                  background: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Product Image */}
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 180,
                    objectFit: "contain",
                    transition: "transform .5s ease",
                  }}
                />

                {/* OVERLAY ICONS */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    opacity: 0,
                    transition: "all .4s ease",
                  }}
                >
                  <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: "50%",
                        background: "#fff",
                        color: 'black',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: '0.2s ease-in-out',
                        "&:hover": {
                          transform: 'translateY(-3px)',
                          background: "#fff",
                          color: "#2563eb",
                          boxShadow: "0 0 18px rgba(37, 99, 235, 0.7)"
                        },
                      }}
                    >
                      <VisibilityIcon />
                    </Box>
                  </Link>

                  <Link to="" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: "50%",
                        background: "#fff",
                        color: 'black',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: '0.2s ease-in-out',
                        "&:hover": {
                          transform: 'translateY(-3px)',
                          background: "#fff",
                          color: "red ",
                          boxShadow: "0 0 18px rgba(255, 0, 0, 0.7)",
                        },
                      }}
                      onClick={() => addToWishlist(item)}
                    >
                      <FavoriteBorderIcon />
                    </Box>
                  </Link>

                </Box>
              </Box>

              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#111827",
                    minHeight: 40,
                  }}
                >
                  {item.title.length > 45 ? item.title.slice(0, 45) + "..." : item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#2563eb",
                    fontWeight: 800,
                    mt: 1,
                    fontSize: "18px",
                  }}
                >
                  ${item.price}
                </Typography>

                <Typography sx={{ fontSize: "12px", color: "#6b7280", mt: .5 }}>
                  ⭐ {item.rating.rate} ({item.rating.count})
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#111827",
                    color: "#fff",
                    borderRadius: "30px",
                    px: 4,
                    textTransform: "none",
                    fontWeight: 700,
                    "&:hover": { background: "#000" },
                    width: "100%",
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
