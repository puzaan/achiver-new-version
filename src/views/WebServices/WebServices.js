import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Hero,
  HowItWorks,
  MobileApp,
  Partners,
  Process,
  //PageReferences,
} from './components';

const WebServices = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.alternate.main,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container>
        <About />
      </Container>
      <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Process />
          </Container>
        </Box>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <MobileApp />
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <HowItWorks />
        </Container>
      </Box>
      
      {/* <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <PageReferences />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box> */}
      
      
      
    </Main>
  );
};

export default WebServices;
