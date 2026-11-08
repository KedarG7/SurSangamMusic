import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { courses } from '../data/courses'
import { pricing } from '../data/pricing'

const categoryOrder = ['Instrumental Music', 'Vocal Music', 'Music Theory']

export default function Classes() {
  const classesRef = useRef(null)

  useEffect(() => {
    const courseCards = classesRef.current?.querySelectorAll('.course-card')
    if (!courseCards?.length) return

    const revealCards = () => courseCards.forEach((card) => card.classList.add('is-visible'))

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealCards()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -24px 0px', threshold: 0.12 })

    courseCards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="classes section" id="classes" aria-labelledby="classes-title" ref={classesRef}>
      <div className="container">
        <div className="section-heading section-heading--wide">
          <div>
            <p className="eyebrow"><span /> Our classes</p>
            <h2 id="classes-title">Find your <em>rhythm.</em></h2>
          </div>
          <p>Explore our music programmes and discover the perfect place to begin your musical journey.</p>
        </div>

        {categoryOrder.map((category) => {
          const categoryCourses = courses.filter((course) => course.category === category)
          if (!categoryCourses.length) return null

          return (
            <div className="course-group" key={category}>
              <div className="course-group-title">
                <span>{category}</span>
                <span>{String(categoryCourses.length).padStart(2, '0')} programmes</span>
              </div>
              <div className="course-grid">
                {categoryCourses.map((course) => {
                  const hasMatchingPricing = pricing.some((plan) => plan.courseId === course.id)

                  return (
                    <a
                      className="course-card"
                      href={hasMatchingPricing ? `#pricing-${course.id}` : '#pricing'}
                      aria-label={`View pricing for ${course.name}`}
                      key={course.name}
                    >
                      <div className="course-image media-frame">
                        <img
                          src={course.image.src}
                          alt={course.image.alt}
                          loading="lazy"
                          onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
                        />
                      </div>
                      <div className="course-card-content">
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                      <span className="course-card-arrow" aria-hidden="true">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
