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
          duration: 0.3,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
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
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="bg-gray-50 relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            How Our <span className="text-yellow-accent">Lead Engine</span> Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A proven 3-step process to build a predictable lead generation system for your business.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Desktop - Vertical line connecting steps */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-yellow-accent/30">
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-yellow-accent origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Steps - Vertical layout with numbers on left, content on right */}
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12"
              >
                {/* Step Number Circle - Always on left */}
                <div className="relative z-10 flex-shrink-0 md:w-24">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-accent flex items-center justify-center shadow-glow">
                    <span className="text-2xl md:text-3xl font-bold text-black">{step.number}</span>
                  </div>
                </div>

                {/* Step Content - Always on right */}
                <div className="flex-1 md:pt-2">
                  <div className="bg-white border border-gray-200 rounded-card shadow-soft p-6 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
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
