import React from 'react';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  // Contact,
  Gallery,
  // Hero,
  Story,
  WhoWeAre,
  Team,
} from './components';

const About = () => {
  return (
    <Main >
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>
      <Container>
        <Gallery />
      </Container>
    </Main>
  );
};

export default About;
