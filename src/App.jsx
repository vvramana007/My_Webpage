import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactMetrics from './components/ImpactMetrics'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import AgentShowcase from './components/AgentShowcase'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import './index.css'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor Position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      
      {/* Navigation */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Hero Section with Rotating Headlines */}
      <Hero />
      
      {/* Impact Metrics - Shows impressive stats */}
      <ImpactMetrics />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us - Value Propositions */}
      <WhyChooseUs />
      
      {/* AI Agent Showcase */}
      <AgentShowcase />
      
      {/* Our Expertise (formerly Teams) */}
      <Teams />
      
      {/* Contact Form */}
      <ContactUs />
      
      {/* Footer */}
      <Footer theme={theme} />

      {/* Custom AI Halo Cursor */}
      <div 
        ref={outlineRef} 
        className='fixed top-0 left-0 h-14 w-14 rounded-full bg-orange-400/20 pointer-events-none z-[9999] transition-transform duration-300 ease-out' 
      />
      <div 
        ref={dotRef} 
        className='fixed top-0 left-0 h-4 w-4 rounded-full bg-orange-500 pointer-events-none z-[9999]' 
      />

    </div>
  )
}

export default App
