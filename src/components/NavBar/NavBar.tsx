import React from 'react';

import { NavLink } from 'react-router-dom';
import Routes from '@/utilities/routes';

const NavBar = () => {
  return (
    <header className=''>
      <nav className='mx-auto px-5 md:px-12 max-w-7xl' aria-label='Top'>
        <div className='flex w-full items-center justify-between py-6'>
          <div className='flex items-center'>
            <NavLink to={Routes.home} className='font-montserrat font-bold text-xl md:text-3xl' href={Routes.home}>
              Shen Yi Cui
            </NavLink>
          </div>
          <div className='flex ml-2 space-x-1.5 md:space-x-6'>
            <NavLink
              exact
              to={Routes.home}
              className='font-montserrat font-semibold text-base md:text-xl'
              activeClassName='underline underline-offset-8 decoration-[2px] decoration-darkBlue md:decoration-[3px]'
              href={Routes.home}
            >
              Projects
            </NavLink>
            <NavLink
              exact
              to={Routes.aboutMe}
              className='font-montserrat font-semibold text-base md:text-xl'
              activeClassName='underline underline-offset-8 decoration-[2px] decoration-darkBlue md:decoration-[3px]'
              href={Routes.aboutMe}
            >
              About Me
            </NavLink>
            <NavLink
              exact
              to={Routes.blog}
              className='font-montserrat font-semibold text-base md:text-xl'
              activeClassName='underline underline-offset-8 decoration-[2px] decoration-darkBlue md:decoration-[3px]'
              href={Routes.blog}
            >
              Blog
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
