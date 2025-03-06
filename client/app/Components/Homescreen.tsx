import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import pages from '@/utils/data';
import React, { useEffect, useState } from 'react';

const Homescreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current page index

  useEffect(() => {
    setIsMobile(window.innerWidth < 900);

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 50 && currentIndex < pages.length - 1) {
        navigateToPage(currentIndex + 1); // Scroll Down (only if not on last page)
      } else if (event.deltaY < -50 && currentIndex > 0) {
        navigateToPage(currentIndex - 1); // Scroll Up (only if not on first page)
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchEndY = event.touches[0].clientY;
      if (touchStartY - touchEndY > 50 && currentIndex < pages.length - 1) {
        navigateToPage(currentIndex + 1); // Swipe Up (Scroll Down)
      } else if (touchEndY - touchStartY > 50 && currentIndex > 0) {
        navigateToPage(currentIndex - 1); // Swipe Down (Scroll Up)
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentIndex]); // Update when index changes

  const navigateToPage = (index: number) => {
    if (index < 0 || index >= pages.length) return; // Prevent out-of-bounds
    setShowContent(false);
    setTimeout(() => {
      window.location.href = `#${pages[index].toLowerCase()}`;
      setCurrentIndex(index);
      setShowContent(true); // Restore visibility after navigation
    }, 500);
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        mt: { xs: '80px', md: '20px' },
        transition: 'opacity 0.5s ease-in-out',
        opacity: showContent ? 1 : 0,
        position: 'relative'
      }}
    >
      {showContent && (
        <>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              width: { xs: '90%', md: '50%' },
              mb: '20px'
            }}
          >
            <Typography component="span" variant="h1">
              My Name is
            </Typography>{' '}
            Babajide Oyafemi
          </Typography>
          <Typography variant="body2" sx={{ color: '#6B6B6B', mb: '60px' }}>
            And This is my portfolio showcase
          </Typography>
          <Box
            sx={{
              borderColor: '#CECECE',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '150px',
              padding: '20px',
              mb: { xs: '80px', md: '40px' }
            }}
          >
            <Box
              sx={{
                background: '#E6AF2E',
                borderRadius: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src="../../Images/User-Image.png"
                alt=""
                style={{ borderRadius: '150px' }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            {isMobile ? (
              <motion.div
                drag="y"
                dragConstraints={{ top: -100, bottom: 100 }}
                onDragEnd={(event, info) => {
                  if (info.offset.y < -50) {
                    navigateToPage(currentIndex + 1);
                  } else if (info.offset.y > 50) {
                    navigateToPage(currentIndex - 1);
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
                    borderRadius: '200px 200px 0 0'
                  }}
                >
                  Drag to navigate
                </Button>
              </motion.div>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigateToPage(currentIndex + 1)}
                sx={{
                  typography: 'body1',
                  background: '#E6AF2E',
                  color: '#000000',
                  height: { xs: '100px', md: '70px' },
                  width: { xs: '100px', md: '700px' },
                  borderRadius: '200px 200px 0 0'
                }}
              >
                Click or Scroll to Continue
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Homescreen;
