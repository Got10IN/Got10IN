import { Metadata } from 'next'
import Navigation from '../components/structure/navigation/Navigation.struct'
import Providers from '../components/structure/providers/Providers'
import { IComponent } from '../utils/types/IComponent'
import './global.css'
import { Inter, Roboto, Poppins } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Got10IN',
        default: 'Got10IN',
    },
    description: 'AI empowered college application assistant',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/logo64.png',
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({ children }: IComponent) {
    return (
        <html
            className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}
        >
            <head />
            <body>
                <Providers>
                    <Navigation>{children}</Navigation>
                </Providers>
            </body>
        </html>
    )
}
