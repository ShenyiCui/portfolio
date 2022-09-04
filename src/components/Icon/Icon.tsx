import React from 'react';

import ionic from '@/assets/icons/ionic.svg';
import github from '@/assets/icons/github.svg';
import figma from '@/assets/icons/figma.svg';
import java from '@/assets/icons/java.svg';
import nodejs from '@/assets/icons/nodejs.svg';
import postgreSql from '@/assets/icons/postgresql.svg';
import python from '@/assets/icons/python.svg';
import react from '@/assets/icons/react.svg';
import redux from '@/assets/icons/redux.svg';
import tailwind from '@/assets/icons/tailwind-css.svg';
import tensorFlow from '@/assets/icons/tensor-flow.svg';
import typescript from '@/assets/icons/typescript.svg';
import openNew from '@/assets/icons/open-in-new.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import mail from '@/assets/icons/mail.svg';
import resume from '@/assets/icons/resume.svg';

export enum IconType {
  Figma = 'Figma/Design',
  Github = 'Github',
  Ionic = 'Ionic',
  Java = 'Java',
  NodeJs = 'Node.Js',
  PostgreSql = 'PostgreSQL',
  Python = 'Python',
  React = 'React',
  Redux = 'Redux',
  Tailwind = 'TailwindCSS',
  TensorFlow = 'TensorFlow',
  TypeScript = 'TypeScript',
  OpenNew = 'Visit',
  LinkedIn = 'LinkedIn',
  Email = 'Email',
  Resume = 'Resume',
}

const IconImage = {
  'Figma/Design': figma,
  Github: github,
  Ionic: ionic,
  Java: java,
  'Node.Js': nodejs,
  PostgreSQL: postgreSql,
  Python: python,
  React: react,
  Redux: redux,
  TailwindCSS: tailwind,
  TensorFlow: tensorFlow,
  TypeScript: typescript,
  Visit: openNew,
  LinkedIn: linkedin,
  Email: mail,
  Resume: resume,
};

export type IconObject = {
  iconType: IconType;
  link?: string;
  vSpace?: string;
};

const openLink = (link: string) => {
  window.open(link, '_blank');
};

const Icon = ({ iconType, link, vSpace }: IconObject) => {
  return (
    <div onClick={() => link && openLink(link)} className={`w-8 grid grid-cols-1 h-5 group ${link && 'cursor-pointer'}`}>
      <div className='flex justify-center'>
        <img src={IconImage[iconType]} style={{ width: 30 }} className='m-0' />
      </div>
      <div className={`hidden justify-center group-hover:flex ${vSpace ? vSpace : '-mt-2'}`}>
        <p className='text-[10px] text-black m-0'>{iconType}</p>
      </div>
    </div>
  );
};

export default Icon;
