export default {
  name: 'Eric Furspan',
  title: 'Software Engineer',
  email: 'eric.furspan@gmail.com',
  about: [
    'Software Engineer based in New York. Passionate about crafting engaging & intuitive user experiences on the web.',
  ],
  expertise: [
    'Designing, developing, and planning React applications.',
    'Fostering usability, accessibility, and web security.',
    'Enhancing code quality, scalability, and maintainability.',
    'Writing end-to-end & unit tests, maintaining CI/CD pipelines, and automating routine tasks.',
    'Reducing developer friction, implementing best practices, and modernizing legacy codebases.',
    'Debugging, troubleshooting, analytics & performance monitoring, and writing technical documentation.',
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'React-Native',
    'Redux',
    'Node.js',
    'Jest',
    'Python',
    'Webpack',
    'REST APIs',
    'GraphQL',
    'Postgres',
    'MongoDB',
    'Git',
    'AWS',
    'JIRA',
    'Figma',
  ],
  resumeViewUrl:
    'https://docs.google.com/document/d/e/2PACX-1vRFYzxx4MwLb7-eZOtluuLsJn2yi6-IbryPkOfAKq3XjJIdSEfcQdAz_FPs7tpKJz3IVBQuJRLX0W1o/pub?embedded=true',
  resumeDownloadUrl:
    'https://docs.google.com/document/d/1DuTTxyWvfNpXmj2qNrJnrkcUS2x6OG4cKsmsgyuTm-4/export?format=pdf',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/ericfurspan',
      tooltipText: 'github.com/ericfurspan',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eric-furspan/',
      tooltipText: 'linkedin.com/in/eric-furspan/',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/5792155/eric-furspan?tab=topactivity',
      tooltipText: 'StackOverflow',
    },
    {
      name: 'daily.dev',
      url: 'https://app.daily.dev/ericfurspan',
      tooltipText: 'app.daily.dev/ericfurspan',
      customIcon: true,
    },
    // { name: 'Codepen', url: 'https://codepen.io/ericfurspan' },
  ],
  projects: [
    {
      title: 'Ticker Lookup',
      subtitle: 'Easily look up key financial data for any stock.',
      liveUrl: 'https://ticker-lookup.netlify.app/.netlify/functions/lookup',
      sourceUrl: 'https://github.com/ericfurspan/ticker-lookup',
      imgUrl: '',
      tools: ['nodejs', 'typescript', 'netlify', 'alphavantage'],
    },
    {
      title: 'Local Hoops',
      subtitle: 'Find basketball courts, anywhere.',
      liveUrl: 'https://apps.apple.com/us/app/local-hoops/id1452756521',
      sourceUrl: 'https://github.com/ericfurspan/Local-Hoops',
      imgUrl: '/local-hoops.svg',
      tools: ['react-native', 'javascript', 'firebase', 'xcode'],
    },
    {
      title: 'Reps for Responders',
      subtitle: 'Giving First Responders a place to feel, heal & thrive.',
      liveUrl: 'https://repsforresponders.org',
      sourceUrl: 'https://github.com/ericfurspan/rfr',
      imgUrl: '/rfr.png',
      tools: ['react', 'javascript', 'chakra-ui', 'gatsbyjs'],
    },
    {
      title: 'Local Hoops Map',
      subtitle: 'Never Stop Searching For That Perfect Hoop.',
      liveUrl: 'https://local-hoops.com/pages/map',
      sourceUrl: '', // https://www.linkedin.com/company/localhoops1
      imgUrl:
        'https://cdn.sanity.io/images/vb687n4o/production/d799d870e76a27e388bf24146f4914ce15547acd-1569x1056.svg',
      tools: ['react', 'javascript', 'chakra-ui'],
    },
    {
      title: 'Personal Page',
      subtitle: 'This website.',
      liveUrl: 'https://ericfurspan.com/',
      sourceUrl: 'https://github.com/ericfurspan/portfolio-vite',
      // imgUrl: '/ef-logo.png',
      tools: ['react', 'typescript', 'material-ui', 'vitejs'],
    },
    {
      title: 'Documentation',
      subtitle:
        'A personal curation of notes, guides, & best-practices on various software development topics.',
      liveUrl: 'https://ericfurspan.github.io/docs/',
      sourceUrl: 'https://github.com/ericfurspan/docs',
      imgUrl: '',
      tools: ['github-pages', 'markdown'],
    },
  ],
};
