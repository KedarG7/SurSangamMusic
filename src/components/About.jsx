import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const highlights = [
  ['01', 'Learn at your own pace'],
  ['02', 'Build confidence with guidance'],
  ['03', 'Create music together'],
]
export default function About() {
  const aboutImage = siteConfig.media?.about
  const aboutMediaRef = useRef(null)

  useEffect(() => {
    const aboutMedia = aboutMediaRef.current
    if (!aboutMedia) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0

    const updateParallax = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        frameId = 0

        if (reducedMotion.matches) {
          aboutMedia.style.setProperty('--about-parallax-y', '0px')
          return
        }

        const bounds = aboutMedia.getBoundingClientRect()
        const distanceFromCenter = window.innerHeight / 2 - (bounds.top + bounds.height / 2)
        const offset = Math.max(-36, Math.min(36, distanceFromCenter * 0.06))
        aboutMedia.style.setProperty('--about-parallax-y', `${offset.toFixed(2)}px`)
      })
    }

    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)
    reducedMotion.addEventListener('change', updateParallax)
    updateParallax()

    return () => {
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
      reducedMotion.removeEventListener('change', updateParallax)
      if (frameId) window.cancelAnimationFrame(frameId)
      aboutMedia.style.removeProperty('--about-parallax-y')
    }
  }, [])

  return (
    <section className="about section section--soft" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media-wrap">
          <figure className="about-media media-frame" ref={aboutMediaRef}>
            <img
              src={aboutImage?.src}
              alt={aboutImage?.alt || 'Piano keys in a softly lit music room'}
              loading="lazy"
              onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
            />
            <figcaption>Practice becomes possibility.</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Our approach</p>
          <h2 id="about-title">A place where music <em>comes alive.</em></h2>
          <p className="section-intro">Find your sound, build confidence, and grow through welcoming, guided music lessons.</p>
          <div className="about-highlights">
            {highlights.map(([number, title]) => (
              <article className="about-highlight" key={title}>
                <span className="item-number">{number}</span>
                <h3>{title}</h3>
                <ArrowUpRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
