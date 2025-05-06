import { Box, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import React from 'react';
import { itemData } from '@/utils/data';

const Work = () => {
  return (
    <Box id="work">
      <Typography>MY PROJECTS</Typography>
      <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
    </Box>
  );
};

export default Work;
