//src/app/page.js
import Hero from '@/components/Hero';
import { USP, CTA } from '@/components/SectionBlocks';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Rewive from './components/Rewive';
import Rewives from './components/Rewives';

export const revalidate = 3600;

// src/app/page.jsx
 


export default function HomePage() {
  // FAQ JSON-LD (ช่วย Rich Result + เนื้อหา SEO)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "รับยิงแอดสายเทาคืออะไร และต่างจากงานทั่วไปยังไง?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เป็นการทำโฆษณาที่ต้องระวังเรื่องคอนเทนต์และการตั้งค่าตามกรอบแพลตฟอร์ม ลดความเสี่ยงและยังวัดผลทางธุรกิจได้จริง"
        }
      },
      {
        "@type": "Question",
        "name": "งบขั้นต่ำแนะนำสำหรับงานสายเทา?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เริ่มได้ตั้งแต่งบรายวัน 300–1,000 บาท แล้วค่อยเพิ่มเมื่อเห็นสัญญาณ Conversion ที่ชัดเจน"
        }
      },
      {
        "@type": "Question",
        "name": "ถ้ายังไม่มีเว็บหรือเพจ พร้อมรันแคมเปญได้ไหม?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ได้ เราช่วยทำ Landing/เซลเพจพร้อมโดเมนให้ ฟรี พร้อมครีเอทีฟพื้นฐานอย่างน้อย 5 รูป"
        }
      }
    ]
  };

  return (
    <>
      <Hero />

      {/* -------------------- บริการหลัก -------------------- */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">บริการหลัก</h2>
          <div className="row g-4">
            {[
              { href:'/services/google-ads', title:'Google Ads', desc:'Search/PMAX/YouTube', img:'/svc-google.jpg' },
              { href:'/services/facebook-ads', title:'Facebook/IG Ads', desc:'Lead/Message/Conversion', img:'/svc-fb.jpg' },
              { href:'/services/youtube-ads', title:'YouTube Ads', desc:'In-Stream/Shorts Discovery', img:'/svc-yt.jpg' },
              { href:'/services/grey-ads', title:'แคมเปญสายเทา (ตามกรอบแพลตฟอร์ม)', desc:'คัดกลยุทธ์ที่เสี่ยงต่ำและวัดผลได้', img:'/svc-grey.jpg' },
            ].map((s)=>(
              <div className="col-md-6 col-lg-3" key={s.title}>
                <Link href={s.href} className="card h-100 text-decoration-none shadow-sm">
                  <div className="ratio ratio-4x3">
                    <Image src={s.img} alt={s.title} fill className="img-fit rounded-top" />
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold text-dark">{s.title}</h5>
                    <p className="text-secondary mb-0">{s.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <USP />
      <Rewive />
      <Rewives />

      {/* -------------------- บล็อกเนื้อหา SEO: รับยิงแอดสายเทา -------------------- */}
      <section className="py-5 bg-light border-top">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">รับยิงแอดสายเทา — เน้นผลลัพธ์ วัดผลได้จริง</h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h5 fw-bold">Facebook Ads สายเทา (เหมาจ่าย 9,900 บาท/เดือน)</h3>
                  <ul className="mb-3">
                    <li>เปิดโฆษณา 24 ชม. หรือกำหนดตามลูกค้า — ระยะเวลา 30 วันเต็ม</li>
                    <li>จัดการบัญชีโฆษณาตลอด 30 วัน (ไม่จำกัดจำนวน)</li>
                    <li>เว็บไซต์/เซลเพจหน้าขาว ฟรี พร้อมโดเมน ฟรี</li>
                    <li>ครีเอทีฟขั้นต่ำ 5 รูป (png, jpg, gif) + ใส่ Lightning Page ให้ครบ</li>
                    <li>รายงานผลทุกวัน เวลา 10:00 น.</li>
                    <li>ตรวจสอบงานผ่าน VPS Remote Desktop (VPS 590 บาท/เดือน ลูกค้าชำระเอง)</li>
                    <li>บัตรชำระค่าแอด: ใช้ของลูกค้าหรือบัตรที่เราเตรียม (แนะนำ)</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link href="/services/facebook-ads" className="btn btn-primary">รายละเอียด Facebook/IG Ads</Link>
                    <Link href="/packages" className="btn btn-outline-dark">ดูแพ็กเกจทั้งหมด</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h5 fw-bold">Google Ads สายเทา (เหมาจ่าย 12,900 บาท/เดือน)</h3>
                  <ul className="mb-3">
                    <li>เปิดโฆษณา 24 ชม. หรือกำหนดตามลูกค้า — ระยะเวลา 30 วันเต็ม</li>
                    <li>จัดการบัญชีโฆษณาตลอด 30 วัน (ไม่จำกัดจำนวน)</li>
                    <li>Landing Page ฟรี พร้อมโดเมน ฟรี + ครีเอทีฟภาพขั้นต่ำ 5 รูป</li>
                    <li>วางโครงสร้าง Search/PMAX/Display/YouTube ตาม KPI</li>
                    <li>รายงานผลทุกวัน เวลา 10:00 น.</li>
                    <li>ตรวจสอบงานผ่าน VPS Remote Desktop (VPS 590 บาท/เดือน ลูกค้าชำระเอง)</li>
                    <li>บัตรชำระค่าแอด: ใช้ของลูกค้าหรือบัตรที่เราเตรียม (แนะนำ)</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link href="/services/google-ads" className="btn btn-primary">รายละเอียด Google Ads</Link>
                    <Link href="/contact#brief" className="btn btn-outline-dark">ขอประเมินฟรี</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="mt-4">
            <p className="text-secondary">
              เราคือเอเจนซี่ <strong>รับยิงแอดสายเทา</strong> ที่เน้นวางแผนเชิงข้อมูล เลือกวิธีสื่อสารและครีเอทีฟให้สอดคล้องกับนโยบายแพลตฟอร์มมากที่สุด
              ครอบคลุม Facebook Ads, Google Ads และ YouTube Ads มุ่งเน้น Conversion, CPL, CPA พร้อมระบบ Tracking ครบถ้วน
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- คอร์สเรียนสายเทา (ใหม่) -------------------- */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">คอร์สเรียนสายเทา — สอนสด ตัวต่อตัว</h2>
          <div className="row g-4">
            {/* คอร์ส Google สายเทา */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-1">คอร์ส Google สายเทา</h3>
                  <div className="mb-2 text-secondary">ราคาสุดคุ้ม: <strong>18,500 บาท</strong></div>
                  <ul className="mb-3">
                    <li>สร้างและวอร์มอีเมลก่อนใช้งาน</li>
                    <li>เริ่มจากการทำ Landing page + Template ฟรี</li>
                    <li>สอนจดโดเมน/ซื้อโฮสติ้ง + ทำเว็บไซต์ให้ครบองค์ประกอบ</li>
                    <li>สร้างบัญชีแบบไม่สร้างแคมเปญ, เทคนิคเขียนโฆษณาแบบไม่เสี่ยง</li>
                    <li>ตรวจสอบแคมเปญและ Keyword, สลับ Keyword เทาแบบไม่โดนแบน</li>
                    <li>เปลี่ยนหน้าเว็บแบบไม่เสี่ยง, เลี้ยงบัญชีให้ปลอดภัย</li>
                    <li>ทำให้โฆษณาราคาถูก, สอนทุกเทคนิคที่ใช้จริง</li>
                    <li>สอนสดตัวต่อตัว ผ่าน TeamViewer / Zoom</li>
                  </ul>
                  <Link href="/courses" className="btn btn-primary">ดูรายละเอียดคอร์ส</Link>
                </div>
              </div>
            </div>

            {/* คอร์ส Facebook สายเทา */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-1">คอร์สโฆษณา Facebook สายเทา</h3>
                  <div className="mb-2 text-secondary">ราคาสุดคุ้ม: <strong>10,000 บาท</strong></div>
                  <ul className="mb-3">
                    <li>เริ่มวอร์มบัญชี Facebook + ทำ Landing page (Template ฟรี)</li>
                    <li>สอนจดโดเมน/ซื้อโฮสติ้ง ให้ใช้งานกับ Facebook ได้นานๆ</li>
                    <li>เริ่มต้นเก็บ Pixel + กำหนดเส้นทาง Conversion</li>
                    <li>ตรวจสอบแคมเปญ/คีย์เวิร์ด + จัดการรูปภาพเพื่อนำกลับมาใช้ซ้ำ</li>
                    <li>วิธีเลี้ยงบัญชีให้อยู่ได้นาน + ทำให้โฆษณาราคาถูก</li>
                    <li>สอนเทคนิคทั้งหมด + สอนสดตัวต่อตัว</li>
                    <li>รีโมตขึ้นงานจริงผ่าน TeamViewer / Meet / Zoom / AnyDesk</li>
                  </ul>
                  <Link href="/courses" className="btn btn-primary">ดูรายละเอียดคอร์ส</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/contact#brief" className="btn btn-dark btn-lg">จองรอบเรียน / สอบถามเพิ่มเติม</Link>
          </div>
        </div>
      </section>

      {/* -------------------- เคสตัวอย่าง -------------------- */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">เคสตัวอย่าง (ROI/CPA ดีขึ้น)</h2>
          <div className="row g-4">
            {[1,2,3].map(i=>(
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="ratio ratio-16x9">
                    <Image src={`/case-${i}.webp`} alt={`Case ${i}`} fill className="img-fit rounded-top"/>
                  </div>
                  <div className="card-body">
                    <h6 className="text-uppercase text-secondary">Case {i}</h6>
                    <h5 className="fw-bold">เพิ่ม Conversion +68% ภายใน 30 วัน</h5>
                    <p className="text-secondary">วางโครงสร้างใหม่ + ปรับ Conversion + ทดสอบครีเอทีฟ A/B เพื่อเร่งสัญญาณการเรียนรู้</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link className="btn btn-outline-primary" href="/portfolio">ดูทั้งหมด</Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* FAQ JSON-LD */}
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
