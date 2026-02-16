'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const packages = [
  {
    name: 'Starter',
    price: 'From $2,500',
    period: '/mo',
    ideal: 'Perfect for businesses ready to scale',
    features: [
      'Custom lead generation funnel',
      'Google Ads campaign setup',
      'Landing page optimization',
      'Call tracking & analytics',
      'Monthly reporting',
      'Dedicated account manager',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'From $4,500',
    period: '/mo',
    ideal: 'Most popular for growing businesses',
    features: [
      'Everything in Starter',
      'Google Ads management',
      'Website updates & optimization',
      'Basic graphic design support',
      'Enhanced reporting dashboard',
      'Priority support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'From $7,500',
    period: '/mo',
    ideal: 'Complete marketing solution',
    features: [
      'Everything in Professional',
      'Full website development',
      'Professional graphic design',
      'Videography & content creation',
      'Multi-channel campaign management',
      'Weekly strategy calls',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

export default function Packages() {
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
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  const scrollToCTA = () => {
    const element = document.getElementById('final-cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="packages" ref={sectionRef} className="bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible options to match your business needs and growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`card relative ${
                pkg.popular
                  ? 'border-2 border-primary-500 shadow-glow bg-gradient-to-br from-primary-50 to-white'
                  : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold gradient-text">{pkg.price}</span>
                <span className="text-gray-600 text-lg">{pkg.period}</span>
              </div>
              
              <p className="text-gray-600 mb-8">{pkg.ideal}</p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToCTA}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
