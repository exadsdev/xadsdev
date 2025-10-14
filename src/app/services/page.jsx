import Link from 'next/link';

export const metadata = {
  title: 'บริการโฆษณาออนไลน์ครบวงจร',
  description: 'Google/Facebook/YouTube + Tracking/Analytics ครบ วัดผลได้จริง'
};

export default function ServicesPage() {
  const items = [
    {slug:'google-ads', name:'Google Ads', desc:'Search, PMax, Display, YouTube'},
    {slug:'facebook-ads', name:'Facebook/IG Ads', desc:'Leads, Messages, Conversion'},
    {slug:'youtube-ads', name:'YouTube Ads', desc:'Awareness ถึง Performance'},
    {slug:'grey-ads', name:'สายเทาในกรอบแพลตฟอร์ม', desc:'ลดความเสี่ยง + วัดผลได้'}
  ];
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">บริการ</h1>
      <div className="row g-3">
        {items.map(it=>(
          <div className="col-md-6" key={it.slug}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold">{it.name}</h4>
                <p className="text-secondary">{it.desc}</p>
                <Link href={`/services/${it.slug}`} className="btn btn-primary">รายละเอียด</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
