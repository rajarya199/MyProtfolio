import React from 'react'
import { myskill } from '@/constants/constant'
import Image from 'next/image'
const Skills = () => {
  return (
    <div id='skills' className='w-full  p-2  '>
           <div className='max-w-[1240px]  mx-auto flex flex-col justify-center h-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#818cf8]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {myskill.map((item,index)=>(
                 <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:shadow-gray-900'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                     <Image src={item.pic} width='64px' height='64px' alt='/' />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                     <h3>{item.title}</h3>
                   </div>
                 </div>
               </div>
            )

            ) }
       
        </div>
        </div>


    </div>
  )
}

export default Skills