import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';

const mock = [
  {
    title: 'Internship programs',
    name: 'Apply',
    nav: '/internship',
    description:
      'Achiever groups provide internships with a regular guide. Mentors give you the means to have your questions asked and you have someone who can guide you in the right direction. When given the opportunity, take advantage of having a mentor and it will significantly enhance your internship experience.',
    illustration:
      'https://hennge.com/global/img/gip/illust01.svg',
    illustrationDark:
      'https://hennge.com/global/img/gip/illust01.svg',
  },
  {
    title: 'Scholarship programs',
    name: 'Apply',
    nav: '/scholarship',
    description:
      'This is to notify all the students of any backgrounds who are keen and determined learners in the IT field that Achiever groups, a Software company is  regulaconducting a scholarship program for all those exceptional and deserving students and especially those students who are unable to continue the course of IT due to financial difficulties. We as achievers are ready to lend a helping hand to all those students to move forward to build their career in the field of IT.',
    illustration:
      'https://cdn-bgljf.nitrocdn.com/ZvMQLzpwWsXzujzeTMoDMvVsgAMkaTAe/assets/static/optimized/rev-8c31446/wp-content/uploads/2020/svg/SEOReseller-White-Label-SEO-Scholarship-min%201.svg',
    illustrationDark:
      'https://cdn-bgljf.nitrocdn.com/ZvMQLzpwWsXzujzeTMoDMvVsgAMkaTAe/assets/static/optimized/rev-8c31446/wp-content/uploads/2020/svg/SEOReseller-White-Label-SEO-Scholarship-min%201.svg',
  },

];

const AchieverAcademy = () => {
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
          AchieverAcademy
        </Typography>
        {/* <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          Unlike teams from big agencies, we will treat your project as ours. We
          will walk you through our smooth and simple process.
        </Typography> */}
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
        <Grid
          data-aos="fade-up"
          data-aos-delay={1 * 100}
          data-aos-offset={100}
          data-aos-duration={600}
          item
          container
          xs={12}
          spacing={4}
          direction='row-reverse'
        >
          <Grid item container alignItems={'center'} xs={12} sm={6}>
            <Box>
              <Typography
                variant={'h6'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Professional Courses
              </Typography>
              <Typography color="text.secondary">
                Taking up a professional course is important to improve your performance in a given career. In order to acquire more advanced and better skills, many people today go for these professional courses. It further gives you confidence along with basic information. Professional courses offer a large array of benefits, that is why it is highly recommended to enroll in such courses.
              </Typography>
              <Link to='course01' smooth={true} duration={1000}>

                <Button
                  
                  size={'large'}
                  sx={{ marginTop: 2 }}
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
                  See Courses
                </Button>
              </Link>
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
              src={`${theme.palette.mode === 'light'
                ? 'https://purpletutor.com/wp-content/uploads/2020/12/purple-tutor11.svg'
                : 'https://purpletutor.com/wp-content/uploads/2020/12/purple-tutor11.svg'
              }`}
              alt='Professional Course'
              width={1}
              maxWidth={'80%'}
            />
          </Grid>
        </Grid>
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
                <Button
                  size={'large'}
                  sx={{ marginTop: 2 }}
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
                  Apply
                </Button>
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
                src={`${theme.palette.mode === 'light'
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

export default AchieverAcademy;
