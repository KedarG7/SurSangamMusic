import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { courses } from '../data/courses'

const categoryOrder = ['Instrumental Music', 'Vocal Music', 'Music Theory']

export default function Classes() {
  const classesRef = useRef(null)
  const moduleDialogRef = useRef(null)
  const closeAnimationStartedRef = useRef(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

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

  useEffect(() => {
    if (!selectedCourse) return

    const dialog = moduleDialogRef.current
    if (!dialog) return

    closeAnimationStartedRef.current = false
    setIsClosing(false)
    dialog.showModal()
    return () => {
      if (dialog.open) dialog.close()
    }
  }, [selectedCourse])

  const closeModuleDialog = () => {
    const dialog = moduleDialogRef.current
    if (!dialog?.open || closeAnimationStartedRef.current) return

    closeAnimationStartedRef.current = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close()
      return
    }

    setIsClosing(true)
  }

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
                  const hasModules = Boolean(course.moduleTracks?.length)

                  return (
                    <a
                      className="course-card"
                      href="#contact"
                      aria-label={hasModules ? `View ${course.name} course modules` : `Enquire about ${course.name}`}
                      aria-haspopup={hasModules ? 'dialog' : undefined}
                      key={course.name}
                      onClick={(event) => {
                        if (!hasModules) return
                        event.preventDefault()
                        setSelectedCourse(course)
                      }}
                    >
                      <div className="course-image media-frame">
                        <picture>
                          {course.image.avifSrc ? <source srcSet={course.image.avifSrc} type="image/avif" /> : null}
                          <img
                            src={course.image.src}
                            alt={course.image.alt}
                            width={course.image.width || 1000}
                            height={course.image.height || 800}
                            loading="lazy"
                            onError={(event) => event.currentTarget.parentElement.parentElement.classList.add('image-unavailable')}
                          />
                        </picture>
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
      {selectedCourse ? (
        <dialog
          className={`course-module-dialog${isClosing ? ' is-closing' : ''}`}
          ref={moduleDialogRef}
          aria-labelledby="course-module-title"
          onCancel={(event) => {
            event.preventDefault()
            closeModuleDialog()
          }}
          onKeyDown={(event) => {
            if (event.key !== 'Escape') return
            event.preventDefault()
            closeModuleDialog()
          }}
          onClose={() => {
            closeAnimationStartedRef.current = false
            setIsClosing(false)
            setSelectedCourse(null)
          }}
          onAnimationEnd={(event) => {
            if (event.target !== event.currentTarget || event.animationName !== 'course-module-dialog-out') return
            event.currentTarget.close()
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModuleDialog()
          }}
        >
          <div className="course-module-header">
            <div>
              <p className="eyebrow"><span /> Course modules</p>
              <h2 id="course-module-title">{selectedCourse.name}</h2>
              {selectedCourse.moduleIntro ? <p>{selectedCourse.moduleIntro}</p> : null}
            </div>
            <button className="course-module-close" type="button" aria-label="Close course modules" onClick={closeModuleDialog}>
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="course-module-tracks">
            {selectedCourse.moduleTracks.map((track) => (
              <section className="course-module-track" key={track.title} aria-label={track.title}>
                <h3>{track.title}</h3>
                <ul>
                  {track.modules.map((module) => <li key={module}>{module}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <div className="course-module-footer">
            <a className="button button--small" href="#contact" onClick={closeModuleDialog}>
              Enquire about this course <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </dialog>
      ) : null}
    </section>
  )
}
