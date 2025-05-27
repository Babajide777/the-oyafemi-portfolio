"use client";

import { AppBar, Box, IconButton, Toolbar, Typography,Menu, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { pages } from "@/utils/data";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [anchorNav,setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu=(event: React.MouseEvent<HTMLElement>)=>{
    setAnchorNav(event.currentTarget);
  }
  const closeMenu=()=>{
    setAnchorNav(null);
  }


  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: {md:"90%"},
        height: "50px",
        marginTop: {xs:"0",md:'15px'},
        borderRadius: {xs:'0',md:"40px"},
        boxShadow: "0px 4px 30px 0px #B333E914",
        background: "#FFFFFF",
      }}
    >
      <Toolbar
        sx={{width: "100%",
          height: "100%",}}
      >
        <Box sx={{
          width: "100%",
          height: "100%",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-around",
        }}>
        {pages.map((page) => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                color: theme => theme.palette.custom.Black300,
                textAlign: "center",
                cursor: "pointer",
                mx: 2,
                fontSize: "14px",
                fontWeight: "500",
              }}
              variant="body1"
            >
              {page}
            </Typography>
          </Link>
        ))}
        </Box>
        <Box sx={{
          width: "100%",
          height: "100%",
          display: { xs: "flex", md: "none" },
        }}>
<IconButton onClick={openMenu}>
  <MenuIcon/>
</IconButton>
<Menu open={Boolean(anchorNav)} onClose={closeMenu} anchorEl={anchorNav} sx={{
          display: { xs: "flex", md: "none" },
        }}>
  <MenuList sx={{width: "100px", height: "200px"}}>
    <MenuItem sx={{
          width:'100%',height:'100%',display: "flex",flexDirection: "column",justifyContent:"space-around"}}>
    {pages.map((page) => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                color: theme => theme.palette.custom.Black300,
                textAlign: "center",
                cursor: "pointer",
                mx: 2,
                fontSize: "14px",
                fontWeight: "500",
              }}
              variant="body1"
            >
              {page}
            </Typography>
          </Link>
        ))}</MenuItem>
  </MenuList>
</Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
