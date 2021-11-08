import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import { SectionHeader, TypedText, HeroShaped } from '../../components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  fontWeight400: {
    fontWeight: 400,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url(${'https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-light.png'})`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: '$slideshow 50s linear infinite',
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
      
    }
  },
  imageAnimationDark: {
    background: `url(${'https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png'})`,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Heros = ({  className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = (
    <Typography
      variant="h2"
      color="text.primary"
      gutterBottom
      sx={{
        fontWeight: 500,
      }}
    >
      Software company and Software Training partner .
      <br />
      <TypedText
        component="span"
        variant={isMd ? 'h3' : 'h4'}
        color="secondary"
        className={classes.fontWeight400}
        typedProps={{
          strings: ['Startup.', 'Online course.', 'Enhancing business|.', 'and many more...'],
          typeSpeed: 80,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = 'Helping the freshers to grow in Software industry.';

  const buyButton = (
    <Button
      component={'a'}
      variant="contained"
      color="primary"
      size="large"
      fullWidth={isMd ? false : true}
      href={'/'}
    >
      Read More
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[
        buyButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={(
          <div
            className={clsx(
              classes.imageAnimation,
              theme.palette.mode === 'dark' ? classes.imageAnimationDark: '',
            )}
          />
        )}
      />
    </div>
  );
};

Heros.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Heros;
