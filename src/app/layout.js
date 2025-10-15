// src/app/layout.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { site } from '@/lib/site';
import { defaultImages } from '@/lib/seo'; // ใช้เป็น fallback ได้
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLdWebSite, JsonLdOrganization } from '@/components/JsonLd';
import FloatingLine from '@/components/FloatingLine';
import VisitorTracker from '@/app/components/VisitorTracker.client';
import AdsTagInjector from '@/app/components/AdsTagInjector';

// รูปหลักที่อยากให้ขึ้นเวลาพรีวิวทั้งเว็บ (1200x630, อยู่ใน public/)
const PREVIEW = '/preview.jpg?v=1'; // เติม ?v=1 กันแคชเครือข่ายโซเชียล

export const metadata = {
  metadataBase: new URL(site.url), // ทำให้ path เป็น absolute อัตโนมัติ
  title: {
    default: `${site.name} | เอเจนซี่โฆษณาออนไลน์ (Google/Facebook/YouTube)`,
    template: `%s | ${site.name}`,
  },
  description:
    'รับยิงแอดสายเทา (รวมสายเทาในกรอบแพลตฟอร์ม) วางแผน+วัดผล ทำกำไรยั่งยืน',
  // meta keywords ไม่จำเป็นต่อ Google แต่ถ้าจะเก็บไว้ให้สั้นลงจะดีกว่า
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Performance Ads & Grey-Area Marketing`,
    description: 'เอเจนซี่ยิงแอดที่โฟกัสกำไร วัดผลได้จริง',
    // ใช้รูปเฉพาะของโปรเจ็กต์ ถ้าไม่มีจะตกไปใช้ defaultImages
    images: [{ url: PREVIEW, width: 1200, height: 630, alt: site.name }] || defaultImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Performance Ads`,
    description: 'โฆษณาออนไลน์เน้นผลลัพธ์',
    images: `${PREVIEW}`, // ให้ตรงกับ OG
  },
  icons: { icon: '/favicon.ico' },
  other: {
    'max-image-preview': 'large',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
    <meta name="google-site-verification" content="KbepSD6AuLLUlPObkwm-VhzZQsSl924boMZqSsW1-hQ" />
      <body>
        <Header />
        <VisitorTracker />
        <main>{children}</main>
        <Footer />

        
        <FloatingLine />

        {/* JSON-LD */}
        <JsonLdWebSite />
        <JsonLdOrganization />

        {/* GA4 */}
        {site.ga4 ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${site.ga4}');
              `}
            </Script>
          </>
        ) : null}

        {/* Google Ads */}
        <AdsTagInjector />

        {/* Bootstrap JS Bundle */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
