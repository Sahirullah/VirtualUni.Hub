import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo (3).png';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
      if (isCategoryMenuOpen && !event.target.closest('.category-nav')) {
        setIsCategoryMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        // Remove all active classes
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
      // Close dropdown when clicking outside
      if (activeDropdown && !event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown > a')) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isCategoryMenuOpen, activeDropdown]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsCategoryMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        // Remove all active classes
        document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = (e) => {
    e.stopPropagation();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle touch events for mobile dropdown
  const handleDropdownClick = (e, dropdownName) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      handleDropdownToggle(dropdownName);
    }
  };

  // Handle mobile category item clicks
  const handleCategoryClick = (e, hasDropdown, dropdownName) => {
    if (window.innerWidth <= 768 && hasDropdown) {
      e.preventDefault();
      handleDropdownToggle(dropdownName);
      
      // Add active class to dropdown
      const dropdownElement = e.target.closest('.dropdown');
      if (dropdownElement) {
        if (activeDropdown === dropdownName) {
          dropdownElement.classList.remove('active');
          setActiveSubmenu(null);
          // Remove all submenu active classes
          document.querySelectorAll('.dropdown-submenu').forEach(el => {
            el.classList.remove('active');
          });
        } else {
          // Remove active from all dropdowns and submenus
          document.querySelectorAll('.dropdown').forEach(el => el.classList.remove('active'));
          document.querySelectorAll('.dropdown-submenu').forEach(el => {
            el.classList.remove('active');
          });
          dropdownElement.classList.add('active');
          
          // Auto-show first submenu for Virtual University
          if (dropdownName === 'virtual-university') {
            // Immediately set the first submenu as active
            setActiveSubmenu('handouts');
            
            // Use a longer timeout to ensure DOM is ready
            setTimeout(() => {
              // Find and activate the first submenu
              const firstSubmenu = document.querySelector('.dropdown-menu .dropdown-submenu:first-of-type');
              if (firstSubmenu) {
                firstSubmenu.classList.add('active');
                
                // Force the submenu to be visible with inline styles as backup
                const submenuElement = firstSubmenu.querySelector('.submenu');
                if (submenuElement) {
                  submenuElement.style.opacity = '1';
                  submenuElement.style.visibility = 'visible';
                  submenuElement.style.transform = 'translateX(0)';
                  submenuElement.style.display = 'block';
                  submenuElement.style.position = 'fixed';
                  submenuElement.style.top = '0';
                  submenuElement.style.left = '60%';
                  submenuElement.style.width = '40%';
                  submenuElement.style.height = '100vh';
                  submenuElement.style.zIndex = '1003';
                }
              }
              
              // Also try with data attribute
              const dataSubmenu = document.querySelector('[data-submenu="handouts"]');
              if (dataSubmenu) {
                dataSubmenu.classList.add('active');
              }
            }, 200);
          }
        }
      }
    }
  };

  // Handle submenu item clicks on mobile
  const handleSubmenuClick = (e, submenuName) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      
      // Set the active submenu
      setActiveSubmenu(submenuName);
      
      // Remove active class from all submenu items
      document.querySelectorAll('.dropdown-submenu').forEach(el => {
        el.classList.remove('active');
        // Hide all submenus first
        const submenu = el.querySelector('.submenu');
        if (submenu) {
          submenu.style.opacity = '0';
          submenu.style.visibility = 'hidden';
          submenu.style.transform = 'translateX(100%)';
        }
      });
      
      // Add active class to the clicked submenu item
      const submenuElement = e.target.closest('.dropdown-submenu');
      if (submenuElement) {
        submenuElement.classList.add('active');
        
        // Force the clicked submenu to be visible
        const submenu = submenuElement.querySelector('.submenu');
        if (submenu) {
          submenu.style.opacity = '1';
          submenu.style.visibility = 'visible';
          submenu.style.transform = 'translateX(0)';
          submenu.style.display = 'block';
          submenu.style.position = 'fixed';
          submenu.style.top = '0';
          submenu.style.left = '60%';
          submenu.style.width = '40%';
          submenu.style.height = '100vh';
          submenu.style.zIndex = '1003';
        }
      }
    }
  };

  // Handle dropdown close
  const handleDropdownClose = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    document.querySelectorAll('.dropdown.active').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.dropdown-submenu.active').forEach(el => el.classList.remove('active'));
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="Wolfexa Logo" className="logo-image" />
              <div>
                <h1 className="logo">VIRTUAL LIBRARY</h1>
                <div className="logo-subtitle">Educational Resources</div>
              </div>
            </Link>
          </div>
          
          <div className="header-right">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <span className="contact-label">Call Us for help!</span>
                  <span className="contact-value">+923191954292</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <span className="contact-label">Mail Us</span>
                  <span className="contact-value">info@virtuallibrary.com</span>
                </div>
              </div>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-container">
          <button 
            className={`category-menu-toggle ${isCategoryMenuOpen ? 'active' : ''}`}
            onClick={toggleCategoryMenu}
            aria-label="Toggle category menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`category-links ${isCategoryMenuOpen ? 'category-open' : ''}`}>
            <li className="dropdown">
              <a 
                href="#islamic"
                onClick={(e) => handleCategoryClick(e, true, 'islamic')}
              >
                Islamic <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'islamic' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <a href="#quran" onClick={handleDropdownClose}>Quran Studies</a>
                <a href="#hadith" onClick={handleDropdownClose}>Hadith</a>
                <a href="#fiqh" onClick={handleDropdownClose}>Fiqh</a>
                <a href="#tafseer" onClick={handleDropdownClose}>Tafseer</a>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#virtual-university"
                onClick={(e) => handleCategoryClick(e, true, 'virtual-university')}
              >
                Virtual University <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'virtual-university' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <div className="dropdown-submenu" data-submenu="handouts">
                  <Link 
                    to="/vu-handout"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'handouts' ? 'active' : ''}
                  >
                    Handouts
                  </Link>
                </div>
                <div className="dropdown-submenu" data-submenu="midterm">
                  <Link 
                    to="/midterm"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'midterm' ? 'active' : ''}
                  >
                    Midterm
                  </Link>
                </div>
                <div className="dropdown-submenu" data-submenu="final-term">
                  <Link 
                    to="/final-term"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'final-term' ? 'active' : ''}
                  >
                    Final Term
                  </Link>
                </div>
                <div className="dropdown-submenu" data-submenu="quizzes">
                  <Link 
                    to="/quizzes"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'quizzes' ? 'active' : ''}
                  >
                    Quizzes
                  </Link>
                </div>
                <div className="dropdown-submenu" data-submenu="assignments">
                  <Link 
                    to="/assignment"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'assignments' ? 'active' : ''}
                  >
                    Assignments
                  </Link>
                </div>
                <div className="dropdown-submenu">
                  <a 
                    href="#gdbs"
                    onClick={(e) => handleSubmenuClick(e, 'gdbs')}
                    className={activeSubmenu === 'gdbs' ? 'active' : ''}
                  >
                    GDBs <span className="dropdown-arrow">▶</span>
                  </a>
                  <div className={`submenu ${activeSubmenu === 'gdbs' ? 'submenu-open' : ''}`}>
                    <a href="#bio-gdbs" onClick={handleDropdownClose}>Biology</a>
                    <a href="#chem-gdbs" onClick={handleDropdownClose}>Chemistry</a>
                    <a href="#phy-gdbs" onClick={handleDropdownClose}>Physics</a>
                    <a href="#islamyath-gdbs" onClick={handleDropdownClose}>Islamyath</a>
                    <a href="#math-gdbs" onClick={handleDropdownClose}>Mathematics</a>
                    <a href="#mcm-gdbs" onClick={handleDropdownClose}>MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu" data-submenu="midterm-reviews">
                  <Link 
                    to="/midterm-reviews"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'midterm-reviews' ? 'active' : ''}
                  >
                    Midterm Student Reviews
                  </Link>
                </div>
                <div className="dropdown-submenu" data-submenu="final-reviews">
                  <Link 
                    to="/final-term-reviews"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'final-reviews' ? 'active' : ''}
                  >
                    Final Term Student Reviews
                  </Link>
                </div>

              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#allama-iqbal-uni"
                onClick={(e) => handleCategoryClick(e, true, 'allama-iqbal-uni')}
              >
                Allama Iqbal Uni <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'allama-iqbal-uni' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <div className="dropdown-submenu">
                  <Link to="/aiu-handout" onClick={handleDropdownClose}>Handouts</Link>
                </div>
                <div className="dropdown-submenu">
                  <Link to="/aiu-midterm" onClick={handleDropdownClose}>Midterm</Link>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-final-term">Final Term <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-final">Biology</a>
                    <a href="#aiou-chem-final">Chemistry</a>
                    <a href="#aiou-phy-final">Physics</a>
                    <a href="#aiou-islamyath-final">Islamyath</a>
                    <a href="#aiou-math-final">Mathematics</a>
                    <a href="#aiou-mcm-final">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-quizzes">Quizzes <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-quizzes">Biology</a>
                    <a href="#aiou-chem-quizzes">Chemistry</a>
                    <a href="#aiou-phy-quizzes">Physics</a>
                    <a href="#aiou-islamyath-quizzes">Islamyath</a>
                    <a href="#aiou-math-quizzes">Mathematics</a>
                    <a href="#aiou-mcm-quizzes">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-assignments">Assignments <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-assignments">Biology</a>
                    <a href="#aiou-chem-assignments">Chemistry</a>
                    <a href="#aiou-phy-assignments">Physics</a>
                    <a href="#aiou-islamyath-assignments">Islamyath</a>
                    <a href="#aiou-math-assignments">Mathematics</a>
                    <a href="#aiou-mcm-assignments">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-gdbs">GDBs <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-gdbs">Biology</a>
                    <a href="#aiou-chem-gdbs">Chemistry</a>
                    <a href="#aiou-phy-gdbs">Physics</a>
                    <a href="#aiou-islamyath-gdbs">Islamyath</a>
                    <a href="#aiou-math-gdbs">Mathematics</a>
                    <a href="#aiou-mcm-gdbs">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-midterm-reviews">Midterm Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-midterm-reviews">Biology</a>
                    <a href="#aiou-chem-midterm-reviews">Chemistry</a>
                    <a href="#aiou-phy-midterm-reviews">Physics</a>
                    <a href="#aiou-islamyath-midterm-reviews">Islamyath</a>
                    <a href="#aiou-math-midterm-reviews">Mathematics</a>
                    <a href="#aiou-mcm-midterm-reviews">MCM</a>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <a href="#aiou-final-reviews">Final Term Student Reviews <span className="dropdown-arrow">▶</span></a>
                  <div className="submenu">
                    <a href="#aiou-bio-final-reviews">Biology</a>
                    <a href="#aiou-chem-final-reviews">Chemistry</a>
                    <a href="#aiou-phy-final-reviews">Physics</a>
                    <a href="#aiou-islamyath-final-reviews">Islamyath</a>
                    <a href="#aiou-math-final-reviews">Mathematics</a>
                    <a href="#aiou-mcm-final-reviews">MCM</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#courses"
                onClick={(e) => handleCategoryClick(e, true, 'courses')}
              >
                Courses <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'courses' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <div className="dropdown-submenu">
                  <Link 
                    to="/web-development"
                    onClick={handleDropdownClose}
                    className={activeSubmenu === 'web-development' ? 'active' : ''}
                  >
                    Web Development
                  </Link>
                </div>
                <div className="dropdown-submenu">
                  <a 
                    href="#research-study"
                    onClick={(e) => handleSubmenuClick(e, 'research-study')}
                    className={activeSubmenu === 'research-study' ? 'active' : ''}
                  >
                    Research Study <span className="dropdown-arrow">▶</span>
                  </a>
                  <div className={`submenu ${activeSubmenu === 'research-study' ? 'submenu-open' : ''}`}>
                    <a href="#research-methodology" onClick={handleDropdownClose}>Research Methodology</a>
                    <a href="#literature-review" onClick={handleDropdownClose}>Literature Review</a>
                    <a href="#data-analysis" onClick={handleDropdownClose}>Data Analysis</a>
                    <a href="#academic-writing" onClick={handleDropdownClose}>Academic Writing</a>
                    <a href="#research-ethics" onClick={handleDropdownClose}>Research Ethics</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#biography"
                onClick={(e) => handleCategoryClick(e, true, 'biography')}
              >
                Biography <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'biography' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <a href="#scholars" onClick={handleDropdownClose}>Islamic Scholars</a>
                <a href="#leaders" onClick={handleDropdownClose}>Leaders</a>
                <a href="#personalities" onClick={handleDropdownClose}>Personalities</a>
              </div>
            </li>
            <li className="dropdown">
              <a 
                href="#general"
                onClick={(e) => handleCategoryClick(e, true, 'general')}
              >
                General <span className="dropdown-arrow">▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'general' ? 'mobile-open' : ''}`}>
                <button className="dropdown-close" onClick={handleDropdownClose}>✕</button>
                <Link to="/school-base" onClick={handleDropdownClose}>School Base</Link>
                <a href="#college-base" onClick={handleDropdownClose}>College Base</a>
                <Link to="/etea-hec" onClick={handleDropdownClose}>ETEA/HEC</Link>
                <a href="#job-guide" onClick={handleDropdownClose}>Job Guide</a>
                <Link to="/all-books" onClick={handleDropdownClose}>All Books</Link>
              </div>
            </li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#opportunities">Opportunities</a></li>
          </ul>
        </div>
        
        {/* Overlay for dropdown */}
        <div 
          className={`dropdown-overlay ${activeDropdown ? 'active' : ''}`}
          onClick={handleDropdownClose}
        ></div>
      </div>
    </header>
  );
};

export default Header;