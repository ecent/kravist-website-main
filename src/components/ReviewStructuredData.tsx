import { Helmet } from 'react-helmet-async';

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  program?: string;
}

interface ReviewStructuredDataProps {
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

const ReviewStructuredData = ({ reviews, aggregateRating }: ReviewStructuredDataProps) => {
  const siteUrl = 'https://kravist.sg';
  
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Kravist Singapore",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating,
      "worstRating": aggregateRating.worstRating
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "publisher": {
        "@type": "Organization",
        "name": "Kravist Singapore"
      },
      "itemReviewed": {
        "@type": "Service",
        "name": review.program || "Krav Maga Training",
        "provider": {
          "@type": "Organization",
          "name": "Kravist Singapore"
        }
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

export default ReviewStructuredData;