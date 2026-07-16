import Header from '../components/Header';
import Footer from '../components/Footer';
import './ETEAHEC.css';

const ETEAHEC = () => {
  const handleDownload = () => {
    // Placeholder for PDF download - will be linked when PDF is provided
    alert('PDF link will be added soon. Please check back later.');
  };

  return (
    <div className="etea-hec-page">
      <Header />
      
      <main className="etea-hec-main">
        {/* Hero Section */}
        <section className="etea-hec-hero">
          <div className="etea-hec-hero-container">
            <h1 className="etea-hec-hero-title">ETEA & HEC</h1>
            <p className="etea-hec-hero-subtitle">
              Download ETEA & HEC Resources
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="etea-hec-content">
          <div className="etea-hec-container">
            <div className="download-section">
              <h2>Download PDF</h2>
              <p>Get the complete ETEA & HEC study materials</p>
              <button 
                className="download-btn-main"
                onClick={handleDownload}
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ETEAHEC;
