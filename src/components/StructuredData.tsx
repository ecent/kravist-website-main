import { Helmet } from 'react-helmet-async';

interface LocalBusinessDataProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
    postalCode: string;
  };
  phone: string;
  email: string;
  url: string;
  openingHours?: string[];
  socialMedia?: string[];
  logo?: string;
  image?: string[];
}

interface FAQDataProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface OrganizationDataProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  socialMedia: string[];
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
  };
}

interface StructuredDataProps {
  localBusiness?: LocalBusinessDataProps;
  faqPage?: FAQDataProps;
  organization?: OrganizationDataProps;
}

const StructuredData = ({ localBusiness, faqPage, organization }: StructuredDataProps) => {
  const schemas = [];

  // Local Business Schema
  if (localBusiness) {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "name": localBusiness.name,
      "description": localBusiness.description,
      "url": localBusiness.url,
      "telephone": localBusiness.phone,
      "email": localBusiness.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": localBusiness.address.streetAddress,
        "addressLocality": localBusiness.address.addressLocality,
        "addressCountry": localBusiness.address.addressCountry,
        "postalCode": localBusiness.address.postalCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "1.3342",
        "longitude": "103.8895"
      },
      "openingHours": localBusiness.openingHours || [],
      "sameAs": localBusiness.socialMedia || [],
      "logo": localBusiness.logo,
      "image": localBusiness.image || [],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "SGD",
      "areaServed": {
        "@type": "City",
        "name": "Singapore"
      },
      "sport": "Krav Maga",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Youth Programs",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification", 
          "name": "Women's Classes",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Adult Training",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Corporate Workshops",
          "value": true
        }
      ]
    };
    schemas.push(localBusinessSchema);
  }

  // FAQ Page Schema
  if (faqPage) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqPage.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    schemas.push(faqSchema);
  }

  // Organization Schema
  if (organization) {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": organization.name,
      "description": organization.description,
      "url": organization.url,
      "logo": organization.logo,
      "sameAs": organization.socialMedia,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": organization.contactPoint.telephone,
        "email": organization.contactPoint.email,
        "contactType": organization.contactPoint.contactType,
        "areaServed": "Singapore",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Singapore"
      }
    };
    schemas.push(orgSchema);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </Helmet>
  );
};

export default StructuredData;