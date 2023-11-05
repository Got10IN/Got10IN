'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../../../utils/redux/store'
import { IComponent } from '../../../utils/types/IComponent'
import dynamic from 'next/dynamic'

const ParallaxProvider = dynamic(
    () => import('../../../utils/modules/react-scroll-parallax'),
    { ssr: false }
)

const Providers = ({ children }: IComponent) => {
    return (
        <ReduxProvider store={store}>
            <ParallaxProvider>{children}</ParallaxProvider>
        </ReduxProvider>
    )
}

export default Providers
