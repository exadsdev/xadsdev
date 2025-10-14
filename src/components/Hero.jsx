import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-5 bg-light border-bottom">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold mb-3">เอเจนซี่โฆษณาออนไลน์ ที่โฟกัส “ผลลัพธ์”</h1>
            <p className="lead text-secondary mb-4">
              เชี่ยวชาญ Google / Facebook / YouTube รวมถึงงานสายเทาอย่างถูกกรอบแพลตฟอร์ม
              เน้นวางแผนเชิงข้อมูล, Tracking ครบ, ยิงให้คุ้มในงบที่เหมาะสม
            </p>
            <div className="d-flex gap-2">
              <Link className="btn btn-primary btn-lg" href="/packages">ดูแพ็กเกจ</Link>
              <Link className="btn btn-outline-dark btn-lg" href="/contact#brief">รับคำปรึกษาฟรี</Link>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow">
              <Image src="/hero-preview.webp" alt="Performance Ads Agency" fill priority style={{objectFit:'cover'}} />
            </div>
            <p className="text-secondary small mt-2">Rich Result Image พร้อมแสดงใน Social & Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
