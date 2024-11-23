import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about1.jpg';
import { myinfo } from '@/constants/constant';

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] h-auto m-auto md:grid grid-cols-3 gap-8 mb-2 '>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            {myinfo.status},{myinfo.position}<br/>
            {myinfo.about1}
          </p>
          <p className='py-2 text-gray-600'>
          {myinfo.about2}          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
               <div  className='w-full h-auto m-auto shadow-xl shadow-gray-400  rounded-xl  flex items-center justify-center p-1 hover:scale-105 ease-in duration-300 '>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About