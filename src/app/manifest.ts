import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
    short_name: 'Got10IN',
    name: 'Got10IN',
    description: 'Your AI-empowered college application assistant',
    icons: [
        {
            src: '/logo64.png',
            type: 'image/png',
            sizes: '64x64 32x32 24x24 16x16',
        },
        {
            src: '/logo192.png',
            type: 'image/png',
            sizes: '192x192',
        },
        {
            src: '/logo512.png',
            type: 'image/png',
            sizes: '512x512',
        },
    ],
    start_url: '/',
    display: 'standalone',
    theme_color: '#00366D',
    background_color: '#FF8A00',
})

export default manifest
