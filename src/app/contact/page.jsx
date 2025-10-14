import { site } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'ติดต่อทีมงาน',
  description: 'ขอคำปรึกษา/ประเมินโครงการยิงแอดฟรี'
};

export default function ContactPage(){
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">ติดต่อเรา</h1>
      <div className="row g-4">
        <div className="col-md-6">
          {/* ฟอร์มถูกย้ายไปเป็น Client Component เพื่อรองรับ event handlers */}
          <ContactForm />
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold">ช่องทางติดต่อด่วน</h5>
              <p className="mb-2">โทร: {site.phone}</p>
              <p className="mb-2">LINE: {site.line}</p>
              <p className="mb-0">อีเมล: {site.email}</p>
            </div>
          </div>
          <div className="ratio ratio-16x9 mt-3">
            <iframe src="https://www.google.com/maps?q=Bangkok&output=embed" title="map" allowFullScreen/>
          </div>
        </div>
      </div>
    </div>
  );
}
