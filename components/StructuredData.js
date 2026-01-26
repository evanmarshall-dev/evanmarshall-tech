export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.evanmarshall.tech',
    name: 'Evan Marshall Tech Services',
    image: 'https://www.evanmarshall.tech/og-image.jpg',
    url: 'https://www.evanmarshall.tech',
    telephone: '+1-902-385-5551',
    email: 'me@evanmarshall.dev',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kentville',
      addressRegion: 'NS',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.0776,
      longitude: -64.4947,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Kentville',
      },
      {
        '@type': 'City',
        name: 'Wolfville',
      },
      {
        '@type': 'City',
        name: 'New Minas',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Annapolis Valley',
      },
    ],
    serviceType: [
      'Computer Service Repair',
      'IT Tech Support',
      'Custom PC Computer Building',
      'Home Media System Streaming Setup',
      'Tech Consultation',
    ],
    // sameAs: [
    //   'https://www.facebook.com/yourpage', // Add when you create it
    //   // Add other social profiles
    // ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
