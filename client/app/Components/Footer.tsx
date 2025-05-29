import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Footer() {
  const [project, setProject] = useState("");

  return (
    <Box
      sx={{
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
        background: (theme) =>
          `linear-gradient(to bottom, 
            ${theme.palette.custom.Yellow} 0%, 
            ${theme.palette.custom.Yellow} 45%, 
            ${theme.palette.custom.Yellow} 67.96%, 
            ${theme.palette.custom.darkMaroon} 100%)`,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "space-between",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { md: "45%" },
          }}
        >
          <Typography
            component="p"
            sx={{
              textAlign: { xs: "center", md: "left" },
              width: { xs: "65%", md: "80%", lg: "70%" },
              fontSize: { xs: "21px", md: "25px" },
              fontFamily: "Switzer",
              fontWeight: "400",
              color: (theme) => theme.palette.custom.FooterBlack,
            }}
          >
            Do you need my services? Kindly fill the form below so we can work
            together.
          </Typography>
          <Box component="form" sx={{ paddingTop: "15px" }}>
            <TextField
              id="email"
              label="Enter your email address"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "44px",
                  "& fieldset": {
                    borderColor: (theme) => theme.palette.custom.Black100,
                  },
                  "& .MuiInputLabel-root": {
                    color: (theme) => theme.palette.custom.Black100,
                  },
                },
                width: { xs: "100%", md: "80%" },
                marginBottom: "15px",
                color: (theme) => theme.palette.custom.Black100,
              }}
            />
            <TextField
              id="project"
              multiline
              minRows={1}
              maxRows={3}
              label="Describe your project"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "44px",
                  "& fieldset": {
                    borderColor: (theme) => theme.palette.custom.Black100,
                  },
                  "& .MuiInputLabel-root": {
                    color: (theme) => theme.palette.custom.Black100,
                  },
                  "& textarea": {
                    padding: "16px", // match your desired inner padding
                    lineHeight: "1.2em", // consistent line height
                  },
                },
                width: { xs: "100%", md: "80%" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "44px",
                backgroundColor: (theme) => theme.palette.custom.FooterButton,
                width: { xs: "100%", md: "80%" },
                mt: 2,
                color: (theme) => theme.palette.custom.white,
                padding: "15px 0",
                fontFamily: "product-san, sans-serif",
              }}
            >
              submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            background: (theme) => theme.palette.custom.maroon,
            width: { xs: "90%", md: "400px", lg: "500px" },
            height: { xs: "200px", md: "250px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            borderRadius: "44px",
          }}
        >
          <Typography
            sx={{
              paddingBottom: "20px",
              fontSize: "26px",
              fontFamily: "'Switzer',serif",
              fontWeight: "400",
              color: "white",
            }}
          >
            Contact me on
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                background: (theme) => theme.palette.custom.white,
                width: "55px",
                height: "55px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box
              sx={{
                background: (theme) => theme.palette.custom.white,
                width: "55px",
                height: "55px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box
              sx={{
                background: (theme) => theme.palette.custom.white,
                width: "55px",
                height: "55px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box
              sx={{
                background: (theme) => theme.palette.custom.white,
                width: "55px",
                height: "55px",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
