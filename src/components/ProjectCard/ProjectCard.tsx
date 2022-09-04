import React from 'react';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Icon, { IconType } from '@components/Icon';

const ProjectCard = () => {
  return (
    <div className='overflow-hidden shadow-lg bg-white border rounded-lg my-5'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-2xl font-bold leading-6 text-gray-900 font-montserrat'>Project Name</h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500 font-inter'>MAY 2022 - JUN 2022</p>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6 font-inter'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <dt className='text-sm font-medium text-gray-500'>Description</dt>
            <dd className='mt-1 text-sm text-gray-900'>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Tech Stack</dt>
            <dd className='mt-1 flex space-x-3'>
              <Icon iconType={IconType.Ionic} />
              <Icon iconType={IconType.TypeScript} />
              <Icon iconType={IconType.PostgreSql} />
            </dd>
          </div>

          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Links</dt>
            <dd className='mt-1 flex space-x-3'>
              <Icon iconType={IconType.Github} link='d' />
              <Icon iconType={IconType.Figma} link='d' />
              <Icon iconType={IconType.OpenNew} link='d' />
            </dd>
          </div>

          <div className='sm:col-span-2'>
            <dt className='text-sm font-medium text-gray-500'>Other</dt>
            <dd className='mt-1 text-sm text-gray-900'>
              <ul role='list' className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                  <div className='flex w-0 flex-1 items-center'>
                    <ArrowTopRightOnSquareIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                    <span className='ml-2 w-0 flex-1 truncate'>Devpost</span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a href='#' className='font-medium text-darkBlue hover:text-mediumBlue'>
                      Visit
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProjectCard;
