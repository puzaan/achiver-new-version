import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DateRangeIcon from '@mui/icons-material/DateRange';
const mock = [
  {
    icon: <YouTubeIcon />,
    title: 'Take a demo class',
    subtitle:
      'We are continuously providing demo classes in the different programs so that trainers can know the way we train our freshers.',
    link: '/',
    text: 'Take a demo class',
  },
  {
    icon: <DateRangeIcon/>,
    title: 'Schedule counseling',
    subtitle:
      'If you are not clear in your interest and want to make clear in it . We are here to provide free counseling for you.',
    link: '/',
    text:'Schedule counseling'
  },
];

const AskExpert = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}  data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Involve in Our Career Accelerating programs
            </Typography>
          </Box>
          <List
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'row',
              
            }}
          >
            {mock.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <ListItemAvatar sx={{
                  width: 80,
                  height: 80
                }}>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={alpha(theme.palette.primary.light, 0.2)}
                    sx={{
                      width: 70,
                      height: 70
                    }}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                {/* <ListItemText primary={item.title} secondary={item.subtitle} /> */}
                <Typography  variant={'h6'} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant={'subtitle'} gutterBottom>
                  {item.subtitle}
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Button variant={'contained'} sx={{ marginTop: 2 }}>
                  {item.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AskExpert;
