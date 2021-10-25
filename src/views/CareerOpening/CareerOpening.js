import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Application, Main as MainSection} from './components';
import { jobs } from 'views/CareerListing/data';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const CareerOpening = () => {
  const { jobList } = useParams();
  const data = jobList;
  console.log(data);
  const jobData = jobs.find((p) => p.id === data);
  console.log(jobData);
  return (
    <Main>
      <Container>
        <MainSection data={jobData} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      
    </Main>
  );
};

export default CareerOpening;

CareerOpening.propTypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};