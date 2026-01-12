"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const presets = {
  heading: {
    y: 24,
    duration: 0.6,
  },
  subheading: {
    y: 20,
    duration: 0.6,
  },
  content: {
    y: 40,
    duration: 0.8,
  },
}

export function ScrollReveal({
  children,
  width = 'fit-content',
  delay = 0,
  className = '',
   preset = 'content', // heading | subheading | content
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px -10% 0px',
  })
    const { y, duration } = presets[preset]

  return (
    <div
      ref={ref}
      style={{
        width,
      }}
      className={className}
    >
      <motion.div
     
       initial={{ opacity: 0, y }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
