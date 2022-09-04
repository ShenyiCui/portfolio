import { PlusIcon } from '@heroicons/react/20/solid';
import { Event } from '@components/Experience';
import { IconType } from '@components/Icon';

export const experience: Event[] = [
  {
    jobTitle: 'Job Title',
    location: 'Location',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    duration: 'Sep XX - Jun XX',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.Redux }],
  },
  {
    jobTitle: 'Job Title',
    location: 'Location',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    duration: 'Sep XX - Jun XX',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.Redux }],
  },
];
