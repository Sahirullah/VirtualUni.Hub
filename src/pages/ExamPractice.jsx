import React, { useState, useEffect } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeLeft, setTimeLeft] = useState(null);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());

  const quizzes = examPracticeData;

  const filteredQuizzes = selectedCategory === 'all'
    ? quizzes
    : quizzes.filter((quiz) => quiz.difficulty.toLowerCase() === selectedCategory.toLowerCase());

  useEffect(() => {
    if (selectedQuiz && !showScore) {
      setTimeLeft(selectedQuiz.questions.length * 90);
    }
  }, [selectedQuiz, showScore]);

  useEffect(() => {
    if (timeLeft === null || showScore) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showScore]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExamStart = (exam) => {
    setSelectedQuiz(exam);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswers({});
    setFlagged(new Set());
  };

  const handleAnswerClick = (index) => {
    const newAnswers = { ...answers, [currentQuestion]: index };
    setAnswers(newAnswers);

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

  const handleFinishExam = () => {
    setShowScore(true);
  };

  const handleSaveAndExit = () => {
    resetExam();
  };

  const handleFirstQuestion = () => {
    setCurrentQuestion(0);
  };

  const handleLastQuestion = () => {
    setCurrentQuestion(selectedQuiz.questions.length - 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetExam = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswers({});
    setFlagged(new Set());
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flagged);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlagged(newFlagged);
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      {!selectedQuiz ? (
        <>
          <div className="exam-header">
            <h1>Exam Practice</h1>
            <p>Test your knowledge with our practice exams</p>
            
            <div className="filter-buttons">
              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Exams
              </button>
              <button
                className={`filter-btn ${selectedCategory === 'easy' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('easy')}
              >
                Easy
              </button>
              <button
                className={`filter-btn ${selectedCategory === 'medium' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('medium')}
              >
                Medium
              </button>
              <button
                className={`filter-btn ${selectedCategory === 'hard' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('hard')}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="exam-container">
            <div className="exam-selection">
              <div className="quizzes-grid">
                {filteredQuizzes.map((exam) => (
                  <div key={exam.id} className="quiz-card">
                    <div className="quiz-icon">{exam.icon}</div>
                    <h2>{exam.title}</h2>
                    <div className="quiz-meta">
                      <span className="difficulty">{exam.difficulty}</span>
                      <span className="questions-count">{exam.questions.length} Questions</span>
                    </div>
                    <button onClick={() => handleExamStart(exam)} className="start-btn">
                      Start Exam
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="exam-page">
          <div className="quiz-header-bar">
            <div className="quiz-title">{selectedQuiz.title}</div>
            <div className="timer-section">
              <div className="timer-circle">
                <span className="timer-icon">⏱</span>
                <span className="timer-value">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="user-section">
              <span className="login-time">Login Time: {new Date().toLocaleTimeString()}</span>
              <div className="user-icon">👤</div>
            </div>
          </div>

          <div className="quiz-info-bar">
            <span className="question-no">Question No: {currentQuestion + 1} of {selectedQuiz.questions.length}</span>
            <div className="right-section">
              <span className="marks">Marks: ({score}/{selectedQuiz.questions.length})</span>
              <button className="summary-btn">Summary</button>
            </div>
          </div>

          {showScore ? (
            <div className="quiz-container">
              <div className="score-section">
                <h2>Exam Completed!</h2>
                <div className="score-display">
                  <p className="score-text">
                    You scored <span className="score-value">{score}</span> out of{' '}
                    <span className="total-value">{selectedQuiz.questions.length}</span>
                  </p>
                  <p className="percentage">
                    {Math.round((score / selectedQuiz.questions.length) * 100)}%
                  </p>
                </div>
                <button onClick={resetExam} className="restart-btn">
                  Try Another Exam
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-wrapper">
              <div className="quiz-main">
                <div className="question-box">
                  <h2 className="question">{selectedQuiz.questions[currentQuestion].question}</h2>
                </div>

                <div className="answer-section">
                  <h3>Answer</h3>
                  <div className="options">
                    {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                      <label key={index} className="option-label">
                        <input
                          type="radio"
                          name="answer"
                          value={index}
                          onChange={() => handleAnswerClick(index)}
                          checked={answers[currentQuestion] === index}
                        />
                        <span className="option-text">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="quiz-sidebar">
                <div className="summary-panel">
                  <h4>Summary</h4>
                  <div className="question-grid">
                    {selectedQuiz.questions.map((_, idx) => (
                      <button
                        key={idx}
                        className={`question-btn ${idx === currentQuestion ? 'active' : ''} ${
                          answers[idx] !== undefined ? 'answered' : ''
                        } ${flagged.has(idx) ? 'flagged' : ''}`}
                        onClick={() => goToQuestion(idx)}
                        title={`Question ${idx + 1}`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  <div className="stats">
                    <div className="stat-row">
                      <span>Attempted</span>
                      <span>{Object.keys(answers).length}</span>
                    </div>
                    <div className="stat-row">
                      <span>Flagged</span>
                      <span>{flagged.size}</span>
                    </div>
                    <div className="stat-row">
                      <span>Total</span>
                      <span>{selectedQuiz.questions.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="quiz-footer">
            <button className="finish-btn" onClick={handleFinishExam}>Finish Exam</button>
            <button className="flag-btn" onClick={toggleFlag}>
              {flagged.has(currentQuestion) ? '🚩 Flagged' : '🚩 Flag'}
            </button>
            <button className="first-btn" onClick={handleFirstQuestion}>First</button>
            <button 
              className="last-btn" 
              onClick={handleLastQuestion}
            >
              Last
            </button>
            <button 
              className="prev-btn" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button 
              className="next-btn" 
              onClick={handleNextQuestion}
              disabled={currentQuestion === selectedQuiz.questions.length - 1}
            >
              Next
            </button>
            <button className="save-btn" onClick={handleSaveAndExit}>Save & Exit</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ExamPractice;
