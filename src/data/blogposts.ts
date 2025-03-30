import sightwordsPhoto from '@/assets/images/sightwords.webp';
import siewdaiPhoto from '@/assets/images/siewdai.jpeg';
import configbaseduiPhoto from '@/assets/images/configbasedui.gif';
import apireplayPhoto from '@/assets/images/apireplay.png';

export const blogPosts = [
  {
    id: 1,
    title: 'Project Siew Dai',
    subtitle: 'A Data Management system in collaboration with Diabetes Singapore',
    imageUrl: siewdaiPhoto,
    tags: ['Tech4Good', 'Community'],
  },
  {
    id: 2,
    title: 'Project Sightwords',
    subtitle: 'An education mobile application for students and teachers',
    imageUrl: sightwordsPhoto,
    tags: ['Education', 'Tech4Good', 'Community'],
  },
  {
    id: 3,
    title: 'Building Config-Based User Interfaces',
    subtitle: 'My work at TikTok building a flexible, multi-tenant low-code platform',
    imageUrl: configbaseduiPhoto,
    tags: ['Internship', 'Corporate', 'Technical'],
  },
  {
    id: 4,
    title: 'API Replay Testing',
    subtitle: 'My work at Bytedance building a distributed API regression testing framework',
    imageUrl: apireplayPhoto,
    tags: ['Internship', 'Corporate', 'Technical'],
  },
];
