"use client";

import Link from "next/link";

const plans = [
  { days: 7,   price: "3,500",  tag: "เริ่มทดสอบ",      features: ["ตั้งค่าเร็ว ภายในวันเดียว*", "ปรับโฆษณาเบื้องต้น", "สรุปรายงานสั้นทุกวัน 10:00 น."] },
  { days: 15,  price: "6,000",  tag: "คุ้มค่า",         features: ["ทดสอบครีเอทีฟ/กลุ่มเป้าหมาย", "ปรับโครงสร้างชุดโฆษณา", "รายงานรายวัน + ข้อเสนอแนะ"] },
  { days: 30,  price: "9,900",  tag: "ยอดนิยม",         features: ["วางฟันเนลเต็มช่วง", "A/B Creative + Remarketing", "รายงานรายวัน + สรุปรายสัปดาห์"] },
];

export default function PricingFacebook() {
  return (
    <div className="row g-4">
      {plans.map((p) => (
        <div key={p.days} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <div className="badge bg-dark mb-2" style={{ alignSelf: "flex-start" }}>{p.tag}</div>
              <h4 className="fw-bold mb-1">{p.days} วัน</h4>
              <div className="display-6 fw-bold mb-2">{p.price}<span className="fs-6 text-secondary"> บาท</span></div>
              <ul className="mb-4">
                {p.features.map((f, i) => (<li key={i}>{f}</li>))}
              </ul>
              <div className="mt-auto d-grid">
                <Link href="/contact#brief" className="btn btn-primary">เริ่มแพ็กเกจ {p.days} วัน</Link>
              </div>
              <div className="small text-secondary mt-2">* ขึ้นกับการอนุมัติ/นโยบายแพลตฟอร์ม</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
