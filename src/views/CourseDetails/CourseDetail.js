import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import { Hero, SidebarArticles, Syllabus } from './components';
import { useParams } from 'react-router-dom';
import { Course } from 'views/Store/AllData';
import List from '@mui/material/List';
const CourseDetail = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { id } = useParams();
  const data = id;
  //console.log(data);
  const courseData = Course.find((p) => p.id === data);
  // console.log(courseData);

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      top={90}
      bgcolor={'alternate.main'}
      padding={1}
      marginTop="-30px"
    >
      <SidebarArticles />
    </Box>
  );
  return (
    <Main colorInvert={true}>
      <Box>
        <Hero headder={courseData} />
        <Box
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          padding={1}
        >
          <Box
            flex={{ xs: '1 1 100%', md: '1 1 70%' }}
            maxWidth={{ xs: '100%', md: '100%' }}
          >
            <Box bgcolor={theme.palette.alternate.main}>
              <Container>
                <Box display="flex">
                  {isMd ? <Sidebar /> : null}
                  {courseData.syllabus.length > 0 ? (
                    <Syllabus data={courseData} />
                  ) : (
                    <Box bgcolor="alternate.main">
                      <Container
                        maxWidth={{ xs: 450, md: 900 }}
                        sx={{ padding: 0 }}
                      >
                        <List
                          sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            // padding: 2,
                            borderRadius: 2,
                            boxShadow: 2,
                            marginTop: -10.5,
                          }}
                        >
                          <Grid
                            sx={{
                              alignItems: 'unset',
                              padding: 2,
                              marginTop: -1,
                            }}
                            bgcolor="primary.main"
                            borderRadius={2}
                          >
                            <Box
                              display={'flex'}
                              alignItems={'center'}
                              flexDirection={'column'}
                              bgcolor="primary.main"
                            >
                              <Box>
                                <ListItemText
                                  align={'center'}
                                  sx={{ margin: 0 }}
                                  padding={'10px'}
                                  primary={'Content will be updated soon...'}
                                  primaryTypographyProps={{
                                    variant: 'h3',
                                    color: 'white',
                                    sx: {
                                      fontWeight: 600,
                                    },
                                  }}
                                />
                              </Box>
                            </Box>
                          </Grid>
                        </List>
                      </Container>
                    </Box>
                  )}
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default CourseDetail;



{/* <Grid sx={{ alignItems: 'unset', padding: 1 }} >
  <Box
    display={'flex'}
    alignItems={'center'}
    maxWidth={{ xs: 450, md: 900 }}
    flexDirection={'column'}
  //bgcolor="primary.main"
  >
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
      width={{ md: 500, sm: 100 }}
      padding={'10px'}
      bgcolor="primary.main"
    >
      <Box alignItems={'center'}>
        <ListItemText
          align={'center'}
          sx={{ margin: 0 }}
          padding={'10px'}
          primary={'Content will be updated Soon...'}
          primaryTypographyProps={{
            variant: 'h3',
            color: 'white',
            sx: {
              fontWeight: 600,
            },
          }}
        />
      </Box>
    </Box>
  </Box>
</Grid> */}