import React from 'react';
import NavBar from '@/components/NavBar';

// Import images (update these paths as needed)
import logoImg from '@/assets/images/das-logo.png';
import studentPortalImg from '@/assets/images/student-portal.png';
import teacherPortalImg from '@/assets/images/teacher-portal.png';
import userTestingImg1 from '@/assets/images/sightwords.webp';
import userTestingImg2 from '@/assets/images/user-testing2.png';
import teamImg from '@/assets/images/team-sight-words.png';
import Footer from '@/components/Footer';
import Icon, { IconType } from '@/components/Icon';
import getKey from '@/utilities/keyGenerator';

const techStack = [
  [
    { iconType: IconType.React },
    { iconType: IconType.TypeScript },
    { iconType: IconType.Tailwind },
    { iconType: IconType.PostgreSql },
    { iconType: IconType.NodeJs },
    { iconType: IconType.Prisma },
    { iconType: IconType.NestJs },
  ],
];

export default function ProjectSightWordsArticle() {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto px-5 md:px-12 py-10 space-y-16'>
        {/* Tech Stack */}
        <div className='sm:col-span-1'>
          <dt className='text-sm font-medium text-gray-700'>Tech Stack</dt>
          {techStack.map(techStackArr => {
            return (
              <dd key={getKey()} className='flex space-x-3'>
                {techStackArr.map(icon => (
                  <Icon iconType={icon.iconType} key={getKey()} />
                ))}
              </dd>
            );
          })}
        </div>
        {/* Hero Section */}
        <section className='text-center'>
          <div className='flex justify-center mb-6'>
            <img src={logoImg} alt='DAS Logo' className='w-32 h-auto' />
          </div>
          <h1 className='font-montserrat text-4xl font-bold text-darkBlue mb-4'>Project Sight Words</h1>
          <p className='font-inter text-xl text-gray-700'>Transforming learning experiences for dyslexic students.</p>
        </section>

        {/* NPO Introduction */}
        <section className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 flex justify-center'>
            <img src={logoImg} alt='DAS Logo' className='w-48 h-auto rounded-lg shadow' />
          </div>
          <div className='md:w-1/2'>
            <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>NPO Introduction</h2>
            <p className='font-inter text-lg text-gray-700'>
              We partnered with the Dyslexia Association of Singapore (DAS) – a vibrant social service organization with over 250 dedicated
              staff. Their innovative approach to education inspired us to reimagine how learning materials are delivered.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className='bg-gray-50 p-6 rounded-lg shadow'>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Problem</h2>
          <p className='font-inter text-lg text-gray-700'>
            Traditional worksheets, although effective, often feel like extra homework. Teachers spend countless hours crafting multiple
            tailored lesson plans for each class, making it hard to track and manage student progress.
          </p>
        </section>

        {/* Target Audience */}
        <section className='p-6 border-l-4 border-mediumBlue bg-white rounded-lg shadow'>
          <h2 className='font-montserrat text-2xl font-bold text-mediumBlue mb-2'>Target Audience</h2>
          <p className='font-inter text-lg text-gray-700'>DAS Teachers | DAS Primary School Students</p>
        </section>

        {/* Our Product – Student Portal */}
        <section className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 order-2 md:order-1'>
            <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Our Product: Student Portal</h2>
            <p className='font-inter text-lg text-gray-700 mb-4'>
              We built the Student Portal to digitize traditional worksheets and create an engaging, progressive web app. Our portal mirrors
              DAS’s systematic lesson structure while offering multisensory activities—listening, visual cues, tracing, and contextual
              usage—to help students learn and retain words more effectively.
            </p>
            <p className='font-inter text-lg text-gray-700'>
              With a mobile-first design (and support for desktops and tablets), our solution makes learning accessible wherever students
              are.
            </p>
          </div>
          <div className='md:w-1/2 order-1 md:order-2 flex justify-center'>
            <img src={studentPortalImg} alt='Student Portal' className='w-full max-w-md rounded-lg shadow' />
          </div>
        </section>

        {/* Teacher Portal */}
        <section className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 flex justify-center'>
            <img src={teacherPortalImg} alt='Teacher Portal' className='w-full max-w-md rounded-lg shadow' />
          </div>
          <div className='md:w-1/2'>
            <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Teacher Portal</h2>
            <p className='font-inter text-lg text-gray-700'>
              To streamline class management, our Teacher Portal allows educators to add words with images, audio, and sentences; create
              classes and assign students; and automatically distribute word banks. This system reduces lesson preparation time by
              eliminating the need for printing physical worksheets and offers easy access to past lessons and progress tracking.
            </p>
          </div>
        </section>

        {/* Evaluation */}
        <section className='bg-gray-50 p-6 rounded-lg shadow'>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Evaluation</h2>
          <p className='font-inter text-lg text-gray-700 mb-6'>
            We hosted several user testing sessions with DAS teachers and students, and the feedback was invaluable. Their insights helped
            us refine interactions and ensure that our design truly meets classroom needs. We’re grateful for their constructive input—it
            has been crucial in shaping the final product.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img src={userTestingImg1} alt='User Testing Session 1' className='w-full rounded-lg shadow' />
            <img src={userTestingImg2} alt='User Testing Session 2' className='w-full rounded-lg shadow' />
          </div>
        </section>

        {/* Moving Forward */}
        <section>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue mb-4'>Moving Forward</h2>
          <p className='font-inter text-lg text-gray-700'>
            We’re excited to expand the Student Portal with additional interactive activities that go beyond traditional worksheets. Our
            goal is to develop a modular system that empowers teachers to customize lessons, further enhancing the learning experience for
            every student.
          </p>
        </section>

        {/* Team Section */}
        <section className='flex flex-col items-center gap-6'>
          <h2 className='font-montserrat text-3xl font-bold text-mediumBlue'>Team Sight Words</h2>
          <p className='font-inter text-lg text-gray-700 text-center max-w-2xl'>
            We’re a passionate, diverse team of NUS students—from Computer Science and Business Analytics to Information Systems,
            Communications & New Media, and Economics. Our combined vision and dedication have driven us to create Project Sight Words, and
            we’re proud to be making learning more engaging for DAS students.
          </p>
          <img src={teamImg} alt='Team Sight Words' className='w-full max-w-lg rounded-lg shadow' />
        </section>
      </div>

      <Footer />
    </>
  );
}
