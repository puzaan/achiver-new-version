import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Button, Grid, Typography } from '@mui/material';
import { SectionHeader, TypedText, HeroShaped } from '../../components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha,useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
    },
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
        alignItem: 'center'
      },
    },
  },
  imageAnimation: {
    background: `url(${'https://cdn.discordapp.com/attachments/879992345968377866/908624956030599188/Achiever_Website_Scrolling.png'})`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '200px auto',
    animation: '$slideshow 50s linear infinite',
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    // top: '30%',
    // left: '50%',
    top: '-25%',
    left: '-200%',
    right:'-40%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    },
  },
  imageAnimationDark: {
    background: `url(${'https://cdn.discordapp.com/attachments/879992345968377866/908624965463601152/Achiever_Website_Scrolling_Dark.png'})`,
    //top: '-25%',
    left: '-85%',
    //right: '-10%',
    // width: '600%',
    // height: '600%',
    //backgroundSize: '1000px auto',
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

const Heros = ({ className, ...rest }) => {
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
        color={'secondary'}
        component={'span'}
        variant={isMd ? 'h3' : 'h4'}
        
        typedProps={{
          strings: [
            'Startup.',
            'Online course.',
            'Enhancing business|.',
            'and many more...',
          ],
          typeSpeed: 80,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = 'Helping the freshers to grow in Software industry.';

  const buyButton = (
    <Button
      component={Link}
      variant="contained"
      color="primary"
      size="large"
      fullWidth={isMd ? false : true}
      to={'/'}
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
      
      ctaGroup={[buyButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <Grid xs={12}>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              1,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'scroll',
            position: 'relative',
            animation: '$slideshow 50s linear infinite',
          }}
        >
          <HeroShaped
            className={classes.heroShaped}
            leftSide={leftSideContent}
            rightSide={
              <div
                className={clsx(
                  classes.imageAnimation,
                  theme.palette.mode === 'dark' ? classes.imageAnimationDark : '',
                )}
              />
            }
          />
        </Box>
      </Grid>
      
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
