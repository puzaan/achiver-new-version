/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  {
    icon: '/reacts.png',
    title:'React Native'
  },
  {
    icon: '/flutter.png',
    title: 'Flutter'
  }
  
  
  
];

const Integrations = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Typography
        variant={'h4'}
        
        sx={{ fontWeight: 700 }}
        align={'center'}
      >
        Cross-Platform Mobile Frameworks and Tools We Use
      </Typography>
      <Grid container spacing={6} >
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Typography variant="h6" component="p" align={'justify'} paddingTop='20px'>
              Our team of experts in mobile app development uses the most
              popular cross-platform technologies to create mobile-optimized web apps
              and HTML5 hybrid mobile apps that provide a native user experience.
            </Typography>
          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          
          <Box
            width={1}
            display="flex"
            flexWrap="wrap"
            justifyContent={isMd ? 'space-around' : 'flex-start'}
          >
            {mock.map((item, i) => (
              <Box
                key={i}
                display="flex"
                flexWrap="wrap"
                justifyContent={isMd ? 'space-around' : 'flex-start'}
              >
                <Box maxWidth={90}
                  marginTop={2}
                  marginRight={4}
                  key={i}
                  display="flex"
                  flexWrap="wrap"
                  alignItems={'center'}
                >
                  <Box
                    component="img"
                    height={1}
                    width={1}
                    src={item.icon}
                    alt="..."


                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0) invert(0.7)'
                          : 'none',
                    }}
                  />
                  
                </Box>
                <Box display="flex"
                  flexWrap="wrap"
                  alignItems={'center'}>
                  <Typography variant="h6" component="p" align={'center'} alignItems={'center'}>
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Integrations;
