import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1673&q=80',
      title: 'Professional Record Writing Services',
      subtitle: 'Fast, Neat & Reliable Record Writing Delivered in 3–5 Days',
    },
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80',
      title: 'Expert Handwriting & Formatting',
      subtitle: 'Clean, Professional Records at Just ₹13 per Page',
    },
    {
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      title: 'Trusted by Students Nationwide',
      subtitle: 'Your Academic Success is Our Priority',
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1622&q=80',
      title: 'Bulk Orders Welcome',
      subtitle: 'Special Discounts for 50+ Pages',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Removed goToPrevious and goToNext functions - navigation arrows removed

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden pt-24 md:pt-28 pb-8"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(rgba(74, 111, 165, 0.7), rgba(74, 111, 165, 0.7)), url('${slide.image}') no-repeat center center/cover`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <div
            key={currentSlide}
            className="animate-fade-in"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-5 px-2 animate-slide-up leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 animate-slide-up-delay px-2">
              {slides[currentSlide].subtitle}
            </p>

            {/* Professional Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in-delay px-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">5000+</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Pages Written</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">1000+</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Happy Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">5+</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Satisfaction Rate</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6 mb-6 md:mb-8 animate-fade-in-delay px-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <i className="fas fa-check-circle text-green-300 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm md:text-base">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <i className="fas fa-shipping-fast text-blue-300 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm md:text-base">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <i className="fas fa-shield-alt text-yellow-300 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm md:text-base">100% Confidential</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <i className="fas fa-star text-yellow-300 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm md:text-base">4.9/5 Rating</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 max-w-4xl mx-auto animate-fade-in-delay px-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 text-left hover:bg-white/15 transition-all">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rupee-sign text-white text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm md:text-base">Affordable Pricing</h3>
                    <p className="text-xs md:text-sm text-white/80">Just ₹13 per page - Best value in the market</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 text-left hover:bg-white/15 transition-all">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm md:text-base">Quick Turnaround</h3>
                    <p className="text-xs md:text-sm text-white/80">3-5 days delivery, urgent orders welcome</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 text-left hover:bg-white/15 transition-all">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-edit text-white text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm md:text-base">Neat Handwriting</h3>
                    <p className="text-xs md:text-sm text-white/80">Professional, clean, and error-free records</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-delay px-2">
              <a
                href="https://wa.me/919676728330?text=Hi%20Venkatesh!%20I'm%20interested%20in%20your%20record%20writing%20services.%20Can%20you%20please%20provide%20more%20details?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 gradient-whatsapp text-white rounded-full font-medium shadow-custom hover:shadow-lg hover:-translate-y-1 transition-all w-full sm:w-auto text-center text-sm md:text-base"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Get Quote on WhatsApp
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium border-2 border-white/30 hover:bg-white/20 transition-all w-full sm:w-auto text-center text-sm md:text-base"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact via Email
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/80 text-xs sm:text-sm animate-fade-in-delay px-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <i className="fas fa-users text-white/60 text-sm"></i>
                <span>Trusted by 1000+ Students</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
                <i className="fas fa-university text-white/60 text-sm"></i>
                <span>All Universities & Colleges</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <i className="fas fa-award text-white/60 text-sm"></i>
                <span>Premium Quality Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/75 w-2 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <i className="fas fa-chevron-down text-white/70 text-xl md:text-2xl"></i>
      </div>
    </section>
  )
}

export default Hero

