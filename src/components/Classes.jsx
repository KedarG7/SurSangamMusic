import { ArrowUpRight } from 'lucide-react'
import { courses } from '../data/courses'
import { hasEmail, makeMailto } from '../utils/contact'

const categoryOrder = ['Instrumental Music', 'Vocal Music', 'Music Theory']

export default function Classes() {
  return (
    <section className="classes section" id="classes" aria-labelledby="classes-title">
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
                {categoryCourses.map((course) => (
                  <article className="course-card" key={course.name}>
                    <div className="course-image media-frame">
                      <img
                        src={course.image.src}
                        alt={course.image.alt}
                        loading="lazy"
                        onError={(event) => event.currentTarget.parentElement.classList.add('image-unavailable')}
                      />
                    </div>
                    <div className="course-card-content">
                      <div className="course-meta">
                        <span>{course.category}</span>
                        <span>{course.level}</span>
                      </div>
                      <h3>{course.name}</h3>
                      <p>{course.description}</p>
                      {hasEmail ? (
                        <a className="text-link course-link" href={makeMailto(course.enquiry.subject, course.enquiry.body)} aria-label={`Enquire about ${course.name}`}>
                          Enquire now <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                      ) : (
                        <a className="text-link course-link setup-link" href="#contact" aria-label={`Contact setup needed to enquire about ${course.name}`}>
                          Email setup needed <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
