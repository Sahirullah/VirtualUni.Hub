import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { finalTermData, finalTermDataPart2 } from '../data/finalTermData';
import { useTheme } from '../context/ThemeContext';
import './FinalTerm.css';

const FinalTerm = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allData = [...finalTermData, ...finalTermDataPart2];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'acc', name: 'ACC - Accounting' },
    { id: 'bif', name: 'BIF - Bioinformatics' },
    { id: 'bio', name: 'BIO - Biology' },
    { id: 'bnk', name: 'BNK - Banking' },
    { id: 'bt', name: 'BT - Biotechnology' },
    { id: 'che', name: 'CHE - Chemistry' },
    { id: 'cs', name: 'CS - Computer Science' },
    { id: 'eco', name: 'ECO - Economics' },
    { id: 'edu', name: 'EDU - Education' },
    { id: 'eng', name: 'ENG - English' },
    { id: 'eth', name: 'ETH - Ethics' },
    { id: 'fin', name: 'FIN - Finance' },
    { id: 'gsc', name: 'GSC - General Science' },
    { id: 'hrm', name: 'HRM - Human Resource Management' },
    { id: 'isl', name: 'ISL - Islamic Studies' },
    { id: 'it', name: 'IT - Information Technology' },
    { id: 'mcm', name: 'MCM - Mass Communication' },
    { id: 'mgmt', name: 'MGMT - Management' },
    { id: 'mgt', name: 'MGT - Business & Management' },
    { id: 'mkt', name: 'MKT - Marketing' },
    { id: 'mth', name: 'MTH - Mathematics' },
    { id: 'pad', name: 'PAD - Public Administration' },
    { id: 'pak', name: 'PAK - Pakistan Studies' },
    { id: 'phy', name: 'PHY - Physics' },
    { id: 'psc', name: 'PSC - Political Science' },
    { id: 'psy', name: 'PSY - Psychology' },
    { id: 'soc', name: 'SOC - Sociology' },
    { id: 'sta', name: 'STA - Statistics' },
    { id: 'urd', name: 'URD - Urdu' },
    { id: 'zoo', name: 'ZOO - Zoology' },
  ];

  const filteredData = selectedCategory === 'all'
    ? allData
    : allData.filter(course => course.category === selectedCategory);

  return (
    <div className={`papers-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />

      <div className="papers-hero">
        <div className="hero-content">
          <div className="hero-icon">📄</div>
          <h1>Final Term Files & Papers</h1>
          <p>Download final term exam papers for all courses</p>
        </div>
      </div>

      <div className="papers-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {categories.map(cat => (
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

        <div className="papers-grid">
          {filteredData.sort((a, b) => a.code.localeCompare(b.code)).map(course => (
            <div key={course.code} className="paper-card">
              <div className="card-header">
                <div className="card-icon">{course.image}</div>
                <h3>{course.code}</h3>
              </div>

              <div className="card-body">
                <h4>{course.title}</h4>
              </div>

              <div className="card-footer">
                {course.links && course.links.length > 0 ? (
                  <div className="download-buttons">
                    {course.links.map((link, index) => (
                      link && (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-btn"
                        >
                          📥 Paper {index + 1}
                        </a>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="no-papers">
                    <p>No papers available</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FinalTerm;
