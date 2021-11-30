import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const HowItWorks = () => {
  return (
    <Box
      width={1}
      height={1}
      data-aos={'fade-up'}
      component={Card}
    >
      <CardContent>
        <Box>
          <Box marginBottom={4}>
            
            <Typography
              variant="h4"
              align={'center'}
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
                marginTop: 1,
              }}
            >
              We are Experts in Product Development
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography align={'justify'} color="text.secondary">
                Being JavaScript development experts , we have created our own top-notch products that help us develop for the web faster so you get a better product sooner.

                Both Material UI Library and DHTMLX Javascript Framework provide easy customization and integration, unlimited extensibility, and excellent cross-platform and cross-browser compatibility.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box marginTop={4}>
                <Button
                  
                  variant={'contained'}
                  size={'large'}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Contact us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Box>
  );
};

export default HowItWorks;
