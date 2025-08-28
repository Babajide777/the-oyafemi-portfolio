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

const Register = () => {
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
        <Typography variant="h4">Sign up</Typography>
        <Box sx={{ width: "100%" }}>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            sx={{
              width: "100%",
              background: (theme) => theme.palette.custom.white,
            }}
          />
        </Box>
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
            label="Phone number"
            type="tel"
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
        {/* <Box
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
        </Box> */}
        <Button
          sx={{
            background: (theme) => theme.palette.custom.Red,
            color: (theme) => theme.palette.custom.white,
            textTransform: "capitalize",
            width: "100%",
          }}
          type="submit"
        >
          Sign up
        </Button>
        <Box>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link
              component={NextLink}
              href="/login"
              sx={{
                color: (theme) => theme.palette.custom.Red,
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
