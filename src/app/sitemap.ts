import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evenvibe.in';
  const releaseDate = new Date('2026-03-01T00:00:00.000Z');

  return [
    {
      url: `${baseUrl}`,
      lastModified: releaseDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-tamil-nadu`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-kerala`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-bengaluru`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-chennai`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-tirupur`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school-uniforms-trichy`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sports-uniforms`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-tshirts`,
      lastModified: releaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ];
}
