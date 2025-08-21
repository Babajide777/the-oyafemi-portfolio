"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormArea from "../FormArea";
import Modal from "../Modal";

const BlogPost = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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
      {modal && <Modal toggleModal={toggleModal} />}

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
          Edit Your Blog post
        </Typography>
        <Divider />
        <Box component="form">
          <TextField
            id="standard-textarea"
            placeholder="Title"
            multiline
            rows={1}
            variant="filled"
            InputProps={{
              disableUnderline: true, // removes underline
            }}
            sx={{
              //   width: "100%",
              border: "none",
              "& .MuiInputBase-root": {
                color: (theme) => theme.palette.custom.gray100,
                backgroundColor: "transparent",
                fontWeight: 500,
                fontStyle: "medium",
                fontSize: "48px",
                marginLeft: "40px",
              },
              "& .MuiInputBase-placeholder": {
                color: (theme) => theme.palette.custom.Black100,
                backgroundColor: "transparent",
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", height: "100px" }}>
          <Box
            onClick={() => setOpen(!open)}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: (theme) => `${1}px solid ${theme.palette.custom.gray300}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Box
              component="img"
              src="/assets/images/plus.png"
              sx={{ objectFit: "cover", width: "10px", height: "10px" }}
            />
          </Box>

          {open && (
            <Box
              sx={{
                border: (theme) =>
                  `${1}px solid ${theme.palette.custom.lightGray3}`,
                borderRadius: "5px",
                padding: "15px",
                width: "143px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onClick={toggleModal}
            >
              <Typography
                sx={{
                  paddingBottom: "5px",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "13px",
                }}
              >
                Sub-Title
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "5px",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "13px",
                }}
              >
                Paragraph
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "5px",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "13px",
                }}
              >
                Image
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "40px 0",
          }}
        >
          <Divider sx={{ width: "50%", marginLeft: "45px" }} />
        </Box>
        <FormArea
          title="Categories"
          value={categories}
          handleChangeArea={(e) => setCategories(e.target.value)}
          minRows={3}
          sx={{ marginLeft: "45px" }}
          titleName={{ marginRight: "150px" }}
          textareaSx={{ width: "300px", height: "30px" }}
        />
        <Box
          sx={{
            width: "100%",
            padding: "40px 0",
          }}
        >
          <Divider sx={{ width: "50%", marginLeft: "45px" }} />
        </Box>
        <Button
          sx={{
            color: (theme) => theme.palette.custom.white,
            background: (theme) => theme.palette.custom.Red,
            width: "400px",
            borderRadius: "30px",
            marginLeft: "45px",
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

export default BlogPost;
