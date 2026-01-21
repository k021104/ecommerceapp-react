// // // import React from "react";
// // // import { Box, Typography, TextField, Button, Grid } from "@mui/material";

// // // export default function Contact() {
// // //   return (
// // //     <Box sx={{ minHeight: "90vh", backgroundColor: "#fcfcfc", py: { xs: 6, md: 12 } }}>
// // //       <Grid
// // //         container
// // //         maxWidth="lg"
// // //         sx={{
// // //           margin: "auto",
// // //           backgroundColor: "#fff",
// // //           borderRadius: 4,
// // //           overflow: "hidden",
// // //           boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
// // //           px: { xs: 3, sm: 6, md: 8 },
// // //           py: { xs: 6, md: 10 },
// // //         }}
// // //       >
// // //         {/* Contact Form */}
// // //         <Grid item xs={12} md={8} sx={{ margin: "auto" }}>
// // //           <Typography
// // //             variant="overline"
// // //             sx={{ color: "#6b7280", fontWeight: 600, letterSpacing: 2, mb: 1 }}
// // //           >
// // //             Contact Us
// // //           </Typography>
// // //           <Typography
// // //             variant="h3"
// // //             sx={{
// // //               fontWeight: 800,
// // //               color: "#111827",
// // //               mt: 1,
// // //               mb: 2,
// // //               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
// // //             }}
// // //           >
// // //             Get in Touch
// // //           </Typography>
// // //           <Typography
// // //             sx={{
// // //               color: "#6b7280",
// // //               mb: 4,
// // //               fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
// // //             }}
// // //           >
// // //             Have questions or feedback? We'd love to hear from you. Fill out the form and our team will respond promptly.
// // //           </Typography>

// // //           <Box
// // //             component="form"
// // //             sx={{
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               gap: 3,
// // //             }}
// // //           >
// // //             <TextField
// // //               label="Full Name"
// // //               variant="outlined"
// // //               fullWidth
// // //               sx={{
// // //                 "& .MuiOutlinedInput-root": { borderRadius: 3 },
// // //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// // //               }}
// // //             />
// // //             <TextField
// // //               label="Email Address"
// // //               variant="outlined"
// // //               fullWidth
// // //               type="email"
// // //               sx={{
// // //                 "& .MuiOutlinedInput-root": { borderRadius: 3 },
// // //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// // //               }}
// // //             />
// // //             <TextField
// // //               label="Message"
// // //               variant="outlined"
// // //               fullWidth
// // //               multiline
// // //               rows={5}
// // //               sx={{
// // //                 "& .MuiOutlinedInput-root": { borderRadius: 3 },
// // //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// // //               }}
// // //             />
// // //             <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
// // //               <Button
// // //                 variant="contained"
// // //                 sx={{
// // //                   backgroundColor: "#111827",
// // //                   color: "#fff",
// // //                   fontWeight: 700,
// // //                   borderRadius: "30px",
// // //                   py: 1.5,
// // //                   px: 6,
// // //                   textTransform: "none",
// // //                   "&:hover": { backgroundColor: "#000" },
// // //                   fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
// // //                 }}
// // //               >
// // //                 Send Message
// // //               </Button>
// // //             </Box>
// // //           </Box>
// // //         </Grid>
// // //       </Grid>
// // //     </Box>
// // //   );
// // // }


// // import React from "react";
// // import { Box, Typography, TextField, Button, Grid } from "@mui/material";

// // export default function Contact() {
// //   return (
// //     <Box sx={{ minHeight: "90vh", backgroundColor: "#f5f5f5", py: { xs: 6, md: 12 } }}>
// //       <Grid
// //         container
// //         maxWidth="lg"
// //         sx={{
// //           margin: "auto",
// //           backgroundColor: "#fff",
// //           borderRadius: 5,
// //           overflow: "hidden",
// //           boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
// //           px: { xs: 3, sm: 6, md: 8 },
// //           py: { xs: 6, md: 10 },
// //         }}
// //       >
// //         {/* Contact Form */}
// //         <Grid item xs={12} md={8} sx={{ margin: "auto" }}>
// //           <Typography
// //             variant="overline"
// //             sx={{ color: "#6b7280", fontWeight: 600, letterSpacing: 2, mb: 1 }}
// //           >
// //             Contact Us
// //           </Typography>

// //           <Typography
// //             variant="h3"
// //             sx={{
// //               fontWeight: 800,
// //               color: "#111827",
// //               mt: 1,
// //               mb: 3,
// //               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
// //               lineHeight: 1.2,
// //             }}
// //           >
// //             Get in Touch
// //           </Typography>

// //           <Typography
// //             sx={{
// //               color: "#6b7280",
// //               mb: 5,
// //               fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
// //               lineHeight: 1.6,
// //             }}
// //           >
// //             Have questions or feedback? We'd love to hear from you. Fill out the form below, and our team will respond promptly.
// //           </Typography>

// //           <Box
// //             component="form"
// //             sx={{
// //               display: "flex",
// //               flexDirection: "column",
// //               gap: 3,
// //             }}
// //           >
// //             <TextField
// //               label="Full Name"
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 "& .MuiOutlinedInput-root": {
// //                   borderRadius: 3,
// //                   backgroundColor: "#f9fafb",
// //                   "&.Mui-focused": {
// //                     borderColor: "#2563eb",
// //                     backgroundColor: "#fff",
// //                   },
// //                 },
// //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// //               }}
// //             />

// //             <TextField
// //               label="Email Address"
// //               variant="outlined"
// //               fullWidth
// //               type="email"
// //               sx={{
// //                 "& .MuiOutlinedInput-root": {
// //                   borderRadius: 3,
// //                   backgroundColor: "#f9fafb",
// //                   "&.Mui-focused": {
// //                     borderColor: "#2563eb",
// //                     backgroundColor: "#fff",
// //                   },
// //                 },
// //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// //               }}
// //             />

// //             <TextField
// //               label="Message"
// //               variant="outlined"
// //               fullWidth
// //               multiline
// //               rows={5}
// //               sx={{
// //                 "& .MuiOutlinedInput-root": {
// //                   borderRadius: 3,
// //                   backgroundColor: "#f9fafb",
// //                   "&.Mui-focused": {
// //                     borderColor: "#2563eb",
// //                     backgroundColor: "#fff",
// //                   },
// //                 },
// //                 "& .MuiInputLabel-root": { fontWeight: 600 },
// //               }}
// //             />

// //             <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
// //               <Button
// //                 variant="contained"
// //                 sx={{
// //                   backgroundColor: "#111827",
// //                   color: "#fff",
// //                   fontWeight: 700,
// //                   borderRadius: "30px",
// //                   py: 1.5,
// //                   px: 6,
// //                   textTransform: "none",
// //                   fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
// //                   boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
// //                   "&:hover": {
// //                     backgroundColor: "#000",
// //                     boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
// //                   },
// //                 }}
// //               >
// //                 Send Message
// //               </Button>
// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // }


// import React from "react";
// import { Box, Typography, TextField, Button, Grid } from "@mui/material";

// export default function Contact() {
//   return (
//     <Box sx={{ minHeight: "90vh", backgroundColor: "#fcfcfc", py: { xs: 6, md: 12 } }}>
//       <Grid
//         container
//         maxWidth="lg"
//         sx={{
//           margin: "auto",
//           backgroundColor: "#fff",
//           borderRadius: "25px",
//           overflow: "hidden",
//           boxShadow: "0 25px 60px rgba(0,0,0,.12), 0 10px 30px rgba(0,0,0,.08)",
//           px: { xs: 3, sm: 6, md: 8 },
//           py: { xs: 6, md: 10 },
//         }}
//       >
//         {/* Contact Form */}
//         <Grid item xs={12} md={8} sx={{ margin: "auto" }}>
//           <Typography
//             variant="overline"
//             sx={{
//               color: "#6366f1",
//               fontWeight: 700,
//               letterSpacing: 1.5,
//               mb: 1,
//             }}
//           >
//             Contact Us
//           </Typography>

//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 900,
//               color: "#111827",
//               mt: 1,
//               mb: 3,
//               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//               lineHeight: 1.2,
//             }}
//           >
//             Get in Touch
//           </Typography>

//           <Typography
//             sx={{
//               color: "#4b5563",
//               mb: 5,
//               fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
//               lineHeight: 1.7,
//             }}
//           >
//             Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will respond promptly.
//           </Typography>

//           <Box
//             component="form"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 3,
//             }}
//           >
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "20px",
//                   backgroundColor: "#f5f5ff",
//                   "&.Mui-focused": {
//                     borderColor: "#6366f1",
//                     backgroundColor: "#fff",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { fontWeight: 600 },
//               }}
//             />

//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               type="email"
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "20px",
//                   backgroundColor: "#f5f5ff",
//                   "&.Mui-focused": {
//                     borderColor: "#6366f1",
//                     backgroundColor: "#fff",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { fontWeight: 600 },
//               }}
//             />

//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={5}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "20px",
//                   backgroundColor: "#f5f5ff",
//                   "&.Mui-focused": {
//                     borderColor: "#6366f1",
//                     backgroundColor: "#fff",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { fontWeight: 600 },
//               }}
//             />

//             <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   background: "linear-gradient(135deg, #6366f1, #4f46e5 60%, #4338ca)",
//                   px: { xs: 6, sm: 5 },
//                   py: { xs: 1.7, sm: 1.4 },
//                   borderRadius: "30px",
//                   fontWeight: 700,
//                   fontSize: { xs: "14px", sm: "16px" },
//                   boxShadow: "0 15px 30px rgba(99,102,241,.35)",
//                   "&:hover": {
//                     background: "linear-gradient(135deg, #4f46e5, #4338ca 60%, #3730a3)",
//                     transform: "translateY(-2px)",
//                   },
//                   transition: ".3s",
//                 }}
//               >
//                 Send Message
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 8 }, // Balanced padding for proper display
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0e7ff 100%)", // Simplified background without grain or floating elements
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
          px: 0, // No left/right padding on Grid
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
              fullWidth
              multiline
              rows={5}
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