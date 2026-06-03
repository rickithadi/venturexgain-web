import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Blog from './sections/Blog'
import Testimonials from './sections/Testimonials'
import EmailCapture from './sections/EmailCapture'
import Contact from './sections/Contact'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <EmailCapture />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<BlogIndex />} />
        <Route path="/journal/:slug" element={<BlogPost />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
