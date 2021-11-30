import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { webWorks } from 'views/Store/AllData';

const PageReferences = () => {
  const theme = useTheme();
  return (
    <Box>

      <Box
        sx={{
          marginBottom: 4,
          paddingBottom: 4,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Box marginBottom={4}>
          <Typography variant={'h4'} gutterBottom align={'center'}>
            Custom Web Applications We Have Created
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {webWorks.map((p, j) => (
            <Grid
              key={j}
              item
              xs={12}
              sm={6}
              md={4}
              component={'a'}
              href={p.href}
              sx={{ textDecoration: 'none !important' }}
              data-aos={'fade-up'}
              data-aos-delay={(j) * 200}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                padding={1}
                bgcolor={'background.paper'}
                borderRadius={2}
                overflow={'hidden'}
                boxShadow={3}
                marginBottom={2}
              >
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src={theme.palette.mode === 'dark' ? p.coverDark : p.cover}
                  alt={p.title}
                  height={1}
                  width={1}
                  sx={{
                    transition: 'opacity, transform ease 0.3s !important',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              </Box>
              <Box display={'flex'} justifyContent={'center'}>
                <Typography
                  variant={'subtitle1'}
                  fontWeight={700}
                  color={'text.primary'}
                >
                  {p.title}
                </Typography>
                {p.description ? (
                  <Typography
                    variant={'subtitle1'}
                    color={'text.primary'}
                    sx={{ marginLeft: 0.5 }}
                  >
                    ({p.description})
                  </Typography>
                ) : null}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>



      <Box marginTop={4}>
        <Typography
          variant={'h6'}
          component={'p'}
          gutterBottom
          align={'center'}
        >
          ...and more soon.
        </Typography>

      </Box>
    </Box>
  );
};

export default PageReferences;
