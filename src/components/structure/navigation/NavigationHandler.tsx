import { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NavigationHandler = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return <Fragment />
}

export default NavigationHandler