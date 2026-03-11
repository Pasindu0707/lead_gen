'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const packages = [
  {
    name: 'Lead Engine Pro',
    price: '$1,299',
    period: '/ month',
    ideal: 'Complete lead generation system for businesses that want consistent enquiries and growth.',
    features: [
      'Full Lead Engine setup (funnels + automation system)',
      'High converting landing page design with ongoing updates & maintenance',
      'Meta Ads management (Facebook & Instagram)',
      'Google Ads management',
      'Professional marketing creatives (photo/video content for ads & landing page)',
      'Retargeting campaign setup to convert warm audiences',
      'Lead tracking system with performance reporting',
      'Monthly strategy optimisation to improve results and conversions',
    ],
    bestFor: 'Best for businesses wanting consistent leads and full marketing support',
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Lead Engine Growth',
    price: '$799',
    period: '/ month',
    ideal: 'For businesses focused on lead generation through paid advertising.',
    features: [
      'Lead Engine funnel setup',
      'Meta Ads campaign management (Facebook & Instagram)',
      'Google Ads campaign management',
      'Advanced ad targeting and optimisation',
      'Retargeting campaigns',
      'Lead tracking system',
      'Monthly performance reporting',
      'Continuous campaign improvement and optimisation',
    ],
    bestFor: 'Best for businesses that already have a website but want more enquiries and conversions',
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Social Media Growth',
    price: '$879',
    period: '/ month',
    ideal: 'For businesses wanting strong brand presence and engaging content.',
    features: [
      '8 social media posts per month',
      'Cinematic AI reels / video creation',
      'Full page management & scheduling',
      'Professional captions and hashtag strategy',
      'Community engagement support',
      'Meta Ads management',
      'Monthly insights & performance report',
    ],
    bestFor: 'Best for businesses that want consistent social media growth and brand visibility',
    cta: 'Get Started',
    popular: false,
  },
]

const subservices = [
  'Video Productions',
  'Web Design and Development',
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
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-gray-900">
            Choose Your <span className="text-yellow-accent">Package</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
              
              <div className="mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-accent">{pkg.price}</span>
                <span className="text-gray-600 text-base sm:text-lg">{pkg.period}</span>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">{pkg.ideal}</p>

              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                What&apos;s included
              </h4>
              <ul className="space-y-3 mb-6 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-accent mr-2 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.bestFor && (
                <p className="flex items-start gap-2 text-gray-700 text-sm font-medium mb-6">
                  <span className="text-yellow-accent flex-shrink-0">✔</span>
                  <span>{pkg.bestFor}</span>
                </p>
              )}

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
          <h3 className="text-center text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
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
