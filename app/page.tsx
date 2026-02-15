import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Results from '@/components/Results'
import Process from '@/components/Process'
import Locations from '@/components/Locations'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Services />
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <Packages />
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Results />
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <Process />
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Locations />
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <FAQ />
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Contact />
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <Footer />
    </main>
  )
}
