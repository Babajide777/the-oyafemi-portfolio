import pages from '@/utils/data';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const About = () => {
  const [showContent, setShowContent] = useState(true);

  const navigateToNextPage = () => {
    setTimeout(() => {
      window.location.href = `#${pages[1].toLowerCase()}`;
    }, 500);
  };

  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        background: '#E6AF2E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: { xs: '40px', md: '20px' },
        /* Define the CSS variables for the wave */
        '--s': '250px', // size of the wave
        '--b': '40px', // thickness of the line
        '--m': '1.5', // curvature of the wave [0,2]
        '--R': 'calc(var(--s)*sqrt(var(--m)*var(--m) + 1) + var(--b)/2)',
        '--_g':
          '#0000 calc(99% - var(--b)), #000 calc(101% - var(--b)) 99%, #0000 101%',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'calc(2 * var(--R))',
          background: 'rgba(255, 255, 255, 0.3)',
          backgroundSize: 'cover',
          /* Apply the wave mask using our custom properties */
          mask: `
            radial-gradient(
              var(--R) at left 50% bottom calc(-1 * var(--m) * var(--s)), 
              var(--_g)
            ) calc(50% - 2 * var(--s)) calc(50% - var(--s)/2 - var(--b)/2)
              / calc(4 * var(--s)) calc(var(--s) + var(--b)) repeat-x,
            radial-gradient(
              var(--R) at left 50% top calc(-1 * var(--m) * var(--s)), 
              var(--_g)
            ) 50% calc(50% + var(--s)/2 + var(--b)/2)
              / calc(4 * var(--s)) calc(var(--s) + var(--b)) repeat-x
          `,
          WebkitMask: `
            radial-gradient(
              var(--R) at left 50% bottom calc(-1 * var(--m) * var(--s)), 
              var(--_g)
            ) calc(50% - 2 * var(--s)) calc(50% - var(--s)/2 - var(--b)/2)
              / calc(4 * var(--s)) calc(var(--s) + var(--b)) repeat-x,
            radial-gradient(
              var(--R) at left 50% top calc(-1 * var(--m) * var(--s)), 
              var(--_g)
            ) 50% calc(50% + var(--s)/2 + var(--b)/2)
              / calc(4 * var(--s)) calc(var(--s) + var(--b)) repeat-x
          `,
          maskRepeat: 'repeat-x',
          WebkitMaskRepeat: 'repeat-x'
        }
      }}
    >
      <Typography component="h3" variant="h3" sx={{ paddingBottom: '15px' }}>
        About me
      </Typography>
      <Typography
        component="p"
        variant="body3"
        sx={{
          textAlign: 'center',
          width: { xs: '77%', md: '65%' },
          paddingBottom: '20px'
        }}
      >
        I am a web developer and technical writer who uses MERN stack and other
        modern web technologies to create top-notch websites, webApps, and other
        web solutions.
      </Typography>
      <Typography
        component="p"
        variant="body3"
        sx={{
          textAlign: 'center',
          width: { xs: '77%', md: '65%' },
          paddingBottom: { xs: '60px', md: '35px' }
        }}
      >
        I am particularly interested in start-up and small scale businesses as I
        have a lot of experience working in this niche.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr 1fr', md: 'none' },
          gridTemplateAreas: {
            xs: `
          "a . b"
          ". c ."
        `,
            md: `'a c b'`
          },
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '100%'
        }}
      >
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '180px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '180px' },
            gridArea: 'a',
            borderRadius: '50%',
            marginLeft: { xs: '50px', md: '0' },
            marginTop: '-20px'
          }}
        >
          <img
            src="/Images/AboutUs-Image-1.jpg"
            alt="AboutUs-Image-1"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '180px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '180px' },
            gridArea: 'c',
            borderRadius: '50%',
            marginTop: { md: '30px' }
          }}
        >
          <img
            src="/Images/AboutUs-Image-2.jpg"
            alt="AboutUs-Image-2"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '110px', sm: '150px', md: '180px' }, // Adjusts size by breakpoint
            height: { xs: '110px', sm: '150px', md: '180px' },
            gridArea: 'b',
            borderRadius: '50%',
            marginLeft: { xs: '-50px', md: '0' },
            marginTop: { md: '-20px' }
          }}
        >
          <img
            src="/Images/AboutUs-Image-3.jpg"
            alt="AboutUs-Image-3"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{ marginTop: { xs: '120px', md: '20px' } }}
        onClick={navigateToNextPage}
      >
        <img src="../../Images/Mask group.png" alt="Click-mouse" />
      </Box>
    </Box>
  );
};

export default About;
