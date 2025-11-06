import React, { useState, useEffect } from 'react'
// @ts-ignore
import logo from '../assets/record writing.jpeg'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 gradient-primary shadow-lg transition-all ${
        scrolled ? 'py-1.5' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
          >
            <img 
              src={logo} 
              alt="Record Writing Logo" 
              className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white/40 shadow-lg transition-all ${scrolled ? 'w-10 h-10 md:w-12 md:h-12' : ''}`}
            />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              
            </span>
          </a>
          <ul className={`hidden md:flex list-none gap-2 lg:gap-4`}>
            <li>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
                className="px-3 py-1.5 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className="px-3 py-1.5 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection('services') }}
                className="px-3 py-1.5 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}
                className="px-3 py-1.5 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className="px-3 py-1.5 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="md:hidden text-2xl cursor-pointer text-white hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
                  className="block px-4 py-3 rounded-lg font-semibold text-lg text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                  className="block px-4 py-3 rounded-lg font-semibold text-lg text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services') }}
                  className="block px-4 py-3 rounded-lg font-semibold text-lg text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}
                  className="block px-4 py-3 rounded-lg font-semibold text-lg text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                  className="block px-4 py-3 rounded-lg font-semibold text-lg text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

