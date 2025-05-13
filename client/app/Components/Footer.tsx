import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return <Box>
    <Box>
      <Typography component='p'>
      Do you need my services? Kindly fill the form below so we can work together.
      </Typography>
      <TextField id="outlined-basic" label="Enter your email address" variant="outlined" />
    </Box>
    <Box></Box>
  </Box>
}
