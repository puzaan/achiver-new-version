import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6}
        >
          <Typography fontWeight={700} variant={'h4'} align={'center'}>
            Want to work with us?
          </Typography>
          <Typography color={'text.secondary'}>
            We are one of the best places to work. Achievers groups creates
            an atmosphere where you can grow your inner self, show your talents,
            get the best out of your own self. We believe in invention of new
            processes that ease your work. 
            <br />
            <br />
            The work place at Achievers groups is
            very flexible. We are looking for some fresh talents who can add
            cultural values at Achievers groups, some one who has the same
            mission that is ours but also can bring diversity at the same time.
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6}>

          <Typography fontWeight={700} variant={'h4'} align={'center'} >
            Our mission is to be a role model technology company.
          </Typography>
          <Typography color={'text.secondary'}>
            {`But mainly we want to be great, defined by the brilliant Leapfroggers
            that we work with, unrelenting pride in craftsmanship, and creating
            impact in industries and ecosystems. And we're just getting started.
            If you can flat out code, design, and understand and embrace complex
            business and technical problems - please keep reading.`}
            <br />
            <br />
            
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{
            '& .lazy-load-image-background.lazy-load-image-loaded': {
              width: '100%',
              height: '100%',
            }
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            maxHeight={{ xs: 300, sm: 400, md: 520 }}
            borderRadius={2}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'cover',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
