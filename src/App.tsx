import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import CollegeRanking from './pages/collegeRanking/CollegeRanking'
import FindMentor from './pages/findMentor/FindMentor'
import AboutUs from './pages/aboutUs/AboutUs'
import MyCollegeRanking from './pages/user/MyCollegeRanking'
import LoginSignup from './pages/user/LoginSignup'
import Q1 from './pages/questionnaire/Q1'
import Q2 from './pages/questionnaire/Q2'
import Q3 from './pages/questionnaire/Q3'
import Q4 from './pages/questionnaire/Q4'
import Q5 from './pages/questionnaire/Q5'
import Q6 from './pages/questionnaire/Q6'
import Q7 from './pages/questionnaire/Q7'
import Q8 from './pages/questionnaire/Q8'
import Q9 from './pages/questionnaire/Q9'
import Q10 from './pages/questionnaire/Q10'
import Q11 from './pages/questionnaire/Q11'

// import CollegePreferences from './components/CollegePreferences';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/structure/navigation/Navigation.struct'
import Questionaire from './components/structure/questionaire/Questionaire'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route
                        path='/college-ranking'
                        element={<CollegeRanking />}
                    />
                    <Route path='/find-mentor' element={<FindMentor />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/login-signup' element={<LoginSignup />} />
                    <Route
                        path='/my-college-ranking'
                        element={<MyCollegeRanking />}
                    />
                    <Route path='/question' element={<Questionaire />}>
                        <Route path='/question/1' element={<Q1 />} />
                        <Route path='/question/2' element={<Q2 />} />
                        <Route path='/question/3' element={<Q3 />} />
                        <Route path='/question/4' element={<Q4 />} />
                        <Route path='/question/5' element={<Q5 />} />
                        <Route path='/question/6' element={<Q6 />} />
                        <Route path='/question/7' element={<Q7 />} />
                        <Route path='/question/8' element={<Q8 />} />
                        <Route path='/question/9' element={<Q9 />} />
                        <Route path='/question/10' element={<Q10 />} />
                        <Route path='/question/11' element={<Q11 />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
