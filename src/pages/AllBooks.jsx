import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allBooksData, bookCategories } from '../data/allBooksData';
import './AllBooks.css';

const AllBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const books = allBooksData.map(item => ({
    ...item,
    description: `Complete study materials for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Available Book',
  }));

  const categories = bookCategories;

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(b => b.category === selectedCategory);

  return (
    <div className="all-books-page">
      <Header />
      
      <div className="all-books-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>All Books</h1>
          <p>Complete collection of educational books, Past papers and study materials.</p>
        </div>
      </div>

      <div className="all-books-container">
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

        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card-modern">
              <div className="card-circle-icon">{book.image}</div>
              <h3 className="card-code">{book.code}</h3>
              <h4 className="card-title">{book.title}</h4>
              
              <div className="download-buttons-grid">
                {book.links && book.links.length > 0 ? (
                  book.links.map((link, index) => (
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

        {filteredBooks.length === 0 && (
          <div className="no-results">
            <p>No books found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllBooks;
