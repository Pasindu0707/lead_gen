import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Results from '@/components/Results'
import Packages from '@/components/Packages'
import Trust from '@/components/Trust'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Packages />
      <Trust />
      <FinalCTA />
      <Footer />
    </main>
  )
}
