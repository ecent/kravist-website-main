import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface Course {
  name: string;
  description: string;
  ageGroup: string;
  price: string;
  duration: string;
  schedule: string[];
  instructor: string;
}

interface Event {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  ageGroup: string;
  instructor: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  program: string;
}

interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

interface Instructor {
  name: string;
  title: string;
  description: string;
  qualifications: string[];
  experience: string;
  image?: string;
  specializations?: string[];
}

interface UnifiedStructuredDataProps {
  faqs: FAQItem[];
  courses: Course[];
  events: Event[];
  reviews: Review[];
  aggregateRating: AggregateRating;
  instructors: Instructor[];
}

const UnifiedStructuredData = ({ 
  faqs, 
  courses, 
  events, 
  reviews, 
  aggregateRating, 
  instructors 
}: UnifiedStructuredDataProps) => {
  const siteUrl = 'https://kravist.sg';
  
  // Main organization/business schema
  const organizationSchema = {
    "@type": "LocalBusiness",
    "name": "Kravist",
    "image": "https://www.kravist.sg/lovable-uploads/e270fcf4-838b-472d-b1b1-faf196d6d975.png",
    "url": "https://www.kravist.sg",
    "email": "info@kravist.sg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Irving Place #02-04, Tai Seng Point",
      "addressLocality": "Singapore",
      "postalCode": "369551",
      "addressCountry": "SG"
    },
    "openingHours": [
      "Mo 19:30-20:30",
      "Tu 19:30-20:30",
      "We 19:30-20:30",
      "Th 19:30-20:30",
      "Fr 17:30-18:30,18:30-19:30",
      "Sa 10:00-11:00,11:15-12:15",
      "Su 16:30-17:30"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.3361,
      "longitude": 103.8863
    },
    "sameAs": [
      "https://www.facebook.com/kravistsg/",
      "https://www.instagram.com/kravist.sg/"
    ],
    "description": "Kravist is Singapore's leading self-defence and Krav Maga training centre, offering youth programs, women's self-defence, adult classes, and corporate workshops. We focus on real-world techniques, confidence building, and personal safety.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating,
      "worstRating": aggregateRating.worstRating
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };

  // FAQ schema
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Course/Service schemas
  const courseSchemas = courses.map(course => ({
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Kravist Singapore",
      "url": siteUrl
    },
    "audience": {
      "@type": "Audience",
      "audienceType": course.ageGroup
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "SGD",
      "availability": "https://schema.org/InStock"
    },
    "timeRequired": course.duration,
    "instructor": {
      "@type": "Person",
      "name": course.instructor
    }
  }));

  // Event schemas
  const eventSchemas = events.map(event => ({
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "P1W",
      "byDay": event.dayOfWeek
    },
    "location": {
      "@type": "Place",
      "name": "Kravist Singapore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Irving Place #02-04, Tai Seng Point",
        "addressLocality": "Singapore",
        "postalCode": "369551",
        "addressCountry": "SG"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Kravist Singapore",
      "url": siteUrl
    },
    "performer": {
      "@type": "Person",
      "name": event.instructor
    },
    "audience": {
      "@type": "Audience",
      "audienceType": event.ageGroup
    }
  }));

  // Instructor schemas
  const instructorSchemas = instructors.map(instructor => ({
    "@type": "Person",
    "@id": `${siteUrl}/instructors/${instructor.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": instructor.name,
    "jobTitle": instructor.title,
    "description": instructor.description,
    "image": instructor.image || `${siteUrl}/lovable-uploads/default-instructor.png`,
    "worksFor": {
      "@type": "Organization",
      "name": "Kravist Singapore",
      "url": siteUrl
    },
    "hasCredential": instructor.qualifications.map(qual => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": qual
    })),
    "knowsAbout": [
      "Krav Maga",
      "Self Defense", 
      "Martial Arts",
      "Physical Fitness",
      "Conflict Resolution",
      ...(instructor.specializations || [])
    ],
    "yearsOfExperience": instructor.experience,
    "areaServed": {
      "@type": "Place",
      "name": "Singapore"
    }
  }));

  // Combine all schemas into a single @graph structure
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      faqSchema,
      ...courseSchemas,
      ...eventSchemas,
      ...instructorSchemas
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(unifiedSchema)}
      </script>
    </Helmet>
  );
};

export default UnifiedStructuredData;