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
      className="py-40 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #FFC700 0%, #FFD633 50%, #FFE066 100%), radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-black">
            Ready to Get Started?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Let's build your lead engine together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold mb-6 text-black">Book Your Strategy Call</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Schedule a free consultation to discuss your business goals and how we can build a consistent lead generation system for you.
              </p>
            </div>
            <ul className="space-y-5 mb-10">
              {['Free strategy consultation', 'Custom lead generation plan', 'No obligation, no pressure'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-yellow-accent mr-4 text-xl">✓</span>
                  <span className="text-lg text-gray-800">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 199, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // In production, this would open Calendly or similar
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Book a call"
              className="px-10 py-5 bg-yellow-accent text-black font-bold rounded-full text-lg hover:bg-yellow-accent/90 transition-all shadow-lg shadow-yellow-accent/20"
            >
              Book a Call
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
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
