'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../../../utils/redux/store'
import { IComponent } from '../../../utils/types/IComponent'
import dynamic from 'next/dynamic'
import NextAuthProvider from './NextAuthProvider'

const ParallaxProvider = dynamic(
    () => import('../../../utils/modules/react-scroll-parallax'),
    { ssr: false }
)

const Providers = ({ children }: IComponent) => {
    return (
        <ReduxProvider store={store}>
            <NextAuthProvider>
                <ParallaxProvider>{children}</ParallaxProvider>
            </NextAuthProvider>
        </ReduxProvider>
    )
}

export default Providers
