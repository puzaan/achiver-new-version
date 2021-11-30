
// const syllabusDetails = [
//   {
//     title: 'JavaScript Concepts Before Learning React',
//     topics: [
//       {
//         topicName: 'Modern JS Operator',
//         day: 'Day 1',
//         description: 'Destructuring, Spread Operator & Rest Pattern and Parameters, Short Circuiting, The Nullish Coalescing Operator, Optional Chaining & Manipulating strings in JavaScript'
//       },
//       {
//         topicName: 'Advanced Array & Function Concepts in JS',
//         day: 'Day 2',
//         description: 'Higher Order Functions & Callback Function, forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
//       },
//       {
//         topicName: 'Advanced Array & Function Concepts in JS',
//         day: 'Day 3, Day 4 & Day 5',
//         description: 'CallbackHell, Promises, Event Loop, async await, Parallel Promises & Promise Combinators'
//       },
//       {
//         topicName: 'Modern JS & Functional Programming',
//         day: 'Day 6 & Day 7',
//         description: 'ES6 Modules, Module Pattern, CommonJS Modules, NPM, Parcel, Babel, Polyfilling & Declarative with Functional JS Principles'
//       },
//     ]
//   },
//   {
//     title: 'Basic React',
//     topics: [
//       {
//         topicName: 'Basic JavaScript-rendered Hello World',
//         day: 'day 8',
//         description: 'nteracting with DOM nodes using JavaScript'
//       },
//       {
//         topicName: 'Advanced Array & Function Concepts in JS',
//         day: 'day2',
//         description: 'Higher Order Functions & Callback Function, forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
//       },
//       {
//         topicName: 'Advanced Array & Function Concepts in JS',
//         day: 'Day 9',
//         description: 'Using React in single .html file without JSX'
//       },
//       {
//         topicName: 'Using JSX',
//         day: 'Day 10',
//         description: 'Using JSX with React in single .html file'
//       },
//       {
//         topicName: 'Creating custom components',
//         day: 'day 11',
//         description: 'Writing custom React components'
//       },
//       {
//         topicName: 'Styling in React',
//         day: 'day 12',
//         description: 'Methods for styling react components.'
//       },
//       {
//         topicName: 'Forms in React',
//         day: 'Day 3',
//         description: 'Forms in React beyond DOM APIs'
//       },
//       {
//         topicName: 'Rendering Arrays',
//         day: 'Day 14',
//         description: 'Render a list of elements in React'
//       },
//     ]
//   },
//   {
//     title: 'Intermediate React',
//     topics: [
//       {
//         topicName: 'useState Hook',
//         day: 'Day 15',
//         description: 'State in react using useState hook'
//       },
//       {
//         topicName: 'useEffect: persistent state',
//         day: 'Day 16',
//         description: 'Built in hook for React renders (and re-renders), forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
//       },
//       {
//         topicName: 'Lifting state',
//         day: 'Day 17',
//         description: 'shaing state between two sibling components'
//       },
//       {
//         topicName: 'useRef and useEffect: DOM interaction',
//         day: 'Day 18',
//         description: 'Integrating React with UI libraries'
//       },
      
//     ]
//   },
//   {
//     title: 'Advanced React',
//     topics: [
//       {
//         topicName: 'useReducer Hook',
//         day: 'Day 19',
//         description: 'Interacting with DOM nodes using JavaScript'
//       },
//       {
//         topicName: 'useCallback Hook',
//         day: 'Day 20',
//         description: 'Using React in single .html file without JSX'
//       },
//       {
//         topicName: 'useContext Hook',
//         day: 'Day 21',
//         description: 'Real world project with React Hooks'
//       },
//       {
//         topicName: 'useImperativeHandle Hook',
//         day: 'Day 22',
//         description: 'Debuggine with useDebug value'
//       },
//       {
//         topicName: 'useDebugValue Hook',
//         day: 'Day 22',
//         description: 'Debuggine with useDebug value'
//       },

//     ]
//   },
//   {
//     title: 'Real World React Patterns',
//     topics: [
//       {
//         topicName: 'Context Module Functions',
//         day: 'Day 23',
//         description: 'Advanced state management with useReducer Hook'
//       },
//       {
//         topicName: 'Compound Components',
//         day: 'Day 24',
//         description: 'Memoization in React'
//       },
//       {
//         topicName: 'Flexible Compound Components',
//         day: 'Day 25',
//         description: 'Sharing state between components'
//       },
//       {
//         topicName: 'Prop Collections and Getters',
//         day: 'Day 26',
//         description: 'Using useLayoutEffect instead of useEffect'
//       },
//       {
//         topicName: 'State Reducer',
//         day: 'Day 27',
//         description: 'Real world project with React Hooks'
//       },
//       {
//         topicName: 'Control Props',
//         day: 'Day 28',
//         description: 'Advanced state management with useReducer Hook'
//       },


//     ]
//   },
//   {
//     title: 'Most Popular Libraries with React',
//     topics: [
//       {
//         topicName: 'React Router',
//         day: 'Day 29',
//         description: 'Standard library for routing in React'
//       },
//       {
//         topicName: 'Redux',
//         day: 'Day 30 & 31',
//         description: 'Centralizing complex application state in React'
//       },
      
//     ]
//   },
// ];



import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from 'components/Container';
import { syllabusDetails } from 'views/Store/AllData';


const Syllabus = () => {
  //const [syllabusName, setSyllabusName] = React.useState(notFond);


  const theme = useTheme();
  return (
    <Box bgcolor='alternate.main'>
      <Container maxWidth={900} sx={{ padding: 0}}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            // padding: 2,
            borderRadius: 2,
            boxShadow: 2,
            marginTop: -10.5
          }}
        >
          {syllabusDetails.map((item, i) => (
            <Grid sx={{ alignItems: 'unset', padding: 2 }} key={i}>
              <Box>
                <Typography
                  variant='h4'
                  color='primary'
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
                {item.topics.map((topic, j) => (
                  <ListItem sx={{ alignItems: 'unset' }} key={j}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                    >
                      <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <Box
                          component={Avatar}
                          width={50}
                          height={50}
                          marginBottom={2}
                          bgcolor={theme.palette.primary.main}
                          color={theme.palette.background.paper}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </Box>
                      </ListItemIcon>
                      <Box
                        display={i === topic.length - 1 ? 'none' : 'flex'}
                        flex={'1 1 0%'}
                        borderRight={`1px solid ${theme.palette.divider}`}
                      />
                    </Box>
                    <Box marginLeft={2}>
                      <ListItemText
                        primary={topic.topicName}
                        secondary={topic.day}
                        primaryTypographyProps={{ fontWeight: 700 }}
                        secondaryTypographyProps={{
                          fontWeight: 600,
                          color: 'primary',
                        }}
                      />
                      <Box marginTop={2}>
                        <Typography variant={'subtitle2'}>
                          {topic.description}
                        </Typography>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </Box>
            </Grid>
          ))}
        </List>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          sx={{ pt: 2 }}
        >
          <Button
            component={Link}
            to={'/'}
            size='large'
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
            variant='outlined'
          >
            Go Home
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default Syllabus;
