import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const galleryTrackRef = useRef(null)
  const gallery = siteConfig.media.gallery.map((item) => ({ ...item, image: item.src, title: galleryTitles[item.id] || item.id }))

  const goToImage = useCallback((index) => {
    const track = galleryTrackRef.current
    const item = track?.children[index]
    if (!track || !item) return

    track.scrollTo({
      left: item.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setActiveImage(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const track = galleryTrackRef.current
    if (!track) return

    const cards = [...track.children]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let revealObserver
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
    } else {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      }, { root: track, threshold: 0.18 })

      cards.forEach((card) => revealObserver.observe(card))
    }

    let frameId = 0
    const updateActiveIndex = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        const trackLeft = track.getBoundingClientRect().left
        let closestIndex = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
          const bounds = card.getBoundingClientRect()
          const distance = Math.abs(bounds.left - trackLeft)
          if (distance >= closestDistance) return
          closestDistance = distance
          closestIndex = index
        })

        setActiveIndex(closestIndex)
      })
    }

    track.addEventListener('scroll', updateActiveIndex, { passive: true })
    return () => {
      track.removeEventListener('scroll', updateActiveIndex)
      revealObserver?.disconnect()
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [gallery.length])

  const previousImage = () => goToImage(Math.max(0, activeIndex - 1))
  const nextImage = () => goToImage(Math.min(gallery.length - 1, activeIndex + 1))

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
        <div className="gallery-carousel">
          <div className="gallery-controls">
            <p><span>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(gallery.length).padStart(2, '0')} <span className="gallery-swipe-hint">Drag or swipe to explore</span></p>
            <div className="gallery-control-buttons">
              <button type="button" onClick={previousImage} disabled={activeIndex === 0} aria-label="Previous photo"><ArrowLeft size={18} aria-hidden="true" /></button>
              <button type="button" onClick={nextImage} disabled={activeIndex === gallery.length - 1} aria-label="Next photo"><ArrowRight size={18} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="gallery-grid" ref={galleryTrackRef} aria-label="Music photo carousel">
            {gallery.map((item, index) => (
              <button
                className={`gallery-item gallery-item--${index + 1}`}
                type="button"
                key={item.title}
                onClick={() => setActiveImage(item)}
                aria-label={`View ${item.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width="1000"
                  height="800"
                  loading="lazy"
                  onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
                />
                <span className="gallery-caption"><span>{item.title}</span><ArrowUpRight size={18} aria-hidden="true" /></span>
              </button>
            ))}
          </div>
          <div className="gallery-progress" role="group" aria-label="Choose a gallery photo">
            {gallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={activeIndex === index ? 'is-active' : ''}
                aria-label={`Go to photo ${index + 1}: ${item.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close enlarged image"><X size={23} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.alt} width="1000" height="800" />
            <figcaption>{activeImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
