/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import { Feature } from 'views/Store/AllData';

const Features = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <Grid container spacing={2}>
      {Feature.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box
            display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
            }}
          >
            <Box component={Card} padding={4} borderRadius={2} width={1}>
              <Box display={'flex'} flexDirection={'column'} marginBottom={{ xs: 2, md: 2 }}>
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(item.color, 0.1)}
                  // color={item.color}
                  color={'#000000'}
                  variant={'rounded'}
                  borderRadius={2}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
                <Box sx={{ flexGrow: 1 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const RightSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
        >
          GET HIRED IN OUR
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
          Career Oriented Software Development & Training Programs.
        </Typography>
        <Typography color="text.secondary" variant={'h6'}>
We are Proud to Collaborate with top Silicon Vally Software Ventures.          
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {[
          'Industry Standard and Job Ready Software Training.',
          'Remote Job Placement in USA',
          'Get Hired Directly in Top Software Firms in Nepal.',
          'Free Internship with Professional Software Devopers.',
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box component={ListItem} disableGutters width={'auto'} padding={0}>
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={20}
                  height={20}
                >
                  <svg
                    width={12}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Box marginTop={4}>
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
          Get started
        </Button>
      </Box> */}
    </Box>
  );

  return (
    <Grid container spacing={4} paddingBottom={3}>
      <Grid
        item
        xs={12}
        md={6}
      >
        <LeftSide />
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Features;
