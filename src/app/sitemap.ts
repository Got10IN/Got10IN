import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: 'https://www.got10in.com/find-mentor',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/about-us',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/my-college-ranking',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/my-college-ranking/result',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/login-signup',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/home',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/',
            lastModified: new Date(),
        },
        {
            url: 'https://www.got10in.com/become-a-mentor',
            lastModified: new Date(),
        },
    ].sort()
}
export default sitemap
