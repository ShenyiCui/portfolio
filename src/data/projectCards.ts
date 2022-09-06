import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

import dulwichBookingImg from '@/assets/images/dulwich-bookings.png';
import recyclopsImg from '@/assets/images/recyclops.png';

export const allProjects: Project[] = [
  {
    title: 'RECYCLOPS',
    img: recyclopsImg,
    duration: 'AUG 2022 - SEP 2022',
    description:
      'A Progressive Web App that aims to simplify recycling for Singaporeans. \n' +
      'Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more.',

    techStack: [
      [
        { iconType: IconType.Ionic },
        { iconType: IconType.React },
        { iconType: IconType.Redux },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Tailwind },
        { iconType: IconType.Python },
        { iconType: IconType.PyTorch },
      ],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/Recyclops-LifeHack-2022-Singapore' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/Von8ACBD5yA7R6gY5gBqIv/Recyclops?node-id=0%3A1' },
      { iconType: IconType.DevPost, link: 'https://devpost.com/software/recyclops-6lyh30' },
      { iconType: IconType.OpenNew, link: 'https://recyclops.netlify.app/' },
    ],
    others: [{ title: 'About LifeHack', link: 'https://lifehack-2022.devpost.com/' }],
    shields: [
      'https://img.shields.io/badge/-National%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Winner%20%F0%9F%8F%86-yellow',
      'https://img.shields.io/badge/-Theme%20Best%20%F0%9F%A5%87%20-Success',
    ],
  },
  {
    title: 'DULWICH BOOKINGS',
    img: dulwichBookingImg,
    duration: 'MAY 2022 - SEP 2022',
    description:
      'Dulwich is a School with many branches worldwide, teaching students from kindergarten to high school. There are many valuable and highly contested resources around all Dulwich schools with no proper solution to manage them.' +
      '\nDulwich Bookings is the 3rd iteration of solutions that allows staff to dynamically create resources for students and teachers to book.',
    techStack: [
      [
        { iconType: IconType.MaterialUI },
        { iconType: IconType.React },
        { iconType: IconType.Redux },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Tailwind },
        { iconType: IconType.Sequelize },
        { iconType: IconType.PostgreSql },
      ],
      [{ iconType: IconType.NodeJs }, { iconType: IconType.ExpressJs }],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/Dulwich-Bookings' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/lRvJbetOcTOr0CAhfuB5RS/Dulwich-Bookings?node-id=39%3A39' },
      { iconType: IconType.OpenNew, link: 'https://dulwich-bookings.netlify.app/' },
    ],
    shields: ['https://img.shields.io/badge/-Team%20Lead-informational'],
  },
  {
    title: 'SCOOT - REIMAGINED',
    img: 'https://user-images.githubusercontent.com/29945147/187409070-f1e8291f-c127-4e2c-977c-6bf6f64e7a41.png',
    duration: 'AUG 2022 - SEP 2022',
    description:
      'The Singapore Airlines (SIA) App Challenge is an annual global hackathon to find innovative solutions to real-life industry challenges.\n' +
      'The project used TensorFlow Recommenders A.I., which considers user profiles and preferences to recommend activities, accommodations and other ancillary services to users post flight booking.\n' +
      'Our solution was served directly to the users with a friendly Progressive Web Application (PWA).',
    techStack: [
      [
        { iconType: IconType.Ionic },
        { iconType: IconType.React },
        { iconType: IconType.Redux },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Tailwind },
        { iconType: IconType.Python },
        { iconType: IconType.TensorFlow },
      ],
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
      'https://img.shields.io/badge/-1st%20Place%20%F0%9F%A5%87%20-Success',
    ],
  },
];
