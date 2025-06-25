"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: (theme) => theme.palette.custom.Red,
          display: "flex",
          justifyContent: "flex-end",
          padding: { md: "0 40px" },
        }}
      >
        <Box
          sx={{
            height: "30px",
            width: "30px",
            backgroundColor: (theme) => theme.palette.custom.white,
            borderRadius: "50%",
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.custom.Black100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            AO
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
