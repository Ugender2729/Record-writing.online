import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12 relative section-title">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 fade-in">
            <h3 className="text-2xl font-semibold mb-4">Hi! I'm Venkatesh</h3>
            <p className="mb-4 text-text-light">
              A dedicated freelancer specializing in professional record writing for college students. I ensure neat, accurate, and timely delivery — all at just ₹13 per page.
            </p>
            <p className="mb-6 text-text-light">
              With years of experience helping students across various disciplines, I understand the importance of well-maintained records for academic success. My services are designed to save you time and reduce stress during your busy academic schedule.
            </p>
            <a
              href="https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20would%20like%20to%20discuss%20my%20record%20writing%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 gradient-whatsapp text-white rounded-full font-medium shadow-custom hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Get in Touch
            </a>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden shadow-custom fade-in">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Working on records"
              className="w-full h-auto block hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

