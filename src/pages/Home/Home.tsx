import React from 'react';

import NavBar from '@components/NavBar';
import Introduction from '@components/Introduction';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='w-full h-full'>
        <Introduction />
      </div>
    </>
  );
};

export default Home;
