'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !gradientRef.current) return

    // Animated gradient background
    gsap.to(gradientRef.current, {
      backgroundPosition: '200% 200%',
      duration: 20,
      repeat: -1,
      ease: 'none',
    })

    // Parallax effect on scroll
    gsap.to(gradientRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Fade up content animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }

    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      {/* Content */}
      <div ref={contentRef} className="container-custom relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="block">Build a Predictable</span>
          <span className="block gradient-text">Lead Engine</span>
          <span className="block">That Never Stops</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
          We build consistent lead generation systems for service-based businesses in Brisbane, Ipswich, and Toowoomba. 
          Your pipeline won't depend on luck anymore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('final-cta')}
            className="btn-primary text-lg px-10 py-5"
          >
            Book Free Strategy Call
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="btn-secondary text-lg px-10 py-5"
          >
            See How It Works
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('problem')}
        >
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
