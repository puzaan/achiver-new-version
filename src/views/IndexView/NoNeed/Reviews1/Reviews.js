import React from 'react';
import Slider from 'react-slick';
//import { useTheme } from '@mui/material/styles';
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

const work = [
  {
    feedback:
      'I thoroughly enjoyed my internship and now have very valuable experience under my belt.I feel that quality internships are essential to develop key skills that we cant get in a classroom.While doing internship i learned more reactjs with backend implemented in Node.js and Mongoose as database, hosted on AWS.',
    name: 'Pujan Shrestha',
    title: 'Internship',
    avatar: 'https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/37826198_896984040499648_1039026269066362880_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=M2PlIeTdlAEAX8LI6x3&tn=4lhKYNqMnaIBdt2-&_nc_ht=scontent.fbhr1-1.fna&oh=9495f3258d37633394c1e18f4c2794a1&oe=6196FBAF',
  },
  {
    feedback:
      'As consulting-led partners, we audited, re-designed and engineered a highly secure and gated ordering portal for Coloron’s customers to place, manage & track orders, while also managing their accounts, ledgers, order history, documents, compliances and other artifacts related to pharmaceutical components.r',
    name: 'Rupak Thapa Magar',
    title: 'MERN Developer',
    avatar: '',
  },
  {
    feedback:
      'The best part of Achiever is that it has provide some extra classes to make base strong for the course which I have taken. Teachers are very helpful and friendly with the students and are also flexible with your timing. Teachers has the best technique to teach you. You can enroll in different programs like developers meet up and make yourself prepare for the placement by building networks.',
    name: 'Sarala Khadka',
    title: 'React Developer',
    avatar: '',
  },
];

export const clientReview = [
  {
    name: '',
    review: 'We at Achievers have a really relaxed but professional environment. We worked together as a family and team members. They not only showed their commitment and hard work in our project but also helped us take care of some points that got missed by us and did not belong to their scope. I’m very happy to have been associated with them.'
  },
  {
    name: '',
    review: 'Achievers is a great place to work driven by passion to create and deliver new ideas that are reflected in their work. Our relationship has been really productive and we have collectively been able to achieve great results. And they treated each of their customers with delicate care making them an excellent management team to work with.'
  },
  {
    name: '',
    review: 'Its always great to work with a professional and committed company. Achievers has been a software company that understands the importance of supporting and investing in their people. Our work relation has been productive So, I truly enjoyed my working with them and therefore have highest regards for this team and would highly recommend them.'
  },
  {
    name: '',
    review: 'Achievers is a great place which impacted my learning experience for good. I am grateful to be a part of this profoundly experienced team where I shared my thoughts with the open management team and passionate colleagues. What I really liked about Achievers is the specific hosting platform that they use making it unique than any other software companies.'
  },
  {
    name: '',
    review: 'I find myself very lucky to have been part of this amazing team who share their experience and work together in the spirit of mutual benefit. The best part that I found while working here was the work life balance providing me with various opportunities and care that they put into every request that I had made. We look forward to working with them as we grow.'
  },
];

const Reviews = () => {
  //const theme = useTheme();
  const theme = useTheme();
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const sliderOpts2 = {
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
      <Grid item xs={12} sm={12} md={6}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography align={'center'} variant={'h3'}>
            Our success Story

          </Typography>

          <Box maxWidth={800} width={1}>
            <Slider {...sliderOpts}>
              {work.map((item, i) => (
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
                        {item.feedback}
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
      <Grid item xs={12} sm={12} md={6}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography align={'center'} variant={'h3'}>
            Client Review

          </Typography>

          <Box maxWidth={800} width={1}>
            <Slider {...sliderOpts2}>
              {clientReview.map((item, i) => (
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

export default Reviews;
