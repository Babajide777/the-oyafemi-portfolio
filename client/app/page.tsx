'use client';

import { Box, Container, Typography } from '@mui/material';
import About from './Components/about';
import Homescreen from './Components/Homescreen';
import Technologies from './Components/technologies';
import Work from './Components/work';

export default function Home() {
  return (
    <Box>
      <Homescreen />
      <About />
      <Technologies />
      <Work />
    </Box>
  );
}
