import React from 'react';
import NavBar from '@/components/NavBar';
import logoImg from '@/assets/images/ds-logo.png';
import teamImg from '@/assets/images/ds-team.png';
import productImg1 from '@/assets/images/ds-product1.png';
import productImg2 from '@/assets/images/ds-product2.png';
import productImg3 from '@/assets/images/ds-product3.png';
import Footer from '@/components/Footer';

export default function ArticlePage() {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto px-5 md:px-12 py-10 space-y-16'>
        {/* Hero Section */}
        <h1 className='font-montserrat text-4xl font-bold text-darkBlue mb-4'>Project Siew Dai</h1>
        <section className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/3 flex justify-center'>
            <img src={logoImg} alt='Diabetes Singapore Logo' className='w-40 h-auto' />
          </div>
          <div className='md:w-2/3 text-center md:text-left'>
            <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Our Community Partner, Diabetes Singapore</h2>
            <p className='font-inter text-lg text-gray-700'>
              We’ve had the privilege of partnering with Diabetes Singapore—a non-profit dedicated to raising awareness and providing
              essential support to people with diabetes. With two clinics and two mobile bus clinics, DS makes a real difference in
              Singapore’s healthcare landscape.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>The Challenge We Faced</h2>
          <p className='font-inter text-lg text-gray-700 mb-6'>
            Early on, we noticed that DS was operating without a centralized database or an integrated management system. This gap made it
            tough for DS to leverage data from volunteers, members, and event participants to enhance event management and stakeholder
            engagement.
          </p>
          <p className='font-inter text-lg text-gray-700'>
            Moreover, the manual workflow involved in managing the mobile bus clinic was both time-consuming and inefficient—clearly, there
            was room for improvement.
          </p>
        </section>

        {/* Our Solution */}
        <section>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Our Solution: Siew-Dai</h2>
          <p className='font-inter text-lg text-gray-700 mb-6'>
            Determined to make a difference, our team at DSC @ NUS Computing developed <strong>Siew-Dai</strong>—a custom Data and Workflow
            Management System designed to streamline DS’s operations. By integrating multiple tech tools into one easy-to-use platform, we
            drastically reduced the manual workload.
          </p>
          <p className='font-inter text-lg text-gray-700 mb-6'>
            Siew-Dai automates the complex process of scheduling and managing mobile bus deployments, while our upcoming stakeholder
            management features will empower DS to track and visualize critical data seamlessly.
          </p>

          {/* Product Gallery: 3 Columns */}
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='break-inside-avoid'>
              <img src={productImg1} alt='Siew-Dai Interface 1' className='w-full rounded-lg shadow' />
            </div>
            <div className='break-inside-avoid'>
              <img src={productImg2} alt='Siew-Dai Interface 2' className='w-full rounded-lg shadow' />
            </div>
            <div className='break-inside-avoid'>
              <img src={productImg3} alt='Siew-Dai Interface 3' className='w-full rounded-lg shadow' />
            </div>
          </div>

          {/* Team Section */}
          <div className='mt-10'>
            <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Our Amazing Team</h2>
            <div className='flex justify-center'>
              <img src={teamImg} alt='DSC Team' className='w-full max-w-md rounded-lg shadow' />
            </div>
          </div>
        </section>

        {/* Product Demonstration */}
        <section>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>See Siew-Dai in Action</h2>
          <div className='w-full flex justify-center relative mb-6'>
            <iframe
              width='640'
              height='360'
              src='https://www.youtube.com/embed/xI5ArYXHqjU'
              title='Siew Dai Product Demo'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Moving Forward */}
        <section>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>What&apos;s Next for Us</h2>
          <p className='font-inter text-lg text-gray-700'>
            We’re excited to share that Project Siew-Dai now enjoys strong support from the NUS Office of Student Affairs. With funding from
            the NUS Community Engagement Fund (CEF) covering 80% of DS’s project costs for the next 5 years, our team is more motivated than
            ever to continue refining Siew-Dai and driving meaningful impact for our partner.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
