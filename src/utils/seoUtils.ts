// SEO utility functions for sitemap generation and search engine pinging

export const generateSitemap = () => {
  const siteUrl = 'https://kravist.sg';
  const lastMod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
  
  const urls = [
    {
      url: `${siteUrl}/`,
      lastmod: lastMod,
      changefreq: 'weekly',
      priority: '1.0',
      images: [
        {
          loc: `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
          title: 'Kravist Singapore - Premier Krav Maga Training'
        }
      ]
    },
    {
      url: `${siteUrl}/contact`,
      lastmod: lastMod,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(({ url, lastmod, changefreq, priority, images }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${images ? images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`).join('') : ''}
  </url>`).join('')}
</urlset>`;

  return sitemap;
};

export const pingSitemapToSearchEngines = async (sitemapUrl: string) => {
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];

  const results = await Promise.allSettled(
    searchEngines.map(url => 
      fetch(url, { method: 'GET', mode: 'no-cors' })
        .then(() => ({ success: true, url }))
        .catch(error => ({ success: false, url, error }))
    )
  );

  return results;
};

export const validateSEOTags = (title: string, description: string) => {
  const validation = {
    title: {
      length: title.length,
      valid: title.length >= 55 && title.length <= 60,
      recommendation: title.length < 55 ? 'Title too short (min 55 chars)' : 
                     title.length > 60 ? 'Title too long (max 60 chars)' : 'Title length optimal'
    },
    description: {
      length: description.length,
      valid: description.length >= 140 && description.length <= 160,
      recommendation: description.length < 140 ? 'Description too short (min 140 chars)' : 
                     description.length > 160 ? 'Description too long (max 160 chars)' : 'Description length optimal'
    }
  };

  return validation;
};