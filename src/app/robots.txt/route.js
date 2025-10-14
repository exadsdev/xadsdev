import { site } from '@/lib/site';
export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: ${site.url}/sitemap.xml
`;
  return new Response(body, { headers: { 'content-type': 'text/plain' } });
}
