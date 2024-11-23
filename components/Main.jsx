import Link from 'next/link';
import React from 'react';
import { contactInfo } from '@/constants/constant';
import { contInfo,myinfo } from '@/constants/constant';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Rajan Aryal</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building  web applications integrating front-end with back-end technologies .
          </p>
          
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.title}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <contact.icon  />
              </a>
            ))}
            {contInfo.map((cont,index)=>(
              <Link
              key={index}
              href={cont.url}
              aria-label={cont.title}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <cont.icon  />
            </Link>
            ))}
          </div>

           {/* Buttons Section */}
           <div className="mt-8 flex justify-center space-x-4">
            
            <a
              href={myinfo.resume}
              download
              className="px-6 py-2 bg-[#5651e5] text-white rounded-lg shadow-lg hover:bg-[#4338ca] transition duration-300 ease-in-out"
            >
              Download CV
            </a>

            {/* Hire Me Button */}
            <Link
              href="/#contact" // Replace with your contact or hiring form section
              className="px-6 py-2 border-2 border-[#5651e5] text-[#5651e5] rounded-lg shadow-lg hover:bg-[#5651e5] hover:text-white transition duration-300 ease-in-out"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
