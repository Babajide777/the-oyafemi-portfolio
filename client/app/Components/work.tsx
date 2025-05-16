import { Box, Card, CardContent, CardMedia, ImageList, ImageListItem, Pagination, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { itemData } from '@/utils/data';


const Work = () => {
const theme = useTheme();
const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
// const totalCols = isMdUp ? 4 : 3;
const totalPost = isMdUp ? 6 : 4;

const [page,setPage]=useState(1)
const itemsPerPage = totalPost

const startIndex = ((page - 1) * itemsPerPage)
console.log(startIndex)
const endIndex = startIndex + itemsPerPage
console.log(endIndex)
const paginatedItems = itemData.slice(startIndex, endIndex)
console.log(paginatedItems)

const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
}

  return (
    <Box id="work" sx={{width: '100%', display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
      <Typography component="h3"
        variant="h1"
        sx={{ fontWeight: '700', paddingBottom: '15px', fontSize: '40px' }}>MY PROJECTS</Typography>
      <Stack sx={{width: '100%', display: 'flex', alignItems: 'center',mt: 4 }}>
      <Box sx={{width: '90%', display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap:'15px',  }} >
        {paginatedItems.map((item, index) => (
          <Box key={index} sx={{// for the second item (idx===1), span cols 2–4
      gridColumn: 
      isMdUp ? index === 1 ? '2 / 4' : index === 3 ? '1 / 3' : undefined :
  index === 1 ? '2 / 4' :
  index === 2 ? '1 / 3' :
  undefined,
 height:'100%'}}>
            <Card sx={{
                height: {xs:'150px', md:'200px'},
                position: 'relative',
                overflow: 'hidden',
                '&:hover .hoverContent': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              }}>
              <CardMedia component="img"
                image={item.img}
                alt={item.title} sx={{objectFit:'cover',width:"100%", height:'100%'}}/>
              <CardContent   className="hoverContent"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  opacity: 0,
                  transform: 'translateY(100%)',
                  transition: 'opacity 200ms ease, transform 200ms ease',
                }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.year}
                </Typography>
              </CardContent>
            </Card>
             </Box>
        ))}
      </Box>

      <Pagination
        count={Math.ceil(itemData.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ my: 4 }}
        variant="outlined"
        color="primary"
      />
    </Stack>
    </Box>
  );
};

export default Work;
