'use client'

import { useEffect } from 'react'
import { IComponent } from '../../../utils/types/IComponent'
import { useAppDispatch } from '../../../utils/hooks/redux.hook'
import { updateMobile } from '../../../utils/redux/context'
import Footer from './Footer'
import Header from './Header'

const Navigation = ({ children }: IComponent) => {
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
        <main className="flex flex-col items-center">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Navigation
