import { makeStyles } from '@mui/styles';
import React from 'react';
import Main from 'layouts/Main';
import './form.css';

const useStyles = makeStyles(() => ({
  formContainer: {
    position: 'relative',
    width: '100 %',
    height: '2500',
    overflow: 'hidden',
    paddingTop: '2040px',
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  responsive: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '2359',
    border: 'none',
    
  }
}));

const EnrollForm = () => {
  const classes = useStyles();

  return (
    <Main>
      {/* <Helmet>
        <title>Enrollment Form</title>
        <meta
          name="description"
          content="Achievers Groups Research and Traning center"
        />
      </Helmet> */}

      <div className={classes.formContainer}>
        <p align="center">
          <iframe
            className={classes.responsive}
            src="https://docs.google.com/forms/d/e/1FAIpQLSehTLqktyBG0k413051ktf_mdWAM4ckYX-4WBjro2ergczRgg/viewform?embedded=true"
            width="1000"
            height="2359"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
          >
            Loading…
          </iframe>
        </p>
      </div>
    </Main>
  );
};

export default EnrollForm;
