import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

export const allProjects: Project[] = [
  {
    title: 'SCOOT - REIMAGINED',
    img: 'https://user-images.githubusercontent.com/29945147/187409070-f1e8291f-c127-4e2c-977c-6bf6f64e7a41.png',
    duration: 'AUG 2022 - SEP 2022',
    description:
      'The Singapore Airlines (SIA) App Challenge is an annual global hackathon to find innovative solutions to real-life industry challenges.\n' +
      'The project used TensorFlow Recommenders A.I., which considers user profiles and preferences to recommend activities, accommodations and other ancillary services to users post flight booking.\n' +
      'Our solution was served directly to the users with a friendly Progressive Web Application (PWA).',
    techStack: [
      { iconType: IconType.Ionic },
      { iconType: IconType.React },
      { iconType: IconType.Redux },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Tailwind },
      { iconType: IconType.Python },
      { iconType: IconType.TensorFlow },
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/SEAT-SIA-AppChallenge-2022' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/KquZZhJXFo5KU2P0QKsDtP/SIA-App-Challenge?node-id=300%3A1423' },
      { iconType: IconType.OpenNew, link: 'https://seat-scoot.netlify.app/' },
    ],
    others: [{ title: "About SIA's App Challenge 2022", link: 'https://appchallenge.singaporeair.com/en/challenges/students-2022' }],
    shields: [
      'https://img.shields.io/badge/-International%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Winner%20%F0%9F%8F%86-yellow',
      'https://img.shields.io/badge/-1st%20Place%F0%9F%A5%87%20-Success',
    ],
  },
];
