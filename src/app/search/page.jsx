export const metadata = {
  title: 'ค้นหา',
  description: 'ค้นหาเนื้อหาทั้งหมดบนเว็บไซต์',
};

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').toString();

  // TODO: ใส่ logic ค้นหาจริงจาก index/DB ของคุณ
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">ค้นหา</h1>
      <form className="mb-4" action="/search" method="get">
        <input
          className="form-control form-control-lg"
          placeholder="พิมพ์คำที่ต้องการค้นหา…"
          name="q"
          defaultValue={q}
        />
      </form>
      {q ? <p className="text-secondary">ผลการค้นหา (เดโม่): <strong>{q}</strong></p> :
           <p className="text-secondary">กรอกคำค้นหาเพื่อเริ่มต้น</p>}
    </div>
  );
}
