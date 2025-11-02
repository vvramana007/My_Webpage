import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const AgentShowcase = () => {

    const agentData = [
        {
            title: 'AI Customer Support Agent',
            description: "24/7 intelligent chatbot that handles customer inquiries, learns from every conversation, and escalates complex issues seamlessly. Reduces support costs by 60% while improving satisfaction.",
            image: assets.work_mobile_app,
            category: 'Customer Service'
        },
        {
            title: 'Workflow Automation Engine',
            description: "Connects your entire tech stack—from CRM to email to calendar. Automates repetitive tasks, syncs data in real-time, and eliminates manual data entry across platforms.",
            image: assets.work_dashboard_management,
            category: 'Automation'
        },
        {
            title: 'Lead Qualification Agent',
            description: "Intelligent agent that engages website visitors, asks qualifying questions, scores leads automatically, and books meetings with your sales team—converting visitors into opportunities.",
            image: assets.work_fitness_app,
            category: 'Sales & Marketing'
        },
        {
            title: 'Voice AI Receptionist',
            description: "Human-like voice agent that answers calls, schedules appointments, routes inquiries, and provides information—never misses a call, never takes a break.",
            image: assets.work_mobile_app,
            category: 'Voice AI'
        },
        {
            title: 'Document Processing Agent',
            description: "Extracts data from invoices, receipts, contracts, and forms. Processes hundreds of documents in minutes with 99% accuracy, feeding clean data directly into your systems.",
            image: assets.work_dashboard_management,
            category: 'Data Processing'
        },
        {
            title: 'Meeting Prep Automation',
            description: "Researches attendees, pulls relevant data, generates briefing documents, and prepares talking points automatically before every meeting. You walk in fully prepared, every time.",
            image: assets.work_fitness_app,
            category: 'Productivity'
        }
    ]

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='agents' 
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'
        >
            <Title 
                title='AI Agents We Build' 
                desc='From customer support to workflow automation—discover intelligent agents designed to transform how your business operates.' 
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
                {
                    agentData.map((agent, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index} 
                            className='group hover:scale-105 duration-300 transition-all cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700'
                        >
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={agent.image} 
                                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                                    alt={agent.title} 
                                />
                                <div className='absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium'>
                                    {agent.category}
                                </div>
                            </div>
                            
                            <div className='p-5'>
                                <h3 className='text-lg font-bold mb-2 group-hover:text-primary transition-colors'>
                                    {agent.title}
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                                    {agent.description}
                                </p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className='mt-8 text-center'
            >
                <p className='text-gray-600 dark:text-gray-300 mb-4 max-w-2xl'>
                    These are just a few examples. We build custom AI agents tailored to your specific business needs and processes.
                </p>
                <a 
                    href="#contact-us" 
                    className='inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-xl'
                >
                    Build Your Custom Agent
                    <img src={assets.arrow_icon} alt="" className='w-4'/>
                </a>
            </motion.div>

        </motion.div>
    )
}

export default AgentShowcase
