import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import pages from '@/utils/data';
import React, { useEffect, useState } from 'react';

const Homescreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(true); // State to control visibility

  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  // const navigateToNextPage = () => {
  //   setShowContent(false); // Hide current content
  //   setTimeout(() => {
  //     window.location.href = `#${pages[0].toLowerCase()}`; // Navigate to next page
  //   }, 500); // Delay for smooth transition
  // };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        mt: { xs: '80px', md: '15px' },
        transition: 'opacity 0.5s ease-in-out'
        // opacity: showContent ? 1 : 0, // Fade out effect
      }}
    >
      {/* {showContent && ( */}
      <>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            width: { xs: '50%', md: '30%' },
            mb: '15px'
          }}
        >
          <Typography component="span" variant="h1">
            My Name is
          </Typography>{' '}
          Babajide Oyafemi
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#6B6B6B',
            mb: { xs: '60px', md: '20px' },
            width: { xs: '50%' }
          }}
        >
          And This is my portfolio showcase
        </Typography>
        <Box
          sx={{
            borderColor: '#CECECE',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '150px',
            padding: '10px',
            mb: { xs: '80px', md: '20px' }
          }}
        >
          <Box
            sx={{
              background: '#E6AF2E',
              width: { xs: '200px', md: '150px' },
              height: { xs: '300px', md: '220px' },
              borderRadius: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src="../../Images/User-Image.png"
              alt=""
              style={{ borderRadius: '150px', height: '100%', width: '100%' }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          {isMobile ? (
            <motion.div
              drag="y"
              dragConstraints={{ top: -100, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -50) {
                  // navigateToNextPage();
                }
              }}
              style={{ cursor: 'grab' }}
            >
              <Button
                variant="contained"
                sx={{
                  typography: 'body1',
                  background: '#E6AF2E',
                  color: '#000000',
                  height: { xs: '100px', md: '70px' },
                  width: { xs: '350px', md: '600px' },
                  borderRadius: '150px 150px 0 0'
                }}
              >
                Drag up to continue
              </Button>
            </motion.div>
          ) : (
            <Button
              variant="contained"
              // onClick={navigateToNextPage}
              sx={{
                typography: 'body1',
                background: '#E6AF2E',
                color: '#000000',
                height: { xs: '100px', md: '70px' },
                width: { xs: '100px', md: '600px' },
                borderRadius: '150px 150px 0 0'
              }}
            >
              Click here to continue
            </Button>
          )}
        </Box>
      </>
      {/* )} */}
    </Box>
  );
};

export default Homescreen;
