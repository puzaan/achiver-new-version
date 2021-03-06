import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Sections } from '../../components';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '590px',
    display: 'flex',
    margin: '0 auto',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItem: 'center'
    },
  },
  heroLeftSide: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 8),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2),
    },
    
  },
  heroRightSide: {
    maxWidth: '90%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px',
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    //   display: 'none'
    // },
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = props => {
  const { leftSide, rightSide, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Sections
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          {leftSide}
        </Sections>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {rightSide}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Divider /> */}
    </div>
  );
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default HeroShaped;
