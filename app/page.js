"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Main from "@/components/Main";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";


export default function Home() {
  return (
<motion.main
   initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
>
  <Main/>
  <About/>
  <Skills/>
  
  <Project/>
  <Education/>

  <Contact/>
</motion.main>
  );
}
