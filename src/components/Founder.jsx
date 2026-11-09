import { useEffect, useRef } from 'react'
import { Music2 } from 'lucide-react'

export default function Founder() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reveal = () => section.classList.add('founder-is-visible')
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      reveal()
      observer.disconnect()
    }, { threshold: 0.15 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="founder section section--soft" id="founder" aria-labelledby="founder-title" ref={sectionRef}>
      <div className="container founder-grid">
        <figure className="founder-portrait-wrap">
          <div className="founder-portrait" role="img" aria-label="Portrait placeholder for Rahul Deulkar Sir">
            <span className="founder-portrait-orbit founder-portrait-orbit--outer" aria-hidden="true" />
            <span className="founder-portrait-orbit founder-portrait-orbit--inner" aria-hidden="true" />
            <span className="founder-portrait-mark" aria-hidden="true"><Music2 size={42} strokeWidth={1.2} /></span>
            <span className="founder-portrait-placeholder">Founder portrait coming soon</span>
          </div>
          <figcaption className="founder-caption">
            <span><em style={{color:"black",fontStyle:'normal', fontWeight:'700'}}>Rahul </em>Deulkar Sir</span>
            <span>Founder &amp; Lead Teacher</span>
          </figcaption>
        </figure>

        <div className="founder-copy">
          <p className="eyebrow"><span /> The person behind the music</p>
          <h2 id="founder-title">Meet Rahul <em>Deulkar Sir.</em></h2>
          <p className="founder-role">Founder &amp; Lead Teacher, SurSangam Academy</p>
          <p className="founder-bio">
            At SurSangam Academy, Rahul Deulkar Sir leads a welcoming learning space where
            students can explore music, build confidence through practice, and develop their
            own artistic expression.
          </p>
          <blockquote className="founder-quote">
            <span className="founder-quote-label">A thought on learning music</span>
            <p>“Music grows through patient practice, curious listening, and the freedom to express.”</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
