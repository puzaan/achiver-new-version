/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';
import { FaBrain} from 'react-icons/fa';
//import GrPersonalComputer from 'react-icons/fa/GrPersonalComputer';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
export const process = [
  {
    icon: <FaBrain />,
    color: colors.green[500],
    title: '1. Idea',
    description:
      'We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.',
  },
  {
    icon: <PhoneAndroidIcon />,
    color: colors.green[500],
    title: '2. Design',
    description:
      'We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it.',
  },
  {
    icon: <ImportantDevicesIcon />,
    color: colors.green[500],
    title: '3. Development',
    description:
      'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website.',
  },
  {
    icon: <SettingsIcon />,
    color: colors.green[500],
    title: '4. Launch & Maintenance',
    description:
      'When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it.',
  },
];

const Process = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Our process
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          We are a small agency of talented designers & developers. Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process.
        </Typography>
      </Box>
      {/* <Box maxWidth={800} margin={'0 auto'}>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} md ={6} key={i}>
              <Box
                component={Card}
                variant={'outlined'}
                bgcolor={'transparent'}
                sx={{
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    flex={'1 1 100%'}
                    justifyContent={{ sm: 'space-between' }}
                    alignItems={{ sm: 'center' }}
                  >
                    <Typography
                      variant={'h6'}
                      fontWeight={700}
                      sx={{ marginBottom: { xs: 1, sm: 0 } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant={'subtitle1'} color={'text.secondary'}>
                      {`${item.location} / ${item.type}`}
                    </Typography>
                  </Box>
                  <Box marginLeft={2} color={'primary.main'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={{ xs: 30, sm: 40 }}
                      height={{ xs: 30, sm: 40 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Box
        maxWidth={700} margin={'0 auto'}
      >
        <Grid container spacing={4}>
          {process.map((item, i) => (
            <Grid item xs={12} sm={6} md={6} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component={Card}
                  padding={2}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box display={'flex'} flexDirection={'column'}>
                    <Box
                      component={Avatar}
                      width={70}
                      height={70}
                      marginBottom={2}
                      bgcolor={alpha(item.color, 0.1)}
                      color={item.color}
                      variant={'rounded'}
                      borderRadius={2}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {/* <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'flex-end'}
                    >
                      <div style={{ flexGrow: 1 }} />
                      <Button
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
                        View Details
                      </Button>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Process;
