'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: '01',
    title: 'Strategy & Setup',
    description: 'We analyze your business, target audience, and competition to create a custom lead generation strategy tailored to your service.',
  },
  {
    number: '02',
    title: 'System Implementation',
    description: 'We build and deploy your lead engine with automated funnels, landing pages, and conversion systems that work 24/7.',
  },
  {
    number: '03',
    title: 'Optimize & Scale',
    description: 'We continuously monitor, test, and optimize your system to increase leads and ROI, then scale what works.',
  },
]

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Animate steps
    stepsRef.current.forEach((step, index) => {
      if (!step) return

      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Animate timeline line
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            How Our <span className="gradient-text">Lead Engine</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven 3-step process to build a predictable lead generation system for your business.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform -translate-x-1/2">
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-accent-500 origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-glow">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="card max-w-lg mx-auto md:mx-0">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
