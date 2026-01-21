// // import React, { useState } from "react";
// // import {
// //     Box,
// //     TextField,
// //     Typography,
// //     Button,
// //     Card,
// //     CardContent
// // } from "@mui/material";
// // import { Link } from "react-router-dom";

// // export default function Register() {

// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");

// //     const handleRegister = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const res = await fetch("https://fakestoreapi.com/users", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({
// //                     email: `${username}@gmail.com`,
// //                     username,
// //                     password
// //                 })
// //             });

// //             const data = await res.json();
// //             console.log(data);

// //             if (data && data.id) {
// //                 alert("Registered Successfully 🎉");
// //             } else {
// //                 alert("Registration Failed ❌");
// //             }

// //         } catch (error) {
// //             alert("Something went wrong ❌");
// //         }
// //     };

// //     return (
// //         <Box
// //             sx={{
// //                 minHeight: "100vh",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 background: "linear-gradient(135deg,#e0e7ff,#fdf2f8)"
// //             }}
// //         >
// //             <Card sx={{
// //                 width: { xs: "90%", sm: 400 },
// //                 borderRadius: "15px",
// //                 boxShadow: "0 10px 30px rgba(0,0,0,.2)"
// //             }}>
// //                 <CardContent>
// //                     <Typography
// //                         variant="h4"
// //                         sx={{ textAlign: "center", fontWeight: 700, mb: 3 }}
// //                     >
// //                         Register
// //                     </Typography>

// //                     <form onSubmit={handleRegister}>
// //                         <TextField
// //                             label="Username"
// //                             fullWidth
// //                             sx={{ mb: 2 }}
// //                             value={username}
// //                             onChange={(e) => setUsername(e.target.value)}
// //                         />

// //                         <TextField
// //                             label="Password"
// //                             type="password"
// //                             fullWidth
// //                             sx={{ mb: 3 }}
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                         />

// //                         <Button
// //                             type="submit"
// //                             fullWidth
// //                             variant="contained"
// //                             sx={{ py: 1, fontSize: "16px", borderRadius: "10px" }}
// //                         >
// //                             Register
// //                         </Button>
// //                     </form>

// //                     <Typography sx={{ textAlign: "center", mt: 2, color: "gray" }}>
// //                         Already have an account?
// //                         <Link to="/login" style={{ color: "#1976d2", textDecoration: "none" }}>
// //                             Login
// //                         </Link>
// //                     </Typography>

// //                 </CardContent>
// //             </Card>
// //         </Box>
// //     );
// // }

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { Box, TextField, Typography, Button, Card, CardContent } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let temp = {};
//     if (!email) temp.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) temp.email = "Enter a valid email";

//     if (!username) temp.username = "Username is required";
//     else if (username.length < 4) temp.username = "Username must be at least 4 characters";

//     if (!password) temp.password = "Password is required";
//     else if (password.length < 6) temp.password = "Password must be at least 6 characters";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     const success = register(email, username, password);
//     if (success) navigate("/login");
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#fcfcfc",
//         py: 6,
//       }}
//     >
//       <Card
//         sx={{
//           width: { xs: "90%", sm: 400 },
//           borderRadius: "25px",
//           boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 10px 30px rgba(0,0,0,0.08)",
//         }}
//       >
//         <CardContent sx={{ px: { xs: 3, sm: 5 }, py: { xs: 4, sm: 6 } }}>
//           <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 900, mb: 3, color: "#111827" }}>
//             Register
//           </Typography>

//           <form onSubmit={handleRegister} autoComplete="off">
//             <TextField
//               label="Email"
//               fullWidth
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               error={!!errors.email}
//               helperText={errors.email}
//               sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
//             />
//             <TextField
//               label="Username"
//               fullWidth
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               error={!!errors.username}
//               helperText={errors.username}
//               sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={!!errors.password}
//               helperText={errors.password}
//               sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               sx={{
//                 color: '#fff',
//                 py: 1.7,
//                 textTransform: "none",
//                 fontWeight: 700,
//                 fontSize: 16,
//                 borderRadius: "30px",
//                 background: "linear-gradient(135deg, #6366f1, #4f46e5)",
//                 boxShadow: "0 10px 30px rgba(99,102,241,0.3)",
//                 "&:hover": {
//                   background: "linear-gradient(135deg, #4f46e5, #4338ca)",
//                   transform: "translateY(-2px)",
//                 },
//                 transition: ".3s",
//               }}
//             >
//               Register
//             </Button>
//           </form>

//           <Typography sx={{ textAlign: "center", mt: 3, color: "#6b7280", fontSize: 14 }}>
//             Already have an account?{" "}
//             <Link to="/login" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
//               Login
//             </Link>
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }


import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, TextField, Typography, Button, Card, CardContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!email) temp.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) temp.email = "Enter a valid email";

    if (!username) temp.username = "Username is required";
    else if (username.length < 4) temp.username = "Username must be at least 4 characters";

    if (!password) temp.password = "Password is required";
    else if (password.length < 6) temp.password = "Password must be at least 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const success = register(email, username, password);
    if (success) navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0e7ff 100%)",
        position: "relative",
        overflow: "hidden",
        py: 6,
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
          width: 28,
          height: 28,
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
          width: 22,
          height: 22,
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

      <Card
        data-aos="zoom-in"
        data-aos-delay="300"
        sx={{
          width: { xs: "90%", sm: 450 },
          borderRadius: "30px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.15), 0 15px 35px rgba(0,0,0,0.1)",
          border: "1px solid rgba(99,102,241,0.1)",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <CardContent sx={{ px: { xs: 4, sm: 6 }, py: { xs: 5, sm: 7 } }}>
          <Typography
            data-aos="fade-down"
            data-aos-delay="400"
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              mb: 4,
              color: "#0f172a",
              background: "linear-gradient(90deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join Us Today
          </Typography>

          <form onSubmit={handleRegister} autoComplete="off">
            <TextField
              data-aos="fade-up"
              data-aos-delay="500"
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  transition: ".3s",
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#6366f1", borderWidth: "2px" },
                },
                "& .MuiInputLabel-root": { color: "#6b7280" },
              }}
            />
            <TextField
              data-aos="fade-up"
              data-aos-delay="600"
              label="Username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  transition: ".3s",
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#6366f1", borderWidth: "2px" },
                },
                "& .MuiInputLabel-root": { color: "#6b7280" },
              }}
            />
            <TextField
              data-aos="fade-up"
              data-aos-delay="700"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                mb: 3.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  transition: ".3s",
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#6366f1", borderWidth: "2px" },
                },
                "& .MuiInputLabel-root": { color: "#6b7280" },
              }}
            />

            <Button
              data-aos="fade-up"
              data-aos-delay="800"
              type="submit"
              fullWidth
              sx={{
                color: '#fff',
                py: 2,
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "50px",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
                boxShadow: "0 15px 35px rgba(99,102,241,0.3)",
                transition: ".3s",
                "&:hover": {
                  background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #3730a3 100%)",
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: "0 20px 45px rgba(99,102,241,0.4)",
                },
              }}
            >
              Create Account
            </Button>
          </form>

          <Typography
            data-aos="fade-up"
            data-aos-delay="900"
            sx={{ textAlign: "center", mt: 4, color: "#6b7280", fontSize: 15 }}
          >
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
