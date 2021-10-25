/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const list = [
    'Improved Scalability',
    'Better Fault Isolation for More Resilient',
    'Application',
    'Free form Programming Language and Technology Anostic',
    'Better Data Security and Compliance',
    'Future-Proofing',
    'Greter Business Agility and Support for DevOps',
    'Support'
  ];

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={12}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              About our company
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Achiever Group is a full-stack technology services company focused on product engineering, data engineering, IoT, blockchain and AI. Hire us to scale your technology innovation.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our Vision
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Most startups to enterprises who work on software have a huge traditional approach focused on developers i.e cater to developers over any staff by promising large salaries or even with equity share option with room for growth, bonus packages, interesting work and accommodations during moves. Their offices are filled with perks like vending machines, video games, free organic juices, pool tables and even hot tubs in some cases. companies cater to developers in a belief that by having the best talent on board, the best overall products will be created with overall growth resulting from this.
              <br />
              <br />
              They also try to do everything possible to prevent developers from being swooned by other companies, poached or leaving due to other reasons, such as forming their own startups However, they are often not in a position to focus entirely on them as they still have products to sell that need to be marketed, advertised and showcased We envision a future where startups, big companies and enterprises have a developer focused platform of their own.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our Mission
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              To provide developer focussed platforms and tools
              that fits all business domain. Our primary focus is
              on developing and enhanching our own inbuilt
              microservices framework that can be integrated
              to develop any kind of scalable applications.
              Our key values for application are:
            </Typography>
            <List>
              {list.map((item, index) => (

                <ListItem disableGutters key={index} data-aos="fade-up">
                  <ListItemAvatar>
                    <FiberManualRecordIcon fontSize='small' />
                  </ListItemAvatar>

                  <Typography
                    variant="body1"
                    color="textwhite"

                  >
                    {item}                 </Typography>

                </ListItem>

              ))}

            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;