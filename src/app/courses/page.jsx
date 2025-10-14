import { JsonLdCourse } from '@/components/JsonLd';

export const metadata = {
  title: 'คอร์สเรียนการตลาดสายเทา (สอนสด ตัวต่อตัว)',
  description: 'คอร์สสายเทา Google/Facebook — ปฏิบัติจริง เน้นรอด วัดผลได้ ลดความเสี่ยงบนแพลตฟอร์ม'
};

const list = [
  {
    title: 'คอร์ส Google สายเทา',
    price: '18,500 บาท',
    img: '/course-1.jpg',
    bullets: [
      'สร้างและวอร์มอีเมลก่อนใช้งาน',
      'เริ่มจาก Landing page + Template ฟรี',
      'สอนจดโดเมน ซื้อ hosting ทำเว็บไซต์ให้องค์ประกอบครบ',
      'วิธีสร้างบัญชีแบบไม่สร้างแคมเปญ',
      'เทคนิคเขียนโฆษณาแบบไม่เสี่ยง',
      'ตรวจสอบแคมเปญและ Keyword + สลับ Keyword เทาแบบไม่โดนแบน',
      'เปลี่ยนหน้าเว็บแบบไม่เสี่ยง + เลี้ยงบัญชีให้ปลอดภัย',
      'ทำให้โฆษณาราคาถูก + สอนทุกเทคนิคที่ใช้จริง',
      'สอนสด ตัวต่อตัว ผ่าน TeamViewer / Zoom'
    ],
    desc: 'คอร์สปฏิบัติจริงสำหรับ Google Ads สายเทา เรียนรู้ตั้งแต่พื้นฐานระบบ ไปจนถึงการทำงานเชิงลึกแบบมืออาชีพ'
  },
  {
    title: 'คอร์สโฆษณา Facebook สายเทา',
    price: '10,000 บาท',
    img: '/course-2.jpg',
    bullets: [
      'เริ่มวอร์มบัญชี Facebook + ทำ Landing page (Template ฟรี)',
      'สอนจดโดเมน ซื้อ hosting ให้ใช้งานกับ Facebook ได้นานๆ',
      'วิธีเริ่มเก็บ Pixel + กำหนดเส้นทาง Conversion',
      'ตรวจสอบแคมเปญ/คีย์เวิร์ด + จัดการรูปภาพให้นำกลับมาใช้ใหม่ได้',
      'วิธีเลี้ยงบัญชีให้อยู่ได้นาน + ทำให้โฆษณาราคาถูก',
      'สอนเทคนิคทั้งหมด + สอนสดตัวต่อตัว',
      'ขึ้นงานจริงแบบสดๆ ผ่าน TeamViewer / Meet / Zoom / AnyDesk'
    ],
    desc: 'คอร์ส Facebook สายเทา เน้นรอดและยั่งยืน วางระบบให้พร้อมใช้งานจริงและวัดผลได้'
  }
];

export default function CoursesPage(){
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">คอร์สสายเทา — สอนสด ตัวต่อตัว</h1>

      <div className="row g-4">
        {list.map(c=>(
          <div className="col-md-6" key={c.title}>
            <div className="card h-100 shadow-sm">
              <img src={c.img} className="card-img-top" alt={c.title}/>
              <div className="card-body">
                <h4 className="fw-bold">{c.title}</h4>
                <div className="mb-2 text-secondary">ราคา: <strong>{c.price}</strong></div>
                <p className="text-secondary">{c.desc}</p>
                <ul className="mb-3">
                  {c.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                </ul>
                <a className="btn btn-outline-primary" href="/contact#brief">จองรอบเรียน / สอบถาม</a>
              </div>
            </div>
            {/* JSON-LD Course (พื้นฐาน) */}
            <JsonLdCourse name={c.title} description={`${c.desc} ราคา ${c.price}`} image={c.img}/>
          </div>
        ))}
      </div>
    </div>
  );
}
