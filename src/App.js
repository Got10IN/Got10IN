import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CollegeRanking from './components/CollegeRanking';
import FindMentor from './components/FindMentor';
import AboutUs from './components/AboutUs';
import MyCollegeRanking from './components/MyCollegeRanking';
import LoginSignup from './components/LoginSignup';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
