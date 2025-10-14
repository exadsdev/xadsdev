import Script from "next/script";
import PricingFacebook from "@/components/PricingFacebook";

export const metadata = {
  title: "แพ็กเกจโฆษณา — Facebook/Google (รวมสายเทาในกรอบแพลตฟอร์ม)",
  description: "แพ็กเกจ Facebook Ads ระยะสั้น 7/15/30 วัน และแพ็กเกจ Google Ads รายเดือน พร้อมรายงานผลทุกวัน"
};

export default function PackagesPage(){
  // JSON-LD: OfferCatalog สำหรับ Facebook Ads ระยะสั้น (3 แพ็กเกจ)
  const offerLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "แพ็กเกจ Facebook Ads ระยะสั้น",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Facebook Ads 7 วัน",
        "priceCurrency": "THB",
        "price": "3500",
        "availability": "https://schema.org/InStock",
        "category": "https://schema.org/Service"
      },
      {
        "@type": "Offer",
        "name": "Facebook Ads 15 วัน",
        "priceCurrency": "THB",
        "price": "6000",
        "availability": "https://schema.org/InStock",
        "category": "https://schema.org/Service"
      },
      {
        "@type": "Offer",
        "name": "Facebook Ads 30 วัน",
        "priceCurrency": "THB",
        "price": "9900",
        "availability": "https://schema.org/InStock",
        "category": "https://schema.org/Service"
      }
    ]
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-2">แพ็กเกจโฆษณา</h1>
      <p className="text-secondary mb-4">
        เลือกแพ็กเกจให้พอดีกับเป้าหมายและงบประมาณ เราโฟกัสผลลัพธ์ วัด KPI ได้จริง — รายงานผลทุกวัน 10:00 น.
      </p>

      {/* Facebook Ads: ระยะสั้น 7/15/30 วัน */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-3">Facebook Ads สายเทา — แพ็กเกจระยะสั้น</h2>
        <PricingFacebook />
        <div className="small text-secondary mt-2">
          รวมค่าบริการดูแลและปรับปรุงแคมเปญ (ไม่รวมงบค่าโฆษณา) •
          ลูกค้าตรวจสอบงานได้ผ่าน VPS/รีพอร์ต • บัตรชำระค่าโฆษณาใช้ของลูกค้าหรือบัตรที่เตรียมไว้
        </div>
      </section>

      {/* Google Ads: รายเดือน (ตามที่ตั้งไว้เดิม 12,900) */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-3">Google Ads สายเทา — รายเดือน</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="badge bg-dark mb-2" style={{ alignSelf: "flex-start" }}>แนะนำ</div>
                <h4 className="fw-bold mb-1">30 วัน</h4>
                <div className="display-6 fw-bold mb-2">12,900<span className="fs-6 text-secondary"> บาท</span></div>
                <ul className="mb-4">
                  <li>Search / PMax / Display / YouTube จัดให้ตาม KPI</li>
                  <li>Landing Page + โดเมน ฟรี (ถ้ายังไม่มี)</li>
                  <li>ครีเอทีฟภาพขั้นต่ำ 5 รูป + ทดสอบ A/B</li>
                  <li>รายงานผลทุกวัน 10:00 น. + สรุปรายสัปดาห์</li>
                </ul>
                <div className="mt-auto d-grid">
                  <a href="/contact#brief" className="btn btn-primary">เริ่มแพ็กเกจ Google Ads</a>
                </div>
                <div className="small text-secondary mt-2">ไม่รวมงบค่าโฆษณา • ตรวจสอบงานผ่าน VPS/รีพอร์ต</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="offers-facebook" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }} />
    </div>
  );
}
