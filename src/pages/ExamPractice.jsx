import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { examPracticeData } from '../data/examPracticeData';
import './ExamPractice.css';

const ExamPractice = () => {
  const { isDarkMode } = useTheme();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const quizzes = examPracticeData;

  const filteredQuizzes = selectedFilter === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.difficulty.toLowerCase() === selectedFilter.toLowerCase());

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
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Subjects
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'easy' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('easy')}
          >
            Easy
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'medium' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('medium')}
          >
            Medium
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'hard' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('hard')}
          >
            Hard
          </button>
        </div>
      </div>

      <div className="exam-container">
        {!selectedQuiz ? (
          <div className="quiz-selection">
            <div className="quizzes-grid">
              {filteredQuizzes.map((quiz) => (
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
