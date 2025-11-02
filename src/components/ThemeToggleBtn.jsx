import React, { useEffect } from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme || (prefersDarkMode ? 'dark' : 'light'))
    }, [setTheme])

    useEffect(() => {
        const html = document.documentElement
        if (theme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className='relative size-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-primary transition-colors duration-300 shadow-md hover:shadow-lg'
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <img src={assets.sun_icon} className='size-5' alt="Sun" />
            ) : (
                <img src={assets.moon_icon} className='size-5' alt="Moon" />
            )}
        </motion.button>
    )
}

export default ThemeToggleBtn
