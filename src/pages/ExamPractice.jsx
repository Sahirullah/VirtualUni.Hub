import { useState } from 'react';
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
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const filteredExams = selectedCategory === 'all'
    ? examPracticeData
    : examPracticeData.filter(exam => exam.difficulty.toLowerCase() === selectedCategory);

  const startExam = (exam) => {
    const questions = getQuestionSet(exam.questions);
    setCurrentExam({
      ...exam,
      questions: questions
    });
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFlaggedQuestions(new Set());
    setShowScore(false);
  };

  const handleAnswerChange = (index) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: index
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFirst = () => {
    setCurrentQuestionIndex(0);
  };

  const handleLast = () => {
    setCurrentQuestionIndex(currentExam.questions.length - 1);
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
  };

  const handleFinish = () => {
    let correctCount = 0;
    currentExam.questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
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
    setFlaggedQuestions(new Set());
    setShowScore(false);
  };

  if (!currentExam) {
    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-header">
          <h1>Exam Practice</h1>
          <p>Test your knowledge with our comprehensive exam practice tests. Choose your difficulty level and start learning.</p>
        </div>

        <div className="exam-container">
          <div className="category-filter">
            <h2>Select Difficulty Level</h2>
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
            {filteredExams.map(exam => (
              <div key={exam.id} className="exam-card">
                <div className="exam-icon">{exam.icon}</div>
                <h2>{exam.title}</h2>
                <div className="exam-meta">
                  <span className="difficulty">{exam.difficulty}</span>
                </div>
                <div className="exam-info-small">
                  <span className="questions-count">{exam.totalQuestions} Questions</span>
                </div>
                <button
                  className="start-btn"
                  onClick={() => startExam(exam)}
                >
                  Start Exam
                </button>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (showScore) {
    const percentage = Math.round((score / currentExam.questions.length) * 100);

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
                  You got <span className="score-value">{score}</span> out of <span className="total-value">{currentExam.questions.length}</span> questions correct
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
  const answeredCount = Object.keys(answers).length;
  const isFlagged = flaggedQuestions.has(currentQuestionIndex);

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-page">
        <div className="exam-header-bar">
          <div className="exam-title">{currentExam.title}</div>
          <div className="timer-section">
            <div className="timer-circle">
              <span className="timer-icon">⏱️</span>
              <span className="timer-value">∞</span>
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
          </div>

          <div className="exam-sidebar">
            <div className="summary-panel">
              <h4>Questions ({answeredCount}/{currentExam.questions.length})</h4>
              <div className="question-grid">
                {currentExam.questions.map((_, index) => (
                  <button
                    key={index}
                    className={`question-btn ${
                      index === currentQuestionIndex ? 'active' : ''
                    } ${answers[index] !== undefined ? 'answered' : ''} ${
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
                  <span>Answered:</span>
                  <span>{answeredCount}</span>
                </div>
                <div className="stat-row">
                  <span>Flagged:</span>
                  <span>{flaggedQuestions.size}</span>
                </div>
                <div className="stat-row">
                  <span>Not Visited:</span>
                  <span>{currentExam.questions.length - answeredCount}</span>
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
            disabled={currentQuestionIndex === currentExam.questions.length - 1}
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
            className="save-btn"
            onClick={() => console.log('Answers saved')}
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
