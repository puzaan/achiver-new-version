/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Course } from 'views/Store/AllData';

const SidebarArticles = () => {
  const theme = useTheme();
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(Course);
  return (
    <Box component={Card} variant={'outlined'} padding={1} >
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 600,
          marginBottom: 2,
        }}
      >
        Related Courses
      </Typography>
      <Grid container spacing={1}>
        {newList.slice(0, 5).map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={85}
              boxShadow={0}
              borderRadius={0}
              display={'flex'}
              alignItems={'center'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: 50 },
                  marginRight: 1,
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
                
              >
                <Box
                  component={LazyLoadImage}
                  height={50}
                  width={50}
                  src={item.logo}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    // maxHeight: 50,
                    // maxWidth: 50,
                    // minWidth: 50,
                    borderRadius: '50%',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                  
                />
              </Box>
              <Box
                style={{ textDecoration: 'none' }}
                component={'a'}
                href={`/course-detail/${item.id}`}
                //sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography color='main' fontWeight={300} gutterBottom={true} sx={{
                  textDecoration: 'none',
                  color:
                    theme.palette.mode === 'dark'
                      ? '#ffffff'
                      : '#000000'
                }}>
                  {item.title}
                </Typography>
                {/* <Box marginY={1 / 5}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    
                    Avilable Now
                  </Typography>
                </Box> */}
                {/* <Button size={'small'}>Read More</Button> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button component={Link}
        
        variant="outlined"
        color="primary"
        size="large"
        fullWidth = {true}
        to={'/it-traning'}>
        
        See More..

        
        
      </Button>
    </Box>
  );
};

export default SidebarArticles;
