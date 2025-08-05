import { Helmet } from 'react-helmet-async';

interface Instructor {
  name: string;
  title: string;
  description: string;
  qualifications: string[];
  experience: string;
  image?: string;
  specializations?: string[];
}

interface InstructorStructuredDataProps {
  instructors: Instructor[];
}

const InstructorStructuredData = ({ instructors }: InstructorStructuredDataProps) => {
  const siteUrl = 'https://kravist.sg';
  
  const instructorSchemas = instructors.map((instructor, index) => ({
    "@context": "https://schema.org",
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
    },
    "serviceType": [
      "Krav Maga Instruction",
      "Self Defense Training",
      "Physical Fitness Coaching"
    ],
    "award": instructor.qualifications,
    "alumniOf": {
      "@type": "Organization",
      "name": "International Krav Maga Federation"
    },
    "seeks": {
      "@type": "Demand",
      "name": "Student Development in Self Defense"
    }
  }));

  return (
    <Helmet>
      {instructorSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default InstructorStructuredData;