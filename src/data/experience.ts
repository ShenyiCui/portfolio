import { PlusIcon } from '@heroicons/react/20/solid';
import { Event } from '@components/Experience';
import { IconType } from '@components/Icon';

export const experience: Event[] = [
  {
    jobTitle: 'Frontend Engineering Intern',
    location: 'TikTok',
    blurb: 'TikTok is a social media platform that allows users to create and share short videos.',
    points: [
      'Collaborated on revamp of TikTok’s moderation page, leveraging React, TypeScript with SASS and Go, to create pixel-perfect reusable components resulting in a 50% improvement in overall user satisfaction.',
      'Worked with Quality Assurance and Product Managers to conceptualize and deliver a solo feature, utilizing React with Go, introducing an alert system for handling incorrect punishments, resulting in 90% reduction of issue tickets – understanding the product and software development life cycle.',
      'Delivered informative presentations on complex technical topics, including React internals (renderer), bundlers (Webpack, Rollup), and modern state management, showcasing in-depth knowledge and expertise in these areas.',
      'Mitigated technical debt by incrementally refactoring crucial parts of codebase. Adopted best practices to build modern, and reusable components, resulting in a significant enhancement in code quality and maintainability.',
    ],
    duration: 'May 2023 - Aug 2023',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.React }, { iconType: IconType.TypeScript }, { iconType: IconType.Go }],
  },
  {
    jobTitle: 'Frontend Engineering Intern',
    location: 'Datature',
    blurb: 'Datature is a company that builds no-code solutions to annotate, train, visualise, and deploy computer vision models',
    points: [
      'Translated Legacy Class Based Components to Functional Components to improve code readability and support with hooks.',
      'Optimized site load time by implementing virtualization for asset lists.',
      'Built a custom node-based access control flow using React Flow.',
      'Implemented scalable CDP code using JS event delegation to track user clicks on the website.',
      "Revamped the sidebar on Datature's site by building a new collapsible design from scratch using React.",
      'Developed a new login page with Auth0 authentication to improve user security and access control.',
    ],
    duration: 'Jan 2023 - Apr 2023',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.NextJs },
      { iconType: IconType.React },
      { iconType: IconType.TypeScript },
      { iconType: IconType.BlueprintJs },
    ],
  },
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
    duration: 'Aug 2022 - Aug 2023',
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
      'Maintained PostgreSQL relational databases and Ruby on Rails REST APIs for Lion Befrienders, an organization dedicated to providing senior care and companionship.',
      'Led the upgrade of Ruby 2.5.3 and Rails 5.2.1 to Ruby 3.0.3 and Rails 6.1.5.',
      'Developed Progressive Web Applications using React and Ionic, and maintained a 13-year-old codebase.',
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
      { iconType: IconType.BlueprintJs },
      { iconType: IconType.Elixir },
      { iconType: IconType.Erlang },
      { iconType: IconType.Ecto },
    ],
  },
  {
    jobTitle: 'Backend Engineering Intern',
    location: 'LittleLives',
    blurb: 'LittleLives is an education technology firm that provides student management software to schools.',
    points: [
      'Developed an integrated ticket-based issue tracker to enable seamless flow of information between clients, customer service, and software engineers.',
      'Utilized NodeJS to implement Webhooks and REST APIs to connect multiple services.',
      'Hosted the application on Amazon Web Services (AWS) Lambda and AWS API Gateway.',
      'Successfully deployed the code in production, utilized by 500 employees, resulting in increased productivity.',
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
