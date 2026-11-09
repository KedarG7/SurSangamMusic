import { ArrowUpRight } from 'lucide-react'
import BrandMark from './BrandMark'
import { courses } from '../data/courses'
import { siteConfig } from '../data/siteConfig'
import { hasEmail, hasPhone } from '../utils/contact'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="wordmark wordmark--footer" href="#home" aria-label={`${siteConfig.academyName} home`}>
            <BrandMark />
            <span><strong>Sursangam</strong><small>Academy</small></span>
          </a>
          <p className="footer-tagline">{siteConfig.tagline}</p>
          <p>A welcoming place to explore music, develop your practice and make your own sound.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <nav aria-label="Footer navigation">
            {siteConfig.navigation.filter(({ href }) => href !== '#home').map(({ label, href }) => <a href={href} key={href}>{label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
          </nav>
        </div>
        <div className="footer-column">
          <p className="footer-label">Classes</p>
          <nav aria-label="Course navigation">
            {courses.slice(0, 6).map((course) => <a href="#classes" key={course.name}>{course.name}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
          </nav>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Say hello</p>
          {hasPhone ? <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`}>{siteConfig.contact.phone}</a> : <span>Phone details coming soon</span>}
          {hasEmail ? <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> : <span>Email details coming soon</span>}
          <div className="social-links">
            {siteConfig.contact.socialLinks.filter(({ href }) => href).map(({ label, href, ariaLabel }) => <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={ariaLabel}>{label}</a>)}
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><a href="#home"><span>© {new Date().getFullYear()} {siteConfig.academyName}. All rights reserved.</span></a></div>
    </footer>
  )
}
