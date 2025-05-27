import { pages } from "@/utils/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const About = () => {
  const [showContent, setShowContent] = useState(true);

  const navigateToNextPage = () => {
    setTimeout(() => {
      window.location.href = `#${pages[2].toLowerCase()}`;
    }, 500);
  };

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        background: (theme) => theme.palette.custom.Yellow,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        overflow: "hidden",
        // Add a pseudo-element for the wavy line:
        "&::after": {
          display: { xs: "none", md: "block" },
          content: '""',
          position: "absolute",
          bottom: "150px",
          left: "0",
          width: "100%",
          height: "300px",
          background: 'url("../../Images/Vector 3.png") no-repeat',
          backgroundSize: "100% 100%",
        },
      }}
    >
      <Typography
        component="h3"
        variant="h1"
        sx={{
          fontWeight: "700",
          color: (theme) => theme.palette.custom.Black100,
          fontSize: "40px",
        }}
      >
        About me
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          textAlign: "center",
          color: (theme) => theme.palette.custom.Black400,
          width: { xs: "70%", md: "52%" },
        }}
      >
        I am a web developer and technical writer who uses MERN stack and other
        modern web technologies to create top-notch websites, webApps, and other
        web solutions.
      </Typography>
      <Typography
        component="p"
        variant="body3"
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          textAlign: "center",
          color: (theme) => theme.palette.custom.Black400,
          width: { xs: "69%", md: "53%" },
        }}
      >
        I am particularly interested in start-up and small scale businesses as I
        have a lot of experience working in this niche.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr 1fr", md: "none" },
          gridTemplateAreas: {
            xs: `
          "a . b"
          ". c ."
        `,
            md: `'a c b'`,
          },
          justifyContent: "center",
          columnGap: { md: "130px" },
          width: "100%",
          maxWidth: "100%",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "100px", sm: "150px", md: "220px" },
            height: { xs: "100px", sm: "150px", md: "220px" },
            gridArea: "a",
            borderRadius: "50%",
            marginLeft: { xs: "40px", md: "0" },
            marginTop: "-20px",
          }}
        >
          <img
            src="/Images/AboutUs-Image-1.jpg"
            alt="AboutUs-Image-1"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100px", sm: "150px", md: "220px" }, // Adjusts size by breakpoint
            height: { xs: "100px", sm: "150px", md: "220px" },
            gridArea: "c",
            borderRadius: "50%",
            marginTop: { md: "30px" },
          }}
        >
          <img
            src="/Images/AboutUs-Image-2.jpg"
            alt="AboutUs-Image-2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100px", sm: "150px", md: "220px" }, // Adjusts size by breakpoint
            height: { xs: "100px", sm: "150px", md: "220px" },
            gridArea: "b",
            borderRadius: "50%",
            marginLeft: { xs: "-40px", md: "0" },
            marginTop: { md: "-20px" },
          }}
        >
          <img
            src="/Images/AboutUs-Image-3.jpg"
            alt="AboutUs-Image-3"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ cursor: "pointer" }} onClick={navigateToNextPage}>
        <img src="../../Images/Mask group.png" alt="Click-mouse" />
      </Box>
    </Box>
  );
};

export default About;
