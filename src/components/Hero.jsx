import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {
  // Rotating headlines array
  const headlines = [
    {
      main: "AI Agents That",
      highlight: "Work While You Sleep"
    },
    {
      main: "Automate Everything",
      highlight: "Scale Effortlessly"
    },
    {
      main: "Your AI Team,",
      highlight: "Always On, Never Tired"
    },
    {
      main: "From Chaos to Clarity with",
      highlight: "Intelligent Automation"
    },
    {
      main: "Stop Working Harder,",
      highlight: "Start Working Smarter"
    }
  ]

  const [currentHeadline, setCurrentHeadline] = useState(0)

  // Auto-rotate headlines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

      {/* Badge for new businesses - Fresh startup badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className='inline-flex items-center gap-2 border border-primary/30 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full backdrop-blur-sm'>
          <span className='text-2xl'>✨</span>
          <p className='text-xs font-medium text-primary dark:text-white'>
            Fresh AI Solutions • Built for Modern Businesses
          </p>
      </motion.div>

      {/* Rotating Headlines */}
      <div className='relative h-[180px] sm:h-[220px] md:h-[260px] xl:h-[320px] flex items-center justify-center w-full max-w-5xl'>
        <AnimatePresence mode='wait'>
          <motion.h1
            key={currentHeadline}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className='absolute text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold xl:leading-[95px] max-w-5xl'
          >
            {headlines[currentHeadline].main}{' '}
            <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
              {headlines[currentHeadline].highlight}
            </span>
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-600 dark:text-white/80 max-w-4/5 sm:max-w-2xl pb-3'>
        From intelligent chatbots to workflow automation, we build AI solutions that handle repetitive tasks, qualify leads, answer customers, and scale your operations—24/7, without burnout.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className='flex flex-col sm:flex-row gap-4 items-center pb-6'
      >
        <a 
          href="#contact-us" 
          className='flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-xl'
        >
          Start Your AI Journey
          <img src={assets.arrow_icon} alt="" className='w-4'/>
        </a>
        
        <a 
          href="#services" 
          className='flex items-center gap-2 border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-full font-medium cursor-pointer hover:bg-primary hover:text-white transition-all'
        >
          Explore Our Agents
        </a>
      </motion.div>

      {/* Key value propositions - pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-3 max-w-3xl'
      >
        <span className='px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium'>
          🤖 AI Agents
        </span>
        <span className='px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium'>
          ⚡ Workflow Automation
        </span>
        <span className='px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium'>
          💬 Smart Chatbots
        </span>
        <span className='px-4 py-2 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium'>
          🌐 Web Development
        </span>
        <span className='px-4 py-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium'>
          🛠️ IT Consulting
        </span>
      </motion.div>

      {/* Hero image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        viewport={{ once: true }}
        className='relative mt-8'>
          <img 
            src={assets.hero_img} 
            alt="AI automation dashboard showing agents in action" 
            className='w-full max-w-6xl rounded-2xl shadow-2xl'
          />
          <img 
            src={assets.bgImage1} 
            alt="" 
            className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'
          />
      </motion.div>

      {/* Headline indicator dots */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
        className='flex gap-2 mt-4'
      >
        {headlines.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHeadline(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentHeadline === index 
                ? 'bg-primary w-8' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to headline ${index + 1}`}
          />
        ))}
      </motion.div>

    </div>
  )
}

export default Hero
