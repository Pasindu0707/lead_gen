'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'High Quality Lead Generation',
    description: 'Our core service: consistent, qualified inbound leads and phone calls for your business.',
    icon: '🎯',
  },
  {
    title: 'Google Ads Management',
    description: 'Strategic paid advertising campaigns optimized for high-intent local searches.',
    icon: '📈',
  },
  {
    title: 'Website Development',
    description: 'Conversion-focused websites designed to turn visitors into leads and customers.',
    icon: '💻',
  },
  {
    title: 'Graphic Design',
    description: 'Premium brand assets and marketing materials that build trust and drive action.',
    icon: '🎨',
  },
  {
    title: 'Videography',
    description: 'Professional video content that showcases your services and builds credibility.',
    icon: '🎥',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="services" 
      ref={ref} 
      className="py-40 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #FFC700 0%, #FFD633 50%, #FFE066 100%), radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
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
            What We Offer
          </h2>
          <p className="text-xl sm:text-2xl text-black/80 max-w-3xl mx-auto font-light">
            Core lead generation plus supporting services to amplify your results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group p-8 bg-white rounded-3xl hover-lift cursor-pointer relative overflow-hidden border border-black/10 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500" />
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-yellow-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-800 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
