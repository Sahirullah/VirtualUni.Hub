import { getQuestionSet } from './examPracticeData';

// Helper function to generate 100 questions for a course
const generateCourseQuestions = (courseName, courseCode) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the advanced concept of ${courseName}?`, opts: ['Advanced A', 'Advanced B', 'Advanced C', 'Advanced D'], correct: 1 },
    { q: `Which theory applies to ${courseName}?`, opts: ['Theory 1', 'Theory 2', 'Theory 3', 'Theory 4'], correct: 2 },
    { q: `Explain the key framework in ${courseName}:`, opts: ['Framework A', 'Framework B', 'Framework C', 'Framework D'], correct: 1 },
    { q: `How is ${courseName} implemented in real-world scenarios?`, opts: ['Implementation A', 'Implementation B', 'Implementation C', 'Implementation D'], correct: 2 },
    { q: `What is the critical aspect of ${courseName}?`, opts: ['Critical 1', 'Critical 2', 'Critical 3', 'Critical 4'], correct: 0 },
    { q: `Which concept is fundamental to ${courseName}?`, opts: ['Fundamental 1', 'Fundamental 2', 'Fundamental 3', 'Fundamental 4'], correct: 3 },
    { q: `How does ${courseName} relate to modern applications?`, opts: ['Relation A', 'Relation B', 'Relation C', 'Relation D'], correct: 1 },
    { q: `What is the advanced application of ${courseName}?`, opts: ['Application 1', 'Application 2', 'Application 3', 'Application 4'], correct: 2 },
    { q: `In the context of final term, what is the focus of ${courseName}?`, opts: ['Focus A', 'Focus B', 'Focus C', 'Focus D'], correct: 0 },
    { q: `Which methodology is used in ${courseName}?`, opts: ['Method 1', 'Method 2', 'Method 3', 'Method 4'], correct: 2 },
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

// Final Term Exam Practice Data
export const finalTermExamPracticeData = [
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
  {
    id: 4,
    code: 'CS401',
    title: 'Algorithm Design',
    category: 'cs',
    image: '💻',
    questions: generateCourseQuestions('Algorithm Design', 'CS401'),
  },
  {
    id: 5,
    code: 'CS606',
    title: 'Advanced Web Development',
    category: 'cs',
    image: '💻',
    questions: [
      { question: "cs for ___________.", options: ['chemistry practical', 'computer science', 'construction payroll', 'common plate'], correct: 1 },
      { question: "cs101 ___________.", options: ['chemistry practical', 'computer science', 'introduction to computing', 'common plate'], correct: 2 },
      { question: "cs202 for ___________.", options: ['chemistry practical', 'computer science', 'construction payroll', 'front end development'], correct: 1 },
      { question: "What is the main focus of web development?", options: ['Database design', 'User interface creation', 'Network security', 'Cloud computing'], correct: 1 },
      { question: "Which language is essential for front-end development?", options: ['Python', 'JavaScript', 'Java', 'C++'], correct: 1 },
      { question: "What does API stand for?", options: ['Application Programming Interface', 'Advanced Programming Input', 'Automated Processor Interface', 'Automatic Programming Implementation'], correct: 0 },
      { question: "Which of these is a frontend framework?", options: ['Django', 'React', 'Laravel', 'Spring'], correct: 1 },
      { question: "What is responsive design?", options: ['Design that changes colors', 'Design that works on all devices', 'Design with animations', 'Design with databases'], correct: 1 },
      { question: "Which is a backend programming language?", options: ['HTML', 'CSS', 'PHP', 'JavaScript'], correct: 2 },
      { question: "What is version control used for?", options: ['Managing project versions', 'Controlling user access', 'Managing databases', 'Storing images'], correct: 0 },
    ],
  },

  // Mathematics Courses
  {
    id: 6,
    code: 'MTH101',
    title: 'Calculus and Analytical Geometry',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Calculus and Analytical Geometry', 'MTH101'),
  },
  {
    id: 7,
    code: 'MTH201',
    title: 'Discrete Mathematics',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Discrete Mathematics', 'MTH201'),
  },
  {
    id: 8,
    code: 'MTH301',
    title: 'Linear Algebra',
    category: 'mth',
    image: '📐',
    questions: generateCourseQuestions('Linear Algebra', 'MTH301'),
  },

  // English Courses
  {
    id: 9,
    code: 'ENG101',
    title: 'English Composition',
    category: 'eng',
    image: '📝',
    questions: generateCourseQuestions('English Composition', 'ENG101'),
  },
  {
    id: 10,
    code: 'ENG201',
    title: 'Literature and Writing',
    category: 'eng',
    image: '📝',
    questions: generateCourseQuestions('Literature and Writing', 'ENG201'),
  },

  // Physics Courses
  {
    id: 11,
    code: 'PHY101',
    title: 'Physics I',
    category: 'phy',
    image: '⚛️',
    questions: generateCourseQuestions('Physics I', 'PHY101'),
  },
  {
    id: 12,
    code: 'PHY201',
    title: 'Physics II',
    category: 'phy',
    image: '⚛️',
    questions: generateCourseQuestions('Physics II', 'PHY201'),
  },

  // Chemistry Courses
  {
    id: 13,
    code: 'CHE101',
    title: 'General Chemistry',
    category: 'che',
    image: '⚗️',
    questions: generateCourseQuestions('General Chemistry', 'CHE101'),
  },
  {
    id: 14,
    code: 'CHE201',
    title: 'Organic Chemistry',
    category: 'che',
    image: '⚗️',
    questions: generateCourseQuestions('Organic Chemistry', 'CHE201'),
  },

  // Business & Management Courses
  {
    id: 15,
    code: 'BUS101',
    title: 'Introduction to Business',
    category: 'mgt',
    image: '💼',
    questions: generateCourseQuestions('Introduction to Business', 'BUS101'),
  },
  {
    id: 16,
    code: 'BUS301',
    title: 'Business Management',
    category: 'mgt',
    image: '💼',
    questions: generateCourseQuestions('Business Management', 'BUS301'),
  },

  // Statistics & Economics
  {
    id: 17,
    code: 'STA301',
    title: 'Statistics and Probability',
    category: 'sta',
    image: '📊',
    questions: generateCourseQuestions('Statistics and Probability', 'STA301'),
  },
  {
    id: 18,
    code: 'ECO101',
    title: 'Microeconomics',
    category: 'eco',
    image: '📈',
    questions: generateCourseQuestions('Microeconomics', 'ECO101'),
  },

  // Islamic Studies
  {
    id: 19,
    code: 'ISL101',
    title: 'Islamic Studies',
    category: 'isl',
    image: '☪️',
    questions: generateCourseQuestions('Islamic Studies', 'ISL101'),
  },

  // Pakistan Studies
  {
    id: 20,
    code: 'PAK101',
    title: 'Pakistan Studies',
    category: 'pak',
    image: '🇵🇰',
    questions: generateCourseQuestions('Pakistan Studies', 'PAK101'),
  },
];

// Final Term Categories
export const finalTermExamPracticeCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'mth', name: 'MTH - Mathematics' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'phy', name: 'PHY - Physics' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'mgt', name: 'MGT - Management' },
  { id: 'sta', name: 'STA - Statistics' },
  { id: 'eco', name: 'ECO - Economics' },
  { id: 'isl', name: 'ISL - Islamic Studies' },
  { id: 'pak', name: 'PAK - Pakistan Studies' },
];
