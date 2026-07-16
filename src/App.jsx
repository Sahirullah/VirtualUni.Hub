import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VUHandout from './pages/VUHandout'
import AIUHandout from './pages/AIUHandout'
import AIUMidterm from './pages/AIUMidterm'
import Midterm from './pages/Midterm'
import FinalTerm from './pages/FinalTerm'
import Quizzes from './pages/Quizzes'
import Assignment from './pages/Assignment'
import MidtermReviews from './pages/MidtermReviews'
import FinalTermReviews from './pages/FinalTermReviews'
import SchoolBase from './pages/SchoolBase'
import BoardDetail from './pages/BoardDetail'
import ETEAHEC from './pages/ETEAHEC'
import WebDevelopment from './pages/WebDevelopment'
import HTML from './pages/HTML'
import AllBooks from './pages/AllBooks'

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
            <Route path="/aiu-handout" element={<AIUHandout />} />
            <Route path="/aiu-midterm" element={<AIUMidterm />} />
            <Route path="/midterm" element={<Midterm />} />
            <Route path="/final-term" element={<FinalTerm />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/midterm-reviews" element={<MidtermReviews />} />
            <Route path="/final-term-reviews" element={<FinalTermReviews />} />
            <Route path="/school-base" element={<SchoolBase />} />
            <Route path="/board/:boardName" element={<BoardDetail />} />
            <Route path="/etea-hec" element={<ETEAHEC />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/html" element={<HTML />} />
            <Route path="/all-books" element={<AllBooks />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
