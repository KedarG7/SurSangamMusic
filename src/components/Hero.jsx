import { ArrowDownRight } from 'lucide-react'
import BlobButton from './BlobButton'
import { siteConfig } from '../data/siteConfig'

export default function Hero() {
  const heroImage = siteConfig.media?.hero

  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SurSangam Academy</p>
          <h1 id="hero-title">Discover the music <em>within you.</em></h1>
          <p className="hero-intro">Explore your passion for music, develop your skills and find your rhythm with Sursangam Academy.</p>
          <div className="hero-actions">
            <BlobButton href="#contact">Enquire now <ArrowDownRight size={18} aria-hidden="true" /></BlobButton>
            <a className="text-link" href="#classes">Explore our classes <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="hero-footnote">Music classes for every curious beginning.</p>
        </div>

        <div className="hero-media-wrap">
          <div className="hero-orange-block" aria-hidden="true" />
          <figure className="hero-media media-frame">
            <img
              src={heroImage?.src}
              alt={heroImage?.alt || 'A close-up of hands exploring an acoustic guitar'}
              fetchPriority="high"
              onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
            />
            <figcaption>Find the sound that feels like you.</figcaption>
          </figure>
          <span className="vertical-caption">Make room for your rhythm</span>
        </div>
      </div>
    </section>
  )
}
