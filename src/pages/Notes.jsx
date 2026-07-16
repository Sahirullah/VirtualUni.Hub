import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Notes.css';

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const notesData = [
    { id: 1, code: 'CS101', title: 'Introduction to Computer Science', category: 'Engineering', image: '📖' },
    { id: 2, code: 'CS201', title: 'Data Structures', category: 'Engineering', image: '📚' },
    { id: 3, code: 'CS301', title: 'Algorithms', category: 'Engineering', image: '📝' },
    { id: 4, code: 'MATH101', title: 'Calculus I', category: 'Mathematics', image: '📊' },
    { id: 5, code: 'MATH201', title: 'Linear Algebra', category: 'Mathematics', image: '📈' },
    { id: 6, code: 'MATH301', title: 'Discrete Mathematics', category: 'Mathematics', image: '🔢' },
    { id: 7, code: 'ENG101', title: 'English Composition', category: 'Language', image: '✍️' },
    { id: 8, code: 'ENG201', title: 'Literature & Poetry', category: 'Language', image: '📕' },
    { id: 9, code: 'PHY101', title: 'Physics I', category: 'Science', image: '🔬' },
    { id: 10, code: 'PHY201', title: 'Physics II', category: 'Science', image: '⚛️' },
    { id: 11, code: 'BUS101', title: 'Business Fundamentals', category: 'Business', image: '💼' },
    { id: 12, code: 'BUS201', title: 'Management Principles', category: 'Business', image: '📋' },
  ];

  const categories = [
    { id: 'all', name: 'All Notes' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'Mathematics', name: 'Mathematics' },
    { id: 'Language', name: 'Language' },
    { id: 'Science', name: 'Science' },
    { id: 'Business', name: 'Business' },
  ];

  const filteredNotes = selectedCategory === 'all' 
    ? notesData 
    : notesData.filter(note => note.category === selectedCategory);

  return (
    <div className="notes-page">
      <Header />
      
      <div className="notes-hero">
        <div className="hero-content">
          <div className="hero-icon">📖</div>
          <h1>STUDY NOTES</h1>
          <p>Comprehensive Study Notes for All Subjects</p>
        </div>
      </div>

      <div className="notes-container">
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

        <div className="notes-grid">
          {filteredNotes.map(note => (
            <div key={note.id} className="note-card">
              <div className="card-header">
                <div className="card-icon">{note.image}</div>
                <span className="status-badge">Complete Notes</span>
              </div>
              
              <div className="card-body">
                <h3>{note.code}</h3>
                <h4>{note.title}</h4>
                <p>Download comprehensive study notes for {note.title} ({note.code}) in PDF Format.</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  <span className="feature-tag">📝 Well-Organized</span>
                </div>
                <button className="download-btn">
                  📥 Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="no-results">
            <p>No notes found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Notes;
