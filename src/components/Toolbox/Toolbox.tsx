import React from 'react';

const Toolbox = () => {
  return (
    <div className='overflow-hidden bg-white shadow-lg rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='font-montserrat text-xl font-bold leading-6 text-gray-900'>My Toolbox</h3>
        <p className='font-inter mt-1 max-w-2xl text-sm text-gray-500'>Languages and Technologies/Frameworks</p>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6 font-inter'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <dt className='text-lg font-montserrat font-bold text-gray-900'>Languages</dt>
          </div>
          <div className='sm:col-span-1 mb-6'>
            <dt className='text-sm font-medium text-gray-500'>Full name</dt>
            <dd className='mt-1 text-sm text-gray-900'>Margot Foster</dd>
          </div>
          <div className='sm:col-span-1 mb-6'>
            <dt className='text-sm font-medium text-gray-500'>Application for</dt>
            <dd className='mt-1 text-sm text-gray-900'>Backend Developer</dd>
          </div>
          <div className='sm:col-span-2'>
            <dt className='text-lg font-montserrat font-bold text-gray-900'>Technologies</dt>
          </div>
          <div className='sm:col-span-1 mb-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900'>margotfoster@example.com</dd>
          </div>
          <div className='sm:col-span-1 mb-6'>
            <dt className='text-sm font-medium text-gray-500'>Salary expectation</dt>
            <dd className='mt-1 text-sm text-gray-900'>$120,000</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Toolbox;
