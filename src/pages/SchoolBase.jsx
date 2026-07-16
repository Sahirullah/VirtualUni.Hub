import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { schoolBoardsData } from '../data/schoolBoardsData';
import './SchoolBase.css';

const SchoolBase = () => {
  const [selectedCountry, setSelectedCountry] = useState('pakistan');
  const navigate = useNavigate();

  // Filter boards by country
  const filteredData = schoolBoardsData.filter(category => {
    const categoryPrefix = category.category.split(' - ')[0];
    const countryName = selectedCountry === 'srilanka' ? 'Sri Lanka' : selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1);
    return categoryPrefix === countryName;
  });

  // Flatten all boards from filtered categories
  const allBoards = filteredData.flatMap(category => category.boards);

  const countryConfig = {
    afghanistan: { title: 'Afghanistan', subtitle: 'Comprehensive guide to all educational boards across Afghanistan', emoji: '�🇫' },
    bangladesh: { title: 'Bangladesh', subtitle: 'Comprehensive guide to all educational boards across Bangladesh', emoji: '🇧🇩' },
    china: { title: 'China', subtitle: 'Comprehensive guide to all educational boards across China', emoji: '🇨🇳' },
    india: { title: 'India', subtitle: 'Comprehensive guide to all educational boards across India', emoji: '🇮�' },
    pakistan: { title: 'Pakistan', subtitle: 'Comprehensive guide to all educational boards across Pakistan', emoji: '🇵🇰' },
    singapore: { title: 'Singapore', subtitle: 'Comprehensive guide to all educational boards across Singapore', emoji: '🇸🇬' },
    srilanka: { title: 'Sri Lanka', subtitle: 'Comprehensive guide to all educational boards across Sri Lanka', emoji: '��'  },
    turkey: { title: 'Turkey', subtitle: 'Comprehensive guide to all educational boards across Turkey', emoji: '��' }
  };

  const config = countryConfig[selectedCountry];

  return (
    <div className="school-base-page">
      <Header />
      
      <main className="school-base-main">
        {/* Hero Section */}
        <section className="school-base-hero">
          <div className="school-base-hero-container">
            <h1 className="school-base-hero-title">Education Boards of {config.title}</h1>
            <p className="school-base-hero-subtitle">
              {config.subtitle}
            </p>
          </div>
        </section>

        {/* Country Selector */}
        <section className="country-selector-section">
          <div className="school-base-container">
            <div className="country-selector">
              {Object.entries(countryConfig)
                .sort(([, a], [, b]) => a.title.localeCompare(b.title))
                .map(([key, value]) => (
                <button
                  key={key}
                  className={`country-btn ${selectedCountry === key ? 'active' : ''}`}
                  onClick={() => setSelectedCountry(key)}
                >
                  {value.emoji} {value.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Boards Section */}
        <section className="school-base-content">
          <div className="school-base-container">
            <div className="boards-grid">
              {allBoards.map((board, index) => (
                <div 
                  key={index} 
                  className="board-card"
                  onClick={() => navigate(`/board/${encodeURIComponent(board.name)}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="board-card-header">
                    <h3 className="board-name">{board.name}</h3>
                  </div>
                  <div className="board-card-body">
                    <p className="board-location">
                      <span className="location-icon">📍</span>
                      {board.location}
                    </p>
                    {board.description && (
                      <p className="board-description">{board.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolBase;
