import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import SecondContainer from 'components/SecondContainer';
import {
  Features,
  //Hero,
  // Reviews,
  DoNotListion,
  Solutions,
  Partners,
  Heros,
} from './components';
import { Contact } from '../ContactPage/components/index';
const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Box bgcolor={'alternate.main'}>
            <SecondContainer >
              <Heros />
            </SecondContainer>
          </Box>
          <Container>
            <Features />
          </Container>
          <Box bgcolor={'alternate.main'}>
            <Container>
              <Solutions />
            </Container>
          </Box>
          <Container>
            <DoNotListion />
          </Container>
          {/* <Box bgcolor={'alternate.main'}>
            <Container>
              <Reviews />
            </Container>
          </Box> */}
          <Container>
            <Contact />
          </Container>
          <Box bgcolor={'primary.main'}>
            <Container paddingX={'0 !important'} maxWidth={1}>
              <Partners />
            </Container>
          </Box>
          <Box bgcolor={'alternate.green'} height='3px'>
          </Box>
        </Box>
        
      </Main>
    </Box>
  );
};

export default IndexView;
