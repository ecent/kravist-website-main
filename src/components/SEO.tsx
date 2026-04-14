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
      
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Kravist Singapore" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="en-SG" />
      
      {/* LocalBusiness Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsClub",
          "name": "Kravist Singapore",
          "alternateName": "Kravist Krav Maga Singapore",
          "description": "Premier Krav Maga training center in Singapore offering self-defense classes for youth, women, adults, corporate training and private lessons.",
          "url": siteUrl,
          "logo": `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
          "image": `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Singapore",
            "addressCountry": "SG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "1.3521",
            "longitude": "103.8198"
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "1.3521",
              "longitude": "103.8198"
            },
            "geoRadius": "50000"
          },
          "sameAs": [
            "https://www.facebook.com/kravist.sg",
            "https://www.instagram.com/kravist.sg"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "SG",
            "availableLanguage": ["English"],
            "serviceType": "Krav Maga Training"
          },
          "priceRange": "$$",
          "currenciesAccepted": "SGD",
          "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "19:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "17:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Krav Maga Programs",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Youth Krav Maga Classes",
                  "description": "Self-defense training for children and teens aged 6-17"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Women's Self Defense Classes",
                  "description": "Women-only Krav Maga training in a safe, supportive environment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Adult Krav Maga Classes",
                  "description": "Practical self-defense training for adults of all skill levels"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Training",
                  "description": "Workplace safety and team-building through Krav Maga"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Private Training",
                  "description": "One-on-one personalized Krav Maga coaching"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;