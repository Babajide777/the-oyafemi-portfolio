import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        height: '100vh',
        background: '#E6AF2E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography component="h3" variant="h3">
        About me
      </Typography>
      <Typography component="p" variant="body2">
        I am a web developer and technical writer who uses MERN stack and other
        modern web technologies to create top-notch websites, webApps, and other
        web solutions.
      </Typography>
      <Typography component="p" variant="body2">
        I am particularly interested in start-up and small scale businesses as I
        have a lot of experience working in this niche.
      </Typography>
      <Box>
        <Box>
          <img src="../../Images/AboutUs-Image-1.jpg" alt="AboutUs-Image-1" />
        </Box>
        <Box>
          <img src="../../Images/AboutUs-Image-2.jpg" alt="AboutUs-Image-2" />
        </Box>
        <Box>
          <img src="../../Images/AboutUs-Image-3.jpg" alt="AboutUs-Image-3" />
        </Box>
      </Box>
      <Box>
        <img src="../../Images/Mask group.png" alt="Click-mouse" />
      </Box>
    </Box>
  );
};

export default About;
