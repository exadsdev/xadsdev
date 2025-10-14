import { site } from '@/lib/site';
export async function GET() {
  const body = {
    name: site.name,
    short_name: site.name,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d6efd',
    icons: [
      { src: '/icon-192.png', sizes:'192x192', type:'image/png' },
      { src: '/icon-512.png', sizes:'512x512', type:'image/png' }
    ]
  };
  return Response.json(body);
}
