import React from 'react';

import portrait from '@/assets/images/portrait.svg';
import Routes from '@/utilities/routes';
import wave from '@/assets/icons/waving.svg';

const Introduction = () => {
  return (
    <div className='w-full flex justify-center mb-[290px] md:mt-5'>
      {/* Small Screen Portrait */}
      <div className='relative w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-2 px-5 md:px-12'>
        <div className='flex justify-center md:hidden'>
          <div className='relative rounded-full w-60 h-60 my-5 bg-lightBlue'>
            <img src={portrait} className='absolute left-8 top-8 w-[140px]' />
          </div>
        </div>

        <div className='md:flex md:items-center'>
          <div>
            <h1 className='font-montserrat text-2xl font-bold md:text-3xl'>
              Hi! <img className='inline w-6 mb-2' src={wave} /> I&apos;m Shen Yi, an aspiring developer.
            </h1>
            <p className='font-inter text-base font-medium mt-5 md:text-xl'>
              I’m a passionate and inquisitive <br /> Computer Science Undergraduate with an international background that spans across the
              world.{' '}
              <a className='text-darkBlue' href={Routes.aboutMe}>
                Find out more...
              </a>
            </p>
          </div>
        </div>

        {/* Large Screen Portrait */}
        <div className='justify-center hidden md:flex'>
          <div className='relative rounded-full w-60 h-60 my-5 bg-lightBlue md:w-96 md:h-96'>
            <img src={portrait} className='absolute left-10 w-[230px] top-20' />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='-rotate-90 absolute top-[610px] -left-32 md:top-[550px] md:-left-[175px]'>
          <p className='font-montserrat text-base font-bold text-mediumBlue ml-[200px] md:ml-[250px]'>scroll down!</p>
          <div className='border-mediumBlue w-80 border md:w-[400px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
