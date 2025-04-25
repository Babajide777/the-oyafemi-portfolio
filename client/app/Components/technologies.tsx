import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Technologies = () => {
  return (
    <Box id="technologies" component='section' sx={{width: '100%',
      // minHeight: '40vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop:  '40px' }}>
      <Typography 
      component="h3"
      variant="h1" sx={{ fontWeight: '700', paddingBottom: '30px', fontSize: '30px' }}>TECHNOLOGIES</Typography>
      <Typography 
      component="p"
      variant="body1" sx={{
        fontWeight: '400',
        fontSize: '16px',
        textAlign: 'center',
        width: { xs: '63%', md: '45%' },
        paddingBottom: '40px'
      }}>I am conversant with a range of JavaScript and TypeScript frontend, backend and CSS libraries and frameworks used in building web solutions such as React, Express, Node, BootStrap, Material UI, JQuery, and lots more.</Typography>
      <Box component='div' sx={{width: { xs: '90%', md: '80%' }, paddingBottom: '10px'}}>
      <Box component='div' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: { xs: '100%', md: '60%' }, paddingBottom: '20px'}}>
        <Typography component="h6"
      variant="body1" sx={{fontWeight: '900',
        fontSize: '16px',textTransform:'uppercase', borderBottom:'4px solid #E6AF2E', paddingBottom:'5px', color:'#2B2B2B'}}>Frontend</Typography>
        <Typography component="h6"
      variant="body1" sx={{fontWeight: '400',
        fontSize: '16px',textTransform:'uppercase', color:'#2B2B2B'}}>Backend</Typography>
        <Typography component="h6"
      variant="body1" sx={{fontWeight: '400',
        fontSize: '16px',textTransform:'uppercase', color:'#2B2B2B'}}>Technical writing</Typography>
        </Box>
      <Box component='div' sx={{border:'1px solid #C8C8C8', borderRadius:'16px', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center',padding:'50px'}}>
        <Typography sx={{textAlign:'center'}}>Experience with ReactJs, VanillaJS, and JQuery</Typography>
        <Box component='div'>
        <img src="../../Images/boba-software-developer-workplace.png" alt="workplace-image" style={{width:'251px',height:'230px'}}/>
        </Box>
      </Box>
      <Divider />
      </Box>
        </Box> 
  );
};

export default Technologies;
