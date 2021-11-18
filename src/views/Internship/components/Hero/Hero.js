import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import ListItemText from '@mui/material/ListItemText';

import Container from 'components/Container';
import Card from '@mui/material/Card';

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      marginTop={-13}
      paddingTop={13}
      alignItems={'center'}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://cdn.discordapp.com/attachments/879992345968377866/908624965463601152/Achiever_Website_Scrolling_Dark.png)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.6),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={1}>
        <Box
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          alignContent={'center'}
          
        >
          <Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              height={'150px'}
              width={'500px'}
              data-aos={'fade-up'}
              data-aos-delay={100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              boxShadow={1}
              variant={'outlined'}
              borderRadius={3}
              sx={{
                background: alpha('#161c2d', 0.6),

              }}
            >
              <ListItemText
                align={'center'}
                sx={{ margin: 0 }}

                primary={'Internship'}

                primaryTypographyProps={{
                  variant: 'h3',

                  sx: {
                    fontWeight: 400,
                    color: 'common.white',
                  },
                }}

              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
