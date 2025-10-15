'use client';

import Script from 'next/script';

const ADS_ID =
  process.env.NEXT_PUBLIC_GADS_ID || process.env.NEXT_PUBLIC_GA4_ID || '';

export default function AdsTagInjector() {
  if (!ADS_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
