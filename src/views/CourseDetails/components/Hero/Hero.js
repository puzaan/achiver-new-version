import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { headder } = props;

  const theme = useTheme();
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
            'url(https://assets.maccarianagency.com/backgrounds/img3.jpg)',
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
              //flexDirection={'column'}
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
              maxWidth={500}
            >
              <Box paddingLeft={'80px'}
                sx={{
                  
                  '& .lazy-load-image-loaded': {
                    
                    display: 'flex !important',
                    bgcolor: 'transparent'
                  },
                }}
              >
                <Box
                  //maxWidth={90}
                  component={LazyLoadImage}
                  height="100px"
                  width="100px"
                  src={headder.logo}
                  alt="..."
                  sx={{
                    marginTop : 1,
                    borderRadius: '50%',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',

                  }}
                />
              </Box>

              <Box paddingLeft={'20px'}>
                <ListItemText
                  //align={'center'}
                  sx={{ margin: 0 }}
                  primary={headder.id}
                  secondary={'Duration: 2.5 months'}
                  primaryTypographyProps={{
                    variant: 'h3',

                    sx: {
                      fontWeight: 400,
                      color: 'common.white',
                    },
                  }}
                  secondaryTypographyProps={{
                    variant: 'h6',

                    sx: { color: alpha('#ffffff', 0.8) },
                  }}
                />
              </Box>
            </Box>

            {/* <Box
              component={Card}
              width={500}
              height={111}
              boxShadow={1}
              variant={'outlined'}
              borderRadius={3}
              display={'flex'}
              alignItems={'center'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: 60 },
                  maxWidth: 60,
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={headder.logo}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 50,
                    maxWidth: 50,
                    minWidth: 50,
                    borderRadius: '50%',
                    filter:
                      theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  }}
                />
              </Box>
              <CardContent
                style={{ textDecoration: 'none' }}
                component={'a'}
                href={`/course-detail/${headder.id}`}
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography
                  color="main"
                  fontWeight={300}
                  gutterBottom={true}
                  sx={{
                    textDecoration: 'none',
                    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                  }}
                >
                  {headder.title}
                </Typography>
                <Box marginY={1 / 5}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    Avilable Now
                  </Typography>
                </Box>
              </CardContent>
            </Box> */}

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: 'common.white',
                }}
              >
                Remote work in the future, but should you go remote?
              </Typography>
            </Box>
          </Box>

          


        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
Hero.propTypes = {
  headder: PropTypes.any,
};
