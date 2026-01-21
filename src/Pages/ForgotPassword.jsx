import React, { useState } from "react";
import { Box, TextField, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1 = email verify , 2 = reset password

  const handleVerifyEmail = () => {
    let temp = {};

    if (!email) temp.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      temp.email = "Enter valid email";

    setErrors(temp);
    if (Object.keys(temp).length !== 0) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exist = users.find((u) => u.email === email);

    if (!exist) {
      alert("Email not registered ❌");
      return;
    }

    setStep(2);
  };

  const handleResetPassword = () => {
    let temp = {};

    if (!newPassword) temp.password = "Password is required";
    else if (newPassword.length < 6)
      temp.password = "Password must be 6+ characters";

    setErrors(temp);
    if (Object.keys(temp).length !== 0) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((u) =>
      u.email === email ? { ...u, password: newPassword } : u
    );

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password Updated Successfully 🎉");
    navigate("/login");
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#e0e7ff,#fdf2f8)"
    }}>
      <Card sx={{ width: { xs: "90%", sm: 400 }, borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,.2)" }}>
        <CardContent>

          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 700, mb: 3 }}>
            Forgot Password
          </Typography>

          {step === 1 && (
            <>
              <TextField
                label="Enter Registered Email"
                fullWidth
                sx={{ mb: 3 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />

              <Button onClick={handleVerifyEmail}
                fullWidth
                variant="contained"
                sx={{ py: 1, fontSize: "16px", borderRadius: "10px" }}>
                Verify Email
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <TextField
                label="Enter New Password"
                type="password"
                fullWidth
                sx={{ mb: 3 }}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button
                onClick={handleResetPassword}
                fullWidth
                variant="contained"
                sx={{ py: 1, fontSize: "16px", borderRadius: "10px" }}>
                Reset Password
              </Button>
            </>
          )}

        </CardContent>
      </Card>
    </Box>
  );
}
