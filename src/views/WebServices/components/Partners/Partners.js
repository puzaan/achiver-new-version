import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { tools } from 'views/Store/AllData';

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Web Development Technologies We Use
        </Typography>
        <Typography
          variant={'subtitle1'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          We select the most appropriate programming languages and frameworks to match your needs.
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {tools.map((item, i) => (
          <Box maxWidth={100} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height= '10 px'
              width= '100%'
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
