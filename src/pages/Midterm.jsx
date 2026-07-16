import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allMidtermData, midtermCategories } from '../data/midtermData';
import './Midterm.css';

const Midterm = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = allMidtermData.map(item => ({
    ...item,
    description: `Download Midterm papers for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Midterm Papers',
    hasLecture: true
  }));

  const categories = midtermCategories;

  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  return (
    <div className="midterm-page">
      <Header />
      
      <div className="midterm-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>Midterm Papers</h1>
          <p>Access comprehensive midterm exam papers from Virtual University and Allama Iqbal University</p>
        </div>
      </div>
      
      <div className="midterm-container">
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
          {filteredPapers.map(paper => (
            <div key={paper.id} className="paper-card-modern">
              <div className="card-circle-icon">{paper.image}</div>
              <h3 className="card-code">{paper.code}</h3>
              <h4 className="card-title">{paper.title}</h4>
              
              <div className="download-buttons-grid">
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
                <button className="download-btn-bordered">Download</button>
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Midterm;