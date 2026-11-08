/**
 * Course catalogue. Course-specific enquiry copy lives beside the course so
 * adding or removing a class does not require changing UI components.
 */

const courseEnquiry = (courseName) => ({
  subject: 'Enquiry – ' + courseName + ' | Sursangam Academy',
  body: [
    'Hello Sursangam Academy,',
    '',
    'I would like to enquire about ' + courseName + '.',
    '',
    'Name:',
    'Preferred schedule:',
    'Message:',
  ].join('\n'),
});

export const courseCategories = [
  'Instrumental Music',
  'Vocal Music',
  'Music Theory',
];

export const courses = [
  {
    id: 'guitar',
    name: 'Guitar',
    category: 'Instrumental Music',
    level: 'Beginner to intermediate',
    description:
      'Build confidence with chords, rhythm, and melody through focused guitar learning.',
    image: {
      src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1100&q=85',
      alt: 'Acoustic guitar prepared for a lesson',
    },
    enquiry: courseEnquiry('Guitar classes'),
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    category: 'Instrumental Music',
    level: 'Beginner to Advanced',
    description:
      'Explore melody, harmony, and rhythmic coordination on the keyboard.',
    image: {
      src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1100&q=85',
      alt: 'Keyboard keys ready for practice',
    },
    enquiry: courseEnquiry('Keyboard classes'),
  },
  {
    id: 'harmonium',
    name: 'Harmonium',
    category: 'Instrumental Music',
    level: 'Beginner to Advanced',
    description:
      'Develop musical expression, technique, and a strong foundation with the harmonium.',
    image: {
      src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1300&q=85',
      alt: 'Harmonium keys in a music practice space',
    },
    enquiry: courseEnquiry('Harmonium classes'),
  },
  {
    id: 'hindustani-classical-vocal',
    name: 'Hindustani Classical Vocal',
    category: 'Vocal Music',
    level: 'Beginner to intermediate',
    description:
      'Explore the foundations of Hindustani classical vocal music with regular practice.',
    image: {
      src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1100&q=85',
      alt: 'Vocalist singing into a microphone',
    },
    enquiry: courseEnquiry('Hindustani Classical Vocal classes'),
  },
  {
    id: 'basic-vocal-training',
    name: 'Basic Vocal Training',
    category: 'Vocal Music',
    level: 'Beginner',
    description:
      'Start with voice awareness, pitch, breathing, and the joy of singing.',
    image: {
      src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1100&q=85',
      alt: 'Musician preparing to sing',
    },
    enquiry: courseEnquiry('Basic Vocal Training classes'),
  },
  {
    id: 'light-music',
    name: 'Light Music',
    category: 'Vocal Music',
    level: 'Beginner to intermediate',
    description:
      'Discover melodic expression and performance confidence through light music.',
    image: {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=85',
      alt: 'Singer and musician in a performance setting',
    },
    enquiry: courseEnquiry('Light Music classes'),
  },
  {
    id: 'music-fundamentals',
    name: 'Music Fundamentals',
    category: 'Music Theory',
    level: 'Beginner',
    description:
      'Learn the building blocks that make listening, reading, and creating music clearer.',
    image: {
      src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1100&q=85',
      alt: 'Musical notes and instruments on a practice table',
    },
    enquiry: courseEnquiry('Music Fundamentals classes'),
  },
  {
    id: 'music-notation',
    name: 'Music Notation',
    category: 'Music Theory',
    level: 'Beginner to intermediate',
    description:
      'Understand how musical ideas are written, read, and shared through notation.',
    image: {
      src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1100&q=85',
      alt: 'Sheet music under warm performance lights',
    },
    enquiry: courseEnquiry('Music Notation classes'),
  },
  {
    id: 'music-theory-practical-training',
    name: 'Music Theory & Practical Training',
    category: 'Music Theory',
    level: 'Beginner to intermediate',
    description:
      'Connect musical concepts with hands-on listening, playing, and practice.',
    image: {
      src: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=1100&q=85',
      alt: 'Musician working with an instrument during practice',
    },
    enquiry: courseEnquiry('Music Theory & Practical Training classes'),
  },
];

export const getCourseById = (courseId) =>
  courses.find((course) => course.id === courseId);

export default courses;
