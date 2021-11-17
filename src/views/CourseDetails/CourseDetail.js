import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, SidebarArticles, Content, Syllabus } from './components';

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
      
      
      top={10}
      bgcolor={'alternate.main'}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        height={1}
        width={1}
        
        sx={{
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        
        <Box 
          
          
        >
          <SidebarArticles />

        </Box>
      </Box>
    </Box>
  );
  return (
    <Main colorInvert={true}>
      <Box>
        <Hero />
        <Box position={'relative'} minHeight={'100vh'} display={'flex'} padding={3} >
          {isMd ? <Sidebar /> : null}
          <Box
            flex={{ xs: '1 1 100%', md: '1 1 70%' }}
            maxWidth={{ xs: '100%', md: '100%' }}
            
          >
            <Container>
              <Content />
            </Container>
            <Box>
              
            </Box>
            <Box bgcolor={theme.palette.alternate.main}>
              <Container>
                <Syllabus />
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
      
    </Main>
  );
};

export default CourseDetail;
