'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  {
    title: 'More Qualified Calls',
    description: 'Leads that actually want to buy, not just browse.',
  },
  {
    title: 'Lower Cost Per Lead',
    description: 'Optimized campaigns that maximize your marketing budget.',
  },
  {
    title: 'Consistent Pipeline',
    description: 'Predictable lead flow, month after month.',
  },
]

const testimonials = [
  {
    quote: 'LeadEngine transformed our lead generation. We went from inconsistent referrals to a steady stream of qualified calls.',
    author: 'Client Name',
    business: 'Service Business, Brisbane',
  },
  {
    quote: 'The system they built works on autopilot. We focus on serving customers while the leads keep coming.',
    author: 'Client Name',
    business: 'Service Business, Ipswich',
  },
  {
    quote: 'Best investment we\'ve made in marketing. Clear ROI and professional service throughout.',
    author: 'Client Name',
    business: 'Service Business, Toowoomba',
  },
]

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="results" 
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
            Proven Results
          </h2>
          <p className="text-xl sm:text-2xl text-black/80 max-w-3xl mx-auto font-light">
            Case studies available on request. Here's what our clients experience:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 bg-white rounded-3xl text-center hover-lift border border-black/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">{metric.title}</h3>
              <p className="text-gray-800 leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-4xl font-bold mb-16 text-center text-black">What Clients Say</h3>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: 'easeOut' }}
                whileHover={{ x: 8 }}
                className="p-10 bg-white rounded-3xl border-l-4 border-black shadow-xl"
              >
                <p className="text-xl text-gray-900 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-black/20 to-black/10 rounded-full flex items-center justify-center mr-4 border border-black/20">
                    <span className="text-black font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-700">{testimonial.business}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
