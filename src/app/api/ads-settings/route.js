import { readAdsSettings, writeAdsSettings } from '@/lib/adsFile';

export const runtime = 'nodejs';

// TODO: ป้องกันสิทธิ์ให้เฉพาะแอดมินเท่านั้น (เช่น ตรวจ session/JWT ที่นี่)

export async function GET() {
  try {
    const data = await readAdsSettings();
    return new Response(JSON.stringify({ ok: true, data }), { status: 200, headers: { 'Content-Type': 'application/json' }});
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const saved = await writeAdsSettings({
      conversion_id: body.conversion_id,
      send_page_view: body.send_page_view,
      event_snippet: body.event_snippet
    });
    return new Response(JSON.stringify({ ok: true, data: saved }), { status: 200, headers: { 'Content-Type': 'application/json' }});
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
}
