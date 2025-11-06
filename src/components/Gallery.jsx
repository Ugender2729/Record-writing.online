import React, { useEffect, useRef, useState } from 'react'

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const galleryRef = useRef(null)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80',
      alt: 'Writing Sample 1',
      title: 'Neat Handwriting',
    },
    {
      url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80',
      alt: 'Writing Sample 2',
      title: 'Professional Format',
    },
    {
      url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Writing Sample 3',
      title: 'Clean Layout',
    },
    {
      url: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      alt: 'Writing Sample 4',
      title: 'Perfect Presentation',
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

    const items = galleryRef.current?.querySelectorAll('.gallery-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section id="gallery" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12 relative section-title">
          Work Samples
        </h2>
        <p className="text-center text-text-light mb-8 md:mb-12 max-w-2xl mx-auto">
          Take a look at our professional record writing samples
        </p>
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {images.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`gallery-item rounded-lg overflow-hidden shadow-custom relative h-56 sm:h-64 md:h-72 group cursor-pointer ${
                visibleItems.includes(index)
                  ? 'animate-gallery-fade-in'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.alt}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 z-20">
                <i className="fas fa-expand text-primary"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

