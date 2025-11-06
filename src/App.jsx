import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import PriceCalculator from './components/PriceCalculator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    fadeElements.forEach((element) => {
      if (!element.classList.contains('opacity-0')) {
        element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-[600ms]')
      }
      observer.observe(element)
    })

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <PriceCalculator />
      <Contact />
      <Footer />
      <Chatbot />
      <WhatsAppFloat />
    </div>
  )
}

export default App

