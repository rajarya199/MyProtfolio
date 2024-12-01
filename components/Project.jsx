
import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div id='projects' className='w-full  mt-10 '>
      <div className='max-w-[1240px]  mx-auto  px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#818cf8]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div >
            <ProjectCard/>
        </div>
      </div>
    </div>
  );
};

export default Project;