// src/app/components/AnalyticsTracker.client.jsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // ติดตามทุกครั้งที่เปลี่ยนเส้นทาง (รวม query string)
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
