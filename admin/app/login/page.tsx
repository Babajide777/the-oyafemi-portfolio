"use client";

import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.custom.darkGray2,
          width: { xs: "90%", sm: "400px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
          padding: "30px 20px",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Box sx={{ width: "100%" }}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="Enter your email"
            type="email"
            sx={{
              width: "100%",
              background: (theme) => theme.palette.custom.white,
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <TextField
            required
            id="outlined-password"
            label="Password"
            type="password"
            sx={{
              width: "100%",
              background: (theme) => theme.palette.custom.white,
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox {...label} />
            <Typography variant="body2">Remember me</Typography>
          </Box>
          <Typography variant="body2">Forgot Password?</Typography>
        </Box>
        <Button
          sx={{
            background: (theme) => theme.palette.custom.Red,
            color: (theme) => theme.palette.custom.white,
            textTransform: "capitalize",
            width: "100%",
          }}
          type="submit"
        >
          Login
        </Button>
        <Box>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link
              component={NextLink}
              href="/register"
              sx={{
                color: (theme) => theme.palette.custom.Red,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
