import { notFound } from 'next/navigation';
import { JsonLdService } from '@/components/JsonLd';

// DB ตัวอย่าง (แก้ไข/ขยายได้)
const DB = {
  'google-ads': {
    title: 'Google Ads',
    desc: 'วางแผน Search/PMax/Display/YouTube ให้คุ้มงบและได้ Conversion ตาม KPI',
    hero: '/svc-google.jpg',
    bullets: ['คีย์เวิร์ด/ฟีด/ฟีดแบ็ก', 'โครงสร้างแคมเปญถูกต้อง', 'คอนเวอร์ชัน+GA4 ครบ']
  },
  'facebook-ads': {
    title: 'Facebook/IG Ads',
    desc: 'ปรับโครงสร้าง/ครีเอทีฟ/ออปเจ็กทีฟให้เหมาะสมกับฟันเนล สร้างยอดจริง',
    hero: '/svc-fb.jpg',
    bullets: ['CBO/ABO เหมาะสม', 'A/B Creative & Hook', 'Pixel/Conversions API']
  },
  'youtube-ads': {
    title: 'YouTube Ads',
    desc: 'สื่อสารแบบวัดผล ตั้ง KPI ที่สอดคล้อง Funnel และ OCPM ที่แม่นยำ',
    hero: '/svc-yt.jpg',
    bullets: ['Creative Script', 'Brand Lift/Conv Lift', 'Remarketing']
  },
  'grey-ads': {
    title: 'แคมเปญสายเทา (ภายใต้กรอบแพลตฟอร์ม)',
    desc: 'ประเมินความเสี่ยง เลือกแนวทางที่เป็นไปได้ วัดผลและสื่อสารอย่างปลอดภัยขึ้น',
    hero: '/svc-grey.jpg',
    bullets: ['ครีเอทีฟปลอดภัยขึ้น', 'เพจ/โดเมน/การตั้งค่าเหมาะสม', 'แนวทางลดความเสี่ยง']
  }
};

// ✅ ต้อง await params ก่อนใช้งาน
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = DB[slug];
  if (!s) return {};
  return {
    title: `${s.title} — รายละเอียดบริการ`,
    description: s.desc,
    openGraph: { images: [{ url: s.hero, width: 1200, height: 630 }] }
  };
}

// ✅ ต้องเป็น async แล้ว await params
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const s = DB[slug];
  if (!s) return notFound();
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">{s.title}</h1>
      <p className="lead text-secondary">{s.desc}</p>
      <ul className="list-group list-group-flush mb-4">
        {s.bullets.map((b, i) => (<li key={i} className="list-group-item">{b}</li>))}
      </ul>
      <a className="btn btn-primary" href="/packages">ดูแพ็กเกจ</a>
      <JsonLdService name={s.title} description={s.desc} image={s.hero} />
    </div>
  );
}

// 👍 แนะนำ: ให้ Next.js pre-build เส้นทางเหล่านี้ (ช่วย SEO/ความเร็ว)
export async function generateStaticParams() {
  return Object.keys(DB).map(slug => ({ slug }));
}
