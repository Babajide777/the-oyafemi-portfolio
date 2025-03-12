import pages from '@/utils/data';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const About = () => {
  const [showContent, setShowContent] = useState(true);

  const navigateToNextPage = () => {
    setTimeout(() => {
      window.location.href = `#${pages[1].toLowerCase()}`;
    }, 500);
  };

  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        minHeight: '100svh',
        background: '#E6AF2E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '40px'
      }}
    >
      <Typography component="h3" variant="h3" sx={{ paddingBottom: '30px' }}>
        About me
      </Typography>
      <Typography
        component="p"
        variant="body3"
        sx={{ textAlign: 'center', width: '77%', paddingBottom: '20px' }}
      >
        I am a web developer and technical writer who uses MERN stack and other
        modern web technologies to create top-notch websites, webApps, and other
        web solutions.
      </Typography>
      <Typography
        component="p"
        variant="body3"
        sx={{ textAlign: 'center', width: '77%', paddingBottom: '60px' }}
      >
        I am particularly interested in start-up and small scale businesses as I
        have a lot of experience working in this niche.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateAreas: `
          "a . b"
          ". c ."
        `,
          width: '100%',
          maxWidth: '100%'
        }}
      >
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '200px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '200px' },
            gridArea: 'a',
            borderRadius: '50%',
            marginLeft: '50px',
            marginTop: '-20px'
          }}
        >
          <img
            src="/Images/AboutUs-Image-1.jpg"
            alt="AboutUs-Image-1"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '200px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '200px' },
            gridArea: 'c',
            borderRadius: '50%'
          }}
        >
          <img
            src="/Images/AboutUs-Image-2.jpg"
            alt="AboutUs-Image-2"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '200px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '200px' },
            gridArea: 'b',
            borderRadius: '50%'
          }}
        >
          <img
            src="/Images/AboutUs-Image-3.jpg"
            alt="AboutUs-Image-3"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              marginBottom: '-20px',
              marginLeft: '-60px',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: '120px' }} onClick={navigateToNextPage}>
        <img src="../../Images/Mask group.png" alt="Click-mouse" />
      </Box>
    </Box>
  );
};

export default About;
