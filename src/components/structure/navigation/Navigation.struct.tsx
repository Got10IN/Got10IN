import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../../utils/hooks/redux.hook'
import { updateMobile } from '../../../utils/redux/context'
import Footer from './Footer'
import Header from './Header'

const Navigation = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(updateMobile(window.innerWidth <= 768))

        const onResizeHandler = () => {
            if (window.innerWidth <= 768) {
                dispatch(updateMobile(true))
            } else {
                dispatch(updateMobile(false))
            }
        }

        window.addEventListener('resize', onResizeHandler)

        return window.removeEventListener('resize', onResizeHandler)
    }, [dispatch])
    return (
        <main className='flex flex-col items-center'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Navigation
