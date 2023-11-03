'use client'

import { Provider } from 'react-redux'
import { store } from '../../../utils/redux/store'
import { IComponent } from '../../../utils/types/IComponent'
import dynamic from 'next/dynamic'

const ParallaxProvider = dynamic(
    () => import('../../../utils/modules/react-scroll-parallax'),
    { ssr: false }
)

const Providers = ({ children }: IComponent) => {
    return (
        <Provider store={store}>
            <ParallaxProvider>{children}</ParallaxProvider>
        </Provider>
    )
}

export default Providers
