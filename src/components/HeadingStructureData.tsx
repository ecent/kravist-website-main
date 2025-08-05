import { Helmet } from 'react-helmet-async';

interface HeadingStructureProps {
  title: string;
  description?: string;
  h1?: string;
  h2?: string[];
  h3?: string[];
}

const HeadingStructureData = ({ title, description, h1, h2, h3 }: HeadingStructureProps) => {
  const structuredHeadings = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description || "",
    "mainEntity": {
      "@type": "Article",
      "headline": h1 || title,
      "about": h2?.map(heading => ({
        "@type": "Thing",
        "name": heading
      })) || [],
      "mentions": h3?.map(heading => ({
        "@type": "Thing", 
        "name": heading
      })) || []
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredHeadings)}
      </script>
    </Helmet>
  );
};

export default HeadingStructureData;