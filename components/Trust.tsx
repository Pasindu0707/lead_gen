'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const logos = [
  { src: '/logos/cfq-logo.png', alt: 'Trusted partner' },
  { src: '/logos/IMG_4517.PNG', alt: 'Trusted partner' },
  { src: '/logos/IMG_4518.PNG', alt: 'Trusted partner' },
  { src: '/logos/trust-6.jpg', alt: 'Trusted partner' },
  { src: '/logos/IMG_4520.PNG', alt: 'Trusted partner' },
  { src: '/logos/trust-5.jpg', alt: 'Trusted partner' },
  { src: '/logos/trust-1.png', alt: 'Trusted partner' },
  { src: '/logos/trust-3.jpg', alt: 'Trusted partner' },
  { src: '/logos/trust-7.jpg', alt: 'Trusted partner' },
  { src: '/logos/trust-8.jpg', alt: 'Trusted partner' },
]

const ratings = [
  {
    stars: 5,
    text: '4.9/5 Average Rating',
  },
  {
    stars: 5,
    text: '50+ Happy Clients',
  },
  {
    stars: 5,
    text: '98% Satisfaction Rate',
  },
]

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const ratingsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Animate logos
    if (logosRef.current) {
      gsap.fromTo(
        logosRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate ratings
    ratingsRef.current.forEach((rating, index) => {
      if (!rating) return

      gsap.fromTo(
        rating,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: index * 0.04,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: rating,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="trust" ref={sectionRef} className="bg-black">
      <div className="container-custom">
        {/* Clients-style layout: white card with heading + subtitle + 2-row logo grid (like reference image) */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-5xl mx-auto px-6 sm:px-8 pt-8 pb-2">
            <header className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
                Trusted Across Queensland
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1.5">
                Service businesses that chose us
              </p>
            </header>

            <div
              ref={logosRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-gray-200 border-t border-gray-200"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] min-h-[80px] sm:min-h-[100px] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-white"
                >
                  <Image
                    src={`${basePath}${logo.src}`}
                    alt={logo.alt}
                    width={160}
                    height={100}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Star Ratings */}
        <div className="grid md:grid-cols-3 gap-8">
          {ratings.map((rating, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) ratingsRef.current[index] = el
              }}
              className="bg-white border border-yellow-accent rounded-card shadow-soft p-6 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(rating.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{rating.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
