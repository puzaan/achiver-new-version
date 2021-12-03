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

const CourseDetail = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
        <Hero />
        <Box position={'relative'} minHeight={'100vh'} display={'flex'} padding={1} >
          
          <Box
            flex={{ xs: '1 1 100%', md: '1 1 70%' }}
            maxWidth={{ xs: '100%', md: '100%' }}
            
          >

            <Box bgcolor={theme.palette.alternate.main}>
              <Container>
                <Box display='flex'>
                  {isMd ? <Sidebar /> : null}
                  <Syllabus />
                  
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
