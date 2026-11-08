import { siteConfig } from '../data/siteConfig'

const isUsableValue = (value) => Boolean(String(value || '').trim())
const contact = siteConfig.contact

export const hasEmail = isUsableValue(contact.email)
export const hasPhone = isUsableValue(contact.phone)
export const hasWhatsApp = isUsableValue(contact.whatsappNumber)
export const hasAddress = isUsableValue(contact.address)

export const makeMailto = (subject, body) => {
  if (!hasEmail) return '#contact'

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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

export const phoneHref = hasPhone ? `tel:${contact.phone.replace(/[^+\d]/g, '')}` : null
export const whatsappHref = hasWhatsApp ? `https://wa.me/${contact.whatsappNumber.replace(/[^\d]/g, '')}` : null
