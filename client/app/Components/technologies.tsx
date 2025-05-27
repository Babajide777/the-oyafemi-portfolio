import { Box, Divider, Typography } from "@mui/material";
import { th } from "framer-motion/client";
import React from "react";

const Technologies = () => {
  return (
    <Box
      id="technologies"
      component="section"
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "70px", md: "40px" },
      }}
    >
      <Typography
        component="h3"
        variant="h1"
        sx={{
          fontWeight: "700",
          paddingBottom: { xs: "40px", md: "30px" },
          fontSize: { xs: "30px", md: "40px" },
          color: (theme) => theme.palette.custom.Black100,
        }}
      >
        TECHNOLOGIES
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          textAlign: "center",
          width: { xs: "63%", md: "45%" },
          lineHeight: { xs: "25px" },
          paddingBottom: "60px",
          color: (theme) => ({
            xs: theme.palette.custom.Black400,
            md: theme.palette.custom.darkGray,
          }),
        }}
      >
        I am conversant with a range of JavaScript and TypeScript frontend,
        backend and CSS libraries and frameworks used in building web solutions
        such as React, Express, Node, BootStrap, Material UI, JQuery, and lots
        more.
      </Typography>
      <Box
        component="div"
        sx={{ width: { xs: "90%", md: "80%" }, paddingBottom: { xs: "11px" } }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: { xs: "100%", md: "50%" },
            paddingBottom: "25px",
          }}
        >
          <Typography
            component="h6"
            variant="body1"
            sx={{
              fontWeight: "900",
              fontSize: "16px",
              textTransform: "uppercase",
              borderBottom: (theme) =>
                `4px solid ${theme.palette.custom.Yellow}`,
              paddingBottom: "5px",
              color: (theme) => theme.palette.custom.Black500,
            }}
          >
            Frontend
          </Typography>
          <Typography
            component="h6"
            variant="body1"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              textTransform: "uppercase",
              color: (theme) => theme.palette.custom.Black100,
            }}
          >
            Backend
          </Typography>
          <Typography
            component="h6"
            variant="body1"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              textTransform: "uppercase",
              color: (theme) => theme.palette.custom.Black100,
            }}
          >
            Technical writing
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            border: "1px solid #C8C8C8",
            borderRadius: "16px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            padding: { xs: "0 50px" },
            height: { md: "140px" },
          }}
        >
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
              width: { md: "35%", lg: "28%" },
              paddingTop: { xs: "50px", md: "0" },
              color: (theme) => theme.palette.custom.Black500,
            }}
          >
            Experience with ReactJs, VanillaJS, and JQuery
          </Typography>
          <Box
            component="img"
            src="../../Images/boba-software-developer-workplace.png"
            alt="workplace-image"
            sx={{ height: { md: "100%" } }}
          />
        </Box>
        <Divider
          sx={{
            margin: "40px 0",
            background: (theme) => theme.palette.custom.Yellow,
          }}
        />
      </Box>
    </Box>
  );
};

export default Technologies;
