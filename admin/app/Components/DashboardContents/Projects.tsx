"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormArea from "../FormArea";

const Projects = () => {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [languages, setLanguages] = useState("");
  const [code, setCode] = useState("");
  const [source, setSource] = useState("");
  const [webLink, setWebLink] = useState("");

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // trigger hidden input
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log("Selected file:", event.target.files[0]);
    }
  };

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
          Edit Your Projects
        </Typography>
        <Divider />
        <Box component="form" sx={{ padding: "40px 0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 13 },
              borderRadius: "8px",
              marginTop: "20px",
              width: { xs: "100%", md: "50%" },
              marginLeft: { xs: "0", md: "80px" },
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                marginBottom: { xs: "7px", md: "0" },
                fontSize: "13px",
                fontWeight: "700",
                fontStyle: "bold",
              }}
            >
              Image
            </Typography>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <Box
              sx={{
                textTransform: "capitalize",
                border: (theme) =>
                  `${1}px solid ${theme.palette.custom.gray200}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "200px",
              }}
              component="div"
              onClick={handleClick}
            >
              <Box
                component="img"
                src="../../../assets/images/big-plus.png"
                alt="Uploaded Preview"
                sx={{ width: "30%" }}
              />
            </Box>
          </Box>
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
            title="Sub-Text"
            value={subText}
            handleChangeArea={(e) => setSubText(e.target.value)}
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
            minRows={1.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              marginLeft: { xs: "0", md: "80px" },
              marginBottom: "20px",
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
            title="Languages"
            value={languages}
            handleChangeArea={(e) => setLanguages(e.target.value)}
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
          <Divider sx={{ margin: "40px 0" }} />
          <FormArea
            title="Code"
            value={code}
            handleChangeArea={(e) => setCode(e.target.value)}
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
            title="Source"
            value={source}
            handleChangeArea={(e) => setSource(e.target.value)}
            minRows={1.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              marginLeft: { xs: "0", md: "80px" },
              width: { xs: "100%", md: "50%" },
              margin: "20px 0",
            }}
            titleName={{
              fontSize: "13px",
              fontWeight: "700",
              fontStyle: "bold",
            }}
            textareaSx={{ width: { xs: "100%", md: "400px" } }}
          />
          <FormArea
            title="Web-Link"
            value={webLink}
            handleChangeArea={(e) => setWebLink(e.target.value)}
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

export default Projects;
