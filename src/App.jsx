import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founder from './components/Founder'
import Classes from './components/Classes'
import ClassSchedules from './components/ClassSchedules'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <About />
        <Gallery />
        <ClassSchedules />
        <Founder />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
      <svg className="blob-filter" aria-hidden="true" focusable="false">
        <defs>
          <filter id="button-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default App
