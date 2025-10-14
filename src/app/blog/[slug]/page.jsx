import { notFound } from 'next/navigation';

const DB = {
  'seo-sitelinks-2025': {
    title: 'ทำ Sitelinks & Rich Result ให้ติดไว',
    content: `
<p>โครงสร้างเมนูชัดเจน, Internal Link กระจาย, สคีมา WebSite + Breadcrumb + Organization + Service/Article ที่เหมาะสม</p>
<ul>
<li>ตั้งค่า robots.txt + sitemap.xml</li>
<li>ใช้ภาพ 1200x630 สำหรับ OG เพื่อ Rich Result Image</li>
<li>สร้างหน้าสำคัญ: Services/Packages/Courses/Contact</li>
</ul>`
  },
  'grey-ads-safety': {
    title: 'แนวทางลดความเสี่ยงในงานโฆษณาสายเทา',
    content: `
<p>ยึดกรอบแพลตฟอร์ม สื่อสารเลี่ยงคำต้องห้าม ใช้ครีเอทีฟที่เน้นประโยชน์ ไม่ชี้นำผิดนโยบาย</p>
<ul>
<li>แบ่งโดเมน/เพจตามความเสี่ยง</li>
<li>Tracking ครบถ้วนและวัดผลจริง</li>
</ul>`
  }
};

// ✅ Next.js 15: params เป็น Promise — ต้อง await ก่อนใช้งาน
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = DB[slug];
  if (!p) return {};
  return {
    title: p.title,
    description: p.title,
    openGraph: { images: [{ url:'/og-default.jpg', width:1200, height:630 }] }
  };
}

// ✅ ทำให้เพจเป็น async แล้ว await params
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const p = DB[slug];
  if (!p) return notFound();
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">{p.title}</h1>
      <article className="text-secondary" dangerouslySetInnerHTML={{__html: p.content}} />
    </div>
  );
}

// 👍 แนะนำให้ pre-build เส้นทาง (ช่วย SEO/ความเร็ว)
export async function generateStaticParams() {
  return Object.keys(DB).map(slug => ({ slug }));
}
