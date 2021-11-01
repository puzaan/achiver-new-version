import React from 'react';
import Box from '@mui/material/Box';
//import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Work, Trucking, Integrations } from './components';

const JobListing = () => {
  return (
    <Main>
      <Hero />
      <Container>
        <Trucking />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container >
          <Integrations />
        </Container>
      </Box>

      <Container>
        <Work />
      </Container>
    </Main>
  );
};

export default JobListing;
