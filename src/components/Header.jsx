// src/components/Header.jsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/* === Inline SVG Icons (แทน lucide-react) === */
function IconPhone(props){ return (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92z"/>
  </svg>
);}
function IconLineChart(props){ return (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/>
  </svg>
);}
function IconMessage(props){ return (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 5V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
  </svg>
);}
/* Hamburger icon (SVG) */
function IconBurger(props){ return (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);}

/* === Header (Desktop + Mobile Offcanvas) === */
export default function Header() {
  return (
    <header className="border-bottom bg-white sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Brand */}
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image src={site.logo || "/logo.png"} alt={site.name} width={36} height={36} className="me-2 rounded-circle" />
          <span className="fw-bold text-dark">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="d-none d-lg-flex gap-3 align-items-center">
          <Link href="/services" className="text-secondary text-decoration-none">
            <span className="me-1 align-middle"><IconLineChart /></span> บริการ
          </Link>
          <Link href="/packages" className="text-secondary text-decoration-none">แพ็กเกจ</Link>
          <Link href="/courses" className="text-secondary text-decoration-none">คอร์ส</Link>
          <Link href="/blog" className="text-secondary text-decoration-none">บทความ</Link>
          <Link href="/contact" className="text-secondary text-decoration-none">ติดต่อเรา</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          {site.phone && (
            <a href={`tel:${site.phone}`} className="btn btn-light border">
              <IconPhone className="me-2" /> {site.phone}
            </a>
          )}
          <Link href="/packages" className="btn btn-primary">
            <IconMessage className="me-2" /> ดูแพ็กเกจ
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="btn d-lg-none"
          type="button"
          aria-label="เปิดเมนู"
          data-bs-toggle="offcanvas"
          data-bs-target="#mainNavOffcanvas"
        >
          <IconBurger />
        </button>
      </div>

      {/* Mobile offcanvas menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="mainNavOffcanvas"
        aria-labelledby="mainNavOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <div className="d-flex align-items-center">
            <Image src={site.logo || "/logo.png"} alt={site.name} width={32} height={32} className="me-2 rounded-circle" />
            <h5 className="offcanvas-title mb-0" id="mainNavOffcanvasLabel">{site.name}</h5>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="ปิดเมนู"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <ul className="list-unstyled fs-6">
            <li className="mb-2"><Link href="/services" className="text-decoration-none" data-bs-dismiss="offcanvas">บริการ</Link></li>
            <li className="mb-2"><Link href="/packages" className="text-decoration-none" data-bs-dismiss="offcanvas">แพ็กเกจ</Link></li>
            <li className="mb-2"><Link href="/courses" className="text-decoration-none" data-bs-dismiss="offcanvas">คอร์ส</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-decoration-none" data-bs-dismiss="offcanvas">บทความ</Link></li>
            <li className="mb-2"><Link href="/contact" className="text-decoration-none" data-bs-dismiss="offcanvas">ติดต่อเรา</Link></li>
          </ul>

          <div className="mt-auto d-grid gap-2">
            {site.phone && (
              <a href={`tel:${site.phone}`} className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">
                <IconPhone className="me-2" /> โทร {site.phone}
              </a>
            )}
            <Link href="/packages" className="btn btn-primary" data-bs-dismiss="offcanvas">
              <IconMessage className="me-2" /> ดูแพ็กเกจ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
