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
      className="relative py-28 sm:py-36 overflow-hidden bg-black"
    >
      {/* Gradient glow behind CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-accent/20 via-yellow-accent/8 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,600px)] h-72 bg-yellow-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div
          ref={contentRef}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-accent mb-6">
            Free strategy call
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
            Ready to Build Your{' '}
            <span className="text-yellow-accent">Predictable Lead Engine?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            Book a free call. We’ll show you how to get consistent, qualified calls—without the guesswork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              ref={buttonRef}
              onClick={handleCTAClick}
              className="w-full sm:w-auto bg-yellow-accent text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-[0_4px_24px_rgba(255,199,0,0.35)] hover:shadow-[0_6px_32px_rgba(255,199,0,0.45)] hover:bg-[#ffd633] transition-all duration-200"
            >
              Book Free Strategy Call
            </button>
            <p className="text-gray-500 text-sm">
              No card required · 30 min · No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
