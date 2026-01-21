// import React, { useContext } from "react";
// import { WishlistContext } from "../Context/WishlistContext";
// import { Box, Typography, Button } from "@mui/material";

// export default function Wishlist() {

//   const { wishlist, removeFromWishlist } = useContext(WishlistContext);

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
//         Your Wishlist ❤️
//       </Typography>

//       {wishlist.length === 0 ? (
//         <Typography sx={{ textAlign: "center", color: "gray" }}>
//           Wishlist is Empty 😔
//         </Typography>
//       ) : (
//         wishlist.map(item => (
//           <Box
//             key={item.id}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               p: 2,
//               mb: 2,
//               borderRadius: "10px",
//               boxShadow: "0 5px 15px rgba(0,0,0,.1)"
//             }}
//           >
//             <img src={item.image} height={70} alt="" />
//             <Typography sx={{ width: "50%" }}>
//               {item.title}
//             </Typography>

//             <Typography sx={{ fontWeight: 700 }}>
//               ${item.price}
//             </Typography>

//             <Button color="error" variant="contained"
//               onClick={() => removeFromWishlist(item.id)}>
//               Remove
//             </Button>
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// }


import React, { useContext } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from "@mui/material";
import { WishlistContext } from "../Context/WishlistContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

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
            "50%": { transform: "translateY(-18px) rotate(180deg)" },
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
          top: "55%",
          right: "6%",
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
          Your Favorites
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
          Wishlist
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
          Keep track of your favorite items. Add them to cart or remove as needed.
        </Typography>
      </Box>

      {/* Wishlist Grid */}
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
        {wishlist.length === 0 ? (
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
            Your wishlist is empty. Start adding your favorite products!
          </Typography>
        ) : (
          wishlist.map((item, i) => (
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
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                },
                "&:hover .wishlist-img": {
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
                  className="wishlist-img"
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

                {/* Remove Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: ".3s",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&:hover": {
                      background: "#ec4899",
                      color: "white",
                      transform: "scale(1.1)",
                      boxShadow: "0 6px 15px rgba(236,72,153,0.3)",
                    },
                  }}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <DeleteIcon sx={{ fontSize: 20 }} />
                </Box>
              </Box>

              <CardContent sx={{ textAlign: "center", px: 3, py: 3 }}>
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
                  ⭐ {item.rating?.rate} ({item.rating?.count} reviews)
                </Typography>

                <Button
                  component={Link}
                  to={`/product/${item.id}`}
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                    color: "#fff",
                    px: 5,
                    py: 1.5,
                    borderRadius: "50px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "none",
                    boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                      transform: "translateY(-2px) scale(1.05)",
                      boxShadow: "0 15px 35px rgba(99,102,241,0.4)",
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
}