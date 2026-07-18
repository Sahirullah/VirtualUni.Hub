import { getQuestionSet } from './examPracticeData';

// Helper function to generate 100 questions for a course
const generateCourseQuestions = (courseName, courseCode) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the fundamental concept of ${courseName}?`, opts: ['Concept A', 'Concept B', 'Concept C', 'Concept D'], correct: 1 },
    { q: `Which principle applies to ${courseName}?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'Principle 4'], correct: 2 },
    { q: `Define the key term in ${courseName}:`, opts: ['Definition A', 'Definition B', 'Definition C', 'Definition D'], correct: 1 },
    { q: `How is ${courseName} applied in practice?`, opts: ['Method A', 'Method B', 'Method C', 'Method D'], correct: 2 },
    { q: `What is important in ${courseName}?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'Aspect 4'], correct: 0 },
    { q: `Which of the following is related to ${courseName}?`, opts: ['Related 1', 'Related 2', 'Related 3', 'Related 4'], correct: 3 },
    { q: `How does ${courseName} differ from similar concepts?`, opts: ['Difference 1', 'Difference 2', 'Difference 3', 'Difference 4'], correct: 1 },
    { q: `What is the purpose of ${courseName}?`, opts: ['Purpose 1', 'Purpose 2', 'Purpose 3', 'Purpose 4'], correct: 2 },
    { q: `In the context of ${courseName}, what does this mean?`, opts: ['Meaning A', 'Meaning B', 'Meaning C', 'Meaning D'], correct: 0 },
    { q: `Which approach is best for ${courseName}?`, opts: ['Approach 1', 'Approach 2', 'Approach 3', 'Approach 4'], correct: 2 },
  ];

  for (let i = 0; i < 100; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: `${base.q} (${courseCode} Q${i + 1})`,
      options: base.opts,
      correct: base.correct,
    });
  }
  return questions;
};

// Midterm Exam Practice Data
export const midtermExamPracticeData = [
  // Computer Science Courses
  {
    id: 1,
    code: 'CS101',
    title: 'Introduction to Computing',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Introduction to Computing', 'CS101'),
  },
  {
    id: 2,
    code: 'CS201',
    title: 'Introduction to Programming',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Introduction to Programming', 'CS201'),
  },
  {
    id: 3,
    code: 'CS301',
    title: 'Data Structures',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Data Structures', 'CS301'),
  },

  // Mathematics Courses
  {
    id: 4,
    code: 'MTH101',
    title: 'Calculus and Analytical Geometry',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Calculus and Analytical Geometry', 'MTH101'),
  },
  {
    id: 5,
    code: 'MTH201',
    title: 'Discrete Mathematics',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Discrete Mathematics', 'MTH201'),
  },

  // English Courses
  {
    id: 6,
    code: 'ENG101',
    title: 'English Composition',
    category: 'eng',
    image: '📝',
    questions: generateCourseQuestions('English Composition', 'ENG101'),
  },

  // Physics Courses
  {
    id: 7,
    code: 'PHY101',
    title: 'Physics I',
    category: 'phy',
    image: '⚛️',
    questions: generateCourseQuestions('Physics I', 'PHY101'),
  },

  // Chemistry Courses
  {
    id: 8,
    code: 'CHE101',
    title: 'General Chemistry',
    category: 'che',
    image: '⚗️',
    questions: generateCourseQuestions('General Chemistry', 'CHE101'),
  },

  // Business Courses
  {
    id: 9,
    code: 'BUS101',
    title: 'Introduction to Business',
    category: 'mgt',
    image: '💼',
    questions: generateCourseQuestions('Introduction to Business', 'BUS101'),
  },

  // Statistics Courses
  {
    id: 10,
    code: 'STA301',
    title: 'Statistics and Probability',
    category: 'sta',
    image: '📊',
    questions: generateCourseQuestions('Statistics and Probability', 'STA301'),
  },
];

// Midterm Categories
export const midtermExamPracticeCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'mth', name: 'MTH - Mathematics' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'phy', name: 'PHY - Physics' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'mgt', name: 'MGT - Management' },
  { id: 'sta', name: 'STA - Statistics' },
];
