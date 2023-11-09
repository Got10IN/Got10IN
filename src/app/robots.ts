import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: '/private/',
        },
        sitemap: 'https://www.got10in.com/sitemap.xml',
    }
}

export default robots
