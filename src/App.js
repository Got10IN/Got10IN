import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CollegeRanking from './components/CollegeRanking';
import FindMentor from './components/FindMentor';
import AboutUs from './components/AboutUs';
import MyCollegeRanking from './components/MyCollegeRanking';
import LoginSignup from './components/LoginSignup';
import Q1 from './components/questionnaire/Q1'
import Q2 from './components/questionnaire/Q2'
import Q3 from './components/questionnaire/Q3'
import Q4 from './components/questionnaire/Q4'
import Q5 from './components/questionnaire/Q5'
import Q6 from './components/questionnaire/Q6'
import Q7 from './components/questionnaire/Q7'
import Q8 from './components/questionnaire/Q8'
import Q9 from './components/questionnaire/Q9'
import Q10 from './components/questionnaire/Q10'
import Q11 from './components/questionnaire/Q11'

// import CollegePreferences from './components/CollegePreferences';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college-ranking" element={<CollegeRanking />} />
          <Route path="/find-mentor" element={<FindMentor />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/my-college-ranking" element={<MyCollegeRanking />} />
          <Route path="/question1" element={<Q1 />} />
          <Route path="/question2" element={<Q2 />} />
          <Route path="/question3" element={<Q3 />} />
          <Route path="/question4" element={<Q4 />} />
          <Route path="/question5" element={<Q5 />} />
          <Route path="/question6" element={<Q6 />} />
          <Route path="/question7" element={<Q7 />} />
          <Route path="/question8" element={<Q8 />} />
          <Route path="/question9" element={<Q9 />} />
          <Route path="/question10" element={<Q10 />} />
          <Route path="/question11" element={<Q11 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
