import React, { useState } from 'react';

import NavBar from '@components/NavBar';
import Introduction from '@components/Introduction';
import ProjectCard from '@components/ProjectCard';
import Footer from '@components/Footer';
import DividerWithButton from '@components/DividerWithButton';

import getKey from '@/utilities/keyGenerator';
import { allProjects, otherProjects } from '@/data/projectCards';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

const Home = () => {
  const [viewMoreIcon, setViewMoreIcon] =
    useState<React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>>(EyeIcon);
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  const [viewAllText, setViewAllText] = useState<string>('View More');

  const handleViewAll = () => {
    setViewMoreIcon(isViewAll ? EyeIcon : EyeSlashIcon);
    setViewAllText(isViewAll ? 'View More' : 'Hide');
    setIsViewAll(!isViewAll);
  };
  return (
    <>
      {/* HEADER */}
      <NavBar />
      <div className='w-full h-full'>
        <Introduction />

        {/* All Projects */}
        <div className='w-full flex justify-center'>
          <div className='relative w-full max-w-7xl px-5 md:px-12'>
            <div className='flex justify-center mb-5'>
              <h1 className='font-montserrat font-bold text-mediumBlue text-3xl tracking-wide'>PROJECTS</h1>
            </div>

            {/* First Projects Column Layout */}
            <div className='columns-1 md:columns-2 gap-6'>
              {allProjects.map(proj => (
                <div key={getKey()} className='mb-6 break-inside-avoid'>
                  <ProjectCard
                    title={proj.title}
                    img={proj.img}
                    duration={proj.duration}
                    description={proj.description}
                    techStack={proj.techStack}
                    links={proj.links}
                    others={proj.others}
                    shields={proj.shields}
                  />
                </div>
              ))}
            </div>

            <DividerWithButton className='my-5' icon={viewMoreIcon} title={viewAllText} onClick={handleViewAll} />

            {/* Second Projects Column Layout (View All) */}
            {isViewAll && (
              <div className='columns-1 md:columns-2 gap-6'>
                {otherProjects.map(proj => (
                  <div key={getKey()} className='mb-6 break-inside-avoid'>
                    <ProjectCard
                      title={proj.title}
                      img={proj.img}
                      duration={proj.duration}
                      description={proj.description}
                      techStack={proj.techStack}
                      links={proj.links}
                      others={proj.others}
                      shields={proj.shields}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
