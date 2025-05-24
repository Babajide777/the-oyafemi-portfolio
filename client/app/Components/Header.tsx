"use client";

import { AppBar, Container, Menu, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const pages = ["About", "Work", "Technologies", "Blog"];

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        display: { xs: "none", md: "flex" },
        margin: "0 auto",
        width: "90%",
        marginTop: "20px",
        borderRadius: "40px",
        boxShadow: "0px 4px 30px 0px #B333E914",
        background: "#FFFFFF",
      }}
    >
      <Toolbar
        sx={{ width: "100", display: "flex", justifyContent: "space-around" }}
      >
        {pages.map((page) => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                color: "#3C3C3C",
                textAlign: "center",
                cursor: "pointer",
                mx: 2,
              }}
              variant="body1"
            >
              {page}
            </Typography>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
