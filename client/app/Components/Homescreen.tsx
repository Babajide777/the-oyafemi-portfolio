import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Homescreen = () => {
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
      <Button
        variant="contained"
        sx={{
          typography: 'body1',
          background: '#E6AF2E',
          color: '#000000',
          width: { xs: '90%', md: '70%' },
          height: '500px'
        }}
      >
        Click here to continue
      </Button>
    </Box>
  );
};

export default Homescreen;
