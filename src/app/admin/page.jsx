'use client';

import { useEffect, useState } from 'react';

export default function AdminAdsSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState('');
  const [msg, setMsg]         = useState('');

  const [conversionId, setConversionId] = useState('');
  const [sendPageView, setSendPageView] = useState(1);
  const [eventSnippet, setEventSnippet] = useState('');

  async function load() {
    setLoading(true); setError(''); setMsg('');
    try {
      const res = await fetch('/api/ads-settings', { cache: 'no-store' });
      const j = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error || `HTTP ${res.status}`);
      setConversionId(j.data.conversion_id || '');
      setSendPageView(Number(j.data.send_page_view) ? 1 : 0);
      setEventSnippet(j.data.event_snippet || '');
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }

  async function save() {
    setSaving(true); setError(''); setMsg('');
    try {
      const res = await fetch('/api/ads-settings', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          conversion_id: conversionId,
          send_page_view: sendPageView,
          event_snippet: eventSnippet
        })
      });
      const j = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error || `HTTP ${res.status}`);
      setMsg('บันทึกแล้ว');
    } catch (e) {
      setError(String(e));
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="container py-4">
      <h1 className="h4 fw-bold mb-3">Google Ads Tag Settings (ไฟล์ JSON)</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {msg && <div className="alert alert-success">{msg}</div>}

      <div className="card shadow-sm">
        <div className="card-body">
          {loading ? <div>Loading…</div> : (
            <>
              <div className="mb-3">
                <label className="form-label">Conversion ID (เช่น AW-123456789)</label>
                <input
                  className="form-control"
                  value={conversionId}
                  onChange={e=>setConversionId(e.target.value)}
                  placeholder="AW-XXXXXXXXXX"
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-block">ส่ง page_view อัตโนมัติ</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="spv1" checked={sendPageView===1} onChange={()=>setSendPageView(1)} />
                  <label className="form-check-label" htmlFor="spv1">เปิด</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="spv0" checked={sendPageView===0} onChange={()=>setSendPageView(0)} />
                  <label className="form-check-label" htmlFor="spv0">ปิด</label>
                </div>
              </div>

           <div className="mb-3">
  <label className="form-label">
    {"Event Snippet เพิ่มเติม (ตัวอย่าง: gtag('event','conversion',{...}))"}
  </label>
  <textarea
    className="form-control"
    rows={5}
    value={eventSnippet}
    onChange={e => setEventSnippet(e.target.value)}
    placeholder={`gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXXX/abcdefg', 'value': 1.0, 'currency': 'THB' });`}
  />
  <div className="form-text">
    แนะนำให้ใส่เฉพาะคำสั่ง <code>gtag(...)</code> เท่านั้น
  </div>
</div>


              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={save} disabled={saving}>
                  {saving ? 'Saving…' : 'บันทึกการตั้งค่า'}
                </button>
                <button className="btn btn-outline-secondary" onClick={load} disabled={saving}>โหลดจากไฟล์</button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="small text-muted mt-3">
        ไฟล์เก็บค่า: <code>{process.env.ADS_SETTINGS_FILE || 'data/ads-settings.json'}</code>
      </div>
    </div>
  );
}
