import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from 'components/Container';
import { syllabusDetails } from 'views/Store/AllData';
//import { alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';


const Syllabus = () => {
  //const [syllabusName, setSyllabusName] = React.useState(notFond);


  const theme = useTheme();
  return (
    <Box bgcolor='alternate.main'>
      <Container maxWidth={900} sx={{ padding: 0 }}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            // padding: 2,
            borderRadius: 2,
            boxShadow: 2,
            marginTop: -10.5
          }}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}>
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
              data-aos={'fade-up'}
              data-aos-delay={100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              boxShadow={1}
              variant={'outlined'}
              borderRadius={3}
              width={500}
              sx={{
                background: 'alternate.main',


              }}
            >


              <Box >

                <ListItemText
                  align={'center'}
                  sx={{ margin: 0 }}

                  primary={'Syllabus'}

                  primaryTypographyProps={{
                    variant: 'h3',
                    color: 'primary',
                    sx: {
                      fontWeight: 400,

                    },
                  }}

                />
              </Box>
            </Box>

          </Box>

          
          {syllabusDetails.map((item, i) => (
            <Grid sx={{ alignItems: 'unset', padding: 2 }} key={i}>
              <Box>
                <Typography
                  variant='h4'
                  color='primary'
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
                {item.topics.map((topic, j) => (
                  <ListItem sx={{ alignItems: 'unset' }} key={j}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                    >
                      <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <Box
                          component={Avatar}
                          width={50}
                          height={50}
                          marginBottom={2}
                          bgcolor={theme.palette.primary.main}
                          color={theme.palette.background.paper}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </Box>
                      </ListItemIcon>
                      <Box
                        display={i === topic.length - 1 ? 'none' : 'flex'}
                        flex={'1 1 0%'}
                        borderRight={`1px solid ${theme.palette.divider}`}
                      />
                    </Box>
                    <Box marginLeft={2}>
                      <ListItemText
                        primary={topic.topicName}
                        secondary={topic.day}
                        primaryTypographyProps={{ fontWeight: 700 }}
                        secondaryTypographyProps={{
                          fontWeight: 600,
                          color: 'primary',
                        }}
                      />
                      <Box marginTop={2}>
                        <Typography variant={'subtitle2'}>
                          {topic.description}
                        </Typography>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </Box>
            </Grid>
          ))}
        </List>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          sx={{ pt: 2 }}
        >
          <Button
            component={Link}
            to={'/'}
            size='large'
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
            variant='outlined'
          >
            Go Home
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default Syllabus;
