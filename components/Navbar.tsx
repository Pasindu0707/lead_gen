'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Results', href: '#results' },
  { name: 'Process', href: '#process' },
  { name: 'Locations', href: '#locations' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold cursor-pointer bg-transparent border-none text-white tracking-tight"
              onClick={() => scrollToSection('#hero')}
              aria-label="Go to homepage"
            >
              LeadEngine <span className="text-yellow-accent">AU</span>
            </motion.button>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  aria-label={`Navigate to ${link.name} section`}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors bg-transparent border-none rounded-lg ${
                    activeSection === link.href.substring(1)
                      ? 'text-yellow-accent'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-accent rounded-full"
                      aria-hidden="true"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(255, 199, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                aria-label="Book a call"
                className="hidden sm:block px-6 py-3 bg-yellow-accent text-black font-bold rounded-full hover:bg-yellow-accent/90 transition-all text-sm shadow-lg shadow-yellow-accent/20"
              >
                Book a Call
              </motion.button>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors z-[101] relative"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Outside navbar for proper positioning */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99] lg:hidden"
              style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-r border-white/10 z-[100] lg:hidden overflow-y-auto"
              style={{ top: 0, left: 0, bottom: 0 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">
                  LeadEngine <span className="text-yellow-accent">AU</span>
                </h2>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-6 py-4 rounded-xl transition-all font-medium ${
                      activeSection === link.href.substring(1)
                        ? 'text-yellow-accent bg-yellow-accent/10 border-l-4 border-yellow-accent'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-4 border-t border-white/10">
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full px-6 py-4 bg-yellow-accent text-black font-bold rounded-full hover:bg-yellow-accent/90 transition-all shadow-lg shadow-yellow-accent/20"
                >
                  Book a Call
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
