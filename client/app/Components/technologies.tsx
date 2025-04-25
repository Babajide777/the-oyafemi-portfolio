import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Technologies = () => {
  return (
    <Box id="technologies" component='section'>
      <Typography>TECHNOLOGIES</Typography>
      <Typography>I am conversant with a range of JavaScript and TypeScript frontend, backend and CSS libraries and frameworks used in building web solutions such as React, Express, Node, BootStrap, Material UI, JQuery, and lots more.</Typography>
      <Box component='div'>
      <Box component='div'>
        <Typography>Frontend</Typography>
        <Typography>Backend</Typography>
        <Typography>Technical writing</Typography>
        </Box>
      <Box component='div'>
        <Typography>Experience withReactJs, VanillaJS, and JQuery</Typography>
        <Box component='div'>
        <img src="../../Images/boba-software-developer-workplace.png" alt="workplace-image" />
        </Box>
      </Box>
      <Divider />
      </Box>
        </Box> 
  );
};

export default Technologies;
