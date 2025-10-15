// src/app/components/AnalyticsTracker.client.jsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    if (typeof window !== 'undefined' && window.gtag && window.__GAID__) {
      window.gtag('config', window.__GAID__, { page_path: url });
    }
  }, [pathname, searchParams]);

  return null;
}
