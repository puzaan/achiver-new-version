import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero, SidebarArticles,
  Syllabus
} from './components';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Course } from 'views/Store/AllData';
const CourseDetail = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { id } = useParams();
  const data = id;
  console.log(data);
  const courseData = Course.find((p) => p.id === data);
  console.log(courseData);

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      
      top={90}
      
      bgcolor={'alternate.main'}
      padding={1}
      marginTop = '-30px'
    >
      <SidebarArticles />
      
    </Box>
  );
  return (
    <Main colorInvert={true}>
      <Box>
        <Hero headder={courseData }/>
        <Box position={'relative'} minHeight={'100vh'} display={'flex'} padding={1} >
          
          <Box
            flex={{ xs: '1 1 100%', md: '1 1 70%' }}
            maxWidth={{ xs: '100%', md: '100%' }}
            
          >

            <Box bgcolor={theme.palette.alternate.main}>
              <Container>
                <Box display='flex'>
                  {isMd ? <Sidebar /> : null}
                  {courseData.syllabus.length > 0
                    ? <Syllabus data={courseData} />
                    :
                    <Box display='flex'>
                      <Box>
                        <Typography fontWeight={700} variant={'h4'} gutterBottom>
                          Content will update soon...
                        </Typography>
                      </Box>
                    </Box>}
                  
                  
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
