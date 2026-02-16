'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const gradientRef1 = useRef<HTMLDivElement>(null)
  const gradientRef2 = useRef<HTMLDivElement>(null)
  const gradientRef3 = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Animated gradient layers - multiple layers for depth
    if (gradientRef1.current) {
      gsap.to(gradientRef1.current, {
        backgroundPosition: '200% 200%',
        duration: 15,
        repeat: -1,
        ease: 'none',
      })
    }

    if (gradientRef2.current) {
      gsap.to(gradientRef2.current, {
        backgroundPosition: '-200% -200%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    }

    if (gradientRef3.current) {
      gsap.to(gradientRef3.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      })
    }

    // Pulsing glow effect
    if (gradientRef1.current) {
      gsap.to(gradientRef1.current, {
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    }

    // Parallax effect on scroll
    if (gradientRef1.current) {
      gsap.to(gradientRef1.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // Fade up content animation with delay
    if (contentRef.current) {
      const children = Array.from(contentRef.current.children)
      children.forEach((child, index) => {
        gsap.fromTo(
          child,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
          }
        )
      })
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

    // Animated particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: Math.random() * -100 - 50,
          x: Math.random() * 100 - 50,
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2,
        })
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
      {/* Animated Gradient Background Layer 1 */}
      <div
        ref={gradientRef1}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 199, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 199, 0, 0.3) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
      />
      
      {/* Animated Gradient Background Layer 2 */}
      <div
        ref={gradientRef2}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 60% 20%, rgba(255, 199, 0, 0.25) 0%, transparent 40%), radial-gradient(circle at 40% 80%, rgba(255, 199, 0, 0.2) 0%, transparent 40%)',
          backgroundSize: '150% 150%',
          backgroundPosition: '50% 50%',
        }}
      />

      {/* Rotating Gradient Layer 3 */}
      <div
        ref={gradientRef3}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(255, 199, 0, 0.3) 0deg, transparent 60deg, rgba(255, 199, 0, 0.2) 120deg, transparent 180deg, rgba(255, 199, 0, 0.3) 240deg, transparent 300deg)',
          backgroundSize: '200% 200%',
          transformOrigin: 'center center',
        }}
      />
      
      {/* Animated Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-accent rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div ref={contentRef} className="container-custom relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="block">Build a Predictable</span>
          <span className="block gradient-text">Lead Engine</span>
          <span className="block">That Never Stops</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto font-medium">
          We build consistent lead generation systems for service-based businesses in Brisbane, Ipswich, and Toowoomba. 
          Your pipeline won't depend on luck anymore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg px-10 py-5 relative overflow-hidden group"
          >
            <span className="relative z-10">Book Free Strategy Call</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-accent via-yellow-300 to-yellow-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
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
            className="w-8 h-8 text-yellow-accent"
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
