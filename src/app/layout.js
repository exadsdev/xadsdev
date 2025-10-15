// src/app/layout.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { Suspense } from 'react';
import { site } from '@/lib/site';
import { defaultImages } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLdWebSite, JsonLdOrganization } from '@/components/JsonLd';
import FloatingLine from '@/components/FloatingLine';
import VisitorTracker from '@/app/components/VisitorTracker.client';
import AdsTagInjector from '@/app/components/AdsTagInjector';
import AnalyticsTracker from '@/app/components/AnalyticsTracker.client';

// รูปหลักที่อยากให้ขึ้นเวลาพรีวิวทั้งเว็บ (1200x630, อยู่ใน public/)
const PREVIEW = '/preview.jpg?v=1';

// รองรับทั้งค่าใน site และ .env
const GA_MEASUREMENT_ID = site.ga4 || process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | เอเจนซี่โฆษณาออนไลน์ (Google/Facebook/YouTube)`,
    template: `%s | ${site.name}`,
  },
  description:
    'รับยิงแอดสายเทา (รวมสายเทาในกรอบแพลตฟอร์ม) วางแผน+วัดผล ทำกำไรยั่งยืน',
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Performance Ads & Grey-Area Marketing`,
    description: 'เอเจนซี่ยิงแอดที่โฟกัสกำไร วัดผลได้จริง',
    images:
      (site?.ogImages?.length && site.ogImages) ||
      [{ url: PREVIEW, width: 1200, height: 630, alt: site.name }] ||
      defaultImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Performance Ads`,
    description: 'โฆษณาออนไลน์เน้นผลลัพธ์',
    images: PREVIEW,
  },
  icons: { icon: '/favicon.ico' },
  other: { 'max-image-preview': 'large' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Header />

        {/* ครอบ component ที่ใช้ useSearchParams/usePathname ด้วย Suspense */}
        <Suspense fallback={null}>
          <VisitorTracker />
        </Suspense>

        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>

        <main>{children}</main>
        <Footer />
        <FloatingLine />

        {/* JSON-LD */}
        <JsonLdWebSite />
        <JsonLdOrganization />

        {/* GA4 */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.__GAID__ = '${GA_MEASUREMENT_ID}';
                gtag('js', new Date());
                gtag('config','${GA_MEASUREMENT_ID}', { send_page_view: true });
              `}
            </Script>
          </>
        ) : null}

        {/* Google Ads (ถ้ามีในโปรเจกต์) */}
        <Suspense fallback={null}>
          <AdsTagInjector />
        </Suspense>

        {/* Bootstrap JS Bundle */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
