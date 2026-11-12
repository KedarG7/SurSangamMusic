/**
 * The single source of truth for academy-wide content and contact settings.
 *
 * Before publishing, replace every empty contact value below. Keeping values
 * empty is intentional: it prevents the website from exposing made-up phone
 * numbers, email addresses, locations, or social profiles.
 */

export const GENERAL_ENQUIRY_SUBJECT = 'Enquiry – Sursangam Academy';

export const GENERAL_ENQUIRY_BODY = [
  'Hello Sursangam Academy,',
  '',
  'I would like to know more about your music classes.',
  '',
  'Name:',
  'Preferred course:',
  'Message:',
].join('\n');

export const siteConfig = {
  academyName: 'Sursangam Academy',
  tagline: 'Where Every Note Finds Its Rhythm.',
  pageTitle: 'Sursangam Academy | Music Classes in Vikhroli West, Mumbai',
  metaDescription:
    'Explore guitar, keyboard, harmonium, Hindustani classical vocal, and music theory classes at Sursangam Academy in Vikhroli West, Mumbai. View programmes and enquire.',

  location: {
    streetAddress: 'Shop no 7 (rehab), Siddhivinayak SRA CHS LTD Building, Vikhroli station road, Vikhroli west',
    city: 'Mumbai',
    area: 'Vikhroli West',
    region: 'Maharashtra',
    postalCode: '400083',
    countryCode: 'IN',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Classes', href: '#classes' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Founder', href: '#founder' },
    // { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],

  contact: {
    // Add real values before deployment. Empty strings deliberately produce no
    // live telephone, email, WhatsApp, address, map, or social destination.
    phone: '9594716395',
    email: 'rahuld841@gmail.com',
    whatsappNumber: '9594716395',
    address: 'Shop no 7 (rehab), Siddhivinayak SRA CHS LTD Building, Vikhroli station road, Vikhroli west, Mumbai, Maharashtra, 400083',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.904897835928!2d72.9268543!3d19.111827599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c71873d16023%3A0x69b4047f19784b4b!2sSur%20Sangam%20Music%20Academy!5e0!3m2!1sen!2sin!4v1794207040112!5m2!1sen!2sin',

    // Components should show these labels whenever the related value is empty.
    placeholderLabels: {
      phone: 'Phone number to be added',
      email: 'Email address to be added',
      whatsappNumber: 'WhatsApp number to be added',
      address: 'Academy address to be added',
    },

    // Only render links with a non-empty href. These are intentionally blank
    // rather than invented social profiles.
    socialLinks: [
      { label: 'Instagram', href: '', ariaLabel: 'Sursangam Academy on Instagram' },
      { label: 'Facebook', href: '', ariaLabel: 'Sursangam Academy on Facebook' },
      { label: 'YouTube', href: '', ariaLabel: 'Sursangam Academy on YouTube' },
    ],
  },

  configurationNotice:
    'Verify the configured contact details against the academy’s current public information before launch.',

  media: {
    // Keep originals in source-assets; reference optimized, licensed derivatives from public.
    hero: {
      src: '/guitar-lesson-hero.jpg',
      avifSrc: '/guitar-lesson-hero.avif',
      alt: 'Hands playing an acoustic guitar in warm stage light',
    },
    about: {
      src: '/electronic-drum-kit.jpg',
      avifSrc: '/electronic-drum-kit.avif',
      alt: 'Musician playing an electronic drum kit in a practice room',
    },
    gallery: [
      {
        id: 'guitar-learning',
        src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Guitar ready for a music learning session',
      },
      {
        id: 'keyboard-practice',
        src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Keyboard set up for practice',
      },
      {
        id: 'piano-session',
        src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Piano keys during a practice session',
      },
      {
        id: 'vocal-music',
        src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Singer performing with a microphone',
      },
      {
        id: 'musical-instruments',
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Musical instruments in a creative studio',
      },
      {
        id: 'group-learning',
        src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Musicians learning together',
      },
      {
        id: 'music-performance',
        src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1000&h=800&q=80',
        alt: 'Live music performance on stage',
      },
    ],
  },
};

export const hasConfiguredValue = (value) => Boolean(String(value || '').trim());

export const normalizeEmail = (value) => {
  const email = String(value ?? '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
};

export const normalizePhone = (value) => {
  const normalized = String(value ?? '').replace(/[\s()\-]+/g, '');
  const digitsOnly = normalized.replace(/\D/g, '');

  if (digitsOnly.length < 7) {
    return '';
  }

  return normalized.startsWith('+') ? `+${digitsOnly}` : digitsOnly;
};

export const normalizeWhatsApp = (value) => {
  const digitsOnly = String(value ?? '').replace(/\D/g, '');
  return digitsOnly.length >= 8 ? digitsOnly : '';
};

export const getGeneralEnquiryHref = () => {
  const email = normalizeEmail(siteConfig.contact.email);

  if (!email) {
    return null;
  }

  return (
    'mailto:' +
    email +
    '?subject=' +
    encodeURIComponent(GENERAL_ENQUIRY_SUBJECT) +
    '&body=' +
    encodeURIComponent(GENERAL_ENQUIRY_BODY)
  );
};

export const getPhoneHref = () => {
  const phone = normalizePhone(siteConfig.contact.phone);
  return phone ? 'tel:' + phone : null;
};

export const getWhatsAppHref = (message = '') => {
  const number = normalizeWhatsApp(siteConfig.contact.whatsappNumber);

  if (!number) {
    return null;
  }

  const query = message ? '?text=' + encodeURIComponent(message) : '';
  return 'https://wa.me/' + number + query;
};

export default siteConfig;
