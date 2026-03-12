import { MetadataRoute } from 'next';
import artists from '@/data/artistas.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://revefest.com';
  const lastModified = new Date();
  
  // URLs estáticas principales
  const staticUrls: MetadataRoute.Sitemap = [
    { 
      url: baseUrl, 
      lastModified, 
      priority: 1,
      changeFrequency: 'daily'
    },
    { 
      url: `${baseUrl}/entradas`, 
      lastModified, 
      priority: 0.9,
      changeFrequency: 'weekly'
    },
    { 
      url: `${baseUrl}/artistas`, 
      lastModified, 
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    { 
      url: `${baseUrl}/guia-de-compra`, 
      lastModified, 
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    { 
      url: `${baseUrl}/aviso-legal`, 
      lastModified, 
      priority: 0.3,
      changeFrequency: 'yearly'
    },
    { 
      url: `${baseUrl}/politica-cookies`, 
      lastModified, 
      priority: 0.3,
      changeFrequency: 'yearly'
    },
    { 
      url: `${baseUrl}/terminos-condiciones`, 
      lastModified, 
      priority: 0.3,
      changeFrequency: 'yearly'
    },
  ];
  
  // URLs dinámicas de artistas
  const artistUrls: MetadataRoute.Sitemap = artists.map(artist => ({
    url: `${baseUrl}/artistas/${artist.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: 'weekly',
    images: artist.images.hero ? [`${baseUrl}${artist.images.hero}`] : undefined,
  }));
  
  return [...staticUrls, ...artistUrls];
}
