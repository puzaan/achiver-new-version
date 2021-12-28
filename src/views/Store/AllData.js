import { React } from 'react';
import { colors } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
//import AppleIcon from '@mui/icons-material/Apple';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AodIcon from '@mui/icons-material/Aod';
import ComputerIcon from '@mui/icons-material/Computer';
export const Course = [
  {
    id: 'React',
    title: 'React JS',
    logo: '/react.png',
    shortDes: [
      'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.'
    ],
    color: colors.green[200],
    link: '/course-detail',
    syllabus: [
      {
        title: 'JavaScript Concepts Before Learning React',
        topics: [
          {
            topicName: 'Modern JS Operator',
            day: 'Day 1',
            description: 'Destructuring, Spread Operator & Rest Pattern and Parameters, Short Circuiting, The Nullish Coalescing Operator, Optional Chaining & Manipulating strings in JavaScript'
          },
          {
            topicName: 'Advanced Array & Function Concepts in JS',
            day: 'Day 2',
            description: 'Higher Order Functions & Callback Function, forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
          },
          {
            topicName: 'Advanced Array & Function Concepts in JS',
            day: 'Day 3, Day 4 & Day 5',
            description: 'CallbackHell, Promises, Event Loop, async await, Parallel Promises & Promise Combinators'
          },
          {
            topicName: 'Modern JS & Functional Programming',
            day: 'Day 6 ',
            description: 'ES6 Modules, Module Pattern, CommonJS Modules, NPM, Parcel, Babel, Polyfilling & Declarative with Functional JS Principles'
          },
        ]
      },
      {
        title: 'Basic React',
        topics: [
          {
            topicName: 'Basic JavaScript-rendered Hello World',
            day: 'Day 7',
            description: 'Interacting with DOM nodes using JavaScript'
          },
          {
            topicName: 'Advanced Array & Function Concepts in JS',
            day: 'Day 8',
            description: 'Higher Order Functions & Callback Function, forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
          },
          {
            topicName: 'Advanced Array & Function Concepts in JS',
            day: 'Day 9',
            description: 'Using React in single .html file without JSX'
          },
          {
            topicName: 'Using JSX',
            day: 'Day 10',
            description: 'Using JSX with React in single .html file'
          },
          {
            topicName: 'Creating custom components',
            day: 'day 11',
            description: 'Writing custom React components'
          },
          {
            topicName: 'Styling in React',
            day: 'day 12',
            description: 'Methods for styling react components.'
          },
          {
            topicName: 'Forms in React',
            day: 'Day 3',
            description: 'Forms in React beyond DOM APIs'
          },
          {
            topicName: 'Rendering Arrays',
            day: 'Day 14',
            description: 'Render a list of elements in React'
          },
        ]
      },
      {
        title: 'Intermediate React',
        topics: [
          {
            topicName: 'useState Hook',
            day: 'Day 15',
            description: 'State in react using useState hook'
          },
          {
            topicName: 'useEffect: persistent state',
            day: 'Day 16',
            description: 'Built in hook for React renders (and re-renders), forEach, map, filter, reduce, find, findIndex, flat and flatMap methods'
          },
          {
            topicName: 'Lifting state',
            day: 'Day 17',
            description: 'shaing state between two sibling components'
          },
          {
            topicName: 'useRef and useEffect: DOM interaction',
            day: 'Day 18',
            description: 'Integrating React with UI libraries'
          },

        ]
      },
      {
        title: 'Advanced React',
        topics: [
          {
            topicName: 'useReducer Hook',
            day: 'Day 19',
            description: 'Interacting with DOM nodes using JavaScript'
          },
          {
            topicName: 'useCallback Hook',
            day: 'Day 20',
            description: 'Using React in single .html file without JSX'
          },
          {
            topicName: 'useContext Hook',
            day: 'Day 21',
            description: 'Real world project with React Hooks'
          },
          {
            topicName: 'useImperativeHandle Hook',
            day: 'Day 22',
            description: 'Debuggine with useDebug value'
          },
          {
            topicName: 'useDebugValue Hook',
            day: 'Day 22',
            description: 'Debuggine with useDebug value'
          },

        ]
      },
      {
        title: 'Real World React Patterns',
        topics: [
          {
            topicName: 'Context Module Functions',
            day: 'Day 23',
            description: 'Advanced state management with useReducer Hook'
          },
          {
            topicName: 'Compound Components',
            day: 'Day 24',
            description: 'Memoization in React'
          },
          {
            topicName: 'Flexible Compound Components',
            day: 'Day 25',
            description: 'Sharing state between components'
          },
          {
            topicName: 'Prop Collections and Getters',
            day: 'Day 26',
            description: 'Using useLayoutEffect instead of useEffect'
          },
          {
            topicName: 'State Reducer',
            day: 'Day 27',
            description: 'Real world project with React Hooks'
          },
          {
            topicName: 'Control Props',
            day: 'Day 28',
            description: 'Advanced state management with useReducer Hook'
          },


        ]
      },
      {
        title: 'Most Popular Libraries with React',
        topics: [
          {
            topicName: 'React Router',
            day: 'Day 29',
            description: 'Standard library for routing in React'
          },
          {
            topicName: 'Redux',
            day: 'Day 30 & 31',
            description: 'Centralizing complex application state in React'
          },

        ]
      },
    ]
  },
  {
    id: 'MERN',
    title: 'Full Stack Development with MERN ',
    logo: '/javascript.png',
    shortDes: [
      'MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.'
    ],
    color: colors.green[200],
    syllabus: [
      {
        title: ' NODEJS Fundamental ',
        topics: [
          {
            topicName: 'JS Runtime & Rise of Node.js in 2009 ',
            day: null,
            description: null
          },
          {
            topicName: ' Setting up Environment: Node.js REPL ',
            day: null,
            description: null
          },
          {
            topicName: ' Node.js VS JavaScript / BackEnd VS FrontEnd',
            day: null,
            description: null
          },
          {
            topicName: 'Synchronous vs Asynchronous',
            day: null,
            description: null
          },
          {
            topicName: 'The Event Loop',
            day: null,
            description: null
          },
          {
            topicName: 'Node.js Module System',
            day: null,
            description: null
          },
          {
            topicName: 'Node.js Package Management',
            day: null,
            description: null
          },
          {
            topicName: 'Practice Prject',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Web Servers',
        topics: [
          {
            topicName: 'HTTP Responses and Requests ',
            day: null,
            description: null
          },
          {
            topicName: 'HTTP APIs abd Routing',
            day: null,
            description: null
          },
          {
            topicName: 'Cross Origin Resource Sharing (CORS)',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Exress.js API',
        topics: [
          {
            topicName: ' Express Vs Next.js vs Koa ',
            day: null,
            description: null
          },
          {
            topicName: 'Postman and Isomnia',
            day: null,
            description: null
          },
          {
            topicName: 'Middleware',
            day: null,
            description: null
          },
          {
            topicName: 'Model View Cntroller (MVC)',
            day: null,
            description: null
          },
          {
            topicName: 'RESTfull APIs',
            day: null,
            description: null
          },
          {
            topicName: 'Create Read Update and Delete (CRUD)',
            day: null,
            description: null
          },
          {
            topicName: 'Templating Engines',
            day: null,
            description: null
          },
          {
            topicName: 'Pratical Project with REACT',
            day: null,
            description: null
          }

        ]
      },
      {
        title: 'MongoDb mongoDB Atlas Mongoose',
        topics: [
          {
            topicName: 'Database Schemas & Schemaless Database ',
            day: null,
            description: null
          },
          {
            topicName: ' Setting u MingoDB Atlas',
            day: null,
            description: null
          },
          {
            topicName: 'Mongoose',
            day: null,
            description: null
          },
          {
            topicName: 'Mongoose Models vs MVC Models',
            day: null,
            description: null
          },
          {
            topicName: 'CRUD with mongoDB Atlast',
            day: null,
            description: null
          },
          {
            topicName: 'Aggregation Pipeling',
            day: null,
            description: null
          },
          {
            topicName: 'Aggregation Middleware',
            day: null,
            description: null
          },
          {
            topicName: 'Practical project with Rest APIs',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Node Security & Authentication',
        topics: [
          {
            topicName: 'Encrypted Connections with SSL and TLS',
            day: null,
            description: null
          },
          {
            topicName: 'HTTPS With Node & Cryptography',
            day: null,
            description: null
          },
          {
            topicName: 'Authentication vs Authorization',
            day: null,
            description: null
          },
          {
            topicName: 'API Keys & JWT Tokens',
            day: null,
            description: null
          },
          {
            topicName: 'OAuth 2.0 Authorization Code Flow',
            day: null,
            description: null
          },
          {
            topicName: 'Registering with Google Authorization Seerver',
            day: null,
            description: null
          },
          {
            topicName: ' Passport.js & Dotenv',
            day: null,
            description: null
          },
          {
            topicName: 'AuthenticationWith Google And OAuth',
            day: null,
            description: null
          },
          {
            topicName: 'Cookie Based Authentication',
            day: null,
            description: null
          },
          {
            topicName: 'Sessions & Session Middleware in Express',
            day: null,
            description: null
          },
          {
            topicName: 'Restricting Access to Endpoint',
            day: null,
            description: null
          },
          {
            topicName: 'Exprimenting with fake sessions',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Continous Integration and Delivery',
        topics: [
          {
            topicName: 'Untroduction to CI and CD',
            day: null,
            description: null
          },
          {
            topicName: 'Pipelines',
            day: null,
            description: null
          },
          {
            topicName: 'GitHub Actions',
            day: null,
            description: null
          },
          {
            topicName: 'Mocking Out Database',
            day: null,
            description: null
          },
          {
            topicName: 'Databases with continuous integration',
            day: null,
            description: null
          },
          {
            topicName: ' Populating Data Fr Continous Integration',
            day: null,
            description: null
          },
          {
            topicName: 'Deploying A & Wrapping Up!',
            day: null,
            description: null
          },


          

        ]
      },
    ],
    link: '/course-detail',
    isNew: true,
  },
  {
    id: 'JavaScript',
    title: 'JavaScript',
    logo: '/javascript.png',
    shortDes: [
      'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D / 3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.It is the third layer of the layer cake of standard web technologies, two of which(HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
    ],
    syllabus: [
      {
        title: 'Basic Foundation I',
        topics: [
          {
            topicName: 'Basic Foundation I',
            day: 'Day 1',
            description: 'Concept of making variable using let and const and Various operators in JavaScript'
          },
          {
            topicName: 'Template literals & Conditional Statement',
            day: 'Day 2',
            description: 'Modern JavaScript template literals and concept of if else & switch statement'
          },
          {
            topicName: 'Expression, Type Conversion & Coercion',
            day: 'Day 3',
            description: 'Observing dynamic behaviour of JavaScript'
          },
        ]
      },
      {
        title: 'Basic Foundation II',
        topics: [
          {
            topicName: 'Concept of Function',
            day: 'Day 4',
            description: 'Function Declaration, function expression and Arrow Function'
          },
          {
            topicName: 'Concept of Array',
            day: 'Day 5',
            description: 'Concept of Array and Array methods in JavaScript'
          },
          {
            topicName: 'Concept of Object',
            day: 'Day 6',
            description: 'Object and Object methods in JavaScript'
          },
          {
            topicName: 'Concept of Iteration',
            day: 'Day 7',
            description: 'Classic loop concept in JavaScript'
          },
        ]
      },
      {
        title: 'Modern JavaScript',
        topics: [
          {
            topicName: 'Destructuring Arrays',
            day: 'Day 8',
            description: 'Unpacking array elements to separate variable'
          },
          {
            topicName: 'Destructuring Object',
            day: 'Day 9',
            description: 'Storing object properties into separate variable'

          },
          {
            topicName: 'Spread Operator',
            day: 'Day 10',
            description: 'Spreading array elements'
          },
          {
            topicName: 'Rest Pattern and Parameters',
            day: 'Day 11',
            description: 'Storing rest of the elements in an Array'
          },
          {
            topicName: 'Short Circuiting (&& and ||)',
            day: 'Day 12',
            description: 'Modern way of switching between values'
          },
          {
            topicName: 'Sets, Map & Modern JS Object Operation',
            day: 'Day 13',
            description: 'Modern JS Operators'
          },

        ]
      },
      {
        title: 'JavaScript Core',
        topics: [
          {
            topicName: 'The JavaScript Engine',
            day: 'Day 14',
            description: 'Core concept of call stack and heap in JavaScript.'
          },
          {
            topicName: 'Scope chain in JavaScript',
            day: 'Day 15',
            description: 'Know how to write efficient variable in JavaScript'
          },
          {
            topicName: 'Hoisting in JavaScript',
            day: 'Day 16',
            description: 'Weird behaviour of JavaScript'
          },
          
        ]
      },
      {
        title: 'Interacting with DOM: Painting on the Browser Screen',
        topics: [
          {
            topicName: 'DOM Nodes and Elements: Querying DOM',
            day: 'Day 17',
            description: null
          },
          {
            topicName: 'DOM Traversal and Query Methods',
            day: 'Day 18',
            description: null
          },
          {
            topicName: 'Creating & Styling & Removing DOM Elements',
            day: 'Day 19',
            description: null
          },
          {
            topicName: 'Practical Project interacting with DOM',
            day: 'Day 20 - Day 25',
            description: null
          },
          
        ]
      },
      {
        title: 'OOP in JavaScript',
        topics: [
          {
            topicName: 'Concept of Constructor Function',
            day: 'Day 26',
            description: null
          },
          {
            topicName: 'Prototype and Prototypal Inheritance',
            day: 'Day 27',
            description: null
          },
          {
            topicName: 'ES6 Classes',
            day: 'Day 28',
            description: null
          },
          {
            topicName: 'Inheritance with Construction Function and ES6 Classes',
            day: 'Day 29 - Day 31',
            description: null
          },

        ]
      },
      {
        title: 'Asynchronous JavaScript',
        topics: [
          {
            topicName: 'Callback Hell',
            day: 'Day 32',
            description: null
          },
          {
            topicName: 'Promises',
            day: 'Day 33',
            description: null
          },
          {
            topicName: 'Event Loop',
            day: 'Day 34',
            description: null
          },
          {
            topicName: 'Async Await',
            day: 'Day 35',
            description: null
          },
          {
            topicName: 'Error Handling',
            day: 'Day 36 - Day 38',
            description: null
          },

        ]
      },
      {
        title: 'Data Structure & Algorithm in JavaScript',
        topics: [
          {
            topicName: 'Big O calculation and Space Complexity',
            day: 'Day 39 - Day 40',
            description: null
          },
          {
            topicName: 'Data Structure: Array',
            day: 'Day 41 - Day 45',
            description: null
          },
          {
            topicName: 'Data Structures: Stacks + Queues',
            day: 'Day 46 - Day 47',
            description: null
          },
          {
            topicName: 'Data Structures: Tree',
            day: 'Day 50 - Day 51',
            description: null
          },
          {
            topicName: 'Data Structures: Graphs',
            day: 'Day 52 - Day 53',
            description: null
          },
          {
            topicName: 'Algorithms: Recursion, Storing & Searching',
            day: 'Day 54 - Day 58',
            description: null
          },

        ]
      },
      {
        title: 'Modern JavaScript: Before Going to React or NODEJS',
        topics: [
          {
            topicName: 'ES6 Modules',
            day: 'Day 59',
            description: null
          },
          {
            topicName: 'Declarative & Functional Programming',
            day: 'Day 60',
            description: null
          },
        ]
      },
    ],
    color: colors.green[200],
    link: '/course-detail',
  },
  {
    id: 'jAVA',
    title: 'Development with JAVA',
    logo: '/java.png',
    shortDes: [
      'Java is the workhorse of the internet. Currently, tens of billions of devices, across platforms and over the world run on Java. It is generally referred to as the Write once, run everywhere programming language.',
      'We train our students on Java- The Programming Language and Java- The Runtime Environment. Java is a programming language that is used to build both mobile and desktop applications. It is concurrent, object oriented, multiplatform and considered very secure. Most developers who want to develop modular applications normally choose Java. ',
    ],
    color: colors.green[200],
    link: '/course-detail',
    syllabus: [
      {
        title: 'Highlights',
        topics: [
          {
            topicName: 'reverse engineering approach of learning',
            day: null,
            description: null
          },
          {
            topicName: 'Learn by doing. We will work together to build project as a colleague.',
            day: null,
            description: null
          },
          {
            topicName: 'Enterprise level project as per your choice. We will choose project where we can implement all your learning',
            day: null,
            description: null
          },
          {
            topicName: 'Code reviews and Suggestions',
            day: null,
            description: null
          },
          {
            topicName: 'Bonus contents',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Recap to Java Fundamentals',
        topics: [
          {
            topicName: 'JDK and JRE',
            day: null,
            description: null
          },
          {
            topicName: 'Java Basics',
            day: null,
            description: null
          },
          {
            topicName: 'Data Structures(Map, set, List, tree)',
            day: null,
            description: null
          },
          {
            topicName: 'Generics',
            day: null,
            description: null
          },
          {
            topicName: 'OOP concepts(classes, interface, polymorphism, Solid principles...)',
            day: null,
            description: null
          },
          {
            topicName: 'Exception handling',
            day: null,
            description: null
          },
          {
            topicName: 'Files and I/O',
            day: null,
            description: null
          },
          {
            topicName: 'Entity, Model, DTO, DAO & POJO. What are they?',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Getting Started',
        topics: [
          {
            topicName: 'Overview of Spring framework',
            day: null,
            description: null
          },
          {
            topicName: 'Spring vs Spring MVC vs Spring Boot',
            day: null,
            description: null
          },
          {
            topicName: 'Getting Familiar with Intellij',
            day: null,
            description: null
          },
          {
            topicName: 'Dependency Injection and IOC',
            day: null,
            description: null
          },
          {
            topicName: 'Build tools(Maven/Gradle)',
            day: null,
            description: null
          },
          {
            topicName: 'Git and Github for source control',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Spring Boot',
        topics: [
          {
            topicName: 'Spring Initializer',
            day: null,
            description: null
          },
          {
            topicName: 'Folder Structure',
            day: null,
            description: null
          },
          {
            topicName: 'Spring Boot Annotations',
            day: null,
            description: null
          },
          {
            topicName: 'Auto-configuration',
            day: null,
            description: null
          },
          {
            topicName: 'Aspect Oriented Programming',
            day: null,
            description: null
          },
          {
            topicName: 'Externalized Configuration',
            day: null,
            description: null
          },
          {
            topicName: 'Concurrency and Job Scheduling',
            day: null,
            description: null
          },
          {
            topicName: 'Mini-Project 1: First Spring Boot Application',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'JPA, ORM , Hibernate and Spring Data JPA',
        topics: [
          {
            topicName: 'Overview of JPA and Spring Data JPA',
            day: null,
            description: null
          },
          {
            topicName: 'Overview of ORM and Hibernate',
            day: null,
            description: null
          },
          {
            topicName: 'Entitity Manager',
            day: null,
            description: null
          },
          {
            topicName: 'Entity Relationships',
            day: null,
            description: null
          },
          {
            topicName: 'Defining JPA Entities',
            day: null,
            description: null
          },
          {
            topicName: 'Repository Interfaces and Custom Repository',
            day: null,
            description: null
          },
          {
            topicName: 'JPA Entity Life cycle Events',
            day: null,
            description: null
          },
          {
            topicName: 'H2 - In memory Database',
            day: null,
            description: null
          },
          {
            topicName: 'Connect & Persist data on PostgreSQL',
            day: null,
            description: null
          },
          {
            topicName: 'Mini-Project 2: First CRUD Application',
            day: null,
            description: null
          },


        ]
      },
      {
        title: 'Logging And Debugging',
        topics: [
          {
            topicName: 'Log Format',
            day: null,
            description: null
          },
          {
            topicName: 'Log to Console',
            day: null,
            description: null
          },
          {
            topicName: 'Log to File',
            day: null,
            description: null
          },
          {
            topicName: 'Log Levels',
            day: null,
            description: null
          },
          {
            topicName: 'Debugger and Break points',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Real Time Project : Phase 2',
        topics: [
          {
            topicName: 'Writing business logic',
            day: null,
            description: null
          },
          {
            topicName: 'Creating restful APIs',
            day: null,
            description: null
          },
          {
            topicName: 'Testing APIs using postman',
            day: null,
            description: null
          },
    
          
        ]
      },
      {
        title: 'Security',
        topics: [
          {
            topicName: 'Basic Authentication',
            day: null,
            description: null
          },
          {
            topicName: 'Cross Site Request Forgery',
            day: null,
            description: null
          },
          {
            topicName: 'Role Based Access',
            day: null,
            description: null
          },
          {
            topicName: 'Password Encryption',
            day: null,
            description: null
          },
          {
            topicName: 'Authentication Attempts',
            day: null,
            description: null
          },
          {
            topicName: 'session management',
            day: null,
            description: null
          },
          {
            topicName: 'Mini-project 4: Registration and Login(login,logout,remember,redirect)',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Testing',
        topics: [
          {
            topicName: 'Introduction to Unit, Mockito & Spring Boot Test',
            day: null,
            description: null
          },
          {
            topicName: 'Unit testing & Integration testing',
            day: null,
            description: null
          },
          {
            topicName: 'When to write Test?',
            day: null,
            description: null
          },
          

        ]
      },
      {
        title: 'Real Time Project: Phase 3',
        topics: [
          {
            topicName: 'Completion of project',
            day: null,
            description: null
          },
          {
            topicName: 'Writing Test Cases',
            day: null,
            description: null
          },
          {
            topicName: 'Deployment',
            day: null,
            description: null
          },
          

        ]
      },
      {
        title: 'Bonus Content',
        topics: [
          {
            topicName: 'Working with JSON',
            day: null,
            description: null
          },
          {
            topicName: 'Caching Mechanism',
            day: null,
            description: null
          },
          {
            topicName: 'Sending Emails & Forget Password',
            day: null,
            description: null
          },
          {
            topicName: 'Swagger for Rest Api',
            day: null,
            description: null
          },
          {
            topicName: 'React for UI development',
            day: null,
            description: null
          },
          {
            topicName: 'Tips & Best practices',
            day: null,
            description: null
          },
        ]
      },
    ],
  },
  {
    id: 'Flutter',
    title: 'Mobile App Development with Flutter',
    logo: '/flutter.png',
    time: '1 hour class daily',
    class: 'Offline/Online Class',
    shortDes: [
      'Flutter is an open source and free User Interface (UI) development and Software Development Kit (SDK) designed by Google to run on mobile devices. It can also run on desktop environments.',
      'With Flutter, a developer does not need to use one codebase for Android devices and another for IOS devices. A developer can just write one codebase in any programming language and be able to build an application that runs on both IOS and Android. It is also supported on Windows and Linux devices.',
      'With Flutter, the UI is more elegant, development is faster, and a developer simply needs to write less code.',
    ],
    syllabus: [
      {
        title: 'Chapter I: Introduction to Dart and Flutter ',
        topics: [
          {
            topicName: 'Flutter and Dart intro: Presentation ',
            day: null,
            description: null
          },
          {
            topicName: 'Dart and DartPad Overview ',
            day: null,
            description: null
          },
          {
            topicName: 'Flutter and Dart Introduction Quiz ',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Chapter II: Dart part 1 ',
        topics: [
          {
            topicName: 'Dart Part 1: Presentation ',
            day: null,
            description: null
          },
          {
            topicName: 'Write a Dart Program to display Bill Receipt of Restaurant.',
            day: null,
            description: null
          },
          {
            topicName: 'Write a Dart Program to calculate BMI. ',
            day: null,
            description: null
          },
          {
            topicName: 'Write a program for Pet Management. ',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Chapter III: Dart par 2',
        topics: [
          {
            topicName: 'Dart Part 2: Presentation?',
            day: null,
            description: null
          },
          {
            topicName: 'Write a program to display the highest selling product of current month and predict the highest selling product for upcoming month.',
            day: null,
            description: null
          },
          {
            topicName: 'Write a program for an online wallet syste',
            day: null,
            description: null
          },
          {
            topicName: 'Write a program for a manufacturing company to manage a device functionality that shared same component.',
            day: null,
            description: null
          },
          {
            topicName: 'Live Session Classes ',
            day: null,
            description: null
          },


        ]
      },
      {
        title: 'Chapter IV: Building First App with Flutter ',
        topics: [
          {
            topicName: 'Flutter first Day ',
            day: null,
            description: null
          },
          {
            topicName: 'Exploring widgets and create a simple app',
            day: null,
            description: null
          },
          {
            topicName: 'Create an app that display summary about the book/novel you recently read',
            day: null,
            description: null
          },
          {
            topicName: 'Create an app that display the best picture you ever took. ',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Chapter V: Exploring Container, Single Child and Multiple Children ',
        topics: [
          {
            topicName: 'Exploring Container and Row/Column: Presentation ',
            day: null,
            description: null
          },
          {
            topicName: 'Row and Column Challenge ',
            day: null,
            description: null
          },
          {
            topicName: 'Creating a simple Business Card ',
            day: null,
            description: null
          },
          {
            topicName: 'Row column challenge part 2 ',
            day: null,
            description: null
          },
          {
            topicName: 'Creating a Simple Card Game ',
            day: null,
            description: null
          },
          {
            topicName: 'Challenge 1 Dice Game Challenge ',
            day: null,
            description: null
          },
          {
            topicName: 'Creating a Simple Piano App ',
            day: null,
            description: null
          },
          {
            topicName: 'Live Session Classes',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Chapter VI: Flutter organizing widgets and Dart Code',
        topics: [
          {
            topicName: 'Creating Quiz App ',
            day: null,
            description: null
          },
          {
            topicName: 'Build a Jung Bahadur Rana story boarding app',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Chapter VII: Flutter Network Request and Navigation ',
        topics: [
          {
            topicName: 'Exploring a Navigation of Flutter ',
            day: null,
            description: null
          },
          {
            topicName: 'Exploring Network Request by creating a Cat App',
            day: null,
            description: null
          },
          {
            topicName: 'Develop a weather app with current user location (use of GPS) ',
            day: null,
            description: null
          },
          {
            topicName: 'Live Corona Update app ',
            day: null,
            description: null
          },
          {
            topicName: 'Live Session Classes ',
            day: null,
            description: null
          },



        ]
      },
      {
        title: 'Chapter VIII: Flutter Advance UI ',
        topics: [
          {
            topicName: 'Creating a BMI App 8.2 Create a UI for Food D',
            day: null,
            description: null
          },
          {
            topicName: 'Create a UI for Food Delivery App ',
            day: null,
            description: null
          },
          {
            topicName: 'Create an App UI from Dribble Inspired ',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Offline Storage and Shared Preferences ',
        topics: [
          {
            topicName: 'Creating a simple Record Keeping App',
            day: null,
            description: null
          },
          {
            topicName: 'Exploring a Shared Preferences of Flutter',
            day: null,
            description: null
          },
          {
            topicName: 'Create a Wedding Invitation App ',
            day: null,
            description: null
          },



        ]
      },
      {
        title: 'Chapter X: Flutter State Management and Firebase ',
        topics: [
          {
            topicName: 'Exploring State Management in Flutter ',
            day: null,
            description: null
          },
          {
            topicName: 'Exploring Firebase in Flutter',
            day: null,
            description: null
          },
          {
            topicName: 'Creating an Inventory Management System for Jewelry Shop',
            day: null,
            description: null
          },



        ]
      },
      {
        title: 'Chapter XI: Miscellaneous',
        topics: [
          {
            topicName: 'Implementing Push Notification ',
            day: null,
            description: null
          },
          {
            topicName: 'Implementing Google Maps ',
            day: null,
            description: null
          },
          {
            topicName: 'Publishing App',
            day: null,
            description: null
          },



        ]
      },

    ],
    link: '/course-detail',

    subtitle: [
      'Welcome to the Complete Flutter App Development Bootcamp with Dart --Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Over a million developers worldwide are using it, from individuals and startups to big companies like Alibaba, Capital One, and eBay. The course covers some of the fundamental concepts for Flutter development, teaching you how to code using Dart and walking you through building nine real-world apps that run on iOS and Android, even if you have no programming experience.',
      'Flutter - a framework developed by Google - allows you to learn one language (Dart) and build beautiful native mobile apps in no time. Flutter is a SDK providing the tooling to compile Dart code into native code and it also gives you a rich set of pre-built and pre-styled UI elements (so called widgets) which you can use to compose your user interfaces.Flutter is extremely trending and gets used for major Google apps like their Adwords app.',
    ],
    icon: 'fas fa-user',
    color: colors.amber,
    iternship: '100% Internship after course complet',
    location: 'Putalisadak, Kathmandu, Nepal',
    duration: ' Duration: 2.5 Month',
    courseImage: '',
    alt: 'Flutter',
    authorPhoto: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    sylabus: [
      {
        id: 'faq-1',
        title: 'Syllabus Outline',
        text: [
          'Introduction to Python',
          'Understanding of variables and identifiers, standard types and operators',
          'Decision making, sequential data types, dictionaries, loops and functions',
        ],
      },
      {
        id: 'faq-2',
        title: 'Benefits of python Training in Nepal',
        text: [
          'High demand of Python developers',
          'Environment to prove oneself in a competitive environment',
          'Quick results for projects that are popular in Nepal',
        ],
        des:
          'Achievers Groups is the best institution to learn C# at as it offers trained instructor to run its classes. The demand of C# developers is soaring around the world; however the companies are struggling to hire the qualified C# programmers. Therefore reserve your seat at the earliest in order to appear in upcoming C# training sessions and enhance your C# skills.',
      },

      {
        id: 'faq-3',
        title: 'Benefits of python Training at Achievers Groups',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
        ],
        des:
          'As the leading companies around the world have started using Python for their projects the developers with Python skills can expect plenty of opportunities to work in innovative and high paying projects. Please register yourself for our upcoming Python training session to expand your programming portfolio. Our instructors are excited to guide you along the journey of Python Programming.',
      },
    ],

    items: [
      {
        id: 'faq-1',
        title: 'Introduction to Dart and Flutter ',
        text: [
          'Flutter and Dart intro: Presentation ',
          'Dart and DartPad Overview',
          'Flutter and Dart Introduction Quiz',
        ],
      },
      {
        id: 'faq-2',

        title: 'Dart part 1',
        text: [
          'Dart Part 1: Presentation ',
          'Write a Dart Program to display Bill Receipt of Restaurant. ',
          'Write a Dart Program to calculate BMI. ',
          'Write a program for Pet Management.',
        ],
      },
      {
        id: 'faq-3',

        title: 'Dart part 2',
        text: [
          ' Dart Part 2: Presentation ',
          'Write a program to display the highest selling product of current month and predict the highest selling product for upcoming month.',
          'Write a program for an online wallet system ',
          'Write a program for a manufacturing company to manage a device functionality that shared same component. 3.5 Live Session Classes ',
        ],
      },
      {
        id: 'faq-4',
        title: 'Building First App with Flutter ',

        text: [
          'Flutter first Day ',
          'Exploring widgets and create a simple app ',
          'Create an app that displays a summary about the book/novel you recently read.',
          'Create an app that displays the best picture you ever took. ',
        ],
      },
      {
        id: 'faq-5',
        title: 'Exploring Container, Single Child and Multiple Children ',

        text: [
          'Exploring Container and Row/Column: Presentation',
          ' Row and Column Challenge ',
          'Creating a simple Business Card ',
          'Row column challenge part 2 ',
          'Creating a Simple Card Game ',
          'Challenge 1 Dice Game Challenge ',
          'Creating a Simple Piano App ',
          'Live Session Classes ',
        ],
      },
      {
        id: 'faq-6',
        title: 'Flutter organizing widgets and Dart Code',

        text: [
          'Creating Quiz App ',
          'Build a Jung Bahadur Rana storyboarding app ',
        ],
      },
      {
        id: 'faq-7',
        title: 'Flutter Network Request and Navigation ?',

        text: [
          'Exploring a Navigation of Flutter ',
          'Exploring Network Request by creating a Cat App ',
          'Develop a weather app with current user location (use of GPS) ',
          'Live Corona Update app ',
          'Live Session Classes ',
        ],
      },
      {
        id: 'faq-8',
        title: 'Flutter Advance UI ',

        text: [
          'Creating a BMI App ',
          'Create a UI for Food D 8.2 Create a UI for Food Delivery App ',
          'Create an App UI from Dribble Inspired ',
        ],
      },
      {
        id: 'faq-9',
        title: 'Offline Storage and Shared Preferences ',

        text: [
          'Creating a simple Record Keeping App ',
          'Exploring a Shared Preferences of Flutter ',
          'Create a Wedding Invitation App',
        ],
      },
      {
        id: 'faq-10',
        title: 'Flutter State Management and Firebase ',

        text: [
          ' Exploring State Management in Flutter ',
          'Exploring Firebase in Flutter',
          'Creating an Inventory Management System for Jewelry Shop ',
        ],
      },
      {
        id: 'faq-11',
        title: 'Miscellaneous ',

        text: [
          'Implementing Push Notification ',
          'Implementing Google Maps ',
          'Publishing App',
        ],
      },
    ],

    outcome: [
      {
        title: 'Course Outcome',
        text: [
          'Fundamental Flutter concepts e.g. Stateful vs. Stateless Widgets, Widget tree, state management, animations, themes and much more.',
          'Fundamental Dart concepts e.g. lists, maps, enums, loops, futures, streams, mixins, classes, and much more.',
          'Concepts of Object Oriented Programming (OOP): The type system, variables, functions and methods, inheritance, classes and protocols.',
          'Control Structures: Using If/­Else clauses, Switch statements and logic to control the flow of execution.',
          'Data Structures: How to work with collections, such as Lists and Maps.',
          'Software Design: How to organise and format code for readability and how to implement the Model ­View­ Controller (MVC) design pattern.',
          'Networking: How to make asynchronous API calls, store and retrieve data from the cloud, and use the JSON format for server communication.',
          'Data Storage: How to use Firebase Cloud Firestore to act as a backend for your Flutter apps.',
          'Authentication: How to use log in and register users for your Flutter apps.',
          'State Management: How to use setState, prop drilling, lifting state up, callbacks and the Provider package to manage app state.',
        ],
        desc: 'So by the end of the course, you"ll completely understand:',
      },
    ],
    feature: [
      {
        title: 'Course Features',
        text: [
          'Detailed setup instructions for both macOS and Windows',
          'A thorough introduction to Flutter, Dart and the concept behind widgets',
          'Debugging tipps & tricks',
          'Page navigation with tabs, side drawers and stack-based navigation',
          'State management solutions',
          'Handling and validating user input',
          'Connecting your Flutter app to backend servers by sending Http requests',
          'Adding Google Maps',
          'Adding beautiful animations & page transitions',
          'Image Upload',
          'How to publish your app to the app stores',
          'And more!',
        ],
      },
    ],
  },
  
  {
    id: 'Digital-Marketing',
    title: 'Digital Marketing ',
    logo: '/DigitalMarketing.png',
    shortDes: [
      'Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.'
    ],
    syllabus: [
      {
        title: 'Introduction',
        topics: [
          {
            topicName: 'What is Digital Marketing?',
            day: null,
            description: null
          },
          {
            topicName: 'Types of Digital Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'Trends in Digital Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'How to build a Digital Marketing Strategy?',
            day: null,
            description: null
          },
          {
            topicName: 'Tools for Digital Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'Content Marketing',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Email Marketing',
        topics: [
          {
            topicName: 'Introduction to Email Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'Building Email Marketing Strategy',
            day: null,
            description: null
          },
          {
            topicName: 'Email Marketing Tools and Software',
            day: null,
            description: null
          },
          {
            topicName: 'Mailchimp Overview',
            day: null,
            description: null
          },
          {
            topicName: 'Designing Email Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'Building Subscriber Lists',
            day: null,
            description: null
          },
          {
            topicName: 'Campaign setup and running',
            day: null,
            description: null
          },
          {
            topicName: 'Reports and Analysis',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Search Engine Optimization',
        topics: [
          {
            topicName: 'Introduction to SEO',
            day: null,
            description: null
          },
          {
            topicName: 'Tools for Website Optimization',
            day: null,
            description: null
          },
          {
            topicName: 'Google Webmasters Tools',
            day: null,
            description: null
          },
          {
            topicName: 'Keyword Research Process',
            day: null,
            description: null
          },
          {
            topicName: 'Competition Analysis',
            day: null,
            description: null
          },
          {
            topicName: 'On page Optimization Strategies',
            day: null,
            description: null
          },
          {
            topicName: 'Off Page Optimization Strategies',
            day: null,
            description: null
          },
          {
            topicName: 'Local SEO',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Search Engine Marketing',
        topics: [
          {
            topicName: 'Introduction to Search Engine Marketing (Paid Marketing)',
            day: null,
            description: null
          },
          {
            topicName: 'PPC (Pay per Click) Overview',
            day: null,
            description: null
          },
          {
            topicName: 'Google Ads',
            day: null,
            description: null
          },
          {
            topicName: 'Keyword Research & Setup',
            day: null,
            description: null
          },
          {
            topicName: 'Bidding Strategies',
            day: null,
            description: null
          },
          {
            topicName: 'Dynamic search Campaigns',
            day: null,
            description: null
          },
          {
            topicName: 'Display Ads',
            day: null,
            description: null
          },
          {
            topicName: 'Youtube Marketing',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Social Media Marketing',
        topics: [
          {
            topicName: 'Introduction to Social Media Marketing',
            day: null,
            description: null
          },
          {
            topicName: 'Social Media Platforms',
            day: null,
            description: null
          },
          {
            topicName: 'Facebook, Instagram & LinkedIn Overview',
            day: null,
            description: null
          },
          {
            topicName: 'Social Media Optimization',
            day: null,
            description: null
          },
          {
            topicName: 'Social Media Advertising',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Analytics',
        topics: [
          {
            topicName: 'Introduction to Web Analytics',
            day: null,
            description: null
          },
          {
            topicName: 'Tools for website analytics',
            day: null,
            description: null
          },
          {
            topicName: 'Google Analytics',
            day: null,
            description: null
          },
          {
            topicName: 'Reporting and Analysis',
            day: null,
            description: null
          },
          {
            topicName: 'Conversion Tracking and Optimization',
            day: null,
            description: null
          },

        ]
      },

    ],
    link: '/course-detail',
  },
  {
    id: 'Quality-Assurance',
    title: 'Quality Assurance',
    logo: '/AQ.png',
    shortDes: [
      'Any software needs to be continuously and repeatedly tested for security vulnerabilities, bugs that affect runtime and user experience before being released to the market as well as after release.',
      'Most companies these days deploy automated software to check for such vulnerabilities as well as user acceptance. A QA Personnel performs tests both on the Graphical User Interface (GUI) and Application Programming Interface (API) levels.',
      'We train our students on both Cypress and Selenium Automation Testing tools.',
    ],
    syllabus: [
      {
        title: 'Manual Testing',
        topics: [
          {
            topicName: 'Fundamental Testing',
            day: null,
            description: null
          },
          {
            topicName: 'SDLC',
            day: null,
            description: null
          },
          {
            topicName: 'Static Testing',
            day: null,
            description: null
          },
          {
            topicName: 'Dynamic Testing',
            day: null,
            description: null
          },
          {
            topicName: 'White Box Testing',
            day: null,
            description: null
          },
          {
            topicName: 'Grey BOx Testing',
            day: null,
            description: null
          },
          {
            topicName: 'Verification And Validation',
            day: null,
            description: null
          },
          {
            topicName: 'Miscellaneous Types of Testing',
            day: null,
            description: null
          },
          {
            topicName: 'Test Cases',
            day: null,
            description: null
          },
          {
            topicName: 'Test Management',
            day: null,
            description: null
          },
          {
            topicName: 'Bug Reporting And Tracking ',
            day: null,
            description: null
          }
        ]
      },
      {
        title: 'Automation Testing(Cypress)',
        topics: [
          {
            topicName: 'What is cypress?',
            day: null,
            description: null
          },
          {
            topicName: 'Understanding the cypress Architecture',
            day: null,
            description: null
          },
          {
            topicName: 'Cypress Installation and its prerequisite',
            day: null,
            description: null
          },
          {
            topicName: 'Introduction to the cypress test runner ',
            day: null,
            description: null
          },
          {
            topicName: 'Basic cypress commands',
            day: null,
            description: null
          },
          {
            topicName: 'Getting Started and handling web ',
            day: null,
            description: null
          },
          {
            topicName: 'Controls UI:Alert,popups,child windows,frames using cypress Fixtures,custom commands,configuration,Environment variable',
            day: null,
            description: null
          },
          {
            topicName: 'Asynchronous Nature',
            day: null,
            description: null
          },
          {
            topicName: 'Cypress Limitations',
            day: null,
            description: null
          },
          {
            topicName: 'Mocking Requests and Response',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Selectorshub',
        topics: [
          {
            topicName: 'What are Locators?',
            day: null,
            description: null
          },
          {
            topicName: 'Understanding Selectors Hub',
            day: null,
            description: null
          },
          {
            topicName: 'Installing and Locating Elements using Selectors Hub',
            day: null,
            description: null
          },
          {
            topicName: 'Selectors Hub Features',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'JMETER',
        topics: [
          {
            topicName: 'What is Performance Testing?',
            day: null,
            description: null
          },
          {
            topicName: 'JMETER Installation ',
            day: null,
            description: null
          },
          {
            topicName: 'First Jmeter Test with a different type of listeners',
            day: null,
            description: null
          },
          {
            topicName: 'Recording Test using Blazemeter',
            day: null,
            description: null
          },
          {
            topicName: 'Run test from Command Line and generate HTML reports',
            day: null,
            description: null
          },
          {
            topicName: 'Test Parameterization using CSV Data Set Config and making use of Regular Expression Extractor',
            day: null,
            description: null
          },
          {
            topicName: 'Analyzing reports and Distributed Load Testing',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Postman',
        topics: [
          {
            topicName: 'What are API and API Testing?',
            day: null,
            description: null
          },
          {
            topicName: 'Understanding different HTTP Methods',
            day: null,
            description: null
          },
          {
            topicName: 'Understanding Postman for API Testing',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Version Controlling',
        topics: [
          
          
        ]
      },
      {
        title: 'Project management tools',
        topics: [
          
          
        ]
      },
      {
        title: 'Interview Preparation',
        topics: [
         
        ]
      },
      {
        title: 'Mock Interviews',
        topics: [
          
        ]
      },
      {
        title: 'CV Making',
        topics: [
          
        ]
      },
      
    ],
    link: '/course-detail',
  },
  {
    id: 'SQL',
    title: 'SQL Database Administration',
    logo: '/mysql.png',
    shortDes: [
      'There is nothing on the internet without a database. Any company that runs any kind of service like e-commerce or keeps a record of its’ employees and customers needs to keep a database. Technology and the type and amount of data available to companies keep growing every day. The knowledge and skillsets of Database Administrators needs to grow with the logarithmic growth of data. ',
      'Database Administrators keep the data secure and make sure it keeps fragmented and only authorized users can access the data that they are permitted to access, analyze and use. Our database Administration Training is geared at producing software professionals who can write and install computer programs in order to maintain and secure such information. Besides, we also train you to debug issues.',
    ],
    syllabus: [
      {
        title: 'Getting Started',
        topics: [
          {
            topicName: 'Introduction',
            day: null,
            description: null
          },
          {
            topicName: 'Why to learn about databases?',
            day: null,
            description: null
          },
          {
            topicName: 'Opportunities(DBA, Data engineer, Business Intelligence, ETL engineer, etc)',
            day: null,
            description: null
          },
          {
            topicName: 'Types of databases (Relational and Non-Relational)',
            day: null,
            description: null
          },
          {
            topicName: 'Database Applications',
            day: null,
            description: null
          },
          {
            topicName: 'Linux Basic',
            day: null,
            description: null
          },
          {
            topicName: 'Installing MySQL server and client (Linux based OS/Windows)',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'DBMS Concepts',
        topics: [
          {
            topicName: 'Data Models',
            day: null,
            description: null
          },
          {
            topicName: 'ER Diagram',
            day: null,
            description: null
          },
          {
            topicName: 'Database Languages(DDL, DCL, DML, TCL)',
            day: null,
            description: null
          },
          {
            topicName: 'Types of Constraint',
            day: null,
            description: null
          },
          {
            topicName: 'Cardinality in DBMS',
            day: null,
            description: null
          },
          {
            topicName: 'Keys in DBMS',
            day: null,
            description: null
          },
          {
            topicName: 'Normalization',
            day: null,
            description: null
          },
          {
            topicName: 'ACID properties',
            day: null,
            description: null
          },
          {
            topicName: 'OLAP VS OLTP database',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Basic SQL',
        topics: [
          {
            topicName: 'Getting Started with SQL',
            day: null,
            description: null
          },
          {
            topicName: 'SQL data types and associated functions',
            day: null,
            description: null
          },
          {
            topicName: 'SQL constraints',
            day: null,
            description: null
          },
          {
            topicName: 'Life cycle of ASP.Net MVC application',
            day: null,
            description: null
          },
          {
            topicName: 'Querying Data',
            day: null,
            description: null
          },
          {
            topicName: 'Sorting Data',
            day: null,
            description: null
          },
          {
            topicName: 'Filtering Data',
            day: null,
            description: null
          },
          {
            topicName: 'Grouping Data',
            day: null,
            description: null
          },
          {
            topicName: 'Set Operators',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Intermediate SQL',
        topics: [
          {
            topicName: 'Joining Tables',
            day: null,
            description: null
          },
          {
            topicName: 'Subqueries',
            day: null,
            description: null
          },
          {
            topicName: 'Rank and Window Function',
            day: null,
            description: null
          },
          {
            topicName: 'CTE and recursive CTE',
            day: null,
            description: null
          },
          {
            topicName: 'Wildcards and Regex operators',
            day: null,
            description: null
          },
          {
            topicName: 'Transaction, save points and commit/rollback',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Modifying data in SQL',
        topics: [
          {
            topicName: 'Inset, insert ignore and aru variants',
            day: null,
            description: null
          },
          {
            topicName: 'Create table as select statements haru',
            day: null,
            description: null
          },
          {
            topicName: 'Update',
            day: null,
            description: null
          },
          {
            topicName: 'Delete',
            day: null,
            description: null
          },
          {
            topicName: 'Truncate',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'Advanced SQL',
        topics: [
          {
            topicName: 'Triggers',
            day: null,
            description: null
          },
          {
            topicName: 'Views',
            day: null,
            description: null
          },
          {
            topicName: 'Index',
            day: null,
            description: null
          },
          {
            topicName: 'Query optimization',
            day: null,
            description: null
          },
          {
            topicName: 'Stored Procedure',
            day: null,
            description: null
          },

        ]
      },
      {
        title: 'MySQL Administration',
        topics: [
          {
            topicName: 'Backup and restore',
            day: null,
            description: null
          },
          {
            topicName: 'User creation and descriptions of various roles',
            day: null,
            description: null
          },
          {
            topicName: 'Role based user',
            day: null,
            description: null
          },
          {
            topicName: 'Granting and revoking privileges',
            day: null,
            description: null
          },


        ]
      },
      {
        title: 'Bonus Lecture:',
        topics: [
          {
            topicName: 'Basics of Pentaho',
            day: null,
            description: null
          },
          {
            topicName: 'Replication and Cluster',
            day: null,
            description: null
          },
          {
            topicName: 'DB Monitoring Tools',
            day: null,
            description: null
          },

        ]
      },
    ],
    color: colors.green[200],
    link: '/course-detail',
  },
  {
    id: 'ML',
    title: 'Machine Learning',
    logo: '/ml.png',
    shortDes: [
      'Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.'
    ],
    syllabus: [
      {
        title: 'Introduction to machine learning ',
        topics: [
        ]
      },
      {
        title: ' Why Python for machine learning  ',
        topics: [
        ]
      },
      {
        title: ' Python Crash Course  ',
        topics: [
          {
            topicName: 'Installation and Environment setup ',
            day: null,
            description: null
          },
          {
            topicName: 'Jupyter Notebook and Google Colab ',
            day: null,
            description: null
          },
          {
            topicName: 'Basic Data Preprocessing with python ',
            day: null,
            description: null
          },
          {
            topicName: 'Numpy ',
            day: null,
            description: null
          },
          {
            topicName: 'Pandas ',
            day: null,
            description: null
          },
          {
            topicName: 'Data Visualization with Matplotib',
            day: null,
            description: null
          },
          {
            topicName: 'Data Visualization with Seaborn',
            day: null,
            description: null
          },
        ]
      },
      {
        title: ' Linear Algebra',
        topics: [
          {
            topicName: 'Linear Algebra',
            day: null,
            description: null
          },
          {
            topicName: 'Matrix Addition',
            day: null,
            description: null
          },
          {
            topicName: 'Matrix Multiplication',
            day: null,
            description: null
          },
          {
            topicName: 'Matrix Inverse and transpose',
            day: null,
            description: null
          },
        ]
      },
      {
        title: 'Regularization',
        topics: [
          {
            topicName: 'Underfitting',
            day: null,
            description: null
          },
          {
            topicName: 'OverFiltting',
            day: null,
            description: null
          },
          {
            topicName: 'Cost Function',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: ' Regression',
        topics: [
          {
            topicName: 'Linear Regression',
            day: null,
            description: null
          },
          {
            topicName: 'Multiple Linear Regression',
            day: null,
            description: null
          },
          {
            topicName: 'Polynomial Regression',
            day: null,
            description: null
          },
          {
            topicName: 'Logistic Regression ',
            day: null,
            description: null
          },
          {
            topicName: 'Decison Tree Regression',
            day: null,
            description: null
          },
          {
            topicName: 'Random Forest Regression',
            day: null,
            description: null
          },
        ]
      },
      {
        title: ' Classification',
        topics: [
          {
            topicName: 'K-Nearest Neighbors',
            day: null,
            description: null
          },
          {
            topicName: 'Support Vector Machines (SVM)',
            day: null,
            description: null
          },
          {
            topicName: 'Kernel SVM',
            day: null,
            description: null
          },
          {
            topicName: 'Decision Tree Classification ',
            day: null,
            description: null
          },
          {
            topicName: 'Random Forest Classification ',
            day: null,
            description: null
          },
          {
            topicName: 'Evaluationg Classifiaction Models Performance ',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Clustering',
        topics: [
          {
            topicName: 'K-means Clustering',
            day: null,
            description: null
          },
          {
            topicName: 'Hierarchical clustering ',
            day: null,
            description: null
          },
          
        ]
      },
      {
        title: 'Reinforcement Learing',
        topics: [
        ]
      },
      {
        title: 'Introduction to Artifical Neural Networks',
        topics: [
        ]
      },
      {
        title: 'Introduction to Concolutional Neural Networks',
        topics: []
      },
      {
        title: 'Introduction to Deep Neural Networks',
        topics: [
        ]
      },
      
    ],
    color: colors.green[200],
    link: '/course-detail',
  },



  // {
  //   id: 'dotNET',
  //   title: 'Development with .NET ',
  //   logo: '/dotNet.png',
  //   shortDes: [
  //     'Java is the workhorse of the internet. Currently, tens of billions of devices, across platforms and over the world run on Java. It is generally referred to as the Write once, run everywhere programming language.',
  //     'We train our students on Java- The Programming Language and Java- The Runtime Environment. Java is a programming language that is used to build both mobile and desktop applications. It is concurrent, object oriented, multiplatform and considered very secure. Most developers who want to develop modular applications normally choose Java. ',
  //   ],
  //   syllabus: [
  //     {
  //       title: 'Getting Started',
  //       topics: [
  //         {
  //           topicName: 'Introduction',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Why to learn ASP.NET?',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'ASP.NET MVC vs ASP.NET Core',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Setting up development environment',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Application Types',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Getting Familiar with Visual Studio Interface',
  //           day: null,
  //           description: null
  //         },
  //       ]
  //     },
  //     {
  //       title: 'C# Fundamentals',
  //       topics: [
  //         {
  //           topicName: 'Data Types and Variables',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Control Statements',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Classes and Objects',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Interfaces',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Enums',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Collection and Generics',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Exception Handling',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Build Console Application – TicTacToe',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Live Interactive session with Industry Expert',
  //           day: null,
  //           description: null
  //         },
  //       ]
  //     },
  //     {
  //       title: 'ASP.NET MVC Fundamentals',
  //       topics: [
  //         {
  //           topicName: 'What is MVC pattern?',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Folder Structure',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Architecture',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Life cycle of ASP.Net MVC application',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Conventional vs Attribute Routing',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Configuration files',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Razor Syntax',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Layout View and Partial View',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'ViewBag vs ViewData vs TempData',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'View Models',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML Helpers',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Project 2 : Build CRUD MVC Application: Book Shop',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Working With Database',
  //       topics: [
  //         {
  //           topicName: 'Introduction to MSSQL and tools',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Store Procedures',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Entity Framework',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'DbContext',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Database First vs Code First vs Model First Approach',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Working with Packages- Nuget Package Manager',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'LINQ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Project 3 : Upgrade Book Shop app to persist information in Database',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Live Interactive session with Industry Expert',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Validation',
  //       topics: [
  //         {
  //           topicName: 'Validation using Data Annotations',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Custom Validations',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Styling Validation Messages',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSRF Attacks and Antiforgery token',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Project 4: User input validation and prevent CSRF attacks on Book Shop',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Security, Authentication and Authorization',
  //       topics: [
  //         {
  //           topicName: 'ASP.NET Identity',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Oauth2 and Social Login(twitter/github)',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Project 5: Login/Register for Book Shop',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Real Time Project',
  //       topics: [
  //         {
  //           topicName: 'Book Store APIs',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'GET, POST, PUT and DELETE APIs',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Token based authentication',
  //           day: null,
  //           description: null
  //         },


  //       ]
  //     },
  //     {
  //       title: 'Real Time Project 2',
  //       topics: [
  //         {
  //           topicName: 'E commerce Web Application – Book Store',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Add to Cart',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Add to Wishlist',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Admin panel to add/remove user and products',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Form based Register/Login',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Social Login',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Email Verification and Forget Password Features',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Interactive UIs',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Bonus Contents',
  //       topics: [
  //         {
  //           topicName: 'Dependency Injection',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Logging',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'JQuery and Ajax',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Postman – API development Tool',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Git and Github for source control',
  //           day: null,
  //           description: null
  //         },


  //       ]
  //     },

  //   ],
  //   color: colors.green[200],
  //   link: '/course-detail',
  // },

  // {
  //   id: 'Business-Intelligence',
  //   title: 'Business Intelligence with MSBI ',
  //   logo:'/BusinessIntelligence.png',
  //   shortDes: [
  //     'Any software needs to be continuously and repeatedly tested for security vulnerabilities, bugs that affect runtime and user experience before being released to the market as well as after release.',
  //     'Most companies these days deploy automated software to check for such vulnerabilities as well as user acceptance. A QA Personnel performs tests both on the Graphical User Interface (GUI) and Application Programming Interface (API) levels.',
  //     'We train our students on both Cypress and Selenium Automation Testing tools.',
  //   ],
  //   syllabus: [],
  //   link: '/course-detail',
  //   isNew: true,
  // },
  // {
  //   id: 'Django',
  //   title: 'Full Stact Development with Python Django',
  //   logo:'/Django.png',
  //   shortDes: [
  //     'Full Stack Development is the development of both the Client side (Front end) and the Server side (back end) portions of primarily web based applications, but also mobile applications. A full stack developer can build both the back and front ends of an application. Besides, they are trained to plan and execute flawless Database Integration and deploy debugging tests.',
  //   ],
  //   syllabus: [
  //     {
  //       title: ' Getting Started ',
  //       topics: [
  //         {
  //           topicName: 'Introduction ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Why learn Django? ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' MVC vs MVT ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Setting up a development environment ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Application Types ',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Python Fundamentals',
  //       topics: [
  //         {
  //           topicName: 'Data Types and Variables ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Data Structures (List, Tuples, Dictionary)',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Methods and Functions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Object-Oriented Programming',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Errors and Exception Handling ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Python Decorators',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Python Modules ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Web Scraping using Python ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Working with Images in Python',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Working with PDFs and CSV using Python ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Project 1: Building rock, paper, and scissor game with Python ',
  //           day: null,
  //           description: null
  //         },
  //       ]
  //     },
  //     {
  //       title: 'Django Fundamentals',
  //       topics: [
  //         {
  //           topicName: ' Introduction to Django ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Install and Configure Django Components ',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Create Django Views',
  //       topics: [
  //         {
  //           topicName: 'About View Functions ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Using Django’s HttpResponse Class ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Understanding HttpRequest Objects ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Using QueryDict Objects ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Django Project: Building blog website using Django - I ',
  //           day: null,
  //           description: null
  //         },
         
  //       ]
  //     },
  //     {
  //       title: 'Configuring URLConf ',
  //       topics: [
  //         {
  //           topicName: 'About URLconf ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Regular Expressions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Expression Examples',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Simple URLConf Examples ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Using Multiple URLConf',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Passing URL Arguments',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Django Project: Extending blog using URLs - II',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Django Templates  ',
  //       topics: [
  //         {
  //           topicName: 'Template Fundamentals',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Creating Template Objects',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Loading Template Files ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Filling in Template Content (Context Objects)',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Template Tags',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Template Filters',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'More on For Loops ',
  //           day: null,
  //           description: null
  //         },


  //         {
  //           topicName: 'Template Inheritance ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Easy Rendering of Templates',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'RequestContext Processors ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Global Context Processors',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Django Project: Extending blog by introducing templates - III (We will also see how front-end components are used along with Django)',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Django Forms',
  //       topics: [
  //         {
  //           topicName: 'Form classes',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Validation ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Authentication ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Advanced Forms processing techniques ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Django Project: Extending blog by using forms to allow the user to enter data - IV ',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Working with Database Models',
  //       topics: [
  //         {
  //           topicName: 'About Database Models',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Configuring Django for Database Access ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Understanding Django Apps',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'About Django Models',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Defining Django Models ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Understanding Model Fields & Options',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Creating A Django Model',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Adding the App to Your Project ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Validating the App ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Adding Data to the Model',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Primary Keys and the Model ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Simple Data Retrieval Using a Model',
  //           day: null,
  //           description: null
  //         },


  //         {
  //           topicName: 'Understanding QuerySets ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Specifying Ordering in QuerySets ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Validating the App ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Common QuerySet Methods ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Deleting Records',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Retrieving Related Records ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' Creating Forms from Models ',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Authentication ',
  //       topics: [
  //         {
  //           topicName: 'Cookies & Django ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' The Django Session Framework',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Sessions in Views ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Installing Django User Authentication ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Using Authentication in Views ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: ' . Login and Logout',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Building your Own Login/Logout Views',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Authentication Decorators',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Django Project: Adding signup/login functionality - V ',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Generic Views',
  //       topics: [
  //         {
  //           topicName: 'Simple Generic Views',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Using Generic Redirects ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Other Generic Views ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Create/Update/Delete Generic views ',
  //           day: null,
  //           description: null
  //         },
          
  //       ]
  //     },
  //     {
  //       title: 'Django Email Functionality',
  //       topics: [
  //         {
  //           topicName: 'Configuring Mail Settings',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Sending Email',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Other Email Functions',
  //           day: null,
  //           description: null
  //         },
          

  //       ]
  //     },
  //     {
  //       title: 'Using Django Rest Framework for API Development ',
  //       topics: [
          
  //       ]
  //     },
  //     {
  //       title: ' Project: Using Django to build a hospital application that allows patients to book a consultation and appointment. ',
  //       topics: [
  //         {
  //           topicName: 'Taking appointment ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Registering for consultation ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Admin panel to add/remove users ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Form-based signup/login ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Email functionality',
  //           day: null,
  //           description: null
  //         },


  //       ]
  //     },
  //     {
  //       title: 'Deploying Django Applications',
  //       topics: [

  //       ]
  //     },
      


  //     {
  //       title: 'Bonus: ',
  //       topics: [
  //         {
  //           topicName: 'Postman – API development Tool ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Git and Github for source control',
  //           day: null,
  //           description: null
  //         },
  //       ]
  //     },
      

  //   ],
  //   color: colors.green[200],
  //   link: '/course-detail',
  // },
  
  // {
  //   id: 'Web-Foundation',
  //   title: 'Web Development Foundation ',
  //   logo:'/WebFoundation.png',
  //   shortDes: [
  //     'Any software needs to be continuously and repeatedly tested for security vulnerabilities, bugs that affect runtime and user experience before being released to the market as well as after release.',
  //     'Most companies these days deploy automated software to check for such vulnerabilities as well as user acceptance. A QA Personnel performs tests both on the Graphical User Interface (GUI) and Application Programming Interface (API) levels.',
  //     'We train our students on both Cypress and Selenium Automation Testing tools.',
  //   ],
  //   syllabus: [
  //     {
  //       title: 'Getting Started:',
  //       topics: [
  //         {
  //           topicName: 'Introduction',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'How Internet works',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Client-side and server-side ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Web Development Process',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Fundamental of web development',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Introduction to HTMl:',
  //       topics: [
  //         {
  //           topicName: 'Introduction to html',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML tag',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML personal-site building',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML Boilerplat',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Structuring text in html',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML Lists',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML image elements',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML links and anchor tags',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Challenge problems',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Intermediate HTML:',
  //       topics: [
  //         {
  //           topicName: 'HTML tables',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Using HTML Tables for layout',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML Forms',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Forms in practices',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Challenge problems',
  //           day: null,
  //           description: null
  //         },


  //       ]
  //     },
  //     {
  //       title: 'Introduction to css:',
  //       topics: [
  //         {
  //           topicName: 'Introduction to CSS',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Inline CSS',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Internal CSS',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'External CSS',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'How to Debug CSS Code',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'The Anatomy of CSS Syntax',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS Selectors',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Classes vs. Ids',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS Quiz',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Intermediate TO CSS',
  //       topics: [
  //         {
  //           topicName: 'Favicons',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'HTML divs',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS box model',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS Display Property ',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS static and relative positioning',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Absolute positioning',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS sizing',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'CSS Float and Clear',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Challenge problems',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Introduction to Bootstrap 4',
  //       topics: [
  //         {
  //           topicName: 'What is Bootstrap?',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Installing Bootstrap',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Web Design 101 - Wireframing',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'The Bootstrap Navigation Bar',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Setting Up Our New Project',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Grid Layout System',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Adding Grid Layouts',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'A Note About CSS Link Order',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Buttons & Font Awesome',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Styling Our Website Challenges and Solutions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Challenge 1',
  //           day: null,
  //           description: null
  //         },

  //       ]
  //     },
  //     {
  //       title: 'Intermediate Bootstrap',
  //       topics: [
  //         {
  //           topicName: 'The Bootstrap Carousel Part 1',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'The Bootstrap Carousel Part 2',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Cards',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'The CSS Z-Index and Stacking Order',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Media Query Breakpoints',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Challenge 2',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Bootstrap Challenge 2 Solution',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'How to become a Better Programmer - Code Refactoring',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Put it into Practice - Refactor our Website Part 1',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Advanced CSS - Combining Selectors',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Refactoring our Website Part 2',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Advanced CSS - Selector Priority',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Completing the Website',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Download the Completed Website',
  //           day: null,
  //           description: null
  //         },



  //       ]
  //     },
  //     {
  //       title: 'Javascript Fundamental part-2',
  //       topics: [
  //         {
  //           topicName: 'Section Intro',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Activating Strict Mode',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Functions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Function Declarations vs. Expressions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Arrow Functions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Functions Calling Other Functions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Reviewing Functions',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Coding Challenge #1',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Preview',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Coding Challenge #1',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Basic Array Operations (Methods)',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Coding Challenge #2',
  //           day: null,
  //           description: null
  //         },

  //         {
  //           topicName: 'Introduction to Objects',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Dot vs. Bracket Notation',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Object Methods',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Coding Challenge #3',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Iteration: The for Loop',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Looping Arrays, Breaking and Continuing',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'Looping Backwards and Loops in Loops',
  //           day: null,
  //           description: null
  //         },
  //         {
  //           topicName: 'The while Loop',
  //           day: null,
  //           description: null
  //         },
          



  //       ]
  //     },
  //     {
  //       title: 'Final Project and Delyment',
  //       topics:[]
  //     }


  //   ],
  //   link: '/course-detail',
  //   isNew: true,
  // },
  
];

export const jobs = [
  {
    id: '1',
    vacancy: '2',
    title: 'Flutter',
    jobTitle: 'Flutter Devlopment internship',
    type: 'Full time',
    salary:
      'Salary Range can be from 25,000NPR to 50,000NPR based on your skills, very fast increment based on performance. ',
    educationRequirement:
      'Bachelors in Information Technology, Engineering and related field.[Education can be considered if you&re highly skilled at this job.]',
    location: 'putalisadak, Kathmandu',
    date: '3 days ago',
    companyLogo: 'https://assets.maccarianagency.com/the-front/logos/slack.svg',
    jobReq: [
      'Collaborate with cross-functional teams to define, design, and ship new features.',
      'Work with outside data sources and APIs.',
      'Work on bug fixing and improving application performance.',
      'Unit-test code for robustness, including edge cases, usability, and general reliability.',
      'Continuously discover, evaluate, and implement new technologies to maximize development efficiency.',
      'Must have built at least one Android, iOS, apps with Flutter or Hybrid Framework.',
      'Must have knowledge of different state management & architecture pattern like provider, bloc.',
    ],
    exprences: [
      ' Must have build different mobile applications, for iOS and Android using Native as well as Hybrid platform.',
      'Minimum 2 years of experience in flutter application development.',
    ],
    info: [
      'Your github url, and open source projects.',
      'Portfolio url - Can be web applications Mobile application [if available in Google Play Store and Apple App Store]. If your application is not yet published, you can send us apk file which will be plus point impression before actual interview.',
      'You will be assigned to multiple projects: Mainly CRM, E-commerce, Social Network app.',
    ],
    addInfo: [
      'Along with skills, he/she should be frank, curious, and problem solver.',
      'You need to have your own laptop.',
    ],
  },
  {
    id: '2',
    vacancy: '1',

    title: 'React Js Developer',
    jobTitle: 'Mid-level Developer',
    type: 'Remote',
    location: 'putalisadak, Kathmandu',
    date: '1 week ago',
    logo: 'https://assets.maccarianagency.com/the-front/logos/atlassian.svg',
    companyName: 'Atlassian',
    salary: 'Negotiable',
    educationRequirement:
      'Bachelors in Information Technology, Engineering and related field.[Education can be considered if you&re highly skilled at this job.]',
    employmentStatus: 'Full-time',
    jobReq: [
      'The PHP Developer is expected to be able to collaborate with preexisting projects that may have development tasks, including front- end, back- end, and database development.',
      'Developer will perform tasks related with web sites, applications, and rich multimedia experiences according to the brief and technical specifications.',
      'Developer must have strong experience and knowledge in PHP Framework Laravel.',
      'The applicant is expected to possess strong problem-solving skills, programming, testing, and troubleshooting skills.',
      'Continuously discover, evaluate, and implement new technologies to maximize development efficiency.',
      'Eagerness to contribute in a team-oriented environment.',
    ],
    exprences: ['Minimum 2-years of experience as a Core PHP Developer'],
    info: [
      'Your github url, and open source projects.',
      'Portfolio url - Can be web applications Mobile application [if available in Google Play Store and Apple App Store]. If your application is not yet published, you can send us apk file which will be plus point impression before actual interview.',
      'You will be assigned to multiple projects: Mainly CRM, E-commerce, Social Network app.',
    ],
    addInfo: [
      'Should have very strong knowledge of Core PHP.',
      'Able collaborate with preexisting projects.',
      'Must have outstanding coding skills & strong knowledge in, MySQL, RESTful API programming, third-party tools and experience in end to end software development.',
      'Hands of experience in CodeIgniter, WordPress & Laravel.',
      'Ability to take up R&D activities and resolve complex problems, work independently.',
      'Should write test cases & perform extensive self-testing.',
      'Proficient with design patterns (OOP, MVC, etc.)',
      'Experience of implementing and debugging of XML/JSON and using 3rd party API.',
      'Ability to integrate existing project to the mobile application. (Flutter preferred)',
    ],
  },
  {
    id: '3',
    vacancy: '1',

    title: '.NET Developer',
    jobTitle: 'Mid-level Developer',
    type: 'Full time',
    location: 'putalisadak, Kathmandu',
    date: '1 week ago',
    logo: 'https://assets.maccarianagency.com/the-front/logos/atlassian.svg',
    companyName: 'Atlassian',
    salary: 'Negotiable',
    educationRequirement:
      'Bachelors in Information Technology, Engineering and related field.[Education can be considered if you&re highly skilled at this job.]',
    employmentStatus: 'Full-time',
    jobReq: [
      'The PHP Developer is expected to be able to collaborate with preexisting projects that may have development tasks, including front- end, back- end, and database development.',
      'Developer will perform tasks related with web sites, applications, and rich multimedia experiences according to the brief and technical specifications.',
      'Developer must have strong experience and knowledge in PHP Framework Laravel.',
      'The applicant is expected to possess strong problem-solving skills, programming, testing, and troubleshooting skills.',
      'Continuously discover, evaluate, and implement new technologies to maximize development efficiency.',
      'Eagerness to contribute in a team-oriented environment.',
    ],
    exprences: ['Minimum 2-years of experience as a Core PHP Developer'],
    info: [
      'Your github url, and open source projects.',
      'Portfolio url - Can be web applications Mobile application [if available in Google Play Store and Apple App Store]. If your application is not yet published, you can send us apk file which will be plus point impression before actual interview.',
      'You will be assigned to multiple projects: Mainly CRM, E-commerce, Social Network app.',
    ],
    addInfo: [
      'Should have very strong knowledge of Core PHP.',
      'Able collaborate with preexisting projects.',
      'Must have outstanding coding skills & strong knowledge in, MySQL, RESTful API programming, third-party tools and experience in end to end software development.',
      'Hands of experience in CodeIgniter, WordPress & Laravel.',
      'Ability to take up R&D activities and resolve complex problems, work independently.',
      'Should write test cases & perform extensive self-testing.',
      'Proficient with design patterns (OOP, MVC, etc.)',
      'Experience of implementing and debugging of XML/JSON and using 3rd party API.',
      'Ability to integrate existing project to the mobile application. (Flutter preferred)',
    ],
  },
];

export const Feature = [
  {
    color: colors.green[500],
    title: 'Web App Development',
    subtitle: 'We make robust, fast and scalable system designs powered by microservices architecture',
    icon: <LanguageIcon />,
  },
  {
    color: colors.green[500],
    title: 'Mobile App Development',
    subtitle: 'We will build App for all stackholders of your business in Native X-platform.',
    icon: <AodIcon />,
  },

  {
    color: colors.green[500],
    title: 'Professional Software Development Programs',
    subtitle: 'Dive into career oriented and job ready IT training.',
    icon: <ComputerIcon />,
  },
  {
    color: colors.green[500],
    title: 'Remote US Job Placement',
    subtitle: 'We provide a full range of enterprise and mission IT support to top software companies in USA. Do you wish to work remotely?',
    // icon: <AttachMoneyIcon />,
    icon:(
      <img src="https://img.icons8.com/windows/32/000000/usa.png"  />    ),
  },
];

export const Review = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
];

export const ContactsDetail = [
  {
    label: 'Phone',
    value: '01-4221824,9881261300',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@achivergroups.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  // {
  //   label: 'Head Office',
  //   value: 'Putalisadak, Kathmandu, Nepal',
  //   icon: (
  //     <svg
  //       width={20}
  //       height={20}
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 20 20"
  //       fill="currentColor"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  //   weblink:
  //     'https://www.google.com/maps/place/Achiever+Groups+Software+%26+Research+Centre/@27.7021355,85.3200425,700m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39eb195da1bc6e81:0x554ecdb446d5b245!8m2!3d27.7021308!4d85.3222312',
  // },
  // {
  //   label: 'Facebook Page',
  //   value: '@achievergroups',
  //   icon: <FacebookIcon />,
  //   weblink: 'https://www.facebook.com/achievergroups',
  // },
  // {
  //   label: 'Instagram Page',
  //   value: 'achievergroups',
  //   icon: <InstagramIcon />,
  //   weblink: 'https://www.instagram.com/achievergroups/',
  // },
];

export const link = [
  {
    label: 'Head Office',
    value: 'Putalisadak, Kathmandu, Nepal',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    weblink: 'https://www.google.com/maps/place/Achiever+Groups+Software+%26+Research+Centre/@27.7021355,85.3200425,700m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39eb195da1bc6e81:0x554ecdb446d5b245!8m2!3d27.7021308!4d85.3222312'
  },
  {
    label: 'Facebook Page',
    value: '@achievergroups',
    icon: <FacebookIcon />,
    weblink: 'https://www.facebook.com/achievergroups'
  },
  {
    label: 'Instagram Page',
    value: 'achievergroups',
    icon: <InstagramIcon />,
    weblink: 'https://www.instagram.com/achievergroups/'
  },
];

export const patnerImg = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
  'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
  'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
  'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
];

export const gallery = [
  {
    src: 'gallary1.jpg',
    source: 'gallary1.jpg',
    rows: 3,
    cols: 4,
  },
  {
    src: 'gallary2.jpg',
    source: 'gallary1.jpg',
    rows: 1,
    cols: 2,
  },
  {
    src: 'gallary3.jpg',
    source: 'gallary3.jpg',
    rows: 1,
    cols: 1,
  },
  {
    src: 'gallary4.jpg',
    source: 'gallary4.jpg',
    rows: 1,
    cols: 1,
  },
  {
    src: ' gallary5.jpg',
    source: ' gallary5.jpg',
    rows: 2,
    cols: 2,
  },
  {
    src: ' gallary6.jpg',
    source: ' gallary6.jpg',
    rows: 1,
    cols: 2,
  },
  {
    src: 'gallary7.jpg',
    source: 'gallary7.jpg',
    rows: 1,
    cols: 2,
  },

];

export const teams = [
  {
    name: 'Suresh Lama',
    title: 'Senior Flutter Developer',
    avatar: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t31.18172-8/24291797_1945480512145616_6163976016830318206_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=84a396&_nc_ohc=ly7ZgmJKHusAX8id3TO&_nc_ht=scontent.fktm3-1.fna&oh=f17a730ee65dfae67c0397fbf69d6667&oe=61CC5F49',
  },
  {
    name: 'Sujan Neupane',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
  {
    name: 'Gorakh Raj Joshi',
    title: 'Senior JavaScript and React Developer',
    avatar: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/38858251_1895331040513633_5897772623269462016_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=19026a&_nc_ohc=Q8XogQD4qAMAX_JlwQd&_nc_ht=scontent.fktm3-1.fna&oh=c9ab1a62433bcc43875e7e4042833737&oe=61CA63E6',
  },
  {
    name: 'Raj Shukla',
    title: 'Senior Database Administrator',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
];


export const webWorks = [
  {
    title: 'Account Billing',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img47.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img47--dark.png',
  },
  {
    title: 'Signup Simple',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img37.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img37--dark.png',
  },
  {
    title: 'Signup Cover',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img38.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img38--dark.png',
  },
  {
    title: 'Signin Simple',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img39.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img39--dark.png',
  },
  {
    title: 'Signin Cover',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img40.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img40--dark.png',
  },
  {
    title: 'Password Reset Simple',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img41.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img41--dark.png',
  },
  {
    title: 'Password Reset Cover',
    href: '/password-reset-cover',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img42.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img42--dark.png',
  },
  {
    title: 'Error Simple',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img43.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img43--dark.png',
  },
  {
    title: 'Error Cover',
    href: '/web-service',
    cover:
      'https://assets.maccarianagency.com/screenshots/the-front/img44.png',
    coverDark:
      'https://assets.maccarianagency.com/screenshots/the-front/img44--dark.png',
  },

];

export const AppWork = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img48.jpg',
    description: 'Electric toothbrush, designed for you',
    title: 'Goby',
    color: '#183167',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img45.jpg',
    description: 'Just do it',
    title: 'Nike',
    color: '#CE371F',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img47.jpg',
    description: 'Curology custom skincare',
    title: 'Curology',
    color: '#ECB3BE',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img43.jpg',
    description: 'The world\'s best bikes and cycling gear',
    title: 'Trek',
    color: '#000000',
  },
];

export const tools = [
  '/html.png',
  '/css.png',
  '/blackjs.png',
  '/blacksql.png',
  '/blackreact.png',
  '/aws.png',
  '/mongoo.png',
  '/api.png',
  '/nodejs.png',
];

export const usefullLink = [
  {
    title: 'Home',
    link:'/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Web Development',
    link: '/web-service'
  },
  {
    title: 'App Developmentt',
    link: '/app-service'
  },
  {
    title: 'Software Development Traning',
    link: '/it-traning'
  },
  {
    title: 'Job Vavancies',
    link: '/job-listing'
  },
  {
    title: 'Internship',
    link: '/internship'
  },
  {
    title: 'Contact Ust',
    link: '/contact-page'
  },
  
];

export const workFlow = [
  {
    title: 'Comprehensive Company Analysis ',
    subtitle:
      'Our business analysts will dive deep into your company structure and business processes, to formulate a development plan that reflects the specifics of your work.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Architecture Prototyping and UX/UI Design',
    subtitle:
      'While prototyping apps, we pay close attention to user experience and interaction design to ensure that your application will render perfectly on both desktop and mobile devices.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'Prototype Testing',
    subtitle:
      'Our team performs early-stage testing of UX and UI functionality before developing the final version of the web app.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Front-End and Back-End Development',
    subtitle:
      'In web application development, we follow the latest trends and use the best technology stack to deliver top-notch custom web apps.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'QA and Software Testing',
    subtitle: 'We undertake full life cycle testing that covers all stages of project development from requirements testing to web app deployment.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'Deployment and Maintenance',
    subtitle:
      'We guarantee painless deployment to the customer’s platform and offer further support to ensure the most efficient and smooth operation of the system.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export const chooseAchiever = [
  'We have extensive experience in single-page applications development.',
  'We offer a web host that offers reliable security measures to guarantee your app security.',
  'We can create a Web app from scratch and ensure that it follows the needs of your business.',
  'We provide QA testing to make sure your app works flawlessly on all modern devices.',
];

export const AppTools = [
  {
    icon: '/react.png',
    title: 'React Native'
  },
  {
    icon: '/flutter.png',
    title: 'Flutter'
  }
];

export const mobAppDev = [
  {
    title: 'Full-cycle mobile application development',
    subtitle:
      'theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Mobile UX/ UI design and development',
    subtitle:
      'Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Cross-platform mobile app development',
    subtitle:
      'We\'ve written extensive documentation for components and tools, so you never have to reverse engineer anything.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

export const MobWork = [
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

export const Internship = [
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Consumer',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
    team: 'Internal tools',
    subtitle: 'Help us make the best decisions with qualitative experiments.',
  },
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Internal tools',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
    team: 'Consumer',
    subtitle: 'Help us make the best decisions with qualitative experiments.',
  },
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Consumer',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
];

export const services = [
  {
    id: '01',
    title: 'Web Development',
    link: '/web-service',
  },
  {
    id: '02',
    title: 'App Development',
    link: '/app-service',
  },
  {
    id: '03',
    title: 'Professional Software Development Programs',
    link: '/it-traning',
  },
];
export const career = [
  {
    id: '01',
    title: 'Job Vacancies',
    link: '/career-listing',
  },
  {
    id: '02',
    title: 'Internship',
    link: '/internship',
  },
];


export const courseImg = [
  {
    image: 'react.jpg',
    link: '/course-detail/React'
  },
  {
    image: 'mern.jpg',
    link: '/course-detail/MERN'
  },
  {
    image: '/jsimage.jpg',
    link: '/course-detail/JavaScript'
  },
  {
    image: 'java.jpg',
    link:'/course-detail/jAVA'
  },
  {
    image:'/flutter.jpg',
    link:'/course-detail/Flutter'
  },
  {
    image: 'digitalmarket.jpg',
    link: '/course-detail/Digital-Marketing'
  },
  {
    image:'db.jpg',
    link: '/course-detail/SQL'
  },
  
  {
    image:'qa.jpg',
    link: '/course-detail/Quality-Assurance'
  },
  {
    image: 'ml.jpg',
    link: '/course-detail/ML'
  },
];