import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://www.vviphairstyle.com/en', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/en/about', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar/about', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/en/services', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar/services', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/en/contact', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar/contact', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/en/book', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar/book', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/en/lookbook', lastModified: new Date() },
        { url: 'https://www.vviphairstyle.com/ar/lookbook', lastModified: new Date() },
    ]
}
