import { Helmet } from 'react-helmet-async';

interface ClassEvent {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  ageGroup?: string;
  instructor?: string;
}

interface EventStructuredDataProps {
  events: ClassEvent[];
}

const EventStructuredData = ({ events }: EventStructuredDataProps) => {
  const siteUrl = 'https://kravist.sg';
  
  const eventSchemas = events.map((event, index) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}/events/${event.name.toLowerCase().replace(/\s+/g, '-')}-${index}`,
    "name": event.name,
    "description": event.description,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "startDate": event.startDate,
    "endDate": event.endDate,
    "previousStartDate": event.startDate,
    "location": {
      "@type": "Place",
      "name": "Kravist Singapore Training Center",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Singapore",
        "addressCountry": "SG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "1.3521",
        "longitude": "103.8198"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Kravist Singapore",
      "url": siteUrl,
      "logo": `${siteUrl}/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png`
    },
    "performer": {
      "@type": "Person",
      "name": event.instructor || "Certified Krav Maga Instructor",
      "jobTitle": "Krav Maga Instructor"
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/#pricing`,
      "price": "0",
      "priceCurrency": "SGD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "category": "Trial Class"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": event.ageGroup || "All ages",
      "geographicArea": {
        "@type": "Place",
        "name": "Singapore"
      }
    },
    "isAccessibleForFree": true,
    "keywords": [
      "Krav Maga",
      "Self Defense",
      "Martial Arts",
      "Singapore",
      event.ageGroup || "All Ages"
    ],
    "inLanguage": "en-SG",
    "workFeatured": {
      "@type": "CreativeWork",
      "name": "Krav Maga Training Program",
      "description": "Comprehensive self-defense training system"
    }
  }));

  return (
    <Helmet>
      {eventSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default EventStructuredData;