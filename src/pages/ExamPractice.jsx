import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { examPracticeData, quizCategories, getQuestionSet } from '../data/examPracticeData';
import { useTheme } from '../context/ThemeContext';
import './ExamPractice.css';

const ExamPractice = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentExam, setCurrentExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [savedAnswers, setSavedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isSaved, setIsSaved] = useState(true);

  const filteredExams = selectedCategory === 'all'
    ? examPracticeData
    : examPracticeData.filter(exam => exam.category === selectedCategory);

  // Timer effect
  useEffect(() => {
    if (!currentExam || showScore) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentExam, showScore]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = (exam) => {
    const questions = getQuestionSet(exam.questions);
    setCurrentExam({
      ...exam,
      questions: questions
    });
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSavedAnswers({});
    setFlaggedQuestions(new Set());
    setShowScore(false);
    setTimeLeft(1500); // 25 minutes
    setIsSaved(true);
  };

  const handleAnswerChange = (index) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: index
    });
    setIsSaved(false);
  };

  const handleSave = () => {
    setSavedAnswers({
      ...savedAnswers,
      [currentQuestionIndex]: answers[currentQuestionIndex]
    });
    setIsSaved(true);
  };

  const handleNext = () => {
    if (isSaved && currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsSaved(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsSaved(true);
    }
  };

  const handleFirst = () => {
    setCurrentQuestionIndex(0);
    setIsSaved(true);
  };

  const handleLast = () => {
    setCurrentQuestionIndex(currentExam.questions.length - 1);
    setIsSaved(true);
  };

  const handleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex);
    } else {
      newFlagged.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    setIsSaved(true);
  };

  const handleFinish = () => {
    let correctCount = 0;
    currentExam.questions.forEach((question, index) => {
      // Only count answers that were saved
      if (savedAnswers[index] && answers[index] === question.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowScore(true);
  };

  const handleRestart = () => {
    setCurrentExam(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSavedAnswers({});
    setFlaggedQuestions(new Set());
    setShowScore(false);
    setTimeLeft(1500);
    setIsSaved(true);
  };

  if (!currentExam) {
    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-hero">
          <div className="hero-content">
            <div className="hero-icon">📝</div>
            <h1>EXAM PRACTICE</h1>
            <p>Virtual University Complete Exam Practice Tests</p>
          </div>
        </div>

        <div className="exam-container">
          <div className="category-filter">
            <h2>Select Category</h2>
            <div className="filter-buttons">
              {quizCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="exams-grid">
            {filteredExams.sort((a, b) => a.code.localeCompare(b.code)).map(exam => (
              <div key={exam.id} className="exam-card">
                <div className="card-header">
                  <div className="card-icon">{exam.image}</div>
                  <span className="status-badge">Exam Practice</span>
                </div>
                
                <div className="card-body">
                  <h3>{exam.code}</h3>
                  <h4>{exam.title}</h4>
                  <p>Take practice exam for {exam.title} with 50 randomly selected questions</p>
                </div>

                <div className="card-footer">
                  <div className="card-features">
                    <span className="feature-tag">❓ 50 Questions</span>
                  </div>
                  <button
                    className="start-exam-btn"
                    onClick={() => startExam(exam)}
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="no-results">
              <p>No exams found in this category.</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }

  if (showScore) {
    const savedCount = Object.keys(savedAnswers).length;
    const percentage = savedCount > 0 ? Math.round((score / savedCount) * 100) : 0;

    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-page">
          <div className="exam-header-bar">
            <div className="exam-title">{currentExam.title}</div>
            <div className="user-section">
              <span className="login-time">✓ Exam Completed</span>
            </div>
          </div>

          <div className="quiz-container">
            <div className="score-section">
              <h2>Your Score</h2>
              <div className="score-display">
                <p className="percentage">{percentage}%</p>
                <p className="score-text">
                  You got <span className="score-value">{score}</span> out of <span className="total-value">{savedCount}</span> saved questions correct
                </p>
              </div>
              <button
                className="restart-btn"
                onClick={handleRestart}
              >
                Take Another Exam
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const currentQuestion = currentExam.questions[currentQuestionIndex];
  const answered = answers[currentQuestionIndex] !== undefined;
  const savedCount = Object.keys(savedAnswers).length;
  const isFlagged = flaggedQuestions.has(currentQuestionIndex);

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-page">
        <div className="exam-header-bar">
          <div className="exam-title">{currentExam.title}</div>
          <div className="timer-section">
            <div className={`timer-circle ${timeLeft < 300 ? 'critical' : ''}`}>
              <span className="timer-icon">⏱️</span>
              <span className="timer-value">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="user-section">
            <span className="login-time">📊 In Progress</span>
          </div>
        </div>

        <div className="exam-info-bar">
          <div className="question-no">
            Question {currentQuestionIndex + 1} of {currentExam.questions.length}
          </div>
          <div className="right-section">
            <span className="marks">Marks: 1</span>
            <button className="summary-btn">Summary</button>
          </div>
        </div>

        <div className="exam-wrapper">
          <div className="exam-main">
            <div className="question-box">
              <p className="question">{currentQuestion.question}</p>
            </div>

            <div className="answer-section">
              <h3>Select your answer:</h3>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="radio"
                      name="answer"
                      checked={answers[currentQuestionIndex] === index}
                      onChange={() => handleAnswerChange(index)}
                    />
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {!isSaved && answered && (
              <div className="unsaved-warning">
                ⚠️ Click Save to confirm your answer
              </div>
            )}
          </div>

          <div className="exam-sidebar">
            <div className="summary-panel">
              <h4>Questions ({savedCount}/{currentExam.questions.length})</h4>
              <div className="question-grid">
                {currentExam.questions.map((_, index) => (
                  <button
                    key={index}
                    className={`question-btn ${
                      index === currentQuestionIndex ? 'active' : ''
                    } ${savedAnswers[index] !== undefined ? 'answered' : ''} ${
                      flaggedQuestions.has(index) ? 'flagged' : ''
                    }`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="stats">
                <div className="stat-row">
                  <span>Saved:</span>
                  <span>{savedCount}</span>
                </div>
                <div className="stat-row">
                  <span>Flagged:</span>
                  <span>{flaggedQuestions.size}</span>
                </div>
                <div className="stat-row">
                  <span>Not Visited:</span>
                  <span>{currentExam.questions.length - savedCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="exam-footer">
          <button
            className="first-btn"
            onClick={handleFirst}
            disabled={currentQuestionIndex === 0}
          >
            ⏮️ First
          </button>
          <button
            className="prev-btn"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ◀️ Previous
          </button>
          <button
            className={`flag-btn ${isFlagged ? 'active' : ''}`}
            onClick={handleFlag}
          >
            🚩 {isFlagged ? 'Unflag' : 'Flag'}
          </button>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!isSaved || currentQuestionIndex === currentExam.questions.length - 1}
            title={!isSaved ? 'Save your answer first' : ''}
          >
            Next ▶️
          </button>
          <button
            className="last-btn"
            onClick={handleLast}
            disabled={currentQuestionIndex === currentExam.questions.length - 1}
          >
            Last ⏭️
          </button>
          <button
            className={`save-btn ${!isSaved ? 'highlight' : ''}`}
            onClick={handleSave}
            disabled={!answered}
          >
            💾 Save
          </button>
          <button
            className="finish-btn"
            onClick={handleFinish}
          >
            ✓ Finish
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExamPractice;
