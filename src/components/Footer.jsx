import React from 'react'
// @ts-ignore
import logo from '../assets/record writing.jpeg'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col items-center mb-4">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Record Writing Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Venkatesh - Record Writing Services
            </h3>
          </div>
          <p className="mb-6">
            Professional, reliable, and affordable record writing for college students
          </p>
          <div className="flex justify-center gap-5 my-5">
            <a
              href="https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="mailto:venkatesh8330b@gmail.com"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="pt-5 border-t border-white/10">
          <p className="text-sm opacity-80">
            © 2025 Venkatesh – Record Writing Services | Designed with ❤️ for Students
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

