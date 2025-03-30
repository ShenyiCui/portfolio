import React, { useState } from 'react';

import portrait from '@/assets/images/portrait-2.png';
import Routes from '@/utilities/routes';
import wave from '@/assets/icons/waving.svg';
import { TrophyIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { awardsData } from '@/data/awards';

const Introduction = () => {
  const [activeTab, setActiveTab] = useState<'intro' | 'awards'>('intro');

  return (
    <div className='w-full flex justify-center mb-[290px] md:mt-5 relative'>
      {/* Tabs & Content Container */}
      <div className='w-full max-w-7xl px-5 md:px-12 flex flex-col md:flex-row'>
        {/* Tab Navigation Small Screen*/}
        <div className='md:hidden flex w-full'>
          <button
            onClick={() => setActiveTab('intro')}
            className={`flex-1 md:py-3 font-montserrat text-base font-bold text-mediumBlue transition-colors justify-center items-center flex 
              ${activeTab === 'intro' ? 'text-darkBlue border-b-2 md:border-b-0 md:border-r-2 border-darkBlue' : 'border-transparent'}`}
          >
            <UserCircleIcon className='w-6 h-6 mr-1' /> Introduction
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex-1 md:py-3 font-montserrat text-base font-bold text-mediumBlue transition-colors flex justify-center items-center
              ${activeTab === 'awards' ? 'text-darkBlue border-b-2 md:border-b-0 md:border-r-2 border-darkBlue' : 'border-transparent'}`}
          >
            <TrophyIcon className='w-5 h-5 mr-1' /> Achievements
          </button>
        </div>
        {/* Content Area */}
        <div className='flex-1'>
          {activeTab === 'intro' ? (
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
              {/* Small Screen Portrait */}
              <div className='flex justify-center md:hidden'>
                <div className='relative rounded-full w-52 h-52 my-5 bg-lightBlue'>
                  <img src={portrait} className='absolute right-8 top-8 w-[185px] rounded-full' alt='Portrait' />
                </div>
              </div>

              {/* Introduction Text */}
              <div className='md:flex md:items-center'>
                <div>
                  <h1 className='font-montserrat text-2xl font-bold md:text-3xl'>
                    Hi! <img className='inline w-6 mb-2' src={wave} alt='wave' /> I&apos;m Shen Yi, a Software Engineer{' '}
                    <a className='font-bold text-[#2800D7]'>@Bloomberg.</a>
                  </h1>
                  <p className='font-inter text-base font-medium mt-5 md:text-xl'>
                    I’m a Computer Science graduate with an international background
                  </p>
                  <p className='font-inter text-base font-medium mt-1.5 md:text-xl'>
                    I’m especially interested in{' '}
                    <a className='text-[#D97706] font-bold' href={Routes.blog}>
                      #Tech4Good
                    </a>{' '}
                    and using code to support meaningful causes.{' '}
                    <a className='text-darkBlue text-bold' href={Routes.aboutMe}>
                      Find out more...
                    </a>
                  </p>
                </div>
              </div>

              {/* Large Screen Portrait */}
              <div className='justify-center hidden md:flex md:items-center'>
                <div className='relative rounded-full w-96 h-96 my-5 bg-lightBlue md:flex md:items-center md:justify-center'>
                  <img src={portrait} className='absolute top-10 right-10 w-[400px] rounded-full' alt='Portrait' />
                </div>
              </div>
            </div>
          ) : (
            <div className='py-10'>
              <h2 className='font-montserrat text-2xl font-bold mb-8 text-center'>Awards & Achievements</h2>
              <div className='columns-2 md:columns-3 gap-6'>
                {awardsData.map((award, index) => (
                  <div
                    key={index}
                    className='mb-6 break-inside-avoid relative p-4 rounded-xl shadow-md bg-gray-100 text-black transform hover:scale-105 transition-transform duration-200'
                  >
                    <div className='flex items-center mb-2'>
                      <TrophyIcon className='md:w-6 md:h-6 md:mr-2 md:block hidden' />
                      <h3 className='font-semibold text-base'>{award.title}</h3>
                    </div>
                    {award.description && <p className='text-xs leading-relaxed'>{award.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Tab Navigation Big Screen*/}
        <div className='md:flex md:flex-col md:w-1/5 md:mb-0 hidden'>
          <button
            onClick={() => setActiveTab('intro')}
            className={`flex-1 md:py-3 font-montserrat text-base font-bold text-mediumBlue transition-colors flex items-center justify-center
              ${activeTab === 'intro' ? 'text-darkBlue border-b-2 md:border-b-0 md:border-r-2 border-darkBlue' : 'border-transparent'}`}
          >
            <UserCircleIcon className='w-7 h-7 mr-1' /> Introduction
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex-1 md:py-3 font-montserrat text-base font-bold text-mediumBlue transition-colors flex items-center justify-center
              ${activeTab === 'awards' ? 'text-darkBlue border-b-2 md:border-b-0 md:border-r-2 border-darkBlue' : 'border-transparent'}`}
          >
            <TrophyIcon className='w-6 h-6 mr-1' /> Achievements
          </button>
        </div>
      </div>

      {/* Scroll Indicator (kept as provided) */}
      <div
        className={`-rotate-90 absolute ${
          activeTab === 'intro' ? 'top-[650px] md:top-[550px]' : 'top-[1400px] md:top-[810px]'
        } -left-32  md:-left-[175px]`}
      >
        <p className='font-montserrat text-base font-bold text-mediumBlue ml-[200px] md:ml-[250px]'>scroll down!</p>
        <div className='border-mediumBlue w-80 border md:w-[400px]'></div>
      </div>
    </div>
  );
};

export default Introduction;
