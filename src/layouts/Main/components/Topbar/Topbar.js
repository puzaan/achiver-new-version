import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { NavItem } from './components';
import { Typography } from '@mui/material';
import { ThemeModeToggler } from 'layouts/Fixed/components/Topbar/components';
import { Course } from '../../../../views/CourseDetails/data';
import { about, services, career } from '../../../navigation';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;


  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Achieversgroup"
        width={{ xs: 150, md: 160 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/Achiever_Groups_DARK.png'
              : '/Achiever_Groups_LIGHT.png'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem
            title={'About'}
            id={'About-pages'}
            items={about}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Services'}
            id={'Services-pages'}
            items={services}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Career'}
            id={'Career-pages'}
            items={career}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Traning'}
            id={'traning-pages'}
            items={Course}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Typography
            style={{ textDecoration: 'none' }}
            color={linkColor}
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
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
