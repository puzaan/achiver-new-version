import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppWork } from 'views/Store/AllData';

const Folio = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'} marginBottom={2}>
        <Typography
          variant="h4"
          component={'h3'}
          sx={{
            fontWeight: 700,
          }}>
          Custom Mobile Applications We Have Created
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {AppWork.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={item.image}
                alt="..."
                effect="blur"
                minHeight={{ xs: 400, md: 600 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
                }}
              >
                <Typography
                  variant={'h4'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                  gutterBottom
                >
                  {item.description}
                </Typography>
                <Button
                  size={'large'}
                  variant={'contained'}
                  color={'secondary'}
                >
                  Read more
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folio;
