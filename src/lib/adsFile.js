import fs from 'fs/promises';
import path from 'path';

// กำหนดพาธไฟล์ผ่าน ENV ได้ (เช่นวางนอกโปรเจกต์) ไม่ตั้งก็ใช้ ./data/ads-settings.json
const DEFAULT_FILE = process.env.ADS_SETTINGS_FILE || path.join(process.cwd(), 'data', 'ads-settings.json');

async function ensureFile(filePath = DEFAULT_FILE) {
  try {
    await fs.access(filePath);
  } catch {
    // ถ้าไม่มีไฟล์ ให้สร้างโฟลเดอร์และไฟล์เริ่มต้น
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    const defaults = { conversion_id: "", send_page_view: 1, event_snippet: "" };
    await fs.writeFile(filePath, JSON.stringify(defaults, null, 2), 'utf8');
  }
}

export async function readAdsSettings() {
  const filePath = DEFAULT_FILE;
  await ensureFile(filePath);
  const txt = await fs.readFile(filePath, 'utf8');
  try {
    const json = JSON.parse(txt);
    return {
      conversion_id: String(json.conversion_id || ""),
      send_page_view: Number(json.send_page_view) ? 1 : 0,
      event_snippet: String(json.event_snippet || "")
    };
  } catch {
    // ถ้า JSON เสีย ให้เขียนค่าดีฟอลต์ทับ
    const defaults = { conversion_id: "", send_page_view: 1, event_snippet: "" };
    await fs.writeFile(filePath, JSON.stringify(defaults, null, 2), 'utf8');
    return defaults;
  }
}

export async function writeAdsSettings({ conversion_id, send_page_view, event_snippet }) {
  const filePath = DEFAULT_FILE;
  await ensureFile(filePath);

  const payload = {
    conversion_id: String(conversion_id || "").trim(),
    send_page_view: Number(send_page_view) ? 1 : 0,
    // ปลอดภัย: แนะนำเก็บเฉพาะคำสั่ง gtag ที่จำเป็น ไม่ควรใส่ <script> แปลกปลอม
    event_snippet: String(event_snippet || "")
  };

  await fs.writeFile(filePath, JSON.stringify(payload, null, 2), 'utf8');
  return payload;
}
