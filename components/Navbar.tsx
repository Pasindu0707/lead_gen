'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'How It Works', href: '#solution' },
  { name: 'Results', href: '#results' },
  { name: 'Packages', href: '#packages' },
  { name: 'Trust', href: '#trust' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 150 // Offset for navbar height
      
      // Reset active section if at top
      if (window.scrollY < 100) {
        setActiveSection('')
        return
      }
      
      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight
          
          // Check if scroll position is within section bounds
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      
      // If no section matches, clear active section
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Delay initial check to ensure DOM is ready
    setTimeout(handleScroll, 100)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            ? 'bg-black/95 backdrop-blur-xl border-b-2 border-yellow-accent/30 shadow-lg'
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold cursor-pointer bg-transparent border-none"
            >
              <span className="gradient-text">LeadEngine</span> AU
            </motion.button>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1)
                const isActive = activeSection === sectionId
                
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ y: -2 }}
                    className="relative px-4 py-2 text-sm font-medium transition-colors bg-transparent border-none rounded-lg hover:bg-white/5"
                  >
                    <span className={isActive ? 'text-yellow-accent' : 'text-white/70 hover:text-yellow-accent'}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-accent rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="hidden sm:block btn-primary text-sm px-6 py-3"
              >
                Book Free Call
              </motion.button>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-r border-white/10 z-[100] lg:hidden overflow-y-auto shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold">
                  <span className="gradient-text">LeadEngine</span> AU
                </h2>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
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

              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.substring(1)
                  const isActive = activeSection === sectionId
                  
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left px-6 py-4 rounded-xl transition-all font-medium ${
                        isActive
                          ? 'text-yellow-accent bg-yellow-accent/10 border-l-4 border-yellow-accent'
                          : 'text-white/70 hover:text-yellow-accent hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  )
                })}
              </div>

              <div className="p-6 pt-4 border-t border-white/10">
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-primary"
                >
                  Book Free Call
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
