import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
    
    const reasons = [
        {
            icon: "⚡",
            title: "Rapid Deployment",
            description: "Your AI agents go live in days, not months. We use proven frameworks and pre-built templates to accelerate delivery."
        },
        {
            icon: "🎯",
            title: "Custom-Built Solutions",
            description: "No cookie-cutter templates. Every agent is tailored to your specific workflows, data, and business goals."
        },
        {
            icon: "💰",
            title: "ROI-Focused Approach",
            description: "We measure success by impact—time saved, costs reduced, revenue increased. Our agents pay for themselves within months."
        },
        {
            icon: "🔒",
            title: "Enterprise-Grade Security",
            description: "Your data stays protected with encryption, compliance controls, and secure integrations across all platforms."
        },
        {
            icon: "📈",
            title: "Scalable by Design",
            description: "Start small, grow big. Our solutions scale seamlessly from 10 users to 10,000 without performance degradation."
        },
        {
            icon: "🤝",
            title: "Ongoing Support",
            description: "We don't disappear after launch. Get continuous optimization, updates, and dedicated support as your needs evolve."
        }
    ]

    return (
        <div id='why-choose-us' className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
            
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center mb-12'
            >
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
                    Why Choose Helion AI Solutions?
                </h2>
                <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                    We're not just building AI agents—we're building your competitive advantage. Here's what sets us apart.
                </p>
            </motion.div>

            {/* Reasons Grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary'
                    >
                        <div className='text-4xl mb-4'>{reason.icon}</div>
                        <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>
                            {reason.title}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default WhyChooseUs
