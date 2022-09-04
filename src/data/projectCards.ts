import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

export const allProjects: Project[] = [
  {
    title: "Singapore Airlines' App Challenge 2022",
    img: 'https://user-images.githubusercontent.com/29945147/187409070-f1e8291f-c127-4e2c-977c-6bf6f64e7a41.png',
    duration: 'AUG 2022 - SEP 2022',
    description: 'test test test test',
    techStack: [
      { iconType: IconType.Ionic },
      { iconType: IconType.React },
      { iconType: IconType.Redux },
      { iconType: IconType.TypeScript },
      { iconType: IconType.Tailwind },
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/SEAT-SIA-AppChallenge-2022' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/KquZZhJXFo5KU2P0QKsDtP/SIA-App-Challenge?node-id=300%3A1423' },
      { iconType: IconType.OpenNew, link: 'https://seat-scoot.netlify.app/' },
    ],
    others: [{ title: "Singapore Airlines' App Challege 2022", link: 'https://appchallenge.singaporeair.com/en/challenges/students-2022' }],
  },
];
