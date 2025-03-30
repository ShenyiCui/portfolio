import { IconType } from '@/components/Icon';
import { PlusIcon } from '@heroicons/react/20/solid';

[
  {
    jobTitle: 'Fullstack Engineer (Dyslexia Association of Singapore)',
    location: 'Google Developer Student Clubs',
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
    jobTitle: 'Full Stack Engineer (Diabetes Singapore)',
    location: 'Google Developer Student Clubs',
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
];
