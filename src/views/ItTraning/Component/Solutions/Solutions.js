import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { Avatar, colors } from '@mui/material';
import { Course } from 'views/Store/AllData';

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const greenColor = colors.green[500];
  const icon = (
    <svg
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={isMd ? 'center' : 'left' }
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          PROFESSIONAL IT COURSES
        </Typography>
        <Typography variant="h6" color={'text.secondary'} align={isMd ? 'center' : 'left'} data-aos={'fade-up'}>
          We provides many Career oriented professional IT courses.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {Course.map((item, i) => (
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
              bgcolor={alpha(greenColor, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  marginBottom={{ xs: 2, md: 2 }}
                  
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: { xs: '80%', md: '70%' },
                    },
                  }}
                >
                  <Box
                    component={Avatar}
                    width={70}
                    height={70}
                    marginBottom={2}
                    bgcolor={alpha(greenColor, 0.1)}
                    color={greenColor}
                    variant={'rounded'}
                    borderRadius={2}
                    
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700, marginLeft: 5 }}
                      paragraph={true}
                      align= 'justify'
                      
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  
                </Box>
                <Box>
                  <Typography
                    color="text.secondary"
                    component="p"
                    align='justify'
                  >
                    {item.shortDes} <br />
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
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
