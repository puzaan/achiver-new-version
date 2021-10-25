import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export const response = [
  {
    name: 'Bidur parajuli',
    enroll: 'React',
    review: 'Currently, I enroll in Advanced react with modern react course in Achiever groups . The way of learning process is so   benefitted . Specially  access of LMS  credentials  help us to much for submitting assignment, recording video of of classes, discussion forum where we all participants can discuss about any course content. And after completion of course internship and job opportunities  from Achiever groups. Achiever groups is a good platform to build our professional career. '
  },
  {
    name: 'Pradip Paudel',
    enroll: 'React',
    review: 'Awesome, we  are gaining deep knowledge  in JavaScript and hope we will get more then this on React also. The very best part of this group is the way and technique of teaching as well as this LMS software which is using by this group is also very good and another best part is this group is developing the community of all students and developer of this institute which will be so helpful in future also.'
  },
  {
    name: 'Bidur parajuli',
    enroll: 'React',
    review: 'Currently, I enroll in Advanced react with modern react course in Achiever groups . The way of learning process is so   benefitted . Specially  access of LMS  credentials  help us to much for submitting assignment, recording video of of classes, discussion forum where we all participants can discuss about any course content. And after completion of course internship and job opportunities  from Achiever groups. Achiever groups is a good platform to build our professional career. '
  },
  {
    name: 'Sujan chhengutala',
    enroll: 'React',
    review: 'Definitely one of the best programming courses. Challenging yet beginner friendly. Instructor explains every concept with passion and care. The assignments are difficult and interesting and more importantly, the assignment teaches the core of programming. I havent finished so far, but I cant wait to give it a 5-star review. I really appreciate Achiver groups putting this course online. This course makes the world a better place!'
  },
  {
    name: 'Raj Chaulagain',
    enroll: 'Flutter',
    review: 'Achiever has implemented assignment and project led teaching-learning approach, which has personally helped me to learn new things fast. Teachers are supportive and friendly which made the experience here more enhancd. I must say that i am really impressed with how well integrated LMS is.'
  },
  {
    name: 'Piyush Yadav',
    enroll: 'Flutter',
    review: 'I got enrolled in flutter development class and had an amazing experience through the teaching faculty.'
  },
  {
    name: 'Salin Thapa',
    enroll: 'Flutter',
    review: 'The flutter classes are very useful and interesting. Our flutter sir is also very helpful friendly and is always ready to help.'
  },
  {
    name: 'Kunjan Rajbhandari',
    enroll: 'Flutter',
    review: 'I have been studying in Achiever Group two months. Achiever Group is a great experience for me. All teachers and staff are professional, helpful, kind and friendly. I am lucky to be in Achiever Group. If you think to learn Flutter-Complete Application Development you should come Achiever Group.'
  },
  {
    name: 'Santosh Nepal',
    enroll: 'React',
    review: 'Contact information and location of the institute can be provided in the site,Some word from  Alumnus should be added to the site and some words from the company head where the Alumnus work can also be added.'
  }
];
const StudentReviews = () => {
  const theme = useTheme();
  const sliderOpts3 = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={isMd ? 5 : 2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography align={'center'} variant={'h3'}>
            Our success Story

          </Typography>

          <Box maxWidth={1000} width={1}>
            <Slider {...sliderOpts3}>
              {response.map((item, i) => (
                <Box key={i}>
                  <Box
                    width={1}
                    height={1}
                    component={Card}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    boxShadow={0}
                    sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography  variant={'h6'}>
                        {item.review}
                      </Typography>
                    </CardContent>
                    <Box flexGrow={1} />
                    <CardActions sx={{ paddingBottom: 2 }}>
                      <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                        <ListItemAvatar>
                          <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={item.name}
                          secondary={item.title}
                        />
                      </ListItem>
                    </CardActions>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Grid>
      
    </Grid>
    
  );
};

export default StudentReviews;
