'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    // Animate content
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Pulse button animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    }
  }, [])

  const handleCTAClick = () => {
    // You can replace this with your actual booking link
    window.open('https://calendly.com/your-link', '_blank')
    // Or scroll to contact form
    // const element = document.getElementById('contact')
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // }
  }

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
            Ready to Build Your
            <br />
            <span className="text-yellow-300">Predictable Lead Engine?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium">
            Book a free strategy call and discover how we can build a lead generation system 
            that delivers consistent, qualified calls to your business.
          </p>

          <p className="text-lg text-white/80 mb-12 font-semibold">
            ⚡ Limited spots available this month
          </p>

          <button
            ref={buttonRef}
            onClick={handleCTAClick}
            className="bg-white text-primary-600 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            Book Free Strategy Call Now
          </button>

          <p className="text-white/70 mt-6 text-sm">
            No credit card required • 30-minute call • No obligation
          </p>
        </div>
      </div>
    </section>
  )
}
