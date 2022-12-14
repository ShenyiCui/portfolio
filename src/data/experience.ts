import { PlusIcon } from '@heroicons/react/20/solid';
import { Event } from '@components/Experience';
import { IconType } from '@components/Icon';

export const experience: Event[] = [
  {
    jobTitle: 'Frontend Engineering Intern',
    location: 'Dyslexia Association of Singapore',
    blurb: 'DAS is an organisation that helps diagnose and educate dyslexic children.',
    points: [
      'Built an online learning platform with React and Typescript that helped dyslexic children overcome their learning difficulties.',
      'Implemented an interactive, responsive canvas that allowed students to draw and practice words.',
      'Streamlined staff workflow with an in-house student course management system.',
      'Created using Recoil, React, Typescript and TailwindCSS with Storybook for unit testing.',
    ],
    duration: 'Aug 2022 - Current',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.React },
      { iconType: IconType.Recoil },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Tailwind },
      { iconType: IconType.Storybook },
    ],
  },
  {
    jobTitle: 'Full Stack Engineering Intern',
    location: 'Diabetes Singapore',
    blurb: 'DS is an organisation that helps provide diagnosis, treatment and community to diabetes patients.',
    points: [
      'Created a new web application that overhauled Diabetes Singapore’s previous Excel-based workflow into an automated website management system that streamlined their planning.',
      'Developed relational databases with PostgreSQL and REST APIs with TypeScript and Express.',
      'Produced a responsive, interactive UI with React and Redux.',
      'Awarded a Plaque from the Minister of Education in recognition of the utility of our work.',
    ],
    duration: 'Aug 2021 - Sep 2022',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.React },
      { iconType: IconType.Redux },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Tailwind },
      { iconType: IconType.Sequelize },
      { iconType: IconType.PostgreSql },
      { iconType: IconType.ExpressJs },
      { iconType: IconType.NodeJs },
    ],
  },
  {
    jobTitle: 'Full Stack Engineering Intern',
    location: 'CVWO',
    blurb: 'CVWO builds technology infrastructure for voluntary welfare organisations (VWO) and more.',
    points: [
      'Maintained relational databases on PostgreSQL and REST APIs with Ruby on Rails for Lion Befrienders - an organisation that provides friendship and care for seniors to age.',
      'Spearheaded the conversion and upgrade of Ruby 2.5.3 and Rails 5.2.1 to Ruby 3.0.3 and Rails 6.1.5.',
      'Built Progressive Web Applications with React+Ionic and maintained a codebase that’s 13 years old.',
    ],
    duration: 'May 2022 - Aug 2022',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.Ionic },
      { iconType: IconType.React },
      { iconType: IconType.Redux },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Ruby },
      { iconType: IconType.Rails },
    ],
  },
  {
    jobTitle: 'Full Stack Engineer',
    location: 'Source Academy',
    blurb: 'Source Academy is a site used to teach first-year Computer Science students basic programming concepts.',
    points: [
      'Optimized the backend query for experience points using SQL with Ecto in Elixir.',
      'Enhanced the aesthetics and utility of the achievement module in the frontend by displaying tutor feedback.',
    ],
    duration: 'Jan 2022 - Aug 2022',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.React },
      { iconType: IconType.Redux },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Elixir },
      { iconType: IconType.Erlang },
      { iconType: IconType.Ecto },
    ],
  },
  {
    jobTitle: 'Software Engineering Intern',
    location: 'LittleLives',
    blurb: 'LittleLives is an education technology firm that provides student management software to schools.',
    points: [
      'Designed an integrated ticket-based issue tracker between multiple services to create a seamless flow of information from clients, to customer service, to software engineers.',
      'Implemented Webhooks and REST APIs to connect multiple services using NodeJS.',
      'Hosted on Amazon Web Services (AWS) Lambda and AWS API Gateway.',
      'Code is in production and used by  500 employees, increasing productivity.',
    ],
    duration: 'Jun 2021 - Aug 2021',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.NodeJs },
      { iconType: IconType.JavaScript },
      { iconType: IconType.AwsApiGateway },
      { iconType: IconType.AwsLambda },
    ],
  },
  {
    jobTitle: 'Software Engineering Intern',
    location: 'Xctuality',
    blurb: 'Xctuality is a Virtual Reality startup that offers unique 360° and immersive solutions.',
    points: [
      'Conceptualized and developed a unique decentralized solution to track user preferences through blockchain technology using NodeJS, Express and REST APIs.',
      'Developed software allowed for different web applications to share information anonymously.',
    ],
    duration: 'Jun 2021 - Aug 2021',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.NodeJs }, { iconType: IconType.JavaScript }, { iconType: IconType.ExpressJs }],
  },
];
