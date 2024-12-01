"use client"
import Link from "next/link";
import React,{useState,useEffect} from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import Logo from "../public/assets/logo.png";
import { contactInfo,contInfo } from "@/constants/constant";


const Navbar = () => {
  const{systemTheme,theme,setTheme}=useTheme()
  const currentTheme=theme==="system" ? systemTheme :theme
    const [nav,setNav]=useState(false)
    const[shadow,setShadow]=useState(false)
   
 
    const handleNav=()=>{
        setNav(!nav)

    }
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div   className={`${shadow 
      ? 'fixed w-full h-20 bg-[#ecf0f3] dark:bg-[#1f2937] shadow-xl z-[100] ease-in-out duration-300 ' 
      : 'fixed w-full bg-white dark:bg-[#1f2937] h-20 z-[100]'} 
      `}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'> <Image
          src={Logo}
          alt="/"
          width="125"
          height="50"
          className="cursor-pointer"
        /> </Link>
       
    {/* desktop view */}
        <div className="flex items-center">
          <ul  className={`hidden md:flex text-[#1f2937] dark:text-[#ecf0f3]`}>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>

          </ul>
          {currentTheme==="light" ? (
               <button 
               style={{ color: "#f0f9ff", background: "#1e3a8a" }}
               onClick={() => setTheme("dark")}
               className="ml-4 p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition"
               aria-label="Switch to dark mode"
             >
               <RiMoonFill size={20} />
             </button>
          ) :(
          
            <button
          
            onClick={() => setTheme("light")}
            className="ml-4 p-2  rounded-full shadow-lg shadow-gray-800 hover:scale-105 transition"
            aria-label="Switch to light mode"
          >
            <RiSunLine size={20} />
          </button>
          )}
          <div className="md:hidden ml-2 " onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* mobile menu view */}
      <div   className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
  {/* Sidebar */}
  <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] max-h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto dark:bg-[#1f2937]'
    :'fixed left-[-100%] top-0 p-10 ease-in duration-500'
  }>
    <div>
      <div className="flex w-full items-center justify-between">
        <Image src={Logo} width="87" height="35" alt="/" />
        <div
          onClick={handleNav}
          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-950"
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="border-b border-gray-300 my-4">
        <p className="w-[85%] md:w-[90%] py-4">
          Let&#39;s build something legendary together
        </p>
      </div>
    </div>
    <div className="py-4 flex flex-col">
      <ul className="uppercase">
        <Link href="/">
          <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
        </Link>
        <Link href="/#about">
          <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
        </Link>
        <Link href="/#skills">
          <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
        </Link>
        <Link href="/#projects">
          <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
        </Link>
     
        <Link href="/#contact">
          <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
        </Link>
      </ul>

      {/* Example Content */}
      <div className="pt-48">
        <p className="uppercase tracking-widest text-[#5651e5] dark:text-[#818cf8]">
          Let&#39;s Connect
        </p>
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
        {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.title}
              >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-950'>
                            <contact.icon className="w-6 h-6" />
                        </div>
                
              </a>
            ))}
            {contInfo.map((cont,index)=>(
              <Link
              key={index}
              href={cont.url}
              aria-label={cont.title}
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-950'>
                         <cont.icon   />
                      </div>
             
            </Link>
            ))}
        
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Navbar;
