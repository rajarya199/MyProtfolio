import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { myproj } from '@/constants/constant'

const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {myproj.map((proj, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:shadow-gray-950"
        >
          {/* Image Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              className="rounded-xl group-hover:opacity-10 object-cover"
              src={proj.pic}
              alt={proj.title}
            
            />
          </div>

          {/* Hover Block */}
          <div className="hidden group-hover:flex absolute inset-0 flex-col justify-center items-center text-center space-y-3 bg-black/70 rounded-xl">
            <h3 className="text-xl text-white tracking-wider">{proj.title}</h3>
            <p className="text-white text-sm">{proj.tech}</p>
            <p className="text-white text-sm px-4 truncate">{proj.info}</p>
            <a href={proj.url} target="_blank" rel="noreferrer">
              <p className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
