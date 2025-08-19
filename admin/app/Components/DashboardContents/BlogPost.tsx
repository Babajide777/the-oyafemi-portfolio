"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormArea from "../FormArea";

const BlogPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.custom.darkGray2,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Typography>Edit Your Blog post</Typography>
        <Divider />
        <Box component="form">
          <TextField
            id="standard-textarea"
            placeholder="Title"
            multiline
            rows={2}
            variant="standard"
          />
        </Box>
        <Box>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              border: "1px solid black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => setOpen(!open)}>+</Button>
          </Box>

          {open && (
            <Box>
              <Box>Sub-Title</Box>
              <Box>Paragraph</Box>
              <Box>Image</Box>
            </Box>
          )}
        </Box>
        <Box>
          <Divider />
        </Box>
        <FormArea
          title="Categories"
          value={""}
          handleChangeArea={() => {}}
          minRows={3}
        />
      </Box>
    </Box>
  );
};

export default BlogPost;
