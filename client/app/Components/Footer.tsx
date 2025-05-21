import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Footer() {
    const [project, setProject] = useState('');

  return (
    <Box sx={{ paddingBottom:'80px',display:'flex', justifyContent:'center',background: 'linear-gradient(to bottom, #E6AF2E 0%, #E6AF2E 45%, #E6AF2E 67.96%, #6B0504 110%)' }}>
      <Box sx={{width:{xs:'90%'},display:'flex',flexDirection:{xs:'column',md:'row'},alignItems:{xs:'center', md:'flex-end'},justifyContent:'space-between',paddingTop:'50px'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'center', md:'flex-start'}, width:{md:"42.5%"}}}>
        <Typography component='p' sx={{textAlign:{xs:'center',md:'left'},width:{xs:'65%',md:'68%'}, fontSize:'20px', fontFamily:"'Switzer',serif",fontWeight:'400'}}>
          Do you need my services? Kindly fill the form below so we can work together.
        </Typography>
        <Box component='form' sx={{paddingTop:'30px'}}>
        <TextField id="email" label="Enter your email address" variant="outlined" sx={{"& .MuiOutlinedInput-root": {
      borderRadius: "44px","& fieldset": {
        borderColor: "#000000" 
      }, "& .MuiInputLabel-root": {
      color: "#000000"}
    },width:{xs:'100%',md:'80%'}, marginBottom:'15px', color:'#000000'}}/>
        <TextField id="project" multiline minRows={1} maxRows={3} label="Describe your project" variant="outlined" sx={{"& .MuiOutlinedInput-root": {
      borderRadius: "44px","& fieldset": {
        borderColor: "#000000" 
      }, "& .MuiInputLabel-root": {
      color: "#000000"},"& textarea": {
          padding: '16px',        // match your desired inner padding
          lineHeight: '1.2em',    // consistent line height
        }
    },width:{xs:'100%',md:'80%'}}}/>
        <Button variant='contained' sx={{borderRadius:'44px',background:'#000000', width:{xs:'100%',md:'80%'}, mt:3, color:'#ffffff', padding:'20px 0',textTransform:'none !important'}}>submit</Button>
        </Box>
      </Box>
    <Box sx={{marginTop:'50px',background:'rgba(115, 15, 6, 0.4)',width:{xs:'90%', md: '350px'},height:{md:'170px'}, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 20px', borderRadius:'44px'}}>
      <Typography sx={{paddingBottom:'20px', fontSize:'25px', fontFamily:"'Switzer',serif",fontWeight:'400', color:'white'}}>Contact me on</Typography>
      <Box sx={
        {display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%'}
      }>
        <Box sx={{background:'#ffffff', width:'55px', height:'55px',borderRadius:'50%'}}></Box>
        <Box sx={{background:'#ffffff', width:'55px', height:'55px',borderRadius:'50%'}}></Box>
        <Box sx={{background:'#ffffff', width:'55px', height:'55px',borderRadius:'50%'}}></Box>
        <Box sx={{background:'#ffffff', width:'55px', height:'55px',borderRadius:'50%'}}></Box>
      </Box>
    </Box>
    </Box>
  </Box>
  )}
