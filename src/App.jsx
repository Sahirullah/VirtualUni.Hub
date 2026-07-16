import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VUHandout from './pages/VUHandout'
import Midterm from './pages/Midterm'
import FinalTerm from './pages/FinalTerm'
import Quizzes from './pages/Quizzes'
import Assignment from './pages/Assignment'
import MidtermReviews from './pages/MidtermReviews'
import FinalTermReviews from './pages/FinalTermReviews'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vu-handout" element={<VUHandout />} />
            <Route path="/midterm" element={<Midterm />} />
            <Route path="/final-term" element={<FinalTerm />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/midterm-reviews" element={<MidtermReviews />} />
            <Route path="/final-term-reviews" element={<FinalTermReviews />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
