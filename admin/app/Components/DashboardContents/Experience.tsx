"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormArea from "../FormArea";

const Experience = () => {
  const [title, setTitle] = useState("");
  const [experienceList, setExperienceList] = useState("");
  const [bodyText, setBodyText] = useState("");

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.custom.darkGray2,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "85%", margin: "20px 0" }}>
        <Typography
          sx={{
            fontWeight: "500",
            fontStyle: "medium",
            fontSize: "14px",
            color: (theme) => theme.palette.custom.Black200,
            marginBottom: "20px",
            marginLeft: "80px",
          }}
        >
          Edit Your Experience
        </Typography>
        <Divider />
        <Box component="form" sx={{ padding: "40px 0" }}>
          <FormArea
            title="Title"
            value={title}
            handleChangeArea={(e) => setTitle(e.target.value)}
            minRows={1.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              marginLeft: { xs: "0", md: "80px" },
              width: { xs: "100%", md: "50%" },
            }}
            titleName={{
              fontSize: "13px",
              fontWeight: "700",
              fontStyle: "bold",
            }}
            textareaSx={{ width: { xs: "100%", md: "400px" } }}
          />
          <FormArea
            title="Experience List"
            value={experienceList}
            handleChangeArea={(e) => setExperienceList(e.target.value)}
            minRows={1.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              marginLeft: { xs: "0", md: "80px" },
              margin: "20px 0",
              width: { xs: "100%", md: "50%" },
            }}
            titleName={{
              fontSize: "13px",
              fontWeight: "700",
              fontStyle: "bold",
            }}
            textareaSx={{ width: { xs: "100%", md: "400px" } }}
          />
          <FormArea
            title="Body-Text"
            value={bodyText}
            handleChangeArea={(e) => setBodyText(e.target.value)}
            minRows={4}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              marginLeft: { xs: "0", md: "80px" },
              width: { xs: "100%", md: "50%" },
            }}
            titleName={{
              fontSize: "13px",
              fontWeight: "700",
              fontStyle: "bold",
            }}
            textareaSx={{ width: { xs: "100%", md: "400px" } }}
          />
        </Box>
        <Button
          sx={{
            color: (theme) => theme.palette.custom.white,
            background: (theme) => theme.palette.custom.Red,
            width: { xs: "200px", md: "300px" },
            borderRadius: "30px",
            marginLeft: { xs: "0", md: "80px" },
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Publish
        </Button>
      </Box>
    </Box>
  );
};

export default Experience;
