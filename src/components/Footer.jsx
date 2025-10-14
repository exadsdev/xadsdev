// src/components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

function lineProfileUrl(id) {
  const clean = String(id || "").trim().replace(/^@/, "");
  return clean ? `https://line.me/R/ti/p/${clean}` : "";
}

export default function Footer() {
  const year = new Date().getFullYear();

  // ทำลิงก์ Social แบบปลอดภัย: เรนเดอร์เฉพาะที่มีจริง
  const socials = [
    { name: "Facebook", href: site.social?.facebook },
    { name: "YouTube", href: site.social?.youtube },
    { name: "TikTok", href: site.social?.tiktok },
    // เพิ่ม LINE (ไปหน้าแชท)
    { name: "LINE", href: lineProfileUrl(site.line) },
  ].filter((s) => !!s.href);

  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <Image
                src={site.logo || "/logo.png"}
                alt={site.name}
                width={40}
                height={40}
                className="me-2 rounded-circle"
              />
              <h5 className="mb-0">{site.name}</h5>
            </div>
            <p className="text-secondary mb-2">
              เอเจนซี่โฆษณาออนไลน์ เน้นผลลัพธ์ วัดผลได้จริง
            </p>
            {site.address && (
              <p className="text-secondary mb-0">ที่อยู่: {site.address}</p>
            )}
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">ลิงก์ด่วน</h6>
            <ul className="list-unstyled mb-0">
              <li><Link href="/services" className="link-light text-decoration-none">บริการ</Link></li>
              <li><Link href="/packages" className="link-light text-decoration-none">แพ็กเกจ</Link></li>
              <li><Link href="/courses" className="link-light text-decoration-none">คอร์ส</Link></li>
              <li><Link href="/blog" className="link-light text-decoration-none">บทความ</Link></li>
              <li><Link href="/contact" className="link-light text-decoration-none">ติดต่อ</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">ติดต่อเรา</h6>
            <ul className="list-unstyled">
              {site.phone && (
                <li className="mb-1">
                  โทร: <a className="link-light" href={`tel:${site.phone}`}>{site.phone}</a>
                </li>
              )}
              {site.email && (
                <li className="mb-1">
                  อีเมล: <a className="link-light" href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {site.line && (
                <li className="mb-1">
                  LINE: <a className="link-light" href={lineProfileUrl(site.line)} target="_blank" rel="noreferrer">
                    {site.line}
                  </a>
                </li>
              )}
            </ul>

            {socials.length > 0 && (
              <>
                <h6 className="fw-bold mt-3">ติดตามเรา</h6>
                <div className="d-flex gap-3 flex-wrap">
                  {socials.map((s) => (
                    <a key={s.name} className="link-light" href={s.href} target="_blank" rel="noreferrer">
                      {s.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-top border-secondary">
        <div className="container d-flex flex-column flex-md-row justify-content-between py-3">
          <small className="text-secondary">
            © {year} {site.name}. All rights reserved.
          </small>
          <div className="d-flex gap-3">
            <Link className="text-secondary text-decoration-none" href="/privacy">Privacy</Link>
            <Link className="text-secondary text-decoration-none" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
