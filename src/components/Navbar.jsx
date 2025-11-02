import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "framer-motion"

const Navbar = ({theme, setTheme}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-700/50'
        >
            {/* Brand logo */}
            <a href="#hero" className='flex items-center'>
                <img 
                    src={assets.helion_logo} 
                    className='w-32 sm:w-40 cursor-pointer hover:opacity-80 transition-opacity' 
                    alt='Helion AI Solutions'
                    title="Helion AI Solutions — Brighten Your Business with AI" 
                />
            </a>

            {/* Sidebar / Main nav menu */}
            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-64 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-gradient-to-b max-sm:from-primary max-sm:to-primary/90 max-sm:text-white max-sm:pt-20 max-sm:shadow-2xl flex sm:items-center gap-5 sm:gap-7 transition-all duration-300`}>

                <img 
                    src={assets.close_icon} 
                    alt="Close menu" 
                    className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer hover:scale-110 transition-transform' 
                    onClick={()=> setSidebarOpen(false)}
                />

                <a onClick={()=>setSidebarOpen(false)} href="#hero" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    Home
                </a>
                <a onClick={()=>setSidebarOpen(false)} href="#impact-metrics" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    Impact
                </a>
                <a onClick={()=>setSidebarOpen(false)} href="#services" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    Services
                </a>
                <a onClick={()=>setSidebarOpen(false)} href="#agents" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    AI Agents
                </a>
                <a onClick={()=>setSidebarOpen(false)} href="#why-choose-us" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    Why Us
                </a>
                <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='sm:hover:text-primary sm:hover:border-b-2 sm:border-primary transition-all'>
                    Contact
                </a>
            </div>

            <div className='flex items-center gap-2 sm:gap-4'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

                <img 
                    src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
                    alt="Open menu" 
                    onClick={()=> setSidebarOpen(true)} 
                    className='w-8 sm:hidden cursor-pointer hover:scale-110 transition-transform'
                />

                <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
                    Get Started <img src={assets.arrow_icon} width={14} alt="" />
                </a>
            </div>
        </motion.div>
    )
}

export default Navbar
