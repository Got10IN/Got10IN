import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import NavigationHandler from './components/structure/navigation/NavigationHandler'

function App() {
    return (
        <BrowserRouter>
            <NavigationHandler />
            <Routes />
        </BrowserRouter>
    )
}

export default App
