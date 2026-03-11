import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Results from '@/components/Results'
import LeadGraphs from '@/components/LeadGraphs'
import Packages from '@/components/Packages'
import Trust from '@/components/Trust'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <LeadGraphs />
      <Packages />
      <Trust />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
