
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about1.jpg';
import { myinfo } from '@/constants/constant';
import { ScrollReveal } from './ScrollReveal';
const About = () => {
 
  return (
    <div id='about' className='w-full p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] h-auto m-auto md:grid grid-cols-3 gap-8 mb-2 '>
        <div className='col-span-2'>
<ScrollReveal preset='heading'>
   <p className='uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#818cf8]'>
            About
          </p>
          <h2 className='py-4 '>Who I Am</h2>
</ScrollReveal>
       
          <p className='py-2  text-gray-600 dark:text-[#ecf0f3] '>
            {myinfo.status},{myinfo.position}<br/>
            {myinfo.about1}
          </p>
          <p className='py-2  text-gray-600 dark:text-[#ecf0f3]'>
          {myinfo.about2}          </p>
          <Link href='/#projects'>
          
            <p  className='py-2  underline cursor-pointer text-gray-600 dark:text-[#ecf0f3]'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
               <div  className='w-full h-auto m-auto shadow-xl shadow-gray-400  rounded-xl  flex items-center justify-center p-1 hover:scale-105 ease-in duration-300  dark:shadow-gray-950'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About