"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { itemData } from "@/utils/data";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/app/Components/Layout";

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
  }, [id]);

  if (project) {
    return <div>Project not found</div>;
  }

  var settings = {
    className: "center",
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <Layout>
      <Box component="main">
        <Box
          sx={{
            width: { xs: "85%", md: "100%" },
            margin: "0 auto",
            overflow: "hidden",
            padding: "40px 0",
          }}
        >
          <Slider {...settings}>
            {itemData.map((item) => (
              <Box
                key={item.id}
                className="slide"
                sx={{
                  px: 1,
                  transition: "transform 0.3s ease",
                  display: "flex",
                  justifyContent: "center", // vertical centering
                  alignItems: "center", // horizontal centering (optional)
                  height: { xs: "230px", md: "180px" },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "all 0.4s ease",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProjectDetails;
