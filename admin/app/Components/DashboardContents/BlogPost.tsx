"use client";

import { Box } from "@mui/material";
import React from "react";

const BlogPost = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.custom.darkGray2,
        minHeight: "100vh",
      }}
    >
      BlogPost
    </Box>
  );
};

export default BlogPost;
