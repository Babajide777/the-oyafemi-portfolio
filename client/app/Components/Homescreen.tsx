import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { pages } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Homescreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  const navigateToNextPage = () => {
    setTimeout(() => {
      window.location.href = `#${pages[0].toLowerCase()}`;
    }, 500);
  };
  return (
    <Container
      component="section"
      sx={{
        height: "calc(100% - 75px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        mt: "25px",
        transition: "opacity 0.5s ease-in-out",
        opacity: showContent ? 1 : 0,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "44px", md: "40px", lg: "36px" },
          fontWeight: "400",
          textAlign: "center",
          width: { xs: "67%", md: "38%", lg: "30%" },
          color: (theme) => theme.palette.custom.Black100,
        }}
      >
        My Name is{" "}
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: { xs: "44px", md: "40px", lg: "36px" },
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Babajide Oyafemi
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "400",
          fontSize: { xs: "16px", md: "18px" },
          textAlign: "center",
          color: (theme) => theme.palette.custom.Gray100,
          width: { xs: "60%" },
        }}
      >
        And This is my portfolio showcase
      </Typography>
      <Box
        sx={{
          borderColor: (theme) => theme.palette.custom.Gray200,
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "150px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            background: (theme) => theme.palette.custom.Yellow,
            width: { xs: "180px", md: "150px" },
            height: { xs: "250px", md: "220px", lg: "210px" },
            borderRadius: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../../Images/User-Image.png"
            alt=""
            style={{ borderRadius: "150px", height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <motion.div
          drag={isMobile ? "y" : false}
          dragConstraints={isMobile ? { top: -100, bottom: 0 } : undefined}
          dragSnapToOrigin={isMobile}
          onDragEnd={
            isMobile
              ? (event, info) => {
                  if (info.offset.y < -50) {
                    navigateToNextPage();
                  }
                }
              : undefined
          }
          style={{ cursor: isMobile ? "grab" : "default" }}
        >
          <Box
            component="img"
            src="../../Images/Button-mobile.png"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: { md: "none" },
            }}
          />
        </motion.div>
        <Box
          onClick={navigateToNextPage}
          component="img"
          src="../../Images/Button-desktop.png"
          sx={{
            width: "80%",
            position: "relative",
            display: { xs: "none", md: "block" },
            cursor: "pointer",
          }}
        />
        <Typography
          onClick={navigateToNextPage}
          sx={{
            display: { xs: "none", md: "block" },
            variant: "body1",
            fontWeight: "500",
            fontSize: "15px",
            color: "#000000",
            textTransform: "none",
            position: "absolute",
            paddingTop: { md: "25px", lg: "30px" },
            cursor: "pointer",
          }}
        >
          Click here to continue
        </Typography>
      </Box>
    </Container>
  );
};

export default Homescreen;
