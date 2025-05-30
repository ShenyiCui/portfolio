import React from 'react';

import ContactMe from '@components/ContactMe';
import Toolbox from '@components/Toolbox';

const AboutMe = () => {
  return (
    <div className='w-full flex justify-center mt-10 md:mt-5'>
      <div className='relative w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-2 px-5 md:px-12'>
        <div className='md:flex md:items-center'>
          <div>
            <h1 className='font-montserrat text-2xl font-bold md:text-3xl'>Nice to meet you!</h1>
            <p className='font-inter text-base font-medium mt-5 md:text-xl'>
              Hey there! I&apos;m a Software Engineer <a className='text-[#2800D7] font-bold'>@Bloomberg</a>
              , with a background in Computer Science from NUS.
              <br />
              <br />
              Before this, I interned <a className='text-[#EE1D52] font-bold'>@TikTok</a> and{' '}
              <a className='text-[#00ADF0] font-bold'>@ByteDance</a>, building cool stuff and learning fast.
            </p>
            <ContactMe className='mt-5 mb-16 md:my-5' size='w-[32px] md:w-[45px]' />
          </div>
        </div>

        <div className='justify-center flex'>
          <Toolbox />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
