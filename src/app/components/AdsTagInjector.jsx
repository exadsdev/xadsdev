// app/components/AdsTagInjector.jsx
import Script from 'next/script';
import { readAdsSettings } from '@/lib/adsFile';

export default async function AdsTagInjector() {
  const { conversion_id, send_page_view, event_snippet } = await readAdsSettings();

  if (!conversion_id || !conversion_id.trim()) return null;

  // สร้าง config สำหรับ gtag
  const configJson = JSON.stringify({ send_page_view: !!send_page_view });

  return (
    <>
      {/* gtag base */}
      <Script
        id="gtag-base"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(conversion_id)}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${conversion_id}', ${configJson});
        `}
      </Script>

      {/* event snippet เพิ่มเติม (ถ้าใส่ไว้) — แนะนำให้เป็นคำสั่ง gtag(...) เท่านั้น */}
      {event_snippet?.trim() ? (
        <Script id="gtag-extra" strategy="afterInteractive">
          {event_snippet}
        </Script>
      ) : null}
    </>
  );
}
