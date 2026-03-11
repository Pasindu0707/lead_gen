'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useState, useRef } from 'react'

const faqs = [
  {
    question: 'What counts as a good lead?',
    answer: 'Someone who is interested in your service, leaves their details, and is a good fit for what you offer. We track phone calls, form submissions, and other actions that show real interest.',
  },
  {
    question: 'How long until results?',
    answer: 'Most clients get their first real leads within 2 to 4 weeks. Steady, reliable results usually take 60 to 90 days as we improve who we reach and what we say, based on what actually works.',
  },
  {
    question: 'Do you work with all industries?',
    answer: 'We work with service businesses: trades, home services, professional services, and local companies that sell to other businesses. If you rely on phone calls and local customers, we can likely help.',
  },
  {
    question: 'What\'s included in the lead engine?',
    answer: 'It includes campaign setup, landing pages, tracking, call routing, and simple reports. We handle the setup so you can focus on answering the phone and winning the work.',
  },
  {
    question: 'Can you run Google Ads only?',
    answer: 'Yes, we can run Google Ads on their own or as part of a package. We get better results when ads, tracking, and landing pages work together.',
  },
  {
    question: 'Do you build websites too?',
    answer: 'Yes, we can build websites as an add-on. We build sites that get visitors to contact you, and we connect them to your lead generation campaigns.',
  },
  {
    question: 'Is there a lock-in contract?',
    answer: 'We offer flexible terms. We recommend a minimum period to see results, but we don\'t use long lock-in contracts. Our goal is to deliver so much value that you want to stay.',
  },
  {
    question: 'What makes your leads high-quality?',
    answer: 'We target people who are actively looking for your service, use clear offers, and landing pages that make it easy to get in touch. We track call quality and how many turn into jobs so we can keep improving.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section 
      id="faqs" 
      ref={ref} 
      className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white"
      style={{
        background: 'linear-gradient(135deg, #fffef5 0%, #ffffff 50%, #fefefe 100%), radial-gradient(ellipse at bottom left, rgba(255, 199, 0, 0.2) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-light">
            Everything you need to know about how we get you more customers.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden group border border-gray-200 shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-yellow-accent/5 transition-all gap-3"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-sm sm:text-base md:text-lg pr-4 sm:pr-8 text-black group-hover:text-yellow-accent transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-yellow-accent text-lg sm:text-xl md:text-2xl flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-yellow-accent/10"
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-gray-700 border-t border-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
