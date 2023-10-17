import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navigation from './components/structure/navigation/Navigation.struct'
import AboutUs from './pages/aboutUs/AboutUs'
import FindMentor from './pages/findMentor/FindMentor'
import Home from './pages/home/Home'
import MyCollegeRanking from './pages/myCollegeRanking/MyCollegeRanking'
import Result from './pages/myCollegeRanking/result/Result.page'
import Questionnaire from './pages/questionnaire/Questionnaire'
import LoginSignup from './pages/user/LoginSignup'
import NavigationHandler from './components/structure/navigation/NavigationHandler'


function App() {
    return (
        <Router>
            <NavigationHandler />
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
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
