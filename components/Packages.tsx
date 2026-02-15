'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    name: 'Lead Generate',
    price: 'From $___/mo',
    ideal: 'Service businesses ready to scale',
    features: [
      'Custom lead generation funnel',
      'Google Ads campaign setup',
      'Landing page optimization',
      'Call tracking & analytics',
      'Monthly reporting',
      'Dedicated account manager',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Lead Generate + Add-ons',
    price: 'From $___/mo',
    ideal: 'Businesses wanting integrated marketing',
    features: [
      'Everything in Lead Generate',
      'Google Ads management',
      'Website updates & optimization',
      'Basic graphic design support',
      'Enhanced reporting dashboard',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'All-In Lead Engine',
    price: 'From $___/mo',
    ideal: 'Complete marketing solution',
    features: [
      'Everything in Lead Generate + Add-ons',
      'Full website development',
      'Professional graphic design',
      'Videography & content creation',
      'Multi-channel campaign management',
      'Priority support & strategy calls',
    ],
    cta: 'Get Started',
    popular: true,
  },
]

export default function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="packages" 
      ref={ref} 
      className="py-40 px-4 sm:px-6 lg:px-8 bg-white"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 50%, #fafafa 100%), radial-gradient(ellipse at top right, rgba(255, 199, 0, 0.1) 0%, transparent 50%)'
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
            Choose Your Package
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Flexible options to match your business needs and growth stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className={`relative p-10 rounded-3xl border transition-all hover-lift ${
                pkg.popular
                  ? 'bg-gradient-to-br from-yellow-accent/20 via-yellow-accent/10 to-white border-yellow-accent/50 scale-105 shadow-2xl shadow-yellow-accent/20'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-yellow-accent text-black text-sm font-bold rounded-full shadow-lg"
                >
                  Most Popular
                </motion.div>
              )}
              
              <h3 className="text-3xl font-bold mb-3 text-black">{pkg.name}</h3>
              <div className="text-5xl font-bold mb-4 text-yellow-accent">{pkg.price}</div>
              <p className="text-gray-600 mb-8 text-lg">{pkg.ideal}</p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.15 + idx * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-accent mr-3 text-xl">✓</span>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: pkg.popular ? '0 10px 30px rgba(255, 199, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                aria-label={`Get started with ${pkg.name}`}
                className={`w-full py-4 rounded-full font-bold transition-all text-lg ${
                  pkg.popular
                    ? 'bg-yellow-accent text-black hover:bg-yellow-accent/90 shadow-lg shadow-yellow-accent/30'
                    : 'bg-gray-900 text-white hover:bg-black border border-gray-800'
                }`}
              >
                {pkg.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
