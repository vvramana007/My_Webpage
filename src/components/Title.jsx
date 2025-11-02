import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title, desc, subtitle, align = 'center' }) => {
  return (
    <div className={`text-${align} max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
      
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className='inline-block mb-3'
        >
          <span className='text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full'>
            {subtitle}
          </span>
        </motion.div>
      )}

      {/* Title - CRITICAL dark mode class */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4'
      >
        {title}
      </motion.h2>

      {/* Description - CRITICAL dark mode class */}
      {desc && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  )
}

export default Title
