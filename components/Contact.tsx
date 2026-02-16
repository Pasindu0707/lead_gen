'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useState, useRef, FormEvent } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll be in touch soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-300">Ready to Build Your</span>
            <br />
            <span className="text-yellow-accent">Predictable Lead Engine?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-medium mb-8">
            Book a free strategy call and discover how we can build a lead generation system 
            that delivers consistent, qualified calls to your business.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-card shadow-card">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-black">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all text-black placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-black">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all text-black placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-black">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all text-black placeholder-gray-400"
                  placeholder="+61 4XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-semibold mb-3 text-black">
                  Business Type
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g., Plumbing, Electrical, Legal Services"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-semibold mb-3 text-black">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all text-black"
                >
                  <option value="">Select a location</option>
                  <option value="brisbane">Brisbane</option>
                  <option value="ipswich">Ipswich</option>
                  <option value="toowoomba">Toowoomba</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-accent focus:bg-white transition-all resize-none text-black placeholder-gray-400"
                  placeholder="Tell us about your business..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(255, 199, 0, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-5 bg-yellow-accent text-black font-bold rounded-xl text-lg hover:bg-yellow-accent/90 transition-all shadow-lg shadow-yellow-accent/20"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
