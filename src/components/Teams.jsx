import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

const Teams = () => {

    const roles = [
        {
            icon: "🤖",
            role: "AI Engineers",
            description: "Building intelligent agents that understand and adapt"
        },
        {
            icon: "⚙️",
            role: "Automation Specialists",
            description: "Designing workflows that eliminate repetitive work"
        },
        {
            icon: "💬",
            role: "Conversation Designers",
            description: "Crafting natural, helpful chatbot experiences"
        },
        {
            icon: "🔧",
            role: "Integration Experts",
            description: "Connecting your tools into seamless ecosystems"
        },
        {
            icon: "📊",
            role: "Data Scientists",
            description: "Training models on your business data"
        },
        {
            icon: "🎨",
            role: "UX Designers",
            description: "Making AI interfaces intuitive and beautiful"
        },
        {
            icon: "🛡️",
            role: "Security Engineers",
            description: "Protecting your data with enterprise-grade security"
        },
        {
            icon: "📞",
            role: "Support Team",
            description: "Ensuring your AI solutions run flawlessly"
        }
    ]

    return (
        <div className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900'>
            
            <Title 
                title='Our Expertise' 
                desc='A dedicated team of specialists working together to bring your AI vision to life.'
            />

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12'>
                {roles.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-center text-center p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
                    >
                        <div className='text-5xl mb-4'>{role.icon}</div>
                        
                        {/* CRITICAL: These classes control text color */}
                        <h3 className='font-bold text-base text-gray-800 dark:text-white mb-2'>
                            {role.role}
                        </h3>
                        
                        <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                            {role.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Teams
