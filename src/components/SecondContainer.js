import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const SecondContainer = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1345 }}
    width={1}
    margin={'0 auto'}
    paddingX={0}
    //paddingTop={2}
    
    //paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

SecondContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondContainer;
