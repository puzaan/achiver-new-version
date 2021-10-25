import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Application, Main as MainSection, Newsletter } from './components';
import { jobs } from 'views/CareerListing/data';
import PropTypes from 'prop-types';

const CareerOpening = ({match}) => {
  console.log(jobs);
  const jobData = jobs.find(p => p.id === match.params.id);
  console.log(jobData);
  return (
    <Main>
      <Container>
        <MainSection/>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default CareerOpening;

CareerOpening.propTypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};