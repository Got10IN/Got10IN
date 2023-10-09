import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./Footer"

const Navigation = () => {
    return (
        <main className='App'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Navigation
