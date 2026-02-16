'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const caseStudies = [
  {
    business: 'HVAC Services Brisbane',
    metric: '150',
    metricLabel: 'Qualified Calls/Month',
    description: 'Went from inconsistent referrals to a steady stream of qualified leads ready to book service calls.',
    result: '3x ROI in first 6 months',
  },
  {
    business: 'Plumbing Company Ipswich',
    metric: '85%',
    metricLabel: 'Cost Reduction',
    description: 'Reduced cost per lead by 85% while increasing lead volume through optimized campaigns and funnels.',
    result: '$50K saved annually',
  },
  {
    business: 'Electrical Services Toowoomba',
    metric: '200%',
    metricLabel: 'Lead Increase',
    description: 'Doubled their lead volume in 3 months with a complete lead engine system that works 24/7.',
    result: 'Business scaled 2x',
  },
]

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const numericMatch = value.match(/(\d+(?:\.\d+)?)/)
  const isNumeric = numericMatch !== null
  const numericValue = isNumeric ? parseFloat(numericMatch[1]) : 0
  const hasPercent = value.includes('%')

  useEffect(() => {
    if (!isNumeric || !countRef.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let start = 0
            const end = numericValue
            const increment = end / (duration * 60) // 60fps

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(start)
              }
            }, 1000 / 60)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [numericValue, duration, isNumeric])

  if (!isNumeric) {
    return <span>{value}{suffix}</span>
  }

  return (
    <span ref={countRef}>
      {hasPercent ? Math.round(count) : Math.floor(count)}{suffix || (hasPercent ? '%' : '')}
    </span>
  )
}

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          delay: index * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="results" ref={sectionRef} className="bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-300">Real Results from</span> <span className="text-yellow-accent">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we've helped service businesses in Brisbane, Ipswich, and Toowoomba build predictable lead engines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-white rounded-card shadow-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <div className="mb-6">
                <div className="text-5xl sm:text-6xl font-bold text-yellow-accent mb-2">
                  <AnimatedCounter value={study.metric} />
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {study.metricLabel}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {study.business}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {study.description}
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <span className="text-yellow-accent font-bold text-lg">
                  {study.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
