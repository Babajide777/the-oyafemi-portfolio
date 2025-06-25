"use client";

import { DashboardLayoutProps } from "@/utils/type";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  blogPost,
  blogComponent,
  experience,
  experienceComponent,
  projects,
  projectsComponent,
}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [viewMode, setViewMode] = useState("hide");
  const showTab = () => {
    viewMode === "hide" ? setViewMode("show") : setViewMode("hide");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="ul"
          sx={{
            width: { md: "50%" },
            display: "flex",
            justifyContent: { xs: "center", md: "space-evenly" },
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            height: "50px",
          }}
        >
          <Box component="li">
            <Button
              sx={{
                textTransform: "none !important",
                color: (theme) =>
                  selectedTab === 1
                    ? theme.palette.custom.Red
                    : theme.palette.custom.darkGray,
                borderBottom: (theme) =>
                  selectedTab === 1
                    ? `2px solid ${theme.palette.custom.Red}`
                    : "none",
                borderRadius: 0,
              }}
              onClick={() => setSelectedTab(1)}
            >
              Blog Post
            </Button>
          </Box>
          <Box component="li">
            <Button
              sx={{
                textTransform: "none !important",
                color: (theme) =>
                  selectedTab === 2
                    ? theme.palette.custom.Red
                    : theme.palette.custom.darkGray,
                borderBottom: (theme) =>
                  selectedTab === 2
                    ? `2px solid ${theme.palette.custom.Red}`
                    : "none",
                borderRadius: 0,
              }}
              onClick={() => setSelectedTab(2)}
            >
              Experience
            </Button>
          </Box>
          <Box component="li">
            <Button
              sx={{
                textTransform: "none !important",
                color: (theme) =>
                  selectedTab === 3
                    ? theme.palette.custom.Red
                    : theme.palette.custom.darkGray,
                borderBottom: (theme) =>
                  selectedTab === 3
                    ? `2px solid ${theme.palette.custom.Red}`
                    : "none",
                borderRadius: 0,
              }}
              onClick={() => setSelectedTab(3)}
            >
              Projects
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {selectedTab === 1 && blogComponent}
        {selectedTab === 2 && experienceComponent}
        {selectedTab === 3 && projectsComponent}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
