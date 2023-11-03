import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/fonts.css'
import './styles/tw.css'
import App from './App'
import './axiosConfig'

import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store'
import { inject } from '@vercel/analytics'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </Provider>
    </React.StrictMode>
)

inject()
