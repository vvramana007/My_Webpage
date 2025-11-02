import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'

const Services = () => {

  const servicesData = [
  {
  title: "RegTech Compliance Agent",
  description: "I monitor regulations, automate reporting, and flag risks before they become costly. Stay secure, audit-ready, and future-proof.",
  icon: assets.icon_regtech
},
{
  title: "Smart Portfolio Bot",
  description: "Analyzing real-time market data, I suggest investments that match your goals. Your wealth, multiplied intelligently—every second.",
  icon: assets.icon_portfolio
},

  
 {
  title: "Recruitment AI Assistant",
  description: "I shortlist, schedule, and follow up with candidates—so your talent pipeline never goes cold.",
  icon: assets.icon_recruitment
},
{
  title: "Onboarding Concierge",
  description: "From welcome emails to training modules, I guide each new team member and answer questions instantly.",
  icon: assets.icon_onboarding
},

  {
  title: "Personalized Shopbot",
  description: "Hello! I recommend products and answer buyer questions in real-time, raising your conversion, basket size, and delight.",
  icon: assets.icon_shopbot
},
{
  title: "Order Fulfillment Automation",
  description: "I handle confirmations, shipping, and feedback—all hands-off—from basket to doorstep.",
  icon: assets.icon_fulfillment
},

  {
  title: "Virtual Health Assistant",
  description: "I answer patient queries, schedule appointments, and send custom reminders—improving care for everyone.",
  icon: assets.icon_health
},
{
  title: "Data Privacy Watchdog",
  description: "Scanning every interaction, I enforce HIPAA and secure patient data. Trust is my protocol.",
  icon: assets.icon_privacy
},

]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title 
  title='AI Agents at Your Service' 
  desc='Discover the specialized agents transforming how businesses operate, communicate, and win.' 
/>


    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services
