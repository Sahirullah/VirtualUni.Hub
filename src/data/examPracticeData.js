// Helper function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get 50 questions from a sliding window
export const getQuestionSet = (allQuestions, attemptNumber = 0) => {
  const questionsPerExam = 50;
  const windowStart = attemptNumber * 10; // 1st: 0, 2nd: 10, 3rd: 20...
  const windowEnd = Math.min(windowStart + questionsPerExam, allQuestions.length);
  
  // Get questions from the sliding window
  let selectedQuestions = allQuestions.slice(windowStart, windowEnd);
  
  // If we have fewer than 50, wrap around to the beginning
  if (selectedQuestions.length < questionsPerExam) {
    const remaining = questionsPerExam - selectedQuestions.length;
    selectedQuestions = selectedQuestions.concat(allQuestions.slice(0, remaining));
  }
  
  // Shuffle the questions and their positions
  return shuffleArray(selectedQuestions);
};

// Generate 100 math questions
const generateMathQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'What is 15 × 4?', opts: ['45', '50', '60', '75'], correct: 2 },
    { q: 'What is the square root of 144?', opts: ['10', '12', '14', '16'], correct: 1 },
    { q: 'What is 25% of 200?', opts: ['25', '50', '75', '100'], correct: 1 },
    { q: 'Solve: 5x + 10 = 35', opts: ['3', '5', '7', '9'], correct: 1 },
    { q: 'What is the area of a rectangle with length 8 and width 5?', opts: ['13', '26', '40', '80'], correct: 2 },
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

// Generate 100 English questions
const generateEnglishQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'Choose the correct sentence:', opts: ['She go to school', 'She goes to school', 'She going to school', 'She gone to school'], correct: 1 },
    { q: 'What is the past tense of "eat"?', opts: ['eated', 'ate', 'eaten', 'eatted'], correct: 1 },
    { q: 'Identify the adjective in: "The beautiful garden"', opts: ['garden', 'beautiful', 'the', 'in'], correct: 1 },
    { q: 'Which sentence is grammatically correct?', opts: ['He dont like apples', 'He do not like', 'He does not like apples', 'He does not likes'], correct: 2 },
    { q: 'What is the plural of "child"?', opts: ['childs', 'children', 'childes', 'childer'], correct: 1 },
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

// Generate 100 Science questions
const generateScienceQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'What is the chemical symbol for Gold?', opts: ['Go', 'Gd', 'Au', 'Ag'], correct: 2 },
    { q: 'How many bones does an adult human have?', opts: ['186', '196', '206', '216'], correct: 2 },
    { q: 'What is the SI unit of force?', opts: ['Watt', 'Newton', 'Joule', 'Volt'], correct: 1 },
    { q: 'Which planet is the hottest?', opts: ['Mercury', 'Venus', 'Mars', 'Jupiter'], correct: 1 },
    { q: 'What is photosynthesis?', opts: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'], correct: 1 },
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

// Generate 100 Computer questions
const generateComputerQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'What does HTML stand for?', opts: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup', 'Hyperlinks Text'], correct: 0 },
    { q: 'Which is a programming language?', opts: ['HTML', 'CSS', 'Python', 'XML'], correct: 2 },
    { q: 'What does CPU stand for?', opts: ['Central Processing Unit', 'Central Program Utility', 'Computer Personal Unit', 'Central Processor Usage'], correct: 0 },
    { q: 'What is the full form of RAM?', opts: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Memory', 'Real Access Module'], correct: 1 },
    { q: 'Which company developed JavaScript?', opts: ['Microsoft', 'Apple', 'Netscape', 'Google'], correct: 2 },
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

// Generate 100 History questions
const generateHistoryQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'In which year did World War II end?', opts: ['1943', '1944', '1945', '1946'], correct: 2 },
    { q: 'Which is the largest continent?', opts: ['Africa', 'North America', 'Asia', 'Europe'], correct: 2 },
    { q: 'What is the capital of France?', opts: ['Lyon', 'Marseille', 'Paris', 'Nice'], correct: 2 },
    { q: 'Who was the first US President?', opts: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'], correct: 1 },
    { q: 'Which river is the longest?', opts: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correct: 1 },
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

// Generate 100 Logic questions
const generateLogicQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'If all roses are flowers and all flowers are plants, then roses are?', opts: ['Definitely plants', 'Not plants', 'Maybe plants', 'Cannot determine'], correct: 0 },
    { q: 'Complete: 2, 4, 8, 16, ?', opts: ['24', '30', '32', '40'], correct: 2 },
    { q: 'If A > B, B > C, and C > D, which is largest?', opts: ['B', 'C', 'D', 'A'], correct: 3 },
    { q: 'What comes next? A, C, E, G, ?', opts: ['H', 'I', 'J', 'K'], correct: 2 },
    { q: 'Rearrange "TEACUP" to spell?', opts: ['CAUGHT', 'TAPE', 'PEACE', 'ACUTE'], correct: 3 },
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

// Generate 100 GK questions
const generateGKQuestions = () => {
  const questions = [];
  const baseQuestions = [
    { q: 'What is the smallest country by area?', opts: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'], correct: 1 },
    { q: 'How many continents are there?', opts: ['5', '6', '7', '8'], correct: 2 },
    { q: 'What is the speed of light?', opts: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'], correct: 0 },
    { q: 'Which is the deepest ocean?', opts: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 },
    { q: 'Most spoken language in the world?', opts: ['Spanish', 'English', 'Mandarin Chinese', 'Hindi'], correct: 2 },
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

export const examPracticeData = [
  {
    id: 1,
    title: 'Mathematics Basics',
    difficulty: 'Easy',
    icon: '🔢',
    totalQuestions: 100,
    questions: generateMathQuestions(),
  },
  {
    id: 2,
    title: 'English Grammar',
    difficulty: 'Medium',
    icon: '📚',
    totalQuestions: 100,
    questions: generateEnglishQuestions(),
  },
  {
    id: 3,
    title: 'Science Concepts',
    difficulty: 'Hard',
    icon: '🔬',
    totalQuestions: 100,
    questions: generateScienceQuestions(),
  },
  {
    id: 4,
    title: 'Computer Basics',
    difficulty: 'Easy',
    icon: '💻',
    totalQuestions: 100,
    questions: generateComputerQuestions(),
  },
  {
    id: 5,
    title: 'History & Geography',
    difficulty: 'Medium',
    icon: '🌍',
    totalQuestions: 100,
    questions: generateHistoryQuestions(),
  },
  {
    id: 6,
    title: 'Logic & Reasoning',
    difficulty: 'Hard',
    icon: '🎯',
    totalQuestions: 100,
    questions: generateLogicQuestions(),
  },
  {
    id: 7,
    title: 'General Knowledge',
    difficulty: 'Medium',
    icon: '🧠',
    totalQuestions: 100,
    questions: generateGKQuestions(),
  },
];

export const quizCategories = [
  { id: 'all', name: 'All Exams' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' },
];
