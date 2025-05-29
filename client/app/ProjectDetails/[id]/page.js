"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { itemData } from "@/utils/data";
import { Box } from "@mui/material";

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log("Project ID:", id);

  const [project, setProject] = useState(null);
  if (!id) {
    return <div>No project ID provided</div>;
  }
  useEffect(() => {
    const foundProject = itemData.find((item) => item.id === id);
    setProject(foundProject);
    console.log("Found Project:", foundProject);
  }, [id]);

  if (project) {
    return <div>Project not found</div>;
  }
  return <Box></Box>;
};

export default ProjectDetails;
