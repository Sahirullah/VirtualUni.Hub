// Helper function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get 50 questions
export const getQuestionSet = (allQuestions, attemptNumber = 0) => {
  const questionsPerExam = 50;
  const windowStart = attemptNumber * 10;
  const windowEnd = Math.min(windowStart + questionsPerExam, allQuestions.length);
  
  let selectedQuestions = allQuestions.slice(windowStart, windowEnd);
  
  if (selectedQuestions.length < questionsPerExam) {
    const remaining = questionsPerExam - selectedQuestions.length;
    selectedQuestions = selectedQuestions.concat(allQuestions.slice(0, remaining));
  }
  
  return shuffleArray(selectedQuestions);
};

// Generate 100 questions for a course
const generateCourseQuestions = (courseName) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the fundamental concept of ${courseName}?`, opts: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 1 },
    { q: `Which principle applies to ${courseName}?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'Principle 4'], correct: 2 },
    { q: `Define the key term in ${courseName}:`, opts: ['Definition A', 'Definition B', 'Definition C', 'Definition D'], correct: 1 },
    { q: `How is ${courseName} applied in practice?`, opts: ['Method A', 'Method B', 'Method C', 'Method D'], correct: 2 },
    { q: `What is important in ${courseName}?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'Aspect 4'], correct: 0 },
  ];

  for (let i = 0; i < 100; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: `${base.q} (Q${i + 1})`,
      options: base.opts,
      correct: base.correct,
    });
  }
  return questions;
};

export const finalTermExamPracticeData = [
  // ACC - Accounting
  { id: 1, code: 'ACC311', title: 'Fundamentals of Auditing', category: 'acc', image: '📊', questions: generateCourseQuestions('Auditing'), totalQuestions: 50 },
  { id: 2, code: 'ACC501', title: 'Business Finance', category: 'acc', image: '📊', questions: generateCourseQuestions('Business Finance'), totalQuestions: 50 },
  
  // BIF - Bioinformatics
  { id: 3, code: 'BIF101', title: 'Cell Biology', category: 'bif', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  { id: 4, code: 'BIF401', title: 'Bioinformatics-I', category: 'bif', image: '🧬', questions: generateCourseQuestions('Bioinformatics'), totalQuestions: 50 },
  
  // BIO - Biology
  { id: 10, code: 'BIO101', title: 'Basic Biology I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology I'), totalQuestions: 50 },
  { id: 11, code: 'BIO102', title: 'Basic Biology II', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology II'), totalQuestions: 50 },
  { id: 12, code: 'BIO201', title: 'Cell Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  { id: 13, code: 'BIO202', title: 'Biochemistry I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry I'), totalQuestions: 50 },
  { id: 14, code: 'BIO203', title: 'Methods in Molecular Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Molecular Biology'), totalQuestions: 50 },
  { id: 15, code: 'BIO204', title: 'Principles of Biochemical Engineering', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemical Engineering'), totalQuestions: 50 },
  
  // BNK - Banking
  { id: 27, code: 'BNK601', title: 'Banking Laws & Practices', category: 'bnk', image: '💼', questions: generateCourseQuestions('Banking'), totalQuestions: 50 },
  { id: 28, code: 'BNK603', title: 'Consumer Banking', category: 'bnk', image: '💼', questions: generateCourseQuestions('Consumer Banking'), totalQuestions: 50 },
  
  // BT - Biotechnology
  { id: 31, code: 'BT101', title: 'Ecology, Biodiversity & Evolution-I', category: 'bt', image: '🧬', questions: generateCourseQuestions('Ecology'), totalQuestions: 50 },
  { id: 32, code: 'BT102', title: 'Microbiology', category: 'bt', image: '🧬', questions: generateCourseQuestions('Microbiology'), totalQuestions: 50 },
  
  // CHE - Chemistry
  { id: 48, code: 'CHE201', title: 'Thermodynamics', category: 'che', image: '⚗️', questions: generateCourseQuestions('Thermodynamics'), totalQuestions: 50 },
  { id: 49, code: 'CHE301', title: 'Analytical Chemistry & Instrumentation', category: 'che', image: '⚗️', questions: generateCourseQuestions('Analytical Chemistry'), totalQuestions: 50 },
  
  // CS - Computer Science
  { id: 50, code: 'CS001', title: 'Computer Proficiency License', category: 'cs', image: '💻', questions: generateCourseQuestions('Computing'), totalQuestions: 50 },
  { id: 51, code: 'CS101', title: 'Introduction to Computing', category: 'cs', image: '💻', questions: generateCourseQuestions('Computing'), totalQuestions: 50 },
  { id: 52, code: 'CS201', title: 'Introduction to Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('Programming'), totalQuestions: 50 },
  { id: 53, code: 'CS202', title: 'Fundamentals of Front End Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Front End'), totalQuestions: 50 },
  { id: 54, code: 'CS204', title: 'Cyber Law', category: 'cs', image: '💻', questions: generateCourseQuestions('Cyber Law'), totalQuestions: 50 },
  { id: 55, code: 'CS205', title: 'Information Security', category: 'cs', image: '💻', questions: generateCourseQuestions('Security'), totalQuestions: 50 },
  { id: 56, code: 'CS206', title: 'Introduction to Network Design & Analysis', category: 'cs', image: '💻', questions: generateCourseQuestions('Network Design'), totalQuestions: 50 },
  { id: 57, code: 'CS301', title: 'Data Structures', category: 'cs', image: '💻', questions: generateCourseQuestions('Data Structures'), totalQuestions: 50 },
  
  // ECO - Economics
  { id: 103, code: 'ECO401', title: 'Economics', category: 'eco', image: '📈', questions: generateCourseQuestions('Economics'), totalQuestions: 50 },
  { id: 104, code: 'ECO402', title: 'Microeconomics', category: 'eco', image: '📈', questions: generateCourseQuestions('Microeconomics'), totalQuestions: 50 },
  
  // ENG - English
  { id: 110, code: 'ENG101', title: 'English Composition', category: 'eng', image: '📝', questions: generateCourseQuestions('English'), totalQuestions: 50 },
  { id: 111, code: 'ENG201', title: 'Literature', category: 'eng', image: '📝', questions: generateCourseQuestions('Literature'), totalQuestions: 50 },
  
  // MTH - Mathematics
  { id: 120, code: 'MTH101', title: 'Calculus I', category: 'mth', image: '🔢', questions: generateCourseQuestions('Calculus I'), totalQuestions: 50 },
  { id: 121, code: 'MTH201', title: 'Calculus II', category: 'mth', image: '🔢', questions: generateCourseQuestions('Calculus II'), totalQuestions: 50 },
  { id: 122, code: 'MTH301', title: 'Linear Algebra', category: 'mth', image: '🔢', questions: generateCourseQuestions('Linear Algebra'), totalQuestions: 50 },
  
  // PHY - Physics
  { id: 130, code: 'PHY101', title: 'Physics-I', category: 'phy', image: '⚡', questions: generateCourseQuestions('Physics I'), totalQuestions: 50 },
  { id: 131, code: 'PHY102', title: 'Physics-II', category: 'phy', image: '⚡', questions: generateCourseQuestions('Physics II'), totalQuestions: 50 },
  
  // PSY - Psychology
  { id: 140, code: 'PSY101', title: 'Introduction to Psychology', category: 'psy', image: '🧠', questions: generateCourseQuestions('Psychology'), totalQuestions: 50 },
  
  // STA - Statistics
  { id: 150, code: 'STA301', title: 'Statistics', category: 'sta', image: '📊', questions: generateCourseQuestions('Statistics'), totalQuestions: 50 },
];

export const finalTermCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'bif', name: 'BIF - Bioinformatics' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'bnk', name: 'BNK - Banking' },
  { id: 'bt', name: 'BT - Biotechnology' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'eco', name: 'ECO - Economics' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'mth', name: 'MTH - Mathematics' },
  { id: 'phy', name: 'PHY - Physics' },
  { id: 'psy', name: 'PSY - Psychology' },
  { id: 'sta', name: 'STA - Statistics' },
];
