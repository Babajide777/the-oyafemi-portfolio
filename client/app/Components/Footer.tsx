import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Footer() {
    const [project, setProject] = useState('');

  return (
    <Box sx={{ padding:'60px 20px 80px 20px',display:'flex',flexDirection:'column',alignItems:'center',background: 'linear-gradient(to bottom, #E6AF2E 0%, #E6AF2E 45%, #E6AF2E 67.96%, #6B0504 110%)' }}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography component='p' sx={{textAlign:'center',width:'65%', fontSize:'20px', fontFamily:"'Switzer',serif",fontWeight:'400'}}>
          Do you need my services? Kindly fill the form below so we can work together.
        </Typography>
        <Box component='form' sx={{paddingTop:'30px'}}>
        <TextField id="email" label="Enter your email address" variant="outlined" sx={{"& .MuiOutlinedInput-root": {
      borderRadius: "44px","& fieldset": {
        borderColor: "#000000" 
      }, "& .MuiInputLabel-root": {
      color: "#000000"}
    },width:'100%', marginBottom:'15px', color:'#000000'}}/>
        <TextField id="project" multiline minRows={1} maxRows={3} label="Describe your project" variant="outlined" sx={{"& .MuiOutlinedInput-root": {
      borderRadius: "44px","& fieldset": {
        borderColor: "#000000" 
      }, "& .MuiInputLabel-root": {
      color: "#000000"},"& textarea": {
          padding: '16px',        // match your desired inner padding
          lineHeight: '1.2em',    // consistent line height
        }
    },width:'100%'}}/>
        <Button variant='contained' sx={{borderRadius:'44px',background:'#000000', width:'100%', mt:3, color:'#ffffff', padding:'10px 0',textTransform:'none !important'}}>submit</Button>
        </Box>
      </Box>
    <Box sx={{marginTop:'50px',background:'rgba(115, 15, 6, 0.4)',width:'90%', display:'flex',flexDirection:'column',alignItems:'center',padding:'40px 20px', borderRadius:'44px'}}>
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
  )}
