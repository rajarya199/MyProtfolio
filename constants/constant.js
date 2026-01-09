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
import prisma from '../public/assets/skill/prisma.png'
import shadcn from '../public/assets/skill/shadcnui.png'

import bootstrap from '../public/assets/skill/bootstrap.png'
import filedrive from'../public/assets/project/filedrive.png'
import pj1 from '../public/assets/project/pj1.png'
import ntfx from '../public/assets/project/ntfx.png'
import htl1 from  '../public/assets/project/htl1.png'
import qr from  '../public/assets/project/qr1.png'
import bookstr from  '../public/assets/project/bookstr1.png'
import todo from  '../public/assets/project/todo.png'
import Ecom from  '../public/assets/project/E-com.png'
import ecomm from '../public/assets/project/ecommerce.png'
import usermng from '../public/assets/project/usermng.png'
import event from '../public/assets/project/evnt2.png'
import event1 from '../public/assets/project/event1.png'
import chat from '../public/assets/project/chat.png'

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
    title: 'Prisma',
    pic: prisma,
  },
  {
    title: 'ShadCn',
    pic: shadcn,
  }
 
];

export const myprojects = [
  {
    id: 1,
    name: "Event Management System",
    description:
      "A web application that enables users to create, manage, and promote events online. Features include full CRUD operations for events, event publishing and advertising, a ticket booking system, and integrated payment gateway. Built with Next.js, TypeScript, Neon DB, ShadCn, Tailwind, Prisma, Leaflet, and Clerk.",
    image: event1,
    tags: [
      "Next Js",
      "Ts",
      "Neon DB",
      "ShadCn",
      "Tailwind",
      "Prisma",
      "Leaflet",
      "Clerk"
    ],
    githubUrl: "",
    liveUrl: "https://eventmanagent1.vercel.app/"
  },
  
  {
    id: 2,
    name: "Real-Time MERN Chat App with AI & Live Code Execution",
    description:
      "A real-time collaborative chat application with room-based messaging, AI-powered coding assistance using Gemini AI, and in-browser code editing and execution via WebContainer. Features include Socket.IO real-time chat, Redis caching, JWT auth, and persistent chat history.",
    image:chat,
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.IO",
      "Gemini AI",
      "Redis",
      "WebContainer",
      "JWT",
      "Tailwind"
    ],
    githubUrl:
      "https://github.com/rajarya199/RealTime_Chat_App_With_AI_Chat_Support_MERN_App",
    liveUrl: "https://real-time-chat-app-with-ai-chat-sup.vercel.app/"
  },
   {
    id: 3,
    name: "E-commerce",
    description:
      "An online shopping platform allowing users to browse and purchase products. Features include product catalog, shopping cart, and order management. Built with React, Node.js, MongoDB, and ExpressJS.",
    image: ecomm,
    tags: ["React", "Node.js", "MongoDB", "ExpressJS"],
    githubUrl: "https://github.com/rajarya199/E-commerce-",
    liveUrl: ""
  },
 
  {
    id: 4,
    name: "Room Sharing and Rental System",
    description:
      "A platform for finding roommates and renting properties. Users can search for tenants to share rooms or list properties for rent. Built using React, Node.js, MongoDB, and ExpressJS.",
    image: pj1,
    tags: ["React", "Node.js", "MongoDB", "ExpressJS"],
    githubUrl: "https://github.com/rajarya199/minor-project",
    liveUrl: ""
  },
    {
    id: 5,
    name: "File Drive Storage & Management System",
    description:
      "A full-stack file management system built with Next.js, TypeScript, Appwrite, TailwindCSS, and ShadCN. It allows users to upload, store, share, and manage different types of files securely. Features include file upload, file sharing, user authentication with OTP login, file search, sorting, renaming, and deletion.",
    image: filedrive,
    tags: ["Next.js", "TailwindCSS", "Appwrite", "TypeScript", "ShadCN"],
    githubUrl: "https://github.com/rajarya199/FileManagement_Drive_NEXT.JS_AppWrite_Tailwind_V4_",
    liveUrl: "https://filemanagementdrive.vercel.app"
  },
 
  {
    id: 6,
    name: "Hotel's Room Booking System",
    description:
      "A booking system for hotel rooms that helps users search and reserve accommodations based on their preferences. Features include room search, booking, and responsive UI. Built with React, Node.js, MongoDB, ExpressJS, and Tailwind.",
    image: htl1,
    tags: ["React", "Node.js", "MongoDB", "ExpressJS", "Tailwind"],
    githubUrl: "https://github.com/rajarya199/BookMyHotel",
    liveUrl: ""
  },
  {
    id: 7,
    name: "User Management System",
    description:
      "A CRUD application for managing user information in a database. Users can create, add, edit, and delete user records. Built using the MERN Stack.",
    image: usermng,
    tags: ["MERN Stack"],
    githubUrl: "https://github.com/rajarya199/Simple-UserManaagement-CRUD-system-Using-MERN",
    liveUrl: ""
  },
  {
    id: 8,
    name: "Book Store",
    description:
      "A digital library system for managing book collections. Users can add, edit, and delete book information. Built using the MERN Stack.",
    image: bookstr,
    tags: ["MERN Stack"],
    githubUrl: "https://github.com/rajarya199/BookStore-Mern",
    liveUrl: ""
  },
  {
    id: 9,
    name: "Netflix UI Clone",
    description:
      "A static web page replicating the Netflix homepage design. Built using HTML and CSS for layout and styling.",
    image: ntfx,
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/rajarya199/Netflix-UI-Clone-using-html-css",
    liveUrl: ""
  },
  {
    id: 10,
    name: "Todo List",
    description:
      "A productivity app for tracking daily tasks and to-dos. Users can add, edit, and manage their task list. Built with ReactJS and JavaScript.",
    image: todo,
    tags: ["ReactJS", "JavaScript"],
    githubUrl: "https://github.com/rajarya199/Todo-list-React",
    liveUrl: ""
  },
  {
    id: 11,
    name: "QR-Code Generator",
    description:
      "A tool for generating QR codes from text or image URLs. Users can convert input into a QR image and download it. Built with HTML, CSS, and JavaScript.",
    image: qr,
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/rajarya199/QR-code-generator",
    liveUrl: ""
  },
 
];



export const myproj=[
  {
    title:" Event Management System",
    pic:event,
    tech:'Next Js,Ts,Neon DB, ShadCn, Tailwind,Prisma,Leaflet,Clerk',
    url:"https://eventmanagent1.vercel.app/",
    info:'CRUD the event ,User can add their event to publish,advertise here,Ticket booking system with payment gateway'
  },
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
    title:"User Management System",
    pic:usermng,
    tech:'MERN Stack',
    url:'https://github.com/rajarya199/Simple-UserManaagement-CRUD-system-Using-MERN',
    info:' Create,add Edit ,delete the user Information'
  },
  

 
  {
    title:"Book Store",
    pic:bookstr,
    tech:'MERN Stack',
    url:'https://github.com/rajarya199/BookStore-Mern',
    info:' Store your book, Create,add Edit ,delete books info.'
  },
  {
    title:"Netflix Ui clone ",
    pic:ntfx,
    tech:'HTML,CSS',
    url:'https://github.com/rajarya199/Netflix-UI-Clone-using-html-css',
    info:' Netflix page clone using html ,css '
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
  {
    title: 'Resume',
    url: 'https://drive.google.com/file/d/190SvrLBtbltrJtIa0x7MV1UuTc9_FTYL/view?usp=sharing',
    icon: BsFillPersonLinesFill,
  },
]
export  const contInfo=[
  {
    title: 'Email',
    url: '/#contact',
    icon: AiOutlineMail,
  }
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