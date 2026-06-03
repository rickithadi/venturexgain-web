import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Services from './sections/Services'
import Stats from './sections/Stats'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
