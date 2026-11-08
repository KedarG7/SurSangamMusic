/**
 * This is a visual-development timetable only. It must remain visibly labelled
 * as sample content until the academy supplies confirmed class schedules.
 */

export const scheduleNotice =
  'Class Timetable';

export const schedules = [
  {
    id: 'guitar-evening',
    courseId: 'guitar',
    course: 'Guitar',
    days: 'Monday, Wednesday, Friday',
    timing: '5 PM – 6 PM',
    duration: '1 Hour',
    batch: 'Evening',
    isSample: true,
  },
  {
    id: 'keyboard-afternoon',
    courseId: 'keyboard',
    course: 'Keyboard',
    days: 'Tuesday, Thursday, Saturday',
    timing: '4 PM – 5 PM',
    duration: '1 Hour',
    batch: 'Afternoon',
    isSample: true,
  },
  {
    id: 'piano-evening',
    courseId: 'piano',
    course: 'Piano',
    days: 'Monday, Wednesday, Friday',
    timing: '6 PM – 7 PM',
    duration: '1 Hour',
    batch: 'Evening',
    isSample: true,
  },
  {
    id: 'basic-vocal-evening',
    courseId: 'basic-vocal-training',
    course: 'Basic Vocal',
    days: 'Tuesday, Thursday, Saturday',
    timing: '5 PM – 6 PM',
    duration: '1 Hour',
    batch: 'Evening',
    isSample: true,
  },
  {
    id: 'classical-vocal-evening',
    courseId: 'hindustani-classical-vocal',
    course: 'Classical Vocal',
    days: 'Monday, Wednesday, Friday',
    timing: '7 PM – 8 PM',
    duration: '1 Hour',
    batch: 'Evening',
    isSample: true,
  },
  {
    id: 'music-theory-morning',
    courseId: 'music-theory-practical-training',
    course: 'Music Theory',
    days: 'Saturday, Sunday',
    timing: '10 AM – 11 AM',
    duration: '1 Hour',
    batch: 'Morning',
    isSample: true,
  },
];

export default schedules;
