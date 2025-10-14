"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const sendTo = process.env.NEXT_PUBLIC_GADS_SEND_TO; // e.g. "AW-1234567890/abcdEFGHijk"

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      // TODO: ส่งข้อมูลไป API ของคุณที่นี่ (ถ้ามี)
      // await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });

      // ยิง Google Ads Conversion (ถ้าตั้งค่าไว้)
      if (typeof window !== "undefined" && window.gtag && sendTo) {
        window.gtag("event", "conversion", { send_to: sendTo });
      }

      // ยิง GA4 event แบบพื้นฐาน (ทางเลือก)
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "lead_submit", { method: "contact_form" });
      }

      setDone(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      alert("ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="card shadow-sm" id="brief" onSubmit={onSubmit}>
      <div className="card-body">
        <h5 className="fw-bold mb-3">แบบฟอร์มบรีฟ</h5>

        <div className="mb-3">
          <label className="form-label">ชื่อ-สกุล</label>
          <input className="form-control" name="name" required disabled={submitting}/>
        </div>

        <div className="mb-3">
          <label className="form-label">อีเมล</label>
          <input type="email" className="form-control" name="email" required disabled={submitting}/>
        </div>

        <div className="mb-3">
          <label className="form-label">งบประมาณต่อเดือน (ประมาณ)</label>
          <select className="form-select" name="budget" defaultValue="10000-30000" disabled={submitting}>
            <option value="ต่ำกว่า 10,000">ต่ำกว่า 10,000</option>
            <option value="10000-30000">10,000 - 30,000</option>
            <option value="30000-100000">30,000 - 100,000</option>
            <option value="100000up">100,000+</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">เป้าหมาย</label>
          <textarea className="form-control" rows={4} name="goal" placeholder="เช่น ต้องการยอดขาย/ข้อความ/ลงทะเบียน" disabled={submitting}/>
        </div>

        <button className="btn btn-primary w-100" type="submit" disabled={submitting}>
          {submitting ? "กำลังส่ง..." : "ส่งข้อมูล"}
        </button>

        {done && (
          <div className="alert alert-success mt-3 mb-0" role="alert">
            ส่งข้อมูลสำเร็จ ขอบคุณครับ/ค่ะ ทีมงานจะติดต่อกลับโดยเร็ว
          </div>
        )}
      </div>
    </form>
  );
}
