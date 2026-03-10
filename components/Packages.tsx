'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const packages = [
  {
    name: 'Social Media Growth',
    price: '$769',
    period: '/ month',
    ideal: 'Strong brand presence with content and reels',
    features: [
      '8 social media posts per month',
      'Cinematic reels creation',
      'Page management and scheduling',
      'Captions and hashtag strategy',
      'Community engagement support',
      'Monthly insights report',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Lead Engine Growth',
    price: '$879',
    period: '/ month',
    ideal: 'Focused ad campaigns and automated lead capture',
    features: [
      'Lead Engine funnel setup',
      'Meta Ads campaign management',
      'Ad targeting and improving',
      'Retargeting campaigns',
      'Lead tracking and monthly reporting',
      'Improving results over time',
      'Google Ads',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Lead Engine Pro',
    price: '$1,299',
    period: '/ month',
    ideal: 'Full lead automation system',
    features: [
      'Lead Engine setup (funnels and automation)',
      'Landing page design and creation',
      'Meta Ads management (Facebook and Instagram)',
      'Google Ads management',
      '8 professional social media posts per month',
      'Marketing creatives',
      'Retargeting campaign setup',
      'Lead tracking and performance reporting',
      'Strategy to improve results',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

const subservices = [
  'Social media management',
  'Video Productions',
  'Web design and Development',
  'Brand design',
  'SEO (Google Ads)',
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
          duration: 0.3,
          delay: index * 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Choose Your <span className="text-yellow-accent">Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible options to match your business and where you want to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`flex flex-col bg-white border rounded-card shadow-soft p-6 transition-all duration-300 relative h-full ${
                pkg.popular
                  ? 'border-yellow-accent shadow-glow scale-105'
                  : 'border-gray-200 hover:border-yellow-accent/50 hover:shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-accent text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-yellow-accent">{pkg.price}</span>
                <span className="text-gray-600 text-lg">{pkg.period}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{pkg.ideal}</p>

              <ul className="space-y-4 mb-6 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-yellow-accent mr-3 flex-shrink-0 mt-0.5"
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
                className={`mt-auto w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-yellow-accent text-black hover:bg-yellow-accent/90 shadow-lg'
                    : 'bg-white text-yellow-accent border-2 border-yellow-accent hover:bg-yellow-accent/10'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">
            Also available as separate services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {subservices.map((service, index) => (
              <span
                key={index}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-soft hover:border-yellow-accent/50 hover:text-gray-900 transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
