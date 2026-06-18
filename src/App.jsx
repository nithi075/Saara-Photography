<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Instagram from './components/instagram/instagram'
import FAQ from './components/FreequentQ/faq'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import ScrollToTop from './components/ScrollToTop'

import './App.css'
import Floating from './components/Floating/Floating'
import Packages from './components/Packages/Packages'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      
      <section id="gallery">

        <Gallery />

      </section>
      <Testimonials />
      <section id="contact">
       <Packages/>
        <Contact />

      </section>
      <Instagram />
      <FAQ />
      <Floating/>
    </main>
  )
}
=======
import "./index.css";
import Hero from './components/Hero/Hero';
import StorySection from "./components/StorySection/StorySection";
import FilmSection from "./components/FilmSection/FlimSection";
import About from "./components/About/About";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Storytelling from "./components/StoryTelling/StoryTelling";
import WeddingStory from "./components/WeddingStory/WeddingStory";
import TenPartNarrative from "./components/TenPartNarrative/TenPartNarrative";
import FAQ from "./components/FreequentQ/faq";
>>>>>>> 4e52e60828768403d50f614b3910154a289eca5e

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />


      </Routes>

      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 4e52e60828768403d50f614b3910154a289eca5e
