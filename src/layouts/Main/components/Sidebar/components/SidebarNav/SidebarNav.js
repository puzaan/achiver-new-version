import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={4}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/Achiever_Groups_DARK.png'
                : '/Achiever_Groups_LIGHT.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box paddingBottom={1} >
          <Typography
            style={{ textDecoration: 'none'}}

            color= 'text.primary'
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700
            }}
            to="/about"

          >
            About
          </Typography>
        </Box>
        <Box paddingBottom={1}>
          <Typography
            style={{ textDecoration: 'none' }}

            color='text.primary'
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700
            }}
            to="/service"
          >
            Services
          </Typography>
        </Box>
        <Box paddingBottom={1}>
          <Typography
            style={{ textDecoration: 'none' }}

            color='text.primary'
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700
            }}
            to="/career-listing"
          >
            Careers
          </Typography>
        </Box>
        <Box >
          <Typography
            style={{ textDecoration: 'none' }}
            color='text.primary'
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700
            }}
            to="/contact-page"
          >
            Contact Us
          </Typography>
        </Box>
        
        <Box>
          <NavItem title={'Traning'} items={blogPages} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
