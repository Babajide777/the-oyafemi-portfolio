import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import pages from '@/utils/data';
import React, { useEffect, useState } from 'react';

const Homescreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  const navigateToNextPage = () => {
    setTimeout(() => {
      window.location.href = `#${pages[0].toLowerCase()}`;
    }, 500);
  };
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: { xs: '60px', md: '15px' },
        transition: 'opacity 0.5s ease-in-out',
        opacity: showContent ? 1 : 0
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '44px',
          fontWeight: '400',
          textAlign: 'center',
          width: { xs: '67%', md: '40%', lg: '35%' },
          mb: {xs:'15px', md:'15px'},
        }}
      >My Name is{' '}
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: '44px',
            fontWeight: '600',
            textTransform: 'capitalize'
          }}
        >Babajide Oyafemi   
        </Typography>   
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '400',
          fontSize: {xs:'16px',md:'18px'},
          textAlign: 'center',
          color: '#6B6B6B',
          mb: { xs: '30px', md: '40px', lg: '29px' },
          width: { xs: '60%' }
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
          mb: { xs: '30px', md: '42px', lg: '15px' },
        }}
      >
        <Box
          sx={{
            background: '#E6AF2E',
            width: { xs: '180px', md: '150px' },
            height: { xs: '250px', md: '220px', lg: '210px' },
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
            dragSnapToOrigin={true}
            onDragEnd={(event, info) => {
              if (info.offset.y < -50) {
                navigateToNextPage();
              }
            }}
            style={{ cursor: 'grab' }}
          >
            <Button
              variant="contained"
              sx={{
                fontWeight: '500',
                typography: 'body1',
                background: '#E6AF2E',
                color: '#000000',
                height: { xs: '57px', md: '70px' },
                width: { xs: '350px', md: '600px' },
                borderRadius: '150px 150px 0 0',
                textTransform: 'none'
              }}
            >
              Drag up to continue
            </Button>
          </motion.div>
        ) : (
          <Button
            variant="contained"
            onClick={navigateToNextPage}
            sx={{
              typography: 'body1',
              fontWeight: '500',
              fontSize: '15px',
              background: '#E6AF2E',
              color: '#000000',
              height: { xs: '100px', md: '50px', lg: '50px' },
              width: { xs: '100px', md: '550px', lg: '450px' },
              borderRadius: '150px 150px 0 0',
              textTransform: 'none'
            }}
          >
            Click here to continue
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Homescreen;
