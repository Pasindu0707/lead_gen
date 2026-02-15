'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Audit & Offer Alignment',
    description: 'We analyze your business, target market, and current marketing to identify the highest-converting offers and messaging.',
  },
  {
    number: '02',
    title: 'Build the Funnel + Tracking',
    description: 'We set up your lead generation system: landing pages, tracking pixels, call routing, and analytics dashboards.',
  },
  {
    number: '03',
    title: 'Launch Campaigns + Optimization',
    description: 'We launch your campaigns and continuously optimize based on real data to improve performance and lower costs.',
  },
  {
    number: '04',
    title: 'Scale What Works',
    description: 'Once we find what converts, we scale it up — increasing your lead volume while maintaining quality and ROI.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="process" 
      ref={ref} 
      className="py-40 px-4 sm:px-6 lg:px-8 bg-white"
      style={{
        background: 'linear-gradient(135deg, #fffef5 0%, #ffffff 50%, #fefefe 100%), radial-gradient(ellipse at bottom right, rgba(255, 199, 0, 0.2) 0%, transparent 50%)'
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
            How It Works
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            A proven process that delivers consistent results.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ x: index % 2 === 0 ? -8 : 8 }}
              className="flex flex-col md:flex-row items-start gap-12 group"
            >
              <div className="flex-shrink-0 relative">
                <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-yellow-accent/10 group-hover:text-yellow-accent/20 transition-colors">
                  {step.number}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-accent/20 border-2 border-yellow-accent/30 flex items-center justify-center">
                    <span className="text-yellow-accent font-bold text-2xl">{step.number}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black group-hover:text-yellow-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
