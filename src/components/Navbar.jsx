import { useEffect, useState } from 'react'
import BrandMark from './BrandMark'
import BlobButton from './BlobButton'
import { siteConfig } from '../data/siteConfig'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${siteConfig.academyName} home`} onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <span>
            <strong>SurSangam</strong>
            <small>Academy</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-line" aria-hidden="true" />
          <span className="menu-toggle-line" aria-hidden="true" />
          <span className="menu-toggle-line" aria-hidden="true" />
        </button>

        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <div className="nav-links">
            {siteConfig.navigation.map(({ label, href }) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <BlobButton className="button--small nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Enquire now
          </BlobButton>
        </div>
      </nav>
    </header>
  )
}
