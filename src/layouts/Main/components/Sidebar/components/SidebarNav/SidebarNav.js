import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import CourseItem from './components/CourseItem';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { services, career } from '../../../../../navigation';
import { Course } from '../../../../../../views/CourseDetails/data';
const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;


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
        <Box>
          <Typography
            style={{ textDecoration: 'none' }}
            color="text.primary"
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700,
            }}
            to="/about"
          >
            About Us
          </Typography>
        </Box>
        {/* <Box>
          <NavItem title={'About'} items={about} />
        </Box> */}
        <Box>
          <NavItem title={'Services'} items={services} />
        </Box>
        <Box>
          <NavItem title={'Career'} items={career} />
        </Box>
        <Box>
          <CourseItem title={'Traning'} items={Course} />
        </Box>
        <Box>
          <Typography
            style={{ textDecoration: 'none' }}
            color="text.primary"
            component={NavLink}
            activeStyle={{
              color: 'text.primary',
              fontWeight: 700,
            }}
            to="/contact-page"
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
