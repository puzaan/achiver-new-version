/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';
const VideoSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color={'text.primary'}
              component={'span'}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              We have recently conducted Machine learning workshops from the experience machine learning engineers from the global market ; (keeping the video of the machine learning workshop).
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Artificial Intelligence (AI), Data Science (DS), and Machine Learning (ML) are the pillars of the Fourth Industrial Revolution, or what is commonly known as Industry 4.0. AI is a branch of Computer Science that deals with the ability of a machine to closely imitate intelligent human behavior. ML is an application of AI that is based on the idea that when machines are provided new data, they can learn, grow, and develop on their own without explicit human intervention/programming.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
                  See Courses
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxHeight={600}>
            {/* <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={320}
              src="https://www.youtube.com/embed/ClIbn_IF31U"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            /> */}
            <Grid container justify="center">

              <ReactPlayer url='https://www.youtube.com/watch?v=lfZW0JmQiks'
                controls
              />
            </Grid>
          </Box>
        </Box>
        
      </Grid>
    </Grid>
  );
};

export default VideoSection;
