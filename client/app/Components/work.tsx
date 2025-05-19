import { Box, Card, CardContent, CardMedia, ImageList, ImageListItem, Pagination, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { itemData } from '@/utils/data';


const Work = () => {
const theme = useTheme();
const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
const totalPost = isMdUp ? 6 : 4;

const [page,setPage]=useState(1)
const itemsPerPage = totalPost

const startIndex = ((page - 1) * itemsPerPage)
const endIndex = startIndex + itemsPerPage
const paginatedItems = itemData.slice(startIndex, endIndex)

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
                borderBottomRightRadius: isMdUp && index === 5 ? '50px' : undefined,
                height: {xs:'150px', md:'200px'},
                position: 'relative',
                overflow: 'hidden',
                '&:hover .hoverContent': {
                  opacity: 1,
                  cursor: 'pointer',
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
                  top: 0,
                  bgcolor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  opacity: 0,
                  transform: 'translateY(100%)',
                  transition: 'opacity 200ms ease, transform 200ms ease',
                }}>
                  <Box sx={{width:'40px',height:'40px', backgroundColor:'#ffffff',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',top:'0px',right:'0px', border:'none'}}>
                  <Box component='img' src='../../Images/export-Icon.png'/>
                </Box>
                <Box sx={{position:'absolute',bottom:'15px',left:'15px'}}>
                <Typography variant="body1" color="#ffffff" sx={{fontSize:'10px', fontWeight: '400'}}>
                  {item.year}
                </Typography>
                <Typography component="h5"
        variant="body1"
        sx={{ fontWeight: '700', paddingBottom: '15px', fontSize: {xs:'16px', md:'30px'}, textTransform:'uppercase' }}>{item.title}</Typography>
                </Box>
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
