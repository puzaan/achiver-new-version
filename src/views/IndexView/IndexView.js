import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Features,
  //Hero,
  Reviews,
  DoNotListion,
  Solutions,
  Partners,
  Heros
  
} from './components';
import { Contact } from '../ContactPage/components/index';
const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Heros />
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
          <Container>
            <Features />
          </Container>
          
          {/* <Heros/> */}
          
          <Container>
            <Solutions />
          </Container>
          <Box bgcolor={'alternate.main'}>
            <Container>
              <DoNotListion />
            </Container>
          </Box>
          <Container>
            <Reviews />
          </Container>
          <Box bgcolor={'primary.main'}>
            <Container paddingX={'0 !important'} maxWidth={1}>
              <Partners />
            </Container>
          </Box>
          <Container>
            <Contact />
          </Container>
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
