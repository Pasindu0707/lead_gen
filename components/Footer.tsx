'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

const serviceAreas = ['Brisbane', 'Ipswich', 'Toowoomba']

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer 
      className="border-t border-white/10 py-20 px-4 sm:px-6 lg:px-8 relative bg-black"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(255, 199, 0, 0.05) 0%, #000000 50%), radial-gradient(ellipse at bottom, #1a1a1a 0%, #000000 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              LeadEngine <span className="text-yellow-accent">AU</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Consistent leads. Predictable phone calls. Built for Australian service businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    aria-label={`Navigate to ${link.name} section`}
                    className="text-white/70 hover:text-yellow-accent transition-colors bg-transparent border-none text-left"
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
            <h4 className="font-bold mb-6 text-lg">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/70">
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
            <h4 className="font-bold mb-6 text-lg">Connect</h4>
            <ul className="space-y-3">
              {['LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    aria-label={`Visit our ${social} page`}
                    className="text-white/70 hover:text-yellow-accent transition-colors"
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
          className="pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>&copy; {new Date().getFullYear()} LeadEngine AU. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
