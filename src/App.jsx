import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VUHandout from './pages/VUHandout'
import MidtermFiles from './pages/MidtermFiles'
import FinalTermFiles from './pages/FinalTermFiles'
import Quizzes from './pages/Quizzes'
import Assignment from './pages/Assignment'
import MidtermReviews from './pages/MidtermReviews'
import Blogs from './pages/Blogs'
import ImportantSoftwares from './pages/ImportantSoftwares'
import ExamPractice from './pages/ExamPractice'
import MidtermPractice from './pages/MidtermPractice'
import FinalTermPractice from './pages/FinalTermExamPractice'
import HighlightedHandout from './pages/HighlightedHandout'
import Notes from './pages/Notes'

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
            <Route path="/highlighted-handout" element={<HighlightedHandout />} />
            <Route path="/midterm" element={<MidtermFiles />} />
            <Route path="/final-term" element={<FinalTermFiles />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/midterm-reviews" element={<MidtermReviews />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/softwares" element={<ImportantSoftwares />} />
            <Route path="/exam-practice" element={<ExamPractice />} />
            <Route path="/midterm-practice" element={<MidtermPractice />} />
            <Route path="/final-term-practice" element={<FinalTermPractice />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
