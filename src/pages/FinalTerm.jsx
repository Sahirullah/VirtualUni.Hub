import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allFinalTermData, finalTermCategories } from '../data/finalTermData';
import './FinalTerm.css';

const FinalTerm = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = allFinalTermData.map(item => ({
    ...item,
    description: `Download Final Term papers for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Final Term Papers',
    hasLecture: true
  }));

  const categories = finalTermCategories;

  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  return (
    <div className="final-term-page">
      <Header />
      
      <div className="final-term-hero">
        <div className="hero-content">
          <div className="hero-icon">🎓</div>
          <h1>Final Term Papers</h1>
          <p>Prepare with authentic final term exam papers from top universities</p>
        </div>
      </div>
      
      <div className="final-term-container">
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
                {paper.links && paper.links.length > 0 ? (
                  paper.links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn-bordered"
                    >
                      Download
                    </a>
                  ))
                ) : (
                  Array(8).fill(0).map((_, i) => (
                    <button key={i} className="download-btn-bordered" disabled>
                      Coming Soon
                    </button>
                  ))
                )}
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

export default FinalTerm;
