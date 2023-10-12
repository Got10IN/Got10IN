import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/structure/navigation/Navigation.struct'
import Questionnaire from './pages/questionnaire/Questionnaire'
import AboutUs from './pages/aboutUs/AboutUs'
import CollegeRanking from './pages/collegeRanking/CollegeRanking'
import FindMentor from './pages/findMentor/FindMentor'
import Home from './pages/home/Home'
import MyCollegeRanking from './pages/myCollegeRanking/MyCollegeRanking'
import LoginSignup from './pages/user/LoginSignup'
import Result from './pages/myCollegeRanking/result/Result.page'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    {/* <Route
                        path='/college-ranking'
                        element={<CollegeRanking />}
                    /> */}
                    <Route path='/find-mentor' element={<FindMentor />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/login-signup' element={<LoginSignup />} />
                    <Route
                        path='/my-college-ranking'
                        element={<MyCollegeRanking />}
                    />
                    <Route
                        path='/my-college-ranking/result'
                        element={<Result />}
                    />
                    <Route path='/question' element={<Questionnaire />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
