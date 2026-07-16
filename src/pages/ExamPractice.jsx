import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import './ExamPractice.css';

const ExamPractice = () => {
  const { isDarkMode } = useTheme();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizzes = [
    {
      id: 1,
      title: 'Mathematics Basics',
      difficulty: 'Easy',
      icon: '🔢',
      questions: [
        {
          question: 'What is 15 × 4?',
          options: ['45', '50', '60', '75'],
          correct: 2,
        },
        {
          question: 'What is the square root of 144?',
          options: ['10', '12', '14', '16'],
          correct: 1,
        },
      ],
    },
    {
      id: 2,
      title: 'English Grammar',
      difficulty: 'Medium',
      icon: '📚',
      questions: [
        {
          question: 'Choose the correct sentence:',
          options: [
            'She go to school every day',
            'She goes to school every day',
            'She going to school every day',
            'She gone to school every day',
          ],
          correct: 1,
        },
        {
          question: 'What is the past tense of "eat"?',
          options: ['eated', 'ate', 'eaten', 'eatted'],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: 'Science Concepts',
      difficulty: 'Hard',
      icon: '🔬',
      questions: [
        {
          question: 'What is the chemical symbol for Gold?',
          options: ['Go', 'Gd', 'Au', 'Ag'],
          correct: 2,
        },
        {
          question: 'How many bones does an adult human have?',
          options: ['186', '196', '206', '216'],
          correct: 2,
        },
      ],
    },
    {
      id: 4,
      title: 'Computer Basics',
      difficulty: 'Easy',
      icon: '💻',
      questions: [
        {
          question: 'What does HTML stand for?',
          options: [
            'Hyper Text Markup Language',
            'High Tech Modern Language',
            'Home Tool Markup Language',
            'Hyperlinks and Text Markup Language',
          ],
          correct: 0,
        },
        {
          question: 'Which of these is a programming language?',
          options: ['HTML', 'CSS', 'Python', 'XML'],
          correct: 2,
        },
      ],
    },
  ];

  const handleQuizStart = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerClick = (index) => {
    if (index === selectedQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      <div className="exam-header">
        <h1>Exam Practice</h1>
        <p>Test your knowledge with our practice quizzes</p>
      </div>

      <div className="exam-container">
        {!selectedQuiz ? (
          <div className="quiz-selection">
            <div className="quizzes-grid">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="quiz-card">
                  <div className="quiz-icon">{quiz.icon}</div>
                  <h2>{quiz.title}</h2>
                  <div className="quiz-meta">
                    <span className="difficulty">{quiz.difficulty}</span>
                    <span className="questions-count">{quiz.questions.length} Questions</span>
                  </div>
                  <button onClick={() => handleQuizStart(quiz)} className="start-btn">
                    Start Quiz
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-container">
            {showScore ? (
              <div className="score-section">
                <h2>Quiz Completed!</h2>
                <div className="score-display">
                  <p className="score-text">
                    You scored <span className="score-value">{score}</span> out of{' '}
                    <span className="total-value">{selectedQuiz.questions.length}</span>
                  </p>
                  <p className="percentage">
                    {Math.round((score / selectedQuiz.questions.length) * 100)}%
                  </p>
                </div>
                <button onClick={resetQuiz} className="restart-btn">
                  Try Another Quiz
                </button>
              </div>
            ) : (
              <div className="question-section">
                <div className="progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="progress-text">
                    Question {currentQuestion + 1}/{selectedQuiz.questions.length}
                  </p>
                </div>

                <h2 className="question">{selectedQuiz.questions[currentQuestion].question}</h2>

                <div className="options">
                  {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className="option-btn"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ExamPractice;
