import { site } from './site';

export const defaultImages = [
  {
   url: `${site.url}/og-default.jpg?v=2`, 
    width: 1200,
    height: 630,
   alt: "รับยิงแอดสายเทา - AdsDev"
  }
];

export function absoluteUrl(path = '') {
  try {
    if (path?.startsWith('http')) return path;
    return new URL(path, site.url).toString();
  } catch {
    return site.url + path;
  }
}
