import html from '../public/assets/skill/html.png';
import css from '../public/assets/skill/css.png';
import js from '../public/assets/skill/javascript.png';
import node from '../public/assets/skill/node.png';
import git from '../public/assets/skill/git.png';
import exp from '../public/assets/skill/exp.png'
import Logo from "../public/assets/logo.png";

import react from '../public/assets/skill/react.png';
import mongo from '../public/assets/skill/mongo.png';
import tailwind from '../public/assets/skill/tailwind.png';
import redux from '../public/assets/skill/redux.png';
import next from '../public/assets/skill/nextjs.png';
import c from '../public/assets/skill/c.png'
import cp from '../public/assets/skill/c++.png'
import bootstrap from '../public/assets/skill/bootstrap.png'
import pj1 from '../public/assets/project/pj1.png'
import htl1 from  '../public/assets/project/htl1.png'
import qr from  '../public/assets/project/qr1.png'
import todo from  '../public/assets/project/todo.png'
import Ecom from  '../public/assets/project/E-com.png'
import usermng from '../public/assets/project/usermng.png'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const myskill = [
  {
    title: 'HTML',
    pic: html,
  },
  {
    title: 'CSS',
    pic: css,
  },
  {
    title: 'JavaScript',
    pic: js,
  },
  {
    title: 'ReactJs',
    pic: react,
  },
  {
    title: 'Tailwind',
    pic: tailwind,
  },
  {
    title: 'GitHub',
    pic: git,
  },
  {
    title: 'ExpressJs',
    pic: exp,
  },
  {
    title: 'NodeJs',
    pic: node,
  },
  {
    title: 'NextJs',
    pic: next,
  },
  {
    title: 'Redux',
    pic: redux,
  },
  {
    title: 'MongoDB',
    pic: mongo,
  },
  {
    title: 'C',
    pic: c,
  },
  {
    title: 'C++',
    pic: cp,
  },
  {
    title: 'NextJs',
    pic: next,
  },
 
];

export const myproj=[
  {
    title:" Room Sharing and Rental System",
    pic:pj1,
    tech:'React,nodeJs,MongoDb,ExpressJS',
    url:'https://github.com/rajarya199/minor-project',
    info:'user can search tenant to share their room ,and also rent property'
  },
  {
    title:" E-commerce",
    pic:Ecom,
    tech:'React,nodeJs,MongoDb,ExpressJS',
    url:'https://github.com/rajarya199/E-commerce-',
    info:'Ecommerce site for online shopping '
  },
  {
    title:"Hotel's Room Booking System",
    pic:htl1,
    tech:'React,nodeJs,MongoDb,ExpressJS,Tailwind',
    url:'https://github.com/rajarya199/BookMyHotel',
    info:' user can search  hotelroom according to their requirement and book at their ease.'
  },
  {
    title:" Todo list",
    pic:todo,
    tech:'ReactJs,js',
    url:'https://github.com/rajarya199/Todo-list-React',
    info:'list of things you have to-do,add/edit your task '
  },
  {
    title:" QR-Code generator",
    pic:qr,
    tech:'html,css,js',
    url:'https://github.com/rajarya199/QR-code-generator',
    info:' convert any text/image url into img and downlaod it'
  },
  {
    title:"User Management System",
    pic:usermng,
    tech:'MERN Stack',
    url:'https://github.com/rajarya199/Simple-UserManaagement-CRUD-system-Using-MERN',
    info:' Create,add Edit ,delete the user Information'
  },
]

export  const contactInfo=[
  
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/',
    icon: FaLinkedinIn,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/rajarya199',
    icon: FaGithub,
  },
]
export  const contInfo=[
  {
    title: 'Email',
    url: '/#contact',
    icon: AiOutlineMail,
  },
  {
    title: 'Resume',
    url: '/resume',
    icon: BsFillPersonLinesFill,
  },
]

export const myinfo={
  name:'Rajan Aryal',
  status:'Computer Engineer',
  logo:Logo,
  resume:"/assets/RajanAryalResume.pdf",
  position:'Full stack Developer',
  about1:'From a young age, I have been fascinated by the power of technology to transform the way we live and work. This fascination led me to pursue a degree in Computer Science, where I gained a solid foundation in programming languages, algorithms, and software engineering principles. I recently graduated from National College of Engineering,IOE,TU with a degree in Computer Engineering. During my academic career, I have gained proficiency in a variety of programming languages and technologies, including HTML, CSS, C,C++.JavaScript, React, Node.js, and MongoDB. I have also completed several projects that have given me practical experience in both front-end and back-end development',
  about2:" Hardworking and dedicated Computer Science Engineering Student seeking employment, with a strong interest in full-stack development particularly in React.js and Node.js technologies. Proficient in the MERN stack with hands-on experience in building web applications. Ready to utilize my skills and passion to further the mission of a company andcontribute to projects."
}