'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* Leads generated over 6 months - growth trend */
const leadsOverTimeData = [
  { month: 'Month 1', leads: 28, calls: 18 },
  { month: 'Month 2', leads: 45, calls: 32 },
  { month: 'Month 3', leads: 62, calls: 48 },
  { month: 'Month 4', leads: 88, calls: 71 },
  { month: 'Month 5', leads: 112, calls: 94 },
  { month: 'Month 6', leads: 148, calls: 126 },
]

/* Cost per lead improvement (before vs after style) */
const costPerLeadData = [
  { name: 'Before', cost: 95, fill: '#6b7280' },
  { name: 'After', cost: 32, fill: '#FFC700' },
]

/* Lead sources - pie */
const leadSourcesData = [
  { name: 'Google Ads', value: 42, color: '#FFC700' },
  { name: 'Meta Ads', value: 28, color: '#FFD633' },
  { name: 'Landing Pages', value: 18, color: '#FFE066' },
  { name: 'Retargeting', value: 12, color: '#fbbf24' },
]

/* Animated progress bar for a single KPI */
function AnimatedBar({ label, value, suffix = '', max = 100, delay = 0 }: { label: string; value: number; suffix?: string; max?: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!barRef.current) return
    const el = barRef.current
    const trigger = el.closest('section')
    if (!trigger) return
    ScrollTrigger.create({
      trigger,
      start: 'top 75%',
      onEnter: () => setVisible(true),
    })
  }, [])

  useEffect(() => {
    if (!visible || !barRef.current) return
    const fill = barRef.current.querySelector('[data-fill]') as HTMLElement
    if (!fill) return
    gsap.fromTo(fill, { width: 0 }, { width: `${Math.min(100, (value / max) * 100)}%`, duration: 1.2, delay, ease: 'power2.out' })
  }, [visible, value, max, delay])

  return (
    <div className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/[0.05] border border-white/10 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-yellow-400 font-semibold tabular-nums text-right min-w-[60px]">
          {value}{suffix}
        </span>
      </div>
      <div ref={barRef} className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div data-fill className="h-full rounded-full bg-gradient-to-r from-yellow-accent to-amber-400 transition-all duration-500" style={{ width: 0 }} />
      </div>
    </div>
  )
}

/* Custom tooltip for charts */
const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name?: string }>; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-black/90 border border-yellow-accent/30 rounded-lg px-3 py-2 shadow-xl text-sm">
      {label && <p className="text-gray-300 font-medium mb-1">{label}</p>}
      {payload.map((p) => (
        <p key={p.name || ''} className="text-yellow-accent font-bold">{p.value} {p.name === 'leads' ? 'leads' : p.name === 'calls' ? 'calls' : ''}</p>
      ))}
    </div>
  )
}

/* Custom tooltip for Pie chart - solid black background so it shows on hover */
const PieChartTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name?: string; value?: number }> }) => {
  if (!active || !payload?.length) return null
  const item = payload[0]
  const name = (item?.name ?? '') as string
  const value = (item?.value ?? 0) as number
  return (
    <div
      className="rounded-lg px-4 py-3 shadow-2xl text-sm border-2 border-yellow-accent/50"
      style={{
        backgroundColor: '#000000',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        pointerEvents: 'none',
      }}
    >
      <p className="text-gray-200 font-medium">{name}</p>
      <p className="text-yellow-accent font-bold text-base mt-0.5">{value}% of leads</p>
    </div>
  )
}

export default function LeadGraphs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const chartsRef = useRef<HTMLDivElement>(null)
  const kpiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !chartsRef.current) return
    const cards = chartsRef.current.querySelectorAll('[data-chart-card]')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    )
    if (kpiRef.current) {
      gsap.fromTo(kpiRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } })
    }
  }, [])

  return (
    <section id="lead-graphs" ref={sectionRef} className="bg-black py-14 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Results That <span className="text-yellow-accent">Show Up in Numbers</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            See how lead generation systems perform over time — more leads, more calls, lower cost.
          </p>
        </div>

        <div ref={chartsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Leads & calls over time - Area chart */}
          <div
            data-chart-card
            className="bg-white/[0.06] border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-lg shadow-black/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight">Leads & Calls Over Time</h3>
            <div className="h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={leadsOverTimeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFC700" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#FFC700" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFD633" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#FFD633" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="leads" stroke="#FFC700" strokeWidth={2} fill="url(#leadGradient)" isAnimationActive animationDuration={1200} animationEasing="ease-out" />
                  <Area type="monotone" dataKey="calls" stroke="#FFD633" strokeWidth={2} fill="url(#callGradient)" isAnimationActive animationDuration={1200} animationEasing="ease-out" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">Typical 6‑month trajectory with a structured lead engine</p>
          </div>

          {/* Cost per lead - Bar chart */}
          <div
            data-chart-card
            className="bg-white/[0.06] border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-lg shadow-black/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight">Cost Per Lead: Before vs After</h3>
            <div className="h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costPerLeadData} layout="vertical" margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                  <XAxis type="number" stroke="#9ca3af" fontSize={12} tickLine={false} unit="$" domain={[0, 120]} />
                  <YAxis type="category" dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} width={60} />
                  <Tooltip formatter={(value: number) => [`$${value}`, 'Cost per lead']} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,199,0,0.3)', borderRadius: 8 }} />
                  <Bar dataKey="cost" radius={[0, 4, 4, 0]} isAnimationActive animationDuration={1000} animationEasing="ease-out" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">Structured funnels and targeting reduce cost per lead</p>
          </div>

          {/* Lead sources - Donut + KPIs */}
          <div
            data-chart-card
            className="
              rounded-2xl border border-white/15 bg-white/[0.06]
              p-6
              backdrop-blur-sm shadow-lg shadow-black/20
              lg:col-span-2
            "
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-7">
              Where Leads Come From
            </h3>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
              {/* Chart + Legend */}
              <div className="flex flex-col items-center w-full sm:w-[260px]">
                <ResponsiveContainer width="100%" height={210}>
                  <PieChart>
                    <Pie
                      data={leadSourcesData}
                      cx="50%"
                      cy="45%"
                      innerRadius={50}
                      outerRadius={72}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {leadSourcesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="rgba(0,0,0,0.2)"
                          strokeWidth={1}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<PieChartTooltip />} />
                  </PieChart>
                </ResponsiveContainer>

                {/* Custom Legend */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
                  {leadSourcesData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <span
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="leading-none">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Section */}
              <div ref={kpiRef} className="flex-1 w-full min-w-[280px] max-w-xxl flex flex-col gap-4">
                <AnimatedBar
                  label="Avg. leads per month (after system)"
                  value={98}
                  suffix=""
                  max={150}
                  delay={0.3}
                />
                <AnimatedBar
                  label="Call conversion rate"
                  value={85}
                  suffix="%"
                  max={100}
                  delay={0.5}
                />
                <AnimatedBar
                  label="ROI in first 6 months"
                  value={3}
                  suffix="x"
                  max={4}
                  delay={0.7}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
