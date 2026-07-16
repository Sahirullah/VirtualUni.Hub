import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AIUHandout.css';

const AIUHandout = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handouts = [
    { id: 1, code: 'ACC101', title: 'Accounting Fundamentals', description: 'Download complete AIOU updated handouts for Accounting Fundamentals (ACC101) in PDF Format.', category: 'acc', status: 'Updated Handouts', hasLecture: true, image: '📊' },
    { id: 2, code: 'BIF101', title: 'Bioinformatics Basics', description: 'Download complete AIOU updated handouts for Bioinformatics Basics (BIF101) in PDF Format.', category: 'bif', status: 'Updated Handouts', hasLecture: true, image: '🧬' },
    { id: 3, code: 'BIO101', title: 'General Biology', description: 'Download complete AIOU updated handouts for General Biology (BIO101) in PDF Format.', category: 'bio', status: 'Updated Handouts', hasLecture: true, image: '🧬' },
    { id: 4, code: 'BNK101', title: 'Banking Fundamentals', description: 'Download complete AIOU updated handouts for Banking Fundamentals (BNK101) in PDF Format.', category: 'bnk', status: 'Updated Handouts', hasLecture: true, image: '🏦' },
    { id: 5, code: 'BT101', title: 'Biotechnology Basics', description: 'Download complete AIOU updated handouts for Biotechnology Basics (BT101) in PDF Format.', category: 'bt', status: 'Updated Handouts', hasLecture: false, image: '🧪' },
    { id: 6, code: 'CHE101', title: 'General Chemistry', description: 'Download complete AIOU updated handouts for General Chemistry (CHE101) in PDF Format.', category: 'che', status: 'Updated Handouts', hasLecture: true, image: '🧪' },
    { id: 7, code: 'CS101', title: 'Introduction to Computer Science', description: 'Download complete AIOU updated handouts for Introduction to Computer Science (CS101) in PDF Format.', category: 'cs', status: 'Updated Handouts', hasLecture: true, image: '💻' },
    { id: 8, code: 'ECO101', title: 'Economics Principles', description: 'Download complete AIOU updated handouts for Economics Principles (ECO101) in PDF Format.', category: 'eco', status: 'Updated Handouts', hasLecture: true, image: '📈' },
    { id: 9, code: 'EDU101', title: 'Educational Psychology', description: 'Download complete AIOU updated handouts for Educational Psychology (EDU101) in PDF Format.', category: 'edu', status: 'Updated Handouts', hasLecture: false, image: '🎓' },
    { id: 10, code: 'ENG101', title: 'English Composition', description: 'Download complete AIOU updated handouts for English Composition (ENG101) in PDF Format.', category: 'eng', status: 'Updated Handouts', hasLecture: true, image: '📖' },
    { id: 11, code: 'ETH101', title: 'Ethics and Philosophy', description: 'Download complete AIOU updated handouts for Ethics and Philosophy (ETH101) in PDF Format.', category: 'eth', status: 'Updated Handouts', hasLecture: true, image: '🤔' },
    { id: 12, code: 'FIN101', title: 'Financial Management', description: 'Download complete AIOU updated handouts for Financial Management (FIN101) in PDF Format.', category: 'fin', status: 'Updated Handouts', hasLecture: true, image: '💰' },
    { id: 13, code: 'GSC101', title: 'General Science', description: 'Download complete AIOU updated handouts for General Science (GSC101) in PDF Format.', category: 'gsc', status: 'Updated Handouts', hasLecture: false, image: '🔬' },
    { id: 14, code: 'HRM101', title: 'Human Resource Management', description: 'Download complete AIOU updated handouts for Human Resource Management (HRM101) in PDF Format.', category: 'hrm', status: 'Updated Handouts', hasLecture: true, image: '👥' },
    { id: 15, code: 'ISL101', title: 'Islamic Studies', description: 'Download complete AIOU updated handouts for Islamic Studies (ISL101) in PDF Format.', category: 'isl', status: 'Updated Handouts', hasLecture: true, image: '📚' },
    { id: 16, code: 'IT101', title: 'Information Technology', description: 'Download complete AIOU updated handouts for Information Technology (IT101) in PDF Format.', category: 'it', status: 'Updated Handouts', hasLecture: true, image: '🖥️' },
    { id: 17, code: 'MCM101', title: 'Mass Communication', description: 'Download complete AIOU updated handouts for Mass Communication (MCM101) in PDF Format.', category: 'mcm', status: 'Updated Handouts', hasLecture: true, image: '📡' },
    { id: 18, code: 'MGMT101', title: 'Management Principles', description: 'Download complete AIOU updated handouts for Management Principles (MGMT101) in PDF Format.', category: 'mgmt', status: 'Updated Handouts', hasLecture: true, image: '⚙️' },
    { id: 19, code: 'MGT101', title: 'Business Management', description: 'Download complete AIOU updated handouts for Business Management (MGT101) in PDF Format.', category: 'mgt', status: 'Updated Handouts', hasLecture: false, image: '📋' },
    { id: 20, code: 'MKT101', title: 'Marketing Fundamentals', description: 'Download complete AIOU updated handouts for Marketing Fundamentals (MKT101) in PDF Format.', category: 'mkt', status: 'Updated Handouts', hasLecture: true, image: '📢' },
    { id: 21, code: 'MTH101', title: 'Calculus and Analytical Geometry', description: 'Download complete AIOU updated handouts for Calculus and Analytical Geometry (MTH101) in PDF Format.', category: 'mth', status: 'Updated Handouts', hasLecture: true, image: '📐' },
    { id: 22, code: 'PAD101', title: 'Public Administration', description: 'Download complete AIOU updated handouts for Public Administration (PAD101) in PDF Format.', category: 'pad', status: 'Updated Handouts', hasLecture: true, image: '🏛️' },
    { id: 23, code: 'PAK101', title: 'Pakistan Studies', description: 'Download complete AIOU updated handouts for Pakistan Studies (PAK101) in PDF Format.', category: 'pak', status: 'Updated Handouts', hasLecture: true, image: '🇵🇰' },
    { id: 24, code: 'PHY101', title: 'Physics I', description: 'Download complete AIOU updated handouts for Physics I (PHY101) in PDF Format.', category: 'phy', status: 'Updated Handouts', hasLecture: true, image: '⚛️' },
    { id: 25, code: 'PSC101', title: 'Political Science', description: 'Download complete AIOU updated handouts for Political Science (PSC101) in PDF Format.', category: 'psc', status: 'Updated Handouts', hasLecture: true, image: '🗳️' },
    { id: 26, code: 'PSY101', title: 'Psychology Basics', description: 'Download complete AIOU updated handouts for Psychology Basics (PSY101) in PDF Format.', category: 'psy', status: 'Updated Handouts', hasLecture: false, image: '🧠' },
    { id: 27, code: 'SOC101', title: 'Sociology Fundamentals', description: 'Download complete AIOU updated handouts for Sociology Fundamentals (SOC101) in PDF Format.', category: 'soc', status: 'Updated Handouts', hasLecture: true, image: '👫' },
    { id: 28, code: 'STA101', title: 'Statistics', description: 'Download complete AIOU updated handouts for Statistics (STA101) in PDF Format.', category: 'sta', status: 'Updated Handouts', hasLecture: true, image: '📊' },
    { id: 29, code: 'ZOO101', title: 'Zoology', description: 'Download complete AIOU updated handouts for Zoology (ZOO101) in PDF Format.', category: 'zoo', status: 'Updated Handouts', hasLecture: true, image: '🦁' }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'acc', name: 'ACC Handouts' },
    { id: 'bif', name: 'BIF Handouts' },
    { id: 'bio', name: 'BIO Handouts' },
    { id: 'bnk', name: 'BNK Handouts' },
    { id: 'bt', name: 'BT Handouts' },
    { id: 'che', name: 'CHE Handouts' },
    { id: 'cs', name: 'CS Handouts' },
    { id: 'eco', name: 'ECO Handouts' },
    { id: 'edu', name: 'EDU Handouts' },
    { id: 'eng', name: 'ENG Handouts' },
    { id: 'eth', name: 'ETH Handouts' },
    { id: 'fin', name: 'FIN Handouts' },
    { id: 'gsc', name: 'GSC Handouts' },
    { id: 'hrm', name: 'HRM Handouts' },
    { id: 'isl', name: 'ISL Handouts' },
    { id: 'it', name: 'IT Handouts' },
    { id: 'mcm', name: 'MCM Handouts' },
    { id: 'mgmt', name: 'MGMT Handouts' },
    { id: 'mgt', name: 'MGT Handouts' },
    { id: 'mkt', name: 'MKT Handouts' },
    { id: 'mth', name: 'MTH Handouts' },
    { id: 'pad', name: 'PAD Handouts' },
    { id: 'pak', name: 'PAK Handouts' },
    { id: 'phy', name: 'PHY Handouts' },
    { id: 'psc', name: 'PSC Handouts' },
    { id: 'psy', name: 'PSY Handouts' },
    { id: 'soc', name: 'SOC Handouts' },
    { id: 'sta', name: 'STA Handouts' },
    { id: 'zoo', name: 'ZOO Handouts' }
  ];

  const filteredHandouts = selectedCategory === 'all' 
    ? handouts 
    : handouts.filter(h => h.category === selectedCategory);

  return (
    <div className="aiu-handout-page">
      <Header />
      
      {/* Hero Section */}
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>AIOU HANDOUT</h1>
          <p>Allama Iqbal Open University Complete Study Materials</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="handout-container">
        {/* Category Filter */}
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

        {/* Handouts Grid */}
        <div className="handouts-grid">
          {filteredHandouts.map(handout => (
            <div key={handout.id} className="handout-card">
              <div className="card-header">
                <div className="card-icon">{handout.image}</div>
                <span className="status-badge">{handout.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{handout.code}</h3>
                <h4>{handout.title}</h4>
                <p>{handout.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {handout.hasLecture && (
                    <span className="feature-tag">📝 Lecture-wise</span>
                  )}
                </div>
                <button className="download-btn">
                  📥 Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredHandouts.length === 0 && (
          <div className="no-results">
            <p>No handouts found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AIUHandout;
