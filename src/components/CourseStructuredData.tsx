import { Helmet } from 'react-helmet-async';

interface Course {
  name: string;
  description: string;
  ageGroup?: string;
  price?: string;
  duration: string;
  schedule: string[];
  instructor?: string;
}

interface CourseStructuredDataProps {
  courses: Course[];
}

const CourseStructuredData = ({ courses }: CourseStructuredDataProps) => {
  const siteUrl = 'https://kravist.sg';
  
  const courseSchemas = courses.map((course, index) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteUrl}/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Kravist Singapore",
      "sameAs": siteUrl
    },
    "courseCode": `KRAV-${index + 1}`,
    "coursePrerequisites": "No prior experience required",
    "educationalCredentialAwarded": "Krav Maga Certification",
    "inLanguage": "en-SG",
    "availableLanguage": "English",
    "teaches": [
      "Self-defense techniques",
      "Situational awareness",
      "Physical conditioning",
      "Confidence building",
      "Stress management"
    ],
    "courseMode": "In-person",
    "locationCreated": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Singapore",
        "addressCountry": "SG"
      }
    },
    "timeRequired": course.duration,
    "typicalAgeRange": course.ageGroup || "6-99",
    "offers": {
      "@type": "Offer",
      "price": course.price || "Contact for pricing",
      "priceCurrency": "SGD",
      "availability": "https://schema.org/InStock",
      "category": "Martial Arts Training"
    },
    "hasCourseInstance": course.schedule.map(scheduleItem => ({
      "@type": "CourseInstance",
      "courseMode": "In-person",
      "location": {
        "@type": "Place",
        "name": "Kravist Singapore Training Center",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Singapore",
          "addressCountry": "SG"
        }
      },
      "schedule": {
        "@type": "Schedule",
        "repeatFrequency": "Weekly",
        "byDay": scheduleItem.split(' ')[0],
        "startTime": scheduleItem.split(' ')[1]
      },
      "instructor": {
        "@type": "Person",
        "name": course.instructor || "Certified Krav Maga Instructor",
        "jobTitle": "Krav Maga Instructor",
        "worksFor": {
          "@type": "Organization",
          "name": "Kravist Singapore"
        }
      }
    }))
  }));

  return (
    <Helmet>
      {courseSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default CourseStructuredData;