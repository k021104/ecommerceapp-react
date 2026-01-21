// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Box, Typography, Button, Rating } from "@mui/material";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";

// export default function ProductDetails() {

//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     const { addToCart } = useContext(CartContext);

//     useEffect(() => {
//         fetch(`https://fakestoreapi.com/products/${id}`)
//             .then(res => res.json())
//             .then(result => setProduct(result));
//     }, [id]);

//     if (!product) return (
//         <Typography sx={{ textAlign: "center", mt: 10, fontSize: 20 }}>
//             Loading...
//         </Typography>
//     );

//     return (
//         <Box
//             sx={{
//                 p: { xs: 3, md: 8 },
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
//                 gap: 6,
//                 alignItems: "center",
//             }}
//         >

//             {/* LEFT IMAGE */}
//             <Box
//                 sx={{
//                     flex: { xs: "100%", md: "45%" },
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     p: 4,
//                     borderRadius: "20px",
//                     boxShadow:
//                         "0 15px 30px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.5)",
//                     transition: "all 0.4s ease-in-out",
//                     "&:hover": {
//                         boxShadow:
//                             "0 25px 45px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.7)",
//                     },
//                 }}
//             >
//                 <img
//                     src={product?.image}
//                     alt={product?.title}
//                     style={{
//                         width: "80%",
//                         height: "auto",
//                         objectFit: "contain",
//                         filter: "drop-shadow(0px 20px 35px rgba(0,0,0,0.4))",
//                         transition: "transform 0.4s ease",
//                     }}
//                     onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                     onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                 />
//             </Box>

//             {/* RIGHT CONTENT */}
//             <Box>
//                 <Typography sx={{ fontSize: 28, fontWeight: 800 }}>
//                     {product.title}
//                 </Typography>

//                 <Typography sx={{ color: "#6b7280", mt: 1, fontSize: 15 }}>
//                     {product.category?.toUpperCase()}
//                 </Typography>

//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
//                     <Rating value={product.rating?.rate} precision={0.5} readOnly />
//                     <Typography>({product.rating?.count} Reviews)</Typography>
//                 </Box>

//                 <Typography
//                     sx={{
//                         mt: 2,
//                         color: "#374151",
//                         fontSize: 15,
//                         lineHeight: "24px",
//                     }}
//                 >
//                     {product.description}
//                 </Typography>

//                 <Typography
//                     sx={{
//                         mt: 2,
//                         fontWeight: 900,
//                         color: "#2563eb",
//                         fontSize: 30,
//                     }}
//                 >
//                     ${product.price}
//                 </Typography>

//                 <Button
//                     variant="contained"
//                     sx={{
//                         mt: 3,
//                         background: "#111827",
//                         px: 4,
//                         py: 1.5,
//                         fontSize: 16,
//                         borderRadius: "30px",
//                         "&:hover": { background: "#000" },
//                     }}
//                     onClick={() => addToCart(product)}
//                 >
//                     Add to Cart
//                 </Button>
//             </Box>
//         </Box>
//     );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Rating } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result));
    }, [id]);

    if (!product) return (
        <Typography sx={{ textAlign: "center", mt: 10, fontSize: 20, color: "#6b7280" }}>
            Loading...
        </Typography>
    );

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
            {/* <Box
                sx={{
                    position: "absolute",
                    top: "15%",
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
            /> */}
            {/* <Box
                sx={{
                    position: "absolute",
                    bottom: "20%",
                    right: "10%",
                    width: 25,
                    height: 25,
                    background: "linear-gradient(45deg, #f59e0b, #ec4899)",
                    borderRadius: "50%",
                    opacity: 0.6,
                    animation: "floatPremium 7s ease-in-out infinite reverse",
                    zIndex: 1,
                }}
            /> */}
            {/* <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "5%",
                    width: 20,
                    height: 20,
                    background: "linear-gradient(45deg, #10b981, #06b6d4)",
                    borderRadius: "50%",
                    opacity: 0.5,
                    animation: "floatPremium 6s ease-in-out infinite",
                    zIndex: 1,
                }}
            /> */}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
                    gap: { xs: 6, md: 8 },
                    alignItems: "center",
                    maxWidth: "1400px",
                    margin: "auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >

                {/* LEFT IMAGE */}
                <Box
                    data-aos="fade-right"
                    data-aos-delay="200"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 4,
                        borderRadius: "28px",
                        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
                        transition: "all 0.5s ease",
                        "&:hover": {
                            transform: "translateY(-5px) scale(1.02)",
                            boxShadow: "0 30px 70px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
                        },
                    }}
                >
                    <img
                        src={product?.image}
                        alt={product?.title}
                        style={{
                            width: "85%",
                            height: "auto",
                            objectFit: "contain",
                            filter: "brightness(1.02) contrast(1.05) saturate(1.1)",
                            transition: "transform 0.5s ease, filter 0.5s ease",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.08)";
                            e.currentTarget.style.filter = "brightness(1.05) contrast(1.1) saturate(1.2)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.filter = "brightness(1.02) contrast(1.05) saturate(1.1)";
                        }}
                    />
                </Box>

                {/* RIGHT CONTENT */}
                <Box data-aos="fade-left" data-aos-delay="400">
                    <Typography
                        sx={{
                            fontSize: { xs: 28, md: 36 },
                            fontWeight: 900,
                            color: "#0f172a",
                            lineHeight: 1.2,
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        {product.title}
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6366f1",
                            mt: 1.5,
                            fontSize: "16px",
                            fontWeight: 700,
                            letterSpacing: 1,
                            textTransform: "uppercase",
                        }}
                    >
                        {product.category?.toUpperCase()}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
                        <Rating
                            value={product.rating?.rate}
                            precision={0.5}
                            readOnly
                            sx={{
                                "& .MuiRating-iconFilled": { color: "#f59e0b" },
                                "& .MuiRating-iconEmpty": { color: "#e5e7eb" },
                            }}
                        />
                        <Typography sx={{ color: "#4b5563", fontSize: "15px", fontWeight: 600 }}>
                            ({product.rating?.count} Reviews)
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            mt: 3,
                            color: "#374151",
                            fontSize: "16px",
                            lineHeight: "26px",
                            maxWidth: 600,
                        }}
                    >
                        {product.description}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 4,
                            fontWeight: 900,
                            color: "#6366f1",
                            fontSize: { xs: 32, md: 40 },
                            textShadow: "0 2px 4px rgba(99,102,241,0.2)",
                        }}
                    >
                        ${product.price}
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                            px: 6,
                            py: 2,
                            fontSize: "16px",
                            fontWeight: 700,
                            borderRadius: "50px",
                            textTransform: "none",
                            boxShadow: "0 15px 35px rgba(99,102,241,0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                                transform: "translateY(-3px) scale(1.05)",
                                boxShadow: "0 20px 45px rgba(99,102,241,0.4)",
                            },
                        }}
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}