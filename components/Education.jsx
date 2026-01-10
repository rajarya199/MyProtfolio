"use client"
import React,{useState} from 'react'
import { ScrollReveal } from './ScrollReveal'
import { education } from '@/constants/constant'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const Education = () => {
      const [expandedId, setExpandedId] = useState(1)

  return (
    <section  className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-serif mb-16">
            Education & <br />
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-neutral-300 ml-3 md:ml-0 md:pl-12 space-y-12">
          {education.map((item) => (
            <ScrollReveal key={item.id} width="100%">
              <div
                className="relative pl-8 md:pl-0 group cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[5px] md:-left-[49px] top-2 w-2.5 h-2.5 rounded-full border border-neutral-400 bg-neutral-50 transition-colors duration-300 ${expandedId === item.id ? 'bg-crimson border-crimson' : 'group-hover:border-crimson'}`}
                />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
                  <h3
                    className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${expandedId === item.id ? 'text-black' : 'text-neutral-500 group-hover:text-black'}`}
                  >
                    {item.institution}
                  </h3>
                  <span className="text-sm font-mono text-neutral-400 shrink-0">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg text-neutral-800">{item.degree}</p>
                  <motion.div
                    animate={{
                      rotate: expandedId === item.id ? 180 : 0,
                    }}
                    className="text-neutral-400"
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
                      <p className="pt-4 text-neutral-600 leading-relaxed max-w-2xl">
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
