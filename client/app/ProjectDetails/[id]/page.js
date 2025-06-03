"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { frameworks, itemData } from "@/utils/data";
import { Box, Divider, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/app/Components/Layout";
import Link from "next/link";

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
        <Box
          sx={{
            width: "85%",
            margin: "0 auto",
          }}
        >
          <Box>
            <Typography
              component="h3"
              variant="h1"
              sx={{
                fontSize: "45px",
                fontWeight: "700",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Eventis
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                // pt: 1,
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Virtual Meeting Hosting
            </Typography>
          </Box>
          <Divider sx={{ margin: "30px 0", background: "#D6D6D6" }} />
          <Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "400",
                width: "90%",
                margin: "0 auto",
              }}
            >
              This is a fully functional ECommerce website with cart, payment,
              search, emailing, and Admin section all working properly. The Repo
              is private as the application is for a client.
            </Typography>
          </Box>
          <Divider sx={{ margin: "30px 0", background: "#D6D6D6" }} />
          <Box sx={{ width: "70%", display: "flex", margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {frameworks.map((framework, idx) => (
                <Typography
                  variant="body1"
                  key={idx}
                  sx={{ fontSize: "12px", fontWeight: "500" }}
                >
                  {framework}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ width: "50%", display: "flex", margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                pt: 2,
              }}
            >
              <Box
                component="img"
                src="../../../Images/yellow-arrow.png"
                sx={{ width: "15px" }}
              />
              <Box component="img" src="../../../Images/Dot.png" />
              <Link
                href="/"
                variant="body1"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#E6AF2E",
                  textDecoration: "none",
                }}
              >
                Source
              </Link>
              <Box component="img" src="../../../Images/Dot.png" />
              <Link
                href="/"
                variant="body1"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#E6AF2E",
                  textDecoration: "none",
                }}
              >
                Code
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProjectDetails;
