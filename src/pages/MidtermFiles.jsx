import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allMidtermData, midtermCategories } from '../data/midtermData';
import { useTheme } from '../context/ThemeContext';
import SubjectCard from './SubjectCard';
import './ExamPractice.css';

const MidtermFiles = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredExams = selectedCategory === 'all'
    ? allMidtermData
    : allMidtermData.filter(exam => exam.category === selectedCategory);

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-hero">
        <div className="hero-content">
          <div className="hero-icon">📝</div>
          <h1>Midterm Files & Past Papers</h1>
          <p>Download authentic VU midterm exam papers</p>
        </div>
      </div>

      <div className="exam-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {midtermCategories.map(cat => (
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
            <SubjectCard key={exam.code} exam={exam} />
          ))}
        </div>

        {filteredExams.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MidtermFiles;
