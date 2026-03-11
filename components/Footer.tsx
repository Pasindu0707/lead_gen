'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const quickLinks = [
  { name: 'How It Works', href: '#solution' },
  { name: 'Results', href: '#results' },
  { name: 'Packages', href: '#packages' },
  { name: 'Trust', href: '#trust' },
]

const serviceAreas = ['Brisbane', 'Ipswich', 'Toowoomba']

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-black text-white py-10 sm:py-14 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 sm:mb-6">
              <Image
                src={`${basePath}/logo.webp`}
                alt="LeadEngine AU"
                width={220}
                height={56}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain object-left"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Consistent leads. Predictable phone calls. Built for Australian service businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors bg-transparent border-none text-left text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Service Areas</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-400 text-sm sm:text-base">
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Connect</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} LeadEngine AU. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
