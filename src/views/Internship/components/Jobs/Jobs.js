import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Internship } from 'views/Store/AllData';
//import { Link } from 'react-router-dom';

const Jobs = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Internship Programms
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        {Internship.map((item, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={2} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.jobTitle}
                  </Typography>
                </Box>
              </Box>
              <Box marginLeft={2}>
                <Button
                  component={'a'}
                  variant="outlined"
                  color="primary"
                  size="small"
                  href={'https://l5blrp4knzx.typeform.com/to/m2FHRbTp'}
                  target='_blank'
                  rel='noreferrer'
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={12}
                      height={12}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  }
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
