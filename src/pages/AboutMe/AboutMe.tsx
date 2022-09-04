import React from 'react';

import NavBar from '@components/NavBar';
import Footer from '@/components/Footer';
import ContactMe from '@components/ContactMe';

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <div className='w-full flex justify-center'>
        <div className='relative w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-2 px-5 md:px-12'>
          <div className='md:flex md:items-center'>
            <div>
              <h1 className='font-montserrat text-2xl font-bold md:text-3xl'>Nice to meet you!</h1>
              <p className='font-inter text-base font-medium mt-5 md:text-xl'>
                I&apos;m currently a 3rd year at the National University of Singapore, studying B.S. Computer Science and Statistics.
                Looking for .......
              </p>
              <ContactMe className='my-5' sizeMd={45} />
            </div>
          </div>

          {/* Large Screen Portrait */}
          <div className='justify-center flex'>
            <div className='relative rounded-full w-60 h-60 my-5 bg-lightBlue md:w-96 md:h-96'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
