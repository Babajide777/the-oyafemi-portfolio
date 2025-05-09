import { Box, ImageList, ImageListItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { itemData } from '@/utils/data';


const Work = () => {
const theme = useTheme();
const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
const totalCols = isMdUp ? 4 : 3;
  return (
    <Box id="work" sx={{width: '100%', display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
      <Typography>MY PROJECTS</Typography>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',mt: 4 }}>
      <ImageList variant='quilted' cols={totalCols} gap={15} sx={{width: '90%'}}>
        {itemData.map((item, index) => (
          console.log(item, index),
          <ImageListItem key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                // display: 'block',
                // width: '100%',
              }}
            />

          // </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Box>
  );
};

export default Work;
