import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
          "Mo 17:30-22:00",
          "Tu 17:30-22:00",
          "We 18:30-22:00",
          "Th 18:30-20:00",
          "Fr 17:30-20:00",
          "Sa 10:00-18:00",
          "Su 10:00-18:00"
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
        "description": "Kravist is Singapore's leading self-defence and Krav Maga training centre, offering youth programs, women's self-defence, adult classes, and corporate workshops. We focus on real-world techniques, confidence building, and personal safety."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Krav Maga?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Krav Maga is a practical self-defence system designed for real-life situations where survival is the priority. It has no competition element, focusing instead on techniques that prepare you for common threats such as grabs, strikes, and weapons."
            }
          },
          {
            "@type": "Question",
            "name": "What should I wear for my first class?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wear comfortable workout clothes that allow free movement and athletic shoes with good grip. Protective equipment will be provided for beginners."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need prior martial arts experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No prior experience is needed. Krav Maga is designed for all fitness levels and backgrounds. Our instructors guide you step-by-step and adapt the training to your needs."
            }
          },
          {
            "@type": "Question",
            "name": "Is Krav Maga suitable for women?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely! Krav Maga is designed to be effective regardless of size or strength. We also offer dedicated women's classes focusing on confidence and real-world scenarios."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I train?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For beginners, we recommend 2-3 classes per week to build muscle memory and conditioning. Frequency can increase as you progress."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get hurt during training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Safety is our top priority. We use controlled drills and protective gear, starting with light contact before gradually increasing intensity as your skills grow."
            }
          },
          {
            "@type": "Question",
            "name": "Can I try a class before committing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer trial classes for youth, women, and adult programs. You can experience a session before signing up."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
    </Helmet>
  );
};

export default StructuredData;