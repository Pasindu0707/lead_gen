'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false })

const trustChips = [
  'Done-for-you system',
  'High-intent leads',
  'Local AU focus',
]

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
      style={{
        background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #000000 50%), radial-gradient(ellipse at bottom right, rgba(255, 199, 0, 0.1) 0%, transparent 50%)'
      }}
    >
      <Hero3D />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            Consistent Leads.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-yellow-accent mt-2"
          >
            Predictable Phone Calls.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/60 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
        >
          We build a lead engine for Australian service businesses — so your pipeline doesn't depend on luck.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 199, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Book a strategy call"
            className="px-10 py-5 bg-yellow-accent text-black font-bold rounded-full text-lg hover:bg-yellow-accent/90 transition-all shadow-lg shadow-yellow-accent/20"
          >
            Book a Strategy Call
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="View packages"
            className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:border-white/50 hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            View Packages
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {trustChips.map((chip, index) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 199, 0, 0.5)' }}
              className="px-6 py-3 glass-card rounded-full text-sm font-medium cursor-pointer transition-all"
            >
              {chip}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
