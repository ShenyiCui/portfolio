import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

import dulwichBookingImg from '@/assets/images/dulwich-bookings.png';
import recyclopsImg from '@/assets/images/recyclops.png';
import issueTracker from '@/assets/images/issue-tracker.png';
import hireHer from '@/assets/images/HireHer.png';
import ecoQuestImg from '@/assets/images/EcoQuestImg.png';

export const allProjects: Project[] = [
  {
    title: 'ECOQUEST',
    img: ecoQuestImg,
    duration: 'MAR 2023',
    description:
      'EcoQuest is a mobile app designed to engage users in environmental conservation for the Google Solutions Hackathon 2023. It uses machine learning for object detection to validate user submissions, allowing users to earn points for completing sustainability challenges.',
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
      [
        { iconType: IconType.GoogleCloud },
        { iconType: IconType.Sequelize },
        { iconType: IconType.PostgreSql },
        { iconType: IconType.ExpressJs },
        { iconType: IconType.NodeJs },
      ],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/sus-tainability' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/RElz1keXSeEx1dNBfV8eJv/SUS-App?node-id=1-4&t=ok8L4wSiVUBHcHc6-0' },
      { iconType: IconType.Youtube, link: 'https://www.youtube.com/watch?v=a2bNogfSkVE' },
      { iconType: IconType.OpenNew, link: 'https://sus-tainability.netlify.app/story' },
    ],
    others: [{ title: 'About Google Solutions 2023', link: 'https://github.com/sus-tainability' }],
    shields: [
      'https://img.shields.io/badge/-International%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Winner%20%F0%9F%8F%86-yellow',
      'https://img.shields.io/badge/-Top%20100%20%F0%9F%8F%85-success',
    ],
  },
  {
    title: 'RECYCLOPS',
    img: recyclopsImg,
    duration: 'JUL 2022',
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
      { iconType: IconType.Youtube, link: 'https://www.youtube.com/watch?v=pyXI4r7pX9s' },
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
    others: [{ title: 'Previous Project Iteration (HTML, CSS, JS)', link: 'https://www.ivykang.com/uiux/dcb-bookings' }],
    shields: ['https://img.shields.io/badge/-Team%20Lead-informational'],
  },
  {
    title: 'SCOOT - REIMAGINED',
    img: 'https://user-images.githubusercontent.com/29945147/188915459-81a963ea-9417-4a74-a299-81dc6b401344.png',
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

export const otherProjects: Project[] = [
  {
    title: 'TODO - TASK MANAGER',
    img: 'https://user-images.githubusercontent.com/29945147/150669251-9530c62f-9f59-4b7e-b183-617b49ba1c5a.png',
    duration: 'DEC 2021 - JAN 2022',
    description:
      'A beautifully designed desktop web application aimed to help students keep track of their daily tasks. It was built with an integrated calendar subscription API that users can use to subscribe to their assignments.',
    techStack: [
      [
        { iconType: IconType.React },
        { iconType: IconType.Redux },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Ruby },
        { iconType: IconType.Rails },
        { iconType: IconType.PostgreSql },
      ],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/Task-Mangement-CVWO' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/qrVg38n7JtduNVhgTLP7NH/Task-Management-UI-(CVWO)?node-id=0%3A1' },
      { iconType: IconType.OpenNew, link: 'https://laughing-bassi-1b3575.netlify.app/' },
    ],
  },
  {
    title: 'GITHUB ISSUES TRACKER',
    img: issueTracker,
    duration: 'JUL 2021',
    description:
      'A webhook built to be an internal tracking tool - interfacing with GitHub Issues and Google Sheets API to log the issues of a given repository.',
    techStack: [[{ iconType: IconType.NodeJs }, { iconType: IconType.AwsApiGateway }, { iconType: IconType.AwsLambda }]],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/ShenyiCui/Github-Issue-Tracker' },
      {
        iconType: IconType.OpenNew,
        link: 'https://docs.google.com/spreadsheets/d/1G37lTVdQRxUE_ewgEAosN_ZBeNRTPwOsVvea4QdE_I4/edit?usp=sharing',
      },
    ],
  },
  {
    title: 'NEUTRALIZEIT',
    img: hireHer,
    duration: 'MAR 2022',
    description:
      'A Google Chrome extension that replaces common gender coded words with neutral ones. Intended to be used to remove biases when searching for jobs.',
    techStack: [[{ iconType: IconType.JavaScript }, { iconType: IconType.JQuery }]],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/DSC-HackForGood-2022/NeutralizeIt' },
      {
        iconType: IconType.DevPost,
        link: 'https://devpost.com/software/hireher-67b4ou?ref_content=my-projects-tab&ref_feature=my_projects',
      },
      {
        iconType: IconType.OpenNew,
        link: 'https://dsc-hackforgood-2022.github.io/NeutralizeIt/',
      },
    ],
    shields: [
      'https://img.shields.io/badge/-National%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Finalist%20%F0%9F%A5%87%20-Success',
    ],
    others: [
      { title: 'About GDSC Hack For Good', link: 'https://hfg2022.devpost.com/' },
      { title: 'Pitch Deck', link: 'https://docs.google.com/presentation/d/1Mk-bwgrNXrJeNbdbPV4ZVcQKJinpJcj2DpH_2wOAWr0/edit?usp=sharing' },
    ],
  },
  {
    title: 'DATA HASH VERIFICATION',
    duration: 'MAR 2021',
    description:
      'The purpose of this program is to ensure that data integrity is maintained during data transfer.\n' +
      "It's a windows AutoIt script (compiled .exe) that will recursively hash every file in a given root directory. Generates a comparable Hash Log.",
    techStack: [[{ iconType: IconType.AutoIt }]],
    links: [{ iconType: IconType.Github, link: 'https://github.com/ShenyiCui/Data-Transfer-Hash-Verification' }],
  },
];
