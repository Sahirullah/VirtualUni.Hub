import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { boardContentData, getDefaultBoardContent } from '../data/boardContentData';
import './BoardDetail.css';

const BoardDetail = () => {
  const { boardName } = useParams();
  const navigate = useNavigate();
  const decodedBoardName = decodeURIComponent(boardName);
  
  const boardContent = boardContentData[decodedBoardName] || getDefaultBoardContent(decodedBoardName);

  return (
    <div className="board-detail-page">
      <Header />
      
      <main className="board-detail-main">
        {/* Hero Section */}
        <section className="board-detail-hero">
          <div className="board-detail-hero-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <h1 className="board-detail-title">{decodedBoardName}</h1>
            <p className="board-detail-subtitle">
              Explore subjects, past papers, and study guides
            </p>
            {boardContent.publisher && (
              <div className="board-info">
                <p className="publisher-info">
                  <strong>📚 Books by:</strong> {boardContent.publisher}
                </p>
                {boardContent.textbookSource && (
                  <a href={boardContent.textbookSource} target="_blank" rel="noopener noreferrer" className="textbook-link">
                    View Official Textbooks →
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Content Sections */}
        <section className="board-detail-content">
          <div className="board-detail-container">
            
            {/* Books Section */}
            {boardContent.books && boardContent.books.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">📚 Class 9-10 Books</h2>
                <div className="books-grid">
                  {boardContent.books.map((book) => (
                    <div key={book.id} className="book-card">
                      <div className="book-header">
                        <h3 className="book-title">{book.title}</h3>
                      </div>
                      <div className="book-body">
                        <p className="book-subject">Subject: {book.subject}</p>
                        <p className="book-class">Class: {book.classes}</p>
                        <p className="book-author">Author: {book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subjects Section */}
            <div className="content-section">
              <h2 className="section-title">📚 Subjects (Classes 9-10)</h2>
              <div className="subjects-grid">
                {boardContent.subjects
                  .filter(subject => subject.classes && subject.classes.includes("9-10"))
                  .map((subject) => (
                  <div key={subject.id} className="subject-card">
                    <div className="subject-icon">{subject.icon}</div>
                    <h3 className="subject-name">{subject.name}</h3>
                    {subject.classes && <span className="subject-class">{subject.classes}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Past Papers Section */}
            <div className="content-section">
              <h2 className="section-title">📄 Past Papers</h2>
              <div className="past-papers-grid">
                {boardContent.pastPapers.map((paper) => (
                  <div key={paper.id} className="past-paper-card">
                    <div className="paper-year">{paper.year}</div>
                    <div className="paper-term">{paper.term}</div>
                    <div className="paper-subjects">{paper.subjects} Subjects</div>
                    {paper.classes && <div className="paper-class">{paper.classes}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Study Guides Section */}
            <div className="content-section">
              <h2 className="section-title">📖 Study Guides</h2>
              <div className="guides-grid">
                {boardContent.guides.map((guide) => (
                  <div key={guide.id} className="guide-card">
                    <div className="guide-header">
                      <h3 className="guide-title">{guide.title}</h3>
                    </div>
                    <div className="guide-body">
                      <p className="guide-subject">Subject: {guide.subject}</p>
                      <p className="guide-level">Level: {guide.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Classes 9-10 Books Section */}
            {boardContent.books && boardContent.books.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">📚 Classes 9-10 Books</h2>
                <div className="books-grid">
                  {boardContent.books.map((book) => (
                    <div key={book.id} className="book-card">
                      <div className="book-icon">📖</div>
                      <h3 className="book-title">{book.title}</h3>
                      <div className="book-details">
                        <p className="book-subject">Subject: {book.subject}</p>
                        <p className="book-author">Author: {book.author}</p>
                        <p className="book-class">Classes: {book.classes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Classes 9-10 Past Papers Section */}
            {boardContent.pastPapers && boardContent.pastPapers.some(p => p.classes === "9-10") && (
              <div className="content-section">
                <h2 className="section-title">📄 Classes 9-10 Past Papers</h2>
                <div className="past-papers-grid">
                  {boardContent.pastPapers
                    .filter(paper => paper.classes === "9-10")
                    .map((paper) => (
                    <div key={paper.id} className="past-paper-card">
                      <div className="paper-year">{paper.year}</div>
                      <div className="paper-term">{paper.term}</div>
                      <div className="paper-subjects">{paper.subjects} Subjects</div>
                      {paper.difficulty && <div className="paper-difficulty">{paper.difficulty}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Classes 9-10 Study Guides Section */}
            {boardContent.guides && boardContent.guides.some(g => g.level.includes("9-10")) && (
              <div className="content-section">
                <h2 className="section-title">📖 Classes 9-10 Study Guides</h2>
                <div className="guides-grid">
                  {boardContent.guides
                    .filter(guide => guide.level.includes("9-10"))
                    .map((guide) => (
                    <div key={guide.id} className="guide-card">
                      <div className="guide-header">
                        <h3 className="guide-title">{guide.title}</h3>
                      </div>
                      <div className="guide-body">
                        <p className="guide-subject">Subject: {guide.subject}</p>
                        <p className="guide-level">Level: {guide.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoardDetail;
