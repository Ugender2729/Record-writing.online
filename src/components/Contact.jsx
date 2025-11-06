import React from 'react'

const Contact = () => {

  const contactMethods = [
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '9676728330',
      link: 'https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20would%20like%20to%20discuss%20my%20record%20writing%20project.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'venkatesh8330b@gmail.com',
      link: 'mailto:venkatesh8330b@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 9676728330',
      link: 'tel:+919676728330',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 relative section-title">
            Get In Touch
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Have questions or ready to start your project? I'm here to help! Reach out through any channel below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`${method.bgColor} rounded-2xl p-6 shadow-custom hover:shadow-xl transition-all hover:-translate-y-2 fade-in group`}
              >
                <div className={`${method.color} text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={method.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text">{method.title}</h3>
                <p className="text-text-light">{method.value}</p>
                <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to contact →
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white shadow-custom fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-3xl"></i>
                Location
              </h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-location-dot text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3 text-lg">Address</h4>
                      <a
                        href="https://maps.app.goo.gl/a7bZCBcXxqG8A28F6?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block opacity-90 leading-relaxed hover:opacity-100 transition-opacity hover:text-white/100"
                      >
                        <p className="mb-2">
                          Meseva Nallapochamma Temple, Sanjeevaiah Colony, Raju Colony, Balanagar, Hyderabad, Telangana 500042
                        </p>
                        <div className="flex items-center gap-2 text-sm mt-3 text-blue-200 hover:text-white transition-colors">
                          <i className="fas fa-map-marked-alt"></i>
                          <span>View on Google Maps</span>
                          <i className="fas fa-external-link-alt text-xs"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-lg">Delivery Options</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-shipping-fast text-blue-300"></i>
                      <span>Fast & Secure Shipping any where in Hyderabad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-hand-holding-box text-blue-300"></i>
                      <span>Pickup Available (Local Areas in Hyderabad)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-truck text-blue-300"></i>
                      <span>Express Delivery Available</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20would%20like%20to%20know%20if%20you%20provide%20services%20in%20my%20area."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg mt-6"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Check Service Availability
                </a>
              </div>
            </div>

            {/* Contact Info & Additional Details */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-custom fade-in">
                <h3 className="text-xl font-semibold mb-4 text-text flex items-center gap-2">
                  <i className="fas fa-clock text-primary"></i>
                  Business Hours
                </h3>
                <div className="space-y-2 text-text-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-text">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-text">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-text">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-6 shadow-custom fade-in">
                <h3 className="text-xl font-semibold mb-4 text-text flex items-center gap-2">
                  <i className="fas fa-star text-primary"></i>
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-text-light">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Fast response time (within 2 hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Free consultation and quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Flexible payment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


