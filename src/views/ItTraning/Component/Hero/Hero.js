/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            color="text.primary"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Achiever groups
            <br />
            
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align='justify'
          >
            Achiever groups were founded by experienced information technology
            professionals and instructors who decided to concentrate in the
            hottest and fastest growing Information Technology (IT) areas:
            Machine learning , Web development ,Enterprise resource planning
            (ERP), automated software testing, database administration,IOT and
            Digital marketing.
            <br />
            Our instructors also interview prospective candidates for permanent
            and consulting positions. They know first hand what skills students
            need to start a career in the IT field, pass job interviews, and
            successfully perform on the first job assignment. Our instructors
            work very hard and with a lot of personal attention to transfer that
            knowledge to each student and to keep the student well informed in
            all the latest industry developments.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
