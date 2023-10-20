import { Navigate, Route, Routes as RoutesContainer } from 'react-router-dom'
import Navigation from './components/structure/navigation/Navigation.struct'
import Home from './pages/home/Home'
import FindMentor from './pages/findMentor/FindMentor'
import AboutUs from './pages/aboutUs/AboutUs'
import LoginSignup from './pages/user/LoginSignup'
import MyCollegeRanking from './pages/myCollegeRanking/MyCollegeRanking'
import Result from './pages/myCollegeRanking/result/Result.page'
import Questionnaire from './pages/questionnaire/Questionnaire'

const Routes = () => (
    <RoutesContainer>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Navigate to='/' replace />} />
            <Route path='/find-mentor' element={<FindMentor />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/login-signup' element={<LoginSignup />} />
            <Route path='/my-college-ranking' element={<MyCollegeRanking />} />
            <Route path='/my-college-ranking/result' element={<Result />} />
            <Route path='/question' element={<Questionnaire />} />
        </Route>
    </RoutesContainer>
)

export default Routes
