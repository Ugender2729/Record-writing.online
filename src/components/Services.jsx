import React, { useEffect, useRef, useState } from 'react'

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const servicesRef = useRef(null)

  const services = [
    {
      icon: 'fas fa-pen-fancy',
      title: 'Record Writing',
      description: 'Professional record writing at just ₹13 per page with clean handwriting and proper formatting.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: 'fas fa-clock',
      title: 'Fast Delivery',
      description: 'Your records delivered within 3-5 days, ensuring you never miss submission deadlines.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: 'fas fa-edit',
      title: 'Custom Requests',
      description: 'Specialized services for lab records, practical notes, and other academic requirements.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Bulk Orders',
      description: 'Discounts available for bulk orders of 50+ pages. Contact for customized pricing.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const items = servicesRef.current?.querySelectorAll('.service-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 relative section-title">
          My Services
        </h2>
        <p className="text-center text-text-light mb-8 md:mb-12 max-w-2xl mx-auto">
          Comprehensive record writing solutions tailored to your academic needs
        </p>
        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-item bg-white rounded-xl p-6 md:p-8 text-center shadow-custom hover:shadow-2xl transition-all duration-500 group ${
                visibleItems.includes(index)
                  ? 'animate-service-fade-in'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="relative mb-5 md:mb-6">
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <i className={`${service.icon} text-white text-3xl md:text-4xl`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-text group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-text-light leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Learn more</span>
                  <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-10">
          <a
            href="https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20would%20like%20to%20get%20a%20quote%20for%20record%20writing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 gradient-whatsapp text-white rounded-full font-medium shadow-custom hover:shadow-lg hover:-translate-y-1 transition-all text-sm md:text-base"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

