import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'IOS APP DEVELOPMENT',
    description:
      'Our IOS Apps are built to increase user base, revenues, maximize brand reach, enhance employee productivity, or increase conversion rates.Whether you have an idea, or a running business or you are an enterprise, we build IOS applications that can solve real business problems.',
    illustration:
      '/iso.png',
    illustrationDark:
      '/iso.png',
  },
  {
    title: 'ANDROID APP DEVELOPMENT',
    description:
      'we build custom android apps to take advantage of various characteristics of Android OS that makes it the most preferred mobile OS - that run flawlessly across all Android Devices. Flexible pricing options and FTE rates, dynamic app development process for complete client satisfaction Professional Android developers.',
    illustration:
      '/android.png',
    illustrationDark:
      '/android.png',
  },
  
];

const Work = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          Top Mobile App Development Solution Provider
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          Achieversgrops creates native, hybrid mobile apps for businesses with complex goals and challenges - across platforms and devices. Our mobile interfaces are focused to portray a visual language to your customers, synthesizing the classic principles of good design with technology.
        </Typography>
        
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
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
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
                <Typography color="text.secondary" align='justify'>
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

export default Work;
