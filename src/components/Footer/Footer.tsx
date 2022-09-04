import React from 'react';

import Icon, { IconType } from '@components/Icon';

const Footer = () => {
  return (
    <div className='h-64 mt-8 flex justify-center'>
      <div className='h-full w-full max-w-7xl rounded-t-md bg-lightBlue flex flex-col items-center justify-center'>
        <h1 className='text-xl md:text-2xl font-montserrat font-bold'>Thanks for checking out my work!</h1>
        <h1 className='text-xl md:text-2xl font-montserrat font-bold text-darkBlue'>Let&apos;s Connect!</h1>
        <div className='flex space-x-5 my-2.5'>
          <Icon iconType={IconType.LinkedIn} vSpace='mt-0' link='https://www.linkedin.com/in/shenyi-cui-4b9b95211/' />
          <Icon iconType={IconType.Github} vSpace='mt-0' link='https://github.com/ShenyiCui' />
          <Icon iconType={IconType.Email} vSpace='mt-0' link='mailto:shenyicui@outlook.com' />
          <Icon iconType={IconType.Resume} vSpace='mt-0' link='mailto:shenyicui@outlook.com' />
        </div>
        <div className='mt-4 w-3/5 border-gray-300 border-t-2' />
        <p className='font-montserrat font-medium mt-3 text-base text-[#8C8C8C]'>Built by Shen Yi Cui</p>
      </div>
    </div>
  );
};

export default Footer;
