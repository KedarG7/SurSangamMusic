import { normalizeEmail, normalizePhone, normalizeWhatsApp, siteConfig } from '../data/siteConfig'

const isUsableValue = (value) => Boolean(String(value || '').trim())
const contact = siteConfig.contact
const safeEmail = normalizeEmail(contact.email)
const safePhone = normalizePhone(contact.phone)
const safeWhatsApp = normalizeWhatsApp(contact.whatsappNumber)

export const hasEmail = isUsableValue(safeEmail)
export const hasPhone = isUsableValue(safePhone)
export const hasWhatsApp = isUsableValue(safeWhatsApp)
export const hasAddress = isUsableValue(contact.address)

export const makeMailto = (subject, body) => {
  if (!hasEmail) return '#contact'

  return `mailto:${safeEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const generalEnquiry = () =>
  makeMailto(
    `Enquiry – ${siteConfig.academyName}`,
    `Hello ${siteConfig.academyName},\n\nI would like to know more about your music classes.\n\nName:\nPreferred course:\nPhone number:\n\nThank you.`,
  )

export const courseEnquiry = (courseName, purpose = 'classes') =>
  makeMailto(
    `${purpose === 'pricing' ? 'Pricing enquiry' : 'Course enquiry'} – ${courseName} | ${siteConfig.academyName}`,
    `Hello ${siteConfig.academyName},\n\nI would like to know more about ${courseName}${purpose === 'pricing' ? ' and its fees' : ''}.\n\nName:\nPhone number:\n\nThank you.`,
  )

export const phoneHref = hasPhone ? `tel:${safePhone}` : null
export const whatsappHref = hasWhatsApp ? `https://wa.me/${safeWhatsApp}` : null
