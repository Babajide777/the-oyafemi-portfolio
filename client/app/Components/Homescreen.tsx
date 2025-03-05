import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import pages from '@/utils/data';
import React, { useEffect, useState } from 'react';

const Homescreen = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const pageToSection = () => {
    const section = document.getElementById(pages[0].toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        mt: { xs: '80px', md: '20px' }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          width: { xs: '90%', md: '50%' },
          mb: '20px'
        }}
      >
        <Typography component="span" variant="h1">
          {' '}
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
          // Drag button for mobile
          <motion.div
            drag="x" // Drag only in the horizontal direction
            dragConstraints={{ left: 0, right: 100 }} // Set movement limits
            onDragEnd={pageToSection} // Scroll on drag end
          >
            <Button variant="contained" sx={{ px: 4, py: 2 }}>
              Drag up to continue
            </Button>
          </motion.div>
        ) : (
          // Click button for desktop
          <Button
            variant="contained"
            onClick={pageToSection}
            sx={{ px: 4, py: 2 }}
          >
            Click here to continue
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Homescreen;
