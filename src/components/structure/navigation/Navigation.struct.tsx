import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Navigation = () => {
    return (
        <main className='flex flex-col items-center'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Navigation
