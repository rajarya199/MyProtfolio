"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { contactInfo, contInfo, myinfo } from "@/constants/constant";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleFade = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const typingText = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};


const Main = () => {
  const roleText = "A Full Stack Web Developer";

  return (
    <div id="home" className="w-full h-screen pt-10 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* tag line */}
          <motion.p
            variants={fadeUp}
            className="uppercase text-sm tracking-widest mt-10 text-gray-600 dark:text-[#ecf0f3]"
          >
            LET&apos;S BUILD SOMETHING TOGETHER
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="py-4 text-gray-700 dark:text-[#ecf0f3]"
          >
            Hi, I&apos;m{" "}
            <span className="text-[#5651e5] dark:text-[#1e40af]">
              Rajan Aryal
            </span>
          </motion.h1>

          {/* Role (Typing) */}
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="py-4 text-gray-700 dark:text-[#ecf0f3] flex justify-center flex-wrap"
          >
            {roleText.split("").map((char, index) => (
              <motion.span key={index} variants={typingText}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="py-4 sm:max-w-[70%] m-auto text-gray-600 dark:text-[#ecf0f3]"
          >
            I’m focused on building web applications integrating front-end with
            back-end technologies.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={container}
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                variants={scaleFade}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.title}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition duration-300 dark:shadow-gray-950"
              >
                <contact.icon />
              </motion.a>
            ))}

            {contInfo.map((cont, index) => (
              <motion.div key={index} variants={scaleFade}>
                <Link
                  href={cont.url}
                  aria-label={cont.title}
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition duration-300 dark:shadow-gray-950 block"
                >
                  <cont.icon />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center space-x-4"
          >
            <a
              href={myinfo.resume}
              download
              className="px-6 py-2 bg-[#5651e5] text-white rounded-lg shadow-lg hover:bg-[#4338ca] transition duration-300 dark:bg-gradient-to-r dark:from-[#0f172a] dark:to-[#1e40af]"
            >
              Download CV
            </a>

            <Link
              href="/#contact"
              className="px-6 py-2 border-2 border-[#5651e5] text-[#5651e5] rounded-lg shadow-lg hover:bg-[#5651e5] hover:text-white transition duration-300 dark:border-[#1e40af] dark:text-[#ecf0f3]"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
