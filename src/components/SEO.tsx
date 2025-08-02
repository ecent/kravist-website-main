import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  const siteUrl = 'https://kravist.sg';
  const defaultImage = `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`;
  const canonicalUrl = url || siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kravist Singapore" />
      <meta property="og:locale" content="en_SG" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:site" content="@kravist_sg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Kravist Singapore" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="en-SG" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kravist Singapore",
          "url": siteUrl,
          "logo": `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
          "sameAs": [
            "https://www.facebook.com/kravist.sg",
            "https://www.instagram.com/kravist.sg"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "SG",
            "availableLanguage": "English"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;