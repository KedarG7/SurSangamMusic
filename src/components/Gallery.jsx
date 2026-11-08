import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const galleryTitles = {
  'guitar-learning': 'Guitar learning',
  'keyboard-practice': 'Keyboard practice',
  'piano-session': 'Piano session',
  'vocal-music': 'Vocal music',
  'musical-instruments': 'Instrument details',
  'group-learning': 'Music together',
  'music-performance': 'Performance energy',
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)
  const gallery = siteConfig.media.gallery.map((item) => ({ ...item, image: item.src, title: galleryTitles[item.id] || item.id }))

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setActiveImage(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading section-heading--wide">
          <div>
            <p className="eyebrow"><span /> Gallery</p>
            <h2 id="gallery-title">A glimpse into our <em>musical world.</em></h2>
          </div>
          <p>A small collection of the sounds, hands, instruments and shared moments that make music feel alive.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <button
              className={`gallery-item gallery-item--${index + 1}`}
              type="button"
              key={item.title}
              onClick={() => setActiveImage(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
              />
              <span className="gallery-caption"><span>{item.title}</span><ArrowUpRight size={18} aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close enlarged image"><X size={23} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.alt} />
            <figcaption>{activeImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
