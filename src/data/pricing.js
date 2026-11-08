/**
 * Pricing is deliberately unconfigured. The brief prohibits invented fees, so
 * components should show displayFee until feeAmount and pricingAvailable are
 * updated with academy-approved values.
 */

const contactForPricing = (courseId, courseName, description) => ({
  id: courseId,
  courseId,
  course: courseName,
  description,
  feeAmount: null,
  currency: 'INR',
  feePeriod: 'Month',
  pricingAvailable: false,
  displayFee: 'Contact us for pricing',
  includedFeatures: ['Fee and course details shared on enquiry.'],
  enquiry: {
    subject: 'Pricing enquiry – ' + courseName + ' | Sursangam Academy',
    body: [
      'Hello Sursangam Academy,',
      '',
      'I would like to know the pricing for ' + courseName + '.',
      '',
      'Name:',
      'Preferred schedule:',
      'Message:',
    ].join('\n'),
  },
});

export const pricing = [
  contactForPricing(
    'guitar',
    'Guitar',
    'Build confidence with chords, rhythm, and melody through focused guitar learning.'
  ),
  contactForPricing(
    'keyboard',
    'Keyboard',
    'Explore melody, harmony, and rhythmic coordination on the keyboard.'
  ),
  contactForPricing(
    'piano',
    'Piano',
    'Develop musical expression, technique, and a strong foundation at the piano.'
  ),
  contactForPricing(
    'basic-vocal-training',
    'Basic Vocal Training',
    'Start with voice awareness, pitch, breathing, and the joy of singing.'
  ),
  contactForPricing(
    'hindustani-classical-vocal',
    'Classical Vocal',
    'Explore the foundations of Hindustani classical vocal music with regular practice.'
  ),
  contactForPricing(
    'light-music',
    'Light Music',
    'Discover melodic expression and performance confidence through light music.'
  ),
  contactForPricing(
    'music-theory-practical-training',
    'Music Theory',
    'Connect musical concepts with hands-on listening, playing, and practice.'
  ),
];

export default pricing;
