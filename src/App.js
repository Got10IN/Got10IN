import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CollegeRanking from './components/CollegeRanking';
import FindMentor from './components/FindMentor';
import AboutUs from './components/AboutUs';
import LoginSignup from './components/LoginSignup';
import CollegePreferences from './components/CollegePreferences';

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
          <Route path="/my-college-ranking" element={<CollegePreferences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
