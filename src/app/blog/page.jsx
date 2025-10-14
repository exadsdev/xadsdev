import Link from 'next/link';

export const metadata = {
  title: 'บล็อก & ความรู้',
  description: 'อัปเดตกลยุทธ์ยิงแอด เทคนิค Tracking และครีเอทีฟ'
};

const posts = [
  { slug:'seo-sitelinks-2025', title:'ทำ Sitelinks & Rich Result ให้ติดไว', date:'2025-10-01', excerpt:'โครงสร้างเมนู/สคีมา/อินเทอร์นัลลิงก์' },
  { slug:'grey-ads-safety', title:'แนวทางลดความเสี่ยงในงานโฆษณาสายเทา', date:'2025-09-20', excerpt:'แยกเพจ/โดเมน/ครีเอทีฟ/การสื่อสาร' }
];

export default function BlogIndex(){
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">บล็อก</h1>
      <div className="list-group">
        {posts.map(p=>(
          <Link key={p.slug} href={`/blog/${p.slug}`} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{p.title}</h5>
              <small className="text-secondary">{p.date}</small>
            </div>
            <p className="mb-1 text-secondary">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
