/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card';
import { mobAppDev } from 'views/Store/AllData';

const Trucking = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <List disablePadding>
      {mobAppDev.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          data-aos="fade-up"
          data-aos-delay={index * 300}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <ListItemAvatar>
            <Box
              component={Avatar}
              variant={'rounded'}
              color={theme.palette.primary.white}
              bgcolor={`${theme.palette.primary.light}22`}
            >
              {item.icon}
            </Box>
          </ListItemAvatar>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );

  const RightSide = () => (
    <Box width={1} >
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
              <Typography variant="h4" align={'justify'} sx={{ fontWeight: 700 }}>
                Mobile App Development
              </Typography>

              <Typography variant="h6" component="p" align={'justify'}>
                We are here to develop your business ideas into amazing and
                profitable mobile applications. We builds competitive mobile
                solutions that help transform your business into a prosperous
                mobile enterprise. We can also help improve your existing products
                or launch them on a new platform.


              </Typography>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={isMd ? 20 : 5}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <RightSide />

          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box
            width={1}
            data-aos={'fade-up'}
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            borderRadius={4}
            sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
            padding='10px'
          >

            <LeftSide />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trucking;
