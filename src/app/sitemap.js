// src/app/sitemap.js  (สร้าง Sitemap อัตโนมัติ)
import { site } from '@/lib/site';

const BLOG_SLUGS = ['seo-sitelinks-2025', 'grey-ads-safety']; // แหล่งข้อมูลจริงค่อยดึงแบบไดนามิก
const SERVICE_SLUGS = ['google-ads', 'facebook-ads', 'youtube-ads', 'grey-ads'];

export default async function sitemap() {
  const base = site.url;
  const now = new Date().toISOString();

  const staticRoutes = [
    '', 'services', 'packages', 'courses', 'portfolio', 'reviews', 'blog', 'contact', 'privacy', 'terms', 'disclaimer'
  ].map(p => ({
    url: `${base}/${p}`.replace(/\/+$/, ''),
    lastModified: now,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1.0 : 0.7
  }));

  const blogRoutes = BLOG_SLUGS.map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  const serviceRoutes = SERVICE_SLUGS.map(slug => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
