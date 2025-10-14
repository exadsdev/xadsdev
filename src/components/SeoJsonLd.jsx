import Script from 'next/script';
import { site } from '@/lib/site';

const abs = (p) => (p?.startsWith('http') ? p : site.url + p);

// 2.1 WebSite + SearchAction + Organization/Logo
export function JsonLdCore() {
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: site.url,
    name: site.name,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}${site.searchPath}?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: site.url,
    name: site.name,
    logo: {
      '@type': 'ImageObject',
      url: abs(site.squareLogo),
      width: 512,
      height: 512
    },
    sameAs: site.sameAs,
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: site.contact.email,
      telephone: site.contact.phone,
      areaServed: 'TH'
    }]
  };

  return (
    <>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webSite)}
      </Script>
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organization)}
      </Script>
    </>
  );
}

// 2.2 Breadcrumbs (เรียกในแต่ละหน้า)
export function JsonLdBreadcrumbs({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: (items || []).map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
  return (
    <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}

// 2.3 FAQ (ใช้เฉพาะหน้าที่มีคำถาม-คำตอบบนหน้า)
export function JsonLdFAQ({ faqs }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqs || []).map(x => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a }
    }))
  };
  return (
    <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}

// 2.4 Service/Article พร้อม Rich Image
export function JsonLdService({ name, description, image, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image: [{
      '@type': 'ImageObject',
      url: abs(image),
      width: 1200,
      height: 630
    }]
  };
  return (
    <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}
