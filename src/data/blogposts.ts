import sightwordsPhoto from '@/assets/images/sightwords.webp';
import siewdaiPhoto from '@/assets/images/siewdai.jpeg';
import configbaseduiPhoto from '@/assets/images/configbasedui.gif';
import apireplayPhoto from '@/assets/images/apireplay.png';
import Routes from '@/utilities/routes';

export const blogPosts = [
  {
    id: 1,
    title: 'Project Siew Dai',
    subtitle: 'A Data Management system in collaboration with Diabetes Singapore',
    imageUrl: siewdaiPhoto,
    route: Routes.blogposts.siewdai,
    tags: ['Tech4Good', 'Community'],
  },
  {
    id: 2,
    title: 'Project Sightwords',
    subtitle: 'An education mobile application for students and teachers',
    imageUrl: sightwordsPhoto,
    route: Routes.blogposts.sightwords,
    tags: ['Education', 'Tech4Good', 'Community'],
  },
  // {
  //   id: 3,
  //   title: 'Building Config-Based User Interfaces',
  //   subtitle: 'My work at TikTok building a flexible, multi-tenant low-code platform',
  //   imageUrl: configbaseduiPhoto,
  //   route: Routes.blogposts.siewdai,
  //   tags: ['Internship', 'Corporate', 'Technical'],
  // },
  // {
  //   id: 4,
  //   title: 'API Replay Testing',
  //   subtitle: 'My work at Bytedance building a distributed API regression testing framework',
  //   imageUrl: apireplayPhoto,
  //   route: Routes.blogposts.siewdai,
  //   tags: ['Internship', 'Corporate', 'Technical'],
  // },
];
