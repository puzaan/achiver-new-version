import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'UI/UX Designer',
    name: 'Apply',
    nav: '/internship',
    description:
      'The primary goal of any business is to increase its sales and increase the growth of the business. UX/UI Design plays an essential role in achieving this goal. The UX/UI Design of the application improves the user experience and customer satisfaction that ultimately helps increase the number of users of the specific application.Well, Coming up with an efficient Ul/UX design for an app is always a priority for most app owners. This requires thorough research and prior planning in order to understand the needs of your users and the problem you intend to solve with your app. Regardless of your needs, you will have to come up with a design that works. Here at achievers groups, we help to make your UI/UX perfect.',
    illustration:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-mobile-app-development.webp',
    illustrationDark:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-mobile-app-development.webp',
  },
  {
    title: 'Web  Developer',
    name: 'Apply',
    nav: '/scholarship',
    description:
      'The web allows businesses to be accessible at any time of the day. It provides space for everyone to access the information they need when they need it. When you make your website accessible, you are also providing equal opportunities for people with disabilities to use your website and engage with your business which means that your website can be used by anyone and everyone. Whenever customers need to know something about the business, having a contact form, a live chat, an option to comment, or a phone number is a step towards them, which increases the possibility of sealing the deal. We are one of the best web development companies in the town with a variety of options for customers.',
    illustration:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-services-web-development.webp',
    illustrationDark:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-services-web-development.webp',
  },
  {
    title: 'App Developer',
    name: 'Apply',
    nav: '/scholarship',
    description:
      'A mobile app can make purchasing things easier for a customer, with secure payment portals and user-friendly functions. Thus, it guarantees a customer-friendly experience. It’s also advantageous to business owners by providing a cheaper option of marketing and advertising their brand. Mobile use has become an integral part of our everyday life. On average people spend almost 5hours of their day on smartphones, a majority of which is spent on apps. As such, apps play an essential role in the growth of a business. Below are some of the ways a mobile app can benefit your business.',
    illustration:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-services-ui-ux-design.webp',
    illustrationDark:
      'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-services-ui-ux-design.webp',
  },
];

const Services = () => {
  const theme = useTheme();
  
  
  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Our work
        </Typography> */}
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          Web and Mobile Software Development Services
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          A successful AchieversGroups software application development company,
          providing a full range of website and mobile app development,and other IT services and solutions globally.
        </Typography>
        {/* <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            color={'primary'}
            variant={'contained'}
            size={'large'}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Contact us
          </Button>
        </Box> */}
      </Box>
      <Grid container spacing={4}>
        
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 0 ? 'row' : 'row-reverse'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
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
                
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src={`${
                  theme.palette.mode === 'light'
                    ? item.illustration
                    : item.illustrationDark
                }`}
                alt={item.title}
                width={1}
                maxWidth={'80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
