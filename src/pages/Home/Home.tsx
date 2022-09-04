import React from 'react';

import NavBar from '@components/NavBar';
import Introduction from '@components/Introduction';
import ProjectCard from '@components/ProjectCard';

import getKey from '@/utilities/keyGenerator';
import { allProjects } from '@/data/projectCards';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='w-full h-full'>
        <Introduction />

        {/* All Projects */}
        <div className='w-full flex justify-center text-2xl'>
          <div className='relative w-full max-w-7xl h-full grid grid-cols-1 px-5 md:px-12'>
            <div className='flex justify-center'>
              <h1 className='font-montserrat font-bold text-mediumBlue text-3xl tracking-wide'>PROJECTS</h1>
            </div>
            {allProjects.map(proj => (
              <ProjectCard
                key={getKey()}
                title={proj.title}
                img={proj.img}
                duration={proj.duration}
                description={proj.description}
                techStack={proj.techStack}
                links={proj.links}
                others={proj.others}
                shields={proj.shields}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
