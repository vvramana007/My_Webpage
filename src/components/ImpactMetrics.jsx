import React from 'react'
import { motion } from 'framer-motion'

const ImpactMetrics = () => {
    
    const metrics = [
        {
            number: "10+",
            label: "AI Agent Types",
            description: "From chatbots to voice AI to workflow automation"
        },
        {
            number: "75%",
            label: "Average Time Saved",
            description: "Businesses reclaim hours every week with automation"
        },
        {
            number: "24/7",
            label: "Always Available",
            description: "Your AI agents never sleep, never take breaks"
        },
        {
            number: "99.9%",
            label: "Uptime Guaranteed",
            description: "Enterprise-grade reliability you can count on"
        },
        {
            number: "50+",
            label: "Integrations Supported",
            description: "Connect with your existing tools seamlessly"
        },
        {
            number: "3-5x",
            label: "ROI Multiplier",
            description: "Typical return within the first 6 months"
        }
    ]

    return (
        <div id='impact-metrics' className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-br from-primary/5 to-indigo-50 dark:from-gray-900 dark:to-gray-800'>
            
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center mb-16'
            >
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
                    AI That Delivers Real Impact
                </h2>
                <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                    Our solutions aren't just cutting-edge—they're proven to transform how businesses operate.
                </p>
            </motion.div>

            {/* Metrics Grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700'
                    >
                        <div className='text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-3'>
                            {metric.number}
                        </div>
                        <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>
                            {metric.label}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>
                            {metric.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default ImpactMetrics
