import { Helmet } from 'react-helmet-async';

const BusinessHoursStructuredData = () => {
  const siteUrl = 'https://kravist.sg';
  
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["SportsClub", "LocalBusiness", "EducationalOrganization"],
    "@id": `${siteUrl}/#business`,
    "name": "Kravist Singapore",
    "alternateName": "Kravist Krav Maga Training Center",
    "description": "Premier Krav Maga and self-defense training center in Singapore offering comprehensive programs for all ages and skill levels.",
    "url": siteUrl,
    "logo": `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
    "image": [
      `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`,
      `${siteUrl}/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.webp`
    ],
    "telephone": "+65-XXXX-XXXX",
    "email": "info@kravist.sg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Irving Place, Tai Seng Point",
      "addressLocality": "Singapore",
      "postalCode": "369551",
      "addressCountry": "SG",
      "addressRegion": "Singapore"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "1.3359",
      "longitude": "103.8886"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday"],
        "opens": "19:30",
        "closes": "20:30",
        "description": "Adult Classes"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday"],
        "opens": "19:30",
        "closes": "20:30",
        "description": "Women's Classes"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "17:30",
        "closes": "19:30",
        "description": "Youth Classes (Juniors 5:30pm, Kids 6:30pm)"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "12:15",
        "description": "Women's & Adult Classes"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "16:30",
        "closes": "17:30",
        "description": "Teen Classes"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Singapore"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Tai Seng",
        "addressCountry": "SG"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "MacPherson",
        "addressCountry": "SG"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Paya Lebar",
        "addressCountry": "SG"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "1.3359",
        "longitude": "103.8886"
      },
      "geoRadius": "25000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Trial Classes",
          "description": "Complimentary trial sessions for all programs"
        },
        "price": "0",
        "priceCurrency": "SGD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Youth Krav Maga Programs",
          "description": "Age-appropriate self-defense training for children 6-17"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "SGD",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "month"
          }
        }
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/#pricing`,
          "inLanguage": "en-SG",
          "actionPlatform": [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Class Booking"
        }
      }
    ],
    "hasMap": "https://maps.google.com/?q=11+Irving+Place+Tai+Seng+Point+Singapore",
    "isAccessibleForFree": false,
    "publicAccess": true,
    "smokingAllowed": false
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
};

export default BusinessHoursStructuredData;