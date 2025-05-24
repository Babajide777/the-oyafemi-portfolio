"use client";

import { Box } from "@mui/material";
import About from "./Components/about";
import Homescreen from "./Components/Homescreen";
import Technologies from "./Components/technologies";
import Work from "./Components/work";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

export default function Home() {
  return (
    <Box>
      <Box component="header">
        <Nav />
        <Homescreen />
      </Box>
      <About />
      <Technologies />
      <Work />
      <Footer />
    </Box>
  );
}
