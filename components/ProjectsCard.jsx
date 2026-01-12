import React from 'react'
import { myprojects } from '@/constants/constant'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'
export const ProjectsCard = ( ) => {
  return (
<div className='w-full'>
  <ScrollReveal preset='content' width='100%'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8' >
        {myprojects.map((project,index)=>(
 <div key={index} className="h-96 w-full relative group rounded-xl overflow-hidden shadow-lg">
      {/* Base card with image */}
      <div className="w-full h-full bg-slate-100 dark:bg-gray-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          objectFit='contain'
          className="w-full h-full object-cover"
        />
        {/* Project name always visible at bottom */}
        <div className="absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            {project.name}
          </h3>
        </div>
      </div>
      {/* Overlay with project info (appears on hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6 overflow-auto">
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-gray-200 mb-4 flex-grow overflow-auto">
          {project.description}
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <h4 className="text-sm font-semibold text-gray-300 w-full mb-1">
              Technologies:
            </h4>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-900 text-blue-100 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
              <span>Source Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
        ))}
 
    </div>
  </ScrollReveal>

</div>
  
   
  )
}
