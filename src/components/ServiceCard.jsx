import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!divRef.current) return
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl shadow-gray-100 dark:shadow-white/10 transition-shadow duration-300' 
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)} 
            ref={divRef} 
            onMouseMove={handleMouseMove}
        >

            {/* Animated gradient glow effect */}
            <div 
                className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[350px] h-[350px] absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-60 dark:opacity-40' : 'opacity-0'}`} 
                style={{ top: position.y - 175, left: position.x - 175 }} 
            />

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 p-6 sm:p-8 hover:p-7 transition-all rounded-2xl bg-white dark:bg-gray-900 z-10 relative'>

                {/* Icon container */}
                <div className='flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-1 shadow-md'>
                    <div className='bg-white dark:bg-gray-900 rounded-xl p-3'>
                        <img 
                            src={service.icon} 
                            alt={service.title} 
                            className='w-16 h-16 sm:w-20 sm:h-20 object-contain'
                        />
                    </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                    <h3 className='font-bold text-lg sm:text-xl text-gray-800 dark:text-white mb-2'>
                        {service.title}
                    </h3>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {service.description}
                    </p>
                    
                    {/* Optional: Key features list */}
                    {service.features && (
                        <ul className='mt-3 space-y-1'>
                            {service.features.map((feature, idx) => (
                                <li key={idx} className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2'>
                                    <span className='text-primary'>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>

        </motion.div>
    )
}

export default ServiceCard
