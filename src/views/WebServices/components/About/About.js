/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>

      
      <Typography variant="h6" component="p" color="text.secondary" align='justify'>
        With many years of experience in web application development services, Achievers has enough expertise to embody even the most daring ideas into perfect web apps. We do not just create custom web applications. We solve your business problems. We’re always ready to meet your high expectations and quality standards, find solutions for any business tasks and offer opportunities for future product evolution. Excellent usability, responsiveness, and security will provide a flawless and smooth operation of your web app.
      </Typography>
      <Box marginTop={2}>
        <Box
          width={1}
          height={1}
          data-aos={'fade-up'}
          component={Card}
          display={'flex'}
          flexDirection={'column'}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box marginBottom={1}>
              
            </Box>
            <Typography color="text.primary">
              Have a web app idea? We’ll study it thoroughly, consider all your ‘nice to have’ features, and with your cooperation, create a detailed specification for its further development to push your idea forward.
            </Typography>
          </CardContent>
          <Box margin ={1} >
            <Button
              variant={'contained'}
              size={'large'}
              endIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </Box>
              }
            >
              Contact Us
            </Button>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box width={1}>
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                marginX: 'auto',
              }}
            >
              <Box>
                <Box
                  position={'relative'}
                  zIndex={2}
                  maxWidth={1}
                  height={'auto'}
                  sx={{ verticalAlign: 'middle' }}
                >
                  <LaptopSkeletonIllustration />
                </Box>
                <Box
                  position={'absolute'}
                  top={'8.4%'}
                  left={'12%'}
                  width={'76%'}
                  height={'83%'}
                  border={`1px solid ${theme.palette.alternate.dark}`}
                  zIndex={3}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      height: 1,
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                    alt="Image Description"
                    width={1}
                    height={1}
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
