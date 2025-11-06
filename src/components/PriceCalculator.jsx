import React, { useState } from 'react'

const PriceCalculator = () => {
  const [pages, setPages] = useState(1)
  const [urgent, setUrgent] = useState(false)
  const [bulkDiscount, setBulkDiscount] = useState(0)

  const basePrice = 13
  const urgentCharge = 0.2 // 20% extra for urgent
  const bulkThreshold = 50

  // Calculate bulk discount
  React.useEffect(() => {
    if (pages >= bulkThreshold) {
      if (pages >= 100) {
        setBulkDiscount(15) // 15% discount for 100+ pages
      } else if (pages >= 99) {
        setBulkDiscount(5) // 10% discount for 50+ pages
      }
    } else {
      setBulkDiscount(0)
    }
  }, [pages])

  const calculatePrice = () => {
    let total = pages * basePrice

    // Apply bulk discount
    if (bulkDiscount > 0) {
      total = total * (1 - bulkDiscount / 100)
    }

    // Apply urgent charge
    if (urgent) {
      total = total * (1 + urgentCharge)
    }

    return Math.round(total)
  }

  const totalPrice = calculatePrice()
  const savings = pages >= bulkThreshold ? Math.round(pages * basePrice * (bulkDiscount / 100)) : 0
  const estimatedDays = urgent ? 1 : pages <= 20 ? 3 : pages <= 50 ? 4 : 5

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/5 via-secondary to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-4 relative section-title">
          Price Calculator
        </h2>
        <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
          Calculate the exact cost for your record writing project. Get instant pricing with transparent breakdown.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input Section */}
            <div className="bg-white rounded-2xl p-8 shadow-custom fade-in">
              <div className="mb-6">
                <label htmlFor="pages" className="block text-lg font-semibold mb-3 text-text">
                  Number of Pages
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="pages"
                    min="1"
                    max="500"
                    value={pages}
                    onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-6 py-4 text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light">
                    pages
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setPages(Math.max(1, pages - 5))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    -5
                  </button>
                  <button
                    onClick={() => setPages(Math.max(1, pages - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    -1
                  </button>
                  <button
                    onClick={() => setPages(pages + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    +1
                  </button>
                  <button
                    onClick={() => setPages(pages + 5)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    +5
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={urgent}
                    onChange={(e) => setUrgent(e.target.checked)}
                    className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                  />
                  <div>
                    <span className="font-semibold text-text">Urgent Delivery</span>
                    <p className="text-sm text-text-light">Get it delivered in 1-2 days (+20% charge)</p>
                  </div>
                </label>
              </div>

              {/* Bulk Discount Info */}
              {pages >= bulkThreshold && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-gift text-green-600"></i>
                    <span className="font-semibold text-green-800">
                      Bulk Discount Applied! ({bulkDiscount}% off)
                    </span>
                  </div>
                  <p className="text-sm text-green-700">
                    {pages >= 100
                      ? 'You qualify for our maximum discount!'
                      : 'Great savings on bulk orders!'}
                  </p>
                </div>
              )}

              <div className="bg-primary/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-light">Base Price</span>
                  <span className="font-semibold">₹{pages * basePrice}</span>
                </div>
                {bulkDiscount > 0 && (
                  <div className="flex items-center justify-between mb-2 text-green-600">
                    <span>Bulk Discount ({bulkDiscount}%)</span>
                    <span className="font-semibold">-₹{savings}</span>
                  </div>
                )}
                {urgent && (
                  <div className="flex items-center justify-between mb-2 text-orange-600">
                    <span>Urgent Charge (20%)</span>
                    <span className="font-semibold">
                      +₹{Math.round((pages * basePrice * (1 - bulkDiscount / 100)) * urgentCharge)}
                    </span>
                  </div>
                )}
                <div className="border-t-2 border-primary/20 pt-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-text">Total Price</span>
                    <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white shadow-custom fade-in">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">₹{totalPrice}</div>
                <div className="text-xl opacity-90">Total Cost</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-clock text-2xl"></i>
                    <div>
                      <div className="font-semibold">Estimated Delivery</div>
                      <div className="text-sm opacity-80">
                        {estimatedDays} {estimatedDays === 1 ? 'day' : 'days'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-rupee-sign text-2xl"></i>
                    <div>
                      <div className="font-semibold">Price per Page</div>
                      <div className="text-sm opacity-80">
                        ₹{bulkDiscount > 0
                          ? Math.round((basePrice * (1 - bulkDiscount / 100)) * (urgent ? 1.2 : 1))
                          : urgent
                          ? Math.round(basePrice * 1.2)
                          : basePrice}
                      </div>
                    </div>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border-2 border-green-300/30">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-piggy-bank text-2xl"></i>
                      <div>
                        <div className="font-semibold">You Save</div>
                        <div className="text-lg">₹{savings}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/919676728330?text=Hi%20Venkatesh!%20I%20need%20${pages}%20pages%20of%20record%20writing${urgent ? '%20(Urgent)' : ''}.%20Total%20cost:%20₹${totalPrice}.%20Please%20confirm.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Order Now on WhatsApp
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-custom text-center">
              <i className="fas fa-shield-alt text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Quality Guaranteed</h4>
              <p className="text-sm text-text-light">100% satisfaction or money back</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom text-center">
              <i className="fas fa-lock text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Secure Payment</h4>
              <p className="text-sm text-text-light">Pay after delivery confirmation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom text-center">
              <i className="fas fa-redo text-3xl text-primary mb-3"></i>
              <h4 className="font-semibold mb-2">Free Revisions</h4>
              <p className="text-sm text-text-light">Unlimited corrections included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceCalculator

