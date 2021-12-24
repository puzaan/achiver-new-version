import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import {  useTheme } from '@mui/material/styles';
// import { colors } from '@mui/material';
import { courseImg } from 'views/Store/AllData';

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Professional Software Development Programs
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          Lern form the industry export software developers and get hired.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 2 : 4}>
        {courseImg.map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 1,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={item}
                alt="..."
                effect="blur"
                minHeight={{ xs: 400, md: 350 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'contain',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              {/* <Box
                                position={'absolute'}
                                bottom={0}
                                left={0}
                                right={0}
                                padding={3}
                                sx={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
                                }}
                            >
                                <Typography
                                    variant={'h4'}
                                    fontWeight={700}
                                    sx={{ color: 'common.white' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant={'h6'}
                                    fontWeight={700}
                                    sx={{ color: 'common.white' }}
                                    gutterBottom
                                >
                                    {item.description}
                                </Typography>
                                <Button
                                    size={'large'}
                                    variant={'contained'}
                                    color={'secondary'}
                                >
                                    Read more
                                </Button>
                            </Box> */}
            </Box>
          </Grid>
        ))}

        {/* {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(item.color, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{ xs: 2, md: 4 }}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: { xs: '80%', md: '70%' },
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={
                      theme.palette.mode === 'light'
                        ? item.illustration
                        : item.illustrationDark
                    }
                    width={1}
                  />
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    size={'large'}
                    sx={{ marginTop: 2 }}
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
                    Learn more
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
};

export default Solutions;
