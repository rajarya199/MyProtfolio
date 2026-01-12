"use client"
import React, {useState} from 'react'
import { ScrollReveal } from './ScrollReveal'
import { education } from '@/constants/constant'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const Education = () => {
  const [expandedId, setExpandedId] = useState(1)

  return (
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal preset="heading">
          <h2 className="text-4xl md:text-6xl font-serif mb-16 text-gray-900 dark:text-gray-100">
            Education & <br />
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-0 md:pl-12 space-y-12">
          {education.map((item) => (
            <ScrollReveal preset='content' key={item.id} width="100%" delay={item.id * 0.05}>
              <div
                className="relative pl-8 md:pl-0 group cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              >
                {/* Timeline Dot */}
                        <div
                className={`absolute -left-[5px] md:-left-[49px] top-2 w-2.5 h-2.5 rounded-full border-4 transition-all duration-300 shadow-sm ${
                  expandedId === item.id 
                    ? 'bg-blue-500 border-blue-500 shadow-blue-500/25 ring-2 ring-blue-500/30' 
                    : 'border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'
                }`}
              />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
                  <h3
                    className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${
                      expandedId === item.id 
                        ? 'text-gray-900 dark:text-gray-100' 
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100'
                    }`}
                  >
                    {item.institution}
                  </h3>
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400 shrink-0">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    {item.degree}
                  </p>
                  <motion.div
                    animate={{
                      rotate: expandedId === item.id ? 180 : 0,
                    }}
                    className="text-gray-400 dark:text-gray-500"
                  >
                    {expandedId === item.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
