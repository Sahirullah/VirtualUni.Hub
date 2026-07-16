import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const [showAll, setShowAll] = useState(false);
  const coursesPerPage = 9;

  const allCourses = [
    // Frontend Fundamentals
    'html.',
    'CSS3',
    'JavaScript (Basics to Advanced)',
    'ES6 / Modern JavaScript',
    'Responsive Web Design',
    'Responsive Typography & UI Design',
    
    // Frontend Frameworks
    'React.js',
    'Angular',
    'Vue.js',
    'Next.js',
    'Nuxt.js',
    'Gatsby.js',
    'Front-End Framework Comparison',
    
    // Styling & Design
    'SASS / SCSS',
    'Bootstrap',
    'Tailwind CSS',
    'Mobile-First Design',
    'Animations with CSS & JavaScript',
    'Web Animation Libraries (GSAP, Anime.js)',
    'Web Typography & Fonts Optimization',
    
    // JavaScript & Advanced Frontend
    'TypeScript',
    'jQuery',
    'Web Accessibility (WCAG)',
    'Accessibility Testing Tools',
    'Front-End Performance Optimization',
    'Performance Optimization Techniques',
    'Web Performance Auditing (Lighthouse)',
    'Image Optimization for Web',
    'Advanced JavaScript Patterns',
    'State Management (Redux, MobX, Vuex)',
    'SPA Routing Techniques',
    'Single Page Applications (SPA)',
    'Progressive Web Apps (PWA)',
    'PWA Caching & Offline Support',
    'Web Component Development',
    'Web Assembly Basics',
    
    // Backend Development
    'Node.js',
    'Express.js',
    'Python & Django',
    'Python & Flask',
    'Ruby on Rails',
    'PHP & Laravel',
    'Java & Spring Boot',
    'C# & ASP.NET',
    
    // Databases
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Graph Database Basics (Neo4j)',
    
    // API & Backend Concepts
    'RESTful API Development',
    'GraphQL',
    'GraphQL API Integration',
    'REST API Integration',
    'API Security Best Practices',
    'Authentication & Authorization',
    'Authentication with JWT',
    'OAuth2 / OpenID Connect',
    'WebSockets & Real-Time Web Apps',
    
    // Full Stack & Architecture
    'MERN Stack',
    'MEAN Stack',
    'LAMP Stack',
    'Python Full-Stack',
    'Java Full-Stack',
    '.NET Full-Stack',
    'Full-Stack Web Development Bootcamp',
    'Microservices Architecture for Web Apps',
    'Headless CMS (Strapi, Contentful)',
    'JAMstack Development',
    'Serverless Architecture (AWS Lambda, Firebase Functions)',
    'Cloud Functions / Serverless Backends',
    'Firebase for Web Development',
    
    // Development Tools & Workflow
    'Git & GitHub / GitLab',
    'NPM / Yarn Package Management',
    'Webpack / Vite / Parcel Bundlers',
    'Front-End Build Tools',
    'Docker for Web Developers',
    'CI/CD for Web Applications',
    'Browser DevTools Mastery',
    
    // Testing & Quality
    'Testing & Debugging (Jest, Cypress, Selenium)',
    'Unit Testing for JavaScript',
    'End-to-End Testing for Web Apps',
    
    // Deployment & Hosting
    'Deployment with Netlify',
    'Deployment with Vercel',
    'Deployment with Heroku',
    'AWS Cloud for Web Developers',
    'Azure Cloud for Web Developers',
    'GCP for Web Developers',
    
    // Specialized Topics
    'Web Security & OWASP',
    'Web Performance Optimization & SEO',
    'SEO for Web Developers',
    'Progressive Enhancement Techniques',
    'WordPress Development',
    'Shopify Theme Development',
    'WooCommerce Customization',
    'Magento Development',
    'Drupal Development',
    'Joomla Development',
    'Content Management Systems Overview',
    'Headless E-Commerce Development',
    'Responsive Email Development'
  ];



  return (
    <div className="web-development-page">
      <Header />
      
      <main className="web-dev-main">
        {/* Hero Section */}
        <section className="web-dev-hero">
          <div className="hero-content">
            <h1>Web Development Courses</h1>
            <p>Master the skills to build modern, responsive, and interactive websites</p>
          </div>
        </section>



        {/* Complete Course List */}
        <section className="all-courses-section">
          <div className="container">
            <h2>Complete Web Development Course Catalog</h2>
            <p className="section-subtitle">Explore our comprehensive list of web development courses covering all skill levels and specializations</p>
            
            <div className="courses-list">
              {allCourses.slice(0, showAll ? allCourses.length : coursesPerPage).map((course, index) => (
                <div key={index} className="course-item">
                  {course === 'html.' ? (
                    <Link to="/html" className="course-item-link">
                      <span className="course-number">{index + 1}</span>
                      <span className="course-name">{course}</span>
                    </Link>
                  ) : (
                    <>
                      <span className="course-number">{index + 1}</span>
                      <span className="course-name">{course}</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {!showAll && allCourses.length > coursesPerPage && (
              <div className="show-more-container">
                <button 
                  className="show-more-btn"
                  onClick={() => setShowAll(true)}
                >
                  Show More Courses
                </button>
                <p className="courses-count">Showing {coursesPerPage} of {allCourses.length} courses</p>
              </div>
            )}

            {showAll && allCourses.length > coursesPerPage && (
              <div className="show-more-container">
                <button 
                  className="show-more-btn show-less"
                  onClick={() => setShowAll(false)}
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
