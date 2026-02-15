'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useState, useRef } from 'react'

const faqs = [
  {
    question: 'What counts as a qualified lead?',
    answer: 'A qualified lead is someone who has expressed genuine interest in your service, provided their contact information, and matches your ideal customer profile. We track phone calls, form submissions, and other high-intent actions.',
  },
  {
    question: 'How long until results?',
    answer: 'Most clients see their first qualified leads within 2-4 weeks of campaign launch. Full optimization and consistent results typically take 60-90 days as we refine targeting and messaging based on real performance data.',
  },
  {
    question: 'Do you work with all industries?',
    answer: 'We specialize in service-based businesses, particularly trades, home services, professional services, and local B2B companies. If your business relies on phone calls and local customers, we can likely help.',
  },
  {
    question: 'What\'s included in the lead engine?',
    answer: 'The lead engine includes campaign setup, landing pages, tracking systems, call routing, analytics dashboards, and ongoing optimization. We handle the technical setup so you can focus on converting leads.',
  },
  {
    question: 'Can you run Google Ads only?',
    answer: 'Yes, we offer Google Ads management as a standalone service or as part of our packages. However, we find that integrated campaigns with proper tracking and landing pages deliver significantly better results.',
  },
  {
    question: 'Do you build websites too?',
    answer: 'Yes, website development is available as an add-on service. We build conversion-focused websites designed to turn visitors into leads, integrated with your lead generation campaigns.',
  },
  {
    question: 'Is there a lock-in contract?',
    answer: 'We offer flexible terms. While we recommend a minimum commitment to see results, we don\'t use long-term lock-ins. Our goal is to deliver value that makes you want to stay.',
  },
  {
    question: 'What makes your leads high-quality?',
    answer: 'We use precise targeting, compelling offers, and optimized landing pages to attract people who are actively looking for your service. We also track call quality and conversion rates to continuously improve lead quality.',
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
      className="py-40 px-4 sm:px-6 lg:px-8 bg-white"
      style={{
        background: 'linear-gradient(135deg, #fffef5 0%, #ffffff 50%, #fefefe 100%), radial-gradient(ellipse at bottom left, rgba(255, 199, 0, 0.2) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-light">
            Everything you need to know about our lead generation system.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="bg-white rounded-2xl overflow-hidden group border border-gray-200 shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-yellow-accent/5 transition-all"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg pr-8 text-black group-hover:text-yellow-accent transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-yellow-accent text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-accent/10"
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
                    <div className="px-8 py-6 text-gray-700 border-t border-gray-200 leading-relaxed text-lg">
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
