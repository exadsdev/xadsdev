// src/lib/gtag.js
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || (typeof window !== 'undefined' && window.__GAID__) || '';

export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
};

export const event = ({ action, params = {} }) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params);
};
