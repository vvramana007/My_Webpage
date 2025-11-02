import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* Footer Top */}
      <div className='flex justify-between lg:items-start max-lg:flex-col gap-10'>

        {/* Brand & Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-300'
        >
          {/* Logo */}
          <img 
            src={assets.helion_logo} 
            className='w-32 sm:w-44' 
            alt="Helion AI Solutions Logo" 
          />
          
          {/* Tagline */}
          <p className='max-w-md leading-relaxed'>
            Brighten your business with intelligent AI agents, seamless automation, and custom solutions that scale. From chatbots to workflows—we build the future of work.
          </p>

          {/* Quick Links */}
          <ul className='flex flex-wrap gap-6'>
            <li><a className='hover:text-primary transition-colors' href="#hero">Home</a></li>
            <li><a className='hover:text-primary transition-colors' href="#impact-metrics">Impact</a></li>
            <li><a className='hover:text-primary transition-colors' href="#services">Services</a></li>
            <li><a className='hover:text-primary transition-colors' href="#agents">AI Agents</a></li>
            <li><a className='hover:text-primary transition-colors' href="#why-choose-us">Why Us</a></li>
            <li><a className='hover:text-primary transition-colors' href="#contact-us">Contact</a></li>
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-700 dark:text-gray-300 max-w-md'
        >
          <h3 className='font-semibold text-lg mb-2'>Stay Ahead with AI Insights</h3>
          <p className='text-sm mb-6 leading-relaxed'>
            Get monthly updates on AI automation trends, agent tips, and success stories—delivered straight to your inbox.
          </p>
          
          {/* Email Subscription Form */}
          <div className='flex gap-2 text-sm'>
            <input 
              type="email" 
              placeholder='your@email.com' 
              className='flex-1 p-3 text-sm outline-none rounded dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary transition-colors'
            />
            <button className='bg-primary text-white rounded px-6 py-3 hover:bg-primary/90 transition-colors font-medium'>
              Subscribe
            </button>
          </div>
        </motion.div>

      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-8'/>

      {/* Footer Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-600 dark:text-gray-400 flex justify-center sm:justify-between gap-4 flex-wrap items-center'
      >
        
        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Helion AI Solutions. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className='flex items-center gap-4'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity'>
            <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity'>
            <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity'>
            <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity'>
            <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5' />
          </a>
        </div>

        {/* Optional: Privacy Links */}
        <div className='flex gap-4 text-xs'>
          <a href="#" className='hover:text-primary transition-colors'>Privacy Policy</a>
          <a href="#" className='hover:text-primary transition-colors'>Terms of Service</a>
        </div>

      </motion.div>

    </motion.div>
  )
}

export default Footer
