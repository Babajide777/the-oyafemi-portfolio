"use client";

import {
  AppBar,
  Box,
  Button,
  Fade,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Nav() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    router.push("/login");
    setAnchorEl(null);
  };
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            width: "30px",
            backgroundColor: (theme) => theme.palette.custom.white,
            borderRadius: "50%",
          }}
        >
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: (theme) => theme.palette.custom.Black100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            AO
          </Button>
          <Menu
            id="fade-menu"
            slotProps={{
              list: {
                "aria-labelledby": "fade-button",
              },
            }}
            slots={{ transition: Fade }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
