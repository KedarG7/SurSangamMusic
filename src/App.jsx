import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import ClassSchedules from './components/ClassSchedules'
import Pricing from './components/Pricing'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { siteConfig } from './data/siteConfig'

function App() {
  useEffect(() => {
    document.title = siteConfig.pageTitle
    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')

    if (description) description.setAttribute('content', siteConfig.metaDescription)
    if (ogTitle) ogTitle.setAttribute('content', siteConfig.pageTitle)
    if (ogDescription) ogDescription.setAttribute('content', siteConfig.metaDescription)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <About />
        <ClassSchedules />
        <Pricing />
        <WhyChooseUs />
        <Gallery />
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
