'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const locations = [
  { name: 'Brisbane', type: 'primary' },
  { name: 'Ipswich', type: 'primary' },
  { name: 'Toowoomba', type: 'additional' },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="locations" 
      ref={ref} 
      className="py-40 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #FFC700 0%, #FFD633 50%, #FFE066 100%), radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
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
            Service Locations
          </h2>
          <p className="text-xl sm:text-2xl text-black/80 max-w-3xl mx-auto font-light">
            Local service, Australia-wide execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg ${
                location.type === 'primary'
                  ? 'bg-black text-white hover:shadow-black/30'
                  : 'bg-white text-black border border-black/20 hover:border-black/40'
              }`}
            >
              {location.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="relative h-80 bg-white rounded-3xl overflow-hidden group border border-black/10 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-7xl mb-6"
              >
                📍
              </motion.div>
              <p className="text-xl text-gray-800 font-medium">Queensland, Australia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
