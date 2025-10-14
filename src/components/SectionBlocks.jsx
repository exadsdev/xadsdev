import { Rocket, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export function USP() {
  const items = [
    {icon: <Rocket/>, title: 'ยิงเร็ว วัดผลไว', desc: 'ตั้งค่าให้เริ่มรันได้ภายใน 24 ชม. (กรณีอนุมัติได้)'},
    {icon: <Target/>, title: 'โฟกัส KPI', desc: 'Conversion / CPL / CPA ชัดเจน ปรับแคมเปญตามข้อมูลจริง'},
    {icon: <BarChart3/>, title: 'รายงานโปร่งใส', desc: 'Dashboard +สรุปรายสัปดาห์ เข้าใจง่าย'}
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">ทำไมลูกค้าเลือกเรา</h2>
        <div className="row g-4">
          {items.map((it,i)=>(
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-6 mb-3">{it.icon}</div>
                  <h5 className="fw-bold">{it.title}</h5>
                  <p className="text-secondary">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link className="btn btn-dark" href="/portfolio">ดูเคสจริง</Link>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div>
          <h3 className="fw-bold mb-1">พร้อมปั้นยอดให้ธุรกิจของคุณ</h3>
          <p className="mb-0">บอกงบ + เป้าหมาย เราจัดแผนและเสนอแพ็กเกจที่คุ้มที่สุดให้</p>
        </div>
        <a className="btn btn-light btn-lg" href="/contact#brief">เริ่มต้นตอนนี้</a>
      </div>
    </section>
  );
}
