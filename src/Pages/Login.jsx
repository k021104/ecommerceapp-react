// // import React, { useContext, useState } from "react";
// // import { AuthContext } from "../Context/AuthContext";
// // import {
// //     Box,
// //     TextField,
// //     Typography,
// //     Button,
// //     Card,
// //     CardContent
// // } from "@mui/material";
// // import { Link } from "react-router-dom";


// // export default function Login() {

// //     const { login } = useContext(AuthContext);

// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         const success = await login(username, password);
// //         if (success) {
// //             alert("Login Successful 🎉");
// //             // yaha navigate kar sakti ho
// //         }
// //     };

// //     return (
// //         <Box
// //             sx={{
// //                 minHeight: "100vh",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 background: "linear-gradient(135deg, #e0e7ff, #fdf2f8)"
// //             }}
// //         >
// //             <Card
// //                 sx={{
// //                     width: { xs: "90%", sm: 400 },
// //                     borderRadius: "15px",
// //                     boxShadow: "0 10px 30px rgba(0,0,0,.2)"
// //                 }}
// //             >
// //                 <CardContent>
// //                     <Typography
// //                         variant="h4"
// //                         sx={{ textAlign: "center", fontWeight: 700, mb: 3 }}
// //                     >
// //                         Login
// //                     </Typography>

// //                     <form onSubmit={handleLogin}>
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
// //                             sx={{
// //                                 py: 1,
// //                                 fontSize: "16px",
// //                                 borderRadius: "10px",
// //                                 textTransform: "none",
// //                             }}
// //                         >
// //                             Login
// //                         </Button>
// //                     </form>

// //                     <Typography sx={{ textAlign: "center", mt: 2, color: "gray" }}>
// //                         Don't have an account?{" "}
// //                         <Link to="/register" style={{ color: "#1976d2", textDecoration: "none" }}>
// //                             Create Account
// //                         </Link>
// //                     </Typography>

// //                 </CardContent>
// //             </Card>
// //         </Box>
// //     );
// // }

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { Box, TextField, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirectPath = location.state?.from || "/";

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let temp = {};
//     if (!username) temp.username = "Username is required";
//     else if (username.length < 4) temp.username = "Username must be at least 4 characters";

//     if (!password) temp.password = "Password is required";
//     else if (password.length < 6) temp.password = "Password must be at least 6 characters";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     const success = login(username, password);
//     if (success) navigate(redirectPath, { replace: true });
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
//             Login
//           </Typography>

//           <form onSubmit={handleLogin} autoComplete="off">
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

//             <Typography sx={{ textAlign: "center", mb: 2 }}>
//               <Link to="/forgot-password" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
//                 Forgot Password?
//               </Link>
//             </Typography>

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
//               Login
//             </Button>
//           </form>

//           <Typography sx={{ textAlign: "center", mt: 3, color: "#6b7280", fontSize: 14 }}>
//             Don't have an account?{" "}
//             <Link to="/register" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
//               Create Account
//             </Link>
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }


import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, TextField, Typography, Button, Card, CardContent, Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!username) temp.username = "Username is required";
    else if (username.length < 4) temp.username = "Username must be at least 4 characters";

    if (!password) temp.password = "Password is required";
    else if (password.length < 6) temp.password = "Password must be at least 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const success = login(username, password);
    if (success) navigate(redirectPath, { replace: true });
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
          top: "15%",
          left: "10%",
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
          bottom: "20%",
          right: "12%",
          width: 20,
          height: 20,
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
          top: "50%",
          right: "8%",
          width: 18,
          height: 18,
          background: "linear-gradient(45deg, #10b981, #06b6d4)",
          borderRadius: "50%",
          opacity: 0.5,
          animation: "floatPremium 7s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      <Card
        data-aos="zoom-in"
        data-aos-delay="300"
        sx={{
          width: { xs: "90%", sm: 420 },
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
            Welcome Back
          </Typography>

          <form onSubmit={handleLogin} autoComplete="off">
            <TextField
              data-aos="fade-up"
              data-aos-delay="500"
              label="Username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              sx={{
                mb: 3,
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
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  transition: ".3s",
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#6366f1", borderWidth: "2px" },
                },
                "& .MuiInputLabel-root": { color: "#6b7280" },
              }}
            />

            <Typography
              data-aos="fade-up"
              data-aos-delay="700"
              sx={{ textAlign: "center", mb: 3 }}
            >
              <Link to="/forgot-password" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
                Forgot Password?
              </Link>
            </Typography>

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
              Login
            </Button>
          </form>

          <Typography
            data-aos="fade-up"
            data-aos-delay="900"
            sx={{ textAlign: "center", mt: 4, color: "#6b7280", fontSize: 15 }}
          >
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
              Create Account
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
