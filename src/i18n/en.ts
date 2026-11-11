// Textos em inglês. A estrutura deve ser idêntica à de pt.ts.
export const en = {
  lang: 'en',
  htmlLang: 'en',
  title: 'Denis Silva — Senior Full Stack Developer',
  description:
    'Senior Full Stack Developer and Tech Lead with 13+ years of experience. PHP, Laravel, Vue.js and AWS — from e-commerce to scalable SaaS platforms. Available for remote work.',
  switchTo: { label: 'PT', full: 'Português', href: '/' },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Resume', href: '#resume' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: "Let's talk",
  hero: {
    badge: 'Available for remote work',
    eyebrow: "Hello, I'm Denis Silva",
    titlePre: 'Well-built software, ',
    titleHl: 'without the complication.',
    intro:
      "I'm a Full Stack developer, and for over 13 years I've helped companies bring projects to life — from online stores to cloud platforms. I work with PHP, Laravel and Vue.js, with attention to detail and honest conversation from start to finish. And I use AI every day to deliver faster, without compromising quality.",
    secondary: 'What I do',
    years: 'years of<br />experience',
  },
  statement: {
    pre: 'Every project starts with a good question: ',
    hl: 'what really needs to work?',
    post: '',
  },
  services: {
    eyebrow: 'My services',
    title: 'What I do',
    items: [
      {
        icon: 'lucide:layout-dashboard',
        title: 'SaaS & Custom Systems',
        text: 'Architecture and delivery of full platforms with Laravel and Vue.js — from reservations and automated billing to operations management.',
      },
      {
        icon: 'lucide:shopping-cart',
        title: 'E-commerce',
        text: 'Stores on Magento, VTEX and WooCommerce, with payment setup, business rules and a focus on performance and conversion.',
      },
      {
        icon: 'lucide:globe',
        title: 'WordPress & SEO',
        text: 'Fast, institutional and custom WordPress sites, built for SEO and easy day-to-day maintenance.',
      },
      {
        icon: 'lucide:plug',
        title: 'APIs & Integrations',
        text: 'REST APIs and real-time, two-way integrations with ERP systems such as TOTVS Protheus and external services.',
      },
      {
        icon: 'lucide:cloud',
        title: 'Cloud Infrastructure',
        text: 'AWS (EC2, S3), asynchronous queues with SQS and background processes managed by Supervisor.',
      },
      {
        icon: 'lucide:users',
        title: 'Technical Leadership',
        text: 'Leading teams, running sprints, managing technical debt and setting up QA processes with regression test suites.',
      },
    ],
  },
  skills: {
    eyebrow: 'Technologies',
    title: 'My stack',
    groups: [
      { name: 'Back-end', items: ['PHP', 'Laravel', 'Java', 'Spring', 'Node.js', 'REST APIs', 'SQS'] },
      { name: 'Front-end', items: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Angular'] },
      { name: 'Cloud & Infra', items: ['AWS', 'EC2', 'S3', 'Supervisor'] },
      { name: 'CMS & E-commerce', items: ['WordPress', 'WooCommerce', 'VTEX', 'Magento'] },
      { name: 'Database', items: ['MySQL', 'TOTVS ERP'] },
      { name: 'AI', items: ['AI-assisted development', 'Claude Code'] },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
  },
  resume: {
    eyebrow: 'years of experience',
    title: 'My resume',
    experienceTitle: 'Experience',
    stackLabel: 'Stack',
    jobs: [
      {
        role: 'Senior Full Stack Developer & Tech Lead',
        company: 'AVANTTO',
        place: 'São Paulo (remote)',
        period: 'Aug 2021 — Present',
        metrics: [],
        bullets: [
          'Tech Lead on a proprietary SaaS platform for executive aviation.',
          'Two-way integration with the TOTVS Protheus ERP, keeping critical business data in sync in real time.',
          'Automated billing for multiple contract models.',
          'Set up a formal QA process with a regression test suite, improving delivery stability.',
          'AI in the team’s development workflow, supporting test generation and code review, speeding up delivery without compromising quality.',
          'AWS infrastructure with asynchronous SQS queues and background processes managed by Supervisor.',
        ],
        stack: ['PHP', 'Laravel', 'Vue.js', 'AWS', 'SQS', 'MySQL', 'TOTVS ERP'],
      },
      {
        role: 'Front-End Developer',
        company: 'TATIX',
        place: 'São Paulo',
        period: 'Dec 2020 — Aug 2021',
        metrics: [],
        bullets: [
          'Front-end for mid-size and large Magento e-commerce clients, focused on performance, responsiveness and UX/UI guidelines.',
          'Advanced theme and template customization with SASS/LESS, ensuring cross-browser compatibility in high-traffic stores.',
        ],
        stack: ['Magento', 'HTML', 'CSS', 'LESS/SASS', 'JavaScript', 'jQuery'],
      },
      {
        role: 'Full Stack Developer',
        company: 'AGÊNCIA ILI',
        place: 'São Paulo',
        period: 'May 2019 — Dec 2020',
        metrics: [],
        bullets: [
          'Institutional sites and custom e-commerce on WordPress/WooCommerce, focused on performance, SEO and easy maintenance.',
          'VTEX store implementation, including payment methods, business rules and integrations with external APIs.',
        ],
        stack: ['PHP', 'WordPress', 'WooCommerce', 'VTEX', 'JavaScript'],
      },
      {
        role: 'Full Stack Developer',
        company: 'INPE / CPTEC',
        place: 'Cachoeira Paulista',
        period: 'Jan 2009 — Jan 2019',
        metrics: [],
        bullets: [
          'Development of web systems and platforms in Java (Spring and JSP) for the Brazilian National Institute for Space Research, on projects of major scientific and social relevance.',
          'Created SOS-Chuva — an award-winning real-time weather observation system that combines satellites, radars and numerical simulations for citizens and Civil Defense.',
        ],
        stack: ['Java', 'Spring', 'JSP', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
    educationTitle: 'Education',
    degree: {
      title: 'Associate degree in Information Technology Management',
      place: 'FATEC Guaratinguetá',
      note: 'Completed in 2017',
    },
    awardTitle: 'Award',
    award: {
      title: 'Péter Murányi Award',
      year: '2009',
      text: 'Recognition for SOS-Chuva, a real-time weather forecasting system that integrates satellite, radar and numerical simulation data — a kind of "weather Waze" for citizens, Civil Defense and city governments.',
    },
  },
  clients: {
    eyebrow: 'Best customers',
    title: 'Selected<br />clients',
  },
  contact: {
    eyebrow: 'Contact',
    titlePre: "Let's build<br />something ",
    titleHl: 'great.',
    name: 'Name',
    email: 'E-mail',
    subject: 'Subject',
    message: 'Message',
    send: 'Send message',
    invalid: 'Please fill in your name, a valid e-mail and a message.',
    sending: 'Sending…',
    ok: 'Thanks! Your message was sent. I’ll get back to you soon.',
    error: 'Could not send right now. Please e-mail me directly.',
  },
  footer: {
    rights: 'All rights reserved.',
    top: 'Back to top',
  },
  a11y: { menu: 'Open menu', mainNav: 'Main', portrait: 'Portrait of Denis Silva', stack: 'Main stack' },
};

export type Dict = typeof en;
