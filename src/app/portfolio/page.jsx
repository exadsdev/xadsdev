export const metadata = {
  title: 'ผลงานและเคสศึกษา',
  description: 'ตัวอย่างการปรับโครงสร้าง, Creative, Tracking ที่ทำให้ KPI ดีขึ้น'
};

export default function PortfolioPage(){
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">ผลงาน</h1>
      <div className="row g-4">
        {[1,2,3,4,5,6].map(i=>(
          <div className="col-md-4" key={i}>
            <div className="card h-100 shadow-sm">
              <img src={`/case-${i}.webp`} className="card-img-top" alt={`case ${i}`}/>
              <div className="card-body">
                <h5 className="fw-bold">Case Study #{i}</h5>
                <p className="text-secondary">ลด CPA ลง 32% ใน 14 วัน ด้วยการจัดโครงสร้างแคมเปญ + creative hook ใหม่</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
