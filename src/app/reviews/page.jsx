export const metadata = {
  title: 'รีวิวจากลูกค้า',
  description: 'เสียงจริงจากลูกค้าที่ร่วมงานกับเรา'
};

export default function ReviewsPage(){
  const items = [
    {name:'คุณเอก', text:'ทีมงานสื่อสารชัดเจน KPI ดีขึ้นกว่าที่ตั้งไว้', rating:5},
    {name:'คุณพลอย', text:'เข้าใจงานสายเทาและให้คำแนะนำเชิงปฏิบัติได้ดี', rating:5},
    {name:'คุณต่อ', text:'รายงานโปร่งใสและทำงานไว', rating:4}
  ];
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">รีวิว</h1>
      <div className="row g-4">
        {items.map((r,i)=>(
          <div className="col-md-4" key={i}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="mb-2">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                <p className="mb-2">{r.text}</p>
                <div className="small text-secondary">— {r.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
