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
      src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Acoustic guitar prepared for a lesson',
    },
    moduleIntro: 'Choose your path: build your foundation through Hindustani classical notes or Western staff notation.',
    moduleTracks: [
      {
        title: 'Guitar basics through Hindustani classical notes',
        modules: [
          'Basic finger exercises',
          'Open chords',
          '5 basic strumming patterns',
          'Basic fretboard arpeggios',
          'Special lead lessons',
          'Strumming patterns with vocals',
          '5 types of various songs',
          'Basic guitar theory',
          'Ear and beat training',
          'Notation reading',
        ],
      },
      {
        title: 'Guitar basics through Western staff notation',
        modules: [
          'Basic guitar introduction and theory',
          'Fretboard lessons',
          'How to play any song on the fretboard',
          'Staff notation reading',
          'Left-hand lessons on the fretboard',
          'Major and minor scales',
          'Strumming patterns',
          'Rhythm, time, and beat on guitar',
          'How to tune a guitar',
          'How to install and uninstall a string',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Keyboard keys ready for practice',
    },
    moduleIntro: 'Learn in the style that suits you: choose Hindustani classical or Western notation.',
    moduleTracks: [
      {
        title: 'Hindustani classical',
        modules: [
          'Basic finger exercises',
          'Chord patterns',
          'Scales',
          'Various light music melodies with chords',
          'Jingles',
          'Major and minor chords',
          'Different types of songs',
        ],
      },
      {
        title: 'Western notation',
        modules: [
          'Introduction to Western music',
          'Notes on the keyboard',
          'How to read staff notation',
          'Major and minor chords',
          'Time signature',
          'Rhythm patterns',
          'Both-hand lessons',
          'Scales',
          'Basic poems',
        ],
      },
    ],
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
      src: '/harmonium-lesson.jpg',
      avifSrc: '/harmonium-lesson.avif',
      width: 1200,
      height: 923,
      alt: 'Wooden harmonium keyboard in a music practice room',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'Basic finger exercises',
          '20 Alankaras',
          'Classical ragas with bandish',
          'Finger exercises with bellows training',
          'Various types of songs',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Vocalist singing into a microphone',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'Breath control and vocal posture',
          'Voice culture and pitch practice',
          'Introduction to swaras and saptak',
          'Alankaras and voice agility',
          'Introduction to Hindustani ragas',
          'Aaroh, avaroh, and pakad',
          'Bandish and basic taals',
          'Alaap and melodic improvisation',
          'Listening practice and guided performance',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Musician preparing to sing',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'Breathing and vocal posture',
          'Voice warm-ups and vocal care',
          'Pitch matching and listening',
          'Introduction to swaras',
          'Basic rhythm and keeping time',
          'Simple melody practice',
          'Diction and clear pronunciation',
          'Singing with expression and confidence',
          'Practice songs suited to the student',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Singer and musician in a performance setting',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'Melody, pitch, and voice warm-ups',
          'Rhythm and keeping time',
          'Song structure and phrasing',
          'Lyrics, diction, and pronunciation',
          'Breath control for songs',
          'Singing with expression and dynamics',
          'Song practice across selected styles',
          'Microphone and performance basics',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Musical notes and instruments on a practice table',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'The musical alphabet and note names',
          'Pitch, melody, and harmony',
          'Rhythm, pulse, and tempo',
          'Beat groupings and time signatures',
          'Major and minor scales',
          'Intervals and basic chords',
          'Introduction to musical form',
          'Active listening and ear training',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Sheet music under warm performance lights',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'The staff, clefs, and line and space names',
          'Reading notes in treble and bass clefs',
          'Note values, rests, and ties',
          'Measures and bar lines',
          'Time signatures and counting',
          'Key signatures and accidentals',
          'Dynamic and articulation markings',
          'Reading and clapping simple music examples',
        ],
      },
    ],
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
      src: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=1000&h=800&q=80',
      alt: 'Musician working with an instrument during practice',
    },
    moduleTracks: [
      {
        title: 'Course modules',
        modules: [
          'Notes, pitch, and the musical alphabet',
          'Scales, intervals, and key basics',
          'Chords and basic harmony',
          'Rhythm, pulse, tempo, and time signatures',
          'Reading simple staff notation',
          'Listening and ear-training exercises',
          'Apply theory on the student’s chosen instrument',
          'Build musical ideas through guided practice',
        ],
      },
    ],
    enquiry: courseEnquiry('Music Theory & Practical Training classes'),
  },
];

export const getCourseById = (courseId) =>
  courses.find((course) => course.id === courseId);

export default courses;
