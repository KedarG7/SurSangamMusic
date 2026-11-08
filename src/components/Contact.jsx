import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import BlobButton from './BlobButton'
import { siteConfig } from '../data/siteConfig'
import { generalEnquiry, hasAddress, hasEmail, hasPhone, hasWhatsApp, phoneHref, whatsappHref } from '../utils/contact'

const ContactAction = ({ active, href, label, disabledLabel, external = false }) => active ? (
  <BlobButton className="button--light contact-action" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{label}<Send size={17} aria-hidden="true" /></BlobButton>
) : <span className="button button--disabled contact-action" aria-disabled="true">{disabledLabel}</span>

export default function Contact() {
  const setupNeeded = !hasEmail || !hasPhone || !hasWhatsApp

  return (
    <section className="contact section section--ink" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-intro">
          <p className="eyebrow eyebrow--light"><span /> Contact &amp; enquiries</p>
          <h2 id="contact-title">Ready to begin your <em>musical journey?</em></h2>
          <p>Have questions about our classes? Get in touch with us and take your first step towards discovering music.</p>
        </div>

        {setupNeeded ? (
          <aside className="setup-notice" aria-label="Contact setup notice">
            <strong>Contact details need to be added before launch.</strong>
            <span>Update <code>src/data/siteConfig.js</code> with the academy’s real email, phone and WhatsApp number to activate these direct contact options.</span>
          </aside>
        ) : null}

        <div className="contact-grid">
          <article className="contact-card">
            <Phone size={24} strokeWidth={1.4} aria-hidden="true" />
            <p className="contact-label">Call us</p>
            <h3>{hasPhone ? siteConfig.contact.phone : siteConfig.contact.placeholderLabels.phone}</h3>
            <p>Prefer a quick conversation? We’d love to hear what you want to learn.</p>
            <ContactAction active={hasPhone} href={phoneHref} label="Call now" disabledLabel="Set phone to enable" />
          </article>
          <article className="contact-card">
            <Mail size={24} strokeWidth={1.4} aria-hidden="true" />
            <p className="contact-label">Email us</p>
            <h3>{hasEmail ? siteConfig.contact.email : siteConfig.contact.placeholderLabels.email}</h3>
            <p>Share the course you’re curious about and we’ll help with the next step.</p>
            <ContactAction active={hasEmail} href={generalEnquiry()} label="Send an enquiry" disabledLabel="Set email to enable" />
          </article>
          <article className="contact-card">
            <MessageCircle size={24} strokeWidth={1.4} aria-hidden="true" />
            <p className="contact-label">WhatsApp</p>
            <h3>{hasWhatsApp ? 'Chat with Sursangam' : siteConfig.contact.placeholderLabels.whatsappNumber}</h3>
            <p>Send a message when inspiration strikes — we’ll take it from there.</p>
            <ContactAction active={hasWhatsApp} href={whatsappHref} label="Chat on WhatsApp" disabledLabel="Set WhatsApp to enable" external />
          </article>
        </div>

        {hasAddress ? (
            <div className="contact-address">
            <MapPin size={20} aria-hidden="true" />
            <div><span>Visit the academy</span><p>{siteConfig.contact.address}</p></div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
